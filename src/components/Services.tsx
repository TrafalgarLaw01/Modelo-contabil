import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Planejamento Tributário",
    desc: "O Planejamento Tributário Nexus é nossa estratégia principal, atuando como um radar para reduzir sua carga fiscal legalmente e recuperar créditos ocultos.",
    color: "#68469f"
  },
  {
    title: "BPO Financeiro",
    desc: "Nossa estratégia de BPO Financeiro é um acelerador interno focado em organizar seu contas a pagar e receber, liberando você para focar no core business.",
    color: "#2b6ecc"
  },
  {
    title: "Consultoria de Gestão",
    desc: "A Consultoria Nexus investe em empresas que buscam escala, transformando dados contábeis em decisões estratégicas de alto impacto.",
    color: "#eb4c29"
  },
  {
    title: "Contabilidade Digital",
    desc: "Nossa estratégia Digital conecta tecnologia e biologia empresarial, integrando sistemas para uma visão 360º do seu negócio em tempo real.",
    color: "#3b964a"
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="relative">
      {services.map((service, i) => (
        <div 
          key={i} 
          className="min-h-screen flex flex-col justify-center sticky top-0 border-t border-white/10"
          style={{ backgroundColor: service.color }}
        >
          <div className="container-custom py-20">
            <div className="max-w-5xl">
              <a href="#" className="group inline-block mb-12">
                <h3 className="hd-1 text-white flex flex-col leading-[0.9]">
                  <span className="opacity-60">Nexus</span>
                  <span className="group-hover:underline transition-all decoration-white/30 underline-offset-8">
                    {service.title.split(' ')[0]}
                  </span>
                  {service.title.split(' ').length > 1 && (
                    <span className="group-hover:underline transition-all decoration-white/30 underline-offset-8">
                      {service.title.split(' ').slice(1).join(' ')}
                    </span>
                  )}
                </h3>
              </a>
              <p className="text-white/80 text-2xl md:text-3xl max-w-2xl leading-relaxed mb-16">
                {service.desc}
              </p>
              <button className="btn-rounded border-white text-white hover:bg-white hover:text-black group">
                Explorar Estratégia
                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
