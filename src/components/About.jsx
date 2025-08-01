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
import { useState, useEffect } from "react";

const About = () => {
  const infoCards = [
    {
      icon: <FcCalendar className="text-xl" />,
      label: "Birthday",
      value: "26 Feb 2004",
      circleBg: "bg-blue-500/20",
    },
    {
      icon: <FcBusinessman className="text-xl" />,
      label: "Age",
      value: "21",
      circleBg: "bg-blue-500/20",
    },
    {
      icon: <FcHome className="text-xl" />,
      label: "Location",
      value: "New Delhi",
      circleBg: "bg-blue-500/20",
    },
    {
      icon: <FcGraduationCap className="text-xl" />,
      label: "Degree",
      value: "Computer Science",
      circleBg: "bg-blue-500/20",
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
      description:
        "Working as a Full Stack Developer on MERN-based HRMS, ERP, and educational systems. Developed scalable modules for employee management, attendance, payroll, and dashboards. Implemented secure authentication, role-based access, RESTful APIs, and responsive UIs while collaborating with clients on real-world deployments.",
    },
    {
      date: "10/2024 - 03/2025",
      title: "Full Stack Developer",
      description:
        "Built a Laravel-based educational platform at Ramanujan College (Kalkaji, Delhi). Used Laravel, MySQL, Bootstrap, jQuery, and Ajax to develop features like user login, study materials, previous year questions (PYQs), and online test systems.",
    },
    {
      date: "11/2023 – 12/2023",
      title: "React Developer",
      description:
        "Worked with Lok Utthan Pahal Foundation on an NGO project. Developed a React-based website (SAMIP) to offer secure UI and smooth navigation for home services.",
    },
    {
      date: "Jan 2024 – September 2024",
      title: "Junior Software Engineer",
      description:
        "Contributed to college ERP modules at APC – Ramanujan College, Delhi. Built and optimized web features like Attendance and Timetable using Laravel, Bootstrap, and MySQL, focusing on user-friendly and scalable academic solutions.",
    },
  ];

  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    const timer = setTimeout(() => {
      setTextLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen bg-[#f6f6f6]">
      <div className="w-72 z-50 fixed h-screen shadow-2xl">
        <Sidebar />
      </div>

      <div className="flex-1 ml-72 overflow-y-auto">
        <div className="py-6 px-6 flex flex-col flex-1">
          <div className="flex flex-col items-center justify-center gap-3 py-10">
            <div className="font-bold text-5xl text-gray-900">
              About <span className="text-blue-600">Me</span>
            </div>
            <p className="text-gray-700">
              Get to know the person behind the code
            </p>
          </div>

          <div className="flex-1 flex">
            <div className="w-1/2 px-6 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1
                  className={`font-bold text-3xl transition-all duration-1500 ease-out transform ${
                    textLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  I'm Krishna, a{" "}
                  <span className="text-blue-600">Software Engineer</span>
                </h1>
                <p>
                  Passionate about building efficient, scalable software
                  solutions that blend performance with clean, maintainable
                  code.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {infoCards.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg flex items-center gap-4 px-3 py-2 shadow"
                  >
                    <div
                      className={`${item.circleBg} rounded-full w-10 h-10 flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h6 className="text-gray-700">{item.label}</h6>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button className="bg-blue-600 py-3 px-7 rounded-full text-white flex items-center gap-3 cursor-pointer transition-transform duration-400 hover:scale-110 shadow">
                  <FaDownload />
                  Download CV
                </button>
                <button className="bg-white py-3 px-7 rounded-full text-black flex items-center gap-3 hover:bg-blue-200 transition-all duration-400 cursor-pointer shadow border-2 border-gray-400 hover:border-blue-600">
                  <MdMail className="text-blue-600" />
                  Hire Me
                </button>
              </div>
            </div>

            <div className="w-1/2 py-10 px-10">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full">
                <h2 className="text-2xl font-bold mb-6">My Skills</h2>
                {[
                  { skill: "Web development", percent: 80 },
                  { skill: "DSA", percent: 80 },
                  { skill: "ML", percent: 60 },
                  { skill: "React", percent: 96 },
                  { skill: "Blockchain Development", percent: 75 },
                ].map(({ skill, percent }, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {percent}%
                      </span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-10 px-6 mt-14">
            <h1 className="font-bold text-2xl">Education</h1>
            <div className="h-1 w-17 bg-blue-600 my-2"></div>

            <div className="border-blue-600 border-l-2 grid gap-6 mt-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[auto_1fr] gap-4 items-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-600 bg-white transition-colors duration-300 group-hover:bg-blue-600">
                    <BookOpenIcon className="h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="bg-white px-5 py-5 flex flex-col gap-2 shadow">
                    <div className="flex gap-1 items-center">
                      <CiCalendar className="text-blue-600" />
                      <p className="text-blue-600">{edu.date}</p>
                    </div>
                    <h4 className="font-semibold text-xl">{edu.title}</h4>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-10 px-6">
            <h1 className="font-bold text-2xl">Experience</h1>
            <div className="h-1 w-17 bg-blue-600 my-2"></div>

            <div className="border-blue-600 border-l-2 grid gap-6 mt-4">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[auto_1fr] gap-4 items-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-600 bg-white transition-colors duration-300 group-hover:bg-blue-600">
                    <GoBriefcase className="h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="bg-white px-5 py-5 flex flex-col gap-2 shadow">
                    <div className="flex gap-1 items-center">
                      <CiCalendar className="text-blue-600" />
                      <p className="text-blue-600">{exp.date}</p>
                    </div>
                    <h4 className="font-semibold text-xl">{exp.title}</h4>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
