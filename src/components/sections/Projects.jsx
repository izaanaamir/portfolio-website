import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const { darkMode } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Blaze Chat",
      description:
        "BlazeChat is a real-time messaging application that allows users to create accounts, start conversations, send messages, and receive real-time updates.",
      github: "https://github.com/izaanaamir/blaze-chat",
      tags: ["FastAPI", "Alembic", "SQLAlchemy"],
      image: "images/blazechat.png", // Add your actual image path
      color: "#E11D48",
    },
    {
      title: "Collab Doc",
      description:
        "This application allows users to collaboratively edit documents in real-time, providing features like user authentication, document sharing, and real-time notifications.",
      github: "https://github.com/izaanaamir/collabdoc",
      tags: ["Django", "WebSocket", "PostgreSQL"],
      image: "images/collabdoc.png", // Add your actual image path
      color: "#059669",
    },
    {
      title: "WePrep",
      description:
        "Welcome to our video analysis platform! This platform combines a Next.js frontend with a serverless backend built using AWS services such as Lambda, DynamoDB, S3, and more.",
      github: "https://github.com/izaanaamir/weprep",
      demo: "https://weprep.co", // Add your actual demo link
      tags: ["AWS Amplify", "Next.js", "LLM"],
      image: "images/weprep.png", // Add your actual image path
      color: "#7C3AED",
    },
    {
      title: "ExperliPROF",
      description:
        "An innovative web application that streamlines teachers' activities across multiple schools, facilitating efficient planning, management, and data extraction for teachers.",
      github: "https://github.com/izaanaamir/experliprof",
      tags: ["Django", "Angular", "MySQL"],
      image: "images/experliprof.png", // Add your actual image path
      color: "#0EA5E9",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="projects" className="py-16 px-4 relative">
      {/* Animated background pattern */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "opacity-5" : "opacity-[0.02]"
        }`}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center mb-12 
            ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="h-full"
            >
              <div
                className={`h-[28rem] rounded-xl backdrop-blur-sm
                ${darkMode ? "bg-zinc-800/30" : "bg-zinc-50/30"} 
                shadow-lg relative group flex flex-col`}
              >
                {/* Image Container */}
                <div className="h-52 relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  {/* Project Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-sm z-10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.github, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.demo, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3
                      className={`text-lg font-bold
                        ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}
                      animate={{
                        color: hoveredProject === project.title ? project.color : "inherit",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <p
                    className={`text-sm mb-6
                    ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium
                          ${
                            darkMode
                              ? "bg-zinc-700/50 text-zinc-300"
                              : "bg-zinc-200/50 text-zinc-700"
                          }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow:
                      hoveredProject === project.title
                        ? `0 0 0 2px ${project.color}33`
                        : "0 0 0 0px transparent",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;