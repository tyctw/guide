import { SubjectStrategy } from './types';

export const SUBJECTS: SubjectStrategy[] = [
  {
    id: 'chinese',
    name: '國文',
    icon: 'BookOpen',
    color: 'bg-red-50 text-red-600 border-red-200',
    description: '評量學生統整應用文本的能力，重視國語文素養在生活中的應用與實踐。',
    tips: [
      '常用字的形音義：認識國字至少 4,500 字，使用 3,500 字。',
      '詞語理解與語文常識：理解常用文言文的詞義及語法、造字原則。',
      '文本統整與應用：理解各類文本內容、形式、寫作特色並轉化為解決問題能力。'
    ]
  },
  {
    id: 'english',
    name: '英語',
    icon: 'Languages',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    description: '評量基本核心概念，且語言使用重視整體自然情境。',
    tips: [
      '主題與體裁：符合趣味、實用、多元及生活化原則的文本。',
      '溝通功能：包含日常交談、社交應對、等一般人際溝通之語言能力。',
      '語言成分：務必熟悉基本 1,200 字詞與基礎文法結構。'
    ]
  },
  {
    id: 'math',
    name: '數學',
    icon: 'Calculator',
    color: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    description: '期待展現將數學運用到現實生活情境解決真實問題的素養。',
    tips: [
      '範圍包含：數與量、空間與形狀、坐標幾何、代數、函數及資料不確定性。',
      '非選擇題重視對概念的「擬定策略」適切性及「表達過程」的完整性。',
      '靈活應用能力：識別現實生活問題和數學的關聯，取代單純的解題技巧背誦。'
    ]
  },
  {
    id: 'social',
    name: '社會',
    icon: 'Globe',
    color: 'bg-green-50 text-green-600 border-green-200',
    description: '重視跨科整合與圖表資料轉譯，取材貼近生活時空與公共議題。',
    tips: [
      '歷史：著重基礎觀念、臺灣歷史、世界變革以及當代局勢的脈絡理解。',
      '地理：掌握臺灣及區域特色，能夠透過圖表分析並討論地理議題。',
      '公民：聚焦社會運作、制度及公民參與，結合生活經驗與時事觀念。'
    ]
  },
  {
    id: 'science',
    name: '自然',
    icon: 'FlaskConical',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    description: '重視資料的閱讀與理解、解決問題以及規劃執行探究活動的能力。',
    tips: [
      '評量重點包含科學認知、探究能力、科學的態度與本質。',
      '涵蓋自然界的組成與特性、現象規律及作用、永續發展。',
      '試題生活化，會適度融合環境、海洋、能源及防災等重大教育議題。'
    ]
  },
  {
    id: 'writing',
    name: '寫作測驗',
    icon: 'PenTool',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    description: '檢測表達經驗見聞和情感思想的綜合語文能力。',
    tips: [
      '能統整閱讀圖例、報章新聞等不同形式訊息轉化為表情達意的素材。',
      '組織文章：能適當安排段落組織成篇，並適當遣詞造句與運用標點。',
      '注重情感表達及說服力，藉由文字來呈現自身的反思與價值觀。'
    ]
  }
];

export const MOTIVATIONAL_QUOTES = [
  "現在決定未來，你的努力絕不會背叛你。",
  "再撐一下，理想的高中就在不遠處！",
  "會考只是人生的一個中繼站，只要盡最大努力，就沒有遺憾。",
  "與其焦慮煩惱，不如現在就靜下心拿起筆寫一題。",
  "把錯題搞懂，就是你進步最大的時候。",
  "相信自己，你比你想像的還要強大！"
];
