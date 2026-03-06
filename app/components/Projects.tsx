import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Steal Time And Flex",
    description:
      "Fight other players and steal their time to climb the leaderboard and flex your stats.",
    icon: "https://tr.rbxcdn.com/0a9d6f3a4a0d79c9c5c0f55c5a9b3f6c/150/150/Image/Png",
    thumbnail:
      "https://tr.rbxcdn.com/0a9d6f3a4a0d79c9c5c0f55c5a9b3f6c/768/432/Image/Webp",
    likeRatio: "66%",
    activePlayers: "200+",
    link: "https://www.roblox.com/games/128787289215774/StealTime-Flex",
  },
  {
    id: 2,
    title: "Pull the Sword ⚔️ to be the King 👑",
    description:
      "Train strength, pull powerful swords, collect wins, and become the strongest king.",
    icon: "https://tr.rbxcdn.com/5e2a7f9eab8a2c0bfae5a3f33c7e71f6/150/150/Image/Png",
    thumbnail:
      "https://tr.rbxcdn.com/5e2a7f9eab8a2c0bfae5a3f33c7e71f6/768/432/Image/Webp",
    likeRatio: "97%",
    activePlayers: "1K+",
    link: "https://www.roblox.com/games/76195731114162/Pull-the-Sword-to-be-the-King",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Roblox Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-xl p-6 border-t-2 border-purple-700 hover:shadow-2xl hover:shadow-purple-900"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={project.icon}
                  alt={project.title}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <div className="flex gap-4 text-sm text-white/70 mt-1">
                    <span>⭐ {project.likeRatio}</span>
                    <span>🟢 {project.activePlayers}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-5">
                {project.description}
              </p>

              <Image
                src={project.thumbnail}
                alt={project.title}
                width={768}
                height={432}
                className="rounded-lg mb-4"
              />

              <Link
                href={project.link}
                target="_blank"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm"
              >
                PLAY ON ROBLOX →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
