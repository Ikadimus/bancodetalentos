import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, FileText, Briefcase, Building2, MapPin, Send, ArrowLeft, Star, Target } from 'lucide-react';
import { UNITS } from '../constants';

interface EmployeePortalProps {
  onBack: () => void;
}

export const EmployeePortal: React.FC<EmployeePortalProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-slate-900 border border-slate-800 p-12 rounded-[3rem] text-center"
        >
          <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-900/20">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Interesse Registrado!</h2>
          <p className="text-slate-400 mb-8">
            Suas expectativas e perfil foram enviados ao RH. Ficaremos atentos às oportunidades que se alinham ao seu desejo de crescimento na Solvi.
          </p>
          <button 
            onClick={onBack}
            className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl font-bold transition-all border border-slate-700"
          >
            Voltar ao Início
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-green-700 to-green-600 p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">Portal do Colaborador</h1>
              <p className="text-green-100 opacity-80">Manifeste seu interesse em novas áreas e planeje seu futuro na Solvi.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Basic Info */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                <User className="w-4 h-4" /> Dados Básicos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-mail Corporativo ou Pessoal</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="email" required className="input-field !pl-12" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="tel" required className="input-field !pl-12" placeholder="(00) 00000-0000" />
                  </div>
                </div>
              </div>
            </div>

            {/* Current Position Info */}
            <div className="space-y-6 pt-8 border-t border-slate-800">
              <h3 className="text-sm font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Atuação Atual
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Unidade</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <select required className="input-field !pl-12 appearance-none">
                      <option value="">Selecione sua unidade</option>
                      {UNITS.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Setor</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="text" required className="input-field !pl-12" placeholder="Ex: Operacional, Administrativo" />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Cargo Atual</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="text" required className="input-field !pl-12" placeholder="Seu cargo atual" />
                  </div>
                </div>
              </div>
            </div>

            {/* Career Expectations */}
            <div className="space-y-6 pt-8 border-t border-slate-800">
              <h3 className="text-sm font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4" /> Expectativas e Interesses
              </h3>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Onde você se vê no futuro da Solvi?</label>
                <textarea 
                  required 
                  rows={5}
                  className="input-field py-4" 
                  placeholder="Conte-nos sobre seus conhecimentos, formações e em quais áreas ou cargos você tem interesse em atuar futuramente (ex: 'Sou operador mas tenho formação em TI e gostaria de migrar para essa área')."
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-green-600 hover:bg-green-500 disabled:bg-slate-800 text-white rounded-2xl font-bold text-lg shadow-xl shadow-green-900/20 transition-all flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" /> Registrar Interesse
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
