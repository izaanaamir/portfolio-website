import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const TechStack = () => {
  const { darkMode } = useTheme();
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      name: 'Python',
      icon: 'images/py.png',
      color: '#3776AB',
      description: 'High-level programming language for general-purpose programming'
    },
    {
      name: 'JavaScript',
      icon: 'images/javascript.png',
      color: '#F7DF1E',
      description: 'Dynamic programming language for web development'
    },
    {
      name: 'AWS',
      icon: 'images/aws.png',
      color: '#FF9900',
      description: 'Comprehensive cloud computing platform'
    },
    {
      name: 'Google Cloud',
      icon: 'images/gcp.png',
      color: '#4285F4',
      description: 'Suite of cloud computing services'
    },
    {
      name: 'Kubernetes',
      icon: 'images/kubernetes.png',
      color: '#326CE5',
      description: 'Container orchestration platform'
    },
    {
      name: 'Docker',
      icon: 'images/docker.png',
      color: '#2496ED',
      description: 'Platform for developing and deploying containerized applications'
    },
    {
      name: 'PostgreSQL',
      icon: 'images/postgres.png',
      color: '#336791',
      description: 'Advanced open-source relational database'
    },
    {
      name: 'MongoDB',
      icon: 'images/mongodb.png',
      color: '#47A248',
      description: 'NoSQL database for modern applications'
    },
    {
      name: 'Django',
      icon: 'images/django.png',
      color: '#092E20',
      description: 'High-level Python web framework'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 pt-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-400 via-transparent to-zinc-500" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold text-center mb-8 ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}
        >
          Tech Stack
        </motion.h2>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative"
            >
              <motion.div
                className={`p-4 rounded-xl backdrop-blur-sm 
                  ${darkMode ? 'bg-zinc-800/50' : 'bg-zinc-50/50'} 
                  shadow-lg flex flex-col items-center justify-center gap-2
                  cursor-pointer group
                  border border-transparent transition-colors`}
                animate={{
                  backgroundColor: hoveredTech === tech.name 
                    ? `${tech.color}15`  // Using tech-specific color with low opacity
                    : darkMode ? 'rgba(39, 39, 42, 0.3)' : 'rgba(250, 250, 250, 0.3)',
                  borderColor: hoveredTech === tech.name 
                    ? tech.color  // Using tech-specific color for border
                    : 'transparent'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: hoveredTech === tech.name
                        ? `0 0 15px ${tech.color}40`  // Using tech-specific color for glow
                        : '0 0 0px transparent'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Name */}
                <h3 className={`text-base font-semibold 
                  ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {tech.name}
                </h3>

                {/* Description - appears on hover */}
                <motion.p
                  className={`text-xs text-center
                    ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredTech === tech.name ? 1 : 0,
                    height: hoveredTech === tech.name ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;