import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Smartphone, Globe, Shield, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const projects = [
  {
    title: 'Agnidhra Technologies',
    category: 'EdTech Platform',
    desc: 'A comprehensive educational platform featuring AI-enhanced curriculum delivery and student management systems. Built for scale with a focus on interactive learning.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    link: 'https://agnidhra-technologies.com'
  },
  {
    title: 'ZV Security',
    category: 'Cybersecurity Engineering',
    desc: 'Advanced cybersecurity solutions and training portal with integrated vulnerability assessment tools. Engineered for high-stakes security resilience.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    link: 'https://zvsecurity.in'
  },
  {
    title: 'Arushi Solutions',
    category: 'AI Engineering',
    desc: 'Our own flagship platform showcasing security-first delivery and AI-driven business transformation. A testament to modern technical craftsmanship.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    link: '/'
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-surface-50 pt-32 pb-24 min-h-screen">
      <SEO 
        title="Our Portfolio | Case Studies | Arushi Solutions"
        description="Explore how Arushi Solutions helps businesses scale with resilient engineering and secure cloud operations."
      />

      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="The Portfolio"
          title="Digital Landmarks."
          description="We build digital products that define industries. Explore our work across group companies and strategic partners."
        />

        <div className="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-surface-200 flex flex-col lg:flex-row hover:shadow-2xl transition-all duration-700 group"
            >
              <div className="lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20">
                        {project.category}
                    </span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-5xl font-black text-navy-900 mb-6">{project.title}</h3>
                <p className="text-navy-900/60 text-lg leading-relaxed mb-10 max-w-lg">
                  {project.desc}
                </p>
                
                <div className="flex items-center gap-8">
                  <a 
                    href={project.link} 
                    target={project.link === '/' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="btn-primary group/btn"
                  >
                    Explore Case Study
                    <ArrowRight className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
