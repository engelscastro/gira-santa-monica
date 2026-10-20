import { Question } from '../types/game';

export const QUESTIONS: Question[] = [
  // =========================================================================
  // EIXO 2: HIGIENE DO BEBÊ (Carynne) - QUESTIONÁRIO OFICIAL (25 QUESTÕES)
  // Baseado no documento: Perguntas e Respostas: Cuidados com o Bebê
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
    reference: 'Cuidados com o Bebê - Maternidade Escola Santa Mônica'
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
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'Se você ver a barriga vermelha, sentir a pele quente e cheirar mofo ou podre, corre pro médico!',
    wrongJustifications: {
      A: 'Umbigo escuro, seco e sem cheiro é o umbigo sarando normal.',
      B: 'Diminuir e secar é o caminho natural.',
      C: 'Uma gotinha de sangue no dia da queda é normal.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'É o tempo normal do corpo secar a pele e soltar sozinho.',
    wrongJustifications: {
      A: 'Muito rápido, a pele ainda está presa.',
      C: 'Demorar tanto não é o esperado; o médico precisa avaliar.',
      D: 'Muito tempo; precisa de avaliação médica.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
      { key: 'D', text: 'Cotonete.' },
    ],
    correctAnswer: 'A',
    justification: 'Moeda e faixa trazem sujeiras invisíveis que podem causar infecções graves.',
    wrongJustifications: {
      B: 'O álcool 70% É PERMITIDO e recomendado pelos médicos para limpar.',
      C: 'Água e sabão SÃO PERMITIDOS para lavar no banho.',
      D: 'Cotonete limpo É PERMITIDO para secar em volta.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'Um pingo é normal. Só apertar de leve com pano limpo que o sangue para.',
    wrongJustifications: {
      A: 'Não precisa de pânico por uma gotinha só.',
      C: 'Pó de café passa infecção grave (como tétano) para o sangue.',
      D: 'Nunca passe remédios sem o médico mandar.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'Trocar sempre que tiver xixi ou cocô evita que a pele fique molhada e assada.',
    wrongJustifications: {
      A: 'Deixar o bebê muito tempo com a fralda suja deixa a pele vermelha e assada.',
      C: '6 horas é muito tempo; a pele pode assar.',
      D: 'Esperar encher machuca e assa a pele sensível do bebê.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_8',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Na hora de limpar a menina, qual é o jeito certo para não passar infecção para o xixi?',
    options: [
      { key: 'A', text: 'Limpar de trás para frente (do bumbum para a frente).' },
      { key: 'B', text: 'Limpar sempre da frente para trás (da frente em direção ao bumbum) sem usar a mesma parte do algodão.' },
      { key: 'C', text: 'Esfregar de um lado para o outro com o mesmo algodão.' },
      { key: 'D', text: 'Usar cotonete por dentro.' },
    ],
    correctAnswer: 'B',
    justification: 'Limpar da frente para trás evita puxar a sujeira do cocô para o canal do xixi.',
    wrongJustifications: {
      A: 'Arrasta a sujeira do bumbum para a frente, o que causa infecção no xixi.',
      C: 'Espalha a sujeira e passa bactérias para a frente.',
      D: 'Nunca se deve colocar cotonete por dentro das partes do bebê porque machuca e fere.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_9',
    themeId: 'higiene',
    topic: 'Troca de Fralda',
    question: 'Como limpar o pênis (o pintinho) do menino na hora da troca?',
    options: [
      { key: 'A', text: 'Limpar só por fora com carinho, sem puxar a pele para trás.' },
      { key: 'B', text: 'Puxar a pele do pintinho com força até sair a cabeça para fora.' },
      { key: 'C', text: 'Usar lenço cheiroso para esfregar a cabecinha do pênis.' },
      { key: 'D', text: 'Não limpar nada no pintinho e lavar só o bumbum.' },
    ],
    correctAnswer: 'A',
    justification: 'A pele do menino nasce coladinha e é normal. Limpar só por fora com água não machuca.',
    wrongJustifications: {
      B: 'Puxar a pele com força rasga, faz sangrar e dói muito.',
      C: 'Produto com cheiro queima e dá alergia na pele delicada.',
      D: 'Tem que limpar por fora sim para tirar a sujeira do xixi e do cocô.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'Água morna e algodão limpam direitinho sem dar alergia ou assadura.',
    wrongJustifications: {
      B: 'Perfume e álcool queimam e dão assadura.',
      C: 'Sabão de coco resseca e arde na pele.',
      D: 'O pó do talco entra no pulmão do bebê e faz mal para a respiração.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'A pele precisa estar bem seca ao toque antes da pomada fazer a proteção contra o xixi.',
    wrongJustifications: {
      A: 'Passar pomada nova por cima da velha junta sujeira e mofo.',
      C: 'A pomada serve para prevenir; quando já está sangrando precisa de remédio do médico.',
      D: 'Misturar com talco cria uma pasta dura que machuca a pele.'
    },
    reference: 'Cuidados com o Bebê - MESM'
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
    justification: 'Os elásticos para fora seguram o xixi e o espaço do dedo na cintura deixa o bebê respirar e mamar sem dor.',
    wrongJustifications: {
      B: 'Apertar muito dá dor de barriga e faz o bebê gorfar.',
      C: 'Apertar o umbigo abafa e faz ele sangrar ou infeccionar.',
      D: 'Fralda grande demais fica cheia de buracos e o xixi vaza todo.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_13',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Qual deve ser a temperatura ideal da água para o banho do recém-nascido?',
    options: [
      { key: 'A', text: 'Fria.' },
      { key: 'B', text: 'Morna (gostosa ao toque do cotovelo).' },
      { key: 'C', text: 'Quente.' },
      { key: 'D', text: 'A temperatura não importa, desde que o banho seja rápido.' },
    ],
    correctAnswer: 'B',
    justification: 'A água morna (gostosa ao toque do cotovelo) evita que o bebê sinta frio ou se queime.',
    wrongJustifications: {
      A: 'Água fria faz a temperatura do bebê cair rápido e ele passa frio.',
      C: 'Água quente queima e machuca a pele delicada do bebê.',
      D: 'A temperatura importa muito; água muito fria ou muito quente faz mal mesmo num banho rápido.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_14',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'O que você deve fazer ANTES de tirar a roupa do bebê para o banho?',
    options: [
      { key: 'A', text: 'Tirar a roupa do bebê primeiro e depois procurar toalha e sabonete nas gavetas.' },
      { key: 'B', text: 'Encher a banheira com água fria e ir jogando água quente com o bebê dentro.' },
      { key: 'C', text: 'Deixar roupas, toalha e sabonete organizados ao alcance das mãos e testar a água ANTES de tirar a roupa dele.' },
      { key: 'D', text: 'Colocar o bebê na água e dar uma saidinha para buscar a toalha no outro quarto.' },
    ],
    correctAnswer: 'C',
    justification: 'Deixar tudo pronto evita que o bebê passe frio sem roupa e garante que você nunca vai deixar o bebê sozinho na banheira.',
    wrongJustifications: {
      A: 'Tirar a roupa antes faz o bebê passar frio enquanto você procura as coisas.',
      B: 'Misturar água quente com o bebê na banheira pode causar queimaduras graves.',
      D: 'NUNCA se deve deixar o bebê sozinho na água, nem por um segundo.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_15',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Qual é o jeito certo de lavar o corpo do bebê durante o banho?',
    options: [
      { key: 'A', text: 'Começar pelos pés e ir subindo para a cabeça.' },
      { key: 'B', text: 'Limpar primeiro o bumbum sujo de cocô e depois lavar o rosto.' },
      { key: 'C', text: 'Começar pelo rosto e cabeça, descer para o corpo e terminar no bumbum.' },
      { key: 'D', text: 'Passar sabão no corpo todo antes de molhar a cabeça.' },
    ],
    correctAnswer: 'C',
    justification: 'A gente limpa do mais limpo para o mais sujo (do rosto para o bumbum) para não levar sujeira e bactérias do cocô para os olhos e a boca.',
    wrongJustifications: {
      A: 'O certo é começar de cima (rosto/cabeça) e ir descendo.',
      B: 'Lavar o bumbum primeiro espalha micróbios do cocô no resto do corpo do bebê.',
      D: 'Começar pelo rosto e cabeça garante que a água e o bebê continuem limpos do início ao fim.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_16',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'O que fazer para o bebê não passar frio durante e depois do banho?',
    options: [
      { key: 'A', text: 'Deixar portas e janelas abertas para entrar vento.' },
      { key: 'B', text: 'Fechar portas e janelas para evitar vento frio e secar o bebê bem rápido ao sair da água, secando todas as dobras.' },
      { key: 'C', text: 'Ligar um ventilador virado para a banheira.' },
      { key: 'D', text: 'Deixar o bebê bastante tempo na banheira até a água esfriar.' },
    ],
    correctAnswer: 'B',
    justification: 'Fechar as correntes de ar e secar rápido (principalmente as dobras da pele) evita que o bebê trema e passe frio.',
    wrongJustifications: {
      A: 'Vento entrando faz o bebê gelar rápido.',
      C: 'O vento do ventilador na pele molhada dá muito frio e gelo.',
      D: 'Banho demorado faz a água esfriar e o bebê passa frio.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_17',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Qual sabonete é o melhor para o recém-nascido?',
    options: [
      { key: 'A', text: 'Sabonete líquido neutro próprio para bebê.' },
      { key: 'B', text: 'Sabonete forte antibacteriano.' },
      { key: 'C', text: 'Sabão em barra com cheiro forte de adulto.' },
      { key: 'D', text: 'Detergente.' },
    ],
    correctAnswer: 'A',
    justification: 'O sabonete líquido neutro para bebê limpa suavemente sem ressecar ou dar alergia na pele fina.',
    wrongJustifications: {
      B: 'Sabonete antibacteriano é muito forte e tira a proteção natural da pele.',
      C: 'Perfume forte de adulto causa alergia, coceira e vermelhidão.',
      D: 'Detergente serve para louça, resseca e queima a pele do bebê.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_18',
    themeId: 'higiene',
    topic: 'Banho do Bebê',
    question: 'Como é feito o "banho enroladinho" em um pano ou fralda?',
    options: [
      { key: 'A', text: 'Enrolar o bebê num paninho macio e ir molhando devagar na água morna, segurando a cabeça dele firme.' },
      { key: 'B', text: 'Colocar o bebê no balde seco e jogar água por cima da cabeça.' },
      { key: 'C', text: 'Mergulhar o bebê de cabeça para baixo na água.' },
      { key: 'D', text: 'Soltar o bebê dentro do balde sem segurar com as mãos.' },
    ],
    correctAnswer: 'A',
    justification: 'O paninho faz o bebê se sentir abraçado como se estivesse na barriga da mãe, deixando ele calmo e aquecido.',
    wrongJustifications: {
      B: 'Jogar água quente no balde seco queima o bebê e assusta.',
      C: 'Mergulhar de cabeça faz o bebê afogar e entrar água no nariz e ouvido.',
      D: 'Bebê recém-nascido não dura em pé e pode se afogar se soltar.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_19',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Como lavar as roupinhas novas do bebê antes de usar pela primeira vez?',
    options: [
      { key: 'A', text: 'Não precisa lavar, pode vestir direto saindo da loja.' },
      { key: 'B', text: 'Lavar junto com as roupas de todo mundo da casa com sabão em pó forte e amaciante.' },
      { key: 'C', text: 'Lavar separado das roupas dos adultos, usando sabão neutro ou de coco, e enxaguar muito bem.' },
      { key: 'D', text: 'Deixar de molho em água sanitária (cloro).' },
    ],
    correctAnswer: 'C',
    justification: 'Lavar separado com sabão neutro tira a poeira e a sujeira da fábrica sem deixar químicos que dão coceira.',
    wrongJustifications: {
      A: 'Roupa nova vem com sujeira invisível da fábrica e precisa ser lavada sim.',
      B: 'Misturar com roupa de adulto e sabão forte passa sujeiras e químicos que causam alergia.',
      D: 'Água sanitária estraga o tecido, é muito forte e queima a pele do bebê.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_20',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Por que NÃO devemos usar amaciante cheiroso nas roupas do recém-nascido?',
    options: [
      { key: 'A', text: 'Porque o cheiro e os químicos do amaciante dão alergia na pele e no nariz do bebê.' },
      { key: 'B', text: 'Porque o amaciante mancha a roupa para sempre.' },
      { key: 'C', text: 'Porque o amaciante faz a roupa não secar no sol.' },
      { key: 'D', text: 'Pode usar sim, não tem perigo nenhum.' },
    ],
    correctAnswer: 'A',
    justification: 'O perfume e os químicos grudam no pano e dão vermelhidão na pele e espirros ou falta de ar no bebê.',
    wrongJustifications: {
      B: 'O problema do amaciante não é manchar, é fazer mal à saúde e respiração do bebê.',
      C: 'O problema do amaciante não é secar, é fazer mal à saúde e respiração do bebê.',
      D: 'Há contraindicação sim, o uso de amaciante deve ser evitado nos primeiros meses.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_21',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Qual é o melhor tipo de tecido para a roupa que fica em encosto na pele do bebê?',
    options: [
      { key: 'A', text: 'Tecidos sintéticos (plástico/poliéster).' },
      { key: 'B', text: 'Tecidos 100% algodão, porque são macios e deixam a pele respirar.' },
      { key: 'C', text: 'Lã grossa e piniquenta direto no corpo.' },
      { key: 'D', text: 'Tecido emborrachado e impermeável.' },
    ],
    correctAnswer: 'B',
    justification: 'O algodão é bem macio ao toque (tato), absorve o suor e deixa a pele quentinha na medida certa sem dar brotoeja.',
    wrongJustifications: {
      A: 'Tecido sintético esquenta demais, junta suor e dá coceira.',
      C: 'Lã direta no corpo pinica e machuca a pele sensível.',
      D: 'Tecido emborrachado abafa e faz o bebê suar e assar.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_22',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Como saber a quantidade certa de roupa para colocar no bebê conforme o tempo (frio ou calor)?',
    options: [
      { key: 'A', text: 'Encher o bebê de casacos pesados, mesmo no calor.' },
      { key: 'B', text: 'Vestir o bebê com apenas uma camada de roupa a mais do que um adulto estaria usando no mesmo lugar.' },
      { key: 'C', text: 'Deixar o bebê só de fralda no ar-condicionado gelado.' },
      { key: 'D', text: 'Colocar touca de lã e luvas no sol quente do verão.' },
    ],
    correctAnswer: 'B',
    justification: 'O bebê sente um pouquinho mais de frio que a gente, então uma roupinha a mais que o adulto já é o suficiente para ele ficar confortável.',
    wrongJustifications: {
      A: 'Agasalhar demais no calor faz o bebê assar de suor e passar mal de quente.',
      C: 'Deixar só de fralda no gelado do ar-condicionado faz o bebê gelar e ficar doente.',
      D: 'Touca de lã no sol do verão causa desidratação e hipertermia.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_23',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Por que devemos evitar roupinhas com laços compridos, cordões e botões frouxos?',
    options: [
      { key: 'A', text: 'Apenas porque fica feio na moda infantil.' },
      { key: 'B', text: 'Porque o bebê pode engolir botões pequenos e se engasgar, e os cordões podem enrolar no pescoço ou nos dedinhos.' },
      { key: 'C', text: 'Porque estraga a máquina de lavar.' },
      { key: 'D', text: 'Não tem perigo nenhum usar essas coisas.' },
    ],
    correctAnswer: 'B',
    justification: 'Coisas pequenas soltas vão direto para a boca do bebê (engasgo), e cordões podem prender e prender a circulação do sangue.',
    wrongJustifications: {
      A: 'O risco não é a moda infantil, é a vida e a segurança do bebê.',
      C: 'O risco não é a máquina de lavar, é a integridade física do bebê.',
      D: 'Existe risco grande de acidente grave e sufocamento.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_24',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Qual é a melhor forma de secar e guardar as roupas do bebê?',
    options: [
      { key: 'A', text: 'Guardar a roupa ainda um pouco úmida dentro do armário fechado.' },
      { key: 'B', text: 'Secar num lugar com vento e passar com ferro quente para matar os germes e deixar macio.' },
      { key: 'C', text: 'Estender as roupas direto no chão para secar rápido.' },
      { key: 'D', text: 'Nunca passar ferro nas roupas para não estragar o pano.' },
    ],
    correctAnswer: 'B',
    justification: 'O calor do ferro mata os micróbios invisíveis aos olhos e deixa o pano bem macio ao toque (tato).',
    wrongJustifications: {
      A: 'Guardar roupa molhada dá mofo, bolor e cheiro ruim que faz mal ao bebê.',
      C: 'Colocar no chão suja a roupa de poeira e micróbios.',
      D: 'Passar o ferro ajuda a higienizar e deixar a roupa gostosa de vestir.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },
  {
    id: 'hig_25',
    themeId: 'higiene',
    topic: 'Cuidados com a Roupa',
    question: 'Como devemos usar as luvinhas e meinhas no bebê?',
    options: [
      { key: 'A', text: 'Deixar as luvas sem tirar nunca (24 horas por dia) até os 6 meses.' },
      { key: 'B', text: 'Usar luvas quando a mãozinha estiver fria, mas deixar o bebê com as mãos livres para mexer, sentir as coisas e brincar.' },
      { key: 'C', text: 'Apertar bem os elásticos no pulso para a luva não cair.' },
      { key: 'D', text: 'Amarrar as luvas com barbante no braço do bebê.' },
    ],
    correctAnswer: 'B',
    justification: 'O bebê precisa usar as mãos para sentir o mundo ao seu redor (tato), mas podemos colocar a luva se a mãozinha gelar.',
    wrongJustifications: {
      A: 'Deixar luva direto impede o bebê de aprender a usar as mãos e sentir as coisas.',
      C: 'Apertar o pulso com elástico forte prende o sangue e machuca gravemente a mãozinha.',
      D: 'Amarrar barbante no braço prende a circulação e pode necrosar o membro.'
    },
    reference: 'Cuidados com o Bebê - MESM'
  },

  // =========================================================================
  // EIXO 6: MARCOS DO DESENVOLVIMENTO (Thalyta Karol) - 25 QUESTÕES OFICIAIS
  // Baseado no documento: Proposta de Produto - Caderneta da Criança 2025
  // =========================================================================
  {
    id: 'marc_t1',
    themeId: 'marcos_desenvolvimento',
    topic: 'Recém-Nascido (Visão e Vínculo)',
    question: 'Qual comportamento é esperado logo nos primeiros dias de vida de um bebê?',
    options: [
      { key: 'A', text: 'Acompanhar o rosto de quem está cuidando dele com o olhar.' },
      { key: 'B', text: 'Segurar um brinquedo de forma voluntária.' },
      { key: 'C', text: 'Sentar por alguns segundos sem ajuda.' },
      { key: 'D', text: 'Bater palmas quando está contente.' },
    ],
    correctAnswer: 'A',
    justification: 'O recém-nascido já demonstra interesse por rostos humanos. Observar e acompanhar o rosto da mãe, do pai ou de outro cuidador é um dos primeiros sinais de interação e evolução dos olhos.',
    wrongJustifications: {
      B: 'Embora o bebê possa fechar a mão por reflexo, ele ainda não apresenta habilidade suficiente para segurar objetos de propósito.',
      C: 'Sentar sem apoio exige controle da cabeça, força muscular e equilíbrio, habilidades desenvolvidas apenas meses depois.',
      D: 'Bater palmas exige coordenação bilateral e capacidade de imitar gestos, aprendidas mais tarde.'
    },
    egoState: 'Adulto (Análise de situação e desenvolvimento neuropsicomotor)',
    senses: 'Visual (Atenção ao rosto humano e olhar)',
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t2',
    themeId: 'marcos_desenvolvimento',
    topic: '1 Mês (Interação Social)',
    question: 'Por volta de 1 mês de vida, qual resposta pode ser observada durante a interação com o bebê?',
    options: [
      { key: 'A', text: 'Imitar gestos simples feitos por um adulto.' },
      { key: 'B', text: 'Responder com sorriso quando estimulado.' },
      { key: 'C', text: 'Falar palavras simples como "mamã".' },
      { key: 'D', text: 'Empilhar dois blocos.' },
    ],
    correctAnswer: 'B',
    justification: 'O sorriso é um importante marco do desenvolvimento. Ele demonstra que o bebê percebe a presença das pessoas e começa a responder às interações.',
    wrongJustifications: {
      A: 'A imitação de gestos é uma habilidade que costuma surgir vários meses depois.',
      C: 'Nessa idade o bebê se comunica principalmente por meio do choro e de sons simples.',
      D: 'Empilhar blocos exige habilidades motoras finas que surgem por volta dos 2 anos.'
    },
    egoState: 'Pai (Apresentação de orientações e acolhimento)',
    senses: 'Visual e Afetivo (Sorriso em resposta à fala ou toque)',
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t3',
    themeId: 'marcos_desenvolvimento',
    topic: '2 Meses (Socialização)',
    question: 'Por volta dos 2 meses, qual comportamento mostra maior interação do bebê com as pessoas?',
    options: [
      { key: 'A', text: 'Fazer sons ou sorrisos durante as brincadeiras.' },
      { key: 'B', text: 'Sentar sozinho por curtos períodos.' },
      { key: 'C', text: 'Pegar pequenos objetos entre os dedos.' },
      { key: 'D', text: 'Andar segurando na mão de um adulto.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa idade, o bebê começa a participar mais ativamente das interações, respondendo com sorrisos, sons e expressões faciais.',
    wrongJustifications: {
      B: 'O controle do corpo ainda está em desenvolvimento e não permite sentar sem apoio.',
      C: 'O movimento chamado de pinça ainda não está presente nessa idade.',
      D: 'Andar exige evolução dos músculos e equilíbrio desenvolvidos muito mais tarde.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t4',
    themeId: 'marcos_desenvolvimento',
    topic: '3 Meses (Linguagem Inicial)',
    question: 'Por volta dos 3 meses, qual comportamento comunicativo pode ser observado?',
    options: [
      { key: 'A', text: 'Produzir sons diferentes e dar risadas.' },
      { key: 'B', text: 'Construir uma torre com blocos.' },
      { key: 'C', text: 'Falar três palavras com significado.' },
      { key: 'D', text: 'Caminhar com apoio.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa fase, o bebê passa a emitir mais sons e pode demonstrar alegria por meio do riso, fortalecendo a comunicação com as pessoas ao seu redor.',
    wrongJustifications: {
      B: 'Empilhar objetos requer habilidade com as mãos e planejamento que ainda não foram desenvolvidos.',
      C: 'O bebê ainda não possui habilidade neuromotora para falar nessa idade.',
      D: 'Antes de caminhar, a criança precisa desenvolver outras capacidades, como sentar e firmar o tronco.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t5',
    themeId: 'marcos_desenvolvimento',
    topic: '6 Meses (Mobilidade)',
    question: 'Por volta dos 6 meses, qual habilidade motora costuma aparecer?',
    options: [
      { key: 'A', text: 'Rolar e mudar de posição sozinho.' },
      { key: 'B', text: 'Andar sem apoio por curtas distâncias.' },
      { key: 'C', text: 'Subir escadas segurando no corrimão.' },
      { key: 'D', text: 'Chutar uma bola para frente.' },
    ],
    correctAnswer: 'A',
    justification: 'Rolar demonstra avanço importante da coordenação motora e do controle do corpo. O bebê deixa de permanecer somente na posição em que foi colocado.',
    wrongJustifications: {
      B: 'Caminhar sem apoio geralmente ocorre após o primeiro ano de vida.',
      C: 'Subir escadas exige equilíbrio e coordenação muito mais avançados.',
      D: 'Embora pareça simples, chutar uma bola requer equilíbrio corporal esperado mais tarde.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t6',
    themeId: 'marcos_desenvolvimento',
    topic: '6 Meses a 1 Ano e Meio (Coordenação)',
    question: 'Entre 6 meses e 1 ano e meio, qual atitude mostra que a criança está aprendendo a usar melhor as mãos?',
    options: [
      { key: 'A', text: 'Passar um brinquedo de uma mão para a outra.' },
      { key: 'B', text: 'Escrever o próprio nome.' },
      { key: 'C', text: 'Vestir uma camisa sozinha.' },
      { key: 'D', text: 'Cortar papel com tesoura.' },
    ],
    correctAnswer: 'A',
    justification: 'Passar um objeto de uma mão para a outra mostra que a criança está aprendendo a controlar melhor os movimentos e a usar as duas mãos juntas.',
    wrongJustifications: {
      B: 'Para escrever o nome, a criança precisa aprender letras e controlar muito bem os movimentos das mãos anos depois.',
      C: 'Colocar roupas sozinho exige planejamento e autonomia motora que aparecem mais tarde.',
      D: 'Usar uma tesoura com precisão é uma atividade motora fina avançada da fase pré-escolar.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t7',
    themeId: 'marcos_desenvolvimento',
    topic: '1º Ano (Postura)',
    question: 'Qual habilidade fundamental costuma surgir durante o primeiro ano de vida?',
    options: [
      { key: 'A', text: 'Sentar sem apoio.' },
      { key: 'B', text: 'Pedalar um triciclo.' },
      { key: 'C', text: 'Escrever algumas letras.' },
      { key: 'D', text: 'Pular com os dois pés.' },
    ],
    correctAnswer: 'A',
    justification: 'Sentar sem ajuda é um passo importante para o desenvolvimento. Isso mostra que a criança já consegue manter o corpo equilibrado sem precisar ser segurada.',
    wrongJustifications: {
      B: 'Pedalar exige força nas pernas, equilíbrio e coordenação mais desenvolvidos.',
      C: 'A escrita depende da aprendizagem escolar e acontece anos depois.',
      D: 'Para pular, a criança precisa controlar bem os movimentos dos dois membros inferiores.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t8',
    themeId: 'marcos_desenvolvimento',
    topic: 'Aprendizado Social',
    question: 'Qual comportamento mostra que a criança está aprendendo observando as pessoas ao seu redor?',
    options: [
      { key: 'A', text: 'Imitar gestos, como bater palmas ou dar tchau.' },
      { key: 'B', text: 'Ler histórias sozinha.' },
      { key: 'C', text: 'Escrever palavras simples.' },
      { key: 'D', text: 'Andar de bicicleta sem rodinhas.' },
    ],
    correctAnswer: 'A',
    justification: 'Quando a criança copia gestos que vê em outras pessoas, ela mostra que está observando, aprendendo e tentando repetir o que aprendeu.',
    wrongJustifications: {
      B: 'Ler exige que a criança já tenha aprendido a reconhecer letras e palavras no ensino formal.',
      C: 'A escrita é uma habilidade que depende de ensino e prática sistemáticos.',
      D: 'Bicicleta sem rodinhas requer equilíbrio dinâmico e maturidade vestibular posterior.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t9',
    themeId: 'marcos_desenvolvimento',
    topic: '1 Ano (Atenção Compartilhada)',
    question: 'Por volta de um ano, o que uma criança costuma fazer ao encontrar um objeto que lhe interessa?',
    options: [
      { key: 'A', text: 'Apontar para mostrar o objeto a outra pessoa.' },
      { key: 'B', text: 'Escrever o nome do objeto.' },
      { key: 'C', text: 'Contar para que o objeto serve.' },
      { key: 'D', text: 'Desenhar o objeto com detalhes.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa idade, a criança costuma apontar para mostrar algo de que gostou ou que chamou sua atenção, demonstrando interesse em compartilhar atenção e interagir.',
    wrongJustifications: {
      B: 'A escrita é aprendida anos depois.',
      C: 'Explicações conceituais completas aparecem nas fases seguintes da fala.',
      D: 'O desenho detalhado exige maturidade perceptiva e motora gráfica posterior.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t10',
    themeId: 'marcos_desenvolvimento',
    topic: 'Final do 1º Ano (Pinça Digital)',
    question: 'No final do primeiro ano de vida, qual habilidade motora fina costuma aparecer?',
    options: [
      { key: 'A', text: 'Pegar um pedaço pequeno de comida usando os dedos (polegar e indicador).' },
      { key: 'B', text: 'Chutar uma bola para longe.' },
      { key: 'C', text: 'Subir escadas sozinho.' },
      { key: 'D', text: 'Arremessar uma bola para um amigo.' },
    ],
    correctAnswer: 'A',
    justification: 'No final do primeiro ano, a criança costuma conseguir pegar objetos pequenos usando principalmente o polegar e o dedo indicador. Isso ajuda em atividades como pegar alimentos ou brinquedos pequenos.',
    wrongJustifications: {
      B: 'Chutar com controle exige mais equilíbrio e coordenação do que o esperado para essa idade.',
      C: 'Subir escadas depende de força, equilíbrio e confiança para caminhar.',
      D: 'Fazer arremesso com direção e controle interpessoal costuma acontecer mais tarde.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t11',
    themeId: 'marcos_desenvolvimento',
    topic: 'Final do 1º Ano (Primeiras Palavras)',
    question: 'Ao final do primeiro ano de vida, qual habilidade relacionada à fala pode ser observada?',
    options: [
      { key: 'A', text: 'Falar uma palavra com significado, como "mamãe" ou "papai".' },
      { key: 'B', text: 'Juntar duas palavras formando uma frase.' },
      { key: 'C', text: 'Contar o que fez durante o dia.' },
      { key: 'D', text: 'Dizer o nome completo.' },
    ],
    correctAnswer: 'A',
    justification: 'Ao final do primeiro ano, muitas crianças já conseguem falar palavras simples para chamar alguém ou pedir alguma coisa, associando som a significado.',
    wrongJustifications: {
      B: 'Combinar palavras costuma acontecer depois que a criança já conhece e usa várias palavras isoladas.',
      C: 'Para relatar acontecimentos passados, a criança precisa desenvolver muito mais a narrativa e o vocabulário.',
      D: 'Dizer o nome completo não é esperado ao final do primeiro ano de vida.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t12',
    themeId: 'marcos_desenvolvimento',
    topic: '1 Ano e 3 Meses a 1 Ano e Meio (Autonomia)',
    question: 'Entre 1 ano e 3 meses e 1 ano e meio, qual atitude mostra que a criança está ficando mais independente?',
    options: [
      { key: 'A', text: 'Comer usando colher ou garfo.' },
      { key: 'B', text: 'Escrever o próprio nome.' },
      { key: 'C', text: 'Vestir toda a roupa sozinha.' },
      { key: 'D', text: 'Amarrar os cadarços.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa idade, muitas crianças começam a tentar comer sozinhas usando colher ou garfo, mostrando o início da autonomia em ações práticas.',
    wrongJustifications: {
      B: 'Escrever é algo ensinado e aprendido anos depois.',
      C: 'Nessa idade a criança ainda precisa de ajuda direta para se vestir.',
      D: 'Amarrar cadarços é uma habilidade motora fina refinada dominada aos 5-6 anos.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t13',
    themeId: 'marcos_desenvolvimento',
    topic: '1 Ano e 3 Meses a 1 Ano e Meio (Vocabulário)',
    question: 'Entre 1 ano e 3 meses e 1 ano e meio, qual avanço na fala costuma aparecer?',
    options: [
      { key: 'A', text: 'Falar três palavras com significado.' },
      { key: 'B', text: 'Contar uma história longa.' },
      { key: 'C', text: 'Dizer o endereço de casa.' },
      { key: 'D', text: 'Falar frases gramaticais completas.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa fase, a criança começa a usar mais palavras funcionais para se comunicar, sendo esperado falar cerca de três palavras simples.',
    wrongJustifications: {
      B: 'Para contar histórias, a criança precisa de vocabulário e estruturação temporal mais desenvolvidos.',
      C: 'Endereço residencial é uma informação memorizada na infância média.',
      D: 'A criança ainda está no estágio de palavras isoladas, aprendendo a juntá-las aos poucos.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t14',
    themeId: 'marcos_desenvolvimento',
    topic: '2 Anos (Construção Lúdica)',
    question: 'Por volta de dois anos, o que a criança pode conseguir fazer ao brincar com blocos?',
    options: [
      { key: 'A', text: 'Montar uma torre com três blocos.' },
      { key: 'B', text: 'Construir uma casa com várias peças e janelas.' },
      { key: 'C', text: 'Montar um quebra-cabeça com muitas peças pequenas.' },
      { key: 'D', text: 'Copiar o desenho de uma casa.' },
    ],
    correctAnswer: 'A',
    justification: 'Empilhar três blocos é uma atividade de equilíbrio e coordenação visuoespacial típica e esperada por volta dos dois anos de idade.',
    wrongJustifications: {
      B: 'Construir estruturas elaboradas exige prática motora e planejamento que surgem depois.',
      C: 'Atividades complexas de quebra-cabeça surgem em faixas etárias maiores.',
      D: 'Copiar desenhos figurativos fechados é conquistado a partir dos 3 aos 4 anos.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t15',
    themeId: 'marcos_desenvolvimento',
    topic: '2 Anos (Exploração Sensorial)',
    question: 'Por volta dos dois anos, qual atitude mostra curiosidade e vontade de aprender?',
    options: [
      { key: 'A', text: 'Explorar objetos usando as mãos, os olhos e os ouvidos.' },
      { key: 'B', text: 'Resolver contas de matemática.' },
      { key: 'C', text: 'Ler uma história sozinho.' },
      { key: 'D', text: 'Escrever frases completas.' },
    ],
    correctAnswer: 'A',
    justification: 'As crianças pequenas aprendem explorando ativamente o que está ao redor. Elas observam, tocam, balançam e escutam os objetos para conhecê-los melhor.',
    wrongJustifications: {
      B: 'Contas matemáticas dependem de abstração lógica ensinada na fase escolar.',
      C: 'A leitura autônoma ainda não é esperada nessa fase.',
      D: 'A escrita sistemática surge apenas na alfabetização escolar.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t16',
    themeId: 'marcos_desenvolvimento',
    topic: '2 Anos (Compreensão Verbal)',
    question: 'Por volta de dois anos, qual atitude mostra que a criança compreende o que as pessoas dizem?',
    options: [
      { key: 'A', text: 'Apontar figuras em um livro quando alguém pede.' },
      { key: 'B', text: 'Ler palavras simples no folheto.' },
      { key: 'C', text: 'Escrever nomes de objetos.' },
      { key: 'D', text: 'Contar até dez em voz alta.' },
    ],
    correctAnswer: 'A',
    justification: 'Quando a criança aponta a figura correta solicitada pelo adulto, ela demonstra que entendeu perfeitamente o comando e a linguagem falada.',
    wrongJustifications: {
      B: 'A leitura textual ainda não faz parte do repertório dessa faixa etária.',
      C: 'A escrita formal surge anos depois.',
      D: 'A contagem com correspondência numérica consolidada é de fases posteriores.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t17',
    themeId: 'marcos_desenvolvimento',
    topic: '2 Anos a 2 Anos e Meio (Frases)',
    question: 'Entre dois anos e dois anos e meio, qual avanço marcante na fala costuma acontecer?',
    options: [
      { key: 'A', text: 'Juntar duas palavras para formar uma frase simples (ex: "quer água", "mamãe vem").' },
      { key: 'B', text: 'Ler pequenas histórias escritas.' },
      { key: 'C', text: 'Escrever frases completas.' },
      { key: 'D', text: 'Explicar palavras difíceis do dicionário.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa idade, muitas crianças começam a combinar duas palavras para formar frases curtas e comunicar necessidades e observações com clareza.',
    wrongJustifications: {
      B: 'A leitura alfabética é competência do ciclo de alfabetização fundamental.',
      C: 'A escrita surge anos depois.',
      D: 'Conceitos lexicais abstratos exigem linguagem adulta madura.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t18',
    themeId: 'marcos_desenvolvimento',
    topic: '3 Anos e Meio a 5 Anos (Classificação)',
    question: 'Entre três anos e meio e cinco anos, qual atividade cognitiva a criança consegue fazer?',
    options: [
      { key: 'A', text: 'Separar objetos da mesma cor (classificação por categorias).' },
      { key: 'B', text: 'Sustentar a cabeça sozinha pela primeira vez.' },
      { key: 'C', text: 'Passar um brinquedo de uma mão para a outra.' },
      { key: 'D', text: 'Rolar para mudar de posição no berço.' },
    ],
    correctAnswer: 'A',
    justification: 'Nessa idade, a criança já consegue perceber semelhanças entre objetos e agrupá-los por critérios de cor, forma ou tamanho, revelando aprendizado lógico e atenção.',
    wrongJustifications: {
      B: 'Sustentar a cabeça é um marco conquistado no primeiro trimestre de vida.',
      C: 'Transferir brinquedos entre as mãos surge ainda no primeiro ano.',
      D: 'Rolar é uma conquista motora dos 5 a 6 meses de vida.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t19',
    themeId: 'marcos_desenvolvimento',
    topic: '3 a 4 Anos (Grafismo Inicial)',
    question: 'Qual atividade com lápis e papel ajuda a acompanhar o desenvolvimento psicomotor nessa fase?',
    options: [
      { key: 'A', text: 'Copiar um círculo fechado.' },
      { key: 'B', text: 'Escrever uma redação com introdução e desfecho.' },
      { key: 'C', text: 'Copiar letras cursivas perfeitamente.' },
      { key: 'D', text: 'Escrever o nome completo legível.' },
    ],
    correctAnswer: 'A',
    justification: 'Copiar um círculo mostra que a criança consegue olhar uma figura, planejar o movimento e tentar reproduzi-la com coordenação motora fina.',
    wrongJustifications: {
      B: 'Redações exigem leitura e escrita plenamente alfabetizadas.',
      C: 'A caligrafia cursiva é ensinada nos primeiros anos da escola primária.',
      D: 'Escrever o nome completo costuma acontecer mais tarde na pré-escola avançada.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t20',
    themeId: 'marcos_desenvolvimento',
    topic: '4 a 5 Anos (Equilíbrio Dinâmico)',
    question: 'Qual habilidade motora ampla mostra que a criança já consegue se equilibrar com firmeza?',
    options: [
      { key: 'A', text: 'Pular em um pé só.' },
      { key: 'B', text: 'Rolar no chão.' },
      { key: 'C', text: 'Sentar sem apoio.' },
      { key: 'D', text: 'Engatinhar.' },
    ],
    correctAnswer: 'A',
    justification: 'Pular em um pé só exige bastante equilíbrio corporal, controle postural e força muscular unilateral refinada.',
    wrongJustifications: {
      B: 'Rolar no chão é uma habilidade motora dos primeiros seis meses de vida.',
      C: 'Sentar sem apoio surge por volta dos 6 a 8 meses.',
      D: 'Engatinhar é uma etapa conquistada antes de andar e pular.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t21',
    themeId: 'marcos_desenvolvimento',
    topic: 'Imaginação e Socialização',
    question: 'Qual brincadeira mostra que a criança está usando a imaginação e interagindo com outras pessoas?',
    options: [
      { key: 'A', text: 'Brincar de faz de conta com outras crianças.' },
      { key: 'B', text: 'Passar um brinquedo de uma mão para outra.' },
      { key: 'C', text: 'Empilhar dois blocos silenciosamente.' },
      { key: 'D', text: 'Rolar no tapete para pegar um chocalho.' },
    ],
    correctAnswer: 'A',
    justification: 'Na brincadeira de faz de conta, a criança cria histórias simbólicas, assume papéis e compartilha regras sociais com colegas.',
    wrongJustifications: {
      B: 'Passar brinquedos de mão está relacionado à motricidade básica do primeiro ano.',
      C: 'Empilhar dois blocos exercita o controle motor simples de lactentes.',
      D: 'Rolar para alcançar brinquedos é locomoção exploratória inicial de bebês.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t22',
    themeId: 'marcos_desenvolvimento',
    topic: 'Crianças Maiores (Esquema Corporal)',
    question: 'Em crianças maiores, qual atividade de desenho pode ser observada para avaliar o desenvolvimento?',
    options: [
      { key: 'A', text: 'Desenhar uma pessoa com várias partes do corpo (cabeça, tronco, pernas e braços).' },
      { key: 'B', text: 'Apenas olhar passivamente para rostos.' },
      { key: 'C', text: 'Apenas emitir sons simples guturais.' },
      { key: 'D', text: 'Passar objetos de uma mão para outra.' },
    ],
    correctAnswer: 'A',
    justification: 'Quando a criança desenha cabeça, braços, pernas e outras partes do corpo, demonstra avanço importante da percepção do próprio corpo e representação mental.',
    wrongJustifications: {
      B: 'Olhar para rostos é um comportamento esperado logo nos primeiros dias de vida.',
      C: 'Fazer apenas sons simples é típico dos primeiros meses de lactância.',
      D: 'Passar objetos entre mãos é habilidade do primeiro semestre de vida.'
    },
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t23',
    themeId: 'marcos_desenvolvimento',
    topic: 'Sensorial (Sentido do Olfato)',
    question: 'Durante uma atividade com diferentes cheiros (como laranja, café ou flores), o que é esperado de uma criança maior?',
    options: [
      { key: 'A', text: 'Reconhecer ou diferenciar alguns cheiros conhecidos do dia a dia.' },
      { key: 'B', text: 'Escrever os nomes químicos dos aromas apresentados.' },
      { key: 'C', text: 'Explicar detalhadamente como o nervo olfatório funciona.' },
      { key: 'D', text: 'Fazer uma tese acadêmica sobre os cheiros.' },
    ],
    correctAnswer: 'A',
    justification: 'Reconhecer aromas do cotidiano ajuda a criança a perceber diferenças entre os estímulos do ambiente, estimulando a memória sensorial e a percepção olfativa.',
    wrongJustifications: {
      B: 'A grafia de fórmulas químicas não é esperada nem exigida de crianças.',
      C: 'A explicação neuroanatômica avançada exige estudos médicos superiores.',
      D: 'Elaboração de teses acadêmicas pertence ao universo da pós-graduação adulta.'
    },
    senses: 'Olfativo (Discriminação de aromas e estímulos)',
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t24',
    themeId: 'marcos_desenvolvimento',
    topic: 'Sensorial (Sentido do Paladar)',
    question: 'Ao experimentar sabores diferentes, como doce, azedo ou salgado, o que a criança pode fazer?',
    options: [
      { key: 'A', text: 'Demonstrar preferência, caretas ou reação espontânea aos sabores.' },
      { key: 'B', text: 'Explicar a composição bioquímica dos alimentos.' },
      { key: 'C', text: 'Escrever uma receita culinária completa.' },
      { key: 'D', text: 'Classificar os alimentos estritamente pelo teor nutricional.' },
    ],
    correctAnswer: 'A',
    justification: 'As crianças costumam reagir expressivamente aos sabores, demonstrando gostar mais de alguns e estranhar outros, o que faz parte da descoberta gustativa saudável.',
    wrongJustifications: {
      B: 'Composição molecular é um conhecimento químico complexo.',
      C: 'A escrita de receitas culinárias exige alfabetização e autonomia.',
      D: 'A análise dietética nutricional é uma especialidade médica e clínica.'
    },
    senses: 'Gustativo (Reconhecimento de sabores e preferências)',
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },
  {
    id: 'marc_t25',
    themeId: 'marcos_desenvolvimento',
    topic: 'Multissensorialidade e Aprendizagem',
    question: 'Qual atividade ajuda a criança a aprender utilizando vários sentidos ao mesmo tempo?',
    options: [
      { key: 'A', text: 'Manipular frutas, sentir o cheiro, observar as cores e provar pequenos pedaços.' },
      { key: 'B', text: 'Decorar uma lista de palavras abstratas sem ver objetos reais.' },
      { key: 'C', text: 'Copiar o mesmo desenho repetidas vezes sem conversar sobre ele.' },
      { key: 'D', text: 'Permanecer sentada calada sem participar da experiência.' },
    ],
    correctAnswer: 'A',
    justification: 'Quando a criança utiliza tato, visão, olfato e paladar integrados em uma atividade prática, ela participa de forma ativa e consolida muito mais oportunidades de aprendizado e desenvolvimento.',
    wrongJustifications: {
      B: 'Memorização mecânica desconectada da realidade utiliza menos canais de aprendizado.',
      C: 'Copiar figuras repetitivamente de forma isolada não exercita múltiplos sentidos.',
      D: 'A passividade impede a estimulação sináptica do cérebro infantil.'
    },
    senses: 'Multissensorial (Tato, Visão, Olfato, Paladar integrados)',
    reference: 'Caderneta da Criança 2025 / Discente Thalyta Karol'
  },

  // =========================================================================
  // EIXO 5: SONO SEGURO E PREVENÇÃO DE ACIDENTES (Ana Lúcia) - 20 QUESTÕES OFICIAIS
  // Baseado no documento: Prevenção de Acidentes Domésticos - Aluna Ana Lúcia
  // =========================================================================
  {
    id: 'sono_a1',
    themeId: 'sono_prevencao',
    topic: 'Quedas em Idosos e Crianças',
    question: 'O que deve ser feito para evitar quedas graves na circulação da casa?',
    options: [
      { key: 'A', text: 'Colocar tapetes soltos no corredor.' },
      { key: 'B', text: 'Manter a iluminação fraca nos cômodos.' },
      { key: 'C', text: 'Manter as salas e áreas de circulação totalmente livres de obstáculos.' },
      { key: 'D', text: 'Deixar objetos espalhados no chão.' },
    ],
    correctAnswer: 'C',
    justification: 'Manter a sala e os ambientes totalmente livres de obstáculos físicos permite uma circulação segura, reduzindo drasticamente o risco de tropeços e quedas graves na terceira idade e na infância.',
    wrongJustifications: {
      A: 'Tapetes soltos provocam escorregões súbitos e perda de apoio.',
      B: 'Baixa iluminação prejudica a percepção de desníveis no chão.',
      D: 'Objetos no chão são os principais causadores de tropeços e fraturas.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a2',
    themeId: 'sono_prevencao',
    topic: 'Produtos de Limpeza e Remédios',
    question: 'Qual é a forma correta de guardar produtos de limpeza e medicamentos em casa?',
    options: [
      { key: 'A', text: 'Em armários baixos e sem chave.' },
      { key: 'B', text: 'Ao alcance de crianças para aprenderem a manusear.' },
      { key: 'C', text: 'No chão, ao lado da lixeira.' },
      { key: 'D', text: 'Em locais altos e trancados com chave.' },
    ],
    correctAnswer: 'D',
    justification: 'A intoxicação infantil ocorre frequentemente por ingestão acidental de substâncias químicas. O bloqueio físico através de trancas e altura impede o acesso direto das crianças.',
    wrongJustifications: {
      A: 'Armários baixos são facilmente abertos pela curiosidade dos pequenos.',
      B: 'Crianças pequenas não possuem discernimento de perigo toxicológico.',
      C: 'Deixar venenos ou desinfetantes no chão facilita ingestões fatais acidentais.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a3',
    themeId: 'sono_prevencao',
    topic: 'Cozinha e Fogão',
    question: 'Como evitar queimaduras térmicas ao cozinhar na cozinha?',
    options: [
      { key: 'A', text: 'Virar os cabos das panelas para o centro e fundo do fogão.' },
      { key: 'B', text: 'Virar os cabos das panelas para fora do fogão.' },
      { key: 'C', text: 'Cozinhar com crianças no colo para supervisioná-las.' },
      { key: 'D', text: 'Usar pano úmido para segurar panelas quentes.' },
    ],
    correctAnswer: 'A',
    justification: 'Manter os cabos voltados para dentro impede que adultos esbarrem neles ao passar e evita que crianças alcancem e puxem o recipiente quente.',
    wrongJustifications: {
      B: 'Cabos para fora provocam acidentes gravíssimos por esbarrões e puxões.',
      C: 'Cozinhar com crianças no colo expõe o bebê a respingos de óleo e água fervente.',
      D: 'O pano úmido conduz o calor rapidamente pela evaporação da água, queimando as mãos.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a4',
    themeId: 'sono_prevencao',
    topic: 'Sufocamento no Berço',
    question: 'Qual medida evita o sufocamento ou engasgo de bebês no berço?',
    options: [
      { key: 'A', text: 'Lotação do berço com ursos de pelúcia.' },
      { key: 'B', text: 'Colocar cobertores pesados e soltos.' },
      { key: 'C', text: 'Manter o berço livre de brinquedos e almofadas (berço limpo).' },
      { key: 'D', text: 'Deitar o bebê de bruços.' },
    ],
    correctAnswer: 'C',
    justification: 'Um berço limpo e sem objetos soltos garante que nada cubra o nariz ou a boca do bebê enquanto ele dorme, prevenindo a asfixia acidental.',
    wrongJustifications: {
      A: 'Pelúcias podem cair sobre a face do lactente e provocar asfixia.',
      B: 'Cobertores soltos podem cobrir as vias aéreas do bebê adormecido.',
      D: 'Deitar de bruços dificulta a respiração e aumenta substancialmente o risco de Morte Súbita Infantil.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a5',
    themeId: 'sono_prevencao',
    topic: 'Janelas e Sacadas',
    question: 'Como prevenir acidentes graves em janelas e sacadas de apartamentos?',
    options: [
      { key: 'A', text: 'Deixar as janelas sempre trancadas sem proteção extra.' },
      { key: 'B', text: 'Instalar redes ou grades de proteção certificadas.' },
      { key: 'C', text: 'Colocar móveis perto da janela para bloquear o acesso.' },
      { key: 'D', text: 'Orientar as crianças a não chegarem perto.' },
    ],
    correctAnswer: 'B',
    justification: 'Apenas avisos e orientações não contêm o impulso das crianças. A barreira física com rede ou grade é a única proteção 100% eficaz contra quedas de altura.',
    wrongJustifications: {
      A: 'Trancas simples podem ser abertas por crianças curiosas.',
      C: 'Móveis perto da janela servem de degrau para a criança escalar até o parapeito.',
      D: 'Apenas orientar verbalmente não garante a segurança da criança.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a6',
    themeId: 'sono_prevencao',
    topic: 'Tomadas e Choques',
    question: 'Qual a atitude correta quanto às tomadas elétricas na presença de crianças?',
    options: [
      { key: 'A', text: 'Deixá-las expostas para facilitar o uso.' },
      { key: 'B', text: 'Cobri-las com protetores isolantes específicos.' },
      { key: 'C', text: 'Ligar vários aparelhos usando adaptadores "T".' },
      { key: 'D', text: 'Passar fios elétricos por baixo de tapetes.' },
    ],
    correctAnswer: 'B',
    justification: 'Protetores de tomada são peças plásticas isolantes que impedem a inserção de objetos metálicos ou dedos na corrente elétrica.',
    wrongJustifications: {
      A: 'Tomadas expostas atraem a curiosidade infantil e causam descargas graves.',
      C: 'Benjamins em excesso provocam sobrecarga e curtos-circuitos perigosos.',
      D: 'Fios debaixo do tapete sofrem desgaste pelo atrito, podendo desencadear incêndios.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a7',
    themeId: 'sono_prevencao',
    topic: 'Afogamento Infantil',
    question: 'Para evitar o afogamento infantil em residências, o que deve ser feito com piscinas e baldes?',
    options: [
      { key: 'A', text: 'Cobrir piscinas apenas no inverno.' },
      { key: 'B', text: 'Esvaziar baldes após o uso e isolar a área da piscina com cercas e portões trancados.' },
      { key: 'C', text: 'Confiar exclusivamente no uso de boias de braço.' },
      { key: 'D', text: 'Deixar a porta do banheiro aberta.' },
    ],
    correctAnswer: 'B',
    justification: 'Crianças pequenas podem se afogar em baldes com apenas alguns centímetros de água em menos de 2 minutos. Baldes devem ficar secos e piscinas isoladas com cercas e travas.',
    wrongJustifications: {
      A: 'Cobrir piscinas só no inverno ignora o risco diário durante o resto do ano todo.',
      C: 'Boias de braço podem furar ou escorregar dos braços da criança na água.',
      D: 'Portas de banheiro abertas dão acesso fácil e perigoso a vasos sanitários e baldes cheios.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a8',
    themeId: 'sono_prevencao',
    topic: 'Objetos Cortantes',
    question: 'Como prevenir cortes no manuseio e guarda de facas e objetos perfurocortantes?',
    options: [
      { key: 'A', text: 'Guardá-los junto com outros utensílios na gaveta sem proteção.' },
      { key: 'B', text: 'Cortar alimentos segurando o item em direção ao próprio corpo.' },
      { key: 'C', text: 'Armazená-los em cepos, suportes magnéticos altos ou bainhas organizadoras.' },
      { key: 'D', text: 'Deixar lâminas expostas sobre a bancada.' },
    ],
    correctAnswer: 'C',
    justification: 'Guardar as lâminas em suportes protegidos e fora do alcance evita que a mão entre em contato direto com o fio da faca ao procurar utensílios em gavetas.',
    wrongJustifications: {
      A: 'Lâminas soltas em gavetas provocam acidentes ao tatear a área.',
      B: 'Cortar em direção ao corpo faz a faca deslizar e atingir quem está manipulando.',
      D: 'Lâminas expostas sobre bancadas são puxadas por crianças.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a9',
    themeId: 'sono_prevencao',
    topic: 'Eletricidade no Banheiro',
    question: 'O que fazer para evitar choque elétrico no banheiro?',
    options: [
      { key: 'A', text: 'Usar o secador de cabelo com os pés descalços e úmidos.' },
      { key: 'B', text: 'Tocar em aparelhos elétricos com o corpo molhado.' },
      { key: 'C', text: 'Secar as mãos e o corpo e usar calçados isolantes antes de manusear aparelhos.' },
      { key: 'D', text: 'Deixar aparelhos elétricos ligados perto da banheira ou do chuveiro.' },
    ],
    correctAnswer: 'C',
    justification: 'Estar seco e calçado com solado de borracha aumenta a resistência elétrica do corpo, impedindo a passagem de descargas que podem ser fatais.',
    wrongJustifications: {
      A: 'A água é condutora e usar aparelhos descalço cria um caminho direto para o choque grave.',
      B: 'Tocar em aparelhos com o corpo molhado facilita o fluxo da corrente elétrica.',
      D: 'Aparelhos perto da água podem cair e provocar eletrocussão imediata.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a10',
    themeId: 'sono_prevencao',
    topic: 'Vazamento de Gás (Sentido do Olfato)',
    question: 'Como agir em caso de suspeita ou confirmação de cheiro de vazamento de gás de cozinha (GLP)?',
    options: [
      { key: 'A', text: 'Acender a luz para procurar onde está o vazamento.' },
      { key: 'B', text: 'Ligar o ventilador ou exaustor elétrico para circular o ar.' },
      { key: 'C', text: 'Utilizar o sentido do olfato para identificar o odor de gás, fechar o registro, abrir portas e janelas e NÃO acionar interruptores.' },
      { key: 'D', text: 'Acender um fósforo para checar se há vazamento no botijão.' },
    ],
    correctAnswer: 'C',
    justification: 'O gás GLP recebe um aditivo com cheiro característico para que o sentido do olfato humano detecte o perigo rapidamente. Ao sentir o cheiro, abrir janelas dissipa o gás sem gerar faíscas.',
    wrongJustifications: {
      A: 'Acender luzes gera faíscas elétricas no interruptor que causam explosões imediatas em ambientes saturados de gás.',
      B: 'Ligar ventiladores aciona o motor gerando faíscas internas que podem detonar o gás.',
      D: 'Aproximar chama de fósforo ou isqueiro gera explosão instantânea.'
    },
    senses: 'Olfativo (Reconhecimento do odor do gás)',
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a11',
    themeId: 'sono_prevencao',
    topic: 'Engasgos com Alimentos',
    question: 'Como prevenir engasgos graves com alimentos em crianças pequenas?',
    options: [
      { key: 'A', text: 'Oferecer uvas e mirtilos inteiros.' },
      { key: 'B', text: 'Cortar alimentos redondos e rijos ao meio ou em tiras finas compridas.' },
      { key: 'C', text: 'Permitir que comam enquanto correm ou pulam.' },
      { key: 'D', text: 'Oferecer pipoca e amendoins a bebês antes de 1 ano.' },
    ],
    correctAnswer: 'B',
    justification: 'Alimentos redondos possuem o diâmetro exato da traqueia infantil. Cortá-los em tiras desfaz a forma circular e elimina o risco de vedar a passagem de ar como uma rolha.',
    wrongJustifications: {
      A: 'Uvas inteiras são as principais causadoras de engasgo e asfixia alimentar em crianças pequenas.',
      C: 'Mastigar em movimento aumenta o risco de aspiração de alimentos para os pulmões.',
      D: 'Pipoca e amendoim são rígidos e perigosos antes dos 4 anos pelo risco de broncoaspiração.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a12',
    themeId: 'sono_prevencao',
    topic: 'Iluminação Noturna',
    question: 'Qual a regra de ouro para a iluminação noturna na casa de idosos e crianças?',
    options: [
      { key: 'A', text: 'Deixar a casa no escuro total para dormir melhor.' },
      { key: 'B', text: 'Manter luzes de presença ou balizadores suaves em corredores e banheiros.' },
      { key: 'C', text: 'Usar apenas velas para economizar energia.' },
      { key: 'D', text: 'Ligar as luzes centrais fortes assim que acordar no susto.' },
    ],
    correctAnswer: 'B',
    justification: 'Balizadores e luzes suaves guiam a caminhada noturna ao banheiro sem ofuscar a visão ou causar desorientação e quedas.',
    wrongJustifications: {
      A: 'O escuro total impede a visão de tapetes e obstáculos no caminho.',
      C: 'Velas acesas sem vigilância causam incêndios em cortinas e tecidos.',
      D: 'Luzes fortes repentinas ofuscam os olhos adaptados à penumbra e provocam tontura.'
    },
    senses: 'Visual (Adaptação à luminosidade)',
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a13',
    themeId: 'sono_prevencao',
    topic: 'Líquidos Quentes',
    question: 'Como evitar queimaduras com líquidos quentes (sopas, cafés, água fervente)?',
    options: [
      { key: 'A', text: 'Usar toalhas de mesa compridas que fiquem penduradas perto do chão.' },
      { key: 'B', text: 'Transportar recipientes quentes perto de onde crianças brincam.' },
      { key: 'C', text: 'Manter bebidas e pratos quentes no centro das mesas, longe das bordas.' },
      { key: 'D', text: 'Apoiar pratos quentes no colo enquanto se senta no sofá.' },
    ],
    correctAnswer: 'C',
    justification: 'Recipientes distantes das bordas não podem ser alcançados pelas mãos de bebês ou derrubados por esbarrões acidentais de quem passa.',
    wrongJustifications: {
      A: 'Toalhas compridas são puxadas por bebês que estão aprendendo a andar, derrubando o líquido quente sobre o corpo.',
      B: 'Circular com panelas perto de brincadeiras infantis resulta em derramamentos graves.',
      D: 'Pratos no colo desequilibram facilmente e provocam queimaduras de 2º e 3º graus.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a14',
    themeId: 'sono_prevencao',
    topic: 'Garrafas PET e Produtos Químicos',
    question: 'Qual o perigo de guardar produtos de limpeza em garrafas de refrigerante (PET)?',
    options: [
      { key: 'A', text: 'O produto perde a validade mais rapidamente.' },
      { key: 'B', text: 'Perigo gravíssimo de intoxicação fatal por confusão de embalagem.' },
      { key: 'C', text: 'A garrafa PET se desfaz no mesmo instante.' },
      { key: 'D', text: 'Não existe perigo algum.' },
    ],
    correctAnswer: 'B',
    justification: 'Pessoas de qualquer idade (especialmente crianças e idosos) associam a garrafa PET a bebidas comestíveis, podendo ingerir ácidos ou desinfetantes por engano.',
    wrongJustifications: {
      A: 'A perda de validade é irrelevante frente ao risco letal de intoxicação.',
      C: 'A garrafa suporta o produto químico, mantendo a armadilha visual ativa.',
      D: 'O risco é extremo e provoca corrosão gástrica e morte infantil.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a15',
    themeId: 'sono_prevencao',
    topic: 'Ferramentas Domésticas',
    question: 'Para evitar acidentes com ferramentas manuais e elétricas em casa, deve-se:',
    options: [
      { key: 'A', text: 'Guardá-las ligadas na tomada para facilitar o uso.' },
      { key: 'B', text: 'Usá-las sem os Equipamentos de Proteção Individual (EPIs).' },
      { key: 'C', text: 'Armazená-las desligadas da tomada e fora do alcance das crianças.' },
      { key: 'D', text: 'Permitir que crianças brinquem com as ferramentas se estiverem desligadas.' },
    ],
    correctAnswer: 'C',
    justification: 'Ferramentas elétricas desligadas e guardadas em locais trancados evitam cortes, lacerações e amputações acidentais.',
    wrongJustifications: {
      A: 'Deixar na tomada permite o acionamento por toque involuntário de crianças.',
      B: 'Trabalhar sem EPI expõe olhos e mãos a ferimentos e estilhaços graves.',
      D: 'Brinquedos improvisados com ferramentas condicionam a criança a subestimar o perigo cortante.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a16',
    themeId: 'sono_prevencao',
    topic: 'Sacos Plásticos e Asfixia',
    question: 'Como prevenir sufocamento infantil com sacos plásticos?',
    options: [
      { key: 'A', text: 'Deixá-los no chão como brinquedo.' },
      { key: 'B', text: 'Dar nós firmes nos sacos e guardá-los fora do alcance das crianças.' },
      { key: 'C', text: 'Utilizá-los como touca de banho em bebês.' },
      { key: 'D', text: 'Guardá-los no chão do quarto da criança.' },
    ],
    correctAnswer: 'B',
    justification: 'Amarrar os sacos em nós reduz seu volume e impede que a criança os coloque na cabeça. O armazenamento no alto garante a segurança física.',
    wrongJustifications: {
      A: 'Sacos no chão aderem ao rosto por sucção e vácuo, impedindo a respiração em poucos segundos.',
      C: 'Utilizar plásticos na cabeça de bebês provoca asfixia mecânica súbita.',
      D: 'Deixar sacos ao alcance infantil é um convite a acidentes por sufocamento.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a17',
    themeId: 'sono_prevencao',
    topic: 'Piso Molhado',
    question: 'O que fazer para evitar acidentes graves no piso molhado da lavanderia ou banheiros?',
    options: [
      { key: 'A', text: 'Correr para secar o local rapidamente.' },
      { key: 'B', text: 'Aplicar cera para dar brilho ao piso cerâmico.' },
      { key: 'C', text: 'Enxugar imediatamente qualquer líquido derramado e usar piso antiderrapante.' },
      { key: 'D', text: 'Usar meias lisas ao andar nessas áreas úmidas.' },
    ],
    correctAnswer: 'C',
    justification: 'Manter a superfície seca e utilizar revestimentos com textura antiderrapante mantém o atrito necessário para um caminhar firme e seguro.',
    wrongJustifications: {
      A: 'Correr sobre chão molhado aumenta o impacto e a gravidade da queda.',
      B: 'Aplicar cera deixa o piso ainda mais escorregadio e perigoso.',
      D: 'Meias lisas atuam como patins em pisos frios e úmidos, provocando escorregões imediatos.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a18',
    themeId: 'sono_prevencao',
    topic: 'Armas de Fogo',
    question: 'Onde devem ser guardadas armas de fogo em uma residência para evitar tragédias?',
    options: [
      { key: 'A', text: 'Debaixo do travesseiro para acesso rápido.' },
      { key: 'B', text: 'No topo do guarda-roupa, sem chave.' },
      { key: 'C', text: 'Em cofre trancado com chave/segredo, descarregadas e com munição em local separado.' },
      { key: 'D', text: 'Na gaveta da mesa de cabeceira.' },
    ],
    correctAnswer: 'C',
    justification: 'A trava física do cofre somada à separação da munição impede disparos acidentais provocados por crianças ou manuseio inadequado.',
    wrongJustifications: {
      A: 'Travesseiros são facilmente alcançados por crianças e curiosos.',
      B: 'Armários altos são escalados por crianças em busca de objetos escondidos.',
      D: 'Gavetas de criados-mudos são de acesso fácil e perigoso para menores.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a19',
    themeId: 'sono_prevencao',
    topic: 'Rede Elétrica e Incêndios',
    question: 'Como evitar incêndios causados por sobrecarga na rede elétrica da casa?',
    options: [
      { key: 'A', text: 'Ligar vários aparelhos potentes no mesmo benjamim/adaptador.' },
      { key: 'B', text: 'Manter aparelhos antigos com fios descascados ligados.' },
      { key: 'C', text: 'Usar réguas/filtros com fusível de proteção e respeitar o limite de corrente das tomadas.' },
      { key: 'D', text: 'Passar fiação elétrica por baixo de tapetes de sala.' },
    ],
    correctAnswer: 'C',
    justification: 'Filtros de linha e réguas equipadas com fusíveis/disjuntores cortam a energia automaticamente ao notar um pico ou aquecimento, prevenindo incêndios.',
    wrongJustifications: {
      A: 'Ligar múltiplos aparelhos em benjamins provoca superaquecimento e derretimento dos plásticos.',
      B: 'Fios descascados geram centelhas e curto-circuito em contato com tecidos.',
      D: 'Cobrir fiação com tapetes acelera o desgaste pelo pisoteio contínuo de pessoas.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },
  {
    id: 'sono_a20',
    themeId: 'sono_prevencao',
    topic: 'Animais Peçonhentos',
    question: 'Qual a melhor medida para prevenir picadas de animais peçonhentos em casas perto de áreas verdes?',
    options: [
      { key: 'A', text: 'Acumular entulhos e lenhas perto da porta de entrada.' },
      { key: 'B', text: 'Manter quintais limpos, vedar frestas nas portas e chacoalhar calçados antes de usá-los.' },
      { key: 'C', text: 'Deixar o lixo orgânico exposto no quintal.' },
      { key: 'D', text: 'Andar sempre descalço no jardim à noite.' },
    ],
    correctAnswer: 'B',
    justification: 'Escorpiões e aranhas se escondem no interior de calçados e entulhos. Sacudir as peças e fechar frestas interrompe o contato acidental com o veneno.',
    wrongJustifications: {
      A: 'Acumular lenha e entulho cria o abrigo úmido ideal para animais peçonhentos.',
      C: 'Lixo exposto atrai baratas, que são o alimento predileto de escorpiões.',
      D: 'Andar descalço no escuro expõe os pés a picadas acidentais de alta gravidade.'
    },
    reference: 'Prevenção de Acidentes Domésticos - Aluna Ana Lúcia'
  },

  // =========================================================================
  // EIXO 1: VACINAÇÃO INFANTIL (Clarysse) - 25 QUESTÕES MÉTODO CTM3
  // Baseado no documento: Jogo Educacional Método CTM3 - Vacinação Infantil
  // =========================================================================
  {
    id: 'vac_ctm1',
    themeId: 'vacinas',
    topic: 'Finalidade das Vacinas',
    question: 'Para que servem as vacinas?',
    options: [
      { key: 'A', text: 'Para proteger contra doenças e reduzir o risco de complicações.' },
      { key: 'B', text: 'Curar todas as doenças.' },
      { key: 'C', text: 'Aumentar o apetite.' },
      { key: 'D', text: 'Evitar consultas.' },
    ],
    correctAnswer: 'A',
    justification: 'As vacinas estimulam o sistema imunológico a desenvolver proteção contra doenças específicas antes de termos contato com elas.',
    wrongJustifications: {
      B: 'A principal finalidade das vacinas é prevenir doenças, não curar todas elas após instaladas.',
      C: 'Aumentar o apetite não é a finalidade das vacinas.',
      D: 'A vacinação não substitui consultas e acompanhamento de saúde.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm2',
    themeId: 'vacinas',
    topic: 'Vacina Atrasada',
    question: 'Se uma vacina estiver atrasada, o que a mãe deve fazer?',
    options: [
      { key: 'A', text: 'Não tomar mais.' },
      { key: 'B', text: 'Esperar a próxima campanha.' },
      { key: 'C', text: 'Procurar o serviço de vacinação.' },
      { key: 'D', text: 'Jogar a caderneta fora.' },
    ],
    correctAnswer: 'C',
    justification: 'O profissional avaliará as doses recebidas e orientará a atualização do esquema sem necessidade de reiniciar do zero.',
    wrongJustifications: {
      A: 'A vacinação deve ser continuada, mesmo quando há atraso.',
      B: 'Não é necessário esperar uma campanha para procurar a vacinação de rotina nos postos de saúde.',
      D: 'A caderneta é importante para acompanhar e registrar as vacinas por toda a vida.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm3',
    themeId: 'vacinas',
    topic: 'Avaliação Vacinal',
    question: 'Quem deve avaliar se uma criança pode ou não receber determinada vacina?',
    options: [
      { key: 'A', text: 'Qualquer pessoa.' },
      { key: 'B', text: 'Um profissional de saúde.' },
      { key: 'C', text: 'Um vizinho.' },
      { key: 'D', text: 'Outra criança.' },
    ],
    correctAnswer: 'B',
    justification: 'O profissional verifica as condições clínicas da criança, as indicações e contraindicações técnicas pertinentes com segurança.',
    wrongJustifications: {
      A: 'A avaliação deve seguir as orientações técnicas e critérios de vacinação.',
      C: 'A opinião de um vizinho não substitui a avaliação profissional habilitada.',
      D: 'A avaliação vacinal exige conhecimento técnico da equipe de saúde.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm4',
    themeId: 'vacinas',
    topic: 'Fases da Vida',
    question: 'A vacinação deve ser acompanhada:',
    options: [
      { key: 'A', text: 'Apenas durante o primeiro mês.' },
      { key: 'B', text: 'Durante as diferentes fases da vida, conforme o calendário.' },
      { key: 'C', text: 'Somente quando a criança fica doente.' },
      { key: 'D', text: 'Apenas na escola.' },
    ],
    correctAnswer: 'B',
    justification: 'O calendário estabelece as vacinas e os períodos recomendados para cada grupo etário (crianças, adolescentes, adultos e idosos).',
    wrongJustifications: {
      A: 'A vacinação continua ao longo da infância e das demais fases da vida.',
      C: 'A vacinação é principalmente preventiva e não depende do aparecimento de doenças.',
      D: 'A vacinação ocorre prioritariamente nos serviços de saúde e em outras estratégias autorizadas.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm5',
    themeId: 'vacinas',
    topic: 'Proteção Precoce',
    question: 'Por que a vacinação é importante desde os primeiros dias de vida?',
    options: [
      { key: 'A', text: 'Porque o bebê não precisa de outros cuidados.' },
      { key: 'B', text: 'Porque ajuda a iniciar sua proteção contra doenças imunopreveníveis.' },
      { key: 'C', text: 'Para evitar todas as consultas médicas.' },
      { key: 'D', text: 'Para substituir o aleitamento materno.' },
    ],
    correctAnswer: 'B',
    justification: 'A vacinação oferece proteção precoce contra doenças imunopreveníveis que podem ser graves nos primeiros meses.',
    wrongJustifications: {
      A: 'A vacinação não substitui os demais cuidados essenciais com o bebê.',
      C: 'O bebê precisa continuar com o acompanhamento médico de puericultura.',
      D: 'Vacinação e aleitamento são cuidados complementares que se somam.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm6',
    themeId: 'vacinas',
    topic: 'Esquema Multidose',
    question: 'Por que as crianças precisam receber algumas vacinas em diferentes doses?',
    options: [
      { key: 'A', text: 'Porque todas as vacinas são iguais.' },
      { key: 'B', text: 'Para completar o esquema de proteção indicado e gerar imunidade duradoura.' },
      { key: 'C', text: 'Para substituir consultas médicas.' },
      { key: 'D', text: 'Porque uma dose nunca funciona.' },
    ],
    correctAnswer: 'B',
    justification: 'As doses seguem as recomendações do calendário vacinal para estimular a produção contínua e a memória de anticorpos protetores.',
    wrongJustifications: {
      A: 'Cada vacina possui indicações, composição e esquemas próprios.',
      C: 'A vacinação não substitui o acompanhamento de saúde da criança.',
      D: 'Algumas vacinas precisam de reforços para atingir a taxa de proteção ideal recomendada.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm7',
    themeId: 'vacinas',
    topic: 'Caderneta de Vacinação',
    question: 'Você está preparando a bolsa do bebê para uma consulta. Qual item relacionado à vacinação não pode ser esquecido?',
    options: [
      { key: 'A', text: 'Mamadeira.' },
      { key: 'B', text: 'Caderneta da Criança.' },
      { key: 'C', text: 'Brinquedo.' },
      { key: 'D', text: 'Cobertor.' },
    ],
    correctAnswer: 'B',
    justification: 'A Caderneta da Criança permite consultar e registrar informações fundamentais sobre a vacinação e a saúde do bebê.',
    wrongJustifications: {
      A: 'A mamadeira não registra as vacinas recebidas pelo bebê.',
      C: 'O brinquedo pode distrair o bebê, mas não contém seu histórico vacinal.',
      D: 'O cobertor traz conforto, mas não substitui o registro de vacinação oficial.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm8',
    themeId: 'vacinas',
    topic: 'Continuidade do Esquema',
    question: 'Você se mudou de cidade e precisa vacinar seu filho. O que deve fazer?',
    options: [
      { key: 'A', text: 'Parar a vacinação.' },
      { key: 'B', text: 'Procurar o serviço de vacinação do novo município e apresentar a caderneta.' },
      { key: 'C', text: 'Esperar voltar ao município anterior.' },
      { key: 'D', text: 'Recomeçar todas as vacinas do início.' },
    ],
    correctAnswer: 'B',
    justification: 'O serviço de saúde verifica as doses já recebidas e dá continuidade ao esquema vacinal normalmente pelo SUS.',
    wrongJustifications: {
      A: 'A mudança de município não é motivo para interromper a vacinação.',
      C: 'É perfeitamente possível e recomendado procurar a sala de vacina no novo município.',
      D: 'As doses anteriores registradas devem ser consideradas na atualização do esquema.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm9',
    themeId: 'vacinas',
    topic: 'Perda de Documento',
    question: 'Você perdeu a Caderneta da Criança. Qual atitude é mais adequada?',
    options: [
      { key: 'A', text: 'Nunca mais vacinar.' },
      { key: 'B', text: 'Procurar o serviço de saúde para orientação e recuperação dos registros disponíveis.' },
      { key: 'C', text: 'Inventar de cabeça as doses recebidas.' },
      { key: 'D', text: 'Esperar a criança crescer para resolver.' },
    ],
    correctAnswer: 'B',
    justification: 'O serviço de saúde pode consultar o histórico nos sistemas informatizados do SUS e orientar a emissão de uma nova via.',
    wrongJustifications: {
      A: 'A perda da caderneta física não impede a vacinação continuada.',
      C: 'As doses devem ser confirmadas por registros oficiais disponíveis nos sistemas de saúde.',
      D: 'A vacinação deve seguir o calendário recomendado para cada idade sem postergações.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm10',
    themeId: 'vacinas',
    topic: 'Reações Adversas',
    question: 'Seu filho tomou uma vacina e apresentou uma reação que deixou você preocupada. Qual é a atitude mais segura?',
    options: [
      { key: 'A', text: 'Ignorar sempre o sintoma.' },
      { key: 'B', text: 'Procurar orientação de um profissional de saúde no posto ou hospital.' },
      { key: 'C', text: 'Nunca mais vacinar a criança.' },
      { key: 'D', text: 'Dar qualquer remédio por conta própria.' },
    ],
    correctAnswer: 'B',
    justification: 'O profissional de saúde avalia a reação apresentada e orienta os cuidados e condutas necessárias com total segurança.',
    wrongJustifications: {
      A: 'Reações intensas ou persistentes precisam de avaliação clínica atenta.',
      C: 'Uma reação comum não significa, automaticamente, contraindicação às próximas doses.',
      D: 'Medicamentos devem ser utilizados conforme estrita orientação profissional.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm11',
    themeId: 'vacinas',
    topic: 'Resfriado e Sintomas Leves',
    question: 'Seu filho está com resfriado leve e nariz entupido. Pode levá-lo para vacinar?',
    options: [
      { key: 'A', text: 'Somente se ele estiver sentindo cheiro.' },
      { key: 'B', text: 'Procurar o serviço de vacinação para avaliar o quadro da criança.' },
      { key: 'C', text: 'Nunca pode vacinar com qualquer sintoma.' },
      { key: 'D', text: 'Devo dar remédio forte antes de ir.' },
    ],
    correctAnswer: 'B',
    justification: 'Resfriados leves geralmente não impedem a vacinação, mas a avaliação depende do quadro clínico geral examinado pelo profissional de saúde.',
    wrongJustifications: {
      A: 'O olfato não determina se a criança pode receber uma vacina.',
      C: 'Resfriados leves sem febre alta, em geral, não contraindicam a imunização.',
      D: 'Não se deve medicar preventivamente a criança por conta própria.'
    },
    senses: 'Olfativo / Clínico',
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm12',
    themeId: 'vacinas',
    topic: 'Pontualidade das Doses',
    question: 'Qual dessas atitudes ajuda a evitar o esquecimento das próximas vacinas?',
    options: [
      { key: 'A', text: 'Não olhar a caderneta.' },
      { key: 'B', text: 'Usar lembretes e acompanhar as datas anotadas.' },
      { key: 'C', text: 'Esperar alguém lembrar.' },
      { key: 'D', text: 'Vacinar somente quando houver campanha na televisão.' },
    ],
    correctAnswer: 'B',
    justification: 'Os lembretes e a consulta frequente à caderneta ajudam a manter a vacinação rigorosamente em dia.',
    wrongJustifications: {
      A: 'Consultar a caderneta é a forma mais eficaz de acompanhar as doses.',
      C: 'A responsabilidade do acompanhamento é dos pais e cuidadores da criança.',
      D: 'A vacinação de rotina está disponível durante todo o ano nos postos de saúde.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm13',
    themeId: 'vacinas',
    topic: 'Cuidadores e Família',
    question: 'Seu bebê vai passar alguns dias na casa dos avós. O que é importante orientar sobre a vacinação?',
    options: [
      { key: 'A', text: 'Não precisa falar sobre isso.' },
      { key: 'B', text: 'Informar sobre a caderneta e os cuidados com a vacinação.' },
      { key: 'C', text: 'Pedir para não vacinarem de jeito nenhum.' },
      { key: 'D', text: 'Deixar a caderneta em qualquer lugar.' },
    ],
    correctAnswer: 'B',
    justification: 'Essas informações ajudam os responsáveis provisórios a acompanhar as necessidades de saúde e eventuais cuidados do bebê.',
    wrongJustifications: {
      A: 'Compartilhar informações de saúde ajuda a manter a continuidade dos cuidados com o bebê.',
      C: 'A vacinação deve seguir o calendário e as orientações técnicas do serviço de saúde.',
      D: 'A caderneta deve ser guardada com cuidado para facilitar sua consulta.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm14',
    themeId: 'vacinas',
    topic: 'Desconforto no Local',
    question: 'Ao pegar seu bebê no colo após a vacinação, você percebe que ele evita movimentar o braço onde recebeu a aplicação. O que é mais adequado?',
    options: [
      { key: 'A', text: 'Forçaria o movimento do bracinho.' },
      { key: 'B', text: 'Apertaria o local da injeção com força.' },
      { key: 'C', text: 'Observaria com carinho e buscaria orientação se preocupada.' },
      { key: 'D', text: 'Suspenderia definitivamente a vacinação.' },
    ],
    correctAnswer: 'C',
    justification: 'Dor e reações locais leves podem ocorrer naturalmente após a vacinação; o acolhimento carinhoso e a observação são o caminho adequado.',
    wrongJustifications: {
      A: 'Não é adequado forçar um membro dolorido recém-injetado.',
      B: 'Apertar pode aumentar o desconforto e a inflamação local.',
      D: 'Reações locais comuns não contraindicam doses subsequentes do calendário.'
    },
    senses: 'Tato e Acolhimento',
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm15',
    themeId: 'vacinas',
    topic: 'Acolhimento após Vacina',
    question: 'Seu bebê começa a chorar logo após receber a vacina. Ao pegá-lo no colo, qual atitude é adequada?',
    options: [
      { key: 'A', text: 'Evitaria tocá-lo.' },
      { key: 'B', text: 'Sacudiria fortemente para distrair.' },
      { key: 'C', text: 'Acolheria com carinho e observaria seu estado.' },
      { key: 'D', text: 'Deixaria sozinho no quarto até parar de chorar.' },
    ],
    correctAnswer: 'C',
    justification: 'O abraço e o carinho permitem confortar a criança, transmitir segurança e acompanhar possíveis reações.',
    wrongJustifications: {
      A: 'O choro é normal e a criança necessita de aconchego dos pais.',
      B: 'Nunca se deve sacudir um bebê pelo risco grave de lesão cerebral.',
      D: 'O bebê deve ser acolhido e acalmado pelos cuidadores.'
    },
    senses: 'Tato e Afeto',
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm16',
    themeId: 'vacinas',
    topic: 'Cuidado com Roupas pós-vacina',
    question: 'Ao vestir seu bebê depois da vacinação, você percebe incômodo quando a roupa encosta no local da aplicação. O que fazer?',
    options: [
      { key: 'A', text: 'Apertaria o local com ataduras.' },
      { key: 'B', text: 'Massagearia com bastante força.' },
      { key: 'C', text: 'Observaria o bebê com roupas leves e buscaria orientação se preocupada.' },
      { key: 'D', text: 'Suspenderia as próximas vacinas.' },
    ],
    correctAnswer: 'C',
    justification: 'Roupas leves de algodão reduzem o atrito no local da aplicação, aliviando o incômodo passageiro.',
    wrongJustifications: {
      A: 'Apertar não é conduta indicada para aliviar reações vacinais.',
      B: 'Não é recomendada massagem vigorosa no ponto de injeção.',
      D: 'Reações locais leves não impedem a aplicação de doses posteriores.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm17',
    themeId: 'vacinas',
    topic: 'Imunidade Coletiva',
    question: 'O que pode acontecer quando a cobertura vacinal de uma população diminui?',
    options: [
      { key: 'A', text: 'As doenças preveníveis podem voltar a circular com maior facilidade.' },
      { key: 'B', text: 'Todas as doenças desaparecem espontaneamente.' },
      { key: 'C', text: 'As vacinas passam a funcionar melhor.' },
      { key: 'D', text: 'As crianças deixam de precisar de acompanhamento.' },
    ],
    correctAnswer: 'A',
    justification: 'A menor cobertura vacinal favorece a circulação comunitária de germes e o reaparecimento de surtos de doenças perigosas.',
    wrongJustifications: {
      B: 'A redução da vacinação não elimina doenças, pelo contrário, facilita epidemias.',
      C: 'A cobertura vacinal populacional não altera a resposta individual do organismo.',
      D: 'A vacinação faz parte do cuidado contínuo e preventivo.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm18',
    themeId: 'vacinas',
    topic: 'Vacina versus Medicamento',
    question: 'Qual é a diferença entre vacina e remédio para tratar uma doença?',
    options: [
      { key: 'A', text: 'A vacina é principalmente para prevenir e os remédios podem ser usados para tratar a doença.' },
      { key: 'B', text: 'A vacina sempre trata a doença depois que ela aparece.' },
      { key: 'C', text: 'Medicamentos substituem todas as vacinas.' },
      { key: 'D', text: 'Não existe diferença entre os dois.' },
    ],
    correctAnswer: 'A',
    justification: 'A vacina treina o corpo preventivamente contra infecções futuras, enquanto medicamentos atuam no tratamento e controle de sintomas já presentes.',
    wrongJustifications: {
      B: 'A principal finalidade das vacinas é a prevenção primária.',
      C: 'O tratamento de uma infecção não confere a mesma imunização estruturada de uma vacina.',
      D: 'Vacinas e medicamentos têm finalidades, componentes e ações biológicas distintas.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm19',
    themeId: 'vacinas',
    topic: 'Proteção Comunitária',
    question: 'Por que vacinar uma criança também pode ajudar outras pessoas?',
    options: [
      { key: 'A', text: 'Porque a vacinação pode diminuir a circulação de algumas doenças na comunidade.' },
      { key: 'B', text: 'Porque a vacina passa da criança para todos ao redor.' },
      { key: 'C', text: 'Porque impede qualquer doença no mundo.' },
      { key: 'D', text: 'Porque somente crianças vacinadas podem transmitir doenças.' },
    ],
    correctAnswer: 'A',
    justification: 'Ao diminuir a transmissão na comunidade, a vacinação contribui para a imunidade coletiva, protegendo inclusive pessoas vulneráveis.',
    wrongJustifications: {
      B: 'A proteção é imunológica individual e não se transmite pelo toque.',
      C: 'A proteção gerada é específica para as doenças contempladas na formulação.',
      D: 'Pessoas vacinadas têm menor risco de adquirir e repassar infecções.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm20',
    themeId: 'vacinas',
    topic: 'Abrangência do PNI',
    question: 'As vacinas são somente para as crianças?',
    options: [
      { key: 'A', text: 'Sim, apenas para crianças pequenas.' },
      { key: 'B', text: 'Não. O PNI contempla diferentes fases da vida (crianças, adolescentes, adultos, idosos e gestantes).' },
      { key: 'C', text: 'Somente para gestantes.' },
      { key: 'D', text: 'Somente para idosos acamados.' },
    ],
    correctAnswer: 'B',
    justification: 'O Programa Nacional de Imunizações (PNI) possui calendários atualizados para todas as faixas etárias da população.',
    wrongJustifications: {
      A: 'Adultos e idosos também necessitam de vacinas periódicas e reforços.',
      C: 'As gestantes são um público prioritário, mas não o único.',
      D: 'O PNI é universal e protege a população ao longo de toda a vida.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm21',
    themeId: 'vacinas',
    topic: 'Calendário em Dia',
    question: 'O que é uma boa razão para manter a vacinação infantil em dia?',
    options: [
      { key: 'A', text: 'Garantir que a criança receba as vacinas nos períodos recomendados para proteção ideal.' },
      { key: 'B', text: 'Evitar qualquer consulta de saúde.' },
      { key: 'C', text: 'Fazer todas as vacinas de uma única vez em um dia só.' },
      { key: 'D', text: 'Vacinar somente quando houver campanha na televisão.' },
    ],
    correctAnswer: 'A',
    justification: 'O calendário define idades e intervalos para oferecer a melhor proteção imunológica na fase de maior suscetibilidade da infância.',
    wrongJustifications: {
      B: 'A vacinação integra o acompanhamento pediátrico integral e não o substitui.',
      C: 'Cada vacina possui seu próprio esquema e idade recomendada.',
      D: 'A vacinação de rotina está disponível durante todo o ano nas unidades básicas.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm22',
    themeId: 'vacinas',
    topic: 'Proteção contra Complicações',
    question: 'Qual frase explica melhor por que devemos vacinar as crianças?',
    options: [
      { key: 'A', text: 'Porque vacinas ajudam a prevenir doenças que podem causar consequências graves.' },
      { key: 'B', text: 'Porque vacinas garantem que a criança nunca ficará doente de nada.' },
      { key: 'C', text: 'Porque vacina substitui todos os outros cuidados infantis.' },
      { key: 'D', text: 'Porque vacina serve apenas quando a criança já está doente.' },
    ],
    correctAnswer: 'A',
    justification: 'O Ministério da Saúde destaca a vacinação como uma das principais medidas preventivas de proteção da infância contra sequelas e hospitalizações.',
    wrongJustifications: {
      B: 'Nenhuma vacina protege contra todas as doenças existentes no mundo.',
      C: 'A vacinação é uma parte essencial do cuidado integral de saúde.',
      D: 'A principal finalidade das vacinas é preventiva, antes de o indivíduo adoecer.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm23',
    themeId: 'vacinas',
    topic: 'Primeiros 1.000 Dias',
    question: 'Por que o bebê precisa receber vacinas desde os primeiros meses?',
    options: [
      { key: 'A', text: 'Porque esse período é importante para construir proteção contra doenças imunopreveníveis.' },
      { key: 'B', text: 'Porque bebês não possuem sistema imunológico.' },
      { key: 'C', text: 'Porque vacina substitui o aleitamento materno.' },
      { key: 'D', text: 'Porque depois dos primeiros meses nenhuma vacina é necessária.' },
    ],
    correctAnswer: 'A',
    justification: 'O Ministério da Saúde destaca a importância fundamental da imunização nos primeiros 1.000 dias de vida para fortalecer a resposta imune.',
    wrongJustifications: {
      B: 'Eles possuem sistema imunológico natural, que está em pleno amadurecimento.',
      C: 'Imunização e aleitamento são cuidados complementares distintos.',
      D: 'A vacinação continua ao longo de toda a infância com doses de reforço.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm24',
    themeId: 'vacinas',
    topic: 'Segurança Biológica',
    question: 'As vacinas contêm o próprio vírus ou bactéria sempre em sua forma capaz de causar a doença?',
    options: [
      { key: 'A', text: 'Sim, sempre em sua forma selvagem original.' },
      { key: 'B', text: 'Não. Os componentes são preparados para estimular uma resposta imunológica com segurança.' },
      { key: 'C', text: 'Sim, e por isso a criança sempre fica doente de verdade.' },
      { key: 'D', text: 'Não, porque as vacinas não possuem nenhum componente biológico.' },
    ],
    correctAnswer: 'B',
    justification: 'O objetivo é gerar anticorpos protetores sem causar a doença, utilizando antígenos inativados, fragmentos proteicos ou formas atenuadas seguras.',
    wrongJustifications: {
      A: 'As vacinas utilizam formulações biotecnológicas testadas para segurança máxima.',
      C: 'A vacinação tem como meta a proteção e não o desenvolvimento da infecção grave.',
      D: 'Seus componentes são desenhados para que o corpo reconheça o agente infeccioso específico.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },
  {
    id: 'vac_ctm25',
    themeId: 'vacinas',
    topic: 'Responsabilidade e Cuidado',
    question: 'Qual dessas atitudes demonstra cuidado responsável com a saúde da criança?',
    options: [
      { key: 'A', text: 'Seguir o calendário de vacinação recomendado na caderneta.' },
      { key: 'B', text: 'Vacinar somente quando houver notícia de surto.' },
      { key: 'C', text: 'Interromper o esquema quando a criança parece saudável.' },
      { key: 'D', text: 'Escolher as vacinas com base em informações de redes sociais.' },
    ],
    correctAnswer: 'A',
    justification: 'Seguir o calendário mantém a proteção imunológica conforme as recomendações técnicas do Ministério da Saúde.',
    wrongJustifications: {
      B: 'A vacinação de rotina deve ser preventiva e contínua.',
      C: 'Estar com boa aparência não elimina a necessidade das doses de reforço.',
      D: 'Deve-se buscar orientação em fontes científicas confiáveis e com profissionais do SUS.'
    },
    reference: 'Método CTM3 Vacinação Infantil / Discente Clarysse'
  },

  // Questões clínicas complementares de Vacinas (Neonatal)
  {
    id: 'vac_clin1',
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
    id: 'vac_clin2',
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
    id: 'vac_clin3',
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
    id: 'vac_clin4',
    themeId: 'vacinas',
    topic: 'Poliomielite e Novas Diretrizes',
    question: 'Qual formato da vacina contra a Paralisia Infantil (Poliomielite) é atualmente padronizado no SUS para maior segurança?',
    options: [
      { key: 'A', text: 'Vacina Inativada da Poliomielite (VIP) injetável, com vírus inativado.' },
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

  // =========================================================================
  // EIXO 4: ALEITAMENTO E INTRODUÇÃO ALIMENTAR (João) - 10 QUESTÕES OFICIAIS
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
  // EIXO 3: PRIMEIROS SOCORROS (Yasmim) - 6 QUESTÕES DE SUPORTE À VIDA
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
  }
];
