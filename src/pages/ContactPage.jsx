import React, { useState } from 'react';
import { ArrowRight, Globe, Mail, Timer, MessageSquare, Send, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-surface-50 pt-32 pb-24 min-h-screen">
      <SEO 
        title="Consultation & Engagement | Arushi Solutions"
        description="Share your vision with Arushi Solutions. We provide elite engineering roadmaps and security-first delivery plans."
      />

      <div className="container mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Engagement"
              title="Partner with Elite Engineering."
              description="Whether you're building a new ecosystem or modernizing legacy infrastructure, our leads are ready to architect your success."
            />
            
            <div className="mt-16 grid gap-8">
              {[
                { label: 'Digital Mail', value: 'hello@arushisolutions.in', icon: Mail, desc: 'For project inquiries and RFP' },
                { label: 'Headquarters', value: 'Vizianagaram, AP, India', icon: Globe, desc: 'Registered engineering hub' },
              ].map((info, i) => (
                <motion.div 
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-surface-200 flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all duration-500">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-600 mb-1">{info.label}</p>
                    <p className="text-xl font-serif font-black text-navy-900 mb-1">{info.value}</p>
                    <p className="text-sm text-navy-900/40">{info.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 p-10 rounded-[2.5rem] bg-navy-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-3xl" />
                <Sparkles className="text-gold-400 mb-6" size={32} />
                <h4 className="font-serif text-2xl font-bold mb-4">Fast Response SLA</h4>
                <p className="text-white/60 leading-relaxed">
                    We value your time. Our engineering team reviews all technical inquiries within <span className="text-gold-400 font-bold">24 business hours</span> with a preliminary effort estimation.
                </p>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-surface-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] -z-10" />
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="h-24 w-24 rounded-full bg-gold-500/10 flex items-center justify-center mb-10 text-gold-600">
                  <Send size={40} />
                </div>
                <h3 className="font-serif text-4xl font-black text-navy-900 mb-6">Inquiry Received</h3>
                <p className="text-navy-900/60 text-lg max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. An Arushi Solutions engineering lead will contact you shortly to schedule a deep-dive session.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors uppercase tracking-[0.2em]">
                    Submit Another Request
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600 block mb-4">Project Intake Form</span>
                  <h3 className="font-serif text-4xl font-black text-navy-900">Request a Proposal</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="grid gap-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { label: 'Full Name', type: 'text', placeholder: 'Johnathan Quest' },
                      { label: 'Corporate Email', type: 'email', placeholder: 'jq@enterprise.com' },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="text-[10px] font-black text-navy-900/40 uppercase tracking-[0.2em] block mb-3 ml-1">{field.label}</label>
                        <input 
                          type={field.type}
                          required
                          className="w-full rounded-2xl bg-surface-50 border border-surface-200 px-6 py-4 text-navy-900 placeholder:text-navy-900/20 focus:bg-white focus:border-gold-500 focus:outline-none transition-all"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-navy-900/40 uppercase tracking-[0.2em] block mb-3 ml-1">Company / Organization</label>
                    <input 
                      type="text"
                      required
                      className="w-full rounded-2xl bg-surface-50 border border-surface-200 px-6 py-4 text-navy-900 placeholder:text-navy-900/20 focus:bg-white focus:border-gold-500 focus:outline-none transition-all"
                      placeholder="Tech Innovators Inc."
                    />
                  </div>
                  
                  <div>
                    <label className="text-[10px] font-black text-navy-900/40 uppercase tracking-[0.2em] block mb-3 ml-1">Project Brief</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full rounded-2xl bg-surface-50 border border-surface-200 px-6 py-4 text-navy-900 placeholder:text-navy-900/20 focus:bg-white focus:border-gold-500 focus:outline-none transition-all resize-none"
                      placeholder="Describe your roadmap, technical hurdles, or compliance requirements..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary w-full mt-4 group">
                    Send Inquiry <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
