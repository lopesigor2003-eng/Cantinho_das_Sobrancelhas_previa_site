import { Service } from '../types';

export const BUSINESS_INFO = {
  name: 'Cantinho das Sobrancelhas',
  subtitle: 'Estúdio de Beleza & Visagismo Facial',
  city: 'Sinop - MT',
  address: 'Avenida das Figueiras, 72 - Jardim Imperial, Sinop / MT',
  cep: '78550-000',
  reference: 'Ao lado da Unemat (Campus Sinop)',
  phone: '(66) 99652-3535',
  whatsappRaw: '5566996523535',
  googleMapsUrl: 'https://maps.app.goo.gl/rEkx3mk3LqTRHWdp6',
  instagram: '@cantinhodassobrancelhas_sinop',
  rating: 5.0,
  totalReviews: 89,
  yearsInSinop: '5+',
  hours: [
    { days: 'Segunda a Sexta', time: '08:00 às 18:30' },
    { days: 'Sábado', time: '08:00 às 17:00' },
    { days: 'Domingo', time: 'Fechado' }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'design-visagismo',
    name: 'Design Personalizado com Visagismo',
    category: 'sobrancelhas',
    shortDesc: 'Mapeamento facial com paquímetro para desenhar a linha ideal da sua anatomia.',
    fullDesc: 'Estudo das proporções do seu rosto com mapeamento anatômico detalhado. Removemos os fios excessivos mantendo a harmonia e naturalidade, sem afinamentos artificiais.',
    duration: '40 min',
    price: 'R$ 45',
    priceNum: 45,
    highlight: true,
    tag: 'Mais Pedido',
    recommendedFor: 'Quem busca formato limpo, harmônico e respeitando os traços do próprio rosto.',
    includes: [
      'Mapeamento facial com paquímetro',
      'Higienização e preparação da pele',
      'Pinçamento detalhado fio a fio',
      'Aparação sutil com tesoura anatômica',
      'Finalização com hidratante calmante'
    ],
    imageUrl: '/assets/real/foto_6_procedimento.jpg'
  },
  {
    id: 'design-henna',
    name: 'Design com Henna Alta Fixação',
    category: 'sobrancelhas',
    shortDesc: 'Efeito degradê suave para preencher falhas e destacar o olhar com naturalidade.',
    fullDesc: 'Aplicação de henna vegetal premium com técnica ombré (início sutilmente claro e cauda definida). Proporciona sensação de sobrancelha volumosa e delineada por até 15 dias.',
    duration: '50 min',
    price: 'R$ 65',
    priceNum: 65,
    tag: 'Praticidade Diária',
    recommendedFor: 'Falhas pontuais e quem quer acordar com sobrancelhas prontas sem lápis.',
    includes: [
      'Design completo com visagismo',
      'Escolha personalizada da tonalidade de henna',
      'Aplicação técnica ombré sem deixar chapado',
      'Tempo de ação controlado com precisão',
      'Guia de cuidados para máxima durabilidade'
    ],
    imageUrl: '/assets/real/foto_4_procedimento.jpg'
  },
  {
    id: 'brow-lamination',
    name: 'Brow Lamination & Nutrição',
    category: 'sobrancelhas',
    shortDesc: 'Alinhamento dos fios com hidratação profunda, dando efeito encorpado e moderno.',
    fullDesc: 'Tratamento inovador que reorganiza a direção dos fios naturais das sobrancelhas, preenchendo áreas ralas e dando a impressão de sobrancelha mais espessa e empinada (estilo wild brow ou natural alinhado).',
    duration: '60 min',
    price: 'R$ 130',
    priceNum: 130,
    highlight: true,
    tag: 'Tendência',
    recommendedFor: 'Fios rebeldes, enrolados ou quem busca visual moderno e volumoso.',
    includes: [
      'Design e alinhamento mecânico dos fios',
      'Passo redutor e fixador de alta qualidade',
      'Tintura personalizada opcional inclusa',
      'Banho de nutrição profunda com óleos essenciais',
      'Escovinha exclusiva para pentear em casa'
    ],
    imageUrl: '/assets/real/foto_5_procedimento.jpg'
  },
  {
    id: 'micro-fio-a-fio',
    name: 'Micropigmentação Fio a Fio (Nano Fios)',
    category: 'sobrancelhas',
    shortDesc: 'Fios ultrarrealistas implantados na derme superficial com durabilidade de 10 a 18 meses.',
    fullDesc: 'A técnica mais requintada para reconstrução de sobrancelhas. Cada traço simula a direção, espessura e curvatura do seu pelo natural, preenchendo falhas com extrema elegância e discrição.',
    duration: '2h',
    price: 'R$ 480',
    priceNum: 480,
    highlight: true,
    tag: 'Reconstrução Total',
    recommendedFor: 'Quem tem falhas severas, pouca densidade de pelos ou busca liberdade da maquiagem.',
    includes: [
      'Avaliação prévia e mapeamento visagista exclusivo',
      'Aplicação de anestésico tópico confortável',
      'Pigmentos certificados pela ANVISA sem viragem de cor',
      'Agulhas e materiais 100% descartáveis e estéreis',
      'Retoque de 30 dias com condições especiais',
      'Kit pós-procedimento com pomada regeneradora'
    ],
    imageUrl: '/assets/real/foto_3_procedimento.jpg'
  },
  {
    id: 'micro-shadow',
    name: 'Micropigmentação Shadow Lux',
    category: 'sobrancelhas',
    shortDesc: 'Efeito sombreado acetinado estilo maquiagem de passarela com transição suave.',
    fullDesc: 'Efeito micropixelado que deposita partículas de cor suavemente na epiderme, gerando um efeito de maquiagem suave e perfeita, com início esfumado e cauda elegante.',
    duration: '2h 15min',
    price: 'R$ 520',
    priceNum: 520,
    tag: 'Efeito Maquiado',
    recommendedFor: 'Peles oleosas, pessoas que gostam do olhar mais marcante e definido.',
    includes: [
      'Projeto desenhado previamente para aprovação da cliente',
      'Conforto térmico e anestésico tópico',
      'Gradiente luminoso que não endurece a expressão',
      'Kit com orientações e sérum cicatrizante'
    ],
    imageUrl: '/assets/real/foto_principal.jpg'
  },
  {
    id: 'lash-lifting',
    name: 'Lash Lifting & Tintura dos Cílios',
    category: 'cilios',
    shortDesc: 'Curva e hidrata seus cílios naturais sem precisar de manutenção de extensões.',
    fullDesc: 'Procedimento que curva, eleva e tinge os fios naturais da raiz às pontas, criando efeito de rímel natural 24 horas por dia por 6 a 8 semanas, sem colar fios sintéticos.',
    duration: '55 min',
    price: 'R$ 110',
    priceNum: 110,
    tag: 'Olhar Marcante',
    recommendedFor: 'Cílios retos, caídos ou claros que querem praticidade sem cola ou extensão.',
    includes: [
      'Higienização com espuma suave oftalmológica',
      'Curvatura segura com moldes de silicone anatômicos',
      'Pigmentação preta intensa (efeito máscara de cílios)',
      'Blindagem de queratina e aminoácidos',
      'Durabilidade de até 2 meses'
    ],
    imageUrl: '/assets/real/foto_9_procedimento.jpg'
  },
  {
    id: 'combo-olhar',
    name: 'Combo Olhar Poderoso (Design + Cílios)',
    category: 'cilios',
    shortDesc: 'Sobrancelha arqueada definida somada a cílios longos, curvados e volumosos.',
    fullDesc: 'A combinação favorita das clientes de Sinop. Realce completo da moldura facial em uma única visita ao estúdio, garantindo um visual descansado, empoderado e pronto para qualquer ocasião.',
    duration: '1h 30min',
    price: 'R$ 160',
    priceNum: 160,
    highlight: true,
    tag: 'Combo Exclusivo',
    recommendedFor: 'Mulheres dinâmicas que buscam máxima praticidade e beleza no dia a dia.',
    includes: [
      'Design visagista personalizado',
      'Lash Lifting ou Extensão de Cílios',
      'Alinhamento e tintura dos fios',
      'Massagem calmante facial com pedras de jade'
    ],
    imageUrl: '/assets/real/foto_8_procedimento.jpg'
  },
  {
    id: 'despigmentacao',
    name: 'Protocolo de Recuperação & Reconstrução Folicular',
    category: 'facial',
    shortDesc: 'Tratamento continuado para recuperar pelos e corrigir procedimentos anteriores.',
    fullDesc: 'Plano com sessões seriadas para recuperar sobrancelhas danificadas por afinamentos ou pigmentações incorretas, estimulando novos fios com ativos biocompatíveis.',
    duration: '40 min',
    price: 'Sob Consulta',
    priceNum: 180,
    tag: 'Tratamento & Fios',
    recommendedFor: 'Sobrancelhas ralas, danificadas, com falhas de crescimento ou pigmentação antiga.',
    includes: [
      'Avaliação microscópica da saúde dos folículos',
      'Ativos de estímulo biológico capilar',
      'Acompanhamento comparativo em fotos',
      'Plano de sessões personalizadas'
    ],
    imageUrl: '/assets/real/foto_7_antes_6_sessoes.jpg'
  }
];

