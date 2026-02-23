import React from 'react';
import { ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-20">
      <div className="container-custom">
        <a href="#diagnostico" className="hd-1 flex items-center justify-between border-b border-white/20 pb-12 mb-20 group">
          <span>Agende seu Check-up</span>
          <ArrowRight size={80} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
        </a>

        <div className="grid lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-bold mb-8">Nexus Contabilidade Estratégica</h4>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Transformando a contabilidade em sua maior vantagem competitiva. Atendimento nacional com foco em resultados reais.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm opacity-40">Links</h4>
            <ul className="space-y-4">
              {['Soluções', 'Sobre Nós', 'Casos de Sucesso', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline underline-offset-4 transition-all">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm opacity-40">Local</h4>
            <p className="text-white/60 leading-relaxed">
              Av. Paulista, 1000 - 14º Andar<br />
              São Paulo - SP<br />
              (11) 4003-0000
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 opacity-40 text-sm">
          <p>© 2026 Nexus Contabilidade Estratégica.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
