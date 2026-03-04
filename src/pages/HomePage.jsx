import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Cloud, 
  Code2, 
  Shield, 
  Smartphone,
  Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const dynamicTexts = [
  "Premium Web Development",
  "Intelligent AI Solutions",
  "Elite Mobile Engineering",
  "Scalable Data Systems"
];

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(150);

  React.useEffect(() => {
    const handleType = () => {
      const fullText = texts[index % texts.length];
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(index + 1);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed]);

  return (
    <span className="text-gold-600 border-r-2 border-gold-500 pr-1 animate-pulse">
      {displayText}
    </span>
  );
};

export default function HomePage() {
  return (
    <main className="bg-surface-50">
      <SEO 
        title="Arushi Solutions | Premium IT Engineering & AI"
        description="Crafting elite digital experiences through secure, scalable, and AI-driven software engineering."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900/5 -skew-x-12 transform origin-top translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 font-bold text-[10px] uppercase tracking-widest mb-10">
                <Sparkles size={14} />
                The Gold Standard of Engineering
              </div>
              
              <h1 className="font-serif text-5xl md:text-8xl font-black text-navy-900 leading-[1.05] mb-8">
                We Build <br />
                <TypewriterText texts={dynamicTexts} />
              </h1>
              
              <p className="text-xl text-navy-900/60 leading-relaxed max-w-xl mb-12">
                At Arushi Solutions, we merge classic engineering principles with cutting-edge AI to deliver software that isn't just functional — it's foundational.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-primary shadow-2xl shadow-navy-900/20">
                  Start Consultation
                </Link>
                <Link to="/portfolio" className="btn-outline">
                  View Case Studies
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8 border-t border-surface-200 pt-10">
                {[
                  { label: 'Founded', value: '2020' },
                  { label: 'Projects', value: '50+' },
                  { label: 'Growth', value: '3x YoY' }
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-2xl font-serif font-black text-navy-900">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-navy-900/40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(12,26,45,0.25)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                  alt="Classic Tech Excellence"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            eyebrow="Our Expertise"
            title="Smarter Systems. Neater Code."
            description="We specialize in three core pillars of modern infrastructure, all driven by AI-accelerated delivery."
          />
          
          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Smart Websites & Portals',
                desc: 'Websites that think. We build customer portals that answer questions automatically and dashboards that predict business trends.',
                icon: Code2,
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
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="classic-card group"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} p-4 flex items-center justify-center text-white mb-10 transition-transform duration-500 group-hover:rotate-6`}>
                  <service.icon size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-5">{service.title}</h3>
                <p className="text-navy-900/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-surface-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            eyebrow="The Portfolio"
            title="Proven Excellence"
            description="Explore the digital landmarks we've established for our group companies."
          />
          
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Agnidhra Technologies',
                category: 'EdTech Platform',
                image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
                link: 'https://agnidhra-technologies.com'
              },
              {
                title: 'ZV Security',
                category: 'Cybersecurity Engineering',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
                link: 'https://zvsecurity.in'
              },
              {
                title: 'Arushi Solutions',
                category: 'AI Engineering',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
                link: '/'
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-3">{project.category}</p>
                  <h3 className="font-serif text-2xl font-bold text-white mb-6">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target={project.link === '/' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold text-white hover:text-gold-400 transition-colors"
                  >
                    Watch Case Study <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-black text-white mb-8">Ready to Write Your <span className="text-gold-500 italic">Success</span> Story?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Partner with a firm that understands the balance between innovative tech and enduring quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-gold">Schedule a Consultation</Link>
              <Link to="/services" className="px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
