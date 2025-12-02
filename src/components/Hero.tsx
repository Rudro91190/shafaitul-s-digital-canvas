import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.png';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="availability-badge w-fit"
            >
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              <span className="italic font-normal text-muted-foreground">Hey,</span>{' '}
              <span className="italic font-normal text-muted-foreground">there</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight uppercase">
                I'm RUDRO
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground font-body max-w-md"
            >
              CSE Student passionate about Software Development, Robotics, 
              Automation & Technical Innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-body font-semibold rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-card bg-primary/20">
                <img
                  src={profilePhoto}
                  alt="Shafaitul Kabir Rudro"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-1/4 bg-background px-4 py-2 rounded-full shadow-card"
              >
                <span className="font-display font-bold text-sm">SOFTWARE</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-4 bottom-1/4 bg-background px-4 py-2 rounded-full shadow-card"
              >
                <span className="font-display font-bold text-sm">ROBOTICS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Title at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 lg:mt-24 text-right"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight">
            SOFTWARE
          </h3>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight">
            DEVELOPER
          </h3>
        </motion.div>
      </div>
    </section>
  );
};
