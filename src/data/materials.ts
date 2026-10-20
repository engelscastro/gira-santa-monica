import { ThemeId } from '../types/game';

export interface StudyTopic {
  title: string;
  mentor: string;
  themeId: ThemeId;
  highlights: string[];
  content: string[];
  officialTips: string[];
}

export const STUDY_MATERIALS: Record<ThemeId, StudyTopic> = {
  vacinas: {
    title: 'Eixo 1: Vacinas e Imunização Infantil',
    mentor: 'Clarysse',
    themeId: 'vacinas',
    highlights: [
      'BCG e Hepatite B nas primeiras horas ainda na Maternidade Santa Mônica',
      'dTpa na gestação protege o bebê contra a tosse comprida (coqueluche)',
      'VIP (Vacina Inativada da Poliomielite) injetável garante proteção segura',
      'Cicatriz da BCG: lavar no banho, nunca espremer e nunca passar pomada'
    ],
    content: [
      'A imunização é um dos maiores legados de saúde pública do Brasil através do Programa Nacional de Imunizações (PNI/SUS).',
      'Logo nas primeiras 12 a 24 horas de vida, ainda internado na Maternidade Escola Santa Mônica, o recém-nascido recebe a vacina BCG (que previne formas graves de tuberculose, como a meningite tuberculosa) e a primeira dose contra a Hepatite B.',
      'A marquinha da BCG evolui naturalmente de uma manchinha para uma pústula que forma casquinha. É normal! Não precisa curativo, álcool ou pomada.',
      'A gestante também deve se vacinar durante o pré-natal: a vacina dTpa confere imunidade contra o tétano neonatal e a coqueluche, transmitindo anticorpos pela placenta para proteger o recém-nascido nos primeiros meses mais vulneráveis.'
    ],
    officialTips: [
      'Guarde sempre a Caderneta da Criança em local seguro e leve a todas as consultas de puericultura.',
      'Em caso de febre pós-vacina, faça compressas frias e ofereça bastante leite materno.',
      'Nunca dê remédios para dor ou febre sem orientação prévia do pediatra ou enfermeiro.'
    ]
  },
  higiene: {
    title: 'Eixo 2: Higiene e Cuidados com o Recém-Nascido',
    mentor: 'Carynne',
    themeId: 'higiene',
    highlights: [
      'Coto umbilical: limpar com álcool 70% ou água e sabão, manter seco e fralda dobrada para baixo',
      'Troca de fralda em meninas: sempre limpar da frente para trás (evita infecção urinária)',
      'Troca em meninos: nunca puxar a pele do prepúcio com força',
      'Banho: testar água morna no cotovelo, lavar do rosto descendo até o bumbum'
    ],
    content: [
      'O coto umbilical não dói, pois não possui terminações nervosas. Ele cai naturalmente entre 1 e 3 semanas.',
      'Para a secagem rápida do umbigo, dobre o cós da fralda para baixo, permitindo circulação de ar e impedindo que a urina entre em contato com o local.',
      'Nunca coloque moedas, faixas, pós ou café no umbigo — esses costumes antigos causam infecções graves pelo tétano e bactérias hospitalares.',
      'No banho, deixe toalha e roupas preparadas antes de despir a criança. Nunca se afaste da banheira! O banho enroladinho em fralda de pano acalma os reflexos do bebê.',
      'Lave as roupinhas novas do enxoval separadas das roupas de adultos com sabão neutro ou de coco, sem amaciantes perfumados.'
    ],
    officialTips: [
      'Algodão com água morna limpa é a melhor escolha para a pele do recém-nascido nos primeiros 30 dias.',
      'A camada de pomada contra assadura deve ser fina e aplicada apenas na pele bem seca ao toque.',
      'Prefira sempre roupas 100% algodão e sem botões ou laços que possam se soltar.'
    ]
  },
  primeiros_socorros: {
    title: 'Eixo 3: Primeiros Socorros e Emergências',
    mentor: 'Yasmim',
    themeId: 'primeiros_socorros',
    highlights: [
      'Desengasgo no bebê: 5 tapinhas nas costas + 5 compressões no peito com a cabeça mais baixa',
      'Nunca sacuda o bebê de cabeça para baixo nem enfie os dedos às cegas na garganta',
      'Convulsão febril: deitar de lado, afastar objetos, não segurar a língua e cronometrar',
      'Queimaduras: apenas água corrente fria por 15 minutos; nada de manteiga ou pasta de dente',
      'SAMU: ligue 192 gratuitamente em qualquer emergência'
    ],
    content: [
      'A manobra de desobstrução de vias aéreas em lactentes (menores de 1 ano) deve ser dominada por toda mãe e pai: apoie o bebê de bruços em seu antebraço, com a cabeça inclinada para baixo, e desfira 5 golpes firmes entre as escápulas com a palma da mão. Em seguida, vire o bebê e aplique 5 compressões no peito.',
      'Se houver convulsão febril, deite a criança de lado (posição lateral de segurança) para evitar aspiração de saliva ou vômito. A língua nunca "enrola" nem desce para a garganta!',
      'Em queimaduras causadas por água ou sopa quente, o resfriamento imediato sob água corrente da torneira por 10 a 15 minutos interrompe a lesão térmica nas camadas profundas da pele.',
      'Em caso de suspeita de picada de escorpião ou intoxicação, procure a emergência pediátrica ou a Santa Mônica com brevidade.'
    ],
    officialTips: [
      'Tenha os telefones de socorro visíveis na porta da geladeira: SAMU 192 e Bombeiros 193.',
      'Não provoque vômito se a criança ingerir produtos químicos.',
      'Em caso de queda com perda de consciência ou vômitos em jato, vá direto ao hospital.'
    ]
  },
  aleitamento: {
    title: 'Eixo 4: Aleitamento Materno & Alimentação Saudável',
    mentor: 'João',
    themeId: 'aleitamento',
    highlights: [
      'Leite materno exclusivo até os 6 meses, sem necessidade de água ou chás',
      'A boa pega: boca aberta como peixinho, lábios evertidos e queixo encostado na mama',
      'Amamentação em livre demanda estimula a produção (lei da oferta e procura)',
      'Introdução alimentar aos 6 meses: comida amassada no garfo com texturas preservadas',
      'Zero açúcar até os 2 anos de idade e proibição de mel antes de 1 ano'
    ],
    content: [
      'O leite materno é o alimento mais perfeito do mundo: possui água em quantidade ideal para hidratar o bebê sob o sol de Alagoas, anticorpos vivos, gorduras que desenvolvem o cérebro e fatores de crescimento.',
      'A produção de leite depende do estímulo: quanto mais a criança suga, mais prolactina e ocitocina a mãe secreta.',
      'O Banco de Leite Humano da Maternidade Escola Santa Mônica é referência no Estado, coletando e pasteurizando leite para salvar recém-nascidos prematuros em UTI Neonatal.',
      'A conservação do leite ordenhado em casa: até 12 horas na geladeira e até 15 dias no freezer em frasco de vidro higienizado com tampa plástica.',
      'A partir dos 6 meses, inicia-se a introdução de alimentos amassados com garfo (nunca batidos no liquidificador para não virar sopa e prejudicar a mastigação), mantendo o peito até 2 anos ou mais.'
    ],
    officialTips: [
      'Evite chupetas e mamadeiras: causam "confusão de bicos" e desmame precoce.',
      'Nunca ofereça alimentos ultraprocessados ou doces antes dos 2 anos de idade.',
      'Ofereça água limpa no copinho a partir dos 6 meses com o início dos alimentos sólidos.'
    ]
  },
  sono_prevencao: {
    title: 'Eixo 5: Sono Seguro e Prevenção de Acidentes',
    mentor: 'Ana Lucia',
    themeId: 'sono_prevencao',
    highlights: [
      'Dormir de barriga para cima reduz em 70% a Síndrome da Morte Súbita do Lactente',
      'Berço limpo: sem travesseiros fofos, pelúcias, almofadas ou cobertores soltos',
      'Cabos de panela sempre voltados para dentro do fogão',
      'Armários de medicamentos e produtos de limpeza trancados no alto',
      'Redes de proteção em janelas e sacadas em qualquer andar'
    ],
    content: [
      'A posição correta e segura para o bebê dormir é sempre de barriga para cima. Posições de bruços ou de lado aumentam perigosamente a reinalação de gás carbônico e o risco de asfixia.',
      'O colchão do berço deve ser firme e ajustado às bordas, sem espaços em que o bebê possa prender a cabeça.',
      'Na cozinha, manter as crianças fora do ambiente enquanto se cozinha e virar os cabos das panelas para o fundo do fogão evita queimaduras de segundo e terceiro graus por derramamento.',
      'Baldes, bacias e recipientes com água devem ser sempre esvaziados e guardados virados para baixo. Bebês pequenos podem se afogar silenciosamente em apenas 2,5 cm de água.',
      'Corte alimentos redondos (como uvas e tomates-cereja) em 4 partes no sentido do comprimento antes de servir à criança.'
    ],
    officialTips: [
      'Instale protetores em todas as tomadas elétricas baixas da casa.',
      'Nunca guarde desinfetantes ou água sanitária em garrafas PET de refrigerante.',
      'Ao calçar sapatos, sempre sacuda antes para evitar picadas de escorpiões.'
    ]
  },
  marcos_desenvolvimento: {
    title: 'Eixo 6: Marcos do Desenvolvimento Infantil',
    mentor: 'Thalyta',
    themeId: 'marcos_desenvolvimento',
    highlights: [
      'Sorriso social: aos 2 meses em resposta à interação com a família',
      'Controle da cabeça (firmeza cervical): aos 3 meses de vida',
      'Rolar o corpinho: entre 4 e 6 meses de idade',
      'Sentar sem apoio: conquistado entre 6 e 8 meses',
      'Tummy Time acordado: fortalece musculatura do pescoço e costas',
      'Afeto e conversa olho no olho alimentam a inteligência emocional do bebê'
    ],
    content: [
      'Cada criança tem seu próprio ritmo biológico, mas os marcos do desenvolvimento neuropsicomotor servem como importante bússola para pais e profissionais de saúde.',
      'O recém-nascido nasce com reflexos primitivos como o reflexo de sucção, preensão palmar e reflexo de Moro (abertura dos bracinhos com susto).',
      'Ao redor de 2 meses surge o sorriso social voluntário. Aos 3 meses, o bebê já sustenta a cabeça com firmeza. Aos 6 meses rola, apoia o peso nos braços e começa a sentar.',
      'O movimento de pinça fina (segurar pequenos objetos entre o polegar e o dedo indicador) surge por volta dos 9 aos 10 meses.',
      'A presença carinhosa dos pais, o abraço, as canções de ninar e a leitura de historinhas estimulam a formação de milhares de sinapses neurais por segundo.'
    ],
    officialTips: [
      'Evite telas (TV, celulares, tablets) para crianças menores de 2 anos.',
      'Brinque no chão sobre um tapete macio com brinquedos coloridos e seguros.',
      'Compareça a todas as consultas de acompanhamento na puericultura da Maternidade Santa Mônica.'
    ]
  }
};
