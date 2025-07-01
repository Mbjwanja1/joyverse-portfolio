"use client";

import { useState } from "react";
import Link from "next/link";   // ← add this

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* ──────── ABOUT ME ──────── */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">About&nbsp;Me</h2>

          {/* Intro Card */}
          <div className="bg-white/5 border border-purple-600/30 p-6 rounded-2xl shadow-xl backdrop-blur-md max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">
              I’m Joy — a dreamer in code and cosmos. <br />
              I build, I write, I breathe art into algorithms.
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm text-purple-300 hover:text-purple-100 transition"
            >
              {showMore ? "Show Less ▲" : "Read More ▼"}
            </button>

            {showMore && (
              <div className="mt-4 text-sm text-purple-100 text-left animate-fade-in-up space-y-2">
                <p>
                  I didn’t grow up surrounded by code or machines; I discovered
                  technology like you find a quiet corner in the stars.
                </p>
                <p>
                  In high school, I took my first steps into computer studies,
                  not knowing it would become a language I’d learn to speak with
                  wonder.
                </p>
                <p>
                  Now, through self-learning and code, I’m building spaces where
                  people feel seen — where tech isn’t something to fear, but
                  something that listens, comforts, and inspires.
                </p>
                <p>
                  I want to create experiences that feel like dreams made real —
                  gentle interfaces, human-centered designs, and tools that
                  remind you: <i>technology can feel like home, too.</i>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ──────── SKILLS ──────── */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-800 text-white rounded-full shadow-md hover:scale-105 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* ──────── PROJECTS PREVIEW ──────── */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          {/* Two placeholder cards (can keep or remove) */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500 transition"
              >
                <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                <p className="text-sm opacity-75">
                  A short description about this magical project goes here.
                </p>
              </div>
            ))}
          </div>

          {/* ✨ LINK TO FULL PROJECTS PAGE */}
          <div className="text-center">
            <Link href="/projects">
              <button className="px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg transition hover:scale-105">
                View My Projects 🚀
              </button>
            </Link>
          </div>
        </section>

        {/* ──────── CONTACT ──────── */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>

          <p className="mb-6 text-purple-200">I’d love to hear from you — reach out anytime.</p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="malito:mbjwanja@gmail.com" 
              className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Mbjwanja1" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg transition hover:scale-105"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/Joy Mbugua" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg transition hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
