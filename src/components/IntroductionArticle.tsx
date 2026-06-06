import React from 'react';
import { BookOpenCheck, Brain, Rocket } from 'lucide-react';

export function IntroductionArticle() {
  return (
    <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
      
      <header className="mb-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-indigo-100 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              編輯主筆室
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              5 Min Read
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-3 group-hover:text-indigo-900 transition-colors">
            迎戰會考，啟動你的學習超能力
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            寫在衝刺之前：給國三生的全方位備考指南與致勝心法。
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 border-t border-slate-100 pt-8 mt-2">
        <section className="space-y-4">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
               <BookOpenCheck size={18} />
            </div>
            關於教育會考
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            國中教育會考不只是一場升學測驗，更是檢核你三年學習成果的里程碑。其設計理念在於「學力監控」與「減輕壓力」，透過精熟(A)、基礎(B)、待加強(C)的標準參照模式，幫助你客觀了解自己的學習定位。在這裡，與其焦慮地與他人比較，更重要的是專注於超越昨天的自己。
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-sm">
               <Brain size={18} />
            </div>
            衝刺期的關鍵心法
          </h3>
          <ul className="text-sm text-slate-600 leading-relaxed font-medium space-y-3">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
              <span><strong className="text-slate-700">規律作息：</strong>會考從早上開始，請確保大腦在上午已完全開機。絕不熬夜，睡眠是記憶力鞏固的關鍵。</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
              <span><strong className="text-slate-700">歷屆試題：</strong>重點在於熟悉「出題邏輯」與「閱讀篇幅」，培養實戰手感，而非單純背誦猜題。</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
              <span><strong className="text-slate-700">錯題本：</strong>把珍貴的時間花在不會的地方，考前一週這會是你最具價值的專屬複習寶典。</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
               <Rocket size={18} />
            </div>
            如何善用這份攻略？
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            為了幫助你有系統、有效率地備考，我們設計了這個數位學習儀表板：
          </p>
          <ul className="text-sm text-slate-600 leading-relaxed font-medium space-y-3">
            <li className="flex items-start gap-2.5">
              <span className="text-indigo-500 font-black mt-0.5">01</span>
              <span>利用上方<strong className="text-slate-700">倒數計時器</strong>，建立時間觀念，設定最後衝刺的目標時程。</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-indigo-500 font-black mt-0.5">02</span>
              <span>往下閱讀<strong className="text-slate-700">各科研析與測驗題型</strong>，掌握最新課綱命題精神與得分策略。</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-indigo-500 font-black mt-0.5">03</span>
              <span>善用右側<strong className="text-slate-700">計畫管理</strong>，每天設定並執行具體的小任務，累積大成就。</span>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
