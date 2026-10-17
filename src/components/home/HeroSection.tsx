"use client";

import { useEffect, useRef } from "react";
import { HomeButton } from "./shared";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const attemptPlay = () => {
      video.play().catch(() => {
        // Autoplay may be deferred until user interaction
      });
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("canplay", attemptPlay, { once: true });
      video.load();
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="leafbg">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/figma-assets/hero-leaves.png"
          aria-label="Green botanical ingredients"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-copy">
        <h1>
          Plant With
          <br />
          Purpose
        </h1>
        <HomeButton>Explore ingredients</HomeButton>
      </div>
    </section>
  );
}

