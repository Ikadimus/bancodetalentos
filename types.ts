export type UnitType = 
  | 'Solvi Caieiras' 
  | 'Biometano Caieiras' 
  | 'Biometano Maracanã' 
  | 'Biometano Sul' 
  | 'Termoeletrica' 
  | 'Solvi';

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  unit: UnitType;
  quantity: number;
  requirements: string[];
  description: string;
  postedAt: string;
  deadline: string;
  salaryRange?: string;
  benefits: string[];
  status: 'pending_approval' | 'approved';
  createdBy: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'developer' | 'admin' | 'employee' | 'rh' | 'manager';
  unit: UnitType;
  skills: string[];
  experience: string;
  curriculumUrl?: string;
}

export interface Referral {
  id: string;
  jobId: string;
  referrerName: string;
  referrerMatricula: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  relationship: string;
  reason: string;
  curriculumUrl?: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'rejected' | 'hired';
}

export interface ExternalCandidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
  education: string;
  lastCompany: string;
  lastRole: string;
  skills: string[];
  curriculumUrl?: string;
  submittedAt: string;
}

export type ViewType = 'welcome' | 'referral' | 'external' | 'internal' | 'admin' | 'login' | 'employee_portal';
export type FilterType = 'All' | UnitType;
