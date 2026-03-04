import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket, Zap, MessageSquare, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const steps = [
  {
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your goals and analyze your requirements to build a clear, high-impact roadmap for your product.',
    icon: Search,
    color: 'bg-navy-900',
  },
  {
    title: 'Technical Blueprint',
    desc: 'We design a modern architecture, selecting the optimal AI models and tools to ensure your product is built to last.',
    icon: Layers,
    color: 'bg-gold-600',
  },
  {
    title: 'Agile Development',
    desc: 'High-quality, fast-paced engineering. We use AI-augmented workflows to build features with clean code and high performance.',
    icon: Code2,
    color: 'bg-navy-900',
  },
  {
    title: 'Quality Assurance',
    desc: 'Every product undergoes thorough testing to ensure it is secure, fast, and works perfectly for your end users.',
    icon: ShieldCheck,
    color: 'bg-gold-600',
  },
  {
    title: 'Launch & Support',
    desc: 'A smooth transition to production. We stay by your side to ensure your product scales and improves as your business grows.',
    icon: Rocket,
    color: 'bg-navy-900',
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-surface-50 pt-32 pb-24 min-h-screen">
      <SEO 
        title="Our Delivery Methodology | Arushi Solutions"
        description="Discover the Arushi Solutions methodology — where classic engineering meets AI-driven delivery."
      />

      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="The Methodology"
          title="Engineered for Endurance."
          description="We follow a disciplined road-to-production that prioritizes resilience, security, and measurable impact."
        />

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-[2.75rem] top-0 bottom-0 w-px bg-surface-200 hidden md:block" />
            
            <div className="space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-8 md:gap-16 group"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-20 h-20 rounded-[1.5rem] ${step.color} p-5 flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <step.icon size={36} />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-surface-200 flex-1 hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-gold-600 font-serif font-black text-2xl">0{i + 1}</span>
                        <h3 className="font-serif text-3xl font-black text-navy-900">{step.title}</h3>
                    </div>
                    <p className="text-navy-900/60 text-lg leading-relaxed max-w-2xl">
                        {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="section-padding mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-navy-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-black text-white mb-8">Engineering for the <br /><span className="text-gold-400 italic">Next Generation</span></h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
              We don't just build code; we architect foundations. Our process is designed to ensure that the systems we build today are ready for the challenges of tomorrow.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gold-600 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
