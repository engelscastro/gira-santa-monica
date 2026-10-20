import { Question } from '../types/game';

export const QUESTIONS: Question[] = [
  // =========================================================================
  // EIXO 2: HIGIENE DO BEBÊ (Carynne) - BASEADO NO DOCUMENTO OFICIAL
  // =========================================================================
  {
    id: 'hig_1',
    themeId: 'higiene',
    topic: 'Coto Umbilical',
    question: 'Como deixar a fralda pra não atrapalhar o umbigo secar?',
    options: [
      { key: 'A', text: 'Dobrar a ponta da fralda para baixo, deixando o umbigo de fora pegando ar.' },
      { key: 'B', text: 'Apertar a fralda por cima do umbigo.' },
      { key: 'C', text: 'Colocar fita em cima.' },
      { key: 'D', text: 'Passar óleo para amolecer.' },
    ],
    correctAnswer: 'A',
    justification: 'Deixar o umbigo sem cobrir ajuda o ar a passar e evita que o xixi molhe o local.',
    wrongJustifications: {
      B: 'Apertar faz o umbigo suar e machuca com o esfregão.',
      C: 'A fita abafa e dói demais para tirar da pele sensível.',
      D: 'O óleo deixa tudo molhado e o umbigo precisa é secar.'
    },
    reference: 'Maternidade Escola Santa Mônica - Protocolo de Cuidados Neonatais'
  },
  {
    id: 'hig_2',
    themeId: 'higiene',
    topic: 'Coto Umbilical',
    question: 'Como limpar o umbigo no banho e no dia a dia?',
    options: [
      { key: 'A', text: 'Passar pomada e tampar com pano molhado.' },
      { key: 'B', text: 'Passar remédio forte de farmácia.' },
      { key: 'C', text: 'Limpar com água, sabão ou álcool 70%, e secar muito bem.' },
      { key: 'D', text: 'Lavar só uma vez por semana.' },
    ],
    correctAnswer: 'C',
    justification: 'Limpa a sujeira sem machucar. O segredo principal é sentir que ficou bem sequinho ao toque.',
    wrongJustifications: {
      A: 'Pano molhado junta sujeira e mofo.',
      B: 'Remédio forte queima a pele fina do bebê.',
      D: 'Ficar sem lavar junta sujeira e bactérias.'
    },
    reference: 'Caderneta da Criança - Ministério da Saúde'
  },
  {
    id: 'hig_3',
    themeId: 'higiene',
    topic: 'Coto Umbilical',
    question: 'Como saber se o umbigo está doente ou com infecção usando os sentidos?',
    options: [
      { key: 'A', text: 'O umbigo está pretinho, duro ao toque e sem cheiro.' },
      { key: 'B', text: 'O umbigo vai diminuindo de tamanho a cada dia.' },
      { key: 'C', text: 'Sai só uma gotinha de sangue quando o umbigo cai.' },
      { key: 'D', text: 'A barriga fica vermelha e quente, sai gosma amarela e dá um cheiro muito ruim.' },
    ],
    correctAnswer: 'D',
    justification: 'Se você ver a barriga vermelha, sentir a pele quente e cheirar mofo ou podre, corre pro médico imediatamente!',
    wrongJustifications: {
      A: 'Umbigo escuro, seco e sem cheiro é o umbigo sarando normalmente.',
      B: 'Diminuir e secar é o caminho natural do coto.',
      C: 'Uma gotinha de sangue no dia da queda é perfeitamente normal.'
    },
    reference: 'Protocolo de Infecções Neonatais - MESM'
  },
  {
    id: 'hig_4',
    themeId: 'higiene',
    topic: 'Coto Umbilical',
    question: 'Quanto tempo o umbigo demora para cair?',
    options: [
      { key: 'A', text: 'De 1 a 3 dias.' },
      { key: 'B', text: 'De 1 a 3 semanas.' },
      { key: 'C', text: 'No dia em que o bebê faz 1 mês certinho.' },
      { key: 'D', text: 'De 2 a 3 meses.' },
    ],
    correctAnswer: 'B',
    justification: 'É o tempo normal do corpo secar a pele e soltar sozinho (geralmente entre o 7º e o 21º dia).',
    wrongJustifications: {
      A: 'Muito rápido, a pele ainda está presa aos tecidos profundos.',
      C: 'Não existe dia exato de aniversário de 1 mês para cair.',
      D: 'Muito tempo; se demorar meses precisa de avaliação do pediatra.'
    },
    reference: 'Sociedade Brasileira de Pediatria (SBP)'
  },
  {
    id: 'hig_5',
    themeId: 'higiene',
    topic: 'Coto Umbilical',
    question: 'O que você NUNCA deve colocar ou amarrar no umbigo?',
    options: [
      { key: 'A', text: 'Moedas ou faixas.' },
      { key: 'B', text: 'Álcool 70%.' },
      { key: 'C', text: 'Água e sabão no banho.' },
      { key: 'D', text: 'Cotonete limpo.' },
    ],
    correctAnswer: 'A',
    justification: 'Moeda e faixa trazem sujeiras invisíveis que podem causar infecções graves como o tétano neonatal.',
    wrongJustifications: {
      B: 'O álcool 70% é permitido e recomendado para higienizar a base.',
      C: 'Água e sabão são permitidos para lavar suavemente no banho.',
      D: 'Cotonete limpo é permitido para secar com delicadeza ao redor.'
    },
    reference: 'Maternidade Escola Santa Mônica'
  },
  {
    id: 'hig_6',
    themeId: 'higiene',
    topic: 'Coto Umbilical',
    question: 'Se você olhar e ver um pingo de sangue ao limpar o umbigo, o que faz?',
    options: [
      { key: 'A', text: 'Vai correndo para o hospital no mesmo minuto.' },
      { key: 'B', text: 'Aperta bem de leve com um pano limpo por uns segundinhos.' },
      { key: 'C', text: 'Joga pó de café em cima para parar o sangue.' },
      { key: 'D', text: 'Passar remédio por conta própria.' },
    ],
    correctAnswer: 'B',
    justification: 'Um pingo é normal durante a cicatrização. Só apertar de leve com pano limpo ou gaze que o sangue para.',
    wrongJustifications: {
      A: 'Não precisa de pânico por uma gotinha isolada.',
      C: 'Pó de café passa bactérias fatais (como tétano) para a corrente sanguínea!',
      D: 'Nunca use pomadas ou antibióticos por conta própria.'
    },
    reference: 'Ministério da Saúde'
  },
  {
    id: 'hig_7',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Quando a gente deve olhar e trocar a fralda do bebê?',
    options: [
      { key: 'A', text: 'Só 3 vezes no dia (de manhã, de tarde e de noite).' },
      { key: 'B', text: 'Toda vez que tiver xixi ou cocô, de preferência perto da hora de mamar.' },
      { key: 'C', text: 'Certeiro a cada 6 horas no relógio.' },
      { key: 'D', text: 'Só quando a fralda estiver muito pesada e cheia.' },
    ],
    correctAnswer: 'B',
    justification: 'Trocar sempre que tiver xixi ou cocô evita que a pele fique molhada e ocorram assaduras ou dermatites.',
    wrongJustifications: {
      A: 'Deixar horas na fralda suja queima a pele do recém-nascido.',
      C: '6 horas é muito tempo; a acidez do cocô queima em poucos minutos.',
      D: 'Esperar encher machuca e causa lesões dolorosas.'
    },
    reference: 'Manual de Cuidados com o Recém-Nascido - MESM'
  },
  {
    id: 'hig_8',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Na hora de limpar a menina, qual é o jeito certo para não passar infecção para o xixi?',
    options: [
      { key: 'A', text: 'Limpar de trás para frente (do bumbum para a frente).' },
      { key: 'B', text: 'Limpar sempre da frente para trás (da frente em direção ao bumbum) sem reutilizar a mesma face do algodão.' },
      { key: 'C', text: 'Esfregar de um lado para o outro com o mesmo algodão.' },
      { key: 'D', text: 'Usar cotonete por dentro dos lábios vaginais.' },
    ],
    correctAnswer: 'B',
    justification: 'Limpar sempre da frente para trás evita arrastar as bactérias das fezes para a uretra, prevenindo infecção urinária.',
    wrongJustifications: {
      A: 'Arrasta fezes para o canal urinário, principal causa de infecção no bebê menina.',
      C: 'Espalha a sujeira contaminada por toda a região genital.',
      D: 'Nunca introduzir cotonete nas partes íntimas delicadas.'
    },
    reference: 'Sociedade Brasileira de Pediatria'
  },
  {
    id: 'hig_9',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Como limpar o pênis (o pintinho) do menino na hora da troca?',
    options: [
      { key: 'A', text: 'Limpar só por fora com carinho, sem puxar a pele para trás com força.' },
      { key: 'B', text: 'Puxar a pele do pintinho com força até sair a cabeça para fora.' },
      { key: 'C', text: 'Usar lenço cheiroso para esfregar a cabecinha do pênis.' },
      { key: 'D', text: 'Não limpar nada no pintinho e lavar só o bumbum.' },
    ],
    correctAnswer: 'A',
    justification: 'A pele do menino nasce naturalmente aderida (fimose fisiológica). Limpar suavemente por fora não machuca e respeita o corpo.',
    wrongJustifications: {
      B: 'Puxar com força provoca fissuras, sangramento, dor e cicatrizes com estenose.',
      C: 'Perfume queima a mucosa e desencadeia dermatite alérgica de contato.',
      D: 'É preciso limpar suavemente por fora para higienizar restos de urina.'
    },
    reference: 'Enfermagem Neonatal - MESM'
  },
  {
    id: 'hig_10',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'O que é melhor usar no dia a dia para limpar o bumbum do bebê recém-nascido?',
    options: [
      { key: 'A', text: 'Algodão molhado em água morna limpa.' },
      { key: 'B', text: 'Lenço umedecido de adulto com bastante perfume e álcool.' },
      { key: 'C', text: 'Sabão de coco direto na pele.' },
      { key: 'D', text: 'Talco em pó jogado nas dobras.' },
    ],
    correctAnswer: 'A',
    justification: 'Água morna e algodão limpam perfeitamente sem agredir a barreira lipídica nem causar alergia no recém-nascido.',
    wrongJustifications: {
      B: 'Perfume e álcool ardem, queimam e provocam assaduras químicas.',
      C: 'Sabão de coco tem pH alto, resseca profundamente a pele fina.',
      D: 'O talco inalado é tóxico para as vias aéreas do bebê e forma placas nas dobras.'
    },
    reference: 'Guia do Bebê - Ministério da Saúde'
  },
  {
    id: 'hig_11',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Como passar a pomada para evitar assadura?',
    options: [
      { key: 'A', text: 'Passar uma camada grossa por cima da pomada velha.' },
      { key: 'B', text: 'Passar uma camada fina na pele limpa e bem sequinha.' },
      { key: 'C', text: 'Passar só quando a pele já estiver na carne viva e sangrando.' },
      { key: 'D', text: 'Misturar a pomada com talco antes de passar.' },
    ],
    correctAnswer: 'B',
    justification: 'A pele deve estar higienizada e seca antes; uma camada fina cria uma barreira protetora sem abafar excessivamente.',
    wrongJustifications: {
      A: 'Camada grossa sobre pomada velha acumula bactérias e umidade residual.',
      C: 'A pomada é preventiva; se sangrar requer diagnóstico e prescrição médica.',
      D: 'Misturar com talco cria uma crosta dura que atrita e fere a pele.'
    },
    reference: 'Dermatologia Pediátrica SBP'
  },
  {
    id: 'hig_12',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Na hora de fechar a fralda nova, o que ajuda a não vazar nem apertar a barriga?',
    options: [
      { key: 'A', text: 'Colocar os elásticos das perninhas para fora e deixar um dedo de folga na cintura.' },
      { key: 'B', text: 'Apertar a fralda bem forte na barriga e colocar duas fraldas de uma vez.' },
      { key: 'C', text: 'Fechar a fralda bem apertada em cima do umbigo.' },
      { key: 'D', text: 'Usar uma fralda gigante bem maior que o bebê.' },
    ],
    correctAnswer: 'A',
    justification: 'Os babados elásticos externos vedam as coxas e o dedo de folga permite a respiração e a digestão sem dor.',
    wrongJustifications: {
      B: 'Apertar demais comprime o estômago e induz refluxo e vômitos.',
      C: 'Apertar sobre o coto causa atrito, umidade e sangramento.',
      D: 'Fralda excessivamente grande deixa vãos por onde a urina e o cocô escorrem.'
    },
    reference: 'Enfermagem Pediátrica MESM'
  },
  {
    id: 'hig_13',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Qual deve ser a temperatura ideal da água para o banho do recém-nascido?',
    options: [
      { key: 'A', text: 'Fria.' },
      { key: 'B', text: 'Morna (testada no antebraço ou cotovelo, cerca de 36°C a 37°C).' },
      { key: 'C', text: 'Quente.' },
      { key: 'D', text: 'A temperatura não importa, desde que o banho seja rápido.' },
    ],
    correctAnswer: 'B',
    justification: 'Água morna agradável ao toque do cotovelo ou antebraço mantém a temperatura corporal do bebê sem risco de queimaduras.',
    wrongJustifications: {
      A: 'Água fria causa hipotermia rápida no recém-nascido.',
      C: 'A pele do bebê é finíssima e a água quente queima com facilidade.',
      D: 'A regulação térmica do bebê ainda é imatura; a temperatura importa sempre.'
    },
    reference: 'Hospital Amigo da Criança - MESM'
  },
  {
    id: 'hig_14',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'O que você deve fazer ANTES de tirar a roupa do bebê para o banho?',
    options: [
      { key: 'A', text: 'Tirar a roupa do bebê primeiro e depois procurar toalha e sabonete nas gavetas.' },
      { key: 'B', text: 'Encher a banheira com água fria e ir jogando água quente com o bebê dentro.' },
      { key: 'C', text: 'Deixar toalha, roupas e sabonete ao alcance das mãos e testar a água ANTES de tirar a roupa dele.' },
      { key: 'D', text: 'Colocar o bebê na água e dar uma saidinha rápida para buscar o sabonete.' },
    ],
    correctAnswer: 'C',
    justification: 'Planejar tudo antes previne que o bebê sinta frio sem roupa e garante que NUNCA ficará sozinho nem por 1 segundo.',
    wrongJustifications: {
      A: 'O bebê perde calor rapidamente e chora de desconforto pelo frio.',
      B: 'Adicionar água quente com o bebê na banheira pode causar queimaduras térmicas graves!',
      D: 'NUNCA se afaste ou deixe o bebê na banheira, risco de afogamento em segundos.'
    },
    reference: 'Sociedade Brasileira de Pediatria'
  },
  {
    id: 'hig_15',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Qual é a sequência correta de higiene durante o banho do bebê?',
    options: [
      { key: 'A', text: 'Começar pelos pés e ir subindo para a cabeça.' },
      { key: 'B', text: 'Limpar primeiro o bumbum com fezes e depois lavar o rosto e olhos.' },
      { key: 'C', text: 'Começar pelo rosto e cabeça, descer para o corpinho e terminar no bumbum.' },
      { key: 'D', text: 'Passar sabão no corpo todo antes de molhar a cabeça.' },
    ],
    correctAnswer: 'C',
    justification: 'Higienizamos da região mais limpa para a mais colonizada (olhos/rosto -> tronco -> bumbum), evitando levar bactérias para os olhos.',
    wrongJustifications: {
      A: 'De baixo para cima espalha resíduos fecais pelo tronco e face.',
      B: 'Lavar o bumbum primeiro contamina a água e os panos com coliformes.',
      D: 'Começar pela cabeça e rosto com água limpa mantém a higiene segura.'
    },
    reference: 'Manual de Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_16',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Como é feito o acolhedor "banho enroladinho" com uma fralda de pano?',
    options: [
      { key: 'A', text: 'Enrolar o bebê numa fraldinha de pano macia e ir mergulhando aos poucos na água morna, segurando a cabeça firme.' },
      { key: 'B', text: 'Colocar o bebê no balde seco e jogar água com balde por cima da cabeça.' },
      { key: 'C', text: 'Mergulhar o bebê de cabeça para baixo na água.' },
      { key: 'D', text: 'Soltar o bebê dentro do balde sem segurar com as mãos.' },
    ],
    correctAnswer: 'A',
    justification: 'O paninho reproduz a sensação de contenção do útero materno, transmitindo segurança, evitando reflexos de susto e relaxando o bebê.',
    wrongJustifications: {
      B: 'Jogar água repentina assusta e pode provocar broncoaspiração.',
      C: 'Perigo grave de afogamento e aspiração de água pelas vias aéreas.',
      D: 'O bebê não possui equilíbrio cervical nem tônus para ficar solto.'
    },
    reference: 'Método Canguru - Maternidade Escola Santa Mônica'
  },
  {
    id: 'hig_17',
    themeId: 'higiene',
    topic: 'Cuidados com as Roupas',
    question: 'Como lavar as roupinhas novas do bebê antes de vestir pela primeira vez?',
    options: [
      { key: 'A', text: 'Não precisa lavar, pode vestir direto saindo da loja.' },
      { key: 'B', text: 'Lavar junto com as roupas de trabalho dos adultos usando sabão em pó forte e amaciante.' },
      { key: 'C', text: 'Lavar separado das roupas dos adultos, usando sabão neutro ou de coco, e enxaguar muito bem.' },
      { key: 'D', text: 'Deixar de molho no cloro ou água sanitária.' },
    ],
    correctAnswer: 'C',
    justification: 'Roupas novas trazem poeiras e produtos químicos industriais; sabão neutro com enxágue farto protege contra dermatites.',
    wrongJustifications: {
      A: 'Roupas de fábrica contêm corantes e resíduos que irritam a pele sensível.',
      B: 'Sabão em pó comum e amaciantes contêm fragrâncias alergênicas.',
      D: 'Água sanitária queima o tecido e libera vapores tóxicos para o recém-nascido.'
    },
    reference: 'Associação Brasileira de Alergia e Imunologia'
  },
  {
    id: 'hig_18',
    themeId: 'higiene',
    topic: 'Cuidados com as Roupas',
    question: 'Por que NÃO devemos usar amaciante cheiroso nas roupas do recém-nascido?',
    options: [
      { key: 'A', text: 'Porque o perfume e compostos do amaciante dão alergia na pele e irritam as vias aéreas do bebê.' },
      { key: 'B', text: 'Porque o amaciante mancha a roupa para sempre.' },
      { key: 'C', text: 'Porque o amaciante faz a roupa não secar no sol.' },
      { key: 'D', text: 'Pode usar sem problemas desde o primeiro dia de vida.' },
    ],
    correctAnswer: 'A',
    justification: 'As fragrâncias químicas impregnam as fibras têxteis em contato direto com a pele fina, provocando dermatite de contato e crises respiratórias.',
    wrongJustifications: {
      B: 'O amaciante não mancha permanentemente, seu perigo é toxicológico.',
      C: 'A roupa seca no varal normalmente, porém fica carregada de alérgenos.',
      D: 'É expressamente contraindicado pelos pediatras nos primeiros meses.'
    },
    reference: 'Sociedade Brasileira de Pediatria'
  },
  {
    id: 'hig_19',
    themeId: 'higiene',
    topic: 'Cuidados com as Roupas',
    question: 'Qual é o melhor tipo de tecido para as primeiras roupinhas do bebê?',
    options: [
      { key: 'A', text: 'Tecidos 100% sintéticos (plástico e poliéster).' },
      { key: 'B', text: 'Tecidos 100% algodão, porque são macios e deixam a pele respirar.' },
      { key: 'C', text: 'Lã grossa que pinica colocada direto no corpinho.' },
      { key: 'D', text: 'Tecido plastificado impermeável.' },
    ],
    correctAnswer: 'B',
    justification: 'O algodão natural é hipoalergênico, absorve o suor e previne o aparecimento de brotoejas e assaduras nas dobras.',
    wrongJustifications: {
      A: 'Sintéticos superaquecem o bebê e causam brotoeja e coceira intensa.',
      C: 'Lã áspera fere a epiderme frágil e desencadeia eczema atópico.',
      D: 'Plásticos abafam o corpo e impedem a evaporação natural do calor.'
    },
    reference: 'Guia Prático de Puericultura - MESM'
  },
  {
    id: 'hig_20',
    themeId: 'higiene',
    topic: 'Cuidados com as Roupas',
    question: 'Por que devemos evitar roupas infantis com cordões compridos e botões frouxos?',
    options: [
      { key: 'A', text: 'Apenas porque fica antiquado na moda dos bebês.' },
      { key: 'B', text: 'Porque botões frouxos causam engasgo e cordões soltos trazem risco de estrangulamento.' },
      { key: 'C', text: 'Porque danifica o tambor da máquina de lavar roupas.' },
      { key: 'D', text: 'Não existe qualquer perigo nesses adereços.' },
    ],
    correctAnswer: 'B',
    justification: 'Bebês levam tudo à boca; botões desprendidos podem obstruir as vias aéreas e cordões podem laçar pescoço ou dedinhos.',
    wrongJustifications: {
      A: 'A preocupação não é estética, mas sim de biossegurança e sobrevida infantil.',
      C: 'O dano a eletrodomésticos é irrelevante frente ao risco de vida da criança.',
      D: 'São das principais causas de acidentes graves domésticos com recém-nascidos.'
    },
    reference: 'Ministério da Saúde - Prevenção de Acidentes'
  },

  // =========================================================================
  // EIXO 5: SONO SEGURO E PREVENÇÃO DE ACIDENTES (Ana Lucia)
  // =========================================================================
  {
    id: 'sono_1',
    themeId: 'sono_prevencao',
    topic: 'Sono Seguro no Berço',
    question: 'Qual medida é fundamental para evitar sufocamento ou engasgo de bebês no berço?',
    options: [
      { key: 'A', text: 'Lotação do berço com ursos de pelúcia fofos.' },
      { key: 'B', text: 'Colocar cobertores pesados, frouxos e soltos.' },
      { key: 'C', text: 'Manter o berço livre de brinquedos, almofadas e protetores soltos (berço limpo).' },
      { key: 'D', text: 'Deitar o recém-nascido de bruços.' },
    ],
    correctAnswer: 'C',
    justification: 'Um berço limpo, plano e sem objetos soltos garante que nada cubra a boca ou o nariz do bebê, prevenindo a asfixia acidental.',
    wrongJustifications: {
      A: 'Pelúcias podem cair sobre a face do bebê enquanto ele dorme, causando sufoco.',
      B: 'Cobertores soltos podem ser puxados e cobrir as vias aéreas do bebê.',
      D: 'Deitar de bruços dificulta a respiração e multiplica o risco da Síndrome da Morte Súbita do Lactente (SMSL).'
    },
    reference: 'Campanha Dormir de Barriga para Cima - Pastoral da Criança / SBP / MESM'
  },
  {
    id: 'sono_2',
    themeId: 'sono_prevencao',
    topic: 'Sono Seguro',
    question: 'Qual a posição recomendada por todos os órgãos de saúde para o bebê dormir?',
    options: [
      { key: 'A', text: 'De barriga para cima (decúbito dorsal).' },
      { key: 'B', text: 'De bruços (barriga para baixo).' },
      { key: 'C', text: 'De lado escorado com almofadas.' },
      { key: 'D', text: 'Inclinado de cabeça para baixo.' },
    ],
    correctAnswer: 'A',
    justification: 'Dormir de barriga para cima reduz em mais de 70% o risco de morte súbita. A anatomia da traqueia e esôfago protege o bebê contra refluxo nessa posição.',
    wrongJustifications: {
      B: 'De bruços o bebê reinala o próprio gás carbônico e pode asfixiar.',
      C: 'De lado é uma posição instável, o bebê pode facilmente rolar e ficar de bruços.',
      D: 'Posição perigosa que compromete a circulação e oxigenação.'
    },
    reference: 'Ministério da Saúde - Guia para o Sono Seguro'
  },
  {
    id: 'sono_3',
    themeId: 'sono_prevencao',
    topic: 'Cozinha e Queimaduras',
    question: 'Como evitar acidentes e queimaduras graves ao cozinhar no fogão?',
    options: [
      { key: 'A', text: 'Virar sempre os cabos das panelas para o centro/fundo do fogão.' },
      { key: 'B', text: 'Virar os cabos das panelas para fora, projetados para o corredor.' },
      { key: 'C', text: 'Cozinhar segurando a criança no colo para vigiá-la.' },
      { key: 'D', text: 'Usar pano úmido para retirar assadeiras quentes.' },
    ],
    correctAnswer: 'A',
    justification: 'Cabos virados para dentro impedem que adultos esbarrem neles ao passar e evitam que crianças alcancem e puxem panelas com água ou óleo quente.',
    wrongJustifications: {
      B: 'Cabos salientes são facilmente puxados por crianças pequenas e derrubados.',
      C: 'Bebês no colo ao fogão sofrem queimaduras graves por respingos de gordura ou fervura.',
      D: 'O pano úmido vira vapor instantaneamente e causa queimadura severa nas mãos.'
    },
    reference: 'Sociedade Brasileira de Queimaduras'
  },
  {
    id: 'sono_4',
    themeId: 'sono_prevencao',
    topic: 'Produtos Químicos',
    question: 'Qual é a forma correta de guardar produtos de limpeza e medicamentos em casa?',
    options: [
      { key: 'A', text: 'Em armários baixos embaixo da pia sem trancas.' },
      { key: 'B', text: 'Ao alcance das crianças para elas aprenderem a não mexer.' },
      { key: 'C', text: 'No chão, ao lado da lixeira.' },
      { key: 'D', text: 'Em armários altos, fechados e trancados com chave ou trava.' },
    ],
    correctAnswer: 'D',
    justification: 'A intoxicação infantil ocorre rapidamente pela curiosidade do bebê. A barreira física com chave em armário alto impede o acesso a substâncias letais.',
    wrongJustifications: {
      A: 'Armários baixos são o primeiro local que o bebê engatinhando abre e explora.',
      B: 'Crianças pequenas não possuem discernimento de perigo biológico ou químico.',
      C: 'Deixar no piso facilita ingestão acidental de desinfetantes ou venenos.'
    },
    reference: 'Centro de Informações Toxicológicas (CIATox) / MESM'
  },
  {
    id: 'sono_5',
    themeId: 'sono_prevencao',
    topic: 'Embalagens e Intoxicação',
    question: 'Qual é o grave risco de guardar água sanitária ou desinfetante em garrafas de refrigerante (PET)?',
    options: [
      { key: 'A', text: 'O produto apenas perde a validade mais rápido.' },
      { key: 'B', text: 'Risco altíssimo de envenenamento fatal por confusão com bebida comestível.' },
      { key: 'C', text: 'A garrafa plástica derrete no mesmo instante.' },
      { key: 'D', text: 'Não existe risco se colocar um papel colado com fita.' },
    ],
    correctAnswer: 'B',
    justification: 'Crianças e até adultos associam garrafas de refrigerante a sucos ou refrigerantes; a ingestão acidental causa corrosão do esôfago e morte.',
    wrongJustifications: {
      A: 'A perda de eficácia química é o menor dos problemas frente ao risco de morte.',
      C: 'O plástico PET suporta muitos líquidos, mantendo a armadilha visual mortal.',
      D: 'Crianças pequenas não sabem ler rótulos improvisados.'
    },
    reference: 'Criança Segura Brasil / Ministério da Saúde'
  },
  {
    id: 'sono_6',
    themeId: 'sono_prevencao',
    topic: 'Janelas e Sacadas',
    question: 'Como prevenir quedas graves de janelas e sacadas em casas e apartamentos?',
    options: [
      { key: 'A', text: 'Apenas fechar o trinco da janela sem telas.' },
      { key: 'B', text: 'Instalar redes ou grades de proteção certificadas e com manutenção em dia.' },
      { key: 'C', text: 'Colocar sofás, camas e cadeiras encostados embaixo da janela.' },
      { key: 'D', text: 'Pedir com firmeza para a criança nunca se aproximar do peitoril.' },
    ],
    correctAnswer: 'B',
    justification: 'Apenas redes de proteção certificadas suportam o peso e evitam quedas fatais de altura. Móveis nunca devem ficar perto de parapeitos!',
    wrongJustifications: {
      A: 'Trincos comuns são abertos com facilidade por crianças curiosas.',
      C: 'Móveis próximos à janela servem como escada para a criança subir no parapeito.',
      D: 'Orientação verbal não contém a impulsividade natural da infância.'
    },
    reference: 'Corpo de Bombeiros / MESM'
  },
  {
    id: 'sono_7',
    themeId: 'sono_prevencao',
    topic: 'Eletricidade',
    question: 'Qual é a atitude correta quanto às tomadas elétricas ao alcance das crianças?',
    options: [
      { key: 'A', text: 'Deixá-las expostas e ligar vários pinos T (benjamins).' },
      { key: 'B', text: 'Cobri-las com protetores isolantes específicos que a criança não consiga retirar.' },
      { key: 'C', text: 'Passar fiação elétrica por baixo do tapete da sala.' },
      { key: 'D', text: 'Deixar fios descascados ligados à tomada.' },
    ],
    correctAnswer: 'B',
    justification: 'Protetores de tomada impedem que o bebê coloque os dedinhos úmidos ou introduza objetos metálicos (clipes, chaves) na corrente elétrica.',
    wrongJustifications: {
      A: 'Tomadas desprotegidas e benjamins superaquecem e atraem o toque infantil.',
      C: 'Fios sob tapete sofrem pisoteio contínuo e causam curto-circuito e incêndio.',
      D: 'Fios descascados transmitem descargas elétricas letais.'
    },
    reference: 'Prevenção de Queimaduras e Traumas - SBP'
  },
  {
    id: 'sono_8',
    themeId: 'sono_prevencao',
    topic: 'Afogamento em Baldes e Piscinas',
    question: 'Para evitar afogamento de bebês e crianças em residências, o que deve ser feito?',
    options: [
      { key: 'A', text: 'Deixar baldes cheios no banheiro e a porta sempre aberta.' },
      { key: 'B', text: 'Esvaziar baldes e bacias após o uso, guardar virados para baixo e manter a porta do banheiro fechada.' },
      { key: 'C', text: 'Confiar apenas que o bebê sabe se apoiar na borda.' },
      { key: 'D', text: 'Manter a tampa do vaso sanitário aberta sem trava.' },
    ],
    correctAnswer: 'B',
    justification: 'Bebês têm a cabeça pesada e pouco equilíbrio cervical; podem se afogar silenciosamente em baldes com apenas 2,5 cm de água em menos de 2 minutos!',
    wrongJustifications: {
      A: 'Baldes com água no chão são armadilhas fatais de afogamento domiciliar.',
      C: 'O bebê não consegue levantar o peso da cabeça quando tomba de cabeça no balde.',
      D: 'Vasos sanitários abertos também representam risco grave de afogamento em lactentes.'
    },
    reference: 'Sociedade Brasileira de Pediatria'
  },
  {
    id: 'sono_9',
    themeId: 'sono_prevencao',
    topic: 'Engasgo com Alimentos',
    question: 'Como oferecer alimentos redondos (como uvas e tomates-cereja) para evitar engasgo?',
    options: [
      { key: 'A', text: 'Oferecer as uvas e tomates inteiros e redondos.' },
      { key: 'B', text: 'Cortar no sentido do comprimento (em tiras finas ou 4 partes compridas).' },
      { key: 'C', text: 'Dar pipoca e amendoim torrado inteiro para bebês menores de 1 ano.' },
      { key: 'D', text: 'Deixar a criança comer correndo e pulando na sala.' },
    ],
    correctAnswer: 'B',
    justification: 'Alimentos redondos possuem o diâmetro exato da traqueia infantil e funcionam como uma rolha. O corte longitudinal em tiras elimina esse formato circular.',
    wrongJustifications: {
      A: 'Uvas inteiras são uma das maiores causas de óbito por asfixia alimentar em crianças pequenas.',
      C: 'Pipoca, castanhas e amendoins não devem ser oferecidos a menores de 4 anos pelo altíssimo risco de broncoaspiração.',
      D: 'Comer em movimento desvia a atenção e facilita o engasgo.'
    },
    reference: 'Guia Alimentar para Crianças Menores de 2 Anos - Ministério da Saúde'
  },
  {
    id: 'sono_10',
    themeId: 'sono_prevencao',
    topic: 'Sufocamento com Plásticos',
    question: 'Como evitar acidentes com sacolas plásticas em casa?',
    options: [
      { key: 'A', text: 'Dar nós firmes em cada sacola e guardá-las em local alto, fora do alcance.' },
      { key: 'B', text: 'Deixar no chão para a criança brincar como balão.' },
      { key: 'C', text: 'Guardar dentro do berço do bebê.' },
      { key: 'D', text: 'Usar como gorro ou proteção de cabeça.' },
    ],
    correctAnswer: 'A',
    justification: 'O filme plástico fino adere ao rosto por sucção e vácuo ao respirar, impedindo a entrada de oxigênio em poucos segundos. Amarrar em nós previne esse risco.',
    wrongJustifications: {
      B: 'Sacolas não são brinquedos e provocam asfixia rápida ao serem colocadas na cabeça.',
      C: 'O berço deve ter zero plásticos ou sacos.',
      D: 'Colocar na cabeça causa sufocamento mecânico fatal.'
    },
    reference: 'Criança Segura'
  },

  // =========================================================================
  // EIXO 4: ALEITAMENTO E INTRODUÇÃO ALIMENTAR (João) - BASEADO NO DOCUMENTO OFICIAL
  // =========================================================================
  {
    id: 'aleit_1',
    themeId: 'aleitamento',
    topic: 'Aleitamento Exclusivo',
    question: 'Até que idade o bebê deve mamar apenas leite materno, sem precisar de água, chás ou outros alimentos?',
    options: [
      { key: 'A', text: 'Até os 3 meses.' },
      { key: 'B', text: 'Até os 6 meses de vida.' },
      { key: 'C', text: 'Até os 9 meses.' },
      { key: 'D', text: 'Até completar 1 ano.' },
    ],
    correctAnswer: 'B',
    justification: 'O Ministério da Saúde e a OMS recomendam aleitamento materno exclusivo até os 6 meses. O leite materno supre 100% das necessidades de água e nutrientes, mesmo no calor alagoano!',
    wrongJustifications: {
      A: 'Interromper aos 3 meses é precoce; priva o bebê de anticorpos essenciais.',
      C: 'Aos 6 meses o corpinho já necessita de novos micronutrientes como o ferro.',
      D: 'Manter apenas leite até 1 ano prejudica o desenvolvimento da mastigação.'
    },
    egoState: 'Ego Adulto (Informação clara, racional e científica)',
    senses: 'Sinestésico (Percepção de saciedade)',
    reference: 'Ministério da Saúde - Aleitamento Materno'
  },
  {
    id: 'aleit_2',
    themeId: 'aleitamento',
    topic: 'Técnica de Amamentação',
    question: 'Qual sinal mostra que o bebê está mamando no peito com a "boa pega", sem machucar a mãe?',
    options: [
      { key: 'A', text: 'O queixo fica longe da mama e ele abocanha só a pontinha do mamilo.' },
      { key: 'B', text: 'O bebê faz barulho alto de estalos com a língua ao sugar.' },
      { key: 'C', text: 'O queixo encosta na mama, lábios virados para fora ("boca de peixinho") e abocanha quase toda a aréola.' },
      { key: 'D', text: 'O nariz do bebê fica completamente tampado contra o peito.' },
    ],
    correctAnswer: 'C',
    justification: 'A pega correta previne fissuras mamárias e dores. Os lábios evertidos e a boca bem aberta promovem a sucção efetiva e o esvaziamento adequado da mama.',
    wrongJustifications: {
      A: 'Abocanhar só o bico causa fissuras, dor intensa e impede a saída do leite.',
      B: 'Estalos indicam perda de vácuo, sucção incorreta e deglutição de ar, gerando cólicas.',
      D: 'O nariz deve permanecer livre com a cabecinha levemente estendida para respirar confortavelmente.'
    },
    egoState: 'Ego Pai (Cuidado e prevenção da dor materna)',
    senses: 'Visual ("boca de peixinho") e Sinestésico (ausência de dor)',
    reference: 'Banco de Leite Humano da MESM'
  },
  {
    id: 'aleit_3',
    themeId: 'aleitamento',
    topic: 'Produção de Leite',
    question: 'Sobre a produção de leite materno no corpo da mulher, qual afirmação é cientificamente correta?',
    options: [
      { key: 'A', text: 'Mamas menores produzem menos leite.' },
      { key: 'B', text: 'O estresse do dia a dia seca o leite materno para sempre.' },
      { key: 'C', text: 'Quanto mais o bebê mama com frequência (livre demanda), mais leite o corpo da mãe produz.' },
      { key: 'D', text: 'O leite do começo da mamada é o único que sustenta o bebê.' },
    ],
    correctAnswer: 'C',
    justification: 'A produção de leite funciona na lei da oferta e da procura. A sucção estimula a prolactina e a ocitocina a produzirem mais leite continuamente. O tamanho do peito depende apenas de gordura.',
    wrongJustifications: {
      A: 'O tamanho das mamas reflete gordura corporal, não o tecido glandular que fabrica leite.',
      B: 'O estresse pode inibir temporariamente o reflexo de ejeção, mas não encerra a produção.',
      D: 'O leite do final (leite posterior) é rico em lipídios e calorias essenciais para o ganho ponderal.'
    },
    egoState: 'Ego Criança (Desconstrói medo e gera autoconfiança)',
    senses: 'Sinestésico (Sensação de capacidade e alívio)',
    reference: 'Rede Brasileira de Bancos de Leite Humano'
  },
  {
    id: 'aleit_4',
    themeId: 'aleitamento',
    topic: 'Duração da Amamentação',
    question: 'Até quando a mãe é incentivada a manter a amamentação do filho?',
    options: [
      { key: 'A', text: 'Até os 6 meses, interrompendo no primeiro dia de papinha.' },
      { key: 'B', text: 'Até os 2 anos de vida ou mais, em conjunto com a alimentação saudável da família.' },
      { key: 'C', text: 'Até 1 ano, pois depois dessa fase o leite vira água.' },
      { key: 'D', text: 'Deve parar assim que despontar o primeiro dentinho de leite.' },
    ],
    correctAnswer: 'B',
    justification: 'O leite materno continua sendo fonte rica de anticorpos, cálcio, proteínas nobres e carinho até os 2 anos ou mais, fortalecendo a imunidade da criança.',
    wrongJustifications: {
      A: 'A comida aos 6 meses é complementar, o leite materno continua essencial.',
      C: 'É um mito popular perigoso; o leite nunca perde o valor nutricional.',
      D: 'Dentes são normais e o bebê mama usando a língua sobre a gengiva inferior, sem morder na pega certa.'
    },
    reference: 'Guia Alimentar para Crianças Menores de 2 Anos - MS'
  },
  {
    id: 'aleit_5',
    themeId: 'aleitamento',
    topic: 'Bicos Artificiais',
    question: 'Por que o Ministério da Saúde e a Maternidade Santa Mônica não recomendam mamadeira e chupeta?',
    options: [
      { key: 'A', text: 'Porque esfriam a temperatura do leite materno.' },
      { key: 'B', text: 'Porque causam "confusão de bicos", podendo levar ao desmame precoce e alterações na dentição.' },
      { key: 'C', text: 'Porque alteram a cor do leite.' },
      { key: 'D', text: 'Porque atrasam o crescimento dos cabelos.' },
    ],
    correctAnswer: 'B',
    justification: 'A mecânica de sugar o silicone é completamente diferente da ordenha na mama. O bebê confunde a motricidade oral e passa a rejeitar o peito materno.',
    wrongJustifications: {
      A: 'Materiais artificiais não possuem essa propriedade termodinâmica.',
      C: 'Não há qualquer alteração química na composição do leite.',
      D: 'Não existe relação fisiológica com os folículos capilares.'
    },
    egoState: 'Ego Pai (Proteção e regra de biossegurança)',
    senses: 'Sinestésico (Sensação tátil do bico e tônus muscular da boca)',
    reference: 'Iniciativa Hospital Amigo da Criança (IHAC)'
  },
  {
    id: 'aleit_6',
    themeId: 'aleitamento',
    topic: 'Armazenamento do Leite',
    question: 'Por quanto tempo o leite materno ordenhado pode ficar conservado na geladeira e no congelador/freezer?',
    options: [
      { key: 'A', text: 'Até 24 horas na geladeira e até 30 dias no freezer.' },
      { key: 'B', text: 'Até 12 horas na geladeira e até 15 dias no freezer/congelador.' },
      { key: 'C', text: 'Até 6 horas na geladeira e até 3 meses no freezer.' },
      { key: 'D', text: 'Não pode ser guardado de jeito nenhum.' },
    ],
    correctAnswer: 'B',
    justification: 'Respeitar até 12 horas na prateleira da geladeira (nunca na porta) e até 15 dias no congelador em pote de vidro com tampa plástica garante nutrição e segurança biológica.',
    wrongJustifications: {
      A: '24 horas em geladeira comum ultrapassa o limite seguro de proliferação de bactérias.',
      C: '3 meses é prazo de bancos com ultracongeladores hospitalares a -20°C, não geladeiras caseiras.',
      D: 'O leite ordenhado pode e deve ser armazenado para mães que trabalham ou doam.'
    },
    reference: 'Banco de Leite Humano da MESM'
  },
  {
    id: 'aleit_7',
    themeId: 'aleitamento',
    topic: 'Aquecimento do Leite',
    question: 'Como o leite materno congelado deve ser aquecido antes de oferecer à criança?',
    options: [
      { key: 'A', text: 'Fervendo em fogo alto na panela até borbulhar.' },
      { key: 'B', text: 'Esquentando no forno micro-ondas por 1 a 2 minutos.' },
      { key: 'C', text: 'Em banho-maria com o fogo já desligado (água quente fora do fogo).' },
      { key: 'D', text: 'Deixando no sol quente da manhã.' },
    ],
    correctAnswer: 'C',
    justification: 'Ferver ou usar micro-ondas desnatura as imunoglobulinas e anticorpos vivos do leite e cria pontos de calor que queimam a boquinha. O banho-maria desligado descongela suavemente.',
    wrongJustifications: {
      A: 'Ferver mata os anticorpos protetores e destrói vitaminas nobres.',
      B: 'O micro-ondas aquece de maneira irregular e destrói fatores de imunidade.',
      D: 'O sol favorece fermentação e rápida proliferação microbiana.'
    },
    reference: 'Manual de Bancos de Leite Humano - Fiocruz / MESM'
  },
  {
    id: 'aleit_8',
    themeId: 'aleitamento',
    topic: 'Bancos de Leite Humano',
    question: 'Para quem se destina prioritariamente o leite doado ao Banco de Leite da Maternidade Escola Santa Mônica?',
    options: [
      { key: 'A', text: 'Para crianças saudáveis de 3 anos de idade.' },
      { key: 'B', text: 'Para bebês prematuros e de baixo peso internados na UTI Neonatal da MESM.' },
      { key: 'C', text: 'Para fins estéticos ou venda em farmácias.' },
      { key: 'D', text: 'Para creches particulares do município.' },
    ],
    correctAnswer: 'B',
    justification: 'O leite humano pasteurizado no banco de leite é um verdadeiro medicamento biológico que salva a vida de prematuros frágeis cujas mães ainda não conseguem amamentar plenamente.',
    wrongJustifications: {
      A: 'A prioridade absoluta é de neonatos graves hospitalizados.',
      C: 'A doação de leite no Brasil é 100% voluntária, gratuita e altruísta.',
      D: 'O estoque abastece as incubadoras da UTI e UCI Neonatal.'
    },
    reference: 'Maternidade Escola Santa Mônica - Banco de Leite'
  },
  {
    id: 'aleit_9',
    themeId: 'aleitamento',
    topic: 'Introdução Alimentar',
    question: 'Qual grupo de alimentos deve ser COMPLETAMENTE EVITADO para crianças menores de 2 anos?',
    options: [
      { key: 'A', text: 'Frutas frescas e legumes cozidos.' },
      { key: 'B', text: 'Feijão, arroz, inhame e macaxeira.' },
      { key: 'C', text: 'Ultraprocessados (refrigerantes, biscoitos recheados, salgadinhos de pacote e embutidos).' },
      { key: 'D', text: 'Ovos cozidos e carnes desfiadas.' },
    ],
    correctAnswer: 'C',
    justification: 'Alimentos ultraprocessados são ricos em corantes, conservantes, sódio e gorduras ruins que lesam o paladar infantil e aumentam risco de obesidade e hipertensão precoces.',
    wrongJustifications: {
      A: 'Frutas e legumes in natura são a melhor fonte de minerais e fibras.',
      B: 'Arroz, feijão e raízes regionais são excelentes fontes de energia e ferro.',
      D: 'Ovos e carnes caseiras são fundamentais no combate à anemia.'
    },
    reference: 'Guia Alimentar para a População Brasileira - Ministério da Saúde'
  },
  {
    id: 'aleit_10',
    themeId: 'aleitamento',
    topic: 'Açúcar e Mel',
    question: 'Qual é a recomendação oficial do Ministério da Saúde sobre dar açúcar ou mel para bebês?',
    options: [
      { key: 'A', text: 'Adicionar uma colher de açúcar no mingau todo dia.' },
      { key: 'B', text: 'Liberar doces e refrigerantes nos fins de semana.' },
      { key: 'C', text: 'Zero açúcar até os 2 anos; e mel proibido antes de 1 ano devido ao risco de botulismo.' },
      { key: 'D', text: 'Dar mel na chupeta para o bebê dormir mais calmo.' },
    ],
    correctAnswer: 'C',
    justification: 'O açúcar vicia o paladar e prejudica dentes e metabolismo. O mel pode conter esporos da bactéria do botulismo intestinal infantil, potencialmente grave em menores de 1 ano.',
    wrongJustifications: {
      A: 'Açúcar não deve ser adicionado em sucos, leites ou papas.',
      B: 'Não há exceção recreativa antes dos 2 anos de idade.',
      D: 'Passar mel na chupeta expõe o lactente a toxinas bacterianas letais.'
    },
    reference: 'ANVISA / Ministério da Saúde'
  },

  // =========================================================================
  // EIXO 1: VACINAS (Clarysse)
  // =========================================================================
  {
    id: 'vac_1',
    themeId: 'vacinas',
    topic: 'Vacinas do Recém-Nascido',
    question: 'Quais vacinas o bebê deve receber ainda na Maternidade Escola Santa Mônica, nas primeiras 12 a 24 horas de vida?',
    options: [
      { key: 'A', text: 'BCG (tuberculose) e primeira dose da Hepatite B.' },
      { key: 'B', text: 'Tríplice viral e catapora.' },
      { key: 'C', text: 'Febre amarela e vacina da gripe.' },
      { key: 'D', text: 'Nenhuma vacina antes de completar 6 meses de vida.' },
    ],
    correctAnswer: 'A',
    justification: 'A BCG (contra formas graves de tuberculose) e a primeira dose de Hepatite B devem ser aplicadas logo ao nascer na própria maternidade para proteção imediata.',
    wrongJustifications: {
      B: 'Tríplice viral é indicada a partir dos 12 meses de idade.',
      C: 'Febre amarela só é aplicada aos 9 meses.',
      D: 'O calendário vacinal começa logo nas primeiras horas de vida!'
    },
    reference: 'Programa Nacional de Imunizações (PNI) - SUS'
  },
  {
    id: 'vac_2',
    themeId: 'vacinas',
    topic: 'Cicatriz da BCG',
    question: 'Após a vacina BCG no bracinho direito, surge uma bolinha vermelha que vira casquinha. Qual é o cuidado correto?',
    options: [
      { key: 'A', text: 'Espremer a casquinha com força para sair o líquido.' },
      { key: 'B', text: 'Passar pomada preta cicatrizante e cobrir com curativo adesivo.' },
      { key: 'C', text: 'Não espremer, não passar pomadas e apenas lavar no banho normalmente com água e sabão.' },
      { key: 'D', text: 'Colocar álcool iodado duas vezes ao dia.' },
    ],
    correctAnswer: 'C',
    justification: 'A reação da BCG é esperada e faz parte da resposta imunológica. Não deve ser espremida nem coberta com curativos; basta a higiene suave no banho.',
    wrongJustifications: {
      A: 'Espremer machuca, contamina com bactérias e atrapalha a cicatrização protetora.',
      B: 'Pomadas cicatrizantes e curativos abafam e prejudicam a evolução natural da vacina.',
      D: 'Álcool iodado queima o tecido e não é indicado no bebê.'
    },
    reference: 'Caderneta da Criança - Ministério da Saúde'
  },
  {
    id: 'vac_3',
    themeId: 'vacinas',
    topic: 'Vacinas na Gestação',
    question: 'Qual vacina a gestante recebe entre a 20ª semana e o parto para proteger o recém-nascido contra a tosse comprida (coqueluche)?',
    options: [
      { key: 'A', text: 'dTpa (Tríplice bacteriana acelular do adulto).' },
      { key: 'B', text: 'Vacina da febre amarela com vírus vivo.' },
      { key: 'C', text: 'Vacina antirrábica.' },
      { key: 'D', text: 'Nenhuma vacina pode ser dada em mulheres grávidas.' },
    ],
    correctAnswer: 'A',
    justification: 'A vacina dTpa protege contra difteria, tétano e coqueluche. Os anticorpos da mãe passam pela placenta e protegem o recém-nascido nos primeiros meses de vida!',
    wrongJustifications: {
      B: 'Vacinas de vírus vivos atenuados são contraindicadas na gestação de rotina.',
      C: 'A antirrábica só é aplicada após mordedura ou arranhão por animais suspeitos.',
      D: 'Gestantes têm calendário vacinal prioritário pelo SUS (dTpa, Hepatite B, Influenza, Covid).'
    },
    reference: 'Manual de Vacinação da Gestante - Febrasgo / MS'
  },
  {
    id: 'vac_4',
    themeId: 'vacinas',
    topic: 'Calendário do 2º Mês',
    question: 'Aos 2 meses de idade, o bebê recebe a vacina Pentavalente. Contra quais doenças ela confere imunidade?',
    options: [
      { key: 'A', text: 'Apenas gripe comum.' },
      { key: 'B', text: 'Difteria, tétano, coqueluche, hepatite B e infecções graves por Haemophilus influenzae tipo b.' },
      { key: 'C', text: 'Dengue, zika e chikungunya.' },
      { key: 'D', text: 'Cárie dental e dor de barriga passageira.' },
    ],
    correctAnswer: 'B',
    justification: 'A Pentavalente protege contra 5 doenças graves e potencialmente letais em uma única picadinha, sendo repetida aos 4 e 6 meses.',
    wrongJustifications: {
      A: 'A vacina da gripe é a Influenza sazonal, ofertada a partir dos 6 meses.',
      C: 'A Pentavalente não contempla arboviroses.',
      D: 'Vacinas atuam contra microrganismos invasores e doenças infecciosas graves.'
    },
    reference: 'Programa Nacional de Imunizações (PNI)'
  },
  {
    id: 'vac_5',
    themeId: 'vacinas',
    topic: 'Poliomielite e Novas Diretrizes',
    question: 'Qual formato da vacina contra a Paralisia Infantil (Poliomielite) é atualmente padronizado no SUS para maior segurança?',
    options: [
      { key: 'A', text: 'Vacina Inativada da Poliomielite (VIP) injetável, com vírus morto inativado.' },
      { key: 'B', text: 'Apenas chás caseiros de ervas medicinais.' },
      { key: 'C', text: 'Comprimidos para engolir em jejum.' },
      { key: 'D', text: 'Gotas nos olhos do recém-nascido.' },
    ],
    correctAnswer: 'A',
    justification: 'O Brasil adotou a VIP (injetável 100% inativada) substituindo a antiga gotinha oral, garantindo imunidade robusta e máxima segurança para todas as crianças.',
    wrongJustifications: {
      B: 'Chás não possuem capacidade antigênica de induzir anticorpos contra o poliovírus.',
      C: 'Lactentes pequenos não deglutem cápsulas ou comprimidos.',
      D: 'O colírio nos olhos ao nascer é o nitrato de prata para prevenir oftalmia gonocócica, não contra pólio.'
    },
    reference: 'Ministério da Saúde - Atualização do PNI'
  },
  {
    id: 'vac_6',
    themeId: 'vacinas',
    topic: 'Febre Pós-Vacina',
    question: 'Se o bebê apresentar febre baixa ou dorzinha local no bracinho ou coxinha após ser vacinado, o que a família deve fazer?',
    options: [
      { key: 'A', text: 'Dar banho em água gelada com pedras de gelo.' },
      { key: 'B', text: 'Fazer compressa fria no local da picada, amamentar bastante para confortar e hidratação.' },
      { key: 'C', text: 'Deixar de vacinar o bebê nas próximas doses agendadas.' },
      { key: 'D', text: 'Friccionar álcool e vinagre sobre o furo da agulha.' },
    ],
    correctAnswer: 'B',
    justification: 'Compressa fria local alivia a dor e o aleitamento acalma e nutre o bebê. Pequena febre é reação inflamatória protetora normal do organismo aprendendo a se defender.',
    wrongJustifications: {
      A: 'Água gelada causa choque térmico perigoso e tremores.',
      C: 'Abandonar o esquema vacinal expõe a criança a vírus mortais sem proteção.',
      D: 'Álcool e vinagre causam dor intensa e dermatite sobre a pele perfurada.'
    },
    reference: 'Sociedade Brasileira de Imunizações (SBIm)'
  },
  {
    id: 'vac_7',
    themeId: 'vacinas',
    topic: 'Caderneta da Criança',
    question: 'Por que o documento "Caderneta da Criança", recebido na alta da Maternidade Santa Mônica, é tão precioso?',
    options: [
      { key: 'A', text: 'Serve apenas como lembrança fotográfica para guardar no baú.' },
      { key: 'B', text: 'É o passaporte de saúde onde se registra o histórico de vacinas, curvas de peso, altura e marcos do desenvolvimento.' },
      { key: 'C', text: 'Deve ser entregue e descartada na primeira consulta do posto.' },
      { key: 'D', text: 'Só tem utilidade caso a família vá viajar para o exterior.' },
    ],
    correctAnswer: 'B',
    justification: 'A Caderneta da Criança acompanha o cidadão por toda a infância, registrando vacinas em dia, marcos de crescimento físico e mental e orientações de saúde.',
    wrongJustifications: {
      A: 'É um documento clínico oficial indispensável em todas as consultas.',
      C: 'Nunca deve ser descartada; a perda dificulta a comprovação vacinal.',
      D: 'É obrigatória para consultas do SUS, creches, escolas e programas sociais.'
    },
    reference: 'Caderneta da Criança - Ministério da Saúde / MESM'
  },

  // =========================================================================
  // EIXO 3: PRIMEIROS SOCORROS (Yasmim)
  // =========================================================================
  {
    id: 'soc_1',
    themeId: 'primeiros_socorros',
    topic: 'Desengasgo em Lactente',
    question: 'Qual é a manobra de desengasgo recomendada quando um bebê menor de 1 ano engasga e não consegue chorar ou respirar?',
    options: [
      { key: 'A', text: 'Segurar pelas pernas de cabeça para baixo e balançar o corpo.' },
      { key: 'B', text: 'Colocar o bebê de bruços sobre o antebraço com a cabeça mais baixa que o tórax e aplicar 5 golpes firmes nas costas, virar e fazer 5 compressões no peito.' },
      { key: 'C', text: 'Enfiar o dedo às cegas até o fundo da garganta para tentar puxar o que tiver lá.' },
      { key: 'D', text: 'Oferecer um copo de água com farinha para empurrar.' },
    ],
    correctAnswer: 'B',
    justification: 'A manobra oficial para bebês consiste em 5 pancadas interescapulares seguidas de 5 compressões torácicas com a cabeça mais baixa, usando a gravidade a favor para desobstruir a via aérea.',
    wrongJustifications: {
      A: 'Chacoalhar o bebê causa lesão cervical grave e hemorragia cerebral (Síndrome do Bebê Sacudido).',
      C: 'Enfiar o dedo às cegas empurra o corpo estranho ainda mais para baixo, ocluindo totalmente a traqueia.',
      D: 'Dar líquidos no engasgo agrava o sufocamento e inunda os pulmões.'
    },
    reference: 'Suporte Básico de Vida Pediátrico (PALS) / Corpo de Bombeiros / SAMU 192'
  },
  {
    id: 'soc_2',
    themeId: 'primeiros_socorros',
    topic: 'Convulsão Febril',
    question: 'Se a criança tiver uma crise convulsiva devido a pico de febre, qual é a conduta correta da família?',
    options: [
      { key: 'A', text: 'Segurar a língua com uma colher para não engolir a língua.' },
      { key: 'B', text: 'Deitar a criança de lado em superfície segura, proteger a cabeça, afastar objetos cortantes e cronometrar a crise.' },
      { key: 'C', text: 'Jogar um balde de água gelada na cabeça da criança.' },
      { key: 'D', text: 'Segurar os braços e pernas com toda a força para travar o movimento.' },
    ],
    correctAnswer: 'B',
    justification: 'A língua NUNCA é engolida. Deitar de lado (posição lateral de segurança) evita que a saliva ou vômito vá para o pulmão. Manter a calma e proteger contra impactos é a chave.',
    wrongJustifications: {
      A: 'Colocar colher ou dedos na boca pode fraturar dentes, amputar dedos do socorrista e machucar a língua.',
      C: 'Água gelada causa broncoaspiração e hipotermia repentina.',
      D: 'Tentar conter a convulsão com força bruta pode causar fraturas ósseas.'
    },
    reference: 'Sociedade Brasileira de Pediatria'
  },
  {
    id: 'soc_3',
    themeId: 'primeiros_socorros',
    topic: 'Queimadura com Água Fervente',
    question: 'Em caso de queimadura térmica acidental com água quente na pele do bebê, qual o primeiro socorro imediato?',
    options: [
      { key: 'A', text: 'Colocar pasta de dente, manteiga ou borra de café sobre a ferida.' },
      { key: 'B', text: 'Resfriar a área queimada em água corrente fria da torneira por 10 a 15 minutos e cobrir com pano limpo e úmido.' },
      { key: 'C', text: 'Estourar todas as bolhas que se formarem na pele.' },
      { key: 'D', text: 'Esfregar com escova e sabão em pó.' },
    ],
    correctAnswer: 'B',
    justification: 'Água corrente fria interrompe o processo térmico que continua cozinhando a pele por dentro, reduz o inchaço e a dor. Pano limpo protege até a avaliação médica.',
    wrongJustifications: {
      A: 'Pasta de dente e manteiga introduzem bactérias nocivas, pioram a queimadura e exigem raspagem dolorosa no hospital.',
      C: 'Bolhas funcionam como curativo biológico estéril; rompê-las abre porta para infecções graves.',
      D: 'Esfregar arranca a epiderme viva exposta.'
    },
    reference: 'Sociedade Brasileira de Queimaduras'
  },
  {
    id: 'soc_4',
    themeId: 'primeiros_socorros',
    topic: 'Queda com Batida na Cabeça',
    question: 'Após uma queda da cama ou do trocador, quais sinais de alerta indicam necessidade de ir direto ao pronto-socorro?',
    options: [
      { key: 'A', text: 'O bebê chorou na hora, mamou bem e logo voltou a brincar ativo.' },
      { key: 'B', text: 'Vômitos repetidos em jato, sonolência profunda anormal, perda de consciência ou saída de líquido/sangue pelo nariz ou ouvido.' },
      { key: 'C', text: 'O bebê deu risada e pegou o mordedor.' },
      { key: 'D', text: 'Ficou apenas uma marquinha vermelha clara que sumiu em 5 minutos.' },
    ],
    correctAnswer: 'B',
    justification: 'Vômitos frequentes, alteração do estado de consciência e sangramentos são sinais de trauma cranioencefálico que necessitam de exame neurológico imediato.',
    wrongJustifications: {
      A: 'Chorar de susto e logo retornar à atividade normal é sinal de bom prognóstico, sem gravidade imediata.',
      C: 'Comportamento ativo e interativo reflete preservação neurológica.',
      D: 'Hiperemia superficial sem outros sintomas não configura emergência.'
    },
    reference: 'Emergência Pediátrica - MESM'
  },
  {
    id: 'soc_5',
    themeId: 'primeiros_socorros',
    topic: 'Números de Emergência',
    question: 'Qual é o número telefônico gratuito do SAMU para solicitar resgate médico urgente em todo o Brasil?',
    options: [
      { key: 'A', text: '190 (Polícia Militar)' },
      { key: 'B', text: '192 (SAMU - Serviço de Atendimento Móvel de Urgência)' },
      { key: 'C', text: '199 (Defesa Civil)' },
      { key: 'D', text: '0800 fictício' },
    ],
    correctAnswer: 'B',
    justification: 'O 192 conecta diretamente à central de regulação médica do SAMU, onde médicos prestam orientações passo a passo por telefone enquanto a ambulância se desloca.',
    wrongJustifications: {
      A: '190 é da Polícia Militar para crimes e ocorrências de segurança.',
      C: '199 é da Defesa Civil para enchentes e deslizamentos de terra.',
      D: 'O número nacional e gratuito oficial do SAMU é 192.'
    },
    reference: 'Ministério da Saúde - SAMU 192'
  },
  {
    id: 'soc_6',
    themeId: 'primeiros_socorros',
    topic: 'Animais Peçonhentos',
    question: 'Se uma criança for picada por um escorpião em casa, qual deve ser a primeira conduta?',
    options: [
      { key: 'A', text: 'Fazer torniquete no membro e cortar com faca para sugar o veneno com a boca.' },
      { key: 'B', text: 'Lavar o local com água e sabão, aplicar compressa morna e levar IMEDIATAMENTE ao hospital de referência com soro antiescorpiônico.' },
      { key: 'C', text: 'Esperar 24 horas em casa para ver se piora.' },
      { key: 'D', text: 'Amarrar um barbante apertado e dar leite para beber.' },
    ],
    correctAnswer: 'B',
    justification: 'Em crianças pequenas, a picada de escorpião pode ser fatal por toxidade cardíaca em poucas horas. A compressa morna alivia a dor enquanto se busca o pronto-socorro.',
    wrongJustifications: {
      A: 'Cortar e sugar o veneno contamina a ferida e não extrai o veneno já absorvido na corrente sanguínea.',
      C: 'Adiar o atendimento pediátrico aumenta o risco de choque cardiogênico e óbito.',
      D: 'Torniquetes prendem a circulação e causam gangrena tecidual.'
    },
    reference: 'Secretaria de Estado da Saúde de Alagoas (SESAU) / MESM'
  },

  // =========================================================================
  // EIXO 6: MARCO DO DESENVOLVIMENTO (Thalyta)
  // =========================================================================
  {
    id: 'marc_1',
    themeId: 'marcos_desenvolvimento',
    topic: 'Sorriso Social',
    question: 'Por volta de quantos meses o bebê costuma dar o encantador "sorriso social" em resposta ao rosto e voz dos pais?',
    options: [
      { key: 'A', text: 'Por volta dos 2 meses de vida.' },
      { key: 'B', text: 'Apenas após completar 1 ano e meio.' },
      { key: 'C', text: 'No primeiro minuto na sala de parto.' },
      { key: 'D', text: 'Bebês só sorriem quando já sabem falar palavras completas.' },
    ],
    correctAnswer: 'A',
    justification: 'Por volta dos 2 meses, o sorriso deixa de ser reflexo involuntário e se torna um marco social e comunicativo de conexão afetiva com a família.',
    wrongJustifications: {
      B: 'Aos 18 meses a criança já constrói frases e interage com complexidade motora.',
      C: 'Ao nascer os sorrisos durante o sono são apenas reflexos subcorticais do tronco cerebral.',
      D: 'A comunicação pré-verbal inicia-se muito antes das primeiras palavras articuladas.'
    },
    reference: 'Caderneta da Criança - Marcos do Desenvolvimento Neuropsicomotor'
  },
  {
    id: 'marc_2',
    themeId: 'marcos_desenvolvimento',
    topic: 'Controle Cervical',
    question: 'Em que fase o bebê geralmente adquire o controle cervical firme, conseguindo sustentar a cabecinha erguida sem cair?',
    options: [
      { key: 'A', text: 'Nos primeiros 3 dias de vida.' },
      { key: 'B', text: 'Por volta dos 3 meses de idade.' },
      { key: 'C', text: 'Somente aos 2 anos de idade.' },
      { key: 'D', text: 'Aos 4 anos de vida.' },
    ],
    correctAnswer: 'B',
    justification: 'Por volta dos 3 meses, a musculatura do pescoço se fortalece e o bebê sustenta a cabeça erguida quando no colo ou colocado de bruços acordado.',
    wrongJustifications: {
      A: 'O recém-nascido ainda tem hipotonia cervical e precisa de suporte firme na nuca.',
      C: 'Aos 2 anos a criança já corre, pula e sobe degraus.',
      D: 'Aos 4 anos a criança já anda de bicicleta com rodinhas e tem equilíbrio refinado.'
    },
    reference: 'Sociedade Brasileira de Pediatria - Desenvolvimento Motor'
  },
  {
    id: 'marc_3',
    themeId: 'marcos_desenvolvimento',
    topic: 'Tummy Time (Hora da Barriguinha)',
    question: 'Por que os pediatras recomendam colocar o bebê acordado de bruços sob vigilância dos pais ("Tummy Time")?',
    options: [
      { key: 'A', text: 'Para o bebê dormir a noite inteira nessa posição.' },
      { key: 'B', text: 'Para fortalecer os músculos do pescoço, ombros e costas e evitar a cabeça achatada (plagiocefalia).' },
      { key: 'C', text: 'Apenas para testar se ele já consegue engatinhar com 1 mês.' },
      { key: 'D', text: 'Não é recomendado colocar o bebê nessa posição em momento algum.' },
    ],
    correctAnswer: 'B',
    justification: 'Dormir deve ser SEMPRE de barriga para cima. Mas quando o bebê está ACORDADO e com a mãe por perto, ficar de bruços treina os músculos posturais e a visão.',
    wrongJustifications: {
      A: 'Dormir de bruços é proibido pelo risco de morte súbita; o Tummy Time é apenas com bebê ACORDADO.',
      C: 'O engatinhar surge meses depois; com 1 mês o foco é tônus antigravitacional inicial.',
      D: 'É altamente recomendado mundialmente para o desenvolvimento motor sadio.'
    },
    reference: 'American Academy of Pediatrics (AAP) / SBP'
  },
  {
    id: 'marc_4',
    themeId: 'marcos_desenvolvimento',
    topic: 'Sentar Sem Apoio',
    question: 'Entre quais meses a maioria dos bebês atinge o marco de conseguir sentar sem apoio nas mãos?',
    options: [
      { key: 'A', text: 'Entre o 1º e o 2º mês.' },
      { key: 'B', text: 'Geralmente entre os 6 e 8 meses de vida.' },
      { key: 'C', text: 'Apenas com 18 meses.' },
      { key: 'D', text: 'Somente quando para de mamar.' },
    ],
    correctAnswer: 'B',
    justification: 'Sentar com estabilidade de tronco ocorre por volta dos 6 aos 8 meses, coincidindo com a fase ideal de início da introdução de alimentos complementares na cadeirinha.',
    wrongJustifications: {
      A: 'Com 1 ou 2 meses a coluna do bebê ainda não tem tônus para sustentar o tronco sentado.',
      C: 'Aos 18 meses o bebê já anda sozinho com passos firmes.',
      D: 'O marco motor é biológico e independe da manutenção do aleitamento materno.'
    },
    reference: 'Puericultura da Maternidade Escola Santa Mônica'
  },
  {
    id: 'marc_5',
    themeId: 'marcos_desenvolvimento',
    topic: 'Comunicação e Balbucio',
    question: 'Quando o bebê começa a emitir sons repetitivos como "ba-ba-ba", "da-da-da" e "ma-ma-ma" (balbucio)?',
    options: [
      { key: 'A', text: 'Geralmente a partir dos 6 a 9 meses.' },
      { key: 'B', text: 'Somente após os 3 anos de idade.' },
      { key: 'C', text: 'No primeiro mês de vida.' },
      { key: 'D', text: 'Crianças não produzem sons antes de ler e escrever.' },
    ],
    correctAnswer: 'A',
    justification: 'O balbucio canônico é um marco fundamental da linguagem humana que floresce entre 6 e 9 meses, preparando a musculatura e o cérebro para as primeiras palavras.',
    wrongJustifications: {
      B: 'Aos 3 anos a criança já conversa com vocabulário de centenas de palavras.',
      C: 'No 1º mês os sons são guturais reflexos e choro biológico.',
      D: 'A oralidade infantil precede em vários anos o aprendizado da escrita formal.'
    },
    reference: 'Ministério da Saúde - Diretrizes de Desenvolvimento da Linguagem'
  },
  {
    id: 'marc_6',
    themeId: 'marcos_desenvolvimento',
    topic: 'Afeto e Neurodesenvolvimento',
    question: 'Qual fator é o mais poderoso estimulador do desenvolvimento cerebral e emocional do bebê nos primeiros anos?',
    options: [
      { key: 'A', text: 'Deixar o bebê horas em frente a vídeos em telas digitais.' },
      { key: 'B', text: 'O colo amoroso, a conversa olho no olho, o toque e a presença atenta da mãe e da família.' },
      { key: 'C', text: 'Comprar brinquedos caros eletrônicos cheios de luzes fortes.' },
      { key: 'D', text: 'Deixar o bebê chorando sozinho no quarto escuro para aprender disciplina.' },
    ],
    correctAnswer: 'B',
    justification: 'A neurociência comprova que o afeto, o olhar empático e a resposta carinhosa ao choro constroem as conexões neurais da segurança emocional e da inteligência infantil.',
    wrongJustifications: {
      A: 'Telas digitais antes dos 2 anos causam atrasos graves na fala, sono e regulação emocional.',
      C: 'Brinquedos plásticos eletrônicos sobrecarregam os sentidos e não substituem o vínculo humano.',
      D: 'O choro desamparado eleva o cortisol (hormônio do estresse) e fragiliza a saúde cerebral.'
    },
    reference: 'Núcleo Ciência pela Infância / MESM Humanizada'
  }
];
