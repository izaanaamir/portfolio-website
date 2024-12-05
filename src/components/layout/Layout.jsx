import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../../contexts/ThemeContext';
import ParticlesBackground from '../shared/ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const { darkMode } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isNearContact = rect.top <= window.innerHeight * 0.5;
        setShowParticles(!isNearContact);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative ${
      darkMode ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      <AnimatePresence>
        {showParticles && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={darkMode ? 'opacity-30' : 'opacity-50'}
          >
            <ParticlesBackground />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-20">
        <Sidebar 
          open={isSidebarOpen} 
          setOpen={setIsSidebarOpen} 
          className={darkMode ? 'bg-zinc-800' : 'bg-white'}
        />
        <AnimatePresence mode="wait">
          {isMounted && (
            <motion.main
              initial={{ opacity: 0, marginLeft: "60px" }}
              animate={{
                opacity: 1,
                marginLeft: isSidebarOpen ? "240px" : "60px",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {children}
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;