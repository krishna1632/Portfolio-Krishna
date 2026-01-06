import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoaded, setImageLoaded] = useState({});
  const [textLoaded, setTextLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1030);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const projectsContainerRef = useRef(null);

  const itemsPerPage = 4;
  const skeletonItems = Array(4).fill(0);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "open-source", label: "Open Source" },
  ];

  const projects = [
    {
      id: 1,
      name: "Study Material App",
      description:
        "A laravel based study material application for providing study materials, pyq's, roadmaps and also provinding test/quiz modules.",
      githubLink: "https://github.com/krishna1632/study_material_app.git",
      liveLink: null,
      techStack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      featured: false,
      year: "2025",
      imageUrl: "/images/study.png",
    },
    {
      id: 2,
      name: "sngh.in - Agritech Farming Management System",
      description:
        "MERN-based Agritech platform for farm management, crop monitoring, and analytics dashboards.",
      githubLink: "https://github.com/eduassists/shree_narayan_website.git",
      liveLink: "https://sngh.in",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      featured: true,
      year: "2025-26",
      imageUrl: "/images/sngh.png",
    },
    {
      id: 3,
      name: "MyEduAssist Parent-Student Portal",
      description:
        "React, Node.js and PostgreSQL based ERP system for educational institutions, managing students data and parents",
      githubLink: "https://github.com/eduassists/parent_student_portal.git",
      liveLink: "https://student.myeduassist.xyz/",
      techStack: ["PostgreSQL", "Express.js", "React", "Node.js"],
      featured: true,
      year: "2026",
      imageUrl: "/images/edu.png",
    },
    {
      id: 4,
      name: "Ramanujan College ERP",
      description:
        "Laravel-based ERP system for managing college operations, attendance, timetable, and student data.",
      githubLink: "https://github.com/vaibhav-manacle/college_dev.git",
      liveLink: "https://erp.ramanujancollege.ac.in",
      techStack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      featured: false,
      year: "2024",
      imageUrl: "/images/erp.png",
    },
    {
      id: 5,
      name: "PortfolioWala",
      description:
        "An AI based automatic portfolio maker and resume maker by only prompts. Also auto deployment is included. Note* : Only frontend is made till now, Backend Development in progress",
      githubLink: "https://github.com/krishna1632/PortfolioWala.git",
      liveLink: null,
      techStack: ["Angular", "Tailwind CSS"],
      featured: false,
      year: "2025",
      imageUrl: "/images/pw.png",
    },
    {
      id: 6,
      name: "Real-Time Cloud IDE",
      description:
        "A cloud-based real-time collaborative IDE built with MEAN stack. Supports live coding, collaboration, and cloud execution.",
      githubLink:
        "https://github.com/pra8953/-Real-Time_Collaborative_CloUd_IDE.git",
      liveLink: null,
      techStack: ["MongoDB", "Express.js", "Angular", "Node.js", "WebSockets"],
      featured: true,
      year: "2025",
      imageUrl: "/images/real.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1030);
      if (window.innerWidth >= 1030) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getFilteredProjects = () => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) =>
      activeFilter === "open-source"
        ? project.githubLink.includes("github.com")
        : project.techStack.some((tech) =>
            activeFilter === "web"
              ? ["Angular", "React", "Vue", "Next.js"].includes(tech)
              : ["React Native", "Flutter", "Swift"].includes(tech)
          )
    );
  };

  const getVisibleProjects = () => {
    const filtered = getFilteredProjects();
    const endIndex = currentPage * itemsPerPage;
    return filtered.slice(0, endIndex);
  };

  const hasMoreProjects = () => {
    return getVisibleProjects().length < getFilteredProjects().length;
  };

  const handleFilterClick = (filterId) => {
    setIsLoading(true);
    setActiveFilter(filterId);
    setCurrentPage(1);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleImageLoad = (projectId) => {
    setImageLoaded((prev) => ({
      ...prev,
      [projectId]: true,
    }));
  };

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Trigger text animation
    const textTimer = setTimeout(() => {
      setTextLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    // Setup intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target.querySelector(".lazy-image");
            if (lazyImage && lazyImage.dataset.src) {
              lazyImage.src = lazyImage.dataset.src;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsContainerRef.current) {
      const projectCards =
        projectsContainerRef.current.querySelectorAll(".project-card");
      projectCards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [isLoading, currentPage, activeFilter]);

  return (
    <>
      <div className="flex h-screen bg-[#f6f6f6] relative">
        {/* Mobile Navbar */}
        {isMobile && (
          <div className="fixed top-0 left-0 right-0 h-16 bg-white z-50 flex items-center justify-between px-4">
            <div className="w-44 h-16 flex justify-center items-center relative group">
              <div className="absolute left-4 top-3 h-full w-1/2 flex justify-start items-center">
                <div className="relative w-full h-full">
                  <div className="absolute left-0 top-0 h-7 w-0.5 bg-blue-600 origin-bottom-left transition-transform duration-300 group-hover:rotate-12"></div>
                  <div className="absolute left-0 top-7 w-5 h-0.5 bg-blue-600 origin-left transition-transform duration-300 group-hover:rotate-12"></div>
                </div>
              </div>

              <div className="absolute right-7 bottom-2 h-full w-1/2 flex justify-end items-center">
                <div className="relative w-full h-full">
                  <div className="absolute right-0 top-6 w-5 h-0.5 bg-blue-600 origin-right transition-transform duration-300 group-hover:rotate-12"></div>
                  <div className="absolute right-0 top-6 h-7 w-0.5 bg-blue-600 origin-top-right transition-transform duration-300 group-hover:rotate-12"></div>
                </div>
              </div>

              <span className="text-blue-600 font-semibold text-3xl z-10">
                Krishna
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {sidebarOpen ? (
                <FaTimes className="text-gray-700 text-xl" />
              ) : (
                <FaBars className="text-gray-700 text-xl" />
              )}
            </button>
          </div>
        )}

        {/* Mobile Sidebar */}
        {isMobile && (
          <div
            className={`fixed top-16 left-0 right-0 bg-white z-40 overflow-hidden transition-all duration-600 ease-in-out ${
              sidebarOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <Sidebar hideName={true} />
          </div>
        )}

        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className="w-72 z-50 fixed h-screen shadow-2xl">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`flex-1 ${
            !isMobile ? "ml-72" : ""
          } overflow-y-auto project-content ${isMobile ? "pt-16" : ""}`}
        >
          <div className="py-6 px-6">
            {/* Premium Header Section */}
            <div className="py-10 text-center project-header">
              <h1
                className={`font-bold text-5xl text-gray-900 transition-all duration-1000 ease-out transform ${
                  textLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } project-title`}
              >
                My <span className="text-blue-600">Projects</span>
              </h1>
              <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg project-subtitle">
                Crafting digital experiences that merge innovation with purpose
              </p>
            </div>

            {/* Advanced Filter Buttons */}
            <div className="flex justify-center mb-16 project-filters-container">
              <div className="inline-flex bg-gray-100 rounded-full p-1 project-filters">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all project-filter-btn ${
                      activeFilter === filter.id
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-gray-600"
                    }`}
                    onClick={() => handleFilterClick(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading Skeleton */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 project-skeleton-grid">
                {skeletonItems.map((_, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-2xl overflow-hidden animate-pulse project-skeleton-card"
                  >
                    <div className="h-48 bg-gray-200 project-skeleton-image"></div>
                    <div className="p-6 space-y-4 project-skeleton-content">
                      <div className="h-6 bg-gray-200 rounded w-3/4 project-skeleton-title"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-1/4 project-skeleton-year"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4 project-skeleton-year"></div>
                      </div>
                      <div className="h-16 bg-gray-200 rounded project-skeleton-description"></div>
                      <div className="flex flex-wrap gap-2 project-skeleton-tech">
                        {Array(3)
                          .fill(0)
                          .map((_, techIndex) => (
                            <div
                              key={techIndex}
                              className="h-6 bg-gray-200 rounded-full w-16"
                            ></div>
                          ))}
                      </div>
                      <div className="flex gap-3 pt-4 project-skeleton-buttons">
                        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
                        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Projects Grid */}
            {!isLoading && (
              <div
                ref={projectsContainerRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 project-grid"
              >
                {getVisibleProjects().map((project) => (
                  <div
                    key={project.id}
                    data-project-id={project.id}
                    className="project-card group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image with Gradient Overlay */}
                    <div className="h-48 relative overflow-hidden project-card-image-container">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover project-card-image"
                        onLoad={() => handleImageLoad(project.id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent project-image-overlay"></div>
                      <div className="absolute top-4 right-4 project-featured-badge">
                        {project.featured && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 project-card-content">
                      <div className="flex items-center justify-between mb-3 project-card-header">
                        <h3 className="text-xl font-bold text-gray-900 project-card-title">
                          {project.name}
                        </h3>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 project-year-badge">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-gray-500 mb-5 project-card-description">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6 project-tech-stack">
                        <div className="flex flex-wrap gap-2 project-tech-tags">
                          {project.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors project-tech-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 project-action-buttons">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium project-github-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Code
                        </a>

                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-sm font-medium shadow-sm hover:shadow-md project-live-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </a>
                        ) : (
                          <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium project-private-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              />
                            </svg>
                            Private
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {hasMoreProjects() && !isLoading && (
              <div className="mt-12 text-center project-load-more">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all font-medium text-gray-700 hover:bg-gray-50 project-load-more-btn"
                >
                  Load More Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
