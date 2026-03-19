import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Camera, Bot, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Assistant Director',
    organization: 'BRAC University Computer Club',
    department: 'Event Management Department',
    description: 'Planning and executing technical and academic events, coordinating with team members and stakeholders.',
    icon: Calendar,
    type: 'leadership',
  },
  {
    title: 'Assistant Director',
    organization: 'BRAC University Research for Development Club',
    department: 'IT & Photography Department',
    description: 'Managing technical operations and digital content, overseeing IT infrastructure and visual media production.',
    icon: Camera,
    type: 'leadership',
  },
  {
    title: 'General Member',
    organization: 'BRAC University Robotics Club',
    department: 'Event Management',
    description: 'Contributing to robotics events organization and promoting technical education within the university.',
    icon: Bot,
    type: 'member',
  },
];

const volunteerWork = [
  '17th Convocation of BRAC University',
  'Bit Battle: Intra-University Programming Contest',
  'Extendiars: Research Exhibition and Symposiums. Showing Innovation for Sustainable Development',
  "Freshers Orientation Fall'25 of BRAC University",
  "University Club Fair: Fall'24, Spring'25, Summer'25, Fall'25",
  'International Biotechnology Conference 2025',
  'And many other club events volunteer',
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 hero-gradient">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Leadership roles and contributions in university organizations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group p-8 bg-background rounded-3xl shadow-soft border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <exp.icon size={28} className="text-primary group-hover:text-primary-foreground" />
              </div>
              
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                exp.type === 'leadership' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-secondary text-secondary-foreground'
              }`}>
                {exp.type === 'leadership' ? 'Leadership' : 'Member'}
              </span>

              <h3 className="font-display font-bold text-xl mb-2">{exp.title}</h3>
              <p className="font-body font-semibold text-foreground/80 mb-1">{exp.organization}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.department}</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-soft border border-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl">Volunteer Experience</h3>
              <p className="text-muted-foreground font-body">Contributing to university events and programs</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {volunteerWork.map((work, index) => (
              <div
                key={work}
                className="p-4 bg-secondary/50 rounded-xl text-center"
              >
                <p className="font-body font-medium text-foreground/80">{work}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
