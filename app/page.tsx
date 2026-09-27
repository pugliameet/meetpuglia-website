import Link from "next/link";
import { ArrowRight, CalendarDays, Download, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteShell } from "./site-shell";

const features = [
  { icon: MapPin, title: "Scopri la Puglia", text: "Trova esperienze vicine a te e filtra per categoria, data, prezzo e distanza." },
  { icon: CalendarDays, title: "Prenota con semplicità", text: "Consulta tutti i dettagli dell’evento e gestisci le tue prenotazioni direttamente dall’app." },
  { icon: Users, title: "Crea la tua esperienza", text: "Pubblica eventi gratuiti o a pagamento e raggiungi persone interessate sul territorio." },
];

export default function Home() {
  return <SiteShell>
    <section className="hero section"><div className="hero-copy"><p className="eyebrow"><Sparkles size={16}/> La Puglia da vivere, insieme</p><h1>Le esperienze più belle iniziano da un incontro.</h1><p className="lead">MeetPuglia è la piattaforma che mette in contatto persone e organizzatori attraverso eventi, attività e nuove esperienze in tutta la Puglia.</p><div className="actions"><a className="button" href="#come-funziona">Scopri come funziona <ArrowRight size={18}/></a><Link className="text-link" href="/assistenza">Hai bisogno di aiuto?</Link></div></div><div className="hero-card" aria-label="Categorie disponibili"><span className="pin"><MapPin size={18}/> Puglia</span><h2>Un territorio.<br/>Mille occasioni.</h2><div className="chips"><span>Viaggi</span><span>Intrattenimento</span><span>Workshop</span><span>Sport</span><span>Cooking class</span><span>Team building</span><span>Bambini</span></div></div></section>
    <section id="come-funziona" className="section soft"><p className="kicker">COME FUNZIONA</p><h2 className="section-title">Tutto ciò che serve per partecipare e organizzare.</h2><div className="feature-grid">{features.map(({icon: Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section split"><div><p className="kicker">PER I PARTECIPANTI</p><h2>Il prossimo ricordo è più vicino di quanto pensi.</h2><p>Esplora gli eventi, controlla luogo, data, durata, disponibilità e condizioni. Per gli eventi a pagamento, il checkout è gestito in modo sicuro tramite Stripe.</p></div><div className="number-list"><p><b>01</b> Cerca ciò che ti interessa</p><p><b>02</b> Leggi tutti i dettagli</p><p><b>03</b> Prenota il tuo posto</p></div></section>
    <section className="section dark-panel"><div><ShieldCheck size={38}/><p className="kicker">CHIAREZZA PRIMA DI TUTTO</p><h2>Regole comprensibili, assistenza reale.</h2><p>Condizioni di cancellazione e rimborso sono consultabili prima dell’acquisto. Per dubbi o problemi puoi contattare direttamente il nostro supporto.</p><div className="actions"><Link className="button light" href="/rimborsi">Rimborsi e cancellazioni</Link><Link className="text-link light-link" href="/termini">Leggi i termini</Link></div></div></section>
    <section className="section final-cta"><p className="kicker">MEETPUGLIA</p><h2>MeetPuglia è disponibile sugli store.</h2><p>Scarica l’app per Android o iOS e inizia a vivere nuove esperienze in Puglia.</p><Link className="button" href="/download">Scarica l’app <Download size={18}/></Link></section>
  </SiteShell>;
}
