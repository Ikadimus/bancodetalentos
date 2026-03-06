import React from 'react';
import { motion } from 'motion/react';
import { Users, Search, RefreshCw, ArrowRight, Leaf, Globe, Zap, Star } from 'lucide-react';

interface WelcomeProps {
  onSelect: (option: 'referral' | 'external' | 'internal' | 'employee_portal') => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onSelect }) => {
  const options = [
    {
      id: 'referral',
      title: 'Indicar um amigo',
      description: 'Conhece um talento? Indique para nossas vagas internas.',
      icon: Users,
      color: 'bg-blue-600',
      hoverColor: 'hover:border-blue-500/50'
    },
    {
      id: 'external',
      title: 'Procurando uma vaga',
      description: 'Não faz parte da Solvi? Cadastre seu currículo aqui.',
      icon: Search,
      color: 'bg-green-600',
      hoverColor: 'hover:border-green-500/50'
    },
    {
      id: 'internal',
      title: 'Recolocação interna',
      description: 'Já é colaborador? Explore novas oportunidades no grupo.',
      icon: RefreshCw,
      color: 'bg-purple-600',
      hoverColor: 'hover:border-purple-500/50'
    },
    {
      id: 'employee_portal',
      title: 'Sou Colaborador',
      description: 'Registre seu perfil e suas expectativas de carreira na Solvi.',
      icon: Star,
      color: 'bg-amber-500',
      hoverColor: 'hover:border-amber-500/50',
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Video & Futuristic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40111-424930342_large.mp4" type="video/mp4" />
        </video>
        
        <motion.div 
          animate={{ 
            backgroundPositionY: ["0px", "40px"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-full h-full bg-green-500/30 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-emerald-500/30 blur-[120px] rounded-full"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/70"></div>
      </div>

      {/* Floating Leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            initial={{ 
              left: Math.random() * 100 + "vw", 
              top: Math.random() * 100 + "vh",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.3,
              rotate: Math.random() * 360
            }}
            animate={{ 
              left: [null, Math.random() * 100 + "vw"],
              top: [null, Math.random() * 100 + "vh"],
              opacity: [0, 0.4, 0.4, 0],
              rotate: [0, 360, 720]
            }}
            transition={{ 
              duration: 20 + Math.random() * 30, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="fixed pointer-events-none z-0"
          >
            <Leaf className={`w-8 h-8 text-green-500/20`} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Cards */}
        <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
          {options.slice(0, 2).map((opt, idx) => (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => onSelect(opt.id as any)}
              className={`w-full group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 p-8 rounded-[2.5rem] text-left transition-all ${opt.hoverColor} hover:bg-slate-800/80 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${opt.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <opt.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{opt.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {opt.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6 text-center space-y-12 order-1 lg:order-2">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-48 h-48 mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-green-500/20 blur-[60px] rounded-full"
            />
            <img 
              src="../logo.png" 
              alt="Logo Solvi" 
              className="relative z-10 w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'absolute inset-0 flex items-center justify-center text-green-500 font-bold text-2xl text-center p-4';
                  fallback.innerText = 'SOLVI';
                  parent.appendChild(fallback);
                }
              }}
            />
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 font-display tracking-tight">
              O que você <span className="text-green-400">busca hoje?</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg mx-auto font-light">
              Seja bem-vindo ao <span className="text-slate-200 font-medium">ecossistema digital</span> de talentos da Solvi. Tecnologia e natureza em perfeita harmonia.
            </p>
            
            <div className="pt-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-xs font-bold text-green-400 uppercase tracking-[0.2em] backdrop-blur-sm">
                <Zap className="w-4 h-4 animate-pulse" /> VALORIZAÇÃO ECOLÓGICA 4.0
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-3 space-y-6 order-3">
          {options.slice(2, 4).map((opt, idx) => (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 + 0.4 }}
              onClick={() => onSelect(opt.id as any)}
              className={`w-full group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 p-8 rounded-[2.5rem] text-left transition-all ${opt.hoverColor} hover:bg-slate-800/80 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${opt.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <opt.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{opt.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {opt.description}
              </p>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-slate-600 text-xs uppercase tracking-widest font-bold z-10">
        <p>© 2026 Grupo Solvi</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Termos</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Suporte</a>
        </div>
      </div>
    </div>
  );
};
