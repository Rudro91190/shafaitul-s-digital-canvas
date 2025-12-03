import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const awards = [
  {
    title: "THE DUKE of EDINBURGH's International Award",
    level: "The Bronze Standard",
    icon: Trophy,
  },
];

export const HonorsAwards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="honors" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Honors & Awards</h2>
          <p className="section-subtitle">Recognition and achievements</p>
        </motion.div>

        <div className="flex justify-center">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 max-w-md w-full text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <award.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {award.title}
              </h3>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span className="font-medium">{award.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
