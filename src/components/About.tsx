import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Code2, Cpu } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A curious mind driven by innovation and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 font-body leading-relaxed">
              I'm <span className="font-semibold text-foreground">Shafaitul Kabir Rudro</span>, 
              a passionate Computer Science and Engineering student with an insatiable 
              curiosity for technology. My journey in tech is defined by hands-on 
              experience in solving real-world problems through code and robotics.
            </p>
            <p className="text-lg text-foreground/80 font-body leading-relaxed">
              From building autonomous robots to developing smart software solutions, 
              I thrive on challenges that push the boundaries of innovation. My approach 
              combines technical expertise with creative problem-solving, always aiming 
              to create meaningful impact through technology.
            </p>
            <p className="text-lg text-foreground/80 font-body leading-relaxed">
              Beyond coding, I'm deeply involved in leadership roles within university 
              clubs, organizing tech events, and mentoring fellow students. I believe 
              in continuous learning and the power of community.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Code2 size={18} className="text-primary" />
                <span className="font-body text-sm font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Cpu size={18} className="text-primary" />
                <span className="font-body text-sm font-medium">Tech Enthusiast</span>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-2xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">
                      Bachelor in Computer Science & Engineering
                    </h4>
                    <p className="text-muted-foreground font-body">BRAC University</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Ongoing
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-2xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">
                      Higher Secondary School Certificate
                    </h4>
                    <p className="text-muted-foreground font-body">Dhaka Residential Model College</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
