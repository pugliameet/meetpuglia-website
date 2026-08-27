import { SiteShell } from "./site-shell";
export type Section={title:string; paragraphs:string[]};
export function InfoPage({eyebrow,title,intro,sections}:{eyebrow:string;title:string;intro:string;sections:Section[]}){return <SiteShell><article className="legal section"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p className="legal-intro">{intro}</p>{sections.map((s,i)=><section key={s.title}><h2>{i+1}. {s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}</article></SiteShell>}
