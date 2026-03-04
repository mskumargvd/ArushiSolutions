import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-200 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img 
                src="/logo.png" 
                alt="Arushi Solutions Logo" 
                className="w-12 h-12 object-contain transition-transform group-hover:rotate-12"
              />
              <div className="flex flex-col">
                <span className="font-serif font-black text-2xl leading-none text-navy-900 tracking-tight">ARUSHI</span>
                <span className="text-[10px] text-gold-600 font-bold tracking-[0.3em] uppercase mt-1">Solutions</span>
              </div>
            </Link>
            <p className="text-navy-900/60 leading-relaxed max-w-md mb-10 text-lg">
              Crafting premium digital experiences through elite engineering and AI-driven innovation. We build the future of software with a classic emphasis on quality and performance.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-surface-200 flex items-center justify-center text-navy-900/40 hover:text-gold-600 hover:border-gold-600 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-20" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-navy-900 mb-8 text-xl">Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: 'Smart Websites', path: '/services' },
                { name: 'Custom Mobile Apps', path: '/services' },
                { name: 'Business Automation', path: '/services' },
                { name: 'Project Portfolio', path: '/portfolio' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-navy-900/60 hover:text-gold-600 transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-navy-900 mb-8 text-xl">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Our Process', path: '/process' },
                { name: 'Case Studies', path: '/portfolio' },
                { name: 'Legal Notice', path: '/legal' },
                { name: 'Contact us', path: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-navy-900/60 hover:text-gold-600 transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-surface-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-navy-900/40 text-sm font-medium">
            © {new Date().getFullYear()} Arushi Solutions. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link to="/privacy" className="text-navy-900/40 hover:text-gold-600 transition-all text-xs font-bold uppercase tracking-widest">Privacy</Link>
            <Link to="/terms" className="text-navy-900/40 hover:text-gold-600 transition-all text-xs font-bold uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
