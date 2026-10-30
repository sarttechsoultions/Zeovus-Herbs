"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function CertificationMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    const track = element?.querySelector(".about-certifications__track");
    if (!element || !track) return;
    let frame = 0;
    let previous = 0;
    let rate = 1;
    let target = 1;
    const tick = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      rate += Math.sign(target - rate) * Math.min(Math.abs(target - rate), elapsed / 650);
      track.getAnimations().forEach(animation => { animation.playbackRate = rate; });
      if (rate !== target) frame = requestAnimationFrame(tick);
      else { frame = 0; previous = 0; }
    };
    const update = () => {
      target = track.querySelector("img:hover") ? 0 : 1;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    element.addEventListener("pointerover", update);
    element.addEventListener("pointerout", update);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointerover", update);
      element.removeEventListener("pointerout", update);
    };
  }, []);

  return <div ref={root} style={{ display: "contents" }}>{children}</div>;
}
