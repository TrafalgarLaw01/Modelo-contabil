import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ValueLead = () => {
  return (
    <section id="diagnostico" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="hd-3 mb-12">
              Descubra quanto você está <span className="opacity-40 italic">deixando na mesa.</span>
            </h2>
            <p className="text-2xl opacity-60 mb-12 leading-relaxed">
              Nosso diagnóstico gratuito analisa sua estrutura tributária e financeira atual para identificar gargalos e oportunidades de economia imediata.
            </p>
            
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-px bg-white/10 w-full" />
              ))}
            </div>
          </div>

          <div className="bg-white text-black p-12 md:p-16">
            <h3 className="text-3xl font-bold mb-12">Solicitar Check-up</h3>
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-8">
                <input 
                  type="text" 
                  placeholder="Seu Nome"
                  className="w-full text-2xl py-4 border-b border-black/20 focus:border-black outline-none transition-colors placeholder:opacity-30"
                />
                <input 
                  type="email" 
                  placeholder="E-mail Corporativo"
                  className="w-full text-2xl py-4 border-b border-black/20 focus:border-black outline-none transition-colors placeholder:opacity-30"
                />
                <select className="w-full text-2xl py-4 border-b border-black/20 focus:border-black outline-none transition-colors bg-transparent appearance-none">
                  <option>Faturamento até R$ 50k</option>
                  <option>R$ 50k - R$ 200k</option>
                  <option>R$ 200k - R$ 1M</option>
                  <option>Acima de R$ 1M</option>
                </select>
              </div>

              <button className="w-full btn-rounded btn-black text-2xl py-8 group">
                Iniciar Check-up
                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
