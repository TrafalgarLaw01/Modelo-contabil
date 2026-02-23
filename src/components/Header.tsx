import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container-custom py-8 md:py-12 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-8">
          <button className="group flex flex-col gap-1.5 p-2 transition-all">
            <span className="w-8 h-[2px] bg-black transition-transform group-hover:translate-y-1" />
            <span className="w-8 h-[2px] bg-black" />
            <span className="w-8 h-[2px] bg-black transition-transform group-hover:-translate-y-1" />
          </button>
          
          <a href="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">
              Nexus<span className="opacity-40">Contabil</span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <Search size={18} />
          </button>
          <a
            href="#diagnostico"
            className="btn-rounded btn-black hidden md:flex"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </header>
  );
};
