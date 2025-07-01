"use client";

import React from "react";
import Link from "next/link"; // (for internal links later if you want)

const projects = [
  {
    title: "JoyBot 🤖",
    description:
      "A floating chatbot assistant built with OpenAI’s API, Next.js 13 App Router and Tailwind. Replies with cosmic wisdom in real time.",
    link: "/home",
  },
  {
    title: "Campus Hub 🏫",
    description:
      "A collaborative university issue-report platform with QR access, student services and real-time admin dashboard.",
    link: "https://github.com/BenjiOdhis/CampusHub.git",
  },
  {
    title: "StarSplash ✨",
    description:
      "A cosmic splash page with animated stars, gradient skies and a gentle typewriter intro, the gateway to the Joyverse.",
    link: "/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects</h1>
        <p className="text-lg md:text-xl mb-12 opacity-80">
          A journey through code, dreams, and all things Joyverse.
        </p>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white/10 backdrop-blur shadow-xl hover:scale-105 hover:bg-white/20 transition-all"
            >
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h2>
              <p className="text-white opacity-90">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
