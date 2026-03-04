import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Briefcase, TrendingUp, Users, Building2, ShieldCheck, LogOut } from 'lucide-react';
import { JobCard } from './components/JobCard';
import { JobModal } from './components/JobModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Login } from './components/Login';
import { JobVacancy, FilterType, UserProfile } from './types';
import { MOCK_JOBS, UNITS } from './constants';

function App() {
  const [view, setView] = useState<'portal' | 'admin' | 'login'>('portal');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'All' || job.unit === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const handleLogin = (email: string, pass: string) => {
    if ((email === 'efilho@essencisbiometano.com.br' || email === 'a@a') && pass === '123') {
      setUser({
        id: email === 'a@a' ? 'demo-1' : 'dev-1',
        name: email === 'a@a' ? 'Admin Demo' : 'Desenvolvedor',
        email: email,
        role: 'developer',
        unit: 'Solvi',
        skills: email === 'a@a' ? ['Recrutamento'] : ['Full Stack', 'DevOps'],
        experience: email === 'a@a' ? 'Acesso de demonstração' : 'Developer access'
      });
      setView('admin');
      setLoginError(null);
    } else {
      setLoginError('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setView('portal');
  };

  const stats = [
    { label: 'Vagas Ativas', value: MOCK_JOBS.length, icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Unidades', value: UNITS.length, icon: Building2, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  if (view === 'login') {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  if (view === 'admin' && user?.role === 'developer') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight font-display">
                Portal de Talentos <span className="text-green-500">Solvi</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400">
              <a href="#" className="text-green-500">Vagas</a>
              <button 
                onClick={() => setView('login')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-100 transition-all border border-slate-700"
              >
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Área Restrita
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900/50 border-b border-slate-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 font-display tracking-tight leading-tight">
              Indique um talento e ajude a <span className="text-green-500">construir o futuro da Solvi.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Conhece alguém com o perfil ideal para nossas vagas? 
              Participe do nosso programa de indicações e ajude a fortalecer nossa equipe com os melhores profissionais.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex items-center gap-4 hover:border-green-500/30 transition-all">
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-100">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 px-2">
                <Building2 className="w-5 h-5 text-green-500" />
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Unidades</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveFilter('All')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                    activeFilter === 'All' 
                      ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' 
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>TODAS UNIDADES</span>
                  {activeFilter === 'All' && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
                </button>
                
                {UNITS.map((unit) => (
                  <button
                    key={unit}
                    onClick={() => setActiveFilter(unit)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                      activeFilter === unit 
                        ? 'bg-green-600 text-white shadow-lg shadow-green-900/20' 
                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate">{unit.toUpperCase()}</span>
                    {activeFilter === unit && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800 px-2">
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] leading-relaxed">
                  Filtre por unidade para encontrar as melhores oportunidades de indicação.
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Search and Jobs */}
          <div className="lg:col-span-9 space-y-12 order-1 lg:order-2">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text"
                placeholder="Buscar por cargo ou departamento..."
                className="input-field pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onClick={setSelectedJob} 
                  />
                ))}
              </AnimatePresence>
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-32">
                <div className="bg-slate-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800">
                  <Search className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Nenhuma vaga encontrada</h3>
                <p className="text-slate-500 mt-2">Tente ajustar seus filtros ou termos de busca.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-100 tracking-tight font-display">
              Portal de Talentos <span className="text-green-500">Solvi</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            © 2026 Portal de Talentos Solvi. Desenvolvido para conectar talentos internos às melhores oportunidades do grupo.
          </p>
        </div>
      </footer>

      {/* Job Details Modal */}
      <JobModal 
        job={selectedJob} 
        onClose={() => setSelectedJob(null)} 
      />
    </div>
  );
}

export default App;
