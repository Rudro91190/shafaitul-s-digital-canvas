import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl font-bold italic"
          >
            Rudro.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-sm text-background/70 flex items-center gap-1"
          >
            © {new Date().getFullYear()} Shafaitul Kabir Rudro. Made with{' '}
            <Heart size={14} className="text-primary fill-primary" /> in Bangladesh
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <a href="#home" className="font-body text-sm text-background/70 hover:text-background transition-colors">
              Home
            </a>
            <a href="#about" className="font-body text-sm text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#projects" className="font-body text-sm text-background/70 hover:text-background transition-colors">
              Projects
            </a>
            <a href="#contact" className="font-body text-sm text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
