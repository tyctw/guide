import React from 'react';
import { Quote, BookOpen, PenTool, CheckCircle2 } from 'lucide-react';

export function ComprehensiveArticle() {
  return (
    <article className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8">
      {/* Article Cover/Header */}
      <div className="relative h-[300px] sm:h-[400px] w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-widest">
              專家專欄
            </span>
            <span className="text-slate-300 text-sm font-medium">閱讀時間 8 分鐘</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            決戰最後一哩路：<br className="hidden sm:block" />如何在高壓下發揮 120% 的實力？
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-700 overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-400"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs uppercase">ED</div>
              </div>
              <span>會考戰神 編輯團隊</span>
            </div>
            <span>•</span>
            <span>2024年4月更新</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="px-6 py-10 sm:px-16 sm:py-16 max-w-4xl mx-auto space-y-10 text-slate-700 font-medium text-lg leading-relaxed">
        
        <p className="first-letter:text-7xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left first-line:uppercase first-line:tracking-widest">
          隨著倒數日曆上的數字越來越小，焦慮感往往也隨之成正比的放大。這是一場耐力賽，而你已經跑到了最後的衝刺區。許多考生在這個階段會感到迷茫，不知道該繼續鑽研難題，還是回頭鞏固基礎。其實，最後階段的致勝關鍵不在於你讀了多「新」的知識，而在於你如何將已知的武器打磨得更鋒利。
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" />
          回歸課本：最平凡的武器，最致命的一擊
        </h2>
        <p>
          當大家都瘋狂地寫著坊間艱澀的模擬試題時，請記住一個不變的真理：會考的出題依據永遠是十二年國教課綱，而課本就是課綱的最佳體現。把課本裡的每一個圖表、每一個實驗、每一段歷史脈絡重新梳理一次。你會發現，許多在模擬考中遇到的盲點，其實都在課本的某個角落裡亮著微光。
        </p>

        <blockquote className="my-10 bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-2xl relative">
          <Quote className="absolute top-4 right-4 text-indigo-100 w-16 h-16 transform rotate-180 pointer-events-none" />
          <p className="text-xl font-bold text-indigo-900 relative z-10 leading-relaxed italic">
            "所謂的黑馬，不過是把基本功練到極致的普通人。在會考的戰場上，少犯錯的贏家，遠多於解出難題的英雄。"
          </p>
        </blockquote>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
          <BookOpen className="text-blue-500" />
          錯題本的正確打開方式
        </h2>
        <p>
          很多同學都有錯題本，但往往只是把題目抄上去、解答寫在旁邊，考前翻一翻就以為自己會了。真正的「錯題本提煉法」需要過三關：
        </p>
        <ul className="space-y-4 my-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs shrink-0 mt-1">1</span>
            <div><strong className="text-slate-900">找盲點：</strong>我是計算錯誤？觀念不清？還是題目看錯？</div>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs shrink-0 mt-1">2</span>
            <div><strong className="text-slate-900">寫詳解：</strong>用自己的話（不是抄解答）把這題的觀念寫一遍。</div>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs shrink-0 mt-1">3</span>
            <div><strong className="text-slate-900">考自己：</strong>遮住解答，一週後自己再算一次，算對了才算真正過關。</div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
          <PenTool className="text-rose-500" />
          心態調適：接納焦慮，與之共舞
        </h2>
        <p>
          「不緊張」是一個不可能的任務，過度追求不緊張反而會讓你更緊張。告訴自己：「會緊張代表我在乎，這很正常。」當你坐在考場上，深呼吸，把注意力集中在筆尖和眼前的文字。不要去想上一節考砸了的數學，也不要去想下一節未知的自然，你唯一能掌握的，只有「現在這一題」。
        </p>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Share this article</div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors font-serif font-black italic">f</button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors font-serif font-black">in</button>
            </div>
          </div>
          <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors text-sm w-full sm:w-auto shadow-md">
            前往歷屆試題練習
          </button>
        </div>

      </div>
    </article>
  );
}
