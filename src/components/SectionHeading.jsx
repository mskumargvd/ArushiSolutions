import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }) {
  return (
    <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6 ${
            dark 
              ? 'bg-gold-500/10 border border-gold-500/20 text-gold-400' 
              : 'bg-navy-900/5 border border-navy-900/10 text-gold-600'
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-serif text-3xl md:text-6xl font-black mb-8 leading-tight ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
            dark ? 'text-white/60' : 'text-navy-900/60'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
