import Sidebar from "./Sidebar";
import {
  FcCalendar,
  FcBusinessman,
  FcHome,
  FcGraduationCap,
} from "react-icons/fc";
import { FaDownload } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { CiCalendar } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TbChevronDown } from "react-icons/tb";
import { Link } from "react-router-dom";

const About = () => {
  const infoCards = [
    {
      icon: <FcCalendar className="text-2xl" />,
      label: "Birthday",
      value: "26 Feb 2004",
      circleBg: "bg-gradient-to-br from-blue-100 to-blue-50",
    },
    {
      icon: <FcBusinessman className="text-2xl" />,
      label: "Age",
      value: "21",
      circleBg: "bg-gradient-to-br from-purple-100 to-purple-50",
    },
    {
      icon: <FcHome className="text-2xl" />,
      label: "Location",
      value: "New Delhi",
      circleBg: "bg-gradient-to-br from-green-100 to-green-50",
    },
    {
      icon: <FcGraduationCap className="text-2xl" />,
      label: "Degree",
      value: "Computer Science",
      circleBg: "bg-gradient-to-br from-amber-100 to-amber-50",
    },
  ];

  const education = [
    {
      date: "2023-2027",
      title: "B.Voc Software Development",
      description:
        "Pursuing Bachelor of Vocation in Software Development from Ramanujan College, University of Delhi. Gained hands-on experience in software engineering principles, full-stack development, and real-world projects. Maintained a strong academic record with a current CGPA of 8.59 in the 1st Year.",
    },
    {
      date: "2020-2022",
      title: "Higher Secondary School",
      description:
        "Completed 12th with Physics, Chemistry, Mathematics and Computer Science under the CBSE Board in 2022. Built a strong foundation in logical reasoning and problem-solving which laid the groundwork for software development and programming.",
    },
  ];

  const experience = [
    {
      date: "04/2025 – Present",
      title: "Full Stack Developer",
      company: "HRMS/ERP Systems",
      description:
        "Working as a Full Stack Developer on MERN-based HRMS, ERP, and educational systems. Developed scalable modules for employee management, attendance, payroll, and dashboards. Implemented secure authentication, role-based access, RESTful APIs, and responsive UIs while collaborating with clients on real-world deployments.",
      tech: ["MERN", "REST APIs", "MongoDB", "React", "Node.js"],
    },
    {
      date: "10/2024 - 03/2025",
      title: "Full Stack Developer",
      company: "Ramanujan College",
      description:
        "Built a Laravel-based educational platform at Ramanujan College (Kalkaji, Delhi). Used Laravel, MySQL, Bootstrap, jQuery, and Ajax to develop features like user login, study materials, previous year questions (PYQs), and online test systems.",
      tech: ["Laravel", "MySQL", "Bootstrap", "jQuery", "Ajax"],
    },
    {
      date: "11/2023 – 12/2023",
      title: "React Developer",
      company: "Lok Utthan Pahal Foundation",
      description:
        "Worked with Lok Utthan Pahal Foundation on an NGO project. Developed a React-based website (SAMIP) to offer secure UI and smooth navigation for home services.",
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
    },
    {
      date: "Jan 2024 – September 2024",
      title: "Junior Software Engineer",
      company: "APC – Ramanujan College",
      description:
        "Contributed to college ERP modules at APC – Ramanujan College, Delhi. Built and optimized web features like Attendance and Timetable using Laravel, Bootstrap, and MySQL, focusing on user-friendly and scalable academic solutions.",
      tech: ["Laravel", "Bootstrap", "MySQL", "PHP"],
    },
  ];

  const skills = [
    {
      skill: "Web Development",
      percent: 80,
      color: "from-blue-500 to-cyan-500",
    },
    {
      skill: "Data Structures & Algorithms",
      percent: 80,
      color: "from-purple-500 to-pink-500",
    },
    {
      skill: "Machine Learning",
      percent: 60,
      color: "from-orange-500 to-red-500",
    },
    {
      skill: "React & Frontend",
      percent: 96,
      color: "from-green-500 to-emerald-500",
    },
    {
      skill: "Blockchain Development",
      percent: 75,
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const [textLoaded, setTextLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1030);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const isMainInView = useInView(mainRef, { once: true });
  const isEducationInView = useInView(educationRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1030);
      if (window.innerWidth >= 1030) {
        setSidebarOpen(false);
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl" />
      </div>

      {/* Floating Navigation Dots */}
      {!isMobile && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
          {["about", "education", "experience"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-blue-400"
              }`}
              aria-label={`Scroll to ${section}`}
            />
          ))}
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-x-hidden">
        {/* Mobile Navbar */}
        {isMobile && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-6 shadow-lg"
          >
            <div className="relative">
              <motion.div
                className="text-blue-600 font-bold text-2xl tracking-tight"
                whileHover={{ scale: 1.05 }}
              >
                Krishna
              </motion.div>
            </div>
            <motion.button
              onClick={toggleSidebar}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {sidebarOpen ? (
                <FaTimes className="text-gray-700 text-xl" />
              ) : (
                <FaBars className="text-gray-700 text-xl" />
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobile && sidebarOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-white/95 backdrop-blur-xl z-40 shadow-2xl"
            >
              <Sidebar
                hideName={true}
                onItemClick={() => setSidebarOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        {!isMobile && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-72 z-30 fixed h-screen shadow-2xl"
          >
            <Sidebar />
          </motion.div>
        )}

        {/* Main Content */}
        <div className={`flex-1 ${!isMobile ? "ml-72" : ""} overflow-y-auto`}>
          <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              ref={headerRef}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
              variants={containerVariants}
              id="about"
              className="py-12 text-center"
            >
              <motion.div
                variants={itemVariants}
                className="relative inline-block"
              >
                <div className="absolute -inset-4 blur-xl rounded-full" />
                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 relative">
                  About <span className="text-blue-600 bg-clip-text ">Me</span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto"
              >
                Crafting digital experiences through code and creativity
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-center"
              >
                <TbChevronDown className="text-blue-600 text-2xl animate-bounce" />
              </motion.div>
            </motion.div>

            {/* Main Info Section */}
            <motion.div
              ref={mainRef}
              initial="hidden"
              animate={isMainInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-8 md:gap-12"
            >
              {/* Left Column */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight"
                  >
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Krishna
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-700 mt-4 text-lg leading-relaxed"
                  >
                    Passionate{" "}
                    <span className="font-semibold text-blue-600">
                      Software Engineer
                    </span>{" "}
                    specializing in building elegant, high-performance
                    applications that solve real-world problems with clean,
                    maintainable code.
                  </motion.p>

                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                  >
                    {infoCards.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                        className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div
                          className={`${item.circleBg} rounded-full w-10 h-10 flex items-center justify-center shadow-inner`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h6 className="text-gray-500 text-sm font-medium">
                            {item.label}
                          </h6>
                          <p className="font-bold text-gray-900 text-lg">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                  >
                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-blue-600 text-white px-5 rounded-full font-semibold flex items-center justify-between gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <FaDownload className="group-hover:animate-bounce" />
                      Download CV
                    </motion.button>
                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-white text-gray-900 py-3 px-8 rounded-full font-semibold flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
                    >
                      <MdMail className="text-blue-600 group-hover:scale-110 transition-transform" />
                      Hire Me
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Skills */}
              <motion.div variants={fadeInUp}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    Technical <span className="text-blue-600">Expertise</span>
                  </h2>

                  <div className="space-y-6">
                    {skills.map(({ skill, percent, color }, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-800 font-medium">
                            {skill}
                          </span>
                          <span className="text-gray-600 font-semibold">
                            {percent}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percent}%` }}
                              transition={{
                                duration: 1.5,
                                delay: idx * 0.2,
                                ease: "easeOut",
                              }}
                              className={`h-full bg-gradient-to-r ${color} rounded-full shadow-inner`}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 pt-8 border-t border-gray-200"
                  >
                    <p className="text-gray-600 text-sm">
                      Continuously learning and adapting to new technologies and
                      methodologies.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              ref={educationRef}
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
              variants={containerVariants}
              id="education"
              className="mt-20 md:mt-24"
            >
              <motion.div
                variants={slideInLeft}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <BookOpenIcon className="h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Education
                  </h2>
                  <p className="text-gray-600">My academic journey</p>
                </div>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                <div className="space-y-8 ml-12">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-white border-4 border-blue-500 shadow-lg z-10" />

                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <CiCalendar className="text-blue-600 text-xl" />
                          <span className="text-blue-600 font-semibold">
                            {edu.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {edu.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              ref={experienceRef}
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              variants={containerVariants}
              id="experience"
              className="mt-20 md:mt-24"
            >
              <motion.div
                variants={slideInRight}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <GoBriefcase className="h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Experience
                  </h2>
                  <p className="text-gray-600">Professional journey</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 h-full shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CiCalendar className="text-blue-600" />
                            <span className="text-blue-600 font-medium">
                              {exp.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <GoBriefcase className="h-6 text-blue-600" />
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 md:mt-24 mb-12"
            >
              <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl p-8 md:p-12 text-center border border-gray-200/50">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Let's build something amazing together
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Interested in collaborating on your next project? I'd love to
                  hear about it.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold inline-flex items-center gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MdMail className="text-xl" />
                  <Link to="/contact">Start a conversation</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
