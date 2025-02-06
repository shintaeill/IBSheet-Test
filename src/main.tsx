import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import loader from '@ibsheet/loader';

// 엔트리에서 한번만 정의함.
loader.config({
  registry: [
    {
      name: 'ibsheet',
      baseUrl: '/ibsheet', // ibsheet.js 파일 위치
      locales: ['ko'], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용)
      plugins: [
        // plugin 파일
        'common',
        'excel',
      ],
      license:
        'W2FtSztPKCJyazY1YjJxbn9PM1xwGWkvd3w4O2U3ZiY8MAQnTS0JYS4gXTwlZjF5AhpYJ3FCelklPmZlM2Qw',
    },
  ],
});
loader.load();

createRoot(document.getElementById('root')!).render(<App />);
