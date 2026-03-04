import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, Users, Calendar, ArrowRight } from 'lucide-react';
import { JobVacancy } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface JobCardProps {
  job: JobVacancy;
  onClick: (job: JobVacancy) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800 hover:border-green-500/50 hover:shadow-green-900/10 transition-all cursor-pointer group"
      onClick={() => onClick(job)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-1">
            {job.department}
          </span>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-green-400 transition-colors">
            {job.title}
          </h3>
        </div>
        <div className="bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-tight">
          {job.unit}
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm text-slate-400 gap-2">
          <MapPin className="w-4 h-4" />
          {job.location}
        </div>
        <div className="flex items-center text-sm text-slate-400 gap-2">
          <Users className="w-4 h-4" />
          {job.quantity} {job.quantity === 1 ? 'vaga' : 'vagas'} disponível
        </div>
        <div className="flex items-center text-sm text-slate-400 gap-2">
          <Calendar className="w-4 h-4" />
          Expira em: {new Date(job.deadline).toLocaleDateString('pt-BR')}
        </div>
      </div>

      <div className="flex items-center justify-end pt-4 border-t border-slate-800">
        <div className="flex items-center gap-1 text-green-500 text-sm font-bold group-hover:gap-2 transition-all">
          Ver detalhes <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};
