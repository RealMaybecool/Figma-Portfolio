import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">

        {/* Contact Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>

          <p className="text-md text-white/80 max-w-2xl mx-auto mb-6">
            Interested in working together or need a Roblox Lua scripter for your game?
            Feel free to reach out.
          </p>

          <a
            href="mailto:contact@maybecool.dev"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            contact@maybecool.dev
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8">

          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </Link>

        </div>

        {/* Copyright */}
        <div className="text-center mt-10 pt-6 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Maybecool. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
