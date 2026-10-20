import React, { useState, useRef, useEffect, useCallback } from 'react';
import { WheelSlice, WHEEL_SLICES } from '../data/themes';
import { sound } from '../utils/sound';

interface RouletteWheelProps {
  onSpinComplete: (slice: WheelSlice) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
}

const getLineFontSize = (line: string): number => {
  if (line.length >= 14) return 10;
  if (line.length >= 11) return 11;
  if (line.length >= 8) return 12;
  return 13;
};

export const RouletteWheel: React.FC<RouletteWheelProps> = ({
  onSpinComplete,
  isSpinning,
  setIsSpinning,
}) => {
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [pointerWiggle, setPointerWiggle] = useState<boolean>(false);
  const [highlightSliceIndex, setHighlightSliceIndex] = useState<number | null>(null);

  const numSlices = WHEEL_SLICES.length; // 7 slices
  const sliceAngle = 360 / numSlices; // ~51.42857 degrees
  const currentRotationRef = useRef<number>(0);
  const lastTickAngleRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  // SVG dimensions
  const size = 520;
  const center = size / 2;
  const radius = center - 18;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Spin handler
  const handleSpin = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setHighlightSliceIndex(null);

    // Pick a random slice to land on
    const targetSliceIndex = Math.floor(Math.random() * numSlices);
    
    // Calculate the target rotation so the top pointer (at 270 deg / top 12 o'clock) lands on target slice
    // Slice i spans from [i * sliceAngle, (i + 1) * sliceAngle].
    // Center of slice i is (i + 0.5) * sliceAngle.
    // The pointer is at the very top (90 degrees counter-clockwise from 0, or 270 deg in standard SVG).
    // Let's position the wheel so 0 deg is at the top (12 o'clock).
    // Center of slice i relative to 12 o'clock is: (i + 0.5) * sliceAngle.
    // When wheel rotates by R degrees clockwise, the angle at the top becomes (-R % 360).
    // So to align slice center with top: -R = (i + 0.5) * sliceAngle => R = -(i + 0.5) * sliceAngle + 360*k.
    // Or in clockwise rotation:
    const randomOffsetInSlice = (Math.random() - 0.5) * (sliceAngle * 0.7); // within the middle 70%
    const targetCenter = (targetSliceIndex + 0.5) * sliceAngle + randomOffsetInSlice;
    
    // Spin between 6 and 9 full turns plus target alignment
    const fullTurns = 6 + Math.floor(Math.random() * 3);
    const startRotation = currentRotationRef.current;
    
    // Normalize current rotation
    const normalizedStart = startRotation % 360;
    // We want (finalRotation % 360) to align with (360 - targetCenter)
    const targetNormalized = (360 - targetCenter + 360) % 360;
    let delta = targetNormalized - normalizedStart;
    if (delta <= 0) {
      delta += 360;
    }
    const totalSpinDelta = fullTurns * 360 + delta;
    const finalRotation = startRotation + totalSpinDelta;

    const duration = 4800; // ms
    const startTime = performance.now();
    lastTickAngleRef.current = startRotation;

    const cubicBezier = (t: number): number => {
      // Ease-out cubic: 1 - Math.pow(1 - t, 3) or custom quintic
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = cubicBezier(progress);

      const newRotation = startRotation + totalSpinDelta * easedProgress;
      currentRotationRef.current = newRotation;
      setCurrentRotation(newRotation);

      // Check for tick sound whenever we cross a slice boundary
      const angleDiff = Math.abs(newRotation - lastTickAngleRef.current);
      if (angleDiff >= sliceAngle) {
        sound.playTick();
        lastTickAngleRef.current = newRotation;
        setPointerWiggle(true);
        setTimeout(() => setPointerWiggle(false), 80);
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Spin finished!
        setIsSpinning(false);
        setHighlightSliceIndex(targetSliceIndex);
        
        const landedSlice = WHEEL_SLICES[targetSliceIndex];
        if (landedSlice.id === 'crown') {
          sound.playCrown();
        } else {
          sound.playWheelStop();
        }

        // Slight pause for player to appreciate the landed slice before opening modal
        setTimeout(() => {
          onSpinComplete(landedSlice);
        }, 850);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isSpinning, numSlices, sliceAngle, setIsSpinning, onSpinComplete]);

  // Convert polar to cartesian coordinates
  const polarToCartesian = (centerX: number, centerY: number, r: number, angleInDegrees: number) => {
    // 0 degrees is at 12 o'clock (top)
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + r * Math.cos(angleInRadians),
      y: centerY + r * Math.sin(angleInRadians),
    };
  };

  // Generate SVG slice path
  const describeArc = (x: number, y: number, r: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M', x, y,
      'L', start.x, start.y,
      'A', r, r, 0, largeArcFlag, 0, end.x, end.y,
      'Z',
    ].join(' ');
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-3 select-none">
      {/* Container with gentle ambient glow */}
      <div className="relative w-full max-w-[460px] md:max-w-[500px] aspect-square flex items-center justify-center">
        
        {/* Pointer at the top (12 o'clock) */}
        <div 
          className={`absolute -top-3 z-30 transition-transform duration-75 origin-top ${
            pointerWiggle ? '-rotate-12 scale-110' : 'rotate-0'
          }`}
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
        >
          <svg width="46" height="58" viewBox="0 0 46 58" fill="none">
            {/* Pointer shadow / base */}
            <path
              d="M23 56L6 14C4 9 8 3 13 3H33C38 3 42 9 40 14L23 56Z"
              fill="#E11D48"
              stroke="#FFFFFF"
              strokeWidth="3.5"
            />
            {/* Pointer inner gem */}
            <circle cx="23" cy="18" r="7" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>

        {/* Outer Wheel Rim */}
        <div className="w-full h-full rounded-full p-2 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-[0_12px_36px_rgba(15,23,42,0.25)] border-4 border-slate-100 flex items-center justify-center">
          
          {/* Rotating SVG Wheel */}
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full rounded-full cursor-pointer"
            style={{
              transform: `rotate(${currentRotation}deg)`,
              willChange: 'transform',
            }}
            onClick={!isSpinning ? handleSpin : undefined}
          >
            <defs>
              {/* Outer decorative ring pattern */}
              <filter id="sliceShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Slices */}
            {WHEEL_SLICES.map((slice, index) => {
              const startAngle = index * sliceAngle;
              const endAngle = (index + 1) * sliceAngle;
              const midAngle = startAngle + sliceAngle / 2;
              const isHighlighted = highlightSliceIndex === index;

              // Placement for icon, text and number badge
              const numberPos = polarToCartesian(center, center, radius * 0.90, midAngle);
              const iconPos = polarToCartesian(center, center, radius * 0.74, midAngle);
              const textPos = polarToCartesian(center, center, radius * 0.49, midAngle);

              const lines = slice.lines && slice.lines.length > 0 ? slice.lines : [slice.label];

              return (
                <g key={slice.id} className="transition-opacity duration-300">
                  {/* Slice Path */}
                  <path
                    d={describeArc(center, center, radius, startAngle, endAngle)}
                    fill={slice.color}
                    stroke="#FFFFFF"
                    strokeWidth="3.5"
                    className={isHighlighted ? 'brightness-110 filter drop-shadow-md' : ''}
                  />

                  {/* Slice Number Badge (if numbered) */}
                  {slice.number && (
                    <g transform={`translate(${numberPos.x}, ${numberPos.y}) rotate(${midAngle})`}>
                      <circle cx="0" cy="0" r="13" fill="#0F172A" opacity="0.25" />
                      <circle cx="0" cy="0" r="11" fill="#FFFFFF" />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fill={slice.color}
                        fontSize="12"
                        fontWeight="800"
                        fontFamily="Fredoka, sans-serif"
                      >
                        {slice.number}
                      </text>
                    </g>
                  )}

                  {/* Slice Icon / Symbol */}
                  <g transform={`translate(${iconPos.x}, ${iconPos.y}) rotate(${midAngle})`}>
                    <circle cx="0" cy="0" r="20" fill="#FFFFFF" opacity="0.95" filter="url(#sliceShadow)" />
                    <text
                      x="0"
                      y="7"
                      textAnchor="middle"
                      fontSize="20"
                    >
                      {slice.icon}
                    </text>
                  </g>

                  {/* Slice Text Labels */}
                  <g transform={`translate(${textPos.x}, ${textPos.y}) rotate(${midAngle + (midAngle > 90 && midAngle < 270 ? 180 : 0)})`}>
                    {lines.map((line, lIdx) => {
                      const isSingle = lines.length === 1;
                      const yPos = isSingle 
                        ? (slice.mentor ? -6 : 1) 
                        : (lIdx === 0 ? (slice.mentor ? -11 : -6) : (slice.mentor ? 3 : 7));
                      const fontSize = getLineFontSize(line);
                      const useLengthAdjust = line.length >= 10;

                      return (
                        <text
                          key={lIdx}
                          x="0"
                          y={yPos}
                          textAnchor="middle"
                          fill={slice.textColor}
                          fontSize={fontSize}
                          fontWeight="800"
                          fontFamily="Fredoka, sans-serif"
                          letterSpacing={line.length > 12 ? '-0.02em' : '0.01em'}
                          {...(useLengthAdjust ? {
                            textLength: line.length >= 13 ? 82 : 78,
                            lengthAdjust: 'spacingAndGlyphs' as const,
                          } : {})}
                          style={{
                            paintOrder: 'stroke fill',
                            stroke: slice.color === '#FBC02D' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.65)',
                            strokeWidth: slice.color === '#FBC02D' ? '0px' : '2.5px',
                          }}
                        >
                          {line}
                        </text>
                      );
                    })}
                    
                    {slice.mentor && (
                      <g transform={`translate(0, ${lines.length === 1 ? 11 : 17})`}>
                        <rect
                          x={-34}
                          y={-8.5}
                          width={68}
                          height={15}
                          rx={7.5}
                          fill={slice.color === '#FBC02D' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.32)'}
                        />
                        <text
                          x="0"
                          y={2.5}
                          textAnchor="middle"
                          fill={slice.color === '#FBC02D' ? '#0F172A' : '#FEF08A'}
                          fontSize="9.5"
                          fontWeight="700"
                          fontFamily="Plus Jakarta Sans, sans-serif"
                          letterSpacing="0.02em"
                        >
                          {slice.mentor}
                        </text>
                      </g>
                    )}
                  </g>
                </g>
              );
            })}

            {/* Inner rim border */}
            <circle
              cx={center}
              cy={center}
              r={radius * 0.32}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="5"
              opacity="0.9"
            />
          </svg>

          {/* Central "GIRAR" Button */}
          <button
            type="button"
            onClick={handleSpin}
            disabled={isSpinning}
            aria-label="Girar a Roleta"
            className={`absolute z-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-white via-slate-50 to-amber-50 shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-4 border-amber-300 flex flex-col items-center justify-center transition-all duration-200 ${
              isSpinning
                ? 'opacity-90 scale-95 cursor-not-allowed'
                : 'hover:scale-105 active:scale-95 hover:shadow-[0_12px_28px_rgba(245,158,11,0.4)] cursor-pointer ring-4 ring-amber-400/30'
            }`}
          >
            {/* Crown graphic */}
            <span className="text-xl sm:text-2xl md:text-3xl filter drop-shadow-sm animate-bounce" style={{ animationDuration: '2s' }}>
              👑
            </span>
            <span className="text-sm sm:text-base md:text-lg font-black tracking-wider text-slate-800 font-['Fredoka'] uppercase mt-0.5">
              GIRAR
            </span>
            <span className="text-[9px] sm:text-[10px] text-amber-700 font-semibold uppercase tracking-widest">
              {isSpinning ? 'Girando...' : 'Toque aqui'}
            </span>
          </button>
        </div>
      </div>

      {/* Helper text below wheel */}
      <div className="mt-3 text-center">
        <p className="text-xs md:text-sm font-medium text-slate-600">
          Toque no botão central <strong className="text-amber-700 font-bold">GIRAR</strong> ou na roleta para sortear um tema!
        </p>
      </div>
    </div>
  );
};
