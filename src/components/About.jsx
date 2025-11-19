import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am an engineer with a broad interest in software development, analysis, and technical problem-solving. I enjoy exploring different parts of the tech ecosystem and adapting to whatever the project demands.
        </p>

        <br />

        <p className="text-xl">
        My work style is structured, detail-oriented, and focused on understanding systems deeply. Whether it’s troubleshooting an issue, building a feature, or designing workflows, I aim for clarity and efficiency in every task. <br /> <br />
        I am always learning—new tools, frameworks, and technologies that help me grow professionally. I enjoy environments where I can experiment, iterate, and continuously improve my technical and analytical skills.<br /> <br />
        I believe in delivering high-quality work, communicating clearly, and supporting my team wherever needed. My goal is to bring a mix of versatility, dedication, and strong problem-solving abilities to every role I take on.
        </p>
      </div>
    </div>
  );
};

export default About;
