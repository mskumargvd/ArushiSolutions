import React from 'react';
import { Cloud, Code2, Shield, Database, Layout, Server, GitMerge, Lock, Smartphone, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main className="bg-surface-50 pt-32 pb-24 min-h-screen">
      <SEO 
        title="Bespoke Engineering & AI Services | Arushi Solutions"
        description="Providing elite software engineering, AI-driven automation, and premium digital architecture for modern enterprises."
      />

      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Excellence in Execution"
          title="Digital Craftsmanship for the AI Era."
          description="We blend rigorous engineering standards with intelligent automation to build systems that are as beautiful as they are functional."
        />

        <div className="mt-24 grid gap-10 lg:grid-cols-3">
          {[
            {
              title: 'Smart Websites & Portals',
              desc: 'Websites that think. We build customer portals that answer questions automatically and dashboards that predict business trends to help you scale.',
              icon: Globe,
              color: 'bg-navy-900'
            },
            {
              title: 'Custom Apps for iPhone & Android',
              desc: 'High-performance apps designed for your customers. We make the user experience effortless while using smart tech to keep people coming back.',
              icon: Smartphone,
              color: 'bg-gold-600'
            },
            {
              title: 'Automated Business Assistants',
              desc: 'We build "Digital Assistants" that handle your repetitive tasks—like data entry or email sorting—so you can focus on high-level strategy.',
              icon: Sparkles,
              color: 'bg-navy-900'
            },
          ].map((service, i) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="classic-card group"
            >
              <div className={`h-16 w-16 rounded-2xl ${service.color} flex items-center justify-center text-white mb-10 transition-all duration-500 group-hover:rotate-6`}>
                <service.icon size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">{service.title}</h3>
              <p className="text-navy-900/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Mastery Section */}
        <div className="mt-40 bg-navy-900 rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="text-gold-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Our Methodology</span>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-white mb-10">Premium Tech Stack. <br />Professional Delivery.</h2>
            <p className="text-white/60 text-lg max-w-2xl mb-20">
              We favor stability and performance over hype. Our stack is curated for long-term maintainability and enterprise security.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                category: 'Architecture',
                icon: Cpu,
                items: ['Modular Codebase', 'API-First Design', 'Serverless Logic', 'Scalable Structure'],
              },
              {
                category: 'Frontend',
                icon: Layout,
                items: ['React / Next.js', 'Modern Typography', 'Framer Motion', 'Tailwind CSS'],
              },
              {
                category: 'Backend',
                icon: GitMerge,
                items: ['Node.js & TS', 'LLM Integration', 'Optimized Data', 'Python AI Tools'],
              },
              {
                category: 'Infrastructure',
                icon: Server,
                items: ['Global Delivery', 'Auto-Deployment', 'Secure Development', 'System Monitoring'],
              },
            ].map((stack, i) => (
              <motion.div 
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-10 w-10 rounded-xl bg-gold-600/20 flex items-center justify-center text-gold-400">
                    <stack.icon size={20} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">{stack.category}</h3>
                </div>
                <div className="space-y-4">
                  {stack.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
