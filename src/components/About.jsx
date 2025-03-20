import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="container-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-20"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Hello, I'm Husain Bohra</h3>
          <p className="text-lg mb-6 text-secondary dark:text-gray-300">
            I'm a BTech student in Computer Science at Rajasthan Technical University, driven by a passion for finance, data analysis, and algorithmic trading.
          </p>
          <p className="mb-6 text-secondary dark:text-gray-300">
            I consistently expand my skill set through monthly courses—honing Python, C++, Power BI, and more—to build robust, data-driven solutions. My proactive approach and strong analytical mindset help me deliver innovative results and meet deadlines effectively.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Python', 'C++', 'Excel', 'Power BI', 'MySQL', 'Financial Analysis', 'Quantitative Analysis'].map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <a 
            href="#contact" 
            className="interactive inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 