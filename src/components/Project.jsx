import React from "react";
import school from "../assets/Project/school.png";
import resume from "../assets/Project/resume.png";
import finance from "../assets/Project/finance.png";
import digital from "../assets/Project/digital.png";
import resto from "../assets/Project/resto.png";
import hotel from "../assets/Project/hotel.png";

const Project = () => {
  const Projects = [
    {
      id: 1,
      title: "School Management System",            // <-- change this to your project name
      src: school,
      link: "https://realschoolmanagementsystem.netlify.app/",
      repo: "https://github.com/priyanshuhagrawal/school-management.git",
    },
    {
      id: 2,
      title: "Resume Builder",
      src: resume,
      link: "https://resume-builder-es8p.vercel.app/",
      repo: "https://github.com/priyanshuhagrawal/resume-builder.git",
    },
    {
      id: 3,
      title: "Finance Tracker",
      src: finance,
      link: "https://financeetracke.netlify.app/",
      repo: "https://github.com/priyanshuhagrawal/finance-tracker.git",
    },
    {
      id: 4,
      title: "Digital Fingerprint",
      src: digital,
      link: "https://digitalfingerprint.netlify.app/",
      repo: "https://github.com/priyanshuhagrawal/digital-fingerprint.git",
    },
    {
      id: 5,
      title: "Restaurant Website",
      src: resto,
      link: "https://priresto.netlify.app/",
      repo: "https://github.com/priyanshuhagrawal/resto",
    },
    {
      id: 6,
      title: "Hotel Booking Website",
      src: hotel,
      link: "https://agrawals.netlify.app/",
      repo: "https://github.com/priyanshuhagrawal/hotel-booking",
    },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen Projects"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Projects.map(({ id, title, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {/* Project title above the image */}
              <h3 className="text-lg font-semibold text-white text-center pt-4">
                {title}
              </h3>

              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 mt-3"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
