interface Project {
  id: number;
  title: string;
  description: string;
  placeId: number;
  link: string;
  players: string;
  likeRatio: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Steal Time And Flex",
    description:
      "A competitive Roblox game where players steal time from others and climb the leaderboard while flexing their progress.",
    placeId: 128787289215774,
    link: "https://www.roblox.com/games/128787289215774/StealTime-Flex",
    players: "Live on Roblox",
    likeRatio: "Popular",
  },
  {
    id: 2,
    title: "Pull the Sword ⚔️ to be the King 👑",
    description:
      "A Roblox progression game where players pull powerful swords, gain strength, and compete to become the ultimate king.",
    placeId: 76195731114162,
    link: "https://www.roblox.com/games/76195731114162/Pull-the-Sword-to-be-the-King",
    players: "Live on Roblox",
    likeRatio: "Popular",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          const thumbnail = `https://assetgame.roblox.com/Game/Tools/ThumbnailAsset.ashx?aid=${project.placeId}&fmt=png&wd=420&ht=420`;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Roblox Game
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="text-white/80 text-sm space-y-1">
                        <p>⭐ Like ratio</p>
                        <p>🟢 Active players</p>
                        <p>🏆 Game icon</p>
                        <p>🎮 Roblox thumbnail</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm"
                  >
                    PLAY ON ROBLOX →
                  </a>
                </div>

                <div
                  className={`${
                    isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <img
                      src={thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
