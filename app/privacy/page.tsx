import { InfoPage } from "../info-page";

export default function Page() {
  return (
    <InfoPage
      eyebrow="ULTIMO AGGIORNAMENTO: 12 AGOSTO 2026"
      title="Privacy Policy"
      intro="Questa informativa descrive come MeetPuglia tratta i dati personali degli utenti ai sensi del Regolamento (UE) 2016/679 (GDPR) e della normativa italiana applicabile."
      sections={[
        {
          title: "1. Titolare del trattamento e contatti",
          paragraphs: [
            "Il Titolare del trattamento è HOLD S.R.L., con sede in Via Salvatore Quasimodo 10, 70020 Bitritto (BA), Italia, C.F. e P. IVA 09207370728. Per richieste relative alla protezione dei dati personali è possibile scrivere a Holdsrlinfo@gmail.com.",
          ],
        },
        {
          title: "2. Dati personali trattati",
          paragraphs: [
            "• Dati di account e profilo: nome, nome utente, email, identificativo dell’account, foto del profilo, lingua e dati tecnici necessari all’autenticazione e al recupero dell’account.",
            "• Dati degli eventi e delle prenotazioni: contenuti, immagini, categoria, data e ora, luogo e coordinate, prezzo, capienza, stato, organizzatore, partecipazioni, cancellazioni e comunicazioni operative.",
            "• Dati relativi ai pagamenti: identificativi dell’ordine, evento, pagante e account Stripe dell’organizzatore; importi, valuta, commissioni, stato, identificativi Stripe di Checkout, pagamento e rimborso, accettazione della politica di rimborso e storico delle operazioni. MeetPuglia non riceve né conserva nell’app il numero completo della carta, il CVC o le credenziali bancarie inserite nelle pagine Stripe.",
            "• Dati degli organizzatori per Stripe Connect: identificativo dell’account collegato, stato dell’onboarding e dell’abilitazione a pagamenti e trasferimenti, saldi e accrediti. I dati identificativi, bancari e di verifica richiesti durante l’onboarding sono raccolti direttamente da Stripe.",
            "• Dati di posizione: con il permesso dell’utente, la posizione del dispositivo è utilizzata per calcolare e ordinare gli eventi per distanza. La posizione corrente non viene salvata nel profilo; le coordinate del luogo indicate dall’organizzatore sono memorizzate con l’evento.",
            "• Immagini, calendario e comunicazioni: immagini scelte per avatar o eventi; informazioni necessarie ad aggiungere un evento al calendario del dispositivo; email operative; notifiche interne e stato di lettura. MeetPuglia non utilizza attualmente notifiche push esterne.",
            "• Dati tecnici e di sicurezza: IP, data e ora delle richieste, dati del dispositivo o dell’app, log, errori e informazioni necessarie a prevenire frodi e abusi, proteggere il servizio e gestire contestazioni.",
          ],
        },
        {
          title: "3. Finalità e basi giuridiche",
          paragraphs: [
            "• Esecuzione dei Termini e misure precontrattuali: registrazione, autenticazione, profilo, pubblicazione e moderazione degli eventi, prenotazioni gratuite e a pagamento, Stripe Connect, pagamenti, trasferimenti, cancellazioni, rimborsi, dashboard dell’organizzatore e comunicazioni necessarie.",
            "• Obblighi legali: conservazione di dati richiesti dalla normativa contabile, fiscale, antiriciclaggio o da altre disposizioni applicabili; risposta alle autorità; gestione dei diritti degli interessati.",
            "• Legittimo interesse di HOLD S.R.L.: sicurezza dell’app e dei pagamenti, prevenzione di frodi e abusi, moderazione, continuità operativa, gestione degli errori, assistenza e difesa di diritti, nel rispetto del bilanciamento con i diritti degli utenti.",
            "• Consenso o scelta dell’utente, quando richiesto: accesso alla posizione, alla libreria fotografica e al calendario. I permessi possono essere negati o revocati dalle impostazioni del dispositivo.",
          ],
        },
        {
          title: "4. Natura del conferimento",
          paragraphs: [
            "I dati indicati come obbligatori sono necessari per creare e gestire l’account o utilizzare la funzione richiesta. Il mancato conferimento impedisce di usare quella funzione. La navigazione degli eventi pubblici è disponibile anche senza account nei limiti previsti dall’app. Foto del profilo, posizione e calendario sono facoltativi.",
            "Per organizzare eventi a pagamento è necessario completare l’onboarding Stripe. Per acquistare una partecipazione a pagamento è necessario fornire a Stripe un metodo di pagamento valido.",
          ],
        },
        {
          title: "5. Visibilità dei dati",
          paragraphs: [
            "Nome, nome utente, foto del profilo e contenuti dell’evento possono essere visibili agli altri utenti per identificare l’organizzatore e presentare l’evento. I dati della prenotazione sono accessibili al partecipante e, nella misura necessaria alla gestione dell’evento, all’organizzatore e al personale autorizzato.",
            "Le informazioni finanziarie personali e i dati completi del metodo di pagamento non sono mostrati pubblicamente. La dashboard Stripe dell’organizzatore è accessibile soltanto dopo il completamento dell’onboarding e riguarda il relativo account collegato.",
          ],
        },
        {
          title: "6. Fornitori, destinatari e ruoli privacy",
          paragraphs: [
            "I dati possono essere trattati da fornitori che supportano HOLD S.R.L., tra cui Supabase per autenticazione, database, archiviazione e funzioni backend; Expo e i fornitori dei sistemi operativi per il funzionamento dell’app; Resend e i fornitori email per le comunicazioni operative; fornitori di geolocalizzazione e geocodifica per le funzioni basate sul luogo.",
            "Stripe tratta i dati necessari a Checkout, pagamenti, prevenzione frodi, rimborsi, account Connect, verifica degli organizzatori, saldi e accrediti secondo il ruolo applicabile e la propria informativa. Stripe può chiedere direttamente ulteriori informazioni per obblighi normativi e di sicurezza.",
            "I dati possono inoltre essere comunicati a consulenti professionali, soggetti coinvolti nella gestione di reclami o contestazioni, personale autorizzato e autorità pubbliche nei casi previsti dalla legge. I dati personali non vengono venduti.",
          ],
        },
        {
          title: "7. Trasferimenti internazionali",
          paragraphs: [
            "Alcuni fornitori possono trattare dati fuori dallo Spazio economico europeo. In tali casi il trasferimento avviene sulla base di una decisione di adeguatezza o di altre garanzie previste dagli articoli 44 e seguenti del GDPR, incluse, quando applicabili, clausole contrattuali standard e misure supplementari.",
          ],
        },
        {
          title: "8. Conservazione",
          paragraphs: [
            "I dati dell’account e del profilo sono conservati finché l’account rimane attivo. Eventi, prenotazioni, notifiche e comunicazioni sono conservati per il tempo necessario a fornire il servizio, gestire eventi futuri o conclusi e applicare i cicli di archiviazione e cancellazione del sistema.",
            "Ordini, pagamenti, rimborsi, accrediti e dati collegati possono essere conservati anche dopo la cancellazione dell’account per i periodi richiesti dalla normativa fiscale, contabile e antiriciclaggio e per gestire frodi, contestazioni, chargeback o difendere diritti. Quando possibile, i dati non più necessari all’identificazione diretta sono minimizzati o resi non direttamente identificativi.",
            "Log di sicurezza e backup sono conservati per periodi limitati secondo le esigenze di sicurezza e i cicli tecnici dei fornitori, quindi cancellati o sovrascritti.",
          ],
        },
        {
          title: "9. Eliminazione dell’account",
          paragraphs: [
            "L’utente può avviare l’eliminazione dall’app. L’eliminazione può essere temporaneamente impedita quando l’organizzatore ha eventi attivi, pagamenti, rimborsi o obblighi ancora da completare.",
            "Dopo l’eliminazione vengono rimossi o dissociati i dati non più necessari, compresi profilo e immagini, fatti salvi i dati che HOLD S.R.L. o i fornitori devono conservare per legge, sicurezza, contabilità o tutela di diritti. La cancellazione dell’account MeetPuglia non determina automaticamente la cancellazione dei dati che Stripe deve conservare come autonomo titolare.",
          ],
        },
        {
          title: "10. Diritti dell’utente",
          paragraphs: [
            "Nei casi previsti dal GDPR, l’utente può chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opposizione, nonché revocare il consenso senza pregiudicare i trattamenti già effettuati. Le richieste possono essere inviate a Holdsrlinfo@gmail.com. HOLD S.R.L. può chiedere le informazioni necessarie a verificare l’identità e risponde nei termini di legge.",
            "L’utente può inoltre proporre reclamo al Garante per la protezione dei dati personali o all’autorità di controllo competente del proprio Stato membro.",
          ],
        },
        {
          title: "11. Minori",
          paragraphs: [
            "MeetPuglia non consente la creazione autonoma di un account a chi non ha compiuto 14 anni. Registrandosi, l’utente dichiara di avere almeno 14 anni. Eventuali requisiti più elevati per uno specifico evento restano sotto la responsabilità dell’organizzatore e devono essere indicati chiaramente.",
          ],
        },
        {
          title: "12. Decisioni automatizzate e marketing",
          paragraphs: [
            "MeetPuglia non adotta decisioni esclusivamente automatizzate che producano effetti giuridici o analogamente significativi e, nella versione attuale, non invia comunicazioni promozionali. Stripe può utilizzare sistemi automatizzati di prevenzione delle frodi secondo la propria informativa.",
          ],
        },
        {
          title: "13. Sicurezza e modifiche",
          paragraphs: [
            "HOLD S.R.L. adotta misure tecniche e organizzative adeguate al rischio per proteggere i dati personali. Nessun sistema può tuttavia garantire sicurezza assoluta.",
            "Questa informativa può essere aggiornata in caso di modifiche normative, organizzative o del servizio. La versione vigente sarà disponibile nell’app e le modifiche rilevanti saranno comunicate quando richiesto.",
          ],
        },
      ]}
    />
  );
}
