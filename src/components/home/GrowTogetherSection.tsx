import ArrowIcon from "@/components/ArrowIcon";
import {SiteImage} from "../SiteImage";
export function GrowTogetherSection() {
  return <section id="contact" className="pre-footer" aria-labelledby="grow-together-title">
    <div className="pre-footer__panel"><div className="pre-footer__content"><h2 id="grow-together-title">Let&apos;s Grow Together</h2><p>Connecting ingredients, science and markets to create what comes next. Partner with our clinical team today.</p><div className="pre-footer__actions"><a className="pre-footer__primary" href="/contact">Source ingredients <span><ArrowIcon direction="upRight"/></span></a><a className="pre-footer__secondary" href="/contact">Become a partner</a></div></div></div>
    <SiteImage className="pre-footer__image" src="/home-assets/imgIstockphoto14681490851024X10241.png" alt="Woman outdoors under a blue sky" />
  </section>;
}


