import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Code, Bot, Cog, Camera, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Creating responsive, user-friendly websites with modern design principles and optimal performance.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Building robust desktop and web-based solutions tailored to specific business and academic needs.',
  },
  {
    icon: Bot,
    title: 'Robotics Solutions',
    description: 'Developing academic and research-based robotic systems with embedded programming expertise.',
  },
  {
    icon: Cog,
    title: 'Automation Projects',
    description: 'Designing efficiency-focused automation systems to streamline processes and workflows.',
  },
  {
    icon: Camera,
    title: 'Technical Media',
    description: 'Professional event, product, and technical photography with digital content management.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Professional services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative p-8 bg-card rounded-3xl border border-border hover:border-primary/50 hover:shadow-card transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-primary" size={24} />
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <service.icon 
                  size={32} 
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                />
              </div>
              
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
