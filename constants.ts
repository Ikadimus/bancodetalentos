import { JobVacancy, UnitType, UserProfile, Referral } from './types';

export const UNITS: UnitType[] = [
  'Solvi Caieiras',
  'Biometano Caieiras',
  'Biometano Maracanã',
  'Biometano Sul',
  'Termoeletrica',
  'Solvi'
];

export const MOCK_JOBS: JobVacancy[] = [
  {
    id: '1',
    title: 'Operador de Biogás',
    department: 'Operações',
    location: 'Caieiras, SP',
    unit: 'Biometano Caieiras',
    quantity: 3,
    requirements: [
      'Ensino Médio Completo',
      'Experiência em processos industriais',
      'Disponibilidade para turnos',
      'Conhecimento básico em NR-13'
    ],
    description: 'Atuar no monitoramento e controle da planta de biometano, garantindo a eficiência do processo produtivo.',
    postedAt: '2026-02-25',
    deadline: '2026-03-15',
    salaryRange: 'R$ 3.500 - R$ 4.500',
    benefits: ['Plano de Saúde', 'Vale Alimentação', 'Seguro de Vida'],
    status: 'approved',
    createdBy: 'system'
  },
  {
    id: '2',
    title: 'Engenheiro Mecânico',
    department: 'Manutenção',
    location: 'Caieiras, SP',
    unit: 'Solvi Caieiras',
    quantity: 1,
    requirements: [
      'Superior completo em Engenharia Mecânica',
      'Registro ativo no CREA',
      'Experiência em manutenção de grandes equipamentos',
      'Conhecimento em gestão de ativos'
    ],
    description: 'Responsável pelo planejamento e execução da manutenção preventiva e corretiva dos equipamentos da unidade.',
    postedAt: '2026-03-01',
    deadline: '2026-03-20',
    salaryRange: 'R$ 8.000 - R$ 12.000',
    benefits: ['Plano de Saúde', 'PLR', 'Auxílio Combustível'],
    status: 'approved',
    createdBy: 'system'
  },
  {
    id: '3',
    title: 'Técnico em Eletrotécnica',
    department: 'Manutenção',
    location: 'Sul',
    unit: 'Biometano Sul',
    quantity: 2,
    requirements: [
      'Curso Técnico em Eletrotécnica',
      'NR-10 atualizada',
      'Experiência em painéis elétricos e automação',
      'CNH B'
    ],
    description: 'Executar manutenções elétricas em sistemas de geração de energia e tratamento de biogás.',
    postedAt: '2026-02-28',
    deadline: '2026-03-10',
    salaryRange: 'R$ 4.000 - R$ 5.500',
    benefits: ['Plano de Saúde', 'Vale Refeição', 'Adicional de Periculosidade'],
    status: 'approved',
    createdBy: 'system'
  },
  {
    id: '4',
    title: 'Analista de Logística',
    department: 'Logística',
    location: 'Caieiras, SP',
    unit: 'Biometano Caieiras',
    quantity: 1,
    requirements: ['Superior em Logística', 'Experiência em transporte de cargas perigosas'],
    description: 'Otimizar as rotas de transporte e garantir a entrega eficiente do biometano.',
    postedAt: '2026-03-04',
    deadline: '2026-03-25',
    salaryRange: 'R$ 5.000 - R$ 7.000',
    benefits: ['Plano de Saúde', 'Vale Refeição'],
    status: 'pending_approval',
    createdBy: 'Gestor de Unidade'
  },
  {
    id: '5',
    title: 'Auxiliar Administrativo',
    department: 'Administrativo',
    location: 'Maracanã',
    unit: 'Biometano Maracanã',
    quantity: 2,
    requirements: ['Ensino Médio', 'Conhecimento em Excel'],
    description: 'Suporte nas rotinas administrativas da unidade.',
    postedAt: '2026-03-04',
    deadline: '2026-03-30',
    salaryRange: 'R$ 2.000 - R$ 2.800',
    benefits: ['Plano de Saúde', 'Vale Transporte'],
    status: 'pending_approval',
    createdBy: 'Gestor de Unidade'
  }
];

export const MOCK_TALENTS: UserProfile[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@solvi.com',
    role: 'employee',
    unit: 'Solvi Caieiras',
    skills: ['Manutenção', 'Solda', 'NR-35'],
    experience: '5 anos na área de manutenção industrial.',
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    email: 'maria.oliveira@solvi.com',
    role: 'employee',
    unit: 'Biometano Maracanã',
    skills: ['Operação', 'Química', 'Segurança do Trabalho'],
    experience: '3 anos como operadora de processos.',
  }
];

export const MOCK_REFERRALS: Referral[] = [
  {
    id: '1',
    jobId: '1',
    referrerName: 'Carlos Alberto',
    referrerMatricula: '12345',
    candidateName: 'Roberto Santos',
    candidateEmail: 'roberto.santos@email.com',
    candidatePhone: '(11) 98888-7777',
    relationship: 'Ex-colega',
    reason: 'Excelente profissional com experiência em biogás.',
    submittedAt: '2026-03-02',
    status: 'pending'
  },
  {
    id: '2',
    jobId: '1',
    referrerName: 'Ana Paula',
    referrerMatricula: '67890',
    candidateName: 'Juliana Lima',
    candidateEmail: 'juliana.lima@email.com',
    candidatePhone: '(11) 97777-6666',
    relationship: 'Amiga',
    reason: 'Muito dedicada e com facilidade de aprendizado.',
    submittedAt: '2026-03-03',
    status: 'pending'
  },
  {
    id: '3',
    jobId: '2',
    referrerName: 'Marcos Souza',
    referrerMatricula: '11223',
    candidateName: 'Fernando Costa',
    candidateEmail: 'fernando.costa@email.com',
    candidatePhone: '(11) 96666-5555',
    relationship: 'Ex-colega de faculdade',
    reason: 'Ótimo engenheiro com visão estratégica.',
    submittedAt: '2026-03-04',
    status: 'pending'
  }
];
