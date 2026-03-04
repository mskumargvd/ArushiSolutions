import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Scale } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

export default function LegalPage({ type = 'legal' }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      eyebrow: 'Data Security',
      desc: 'How we handle and protect your digital footprint.',
      icon: Lock
    },
    terms: {
      title: 'Terms of Service',
      eyebrow: 'Engagement Rules',
      desc: 'The legal framework for Arushi Solutions services.',
      icon: Scale
    },
    legal: {
      title: 'Legal Notice',
      eyebrow: 'Compliance',
      desc: 'Standard legal disclosures and corporate information.',
      icon: Shield
    }
  }[type];

  return (
    <main className="bg-surface-50 pt-32 pb-24 min-h-screen">
      <SEO 
        title={`${content.title} | Arushi Solutions`}
        description={content.desc}
      />
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.desc}
          align="left"
        />

        <div className="mt-20 max-w-4xl bg-white rounded-[2.5rem] p-10 md:p-16 border border-surface-200 shadow-sm prose prose-navy">
          <content.icon className="text-gold-600 mb-8" size={48} />
          <h2 className="font-serif text-3xl font-black text-navy-900 mb-6">Commitment to Quality</h2>
          <p className="text-navy-900/60 leading-relaxed text-lg mb-8">
            At Arushi Solutions, we maintain the highest standards of legal and ethical compliance. Our engagement models are designed to protect both our intellectual property and the sensitive data of our group companies and clients.
          </p>
          
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">Core Principles</h3>
          <ul className="space-y-4 text-navy-900/60 leading-relaxed mb-12">
            <li><strong>Data Sovereignty:</strong> We ensure all processed information remains under strict security protocols.</li>
            <li><strong>Technical Integrity:</strong> All engineering work is performed within secure, audited environments.</li>
            <li><strong>Transparency:</strong> We provide clear communication regarding our methodology and delivery timelines.</li>
          </ul>

          <div className="p-8 rounded-2xl bg-navy-900 text-white">
            <p className="text-sm font-medium opacity-60 italic">
                Note: This is a placeholder for detailed legal text. For specific inquiries regarding our legal frameworks, please contact our engineering lead directly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
