import React, { useEffect, useState } from 'react';
import { Clock, CalendarDays, ArrowRight } from 'lucide-react';

export function CountdownIndicator() {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [targetDate, setTargetDate] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    let examDate = new Date(currentYear, 4, 15);
    if (today > examDate) {
      examDate = new Date(currentYear + 1, 4, 15);
    }
    setTargetDate(`${examDate.getFullYear()}年5月`);
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays > 0 ? diffDays : 0);
  }, []);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 shadow-xl shadow-indigo-900/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden h-full group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
          <span className="text-xs font-bold text-indigo-300 tracking-widest uppercase">倒數計時器</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-7xl sm:text-8xl font-black text-white tabular-nums tracking-tighter leading-none">{daysLeft}</span>
          <span className="text-2xl font-bold text-indigo-200">天</span>
        </div>
        <p className="mt-4 text-indigo-200/80 text-sm font-medium">
          距離 {targetDate} 國中教育會考
        </p>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:max-w-xs xl:max-w-sm w-full md:ml-auto text-white shadow-xl shadow-black/20">
        <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-indigo-100">
           <CalendarDays size={18} /> 最終衝刺階段
        </h3>
        <p className="text-sm text-indigo-100/70 leading-relaxed font-medium mb-6">
          穩紮穩打，每日進步一點點。<br/>
          保持規律作息，歷屆試題是你的最佳導航。
        </p>
        <a href="https://ceecc.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center justify-center gap-2 group/btn shadow-md">
          開啟今日複習 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
