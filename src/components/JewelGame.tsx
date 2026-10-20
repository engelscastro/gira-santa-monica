import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeId, PowerType, PowerInventory } from '../types/game';
import { THEMES } from '../data/themes';
import { sound } from '../utils/sound';
import { speech } from '../utils/speech';
import confetti from 'canvas-confetti';
import { 
  Shuffle, 
  Lightbulb, 
  Trophy, 
  Flame, 
  Target, 
  ArrowRightLeft, 
  Zap, 
  Bomb, 
  Sparkles, 
  X,
  PlusCircle
} from 'lucide-react';

const GRID_SIZE = 6;
const TARGET_ALIGNMENTS = 3;

const THEME_KEYS: ThemeId[] = [
  'vacinas',
  'higiene',
  'primeiros_socorros',
  'aleitamento',
  'sono_prevencao',
  'marcos_desenvolvimento',
];

interface Tile {
  id: string;
  themeId: ThemeId;
  isMatched?: boolean;
}

interface Position {
  row: number;
  col: number;
}

interface JewelGameProps {
  onMatchQuestion: (themeId: ThemeId, isSpecial: boolean) => void;
  onAddScore: (points: number) => void;
  score: number;
  powers: PowerInventory;
  onConsumePower: (power: PowerType) => void;
}

interface DragState {
  startRow: number;
  startCol: number;
  startX: number;
  startY: number;
  pointerId: number;
  hasSwapped: boolean;
}

