import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import projects from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'Python', 'C++', 'Finance', 'Data Analysis'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.some(tag => 
        tag.toLowerCase().includes(activeFilter.toLowerCase())
      ));

  return (
    <section id="projects" className="container-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full flex justify-end space-x-2">
                  <a
                    href={project.github}
                    className="interactive p-2 bg-white/20 backdrop-blur-sm rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="interactive p-2 bg-white/20 backdrop-blur-sm rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-secondary dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 