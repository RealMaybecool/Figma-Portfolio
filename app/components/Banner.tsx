"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {

  const texts = [
    "Roblox Lua Scripter",
    "Gameplay Systems Developer",
    "Roblox Game Programmer"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="flex flex-col lg:flex-row items-center">

          {/* Character Image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">

              {/* Mobile hello */}
              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                  />

                  <p className="text-white text-lg whitespace-nowrap">
                    Hello! I Am{" "}
                    <span className="text-purple-400">Maybecool</span>
                  </p>
                </div>
              </div>

              <Image
                src="/assets/me.png"
                alt="Maybecool Roblox Developer"
                width={300}
                height={300}
                className="max-w-md absolute"
                priority
              />

              <Image
                src="/assets/me-glow.png"
                alt="Maybecool Roblox Developer"
                width={300}
                height={300}
                className="max-w-md"
                priority
              />

            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">

            {/* Desktop hello */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute"
                style={{ left: "-100px", top: "-50px" }}
              />

              <p className="text-white text-lg relative bottom-10">
                Hello! I Am{" "}
                <span className="text-purple-400">Maybecool</span>
              </p>
            </div>

            <div>
              <p className="text-2xl">A Roblox Developer who builds</p>

              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Advanced
                <br />
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={200}
                    height={200}
                    className="absolute mt-2"
                  />

                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    game systems
                  </span>
                </span>
              </h1>

              <p className="text-md text-white/80">
                Combat systems, inventories, data systems, and scalable gameplay mechanics.
              </p>
            </div>

          </div>
        </div>

        {/* Typing Section */}

        <div className="space-y-3 pt-15 text-center lg:text-left">

          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            I&apos;m an advanced self-taught Roblox Lua developer focused on
            building scalable game systems, optimized scripts, and engaging
            gameplay experiences.
          </p>

        </div>

      </div>
    </section>
  );
}
