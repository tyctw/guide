import React from 'react';
import { BookText, BookOpen, Globe, Atom, PenTool, Calculator, FileText } from 'lucide-react';

export function SyllabusArticle() {
  return (
    <article className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8">
      {/* Header Area */}
      <header className="bg-slate-900 px-8 py-10 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-4 mb-4">
          <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <BookText size={20} className="text-indigo-300" />
          </span>
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-200 text-xs font-bold rounded-lg uppercase tracking-widest border border-indigo-400/30">
            官方命題指南
          </span>
        </div>
        <h2 className="relative z-10 text-3xl sm:text-4xl font-black tracking-tight mb-4">
          113年國中教育會考各科命題內容與解析
        </h2>
        <p className="relative z-10 text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          考試科目包含國文、英語、數學、社會、自然及寫作測驗，除國文與寫作測驗同屬語文學習領域本國語文外，各科不跨學習領域，皆以十二年國民基本教育課程綱要第四學習階段學習重點為命題依據。
        </p>
      </header>

      {/* Main Content Area */}
      <div className="p-8 sm:p-12 space-y-16">
        
        {/* 國文科 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-sm border border-rose-100">
              <BookOpen size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800">國文科</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">一、考試內容</h4>
              <ul className="space-y-3">
                {[
                  '能具備將國語文應用於日常生活的素養。',
                  '能具備良好的聆聽與表達能力。',
                  '能靈活應用並熟練注音符號及適切運用字辭，以解決字音、字形與字義的問題。',
                  '能運用不同閱讀理解策略及比較多元文本，深化閱讀廣度與深度。',
                  '能廣泛閱讀結合跨領域或全球議題之多元文本，藉以擴展宏觀視野，並主動關懷社會及參與公共事務。'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed font-medium">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">二、測驗說明</h4>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-slate-700 leading-relaxed font-medium">
                  題型為<strong className="text-slate-900 bg-rose-100 px-1 bg-opacity-50">單選題</strong>。主要評量學生對國語文的理解、應用和分析能力。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 英語科 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-sm border border-amber-100">
              <Globe size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800">英語科</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">一、考試內容</h4>
              <ul className="space-y-3">
                {[
                  '能具備將英語文應用於日常生活的素養。',
                  '能具備基本的英語文聽、說、讀、寫能力。',
                  '能運用不同聽讀策略及比較多元文本，深化學習廣度與深度。'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed font-medium">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-4">二、測驗說明</h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  題型分為<strong className="text-slate-900">閱讀</strong>與<strong className="text-slate-900">聽力</strong>兩種，皆為<strong className="text-slate-900 bg-amber-100 px-1 bg-opacity-50">單選題</strong>。
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-6">
                <div>
                  <h5 className="font-bold text-amber-700 flex items-center gap-2 mb-2"><FileText size={16} />英語（閱讀）</h5>
                  <ul className="text-sm text-slate-700 leading-relaxed space-y-1.5 font-medium ml-6 list-disc list-outside marker:text-amber-300">
                    <li><strong className="text-slate-900">字彙：</strong>約 1,200 字</li>
                    <li><strong className="text-slate-900">試題類型：</strong>圖文題、情境題、推論題、主旨題、細節題</li>
                    <li><strong className="text-slate-900">答對題數限制：</strong>各等級（A、B、C）有不同的答對題數門檻</li>
                  </ul>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div>
                  <h5 className="font-bold text-amber-700 flex items-center gap-2 mb-2"><BookOpen size={16} />英語（聽力）</h5>
                  <ul className="text-sm text-slate-700 leading-relaxed space-y-1.5 font-medium ml-6 list-disc list-outside marker:text-amber-300">
                    <li><strong className="text-slate-900">主題：</strong>涵蓋日常生活、學校生活、社會議題等多元主題</li>
                    <li><strong className="text-slate-900">試題類型：</strong>圖片題、對話題、短篇演講題</li>
                    <li><strong className="text-slate-900">答對題數限制：</strong>各等級（A、B、C）有不同的答對題數門檻</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 數學科 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm border border-blue-100">
              <Calculator size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800">數學科</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">一、考試內容</h4>
              <ul className="space-y-3">
                {[
                  '能具備將數學應用於日常生活的素養。',
                  '能具備基本的數學概念、運算能力和解題技巧。',
                  '能運用不同數學解題策略，解決各類數學問題。',
                  '能正確使用數學符號和用語，進行數學表達和溝通。',
                  '能理解算術、代數、幾何及統計的基本概念和原理，並能應用於實際情境中。',
                  '能培養邏輯推理能力，進行簡單的數學證明和邏輯判斷。'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed font-medium">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">二、測驗說明</h4>
                <p className="text-slate-700 leading-relaxed font-medium text-sm">
                  題型分為<strong className="text-slate-900">單選題</strong>及<strong className="text-slate-900 bg-blue-100 px-1 bg-opacity-50">非選擇題</strong>兩種。評量學生對數學概念的理解、運算能力、解題技巧、推理能力和應用能力。
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">三、數學非選擇題評分規準</h4>
              <p className="text-sm text-slate-600 font-medium mb-2">題型包括計算題、證明題、應用題等。</p>
              <div className="bg-white border rounded-2xl overflow-hidden text-sm">
                <div className="flex bg-slate-50 border-b border-slate-100 font-bold text-slate-700">
                  <div className="p-3 w-20 text-center shrink-0 border-r border-slate-100">給分</div>
                  <div className="p-3">評分標準說明</div>
                </div>
                {[
                  { score: '3分', desc: '解題過程完整、邏輯清晰、步驟正確、計算無誤、答案正確。' },
                  { score: '2分', desc: '解題過程大致完整，但有些微邏輯或計算錯誤，或答案不完全正確。' },
                  { score: '1分', desc: '解題過程不完整，但能寫出部分正確步驟或概念；或計算錯誤較多，但有部分正確步驟；或答案不正確，但有部分正確步驟或概念。' },
                  { score: '0分', desc: '解題過程完全錯誤，無正確概念或步驟；或未作答。空白卷亦為 0 分。' }
                ].map((row, i) => (
                  <div key={i} className="flex border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <div className="p-4 w-20 text-center shrink-0 border-r border-slate-50 font-black text-blue-500">{row.score}</div>
                    <div className="p-4 text-slate-600 font-medium leading-relaxed">{row.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 社會科 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm border border-emerald-100">
              <Globe size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800">社會科</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">一、考試內容</h4>
              <p className="text-slate-700 font-medium mb-3">包含歷史、地理、公民與社會三科內容：</p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/50">
                  <div className="w-16 shrink-0 font-bold text-emerald-700">歷史</div>
                  <div className="text-slate-600 font-medium">臺灣史、中國史、世界史</div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/50">
                  <div className="w-16 shrink-0 font-bold text-emerald-700">地理</div>
                  <div className="text-slate-600 font-medium">臺灣地理、中國地理、世界地理</div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/50">
                  <div className="w-16 shrink-0 font-bold text-emerald-700">公民</div>
                  <div className="text-slate-600 font-medium">個人與社會、社會與法律、國家與社會、全球與國際關係</div>
                </div>
              </div>
             </div>
             <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">二、測驗說明</h4>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                <p className="text-slate-700 leading-relaxed font-medium">
                  題型為<strong className="text-slate-900 bg-emerald-100 px-1 bg-opacity-50">單選題</strong>。主要評量學生對歷史、地理、公民與社會三大學科領域的基本知識、理解、分析和綜合應用能力。
                </p>
              </div>
             </div>
          </div>
        </section>

        {/* 自然科 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm border border-purple-100">
              <Atom size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800">自然科</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">一、考試內容</h4>
              <p className="text-slate-700 font-medium mb-3">包含生物、理化、地球科學三科內容：</p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/50">
                  <div className="w-16 shrink-0 font-bold text-purple-700">生物</div>
                  <div className="text-slate-600 font-medium">細胞與遺傳、生物體系、生態與環境</div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/50">
                  <div className="w-16 shrink-0 font-bold text-purple-700">理化</div>
                  <div className="text-slate-600 font-medium">物質與能量、力與運動、電與磁、聲與光、化學反應</div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/50">
                  <div className="w-16 shrink-0 font-bold text-purple-700">地科</div>
                  <div className="text-slate-600 font-medium">地球的結構與演化、天氣與氣候、天文與太空</div>
                </div>
              </div>
             </div>
             <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">二、測驗說明</h4>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-purple-400"></div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  <strong className="text-purple-700 bg-purple-100 px-1">答錯不倒扣。</strong><br/><br/>會考自然科的計算題型不會太複雜，大部分是考觀念而非艱澀的難題。在最後衝刺期，將基礎核心概念釐清最為重要！
                </p>
              </div>
             </div>
          </div>
        </section>

        {/* 寫作測驗 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm border border-indigo-100">
              <PenTool size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800">寫作測驗</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">一、考試內容</h4>
              <ul className="space-y-3">
                {[
                  '能具備運用文字表達思想、情感和觀點的能力。',
                  '能根據題目要求，運用適當的文體和寫作方法進行創作。',
                  '能組織結構完整、邏輯清晰、語言流暢的文章。',
                  '能正確使用標點符號和字詞，並能運用各種修辭技巧豐富文章內容。'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed font-medium">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase">二、測驗說明</h4>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                <p className="text-slate-700 leading-relaxed font-medium">
                  題型為<strong className="text-slate-900 bg-indigo-100 px-1 bg-opacity-50">命題作文</strong>，可能包含記敘文、抒情文、議論文等多元文體。<br/><br/>
                  主要評量學生的內容構思、組織結構、語句表達和標點符號使用等全方位的統整寫作能力。
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
