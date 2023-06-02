import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './global.css'

const screenWidth = window.innerWidth || document.documentElement.clientWidth;
const screenHeight = window.innerHeight || document.documentElement.clientHeight;

document.documentElement.style.setProperty('--viewport-width', `${screenWidth}px`);
document.documentElement.style.setProperty('--viewport-height', `${screenHeight}px`);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
