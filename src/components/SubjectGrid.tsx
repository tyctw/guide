import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Languages, Calculator, Globe, FlaskConical, PenTool } from 'lucide-react';
import { SUBJECTS } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Languages: <Languages className="w-6 h-6" />,
  Calculator: <Calculator className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
};

export function SubjectGrid() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
            <BookOpen size={20} />
          </div>
          各科備考策略
        </h2>
        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-widest px-3 py-1.5 bg-indigo-50 rounded-lg">查看完整課表</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SUBJECTS.map((subject, idx) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-indigo-100 transition-all duration-300 group flex flex-col cursor-default"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-white shadow-sm ring-1 ring-slate-100 ${subject.color}`}>
                {iconMap[subject.icon]}
              </div>
              <span className="text-[10px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-1 rounded-md uppercase tracking-wider group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors shadow-sm">策略解析</span>
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5 group-hover:text-indigo-900 transition-colors">{subject.name}</h3>
            <p className="text-xs font-medium text-slate-500 mb-5 leading-relaxed flex-1">{subject.description}</p>
            <div className="space-y-2 pt-4 border-t border-slate-200/60 mt-auto">
              {subject.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-400 mt-1.5 flex-shrink-0 transition-colors" />
                  <span className="text-xs font-medium text-slate-600 leading-relaxed group-hover:text-slate-700">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
