import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Steal Time & Flex",
    description:
      "A competitive Roblox game where players steal time from others to climb the leaderboard and dominate the server. Built gameplay systems and scripting mechanics using Roblox Lua.",
    icon: "/cards/card-1.png",
    link: "https://www.roblox.com/games/128787289215774/StealTime-Flex",
  },
  {
    id: 2,
    title: "Pull the Sword ⚔️ to be the King 👑",
    description:
      "A progression-based Roblox game where players pull powerful swords to grow stronger and become the king. Focused on gameplay mechanics, progression systems, and Lua scripting.",
    icon: "/cards/card-2.png",
    link: "https://www.roblox.com/games/76195731114162/Pull-the-Sword-to-be-the-King",
  },
  {
    id: 3,
    title: "Custom Roblox Systems",
    description:
      "Development of scalable Roblox systems including inventory frameworks, combat systems, UI mechanics, and optimized gameplay scripting using Lua.",
    icon: "/cards/card-3.png",
    link: "https://www.roblox.com",
  },
  {
    id: 4,
    title: "Gameplay Mechanics & Optimization",
    description:
      "Designed and scripted advanced gameplay mechanics while optimizing performance for multiplayer Roblox experiences.",
    icon: "/cards/card-4.png",
    link: "https://www.roblox.com",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Roblox Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              
              <div>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-white/70 text-sm mb-4">
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                >
                  PLAY GAME →
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
