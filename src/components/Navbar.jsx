import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-slate-900/70 backdrop-blur border-b border-slate-700/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Qanzak Global" className="h-9 w-9" />
            <span className="text-white font-semibold tracking-tight">Qanzak Global</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-blue-200/80 hover:text-white transition">Services</a>
            <a href="#products" className="text-blue-200/80 hover:text-white transition">Products</a>
            <a href="#contact" className="text-blue-200/80 hover:text-white transition">Contact</a>
          </nav>
          <button className="md:hidden text-blue-200" onClick={() => setOpen(!open)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-blue-200/90 hover:text-white transition">Services</a>
              <a href="#products" className="text-blue-200/90 hover:text-white transition">Products</a>
              <a href="#contact" className="text-blue-200/90 hover:text-white transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
