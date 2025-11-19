import React from "react";

const experiences = [
  {
    company: "Scalenut",
    role: "Software Engineer (Intern)",
    duration: "Dec 2024 - Sept 2025",
    description:
      "Worked closely with customers to troubleshoot product issues, identify bugs, and collaborate with engineering teams for resolutions. Contributed to knowledge-base documentation and improved support processes for smoother user experience.",
  },
  {
    company: "BRMPL",
    role: "Business Analyst",
    duration: "Jun 2023 - Nov 2024",
    description:
      "Gathered and analyzed business requirements, created detailed process flows, and coordinated between stakeholders and technical teams. Ensured that delivered solutions aligned with functional needs and provided clarity throughout the development cycle.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-start justify-center py-32 bg-transparent"
      aria-labelledby="experience-heading"
    >
      <div className="w-full max-w-5xl px-6 md:px-8">
        <h2
          id="experience-heading"
          className="text-4xl font-extrabold text-white mb-14"
        >
          Experience
        </h2>

        <div className="relative">
          <div className="timeline-line hidden md:block" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <article
                key={idx}
                className="flex items-start md:items-stretch"
                aria-labelledby={`exp-${idx}-role`}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <span
                      className="timeline-dot hidden md:inline-block"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="ml-0 md:ml-12 w-full">
                  <div className="experience-card bg-transparent border-b border-gray-600 pb-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-teal-400">
                          {exp.duration}
                        </p>

                        <h3
                          id={`exp-${idx}-role`}
                          className="text-2xl font-semibold text-white mt-1"
                        >
                          {exp.role}
                        </h3>

                        <p className="text-base font-medium text-gray-300 mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}
