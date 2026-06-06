import React, { useMemo, useState } from 'react';
import { Target, Menu, X, ExternalLink } from 'lucide-react';
import { CountdownIndicator } from './components/CountdownIndicator';
import { SubjectGrid } from './components/SubjectGrid';
import { ExamFormat } from './components/ExamFormat';
import { IntroductionArticle } from './components/IntroductionArticle';
import { SyllabusArticle } from './components/SyllabusArticle';
import { ComprehensiveArticle } from './components/ComprehensiveArticle';
import { TextModal } from './components/TextModal';
import { MOTIVATIONAL_QUOTES } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'expert'>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  
  const randomQuote = useMemo(() => {
    return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
  }, []);

  return (
    <div className="flex h-screen bg-[#F4F6F8] font-sans text-slate-800 overflow-hidden">
      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Right Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
         <div className="flex items-center justify-between p-6 border-b border-slate-100">
           <h2 className="text-lg font-black text-slate-800">導覽選單</h2>
           <button
             onClick={() => setIsDrawerOpen(false)}
             className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
           >
             <X size={20} />
           </button>
         </div>
         <div className="flex-1 overflow-y-auto p-4 space-y-2">
           <button onClick={() => { setCurrentView('home'); setIsDrawerOpen(false); }} className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-700 font-bold transition-all group border border-transparent hover:border-slate-100">
             <span>學習主頁</span>
           </button>
           <button onClick={() => { setCurrentView('expert'); setIsDrawerOpen(false); }} className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-700 font-bold transition-all group border border-transparent hover:border-slate-100">
             <span>專家專欄</span>
           </button>
           <div className="h-px bg-slate-100 my-2"></div>
           <button onClick={() => { setIsGuideOpen(true); setIsDrawerOpen(false); }} className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-700 font-bold transition-all group border border-transparent hover:border-slate-100">
             <span>使用指南</span>
           </button>
           <button onClick={() => { setIsPrivacyOpen(true); setIsDrawerOpen(false); }} className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-700 font-bold transition-all group border border-transparent hover:border-slate-100">
             <span>隱私權政策</span>
           </button>
           <div className="h-px bg-slate-100 my-2"></div>
           <a href="https://tyctw.github.io/clock/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold transition-all group border border-transparent hover:border-indigo-100">
             <span>會考倒數</span>
             <ExternalLink size={16} className="text-slate-300 group-hover:text-indigo-400" />
           </a>
           <a href="https://tyctw.github.io/spare/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold transition-all group border border-transparent hover:border-indigo-100">
             <span>會考落點分析</span>
             <ExternalLink size={16} className="text-slate-300 group-hover:text-indigo-400" />
           </a>
           <a href="https://tyctw.github.io/shared/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold transition-all group border border-transparent hover:border-indigo-100">
             <span>會考錄取分享</span>
             <ExternalLink size={16} className="text-slate-300 group-hover:text-indigo-400" />
           </a>
         </div>
         <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
           <p className="text-xs text-slate-400 font-medium text-center">Version 2.0 (Diamond)</p>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-20 bg-white/60 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-6 sm:px-10 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('home')}>
            <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-indigo-600/30 group-hover:bg-indigo-700 transition-colors text-sm">TW</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider leading-none mt-1">TW會考落點分析</span>
              <h1 className="text-lg font-black text-slate-800 group-hover:text-indigo-800 transition-colors leading-tight">必勝攻略</h1>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2.5 rounded-full hover:bg-slate-100 transition-colors text-slate-600 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10 container mx-auto max-w-7xl pb-24">
          <div className="space-y-8">
            {currentView === 'home' ? (
              <>
                {/* Row 1: Hero & Motivation */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 h-full">
                    <CountdownIndicator />
                  </div>
                  <div className="lg:col-span-1 h-full">
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-center h-full relative overflow-hidden group hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 relative shadow-sm border border-indigo-100/50">
                        <Target size={24} />
                      </div>
                      <h2 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3 relative flex items-center gap-2">
                         <span className="w-4 h-px bg-slate-300"></span> 每日必勝箴言
                      </h2>
                      <p className="text-xl font-bold text-slate-800 leading-relaxed relative">
                        "{randomQuote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Stack */}
                <div className="flex flex-col gap-10">
                  <IntroductionArticle />
                  <SyllabusArticle />
                  <SubjectGrid />
                  <ExamFormat />
                </div>
              </>
            ) : (
              <ComprehensiveArticle />
            )}
          </div>
          
          {/* Simple Footer */}
          <footer className="mt-12 py-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <div>© {new Date().getFullYear()} TW會考落點分析團隊. All rights reserved.</div>
            <div className="flex gap-4 items-center">
              <button onClick={() => setIsGuideOpen(true)} className="hover:text-indigo-500 transition-colors">使用指南</button>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-indigo-500 transition-colors">隱私權政策</button>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 系統同步完成</span>
            </div>
          </footer>
        </main>
      </div>

      {/* Modals */}
      <TextModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} title="使用指南">
        <div className="space-y-4 text-sm sm:text-base">
          <p>歡迎使用 TW會考落點分析 - 必勝攻略！本系統旨在提供最全面的會考資訊與準備方向。</p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">核心功能介紹</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>學習主頁：</strong>提供即時的會考倒數計時、每日必勝箴言，以及囊括各科考試內容、測驗說明與準備方向的綜合資訊。</li>
            <li><strong>專家專欄：</strong>為您帶來最新的備考心法、應試策略與時間管理技巧，由資深教育團隊親自撰寫。</li>
            <li><strong>歷屆試題與落點分析（外部連結）：</strong>透過側邊選單，您可以快速連結至我們姊妹網站，進行精準的落點分析及歷屆試題演練。</li>
          </ul>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">如何達到最佳效果？</h3>
          <p>建議您每天登入確認剩餘天數，規劃當日要複習的科目板塊。利用專家專欄調整心態，並善加運用各科的官方命題指南作為最後衝刺的指北針。</p>
        </div>
      </TextModal>

      <TextModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="隱私權政策">
        <div className="space-y-4 text-sm sm:text-base">
          <p>TW會考落點分析團隊非常重視您的隱私權。請閱讀以下政策，了解我們如何處理您的資訊。</p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">資訊收集與使用</h3>
          <p>本「必勝攻略」網站為一公開之靜態資訊入口。我們<strong>不會</strong>在此要求您輸入任何個人身分資料（如姓名、身分證字號、電話等）。所有內容皆為自由閱覽，您的學習紀錄也僅保存在您個人的瀏覽器中，不會上傳至我們的伺服器。</p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Cookie 與追蹤技術</h3>
          <p>我們可能會使用基本的 Cookie 存儲技術來優化您的瀏覽體驗（例如記錄您是否已關閉某些提示）。您可以隨時在瀏覽器設定中清除或停用這些 Cookie。</p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">外部連結</h3>
          <p>本網站包含前往其他網站的連結（如：會考落點分析、錄取分享等）。當您點擊這些連結離開本站後，所造訪網站的隱私權政策將適用於該網站。請注意，我們無法控制外部網站的做法。</p>
          <p className="mt-6 text-slate-400 text-xs">最後更新日期：{new Date().getFullYear()}年4月</p>
        </div>
      </TextModal>

    </div>
  );
}
