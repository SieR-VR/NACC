import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { toTimeDomain } from '../src/fft';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App waves={(() => {
      return [
        toTimeDomain({ name: 'sine', data: [[50, 1]], samples: 44100 }),
        toTimeDomain({ name: 'sine', data: [[50, 1], [40, 0.5]], samples: 44100 })
      ]
    })()} />
  </React.StrictMode>,
)
