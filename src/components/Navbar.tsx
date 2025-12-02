import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="font-display text-2xl font-bold italic text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          Rudro.
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link font-body text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="default" size="lg" className="rounded-full font-body font-semibold">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="default" className="rounded-full font-body font-semibold mt-2">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
