import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto space-y-8"
        >
          <div className="text-center">
            <h3 className="font-display font-bold text-2xl mb-4">Contact Information</h3>
            <p className="text-muted-foreground font-body">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology!
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:shafaitulrudro1012@gmail.com"
              className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Mail className="text-primary group-hover:text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <p className="font-body font-medium">shafaitulrudro1012@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+8801740499466"
              className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Phone className="text-primary group-hover:text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Phone</p>
                <p className="font-body font-medium">+880 1740 499466</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Location</p>
                <p className="font-body font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="font-body font-medium mb-4">Connect with me</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
