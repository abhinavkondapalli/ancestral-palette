// filepath: c:\GIT Projects\ancestral-palette\src\components\Logo.tsx
import React from "react";
import logo from "@/assets/Logo/KS_Logo.png";

const Logo = ({ className = "h-8 w-auto", alt = "KS Logo" }: { className?: string; alt?: string }) => (
  <img src={logo} alt={alt} className={className} />
);

export default Logo;