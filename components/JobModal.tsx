import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Briefcase, MapPin, DollarSign, Gift, User, Mail, Phone, MessageSquare, ArrowLeft, Send, Users, Hash } from 'lucide-react';
import { JobVacancy } from '../types';

interface JobModalProps {
  job: JobVacancy | null;
  onClose: () => void;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-green-500">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) return null;

  const handleIndicate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Indicação enviada com sucesso! O RH da Solvi entrará em contato com o indicado.');
      setIsSubmitting(false);
      setShowForm(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-slate-900 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-800"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex justify-between items-start bg-slate-900/50">
            <div className="flex items-center gap-4">
              {showForm && (
                <button 
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-green-500"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-1 block">
                  {showForm ? 'Formulário de Indicação' : job.department}
                </span>
                <h2 className="text-2xl font-bold text-slate-100">
                  {showForm ? `Indicar para: ${job.title}` : job.title}
                </h2>
                {!showForm && (
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center text-sm text-slate-400 gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-400 gap-1.5">
                      <Briefcase className="w-4 h-4 text-slate-500" />
                      {job.unit}
                    </div>
                    <div className="flex items-center text-sm text-slate-400 gap-1.5">
                      <DollarSign className="w-4 h-4 text-slate-500" />
                      {job.salaryRange || 'A combinar'}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-slate-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-8">
            {!showForm ? (
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-500" />
                    Descrição da Vaga
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {job.description}
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Requisitos
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-400 text-sm">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-green-500" />
                    Benefícios
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <span 
                        key={index}
                        className="bg-green-900/20 text-green-400 px-3 py-1 rounded-lg text-sm font-medium border border-green-800/30"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <form id="referral-form" onSubmit={handleIndicate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Colaborador (Quem indica)</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input type="text" required className="input-field !pl-12" placeholder="Seu nome completo" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Matrícula</label>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input type="text" required className="input-field !pl-12" placeholder="Sua matrícula" />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-800 my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nome do Indicado</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input type="text" required className="input-field !pl-12" placeholder="Nome completo" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input type="email" required className="input-field !pl-12" placeholder="email@exemplo.com" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefone / WhatsApp</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input type="tel" required className="input-field !pl-12 pr-12" placeholder="(00) 00000-0000" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <WhatsAppIcon />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Relação com o indicado</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input type="text" required className="input-field !pl-12" placeholder="Ex: Amigo, Ex-colega..." />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Por que você indica esta pessoa?</label>
                  <textarea 
                    required 
                    className="input-field min-h-[100px] py-4" 
                    placeholder="Descreva brevemente as qualificações e o perfil do indicado..."
                  ></textarea>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-2xl border border-dashed border-slate-700 text-center">
                  <p className="text-sm text-slate-400 mb-2">Anexar Currículo (PDF, DOCX)</p>
                  <button type="button" className="text-xs font-bold text-green-500 hover:text-green-400 underline">Selecionar arquivo</button>
                </div>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end gap-4">
            <button 
              onClick={showForm ? () => setShowForm(false) : onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:bg-slate-800 transition-colors"
            >
              {showForm ? 'Voltar' : 'Fechar'}
            </button>
            {!showForm ? (
              <button 
                className="px-8 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 shadow-lg shadow-green-900/20 transition-all active:scale-95"
                onClick={() => setShowForm(true)}
              >
                Indicar Agora
              </button>
            ) : (
              <button 
                form="referral-form"
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 shadow-lg shadow-green-900/20 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    Enviar Indicação <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
