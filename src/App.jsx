import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import heroBg from './assets/images/hero-bg.jpg';

function App() {
  // Check if device is touch-enabled to disable the custom cursor
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    if (isTouchDevice()) {
      document.body.classList.remove('cursor-none');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Custom cursor only for non-touch devices */}
      {typeof window !== 'undefined' && 
       !('ontouchstart' in window) && 
       navigator.maxTouchPoints <= 0 && 
       <CustomCursor />}
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent dark:from-primary/10"></div>
          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.span 
                className="block text-primary font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Husain Bohra
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-secondary dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Aspiring Quant Analyst specializing in data-driven financial solutions
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a 
                  href="#projects" 
                  className="interactive bg-primary text-white px-6 py-3 rounded-lg font-medium mr-4 transition-transform hover:scale-105"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="interactive border-2 border-primary text-primary dark:text-primary px-6 py-3 rounded-lg font-medium transition-colors hover:bg-primary/10"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary dark:text-gray-400">
            © {new Date().getFullYear()} Husain Bohra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 