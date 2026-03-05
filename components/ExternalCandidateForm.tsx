import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, FileText, Briefcase, GraduationCap, MapPin, Hash, Send, ArrowLeft } from 'lucide-react';

interface ExternalCandidateFormProps {
  onBack: () => void;
}

export const ExternalCandidateForm: React.FC<ExternalCandidateFormProps> = ({ onBack }) => {
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
            <Send className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Cadastro Realizado!</h2>
          <p className="text-slate-400 mb-8">
            Seu currículo foi enviado com sucesso para o nosso banco de talentos. Entraremos em contato assim que surgir uma oportunidade com seu perfil.
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
          <div className="bg-green-600 p-10 text-white">
            <h1 className="text-3xl font-bold mb-2">Trabalhe Conosco</h1>
            <p className="text-green-100 opacity-80">Cadastre seu perfil em nosso banco de talentos externo.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Personal Info */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                <User className="w-4 h-4" /> Informações Pessoais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="text" required className="input-field !pl-12" placeholder="Seu nome" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">CPF</label>
                  <div className="relative">
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="text" required className="input-field !pl-12" placeholder="000.000.000-00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="email" required className="input-field !pl-12" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="tel" required className="input-field !pl-12" placeholder="(00) 00000-0000" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Endereço Residencial</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input type="text" required className="input-field !pl-12" placeholder="Rua, Número, Bairro, Cidade - UF" />
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div className="space-y-6 pt-8 border-t border-slate-800">
              <h3 className="text-sm font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Experiência Profissional
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Última Empresa</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="text" className="input-field !pl-12" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Último Cargo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input type="text" className="input-field !pl-12" placeholder="Seu cargo" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Escolaridade</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <select className="input-field !pl-12 appearance-none">
                    <option value="">Selecione sua escolaridade</option>
                    <option value="fundamental">Ensino Fundamental</option>
                    <option value="medio">Ensino Médio</option>
                    <option value="tecnico">Ensino Técnico</option>
                    <option value="superior">Ensino Superior</option>
                    <option value="pos">Pós-Graduação / MBA</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CV Upload */}
            <div className="space-y-6 pt-8 border-t border-slate-800">
              <h3 className="text-sm font-bold text-green-500 uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-4 h-4" /> Currículo
              </h3>
              <div className="bg-slate-950 border-2 border-dashed border-slate-800 rounded-3xl p-12 text-center hover:border-green-500/50 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-slate-500 group-hover:text-green-500" />
                </div>
                <p className="text-slate-400 font-bold mb-1">Clique para anexar seu currículo</p>
                <p className="text-slate-600 text-xs uppercase tracking-widest">PDF, DOCX ou JPG (Máx 5MB)</p>
                <input type="file" className="hidden" />
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
                  Processando...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" /> Finalizar Cadastro
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
