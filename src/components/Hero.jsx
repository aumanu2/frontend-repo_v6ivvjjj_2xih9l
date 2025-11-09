import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-700 text-xs font-medium mb-4">
              <Sparkles size={14} /> Aspiring Psychology Student
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Exploring the mind with curiosity and compassion
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A clean and professional portfolio to highlight your academic journey, research interests, and dedication to understanding human behaviour.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#academic"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-700 font-medium hover:bg-slate-50"
              >
                View academics
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-transparent to-blue-300/40 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Brain size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Focus Area</p>
                  <p className="font-semibold text-slate-900">Cognitive & Clinical Psychology</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'Research', value: 'Projects' },
                  { label: 'Extracurricular', value: 'Leadership' },
                  { label: 'Skills', value: 'Methods' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
