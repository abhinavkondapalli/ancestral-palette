import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import logoPng from "@/assets/Logo/KS_Logo.png";

const setFavicon = (href: string) => {
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = href;
};

// Set favicon to the imported logo (Vite will resolve the asset)
try {
  setFavicon(logoPng);
} catch (error) {
  console.error('Failed to set favicon:', error);
  // Fallback to default favicon
  setFavicon('/favicon.png');
}

createRoot(document.getElementById("root")!).render(<App />);
