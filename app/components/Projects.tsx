import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  thumbnail: string;
  likeRatio: string;
  activePlayers: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Steal Time And Flex",
    description: "A competitive Roblox game where players steal time from others and flex their progress.",
    icon: "/cards/stealtime-icon.png",
    thumbnail: "/cards/stealtime-thumb.png",
    likeRatio: "92%",
    activePlayers: "3.2K",
    link: "https://www.roblox.com/games/128787289215774/StealTime-Flex",
  },
  {
    id: 2,
    title: "Pull the Sword ⚔️ to be the King 👑",
    description: "Pull powerful swords, grow stronger, and become the king.",
    icon: "/cards/sword-icon.png",
    thumbnail: "/cards/sword-thumb.png",
    likeRatio: "95%",
    activePlayers: "5.6K",
    link: "https://www.roblox.com/games/76195731114162/Pull-the-Sword-to-be-the-King",
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
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900"
            >
              <div className="flex gap-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={90}
                  height={90}
                  className="object-contain"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-3">
                    {card.description}
                  </p>

                  <div className="flex gap-4 text-sm text-white/80 mb-4">
                    <span>⭐ {card.likeRatio}</span>
                    <span>🟢 {card.activePlayers}</span>
                  </div>

                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                  >
                    PLAY ON ROBLOX →
                  </Link>
                </div>
              </div>

              <div className="mt-5">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
