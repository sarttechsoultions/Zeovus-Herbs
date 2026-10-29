"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [aspectRatio, setAspectRatio] = useState("16 / 9");

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
    <section id="home" className="hero" style={{ aspectRatio }}>
      <div className="leafbg">
        <video onLoadedMetadata={event => { const v = event.currentTarget; if (v.videoWidth && v.videoHeight) setAspectRatio(v.videoWidth+" / "+v.videoHeight); }} ref={videoRef} src="/homehero.mp4" autoPlay muted loop playsInline preload="auto" poster="/figma-assets/hero-leaves.png" aria-label="Green botanical ingredients">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-copy">
        <h1>Plants With Purpose</h1>
        <Link href="/products" className="button">Explore Ingredients <img src="/home-assets/imgGrommetIconsLinkNext.svg" alt="" /></Link>
      </div>
    </section>
  );
}
