import React from 'react';
import { motion } from 'motion/react';

export const IntroSection = () => {
  return (
    <section className="section-padding border-t border-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[720px_1fr] gap-12 md:gap-24">
          <div className="flex flex-col gap-[2.9rem]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`index-line ${i % 2 !== 0 ? 'index-line-muted' : ''}`} />
            ))}
          </div>
          
          <div className="flex flex-col justify-between py-2">
            <h2 className="hd-3 mb-20 text-balance">
              Acreditamos que a contabilidade deve ser o motor, não o freio do seu negócio.
            </h2>
            
            <div className="max-w-[360px] space-y-8">
              <p className="pm-m font-bold">
                Estamos construindo o futuro da gestão empresarial através de dados e estratégia.
              </p>
              <p className="pm-m text-black/60">
                Na Nexus Contabilidade, focamos em inovações que resolvem os problemas mais complexos da sua empresa. Experiência, agilidade e visão estratégica alimentam nossa capacidade de prosperar em ambientes complexos.
              </p>
              <p className="pm-m text-black/60">
                Fundada com o propósito de libertar o empreendedor, já transformamos a realidade de mais de 500 empresas, gerando milhões em economia tributária.
              </p>
              <p className="pm-m text-black/60 italic">
                "Parceiros para o Crescimento" é a base da nossa identidade: construímos relacionamentos duradouros com confiança e transparência total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
