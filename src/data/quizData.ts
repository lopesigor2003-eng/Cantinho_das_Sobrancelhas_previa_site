import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Como estão suas sobrancelhas atualmente?',
    hint: 'Selecione a opção mais próxima da sua realidade hoje',
    options: [
      {
        id: 'falhas',
        label: 'Com falhas visíveis ou ralas',
        detail: 'Pouca quantidade de pelos ou falhas causadas por pinçamento antigo',
        matchedProcedure: 'micro-fio-a-fio'
      },
      {
        id: 'rebeldes',
        label: 'Pelos rebeldes, enrolados ou caídos',
        detail: 'Tenho bastante pelo, mas eles apontam para baixo ou não param no lugar',
        matchedProcedure: 'brow-lamination'
      },
      {
        id: 'sem-formato',
        label: 'Pelos normais, mas sem desenho definido',
        detail: 'Quero apenas um desenho harmônico e limpo que valorize meu olhar',
        matchedProcedure: 'design-visagismo'
      },
      {
        id: 'procedimento-antigo',
        label: 'Tenho micropigmentação antiga ou indesejada',
        detail: 'Fiz há algum tempo e desbotou para cinza/avermelhado ou ficou torta',
        matchedProcedure: 'despigmentacao'
      }
    ]
  },
  {
    id: 2,
    question: 'Qual é a sua principal expectativa no dia a dia?',
    hint: 'Pense na sua rotina matinal e como você gosta de se arrumar',
    options: [
      {
        id: 'liberdade-total',
        label: 'Acordar pronta sem encostar em lápis ou sombra',
        detail: 'Quero durabilidade de meses sem me preocupar com retoque diário',
        matchedProcedure: 'micro-fio-a-fio'
      },
      {
        id: 'volume-moderno',
        label: 'Visual moderno, penteado para cima e encorpado',
        detail: 'Amo o efeito lifting e natural que valoriza o olhar',
        matchedProcedure: 'brow-lamination'
      },
      {
        id: 'preenchimento-temporario',
        label: 'Destacar o desenho para uma ocasião ou rotina prática',
        detail: 'Gosto de henna que dá aquela tonalidade degradê por dias',
        matchedProcedure: 'design-henna'
      },
      {
        id: 'cilios-sobrancelhas',
        label: 'Quero transformar o olhar completo (cílios + sobrancelhas)',
        detail: 'Gostaria de combinar curvatura de cílios com sobrancelha impecável',
        matchedProcedure: 'lash-lifting'
      }
    ]
  },
  {
    id: 3,
    question: 'Qual o seu tipo de pele ou preferência de acabamento?',
    hint: 'Isso ajuda a calibrar a melhor técnica de fixação',
    options: [
      {
        id: 'natural-suave',
        label: 'Amo hiper-naturalidade, quase imperceptível',
        detail: 'Quero que pareça que eu nasci com essas sobrancelhas perfeitas',
        matchedProcedure: 'micro-fio-a-fio'
      },
      {
        id: 'maquiada-definida',
        label: 'Prefiro efeito maquiado / delineado elegante',
        detail: 'Gosto da sobrancelha marcada na medida certa com cauda arqueada',
        matchedProcedure: 'micro-shadow'
      },
      {
        id: 'sem-agulha',
        label: 'Não quero agulhas ou procedimentos invasivos',
        detail: 'Prefiro técnicas manuais de alinhamento, tintura ou design',
        matchedProcedure: 'brow-lamination'
      },
      {
        id: 'pele-oleosa',
        label: 'Minha pele é mista/oleosa em Sinop',
        detail: 'Preciso de uma técnica com alta fixação resistente ao calor',
        matchedProcedure: 'micro-shadow'
      }
    ]
  }
];

export interface QuizResultData {
  serviceId: string;
  title: string;
  matchScore: string;
  summary: string;
  benefits: string[];
  estimatedPrice: string;
  estimatedDuration: string;
}

