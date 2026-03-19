import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Code, Bot, Cog } from 'lucide-react';
import cansatImage from '@/assets/cansat-project.jpg';
import commutesyncImage from '@/assets/commutesync-project.jpg';
import soccerbotImage from '@/assets/soccerbot-project.jpg';

const projects = [
  {
    title: 'QR Code Generator',
    description: 'A software solution for generating QR codes with customizable parameters and export options.',
    category: 'Software',
    technologies: ['Python', 'GUI Development'],
    icon: Code,
  },
  {
    title: 'Routine Management System',
    description: 'Automated schedule management application for efficient time organization and planning.',
    category: 'Software',
    technologies: ['Java', 'Database', 'UI Design'],
    icon: Code,
  },
  {
    title: 'CommuteSync',
    description: 'Smart university bus management system for real-time tracking and schedule optimization.',
    category: 'Software',
    technologies: ['Web Development', 'GPS', 'Real-time Data'],
    icon: Code,
    image: commutesyncImage,
  },
  {
    title: 'CanSat (Nano Satellite)',
    description: 'Embedded robotics project simulating satellite functionality with sensor integration.',
    category: 'Robotics',
    technologies: ['Embedded Systems', 'Sensors', 'Arduino'],
    icon: Bot,
    image: cansatImage,
  },
  {
    title: 'SoccerBot',
    description: 'Autonomous robotic soccer system with computer vision and motor control.',
    category: 'Robotics',
    technologies: ['Computer Vision', 'Robotics', 'Control Systems'],
    icon: Bot,
  },
  {
    title: 'Line Follower Robot',
    description: 'IR sensor-based autonomous robot for path following with precision navigation.',
    category: 'Automation',
    technologies: ['IR Sensors', 'Microcontroller', 'PID Control'],
    icon: Cog,
  },
];

const categories = ['All', 'Software', 'Robotics', 'Automation'];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 hero-gradient">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A showcase of my work in software, robotics, and automation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-background border border-border hover:border-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group bg-background rounded-3xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-500"
            >
              <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <project.icon 
                    size={64} 
                    className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300" 
                  />
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {project.category}
                </span>
                
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
