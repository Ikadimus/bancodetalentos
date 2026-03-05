import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, Search, Plus, Trash2, Edit, FileText, Filter, CheckCircle, XCircle, ChevronDown, ChevronRight, UserCheck } from 'lucide-react';
import { JobVacancy, UserProfile, UnitType, Referral } from '../types';
import { MOCK_JOBS, MOCK_TALENTS, UNITS, MOCK_REFERRALS } from '../constants';

interface AdminDashboardProps {
  onLogout: () => void;
  user: UserProfile;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, user }) => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'talents' | 'users' | 'referrals' | 'approvals' | 'external'>('jobs');
  const [jobs, setJobs] = useState<JobVacancy[]>(MOCK_JOBS);
  const [talents, setTalents] = useState<UserProfile[]>(MOCK_TALENTS);
  const [referrals, setReferrals] = useState<Referral[]>(MOCK_REFERRALS);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedUnits, setExpandedUnits] = useState<string[]>(UNITS);
  const [expandedJobs, setExpandedJobs] = useState<string[]>([]);

  const toggleUnit = (unit: string) => {
    setExpandedUnits(prev => prev.includes(unit) ? prev.filter(u => u !== unit) : [...prev, unit]);
  };

  const toggleJob = (jobId: string) => {
    setExpandedJobs(prev => prev.includes(jobId) ? prev.filter(j => j !== jobId) : [...prev, jobId]);
  };

  const filteredTalents = talents.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Admin Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-display">Painel Administrativo</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Portal de Talentos Solvi</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">Logado como: <strong className="text-green-400">{user.name}</strong> ({user.role.toUpperCase()})</span>
          <button 
            onClick={onLogout}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors"
          >
            Sair
          </button>
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 space-y-2">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'jobs' ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Briefcase className="w-5 h-5" />
            Vagas Internas
          </button>
          <button 
            onClick={() => setActiveTab('talents')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'talents' ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <FileText className="w-5 h-5" />
            Banco de Talentos
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'users' ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Users className="w-5 h-5" />
            Gestão de Usuários
          </button>
          <button 
            onClick={() => setActiveTab('referrals')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'referrals' ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <UserCheck className="w-5 h-5" />
            Indicações
          </button>

          {(user.role === 'rh' || user.role === 'developer') && (
            <>
              <button 
                onClick={() => setActiveTab('approvals')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'approvals' ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <CheckCircle className="w-5 h-5" />
                Aprovação de Vagas
              </button>
              <button 
                onClick={() => setActiveTab('external')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'external' ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' : 'text-slate-400 hover:bg-slate-800'}`}
              >
                <Users className="w-5 h-5" />
                Candidatos Externos
              </button>
            </>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow p-8 overflow-y-auto">
          {activeTab === 'jobs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold font-display">
                  {user.role === 'manager' ? 'Minhas Vagas' : 'Gerenciar Vagas'}
                </h2>
                {(user.role === 'manager' || user.role === 'developer') && (
                  <button className="btn-primary flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Nova Vaga
                  </button>
                )}
              </div>
              
              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Título</th>
                      <th className="px-6 py-4">Unidade</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {jobs.filter(j => user.role === 'manager' ? j.unit === user.unit : true).map(job => (
                      <tr key={job.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-bold">{job.title}</td>
                        <td className="px-6 py-4 text-slate-400">{job.unit}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                            job.status === 'approved' ? 'bg-green-900/20 text-green-500' : 'bg-yellow-900/20 text-yellow-500'
                          }`}>
                            {job.status === 'approved' ? 'Ativa' : 'Pendente'}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex gap-2">
                          <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                          <button className="p-2 hover:bg-red-900/20 rounded-lg text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'approvals' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold font-display">Aprovação de Vagas</h2>
              </div>
              
              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Título</th>
                      <th className="px-6 py-4">Unidade</th>
                      <th className="px-6 py-4">Solicitante</th>
                      <th className="px-6 py-4">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {jobs.filter(j => j.status === 'pending_approval').length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-slate-500 italic">Nenhuma vaga pendente de aprovação.</td>
                      </tr>
                    ) : (
                      jobs.filter(j => j.status === 'pending_approval').map(job => (
                        <tr key={job.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4 font-bold">{job.title}</td>
                          <td className="px-6 py-4 text-slate-400">{job.unit}</td>
                          <td className="px-6 py-4 text-slate-400">{job.createdBy}</td>
                          <td className="px-6 py-4 flex gap-2">
                            <button className="flex items-center gap-1 px-3 py-1 bg-green-600/20 text-green-500 hover:bg-green-600 hover:text-white rounded-lg text-xs font-bold transition-all">
                              <CheckCircle className="w-4 h-4" /> Aprovar
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white rounded-lg text-xs font-bold transition-all">
                              <XCircle className="w-4 h-4" /> Recusar
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'external' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold font-display">Candidatos Externos</h2>
              </div>
              
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Banco de Talentos Externo</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">Aqui você poderá visualizar todos os currículos cadastrados por pessoas que ainda não fazem parte do Grupo Solvi.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'talents' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold font-display">Banco de Talentos</h2>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Filtrar talentos..." 
                    className="w-full !pl-12 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-green-500 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTalents.map(talent => (
                  <div key={talent.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-green-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">{talent.name}</h3>
                        <p className="text-sm text-slate-500">{talent.email}</p>
                      </div>
                      <span className="text-[10px] font-bold bg-slate-800 px-2 py-1 rounded text-slate-400 uppercase">{talent.unit}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Habilidades</p>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map((skill, i) => (
                          <span key={i} className="bg-green-900/10 text-green-400 px-2 py-1 rounded text-[10px] font-bold border border-green-800/20">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full py-2 bg-slate-800 hover:bg-green-600 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" /> Visualizar Currículo
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold font-display">Gestão de Usuários</h2>
                <button className="btn-primary flex items-center gap-2">
                  <Plus className="w-5 h-5" /> Novo Usuário
                </button>
              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Módulo de Usuários</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">Aqui você poderá criar e gerenciar as contas dos colaboradores para que eles possam preencher seus perfis e se candidatar às vagas.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'referrals' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold font-display">Indicações por Unidade</h2>
                <div className="flex gap-2">
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-400">
                    Total: {referrals.length} Indicações
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {UNITS.map(unit => {
                  const unitJobs = jobs.filter(j => j.unit === unit);
                  const unitReferrals = referrals.filter(r => {
                    const job = jobs.find(j => j.id === r.jobId);
                    return job?.unit === unit;
                  });

                  if (unitReferrals.length === 0) return null;

                  return (
                    <div key={unit} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                      <button 
                        onClick={() => toggleUnit(unit)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {expandedUnits.includes(unit) ? <ChevronDown className="w-5 h-5 text-green-500" /> : <ChevronRight className="w-5 h-5 text-slate-500" />}
                          <h3 className="font-bold text-lg">{unit}</h3>
                        </div>
                        <span className="bg-green-900/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold">
                          {unitReferrals.length} {unitReferrals.length === 1 ? 'Indicação' : 'Indicações'}
                        </span>
                      </button>

                      {expandedUnits.includes(unit) && (
                        <div className="p-4 space-y-4">
                          {unitJobs.map(job => {
                            const jobReferrals = referrals.filter(r => r.jobId === job.id);
                            if (jobReferrals.length === 0) return null;

                            return (
                              <div key={job.id} className="ml-4 border-l-2 border-slate-800 pl-4 space-y-3">
                                <button 
                                  onClick={() => toggleJob(job.id)}
                                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                                >
                                  {expandedJobs.includes(job.id) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                  <span className="font-bold text-slate-300">{job.title}</span>
                                  <span className="text-xs text-slate-500">({jobReferrals.length})</span>
                                </button>

                                {expandedJobs.includes(job.id) && (
                                  <div className="grid grid-cols-1 gap-3 mt-2">
                                    {jobReferrals.map(referral => (
                                      <div key={referral.id} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 flex flex-col md:flex-row justify-between gap-4">
                                        <div className="space-y-2">
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold text-slate-100">{referral.candidateName}</span>
                                            <span className="text-[10px] bg-green-900/30 text-green-400 px-2 py-0.5 rounded font-bold uppercase">{referral.status}</span>
                                          </div>
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-400">
                                            <p><strong>E-mail:</strong> {referral.candidateEmail}</p>
                                            <p><strong>Telefone:</strong> {referral.candidatePhone}</p>
                                            <p><strong>Indicado por:</strong> {referral.referrerName} ({referral.referrerMatricula})</p>
                                            <p><strong>Relação:</strong> {referral.relationship}</p>
                                          </div>
                                          <div className="mt-2 p-2 bg-slate-900/50 rounded-lg text-xs italic text-slate-500 border border-slate-800">
                                            "{referral.reason}"
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-2 self-end md:self-center">
                                          <button className="p-2 bg-slate-700 hover:bg-green-600 rounded-lg transition-all" title="Aprovar">
                                            <CheckCircle className="w-4 h-4" />
                                          </button>
                                          <button className="p-2 bg-slate-700 hover:bg-red-600 rounded-lg transition-all" title="Reprovar">
                                            <XCircle className="w-4 h-4" />
                                          </button>
                                          <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all" title="Ver Currículo">
                                            <FileText className="w-4 h-4" />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