export const QUIZ_RESULTS_MAP: Record<string, QuizResultData> = {
  'micro-fio-a-fio': {
    serviceId: 'micro-fio-a-fio',
    title: 'Micropigmentação Fio a Fio (Nano Fios)',
    matchScore: '98% de Compatibilidade',
    summary: 'A técnica perfeita para o seu perfil! Ela preenche as falhas com fios microscópicos que se misturam aos seus pelos naturais. Você terá liberdade de acordar pronta todos os dias por mais de 1 ano.',
    benefits: [
      'Fios hiper-realistas sem aspecto artificial',
      'Durabilidade média de 10 a 18 meses',
      'Anestésico dermatológico confortável (procedimento indolor)',
      'Simetria projetada milimetricamente para seu formato facial'
    ],
    estimatedPrice: 'A partir de R$ 480',
    estimatedDuration: 'Aprox. 2 horas'
  },
  'brow-lamination': {
    serviceId: 'brow-lamination',
    title: 'Brow Lamination & Nutrição Profunda',
    matchScore: '96% de Compatibilidade',
    summary: 'Seu perfil combina perfeitamente com a Brow Lamination! Ela alinha os pelos que teimam em ficar desordenados, doma os fios e cria um efeito encorpado volumoso e moderno sem nenhuma agulha.',
    benefits: [
      'Zero agulhas, procedimento 100% não invasivo',
      'Efeito lifting que rejuvenesce e abre o olhar',
      'Banho de nutrição com queratina e óleos nobres',
      'Duração de 6 a 8 semanas com fácil manutenção'
    ],
    estimatedPrice: 'R$ 130',
    estimatedDuration: 'Aprox. 60 minutos'
  },
  'micro-shadow': {
    serviceId: 'micro-shadow',
    title: 'Micropigmentação Shadow Lux (Efeito Pó)',
    matchScore: '95% de Compatibilidade',
    summary: 'Indicado especialmente para quem ama aquele efeito aveludado de maquiagem ou possui pele mista/oleosa. Cria um degradê deslumbrante e sofisticado.',
    benefits: [
      'Excelente fixação mesmo no clima quente de Sinop',
      'Transição suave com início ombré translúcido',
      'Não precisa passar lápis ou sombra diariamente',
      'Duração de 12 a 24 meses'
    ],
    estimatedPrice: 'R$ 520',
    estimatedDuration: 'Aprox. 2h 15min'
  },
  'design-henna': {
    serviceId: 'design-henna',
    title: 'Design Personalizado com Henna Alta Fixação',
    matchScore: '94% de Compatibilidade',
    summary: 'A melhor escolha para preencher falhas temporariamente e realçar o olhar com naturalidade imediata, sem compromisso de longo prazo.',
    benefits: [
      'Pigmentação vegetal segura de alta qualidade',
      'Técnica ombré sem deixar o início marcado',
      'Ideal para eventos ou rotina com praticidade',
      'Dura de 7 a 15 dias na pele e pelos'
    ],
    estimatedPrice: 'R$ 65',
    estimatedDuration: 'Aprox. 50 minutos'
  },
  'design-visagismo': {
    serviceId: 'design-visagismo',
    title: 'Design Personalizado com Visagismo Facial',
    matchScore: '92% de Compatibilidade',
    summary: 'O clássico indispensável! Mapeamos seu rosto com precisão para encontrar a curvatura perfeita para o seu olhar, limpando os excessos com delicadeza.',
    benefits: [
      'Respeito total à anatomia do seu rosto',
      'Pinçamento detalhado e alinhamento milimétrico',
      'Sem afinamento excessivo de pelos',
      'Sensação imediata de limpeza e leveza'
    ],
    estimatedPrice: 'R$ 45',
    estimatedDuration: 'Aprox. 40 minutos'
  },
  'lash-lifting': {
    serviceId: 'lash-lifting',
    title: 'Lash Lifting & Combo Olhar Marcante',
    matchScore: '97% de Compatibilidade',
    summary: 'Perfeito para elevar o olhar completo! Curva os cílios naturais com banho de queratina e cor preta intensa, harmonizando com sobrancelhas alinhadas.',
    benefits: [
      'Cílios curvados naturalmente sem cola de extensão',
      'Pode lavar o rosto e passar rímel normalmente após 24h',
      'Durabilidade de até 2 meses nos cílios',
      'Visual acordei radiante'
    ],
    estimatedPrice: 'R$ 110',
    estimatedDuration: 'Aprox. 55 minutos'
  },
  'despigmentacao': {
    serviceId: 'despigmentacao',
    title: 'Avaliação & Despigmentação a Laser',
    matchScore: '99% de Compatibilidade',
    summary: 'Para casos de procedimentos antigos indesejados, o primeiro passo ideal é a despigmentação segura a laser para clarear o pigmento e preparar a pele para o design dos seus sonhos.',
    benefits: [
      'Tecnologia laser focada que preserva os fios naturais',
      'Clareamento progressivo e uniforme',
      'Recuperação da autoestima e correção de assimetrias',
      'Avaliação personalizada em Sinop'
    ],
    estimatedPrice: 'Sob Consulta',
    estimatedDuration: 'Aprox. 40 minutos'
  }
};
