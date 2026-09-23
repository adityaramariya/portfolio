import Pills from "@/shared/ui/Pills";
import { experiences } from "../model/experience-data";

interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-gradient-to-b from-indigo-500 via-white/10 to-transparent md:block" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.period}-${experience.role}`}
            className="relative md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-4 border-gray-950 bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)] md:block" />

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05] sm:p-9">
              {/* Top */}
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-medium text-indigo-400">
                    {experience.period}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {experience.company} -{" "}
                    <span className="text-indigo-400">
                      {experience.location}
                    </span>
                  </p>
                </div>

                <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-400 md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {experience.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                <Pills
                  data={experience.technologies}
                  variant="dark"
                  className="gap-2"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
