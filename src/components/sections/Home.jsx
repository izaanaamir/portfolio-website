import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Github, Linkedin } from "lucide-react";

const Home = () => {
  const { darkMode } = useTheme();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // Reduced from 150 to 100 for faster typing

  const headings = [
    "Backend Engineer",
    "AWS Cloud Architect",
    "API Integration Specialist",
    "ML/AI Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % headings.length;
      const fullText = headings[currentIndex];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(1000);
          return;
        }
      } else {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      }

      setTypingSpeed(50);
    };

    const ticker = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, headings]);

  const handleResumeClick = () => {
    window.open("docs/resume.pdf", "_blank");
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute top-8 left-8">
        <img
          src="images/logo.webp"
          alt="Logo"
          className={`h-40 w-auto transition-all ${
            darkMode ? "invert brightness-200" : ""
          }`}
        />
      </div>
      {/* Top right buttons container */}
      <div className="absolute top-8 right-8 flex items-center space-x-4">
        <button
          onClick={handleResumeClick}
          className={`px-6 py-2 rounded-full font-medium transition-colors
                        ${
                          darkMode
                            ? "bg-zinc-700 hover:bg-zinc-600 text-zinc-100"
                            : "bg-zinc-800 hover:bg-zinc-700 text-zinc-50"
                        }`}
        >
          Resume
        </button>

        <button
          onClick={() =>
            handleSocialClick("https://www.linkedin.com/in/izaanaamir")
          }
          className={`p-2 rounded-full transition-colors
                        ${
                          darkMode
                            ? "text-zinc-400 hover:text-zinc-200"
                            : "text-zinc-600 hover:text-zinc-800"
                        }`}
        >
          <Linkedin size={24} />
        </button>

        <button
          onClick={() => handleSocialClick("https://github.com/izaanaamir")}
          className={`p-2 rounded-full transition-colors
                        ${
                          darkMode
                            ? "text-zinc-400 hover:text-zinc-200"
                            : "text-zinc-600 hover:text-zinc-800"
                        }`}
        >
          <Github size={24} />
        </button>
      </div>

      {/* Main content */}
      <div className="h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto relative">
          <div className="mb-24">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
    ${darkMode ? "text-zinc-100" : "text-zinc-900"}
    font-["Inter var",ui-sans-serif,system-ui,-apple-system,"system-ui","Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"]`}
            >
              {text}
              <span className="w-0.5 h-8 md:h-10 lg:h-12 ml-1 inline-block bg-current animate-blink"></span>
            </h1>
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            {/* Background circle */}
            {/* <div className={`absolute inset-0 rounded-full ${
                            darkMode ? 'bg-zinc-800' : 'bg-zinc-100'
                        }`}></div> */}

            {/* Image */}
            <img
              src="images/avatar.png"
              alt="Developer Avatar"
              className="rounded-full w-full h-full object-cover relative z-10"
            />

            {/* Glow effect */}
            {/* <div className={`absolute -z-10 top-4 left-4 w-full h-full rounded-full 
                            ${darkMode ? 'bg-zinc-600' : 'bg-zinc-300'} opacity-20`}>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
