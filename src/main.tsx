import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import logoPng from "@/assets/Logo/Minimalist 'KS' Logo.png";

const setFavicon = (href: string) => {
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = href;
};

// set favicon to the imported logo (Vite will resolve the asset)
setFavicon(logoPng);

createRoot(document.getElementById("root")!).render(<App />);
