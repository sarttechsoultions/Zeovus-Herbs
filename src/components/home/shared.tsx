import ArrowIcon from "@/components/ArrowIcon";
import {SiteImage} from "../SiteImage";
import type { ReactNode } from "react";

const assetPath = "/figma-assets/";

export function HomeImage({ src, alt = "" }: { src: string; alt?: string }) {
  return <SiteImage src={src.startsWith("/") ? src : assetPath + src} alt={alt} />;
}

export function HomeButton({ children, outline = false, href = "/products" }: { children: ReactNode; outline?: boolean; href?: string }) {
  return <a href={href} className={`button ${outline ? "outline" : ""}`}>{children} <b><ArrowIcon direction="right"/></b></a>;
}


