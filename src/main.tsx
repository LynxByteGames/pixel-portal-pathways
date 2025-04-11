import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a concurrent mode root
const root = createRoot(document.getElementById("root")!);

// Use a lightweight wrapper to help avoid render blocking
const startApp = () => {
  root.render(<App />);
};

// If the page is already visible, render immediately
if (document.visibilityState === 'visible') {
  startApp();
} else {
  // Otherwise wait for visibility
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      startApp();
    }
  });
  
  // Fallback in case visibility API doesn't trigger
  window.addEventListener('load', startApp);
}
