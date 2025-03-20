import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'portfolio-contact';
    const templateId = 'template_87cf2ri';
    const publicKey = 'FHdI15uaOBYv59XWv';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="container-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="mb-6 text-secondary dark:text-gray-300">
            I'm currently looking for new opportunities in quantitative analysis and financial technology. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <FiMail className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a href="mailto:bohrahussain036@gmail.com" className="text-secondary dark:text-gray-300 hover:text-primary transition-colors">
                bohrahussain036@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <FiMapPin className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-secondary dark:text-gray-300">Kota, Rajasthan, India</p>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <a 
              href="https://github.com/Husain-Bohra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/husain-bohra-9018a62bb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form ref={form} onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="interactive w-full bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center hover:bg-primary/90 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <FiSend className="mr-2" /> Send Message
                </span>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 text-center">Thank you! Your message has been sent.</p>
            )}
            
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 text-center">Oops! Something went wrong. Please try again later.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;