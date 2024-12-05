import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";
import { Code, Briefcase, Users, Coffee, Github, Cloud } from "lucide-react";

const About = () => {
  const { darkMode } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      icon: Code,
      label: "Years Experience",
      value: "3+",
      color: "bg-zinc-800",
    },
    {
      icon: Cloud,
      label: "Cloud Services",
      value: "15+",
      color: "bg-zinc-700",
    },
    {
      icon: Github,
      label: "GitHub Projects",
      value: "20+",
      color: "bg-zinc-800",
    },
    { icon: Coffee, label: "Coffee Cups", value: "∞", color: "bg-zinc-700" },
  ];

  return (
    <div className="h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Animated background mesh */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, var(--tw-gradient-stops))",
            "radial-gradient(circle at 80% 80%, var(--tw-gradient-stops))",
            "radial-gradient(circle at 20% 20%, var(--tw-gradient-stops))",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <motion.div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full 
            ${darkMode ? "bg-zinc-600" : "bg-zinc-400"} blur-3xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full 
            ${darkMode ? "bg-zinc-700" : "bg-zinc-500"} blur-3xl`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </motion.div>

      {/* Main content container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 
          ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}
      >
        {/* Left side - Image/Visual */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Animated border frame */}
          <div className="absolute inset-0 p-2">
            <motion.div
              className={`w-full h-full border-2 rounded-xl 
                ${darkMode ? "border-zinc-700" : "border-zinc-200"}`}
              animate={{
                borderColor: hoveredCard
                  ? darkMode
                    ? "#52525b"
                    : "#71717a"
                  : darkMode
                  ? "#3f3f46"
                  : "#e4e4e7",
              }}
              transition={{ duration: 0.3 }}
            />
            {[
              { x: "-50%", y: "-50%" },
              { x: "50%", y: "-50%" },
              { x: "-50%", y: "50%" },
              { x: "50%", y: "50%" },
            ].map((position, index) => (
              <motion.div
                key={index}
                className={`absolute w-4 h-4 ${
                  darkMode ? "bg-zinc-600" : "bg-zinc-400"
                } rounded-full`}
                style={{
                  top: position.y === "-50%" ? 0 : "auto",
                  bottom: position.y === "50%" ? 0 : "auto",
                  left: position.x === "-50%" ? 0 : "auto",
                  right: position.x === "50%" ? 0 : "auto",
                  transform: `translate(${position.x}, ${position.y})`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>

          {/* Image container with parallax effect */}
          <motion.div
            className={`aspect-square rounded-xl overflow-hidden 
              ${darkMode ? "bg-zinc-800" : "bg-zinc-100"}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="images/aboutMePicture.jpeg"
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className={`space-y-4 text-lg ${
              darkMode ? "text-zinc-300" : "text-zinc-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hello! I'm a Backend Engineer specializing in cloud-native
              architectures and scalable systems. With expertise in AWS, Python,
              and microservices, I craft robust solutions that power modern
              applications. My journey began at Bilkent University and has
              evolved into building enterprise-grade distributed systems.
            </p>

            <p>
              Beyond development, I'm passionate about architecting serverless
              solutions and implementing machine learning models in production
              environments. When I'm
              not coding, you can find me exploring new technologies,
             and contributing to open-source
              projects.
            </p>
          </motion.div>

          {/* Stats grid with hover effects */}
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer relative
                    ${darkMode ? "bg-zinc-800/50" : "bg-zinc-100/50"}
                    transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  layout
                >
                  <motion.div
                    className="flex items-center space-x-3"
                    animate={{
                      color:
                        hoveredCard === index
                          ? darkMode
                            ? "#fafafa"
                            : "#18181b"
                          : darkMode
                          ? "#e4e4e7"
                          : "#27272a",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                    <div>
                      <motion.div
                        className="text-2xl font-bold"
                        animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  </motion.div>
                  <motion.div
                    className={`absolute inset-0 rounded-lg -z-10 ${stat.color}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
