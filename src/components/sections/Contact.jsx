import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, MessageSquare, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const { darkMode } = useTheme();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:izaanleon@gmail.com',
      text: 'izaanleon@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/izaanaamir',
      text: 'linkedin.com/in/izaanaamir'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/izaanaamir',
      text: 'github.com/izaanaamir'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/izaanaamir',
      text: 'instagram.com/izaanaamir'
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_r2jt7sf',
      'template_8smij9r',
      form.current,
      'jzxxPQCaNyEZmKh7F'
    )
      .then(() => {
        setSubmitStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg outline-none transition-all duration-300
    ${darkMode 
      ? 'bg-zinc-800/50 text-zinc-100 focus:bg-zinc-800' 
      : 'bg-zinc-50 text-zinc-900 focus:bg-white'} 
    border-2 ${darkMode ? 'border-zinc-700' : 'border-zinc-200'}
    focus:border-zinc-500`;

  const labelClasses = `flex items-center gap-2 text-sm font-medium mb-2
    ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-1/2 -left-1/2 w-96 h-96 rounded-full 
            ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'} blur-3xl opacity-30`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute -bottom-1/2 -right-1/2 w-96 h-96 rounded-full 
            ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'} blur-3xl opacity-30`}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text content */}
          <div className="space-y-6">
            <motion.h2 
              className={`text-4xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>
            
            <motion.p 
              className={`${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Have a question or want to work together? Feel free to reach out!
            </motion.p>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className={`flex items-center gap-3 group
                    ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-zinc-500/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-500 transition-colors"
                  >
                    {link.text}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`p-8 rounded-2xl shadow-lg 
              ${darkMode ? 'bg-zinc-800/50' : 'bg-zinc-50/50'} 
              backdrop-blur-sm border border-zinc-200/10`}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  <User className="w-4 h-4" />
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  <MessageSquare className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium text-zinc-50
                  flex items-center justify-center gap-2
                  ${isSubmitting ? 'bg-zinc-400' : 'bg-zinc-800 hover:bg-zinc-700'}
                  transition-colors duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-zinc-50 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;