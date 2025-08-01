import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1030);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen bg-[#f6f6f6] relative">
        {/* Mobile Navbar - Fixed at top */}
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

        {/* Mobile Sidebar - Shadow removed when open */}
        {isMobile && (
          <div
            className={`fixed top-16 left-0 right-0 bg-white z-40 overflow-hidden transition-all duration-600 ease-in-out ${
              sidebarOpen ? "max-h-screen" : "max-h-0"
            } ${sidebarOpen ? "" : "shadow-xl"}`} /* Shadow removed when open */
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
          className={`flex-1 ${!isMobile ? "ml-72" : ""} overflow-y-auto ${
            isMobile ? "pt-16" : ""
          }`}
        >
          <div className="h-screen">
            <div className="py-20 px-15 flex h-auto home-content">
              {/* Text Content */}
              <div
                className={`transition-all duration-1000 ease-out transform ${
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                } w-[480px] flex flex-col gap-5 h-auto
                text-center md:text-left max-w-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1
                home-text-content
                `}
              >
                <h1 className="font-bold text-6xl text-gray-800 name-container">
                  Hello, my name is{" "}
                  <span
                    className="fade-blue"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    <span>Krishna Singha</span>
                    {/* <span>Singha</span> */}
                  </span>
                </h1>
                <h2 className="text-4xl font-semibold text-gray-800 home-typing-text">
                  I'm a{" "}
                  <span className="text-blue-600">
                    <Typewriter
                      words={[
                        "Software Engineer",
                        "ML Engineer",
                        "DevOps Engineer",
                        "Full Stack Developer",
                        "Freelancer",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={80}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>

                <h2 className="text-lg text-gray-800 home-paragraph">
                  I'm a <span className="font-semibold">Software engineer</span>{" "}
                  with
                  <span className="text-blue-600 font-semibold">
                    {" "}
                    strong hands-on skills
                  </span>
                  . My expertise includes building scalable systems, writing
                  clean code and solving real-world engineering challenges
                </h2>

                <div className="flex gap-5 home-buttons">
                  <button className="bg-blue-600 text-white px-6 py-4 rounded-full cursor-pointer transform transition-transform hover:scale-105 font-semibold button-first">
                    More about me
                  </button>
                  <button className="px-6 py-2 rounded-full border-2 border-gray-400 shadow-sm text-gray-800 bg-white hover:shadow-md cursor-pointer transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 font-semibold button-second">
                    Download CV
                  </button>
                </div>
                <div className="flex gap-4 text-xl text-gray-600 home-social-icons">
                  <FaLinkedinIn className="cursor-pointer hover:text-gray-800 transition-all duration-500 ease-in-out transform hover:-translate-y-1" />
                  <FaGithub className="cursor-pointer hover:text-gray-800 transition-all duration-500 ease-in-out transform hover:-translate-y-1" />
                  <FaInstagram className="cursor-pointer hover:text-gray-800 transition-all duration-500 ease-in-out transform hover:-translate-y-1" />
                  <FaThreads className="cursor-pointer hover:text-gray-800 transition-all duration-500 ease-in-out transform hover:-translate-y-1" />
                </div>
              </div>

              {/* Image Content */}
              <div
                className={`flex-1 py-15 px-8 h-auto transition-all duration-1000 ease-out ${
                  imageLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                } home-image-content`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-700 group-hover:shadow-3xl w-full max-w-md mt-10 md:mt-0 group home-image">
                  <img
                    src="images/krishna.jpg"
                    alt="Krishna Singha"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />

                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-600 transition-all duration-500 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-600 transition-all duration-500 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-600 transition-all duration-500 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-600 transition-all duration-500 group-hover:w-12 group-hover:h-12"></div>

                  <div
                    className={`absolute -bottom-5 -right-5 bg-blue-500 text-white px-6 py-5 rounded-full shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500 ${
                      imageLoaded ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span className="font-bold">1+ Years</span> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
