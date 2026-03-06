import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            I&apos;m an <span className="text-purple-400">advanced self-taught Roblox Lua scripter</span>
            <br />
            <span className="text-sm">
              focused on building scalable game systems, optimized scripts, and
              engaging gameplay mechanics for modern Roblox experiences
            </span>
          </p>
        </div>

        <Image
          src="/assets/illustration.png"
          alt="Roblox Lua scripting skills"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
        
      </div>
    </section>
  );
}
