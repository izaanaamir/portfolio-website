import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../shared/utils';

const menuItems = [
  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" />, href: '#home' },
  { id: 'about', label: 'About', icon: <User className="w-5 h-5" />, href: '#about' },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Code className="w-5 h-5" />, href: '#tech-stack' },
  { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" />, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" />, href: '#contact' }
];

const Sidebar = ({ open, setOpen }) => {
  const { darkMode } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: open ? '240px' : '60px'
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        onHoverStart={() => setOpen(true)}
        onHoverEnd={() => setOpen(false)}
        className={cn(
          'fixed left-0 top-0 h-full hidden md:flex flex-col',
          'justify-between py-8 shadow-lg z-50',
          darkMode ? 'bg-gray-950' : 'bg-gray-50'
        )}
      >
        {/* Logo or Branding */}
        {/* <div className="px-3 py-2">
          <motion.div
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'text-xl font-semibold',
              darkMode ? 'text-gray-200' : 'text-gray-800'
            )}
          >
            {open && 'Portfolio'}
          </motion.div>
        </div> */}

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 mt-8">
          <div className="space-y-6">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'flex items-center w-full px-3 py-2 rounded-lg transition-colors',
                  'hover:bg-gray-800/10 dark:hover:bg-gray-800',
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                )}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <motion.span
                  initial={false}
                  animate={{
                    opacity: open ? 1 : 0,
                    width: open ? 'auto' : 0,
                    marginLeft: open ? '12px' : 0,
                    display: open ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-sm whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className="px-3">
          <ThemeToggle />
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(true)}
          className={cn(
            'fixed top-4 left-4 z-50 p-2 rounded-lg',
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
          )}
        >
          <Menu className="w-6 h-6" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={cn(
                'fixed inset-0 z-50',
                darkMode ? 'bg-gray-900' : 'bg-white'
              )}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className={cn(
                      'p-2 rounded-lg',
                      darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'
                    )}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 mt-8">
                  <div className="space-y-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setOpen(false);
                        }}
                        className={cn(
                          'flex items-center w-full px-4 py-3 rounded-lg transition-colors',
                          'hover:bg-gray-800/10 dark:hover:bg-gray-800',
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        )}
                      >
                        <span className="flex items-center justify-center">
                          {item.icon}
                        </span>
                        <span className="ml-4 text-base">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </nav>

                <div className="pt-6 pb-2 flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Sidebar;