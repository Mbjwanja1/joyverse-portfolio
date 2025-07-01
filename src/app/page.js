"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./stars.css";

export default function Home() {
  const [showPoem, setShowPoem] = useState(false);
  const STAR_COUNT = 60;

  useEffect(() => {
    const timer = setTimeout(() => setShowPoem(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* floating stars */}
      <div className="stars">
        {Array.from({ length: STAR_COUNT }).map((_, i) => (
          <div
        
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* main text */}
      <div className="relative z-10 text-center px-6 max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide animate-fade-in-down">
          Welcome to the Joyverse.
        </h1>

        {showPoem && (
          <p className="mt-4 text-base md:text-lg opacity-80 italic animate-fade-in-up">
            In the quiet chaos of code and stars,
            <br />
            I found my voice — and built a world that feels like me.
          </p>
        )}

        <Link
          href="/home"
          className="mt-12 inline-block px-12 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Enter →
        </Link>
      </div>
    </div>
  );
}
