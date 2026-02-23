import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO na LogiTech",
    quote: "A Nexus não é apenas um escritório de contabilidade, é o nosso braço direito estratégico. Reduzimos nossos impostos em 22% logo no primeiro semestre.",
    image: "https://picsum.photos/seed/ricardo/800/1000"
  },
  {
    name: "Carla Oliveira",
    role: "Fundadora da BioVitta",
    quote: "O BPO financeiro deles mudou minha vida. Hoje tenho clareza total do meu caixa e durmo tranquila sabendo que tudo está em ordem.",
    image: "https://picsum.photos/seed/carla/800/1000"
  },
  {
    name: "Marcos Souza",
    role: "Diretor na Construtora MS",
    quote: "Atendimento humano e tecnologia de ponta. O diagnóstico inicial deles foi um divisor de águas para a nossa expansão nacional.",
    image: "https://picsum.photos/seed/marcos/800/1000"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="casos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={testimonials[index].image}
                alt={testimonials[index].name}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-end min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <p className="hd-3 italic mb-12">
                  "{testimonials[index].quote}"
                </p>
                <div>
                  <p className="text-3xl font-bold">{testimonials[index].name}</p>
                  <p className="pm-m opacity-50">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4">
              <button onClick={prev} className="w-16 h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <ArrowLeft size={24} />
              </button>
              <button onClick={next} className="w-16 h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
