import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoDiamond } from "react-icons/io5";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
} from "react-icons/si";

const titles = [
  "I am Full Stack software Engineer",
  "I am Full Stack Developer",
  "I am full stack mobile app developer",
  "I am Frontend Specialist",
  "I am WordPress Developer",
  "I am Web Designer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Animation controls for left and right sections
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  // Detect when the left and right sections are in view
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Initialize canvas with particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 100;
    const colors = [
      "rgba(251, 191, 36, 0.5)",
      "rgba(245, 158, 11, 0.4)",
      "rgba(255, 215, 0, 0.3)",
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 100;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(251, 191, 36, ${
              1 - distance / maxDistance
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Trigger animations when elements are in view
  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    }
    if (inViewRight) {
      controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    }
  }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

  useEffect(() => {
    const currentTitle = titles[index];

    if (isDeleting) {
      // Deleting text
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      // Typing text
      if (charIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + currentTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        // Wait for a moment before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, index, isDeleting]);

  return (
    <section className="flex flex-col lg:h-[95vh] md:h-[50vh] sm:flex-row items-center py-16 justify-between px-10 lg:px-20 lg:py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: "transparent" }}
      />

      {/* Content with higher z-index */}
      <div className="relative z-10 w-full lg:h-[250px] h-[570px] flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section */}
        <motion.div
          ref={refLeft}
          initial={{ x: -100, opacity: 0 }}
          animate={controlsLeft}
          className="w-full my-8 md:w-1/2 text-left space-y-4 mb-6 md:mb-0"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">
            ✌️ Hello! I'm{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Engr Waqas Gul
            </span>
          </h1>

          <motion.h2
            className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text}
            <span className="animate-blink">|</span>
          </motion.h2>

          <p className="text-base sm:text-lg font-mono">
            With{" "}
            <span className="bg-gray-200 text-yellow-400 font-bold dark:bg-gray-800 px-2 py-1 rounded">
              3+ Years
            </span>{" "}
            of Experience
          </p>

          <div className="flex gap-4 mt-8 mb-4">
            <a
              href="/CV_waqasi.pdf"
              download="Waqas_Gul_Resume.pdf"
              className="flex items-center justify-center px-4 lg:px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:scale-105 shadow-md"
            >
              <FaDownload className="inline mr-2 animate-bounce font-mono transition-all duration-300 ease-in-out group-hover:translate-y-1" />
              Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=waqasgul369@gmail.com&su=Hire%20Waqas%20Gul&body=Hello%20Waqas,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-2 border border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-white hover:scale-105"
            >
              Hire Me
              <IoDiamond className="inline ml-2 animate-bounce font-mono transition-all duration-300 ease-in-out group-hover:translate-y-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image & Floating Icons */}
        <motion.div
          ref={refRight}
          initial={{ x: 0, opacity: 1 }}
          animate={controlsRight}
          className="w-full h-full md:w-1/2 flex flex-col items-center font-mono relative mt-4 lg:mt-10 md:mt-0"
        >
          <img
            src="/waqas.png"
            alt="Waqas Gul"
            className="w-40 h-40 sm:w-64 sm:h-64 bg-gray-200 dark:bg-gray-900 rounded-full border-2 cursor-pointer border-yellow-400 object-cover transition-transform duration-300 hover:scale-110 shadow-[0_0_70px_rgba(255,215,0,0.6)] mt-4 sm:mt-0 relative z-10"
          />

          {/* Floating Tech Icons */}
          <motion.div
            className="absolute top-0 lg:left-10 -left-3 sm:left-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiMongodb className="text-2xl text-green-500" /> MongoDB
          </motion.div>

          <motion.div
            className="absolute top-16 lg:left-0 -left-10 sm:left-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
          >
            <SiExpress className="text-2xl text-gray-500" /> Express.js
          </motion.div>

          <motion.div
            className="absolute bottom-16 lg:left-0 -left-5 sm:left-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
          >
            <SiReact className="text-2xl text-blue-500" /> ReactJS
          </motion.div>

          <motion.div
            className="absolute bottom-0 lg:left-10 -left-2 sm:left-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          >
            <SiNodedotjs className="text-2xl text-green-600" /> Node.js
          </motion.div>

          {/* Other Technologies */}
          <motion.div
            className="absolute top-0 lg:right-10 -right-5 sm:right-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <SiNextdotjs className="text-2xl" /> Next.js
          </motion.div>

          <motion.div
            className="absolute top-16 lg:right-0 -right-6 sm:right-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
          >
            <SiRedux className="text-2xl text-purple-500" /> Redux
          </motion.div>

          <motion.div
            className="absolute bottom-16 lg:right-0 -right-8 sm:right-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
          >
            <SiTailwindcss className="text-2xl text-blue-400" /> Tailwind CSS
          </motion.div>

          <motion.div
            className="absolute bottom-0 lg:right-10 -right-5 sm:right-0 shadow-gray-500 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-amber-500 hover:scale-105 ease-in-out z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          >
            <SiJavascript className="text-2xl text-yellow-400" /> JavaScript
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
