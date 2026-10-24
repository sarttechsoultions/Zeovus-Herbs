"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    const attemptPlay = () => { void video.play().catch(() => {}); };
    if (video.readyState >= 2) attemptPlay();
    else {
      video.addEventListener("canplay", attemptPlay, { once: true });
      video.load();
    }
    return () => video.removeEventListener("canplay", attemptPlay);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="leafbg">
        <video ref={videoRef} src="/hero-video.mp4" autoPlay muted loop playsInline preload="auto" poster="/figma-assets/hero-leaves.png" aria-label="Green botanical ingredients">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-copy">
        <h1>Plants With<br />Purpose</h1>
        <Link href="/products" className="button">Explore Ingredients <img src="/home-assets/imgGrommetIconsLinkNext.svg" alt="" /></Link>
      </div>
    </section>
  );
}
