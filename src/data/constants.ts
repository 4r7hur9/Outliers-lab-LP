/**
 * Constantes globais da aplicação
 * Dados hardcoded, textos e configurações centralizadas
 */

import type { StatProps } from "../types";

// Features da landing page
export const LANDING_FEATURES = [
  {
    id: "deteccao",
    title: "Detecção Inteligente",
    description:
      "Identifica anomalias em seus dados com algoritmos de IA avançados",
  },
  {
    id: "tempo-real",
    title: "Análise em Tempo Real",
    description:
      "Processamento instantâneo de grandes volumes de dados sem latência",
  },
  {
    id: "integracao",
    title: "Integração Fácil",
    description: "Conecte suas fontes de dados em minutos, sem código",
  },
];

// Stats da landing page
export const LANDING_STATS: StatProps[] = [
  { value: "10K+", label: "Usuários Ativos" },
  { value: "98%", label: "Acurácia de Dados" },
  { value: "24/7", label: "Suporte Premium" },
  { value: "50+", label: "Integrações" },
];

// How It Works steps
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Envie Dados",
    description: "Carregue seus arquivos CSV ou conecte APIs",
  },
  {
    step: "02",
    title: "Analise",
    description: "Nossos algoritmos detectam outliers automaticamente",
  },
  {
    step: "03",
    title: "Visualize",
    description: "Explore dados com gráficos interativos e relatórios",
  },
  {
    step: "04",
    title: "Decida",
    description: "Tome decisões baseadas em dados com confiança total",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Ana Silva",
    company: "DataCorp",
    text: "Aumentamos a qualidade dos dados em 95% usando o Outliers Lab. Incrível!",
    avatar: "AS",
  },
  {
    name: "Carlos Mendes",
    company: "TechFlow",
    text: "A interface é intuitiva e os resultados são muito precisos. Recomendo!",
    avatar: "CM",
  },
  {
    name: "Marina Costa",
    company: "InsightAI",
    text: "Ferramenta essencial para nosso pipeline de dados. Não vivemos sem ela.",
    avatar: "MC",
  },
];

// Contact Info
export const CONTACT_INFO = [
  {
    icon: "📧",
    title: "Email",
    value: "contato@outlierslab.com",
    link: "mailto:contato@outlierslab.com",
  },
  {
    icon: "📞",
    title: "Telefone",
    value: "+55 (11) 98765-4321",
    link: "tel:+5511987654321",
  },
  {
    icon: "📍",
    title: "Escritório",
    value: "São Paulo, Brasil",
    link: "#",
  },
  {
    icon: "⏰",
    title: "Horário",
    value: "Seg-Sex, 9h às 18h (BR)",
    link: "#",
  },
];

// FAQ
export const FAQ_ITEMS = [
  {
    q: "Qual é o tempo de resposta do suporte?",
    a: "Respondemos a todos os emails em até 2 horas durante o horário comercial.",
  },
  {
    q: "Posso testar antes de contratar?",
    a: "Sim! Oferecemos 14 dias de teste gratuito sem necessidade de cartão de crédito.",
  },
  {
    q: "Quais formatos de arquivo são suportados?",
    a: "Suportamos CSV, JSON, Excel, Parquet e conexões diretas com bancos de dados.",
  },
  {
    q: "Há limite de dados que posso analisar?",
    a: "Planos Premium e Enterprise não têm limite. Plano Starter aceita até 1GB/mês.",
  },
];

// Recursos Page - Features detalhadas
export const RECURSOS_FEATURES = [
  {
    icon: "🤖",
    title: "IA Avançada",
    features: ["ML models otimizados", "Aprendizado contínuo", "Precisão 98%"],
  },
  {
    icon: "⚡",
    title: "Performance",
    features: [
      "Processamento em tempo real",
      "Escalável até petabytes",
      "Latência <100ms",
    ],
  },
  {
    icon: "🔒",
    title: "Segurança",
    features: [
      "Criptografia end-to-end",
      "GDPR compliant",
      "Backup automático",
    ],
  },
  {
    icon: "📊",
    title: "Visualização",
    features: [
      "Dashboards customizáveis",
      "Relatórios em PDF",
      "Integração BI",
    ],
  },
  {
    icon: "🔌",
    title: "Integrações",
    features: ["50+ conexões nativas", "API REST completa", "Webhooks"],
  },
  {
    icon: "👥",
    title: "Colaboração",
    features: [
      "Múltiplos usuários",
      "Permissões granulares",
      "Auditoria completa",
    ],
  },
];

// Pricing Plans
export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Para explorar e entender o produto",
    features: [
      "Até 1GB de dados/mês",
      "Análise básica de outliers",
      "Dashboard simples",
      "1 usuário",
      "Email support",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/mês",
    description: "Para times que analisam dados regularmente",
    features: [
      "Até 100GB de dados/mês",
      "Análise avançada com ML",
      "Dashboards customizáveis",
      "5 usuários",
      "Priority support",
      "API access",
    ],
    cta: "Comece Agora",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes organizações com necessidades específicas",
    features: [
      "Dados ilimitados",
      "Análise personalizada",
      "Conta dedicada",
      "Usuários ilimitados",
      "SLA 24/7",
      "Integração customizada",
    ],
    cta: "Solicitar Demo",
    popular: false,
  },
];

// Sobre Page - Timeline
export const TIMELINE_MILESTONES = [
  {
    year: "2020",
    title: "Fundação",
    description:
      "Outliers Lab é fundada com visão de democratizar análise de dados",
  },
  {
    year: "2021",
    title: "Primeira Release",
    description: "Lançamos v1.0 com algoritmos de detecção de outliers",
  },
  {
    year: "2022",
    title: "Series A",
    description: "Levantamos $5M para expandir time e produto",
  },
  {
    year: "2023",
    title: "10K Usuários",
    description: "Alcançamos 10 mil usuários ativos na plataforma",
  },
  {
    year: "2024",
    title: "Liderança Global",
    description: "Reconhecidos como top 5 tools de anomaly detection no mundo",
  },
];

// Sobre Page - Team
export const TEAM_MEMBERS = [
  {
    name: "João Silva",
    role: "CEO & Co-founder",
    bio: "15 anos em data science e ML. Ex-Google.",
    avatar: "JS",
  },
  {
    name: "Maria Santos",
    role: "CTO & Co-founder",
    bio: "Arquiteta de sistemas distribuídos. Ex-Amazon.",
    avatar: "MS",
  },
  {
    name: "Pedro Oliveira",
    role: "VP Product",
    bio: "Ex-product lead em data tools. Obsecado por UX.",
    avatar: "PO",
  },
  {
    name: "Ana Costa",
    role: "VP Sales",
    bio: "10 anos vendendo B2B SaaS. Adora clientes.",
    avatar: "AC",
  },
];

// Magic numbers / Timeouts
export const TIMEOUTS = {
  FORM_RESET_DELAY: 3000,
  ANIMATION_DURATION: 300,
  API_TIMEOUT: 30000,
};

// Routes
export const ROUTES = {
  HOME: "/",
  RECURSOS: "/recursos",
  SOBRE: "/sobre",
  CONTATO: "/contato",
  CADASTRO: "/cadastro",
  LOGIN: "/login",
};
