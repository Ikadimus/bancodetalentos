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
        
        {/* Futuristic Grid Overlay */}
        <motion.div 
          animate={{ 
            backgroundPositionY: ["0px", "40px"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        {/* Dynamic Mesh Gradients */}
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

        {/* Sunlight Rays */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-green-400/20 to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/4 w-1/3 h-full bg-gradient-to-b from-emerald-400/10 to-transparent blur-3xl transform skew-x-12"></div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/70"></div>
        
        {/* Bloom Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-green-500/5 mix-blend-screen blur-3xl"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
        
        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}>
        </div>

        {/* Animated Bio-Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <pattern id="bio-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-500" />
            <circle cx="0" cy="0" r="1" fill="currentColor" className="text-green-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bio-grid)" />
        </svg>
      </div>

        {/* Digital Pulse Effect */}
        <motion.div
          animate={{ 
            scale: [1, 2],
            opacity: [0.3, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-green-500/20 rounded-full pointer-events-none"
        />

        {/* Floating Organic & Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Digital Spores */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`spore-${i}`}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: Math.random() * 0.3 + 0.2
            }}
            animate={{ 
              y: ["0%", "-100%"],
              opacity: [0, 0.4, 0],
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-2 h-2 bg-green-400 rounded-full blur-[2px] shadow-[0_0_10px_rgba(74,222,128,0.8)]"
          />
        ))}

        {/* Light Streaks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            initial={{ 
              x: "-100%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              width: "200px",
              height: "1px"
            }}
            animate={{ 
              x: "200%",
              opacity: [0, 0.2, 0],
            }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 15
            }}
            className="absolute bg-gradient-to-r from-transparent via-green-400/30 to-transparent blur-[2px]"
          />
        ))}

        {/* Wind Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: "-10%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              x: "110%",
              opacity: [0, 0.3, 0],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}

        {/* Large Slow Leaves */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`large-leaf-${i}`}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%",
              opacity: 0,
              scale: 1.2,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: "-20%",
              x: (Math.random() * 100) + "%",
              opacity: [0, 0.2, 0.2, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 25 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute"
          >
            <Leaf className="w-16 h-16 text-green-600/10 blur-[1px]" />
          </motion.div>
        ))}

        {/* Floating Leaves - Distributed across the screen */}
        {[...Array(50)].map((_, i) => {
          const startSide = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
          let initialX, initialY, animateX, animateY;

          if (startSide === 0) { // Top
            initialX = Math.random() * 100 + "vw";
            initialY = "-10vh";
            animateX = (Math.random() * 100) + "vw";
            animateY = "110vh";
          } else if (startSide === 1) { // Right
            initialX = "110vw";
            initialY = Math.random() * 100 + "vh";
            animateX = "-10vw";
            animateY = (Math.random() * 100) + "vh";
          } else if (startSide === 2) { // Bottom
            initialX = Math.random() * 100 + "vw";
            initialY = "110vh";
            animateX = (Math.random() * 100) + "vw";
            animateY = "-10vh";
          } else { // Left
            initialX = "-10vw";
            initialY = Math.random() * 100 + "vh";
            animateX = "110vw";
            animateY = (Math.random() * 100) + "vh";
          }

          return (
            <motion.div
              key={`leaf-${i}`}
              initial={{ 
                left: initialX, 
                top: initialY,
                opacity: 0,
                scale: Math.random() * 0.5 + 0.3,
                rotate: Math.random() * 360
              }}
              animate={{ 
                left: animateX,
                top: animateY,
                opacity: [0, 0.4, 0.4, 0],
                rotate: [0, 360, 720]
              }}
              transition={{ 
                duration: 15 + Math.random() * 25, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 20
              }}
              className="fixed pointer-events-none z-0"
            >
              <motion.div
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -inset-2 bg-green-400/10 blur-md rounded-full"
              />
              <Leaf 
                className={`w-${Math.random() > 0.5 ? '6' : '10'} h-${Math.random() > 0.5 ? '6' : '10'} 
                ${i % 3 === 0 ? 'text-green-400/20' : i % 3 === 1 ? 'text-emerald-400/20' : 'text-lime-400/20'}`} 
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -10, 0],
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        <div className="mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-64 h-64 mx-auto mb-12 flex items-center justify-center"
          >
            {/* Sun Glow Effect for Logo - More Radiant */}
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-green-500/30 blur-[80px] rounded-full"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1.6, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-emerald-400/20 blur-[100px] rounded-full"
            />
            
            <motion.div
              animate={{ 
                rotate: [0, 3, 0, -3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="https://ais-dev-nl6rl4s23b7eadyofudci5-171440160327.us-east1.run.app/api/files/1741110207212-1.png" 
                alt="Solvi Leaf Sun" 
                className="w-40 h-40 object-contain drop-shadow-[0_0_50px_rgba(34,197,94,0.8)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Orbiting Elements - More subtle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-green-500/5 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-400/20 rounded-full"></div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <img 
              src="https://ais-dev-nl6rl4s23b7eadyofudci5-171440160327.us-east1.run.app/api/files/1741110207212-0.png" 
              alt="Solvi Logo" 
              className="h-28 mx-auto object-contain brightness-0 invert opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 font-display tracking-tight leading-tight">
            O que você <motion.span 
              animate={{ 
                color: ['#4ade80', '#10b981', '#4ade80'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-green-400"
            >
              busca hoje?
            </motion.span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-8 font-light">
            Seja bem-vindo ao <span className="text-slate-200 font-medium">ecossistema digital</span> de talentos da Solvi. Tecnologia e natureza em perfeita harmonia.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-xs font-bold text-green-400 uppercase tracking-[0.2em] backdrop-blur-sm shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            <Zap className="w-4 h-4 animate-pulse text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" /> Valorização Ecológica 4.0
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, idx) => (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelect(opt.id as any)}
              className={`group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 p-8 rounded-[2.5rem] text-left transition-all ${opt.hoverColor} hover:bg-slate-800/60 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Card Pulse Border */}
              <motion.div 
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 border-2 border-green-500/20 rounded-[2.5rem] pointer-events-none"
              />
              
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`relative z-10 w-14 h-14 ${opt.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform border border-white/10`}>
                <opt.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-slate-100 mb-3 group-hover:text-green-500 transition-colors">{opt.title}</h3>
              <p className="relative z-10 text-slate-500 text-sm leading-relaxed mb-6">
                {opt.description}
              </p>
              <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Acessar <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600 text-sm">
          <p>© 2026 Grupo Solvi</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Suporte</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
