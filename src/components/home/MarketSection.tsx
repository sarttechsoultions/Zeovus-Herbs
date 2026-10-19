import { HomeButton, HomeImage } from "./shared";

const marketCards = [["/home-assets/imgIstockphoto22427978311024X10241.png", "Indian ingredient greenhouse", "Taking Indian Ingredients Global", "India is home to a diverse botanical ecosystem and generations of knowledge around plants and their applications.", "We work with scientifically understood ingredients from India and connect them with businesses across international markets.", "Explore ingredients", false], ["/home-assets/imgIstockphoto13009353531024X10241.png", "Green field", "Bringing Global Innovation to India", "We partner with global ingredient and research organisations looking to build their presence in India.", "Our understanding of the Indian health and nutrition ecosystem allows us to connect innovative ingredients with relevant businesses, applications and opportunities.", "Partner with us", true]] as const;

export function MarketSection() {
  return <section className="markets">{marketCards.map(([src, alt, title, lineOne, lineTwo, cta, outline]) => <article key={title}><div className="market-image"><HomeImage src={src} alt={alt} /></div><div><h2>{title}</h2><p>{lineOne}<br />{lineTwo}</p><HomeButton href={outline ? "/contact" : "/products"} outline={outline}>{cta}</HomeButton></div></article>)}</section>;
}



