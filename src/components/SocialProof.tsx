import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { number: "2012", label: "Fundação" },
  { number: "12 Anos", label: "De Experiência" },
  { number: "500+", label: "Empresas Atendidas" },
  { number: "R$ 12M+", label: "Economia Tributária Gerada" },
  { number: "22", label: "Estados Atendidos" },
];

export const SocialProof = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 mb-32">
          {stats.map((stat, i) => (
            <li key={i} className="group">
              <div className="index-line mb-4 group-hover:scale-x-110 transition-transform origin-left duration-700" />
              <p className="hd-1 mb-4">{stat.number}</p>
              <p className="pm-m uppercase font-bold tracking-widest opacity-40">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          {['TechCorp', 'GreenEnergy', 'GlobalLogistics', 'FutureHealth', 'SmartRetail'].map((logo) => (
            <span key={logo} className="text-3xl font-display font-black tracking-tighter">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
