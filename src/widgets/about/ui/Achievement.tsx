import { achievements } from "../model/about-data";

const Achievement = () => {
  return (
    <div className="grid grid-cols-2 gap-4 self-start">
      {achievements.map((achievement: any) => (
        <div
          key={achievement.id}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-4xl font-bold tracking-tight text-gray-950">
            {achievement.count}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
