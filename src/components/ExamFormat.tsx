import React from 'react';
import { LayoutList } from 'lucide-react';

const EXAM_FORMATS = [
  { subject: '國文', type: '選擇題 (4選1)', questions: '38～46題', time: '70分鐘', outline: '國語文-第四階段' },
  { subject: '英語-閱讀', type: '選擇題 (4選1)', questions: '40～45題', time: '60分鐘', outline: '英語文-千二單字' },
  { subject: '英語-聽力', type: '選擇題 (3選1)', questions: '20～30題', time: '25分鐘', outline: '英語文-第四階段' },
  { subject: '數學', type: '選擇題 + 非選', questions: '23～28題 + 2～3題', time: '80分鐘', outline: '數學領域-第四階段' },
  { subject: '社會', type: '選擇題 (4選1)', questions: '50～60題', time: '70分鐘', outline: '社會領域-第四階段' },
  { subject: '自然', type: '選擇題 (4選1)', questions: '45～55題', time: '70分鐘', outline: '自然科學-第四階段' },
  { subject: '寫作測驗', type: '引導寫作', questions: '1題', time: '50分鐘', outline: '國語文-第四階段' }
];

export function ExamFormat() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
            <LayoutList size={20} />
          </div>
          考試科目與題型
        </h2>
        <span className="px-3 py-1.5 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg uppercase tracking-wider hidden sm:inline-block">最新課綱對照</span>
      </div>

      <div className="overflow-x-auto pb-2 scrollbar-none">
        <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
          <thead>
            <tr className="border-b-2 border-slate-100">
              <th className="py-3 font-bold text-slate-400 uppercase tracking-widest text-[10px] w-24">測驗科目</th>
              <th className="py-3 font-bold text-slate-400 uppercase tracking-widest text-[10px] w-32">題型樣態</th>
              <th className="py-3 font-bold text-slate-400 uppercase tracking-widest text-[10px] w-32">題數與測驗時間</th>
              <th className="py-3 font-bold text-slate-400 uppercase tracking-widest text-[10px] hidden sm:table-cell">核心命題範疇</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {EXAM_FORMATS.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                <td className="py-4 pr-4">
                  <span className="inline-block px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-800 font-bold rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-100 transition-colors shadow-sm">{row.subject}</span>
                </td>
                <td className="py-4 pr-4 text-slate-600 font-medium text-xs">{row.type}</td>
                <td className="py-4 pr-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-slate-800">{row.questions}</span>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md inline-block w-max border border-indigo-100/50">{row.time}</span>
                  </div>
                </td>
                <td className="py-4 text-xs text-slate-500 leading-relaxed font-medium hidden sm:table-cell max-w-[180px] lg:max-w-none truncate" title={row.outline}>{row.outline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
