import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { toTimeDomain } from '../src/fft';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App waves={[
    toTimeDomain({ name: 'sin(10x)', data: [[30, 0.2]], samples: 4096 }),
    toTimeDomain({ name: 'sin(50x) + sin(40x)', data: [[50, 0.1], [40, 0.2]], samples: 4096 })
  ]} />,
)