export const JewelGame: React.FC<JewelGameProps> = ({
  onMatchQuestion,
  onAddScore,
  score,
  powers,
  onConsumePower,
}) => {
  const [board, setBoard] = useState<Tile[][]>([]);
  const [selectedPos, setSelectedPos] = useState<Position | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [combosCount, setCombosCount] = useState<number>(0);
  const [hintPos, setHintPos] = useState<[Position, Position] | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  // Active power-up targeting state
  const [activePower, setActivePower] = useState<PowerType | null>(null);
  const [hoverPos, setHoverPos] = useState<Position | null>(null);

  const [activeNotification, setActiveNotification] = useState<{
    text: string;
    subtext?: string;
    themeId?: ThemeId;
    isMilestone?: boolean;
    isPower?: boolean;
  } | null>(null);

  // Counter of alignments (0 to 3) for each of the 6 themes
  const [themeAlignments, setThemeAlignments] = useState<Record<ThemeId, number>>({
    vacinas: 0,
    higiene: 0,
    primeiros_socorros: 0,
    aleitamento: 0,
    sono_prevencao: 0,
    marcos_desenvolvimento: 0,
  });

  // Total all-time match count for each theme
  const [axisStats, setAxisStats] = useState<Record<ThemeId, number>>({
    vacinas: 0,
    higiene: 0,
    primeiros_socorros: 0,
    aleitamento: 0,
    sono_prevencao: 0,
    marcos_desenvolvimento: 0,
  });

  // Dragging gesture tracking
  const dragStateRef = useRef<DragState | null>(null);
  const [dragOffset, setDragOffset] = useState<{ row: number; col: number; dx: number; dy: number } | null>(null);

  // Unique key counter for tiles
  const tileCounter = useRef<number>(1);

  // Helper to generate a random tile
  const createRandomTile = useCallback((): Tile => {
    const randomTheme = THEME_KEYS[Math.floor(Math.random() * THEME_KEYS.length)];
    return {
      id: `tile_${tileCounter.current++}`,
      themeId: randomTheme,
    };
  }, []);

  // Check if position forms a 3-in-a-row initially
  const causesInitialMatch = (currentBoard: Tile[][], row: number, col: number, theme: ThemeId): boolean => {
    if (col >= 2 && currentBoard[row]?.[col - 1]?.themeId === theme && currentBoard[row]?.[col - 2]?.themeId === theme) {
      return true;
    }
    if (row >= 2 && currentBoard[row - 1]?.[col]?.themeId === theme && currentBoard[row - 2]?.[col]?.themeId === theme) {
      return true;
    }
    return false;
  };

  // Generate initial stable board without pre-existing matches
  const generateInitialBoard = useCallback((): Tile[][] => {
    const newBoard: Tile[][] = [];
    for (let r = 0; r < GRID_SIZE; r++) {
      const row: Tile[] = [];
      for (let c = 0; c < GRID_SIZE; c++) {
        let tile = createRandomTile();
        let attempts = 0;
        while (causesInitialMatch(newBoard, r, c, tile.themeId) && attempts < 20) {
          tile = createRandomTile();
          attempts++;
        }
        row.push(tile);
      }
      newBoard.push(row);
    }
    return newBoard;
  }, [createRandomTile]);

  // Init board on mount
  useEffect(() => {
    setBoard(generateInitialBoard());
  }, [generateInitialBoard]);

  // Find all matches on the board with multi-theme support
  const findMatches = (currentBoard: Tile[][]): {
    matchedCoords: Set<string>;
    themeCounts: Record<ThemeId, number>;
    hasAnyMatch: boolean;
  } => {
    const matchedCoords = new Set<string>();
    const themeCounts: Record<ThemeId, number> = {
      vacinas: 0,
      higiene: 0,
      primeiros_socorros: 0,
      aleitamento: 0,
      sono_prevencao: 0,
      marcos_desenvolvimento: 0,
    };

    // Horizontal check
    for (let r = 0; r < GRID_SIZE; r++) {
      let c = 0;
      while (c < GRID_SIZE) {
        const theme = currentBoard[r][c]?.themeId;
        if (!theme) {
          c++;
          continue;
        }
        let matchLen = 1;
        while (c + matchLen < GRID_SIZE && currentBoard[r][c + matchLen]?.themeId === theme) {
          matchLen++;
        }
        if (matchLen >= 3) {
          for (let i = 0; i < matchLen; i++) {
            matchedCoords.add(`${r},${c + i}`);
          }
          themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        }
        c += matchLen;
      }
    }

    // Vertical check
    for (let c = 0; c < GRID_SIZE; c++) {
      let r = 0;
      while (r < GRID_SIZE) {
        const theme = currentBoard[r][c]?.themeId;
        if (!theme) {
          r++;
          continue;
        }
        let matchLen = 1;
        while (r + matchLen < GRID_SIZE && currentBoard[r + matchLen][c]?.themeId === theme) {
          matchLen++;
        }
        if (matchLen >= 3) {
          for (let i = 0; i < matchLen; i++) {
            matchedCoords.add(`${r + i},${c}`);
          }
          themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        }
        r += matchLen;
      }
    }

    return {
      matchedCoords,
      themeCounts,
      hasAnyMatch: matchedCoords.size > 0,
    };
  };

  // Process matches: remove tiles, update 3-alignment progress, drop down, refill, and trigger question ONLY at 3
  const processBoardMatches = useCallback(
    (boardToProcess: Tile[][], cascadeLevel = 1) => {
      const { matchedCoords, themeCounts, hasAnyMatch } = findMatches(boardToProcess);

      if (!hasAnyMatch) {
        setIsProcessing(false);
        return;
      }

      setIsProcessing(true);
      setCombosCount((prev) => prev + 1);

      // Sound and points
      sound.playJewelMatch(cascadeLevel);
      const pointsEarned = matchedCoords.size >= 4 ? 60 : 30;
      onAddScore(pointsEarned);

      // Update all-time stats
      setAxisStats((prev) => {
        const updated = { ...prev };
        THEME_KEYS.forEach((key) => {
          if (themeCounts[key] > 0) {
            updated[key] = (updated[key] || 0) + themeCounts[key];
          }
        });
        return updated;
      });

      // Calculate new 3-alignment counter and check if any theme reached the 3-alignment threshold
      let unlockedTheme: ThemeId | null = null;
      let notificationData: { text: string; subtext: string; themeId: ThemeId; isMilestone: boolean } | null = null;

      setThemeAlignments((prev) => {
        const updated = { ...prev };

        THEME_KEYS.forEach((key) => {
          const added = themeCounts[key] || 0;
          if (added > 0) {
            const currentTotal = updated[key] + added;
            const themeMeta = THEMES[key];

            if (currentTotal >= TARGET_ALIGNMENTS) {
              // Reached 3 alignments! Unlock question!
              unlockedTheme = key;
              updated[key] = 0; // Reset counter for next round
              notificationData = {
                themeId: key,
                text: `🎉 3º Alinhamento de ${themeMeta.shortName}!`,
                subtext: `Meta de 3 concluída! Lançando a pergunta oficial com ${themeMeta.mentor}...`,
                isMilestone: true,
              };
            } else {
              // Not reached 3 yet: 1/3 or 2/3
              updated[key] = currentTotal;
              const remaining = TARGET_ALIGNMENTS - currentTotal;
              notificationData = {
                themeId: key,
                text: `${themeMeta.badgeSymbol} ${themeMeta.shortName}: ${currentTotal} de 3 alinhamentos`,
                subtext: `Falta ${remaining === 1 ? 'apenas 1 alinhamento' : `${remaining} alinhamentos`} para liberar a pergunta!`,
                isMilestone: false,
              };
            }
          }
        });

        return updated;
      });

      if (notificationData) {
        setActiveNotification(notificationData);
      }

      // Mark matched tiles for pop animation
      const markedBoard = boardToProcess.map((row, r) =>
        row.map((tile, c) => ({
          ...tile,
          isMatched: matchedCoords.has(`${r},${c}`),
        }))
      );
      setBoard(markedBoard);

      // Confetti burst on 3-alignment milestone
      if (unlockedTheme) {
        sound.playCrown();
        confetti({
          particleCount: 80,
          spread: 75,
          origin: { y: 0.6 },
        });
      }

      // After pop delay, cascade tiles down
      setTimeout(() => {
        const newBoard: Tile[][] = [];
        for (let r = 0; r < GRID_SIZE; r++) {
          newBoard.push([...boardToProcess[r]]);
        }

        // Drop down columns
        for (let c = 0; c < GRID_SIZE; c++) {
          const colRemaining: Tile[] = [];
          for (let r = GRID_SIZE - 1; r >= 0; r--) {
            if (!matchedCoords.has(`${r},${c}`)) {
              colRemaining.unshift(boardToProcess[r][c]);
            }
          }
          // Fill top with new tiles
          while (colRemaining.length < GRID_SIZE) {
            colRemaining.unshift(createRandomTile());
          }
          for (let r = 0; r < GRID_SIZE; r++) {
            newBoard[r][c] = colRemaining[r];
          }
        }

        setBoard(newBoard);

        // Check if cascade creates another match
        const nextCheck = findMatches(newBoard);
        if (nextCheck.hasAnyMatch) {
          // Cascade continues
          setTimeout(() => {
            processBoardMatches(newBoard, cascadeLevel + 1);
          }, 250);
        } else {
          setIsProcessing(false);
        }

        // If a theme hit 3 alignments, launch the official question modal!
        if (unlockedTheme) {
          const themeMeta = THEMES[unlockedTheme];
          speech.speak(
            `Parabéns! Você completou 3 alinhamentos de ${themeMeta.name}! Lançando a pergunta oficial da Maternidade Santa Mônica com a mentora ${themeMeta.mentor}!`
          );

          setTimeout(() => {
            onMatchQuestion(unlockedTheme!, matchedCoords.size >= 4);
          }, 800);
        }
      }, 320);
    },
    [createRandomTile, onAddScore, onMatchQuestion]
  );

  // Check if two positions are orthogonal neighbors
  const isAdjacent = (p1: Position, p2: Position): boolean => {
    const rowDiff = Math.abs(p1.row - p2.row);
    const colDiff = Math.abs(p1.col - p2.col);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  };

  // Execute swap attempt between two cells
  const trySwap = useCallback(
    (p1: Position, p2: Position) => {
      if (isProcessing || activePower) return;
      if (!isAdjacent(p1, p2)) return;

      setSelectedPos(null);
      setHintPos(null);
      sound.playJewelSwap();

      // Create swapped board
      const swappedBoard = board.map((r) => [...r]);
      const temp = swappedBoard[p1.row][p1.col];
      swappedBoard[p1.row][p1.col] = swappedBoard[p2.row][p2.col];
      swappedBoard[p2.row][p2.col] = temp;

      setBoard(swappedBoard);

      // Check if swap made a match
      const { hasAnyMatch } = findMatches(swappedBoard);

      if (hasAnyMatch) {
        // Valid move! Process matches
        processBoardMatches(swappedBoard);
      } else {
        // Invalid move! Revert after brief bounce
        setIsProcessing(true);
        setTimeout(() => {
          sound.playWrong();
          const revertedBoard = swappedBoard.map((r) => [...r]);
          const revTemp = revertedBoard[p1.row][p1.col];
          revertedBoard[p1.row][p1.col] = revertedBoard[p2.row][p2.col];
          revertedBoard[p2.row][p2.col] = revTemp;
          setBoard(revertedBoard);
          setIsProcessing(false);
        }, 260);
      }
    },
    [board, isProcessing, activePower, processBoardMatches]
  );

  // Calculate blast coordinates for targeting preview and detonation
  const getBlastPositions = useCallback(
    (power: PowerType, target: Position): Position[] => {
      const positions: Position[] = [];

      if (power === 'ROW_BLAST') {
        // All tiles in the targeted row
        for (let c = 0; c < GRID_SIZE; c++) {
          positions.push({ row: target.row, col: c });
        }
      } else if (power === 'BOMB_SQUARE') {
        // 3x3 square centered around target
        for (let r = target.row - 1; r <= target.row + 1; r++) {
          for (let c = target.col - 1; c <= target.col + 1; c++) {
            if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
              positions.push({ row: r, col: c });
            }
          }
        }
      } else if (power === 'CROSS_BLAST') {
        // Entire row AND entire column in cross shape
        for (let c = 0; c < GRID_SIZE; c++) {
          positions.push({ row: target.row, col: c });
        }
        for (let r = 0; r < GRID_SIZE; r++) {
          if (r !== target.row) {
            positions.push({ row: r, col: target.col });
          }
        }
      }

      return positions;
    },
    []
  );

  // Detonate a special power-up!
  const detonatePower = useCallback(
    (power: PowerType, targetRow: number, targetCol: number) => {
      if (isProcessing) return;

      const blastPositions = getBlastPositions(power, { row: targetRow, col: targetCol });
      if (blastPositions.length === 0) return;

      setIsProcessing(true);
      setActivePower(null);
      setHoverPos(null);
      setSelectedPos(null);
      setHintPos(null);

      // Consume 1 power count
      onConsumePower(power);

      // Screen shake effect
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 450);

      // Play specific sound
      if (power === 'ROW_BLAST') {
        sound.playLaserRow();
      } else if (power === 'BOMB_SQUARE') {
        sound.playBombBlast();
      } else {
        sound.playCrossBlast();
      }

      // Confetti burst
      confetti({
        particleCount: power === 'CROSS_BLAST' ? 90 : 60,
        spread: 80,
        origin: { y: 0.6 },
      });

      // Bonus points
      const powerPoints = power === 'CROSS_BLAST' ? 250 : power === 'BOMB_SQUARE' ? 180 : 120;
      onAddScore(powerPoints);

      // Identify destroyed themes to add to stats & alignments
      const destroyedThemeCounts: Record<ThemeId, number> = {
        vacinas: 0,
        higiene: 0,
        primeiros_socorros: 0,
        aleitamento: 0,
        sono_prevencao: 0,
        marcos_desenvolvimento: 0,
      };

      blastPositions.forEach((p) => {
        const theme = board[p.row]?.[p.col]?.themeId;
        if (theme) {
          destroyedThemeCounts[theme] = (destroyedThemeCounts[theme] || 0) + 1;
        }
      });

      // Update all-time stats
      setAxisStats((prev) => {
        const updated = { ...prev };
        THEME_KEYS.forEach((key) => {
          if (destroyedThemeCounts[key] > 0) {
            updated[key] = (updated[key] || 0) + 1;
          }
        });
        return updated;
      });

      // Check if blast destroyed 3 or more of the same theme to advance alignment counter
      THEME_KEYS.forEach((key) => {
        if (destroyedThemeCounts[key] >= 3) {
          setThemeAlignments((prev) => ({
            ...prev,
            [key]: Math.min(TARGET_ALIGNMENTS, prev[key] + 1),
          }));
        }
      });

      // Notification banner for the power
      const powerName =
        power === 'ROW_BLAST'
          ? '⚡ Raio Laser de Linha'
          : power === 'BOMB_SQUARE'
          ? '💣 Bomba Quadrada 3x3'
          : '💥 Super Raio Cruzado';
      setActiveNotification({
        text: `${powerName} Detonado!`,
        subtext: `+${powerPoints} pontos somados e ${blastPositions.length} joias vaporizadas!`,
        isPower: true,
      });

      // Mark destroyed tiles
      const blastSet = new Set(blastPositions.map((p) => `${p.row},${p.col}`));
      const markedBoard = board.map((row, r) =>
        row.map((tile, c) => ({
          ...tile,
          isMatched: blastSet.has(`${r},${c}`),
        }))
      );
      setBoard(markedBoard);

      // Cascade down after blast
      setTimeout(() => {
        const newBoard: Tile[][] = [];
        for (let r = 0; r < GRID_SIZE; r++) {
          newBoard.push([...board[r]]);
        }

        // Drop down columns
        for (let c = 0; c < GRID_SIZE; c++) {
          const colRemaining: Tile[] = [];
          for (let r = GRID_SIZE - 1; r >= 0; r--) {
            if (!blastSet.has(`${r},${c}`)) {
              colRemaining.unshift(board[r][c]);
            }
          }
          // Fill top with new tiles
          while (colRemaining.length < GRID_SIZE) {
            colRemaining.unshift(createRandomTile());
          }
          for (let r = 0; r < GRID_SIZE; r++) {
            newBoard[r][c] = colRemaining[r];
          }
        }

        setBoard(newBoard);

        // Check if cascade creates another match
        const nextCheck = findMatches(newBoard);
        if (nextCheck.hasAnyMatch) {
          setTimeout(() => {
            processBoardMatches(newBoard, 2);
          }, 250);
        } else {
          setIsProcessing(false);
        }
      }, 340);
    },
    [board, isProcessing, getBlastPositions, onConsumePower, onAddScore, createRandomTile, processBoardMatches]
  );

  // Handle tile click & swap logic OR power detonation
  const handleTileClick = (row: number, col: number) => {
    if (isProcessing) return;

    // If power targeting is active, detonate it here!
    if (activePower) {
      detonatePower(activePower, row, col);
      return;
    }

    setHintPos(null);

    // If no tile selected yet, select this one
    if (!selectedPos) {
      sound.playJewelSelect();
      setSelectedPos({ row, col });
      return;
    }

    // If clicking same tile, deselect
    if (selectedPos.row === row && selectedPos.col === col) {
      setSelectedPos(null);
      return;
    }

    // If adjacent, try swap!
    if (isAdjacent(selectedPos, { row, col })) {
      trySwap(selectedPos, { row, col });
      return;
    }

    // Otherwise, select the newly clicked tile
    sound.playJewelSelect();
    setSelectedPos({ row, col });
  };

  // Dragging gesture handlers (Pointer Events for both mouse and touch drag)
  const handlePointerDown = (row: number, col: number, e: React.PointerEvent) => {
    if (isProcessing) return;

    // If active power targeting, trigger detonation immediately on pointer down or up
    if (activePower) {
      detonatePower(activePower, row, col);
      return;
    }

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    dragStateRef.current = {
      startRow: row,
      startCol: col,
      startX: e.clientX,
      startY: e.clientY,
      pointerId: e.pointerId,
      hasSwapped: false,
    };

    setDragOffset({ row, col, dx: 0, dy: 0 });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // If power targeting is active, update hover position for preview
    if (activePower) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      const colWidth = rect.width / GRID_SIZE;
      const rowHeight = rect.height / GRID_SIZE;
      const hCol = Math.max(0, Math.min(GRID_SIZE - 1, Math.floor(relativeX / colWidth)));
      const hRow = Math.max(0, Math.min(GRID_SIZE - 1, Math.floor(relativeY / rowHeight)));
      setHoverPos({ row: hRow, col: hCol });
      return;
    }

    const drag = dragStateRef.current;
    if (!drag || drag.hasSwapped || isProcessing) return;

    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    const dist = Math.hypot(dx, dy);

    // Visual drag tilt/offset
    setDragOffset({
      row: drag.startRow,
      col: drag.startCol,
      dx: Math.max(-28, Math.min(28, dx)),
      dy: Math.max(-28, Math.min(28, dy)),
    });

    // When dragged at least 22px, detect direction and execute swap!
    if (dist >= 22) {
      drag.hasSwapped = true;
      setDragOffset(null);

      let targetRow = drag.startRow;
      let targetCol = drag.startCol;

      if (Math.abs(dx) > Math.abs(dy)) {
        targetCol = dx > 0 ? drag.startCol + 1 : drag.startCol - 1;
      } else {
        targetRow = dy > 0 ? drag.startRow + 1 : drag.startRow - 1;
      }

      // Check bounds
      if (targetRow >= 0 && targetRow < GRID_SIZE && targetCol >= 0 && targetCol < GRID_SIZE) {
        trySwap({ row: drag.startRow, col: drag.startCol }, { row: targetRow, col: targetCol });
      }
    }
  };

  const handlePointerUp = (row: number, col: number, e: React.PointerEvent) => {
    if (activePower) return;

    const drag = dragStateRef.current;
    dragStateRef.current = null;
    setDragOffset(null);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // If pointer was released without a significant drag, treat as a click/tap
    if (drag && !drag.hasSwapped) {
      const totalDist = Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY);
      if (totalDist < 12) {
        handleTileClick(row, col);
      }
    }
  };

  const handlePointerCancel = () => {
    dragStateRef.current = null;
    setDragOffset(null);
  };

  // Find a valid move for Hint
  const handleFindHint = () => {
    if (isProcessing || board.length === 0) return;

    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        // Try swapping with right neighbor
        if (c < GRID_SIZE - 1) {
          const testBoard = board.map((row) => [...row]);
          const t = testBoard[r][c];
          testBoard[r][c] = testBoard[r][c + 1];
          testBoard[r][c + 1] = t;
          if (findMatches(testBoard).hasAnyMatch) {
            setHintPos([{ row: r, col: c }, { row: r, col: c + 1 }]);
            sound.playTick();
            return;
          }
        }
        // Try swapping with bottom neighbor
        if (r < GRID_SIZE - 1) {
          const testBoard = board.map((row) => [...row]);
          const t = testBoard[r][c];
          testBoard[r][c] = testBoard[r + 1][c];
          testBoard[r + 1][c] = t;
          if (findMatches(testBoard).hasAnyMatch) {
            setHintPos([{ row: r, col: c }, { row: r + 1, col: c }]);
            sound.playTick();
            return;
          }
        }
      }
    }

    // No matches found, reshuffle!
    handleReshuffle();
  };

  const handleReshuffle = () => {
    sound.playJewelSwap();
    setSelectedPos(null);
    setHintPos(null);
    setActivePower(null);
    setBoard(generateInitialBoard());
  };

  // Select or toggle a power-up
  const handleTogglePower = (power: PowerType) => {
    if (isProcessing) return;

    const count =
      power === 'ROW_BLAST'
        ? powers.rowBlast
        : power === 'BOMB_SQUARE'
        ? powers.bombSquare
        : powers.crossBlast;

    if (count <= 0) {
      sound.playWrong();
      setActiveNotification({
        text: 'Sem cargas deste poder!',
        subtext: 'Responda perguntas corretamente no Quiz ou na Roleta para ganhar mais poderes!',
        isPower: true,
      });
      return;
    }

    if (activePower === power) {
      // Deselect
      setActivePower(null);
      setHoverPos(null);
      sound.playJewelSelect();
    } else {
      // Activate targeting mode
      setActivePower(power);
      setSelectedPos(null);
      setHintPos(null);
      sound.playJewelSelect();

      const name =
        power === 'ROW_BLAST'
          ? 'Raio Laser de Linha'
          : power === 'BOMB_SQUARE'
          ? 'Bomba Quadrada 3x3'
          : 'Super Raio Cruzado';

      setActiveNotification({
        text: `🎯 Alvo: ${name}`,
        subtext: 'Toque na joia do tabuleiro onde deseja detonar este poder!',
        isPower: true,
      });
    }
  };

  // Pre-calculate positions that are inside the targeting blast zone
  const activeBlastPositions = activePower && hoverPos ? getBlastPositions(activePower, hoverPos) : [];
  const activeBlastSet = new Set(activeBlastPositions.map((p) => `${p.row},${p.col}`));

  return (
    <div className="w-full max-w-5xl mx-auto space-y-5 animate-fade-in select-none">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-indigo-900 rounded-3xl p-5 sm:p-6 text-white shadow-md border-2 border-teal-300/40 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/30 text-[11px] font-black uppercase tracking-wider text-teal-200 flex items-center gap-1">
                <Target className="w-3 h-3 text-amber-300" /> 3 Alinhamentos = Pergunta
              </span>
              <span className="text-xs font-semibold text-teal-100">
                Maternidade Santa Mônica
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Fredoka'] tracking-tight flex items-center gap-2">
              <span>💎</span>
              <span>Joias dos 6 Eixos com Super Poderes</span>
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl leading-relaxed">
              Arraste as joias para combinar! Acertar perguntas no Quiz concede <strong>poderes especiais de destruição de linha e explosão em quadrado</strong> para detonar no tabuleiro!
            </p>
          </div>

          {/* Quick Action Controls */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleFindHint}
                disabled={isProcessing || activePower !== null}
                className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all border border-white/20 active:scale-95 disabled:opacity-50"
                title="Mostrar dica de movimento"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
                <span>Dica</span>
              </button>

              <button
                type="button"
                onClick={handleReshuffle}
                disabled={isProcessing}
                className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all border border-white/20 active:scale-95"
                title="Embaralhar o tabuleiro"
              >
                <Shuffle className="w-3.5 h-3.5 text-teal-200" />
                <span>Embaralhar</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-teal-200 bg-black/25 px-3 py-1 rounded-xl tabular-nums">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{combosCount} {combosCount === 1 ? 'combo' : 'combos'}</span>
            </div>
          </div>
        </div>
      </div>



      {/* Real-time Status / Notification Alert Bar */}
      {activeNotification && (
        <div 
          className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs transition-all shadow-sm ${
            activeNotification.isPower
              ? 'bg-amber-500/20 border-amber-400 text-amber-950 ring-2 ring-amber-400/60 animate-pulse'
              : activeNotification.isMilestone
              ? 'bg-amber-500/15 border-amber-400 text-amber-950 ring-2 ring-amber-400/50'
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {activeNotification.themeId ? (
              <span 
                className="w-8 h-8 rounded-xl flex items-center justify-center text-lg text-white font-bold shrink-0 shadow-xs"
                style={{ backgroundColor: THEMES[activeNotification.themeId].color }}
              >
                {THEMES[activeNotification.themeId].badgeSymbol}
              </span>
            ) : (
              <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
                ⚡
              </span>
            )}
            <div>
              <strong className="block text-sm font-extrabold font-['Fredoka']">
                {activeNotification.text}
              </strong>
              {activeNotification.subtext && (
                <span className="text-xs text-slate-600 block">
                  {activeNotification.subtext}
                </span>
              )}
            </div>
          </div>

          {activeNotification.themeId && (
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((step) => {
                const current = themeAlignments[activeNotification.themeId!];
                const isFilled = activeNotification.isMilestone || step <= current;
                return (
                  <span
                    key={step}
                    className={`w-3.5 h-3.5 rounded-full transition-all ${
                      isFilled
                        ? 'bg-amber-400 shadow-sm scale-110 ring-2 ring-amber-500'
                        : 'bg-slate-200'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Main Game Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Match-3 Grid */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-md flex flex-col items-center justify-center">
          
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 font-['Fredoka'] flex items-center gap-1.5">
              {activePower ? (
                <span className="text-amber-700 flex items-center gap-1.5 animate-pulse font-extrabold">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>Modo de Mira Ativo! Toque na joia para detonar</span>
                </span>
              ) : (
                <>
                  <ArrowRightLeft className="w-3.5 h-3.5 text-teal-700" />
                  <span>Arraste ou toque para trocar as peças</span>
                </>
              )}
            </span>

            <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-xl border border-teal-200">
              Objetivo: 3 trincas por eixo
            </span>
          </div>

          {/* Grid Container with touch-action none for smooth dragging & power blast */}
          <div 
            className={`bg-slate-900 p-2.5 sm:p-4 rounded-3xl shadow-xl border-4 transition-all inline-flex flex-col items-center max-w-full touch-none select-none relative ${
              isShaking ? 'scale-98 animate-shake' : ''
            } ${
              activePower
                ? 'border-amber-400 ring-4 ring-amber-400/40 cursor-crosshair'
                : 'border-slate-700/80'
            }`}
            onPointerMove={handlePointerMove}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={() => setHoverPos(null)}
          >
            <div 
              className="grid grid-cols-6 gap-1.5 sm:gap-2.5"
              style={{ width: 'fit-content' }}
            >
              {board.map((row, r) =>
                row.map((tile, c) => {
                  const isSelected = selectedPos?.row === r && selectedPos?.col === c;
                  const isHint = hintPos?.some((p) => p.row === r && p.col === c);
                  const theme = THEMES[tile.themeId];

                  const isDraggingThis = dragOffset?.row === r && dragOffset?.col === c;
                  const offsetX = isDraggingThis ? dragOffset.dx : 0;
                  const offsetY = isDraggingThis ? dragOffset.dy : 0;

                  // Power blast targeting preview
                  const isInActiveBlast = activeBlastSet.has(`${r},${c}`);
                  const isTargetCenter = hoverPos?.row === r && hoverPos?.col === c;

                  return (
                    <div
                      key={tile.id}
                      onPointerDown={(e) => handlePointerDown(r, c, e)}
                      onPointerUp={(e) => handlePointerUp(r, c, e)}
                      onMouseEnter={() => activePower && setHoverPos({ row: r, col: c })}
                      aria-label={`Peça ${theme.name} na linha ${r + 1}, coluna ${c + 1}`}
                      className={`w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl flex flex-col items-center justify-center transition-all duration-150 relative select-none shadow-sm touch-none ${
                        activePower
                          ? 'cursor-crosshair'
                          : 'cursor-grab active:cursor-grabbing'
                      } ${
                        tile.isMatched
                          ? 'scale-0 opacity-0 rotate-45'
                          : isTargetCenter
                          ? 'scale-115 ring-4 ring-amber-300 z-30 shadow-2xl brightness-125 animate-pulse'
                          : isInActiveBlast
                          ? 'scale-108 ring-4 ring-rose-400 z-20 brightness-120 animate-pulse'
                          : isSelected
                          ? 'scale-105 ring-4 ring-amber-400 z-20 shadow-lg shadow-amber-400/40 brightness-110'
                          : isHint
                          ? 'ring-2 ring-emerald-400 animate-pulse brightness-110'
                          : isDraggingThis
                          ? 'z-30 scale-110 brightness-115 shadow-xl ring-2 ring-white/80'
                          : 'hover:scale-102 hover:brightness-105'
                      }`}
                      style={{
                        backgroundColor: isInActiveBlast
                          ? activePower === 'ROW_BLAST'
                            ? '#f59e0b'
                            : activePower === 'BOMB_SQUARE'
                            ? '#ef4444'
                            : '#8b5cf6'
                          : theme.color,
                        transform: isDraggingThis ? `translate(${offsetX}px, ${offsetY}px) scale(1.08)` : undefined,
                        boxShadow: isSelected
                          ? `0 0 16px ${theme.color}`
                          : '0 4px 6px rgba(0,0,0,0.25)',
                      }}
                    >
                      {/* Gem Top Highlight */}
                      <div className="absolute top-1 left-2 right-2 h-1/3 bg-white/25 rounded-t-xl pointer-events-none" />

                      {/* Icon or Power reticle */}
                      {isTargetCenter ? (
                        <span className="text-2xl sm:text-3xl text-white font-black filter drop-shadow animate-spin">
                          🎯
                        </span>
                      ) : isInActiveBlast ? (
                        <span className="text-2xl sm:text-3xl filter drop-shadow select-none pointer-events-none animate-bounce">
                          {activePower === 'ROW_BLAST' ? '⚡' : activePower === 'BOMB_SQUARE' ? '💣' : '💥'}
                        </span>
                      ) : (
                        <span className="text-2xl sm:text-3xl md:text-4xl filter drop-shadow select-none pointer-events-none">
                          {theme.badgeSymbol}
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* ========================================================= */}
            {/* SUPER PODERES INTEGRADOS NO MESMO QUADRO DAS PEÇAS       */}
            {/* ========================================================= */}
            <div 
              className="w-full mt-3 sm:mt-4 pt-3 sm:pt-3.5 border-t border-slate-800 flex flex-col gap-2"
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
            >
              {/* Header inside the piece frame */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-lg bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 text-xs">
                    ⚡
                  </span>
                  <span className="text-xs font-black font-['Fredoka'] text-amber-300 tracking-wide">
                    Poderes da Peça
                  </span>
                </div>

                {activePower ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePower(null);
                      setHoverPos(null);
                    }}
                    className="px-2.5 py-1 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-[11px] flex items-center gap-1 cursor-pointer transition-all border border-rose-400/80 shadow-md active:scale-95 animate-pulse"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Cancelar Mira</span>
                  </button>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400">
                    Selecione para armar
                  </span>
                )}
              </div>

              {/* Aiming active feedback banner inside the piece board */}
              {activePower && (
                <div className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/60 text-amber-200 text-[11px] font-bold flex items-center justify-center gap-2 text-center animate-pulse">
                  <Target className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>
                    {activePower === 'ROW_BLAST' && '⚡ Laser Pronto: toque em qualquer joia para detonar a linha!'}
                    {activePower === 'BOMB_SQUARE' && '💣 Bomba Pronta: toque em qualquer joia para explodir o quadrado 3x3!'}
                    {activePower === 'CROSS_BLAST' && '💥 Super Cruz Pronta: toque em qualquer joia para detonar linha e coluna!'}
                  </span>
                </div>
              )}

              {/* 3 Interactive Booster Buttons */}
              <div className="grid grid-cols-3 gap-2">
                
                {/* 1. Raio Laser de Linha */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePower('ROW_BLAST');
                  }}
                  disabled={isProcessing}
                  title="Destruir Linha Inteira (Laser Horizontal)"
                  className={`p-2 sm:p-2.5 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-center justify-between text-left cursor-pointer active:scale-95 ${
                    activePower === 'ROW_BLAST'
                      ? 'bg-amber-500/35 border-amber-400 ring-2 ring-amber-400 shadow-lg shadow-amber-500/30'
                      : powers.rowBlast > 0
                      ? 'bg-slate-800/90 hover:bg-slate-800 border-amber-400/50 hover:border-amber-400'
                      : 'bg-slate-800/40 border-slate-700/60 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                    </span>
                    <div>
                      <strong className="block text-[11px] sm:text-xs font-bold text-white leading-tight">
                        Linha
                      </strong>
                      <span className="hidden sm:block text-[9px] text-amber-200/80 leading-tight">
                        Laser 1x6
                      </span>
                    </div>
                  </div>
                  <span
                    className={`mt-1 sm:mt-0 px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-black tabular-nums shrink-0 ${
                      powers.rowBlast > 0
                        ? 'bg-amber-400 text-slate-950 shadow-xs'
                        : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {powers.rowBlast}x
                  </span>
                </button>

                {/* 2. Bomba Quadrada 3x3 */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePower('BOMB_SQUARE');
                  }}
                  disabled={isProcessing}
                  title="Explodir Quadrado 3x3 (Área de 9 joias)"
                  className={`p-2 sm:p-2.5 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-center justify-between text-left cursor-pointer active:scale-95 ${
                    activePower === 'BOMB_SQUARE'
                      ? 'bg-rose-500/35 border-rose-400 ring-2 ring-rose-400 shadow-lg shadow-rose-500/30'
                      : powers.bombSquare > 0
                      ? 'bg-slate-800/90 hover:bg-slate-800 border-rose-400/50 hover:border-rose-400'
                      : 'bg-slate-800/40 border-slate-700/60 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-500/20 border border-rose-400/50 flex items-center justify-center text-rose-300 shrink-0">
                      <Bomb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-300" />
                    </span>
                    <div>
                      <strong className="block text-[11px] sm:text-xs font-bold text-white leading-tight">
                        Bomba 3x3
                      </strong>
                      <span className="hidden sm:block text-[9px] text-rose-200/80 leading-tight">
                        Área 9 joias
                      </span>
                    </div>
                  </div>
                  <span
                    className={`mt-1 sm:mt-0 px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-black tabular-nums shrink-0 ${
                      powers.bombSquare > 0
                        ? 'bg-rose-500 text-white shadow-xs'
                        : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {powers.bombSquare}x
                  </span>
                </button>

                {/* 3. Super Raio Cruzado (Linha + Coluna) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePower('CROSS_BLAST');
                  }}
                  disabled={isProcessing}
                  title="Super Cruz (Linha inteira + Coluna inteira = 11 joias)"
                  className={`p-2 sm:p-2.5 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-center justify-between text-left cursor-pointer active:scale-95 ${
                    activePower === 'CROSS_BLAST'
                      ? 'bg-indigo-500/35 border-indigo-400 ring-2 ring-indigo-400 shadow-lg shadow-indigo-500/30'
                      : powers.crossBlast > 0
                      ? 'bg-slate-800/90 hover:bg-slate-800 border-indigo-400/50 hover:border-indigo-400'
                      : 'bg-slate-800/40 border-slate-700/60 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shrink-0">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-300" />
                    </span>
                    <div>
                      <strong className="block text-[11px] sm:text-xs font-bold text-white leading-tight">
                        Super Cruz
                      </strong>
                      <span className="hidden sm:block text-[9px] text-indigo-200/80 leading-tight">
                        Linha + Coluna
                      </span>
                    </div>
                  </div>
                  <span
                    className={`mt-1 sm:mt-0 px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-black tabular-nums shrink-0 ${
                      powers.crossBlast > 0
                        ? 'bg-indigo-400 text-slate-950 shadow-xs'
                        : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {powers.crossBlast}x
                  </span>
                </button>

              </div>
            </div>
          </div>

          {/* Quick instructions bar */}
          <div className="mt-4 text-center max-w-md">
            <p className="text-xs text-slate-500 leading-relaxed">
              💡 <strong>Dica da MESM:</strong> Responda às perguntas corretas com as mentoras para abastecer seus super poderes de <strong>Laser de Linha</strong> e <strong>Bomba Quadrada 3x3</strong>!
            </p>
          </div>
        </div>

        {/* Right Column: Eixos Progress to 3 Alignments & Legend */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Eixos Progress Card */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800 font-['Fredoka'] flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>Progresso para Perguntas (0 a 3)</span>
              </h3>
              <span className="text-xs font-bold text-teal-800 tabular-nums">
                {score} pts
              </span>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Junte <strong>3 alinhamentos</strong> de um mesmo eixo para disparar a pergunta com sua mentora oficial!
            </p>

            {/* List of 6 Axes with 3-dot alignment tracker */}
            <div className="space-y-2.5 pt-1">
              {THEME_KEYS.map((key) => {
                const t = THEMES[key];
                const currentProgress = themeAlignments[key] || 0;
                const totalTrincas = axisStats[key] || 0;
                const isReady = currentProgress >= TARGET_ALIGNMENTS;

                return (
                  <div
                    key={key}
                    className={`p-3 rounded-2xl border transition-all ${
                      currentProgress > 0
                        ? 'ring-1 ring-offset-1'
                        : ''
                    }`}
                    style={{ 
                      borderColor: `${t.color}50`, 
                      backgroundColor: `${t.color}0a`,
                      outlineColor: currentProgress > 0 ? t.color : 'transparent',
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span 
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-base shadow-xs text-white shrink-0 font-bold"
                          style={{ backgroundColor: t.color }}
                        >
                          {t.badgeSymbol}
                        </span>
                        <div>
                          <strong className="block text-xs font-bold text-slate-900 leading-tight">
                            {t.shortName}
                          </strong>
                          <span className="text-[10px] text-slate-500">
                            com {t.mentor}
                          </span>
                        </div>
                      </div>

                      {/* 3 Step Visual Meter */}
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 bg-white/80 px-2 py-1 rounded-xl border border-slate-200/60 shadow-2xs">
                          {[1, 2, 3].map((step) => {
                            const isFilled = step <= currentProgress;
                            return (
                              <div
                                key={step}
                                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center text-[8px] font-bold ${
                                  isFilled
                                    ? 'shadow-xs text-white scale-105'
                                    : 'bg-slate-200 text-slate-400'
                                }`}
                                style={{
                                  backgroundColor: isFilled ? t.color : undefined,
                                }}
                              >
                                {isFilled ? '✓' : step}
                              </div>
                            );
                          })}
                        </div>
                        <span className="text-[10px] font-extrabold text-slate-600">
                          {currentProgress === 0
                            ? `${totalTrincas} ${totalTrincas === 1 ? 'trinca feita' : 'trincas'}`
                            : isReady
                            ? '🎉 Liberado!'
                            : `${currentProgress}/3 (Falta ${3 - currentProgress})`}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Educational Note about Powers & Quiz */}
          <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 text-xs text-amber-950 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <PlusCircle className="w-4 h-4 text-amber-700" />
              <span>Como Ganhar Mais Poderes?</span>
            </div>
            <p className="text-[11px] text-amber-900/90 leading-relaxed">
              Toda vez que você acertar uma pergunta de saúde (seja no <strong>Quiz da Roleta</strong> ou ao atingir <strong>3 alinhamentos</strong> nas Joias), você ganha automaticamente uma <strong>Bomba 3x3</strong>, um <strong>Raio Laser</strong> ou uma <strong>Super Cruz</strong>!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
