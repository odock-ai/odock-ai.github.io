---
{
  "slug": "what-to-log-monitor-and-trace-in-production-llm-apps",
  "category": "AI Observability",
  "title": "What to Log, Monitor, and Trace in Production LLM Applications",
  "seoTitle": "LLM Observability: Logs, Metrics, and Traces",
  "description": "LLM observability needs more than request counts. Learn which metrics, logs, traces, and spend signals AI teams should centralize in the gateway.",
  "excerpt": "When AI traffic crosses providers, tools, tenants, and teams, observability has to connect quality, latency, cost, safety, and routing decisions.",
  "publishedAt": "2026-04-25",
  "updatedAt": "2026-04-27",
  "readingTime": "8 min",
  "keywords": [
    "llm observability",
    "ai gateway logs",
    "llm tracing",
    "token spend monitoring",
    "ai production metrics",
    "odock observability"
  ],
  "heroEyebrow": "Observability",
  "intro": "Production LLM systems fail in ways that ordinary HTTP dashboards do not explain. A request can return 200 OK and still be too slow, too expensive, routed to the wrong model, blocked by a guardrail, or unusable for the customer. Teams need observability that understands AI traffic, and the gateway is the right place to collect it because every model and tool call passes through the same control point.",
  "keyTakeaways": [
    "LLM observability should connect latency, provider choice, token spend, guardrail outcomes, and tenant identity.",
    "Logs must be useful without exposing secrets, raw credentials, or unnecessary customer data.",
    "Odock is positioned as the central place to monitor AI traffic across providers, MCP servers, plugins, budgets, and policies."
  ],
  "faq": [
    {
      "question": "Should teams log every prompt and response?",
      "answer": "Not by default. Raw prompt and response logs can create privacy and security risk. Many teams need configurable redaction, sampling, retention controls, and metadata-first observability."
    },
    {
      "question": "Which LLM metric matters most?",
      "answer": "There is no single metric. Latency, error rate, spend, token volume, guardrail blocks, routing decisions, and customer-level usage all answer different operational questions."
    },
    {
      "question": "Why collect observability at the gateway?",
      "answer": "The gateway has consistent visibility across providers and applications. That makes it a better place to standardize metrics and audit trails than each app service."
    }
  ],
  "relatedSlugs": [
    "how-to-design-multi-provider-llm-routing-and-failover",
    "prompt-injection-data-leakage-and-llm-security-guardrails",
    "how-to-control-llm-costs-with-virtual-api-keys-budgets-and-quotas"
  ],
  "cta": {
    "title": "Need one observability layer for AI traffic?",
    "description": "Odock helps teams centralize routing, spend, guardrails, and provider telemetry behind one gateway instead of rebuilding visibility in every service.",
    "primaryLabel": "Request a demo",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "Explore the GitHub",
    "secondaryHref": "https://github.com/odock-ai"
  },
  "locales": {
    "fr": {
      "category": "Observabilité IA",
      "title": "Que logger, monitorer et tracer dans les applications LLM en production",
      "seoTitle": "Observabilité LLM : logs, métriques et traces",
      "description": "L’observabilité LLM exige plus que des compteurs de requêtes. Découvrez les métriques, logs, traces et signaux de dépense que les équipes IA doivent centraliser dans le gateway.",
      "excerpt": "Quand le trafic IA traverse providers, outils, tenants et équipes, l’observabilité doit relier qualité, latency, coût, sécurité et décisions de routing.",
      "heroEyebrow": "Observabilité",
      "intro": "Les systèmes LLM en production échouent d’une manière que les dashboards HTTP classiques n’expliquent pas. Une requête peut renvoyer 200 OK et rester trop lente, trop coûteuse, routée vers le mauvais model, bloquée par un guardrail ou inutilisable pour le client. Les équipes ont besoin d’une observabilité qui comprend le trafic IA, et le gateway est le bon endroit pour la collecter, car chaque appel à un model ou à un outil passe par le même point de contrôle.",
      "keyTakeaways": [
        "L’observabilité LLM doit relier latency, choix du provider, dépense en tokens, résultats des guardrails et identité du tenant.",
        "Les logs doivent rester utiles sans exposer de secrets, d’identifiants bruts ni de données client inutiles.",
        "Odock se positionne comme l’endroit central pour monitorer le trafic IA à travers providers, serveurs MCP, plugins, budgets et politiques."
      ],
      "cta": {
        "title": "Besoin d’une couche d’observabilité unique pour le trafic IA ?",
        "description": "Odock aide les équipes à centraliser routing, dépenses, guardrails et télémétrie provider derrière un seul gateway au lieu de reconstruire la visibilité dans chaque service.",
        "primaryLabel": "Demander une démo",
        "secondaryLabel": "Explorer le GitHub"
      },
      "readingTime": "8 min",
      "keywords": [
        "llm observability",
        "ai gateway logs",
        "llm tracing",
        "token spend monitoring",
        "ai production metrics",
        "odock observability"
      ],
      "faq": [
        {
          "question": "Faut-il journaliser tous les prompts et réponses ?",
          "answer": "Pas par défaut. Les logs bruts de prompts et de réponses peuvent créer des risques de confidentialité et de sécurité. Beaucoup d’équipes ont besoin de masquage configurable, d’échantillonnage, de contrôles de rétention et d’une observabilité centrée d’abord sur les métadonnées."
        },
        {
          "question": "Quelle métrique LLM compte le plus ?",
          "answer": "Il n’existe pas de métrique unique. Latency, taux d’erreur, dépenses, volume de tokens, blocages de guardrails, décisions de routing et usage par client répondent tous à des questions opérationnelles différentes."
        },
        {
          "question": "Pourquoi collecter l’observabilité dans la passerelle ?",
          "answer": "Le gateway offre une visibilité cohérente sur les providers et les applications. C’est donc un meilleur endroit pour standardiser les métriques et les pistes d’audit que chaque service applicatif."
        }
      ]
    },
    "it": {
      "category": "Osservabilità AI",
      "title": "Cosa loggare, monitorare e tracciare nelle applicazioni LLM in produzione",
      "seoTitle": "Osservabilità LLM: log, metriche e tracce",
      "description": "L’osservabilità LLM richiede più dei conteggi delle richieste. Scopri quali metriche, log, trace e segnali di spesa i team AI dovrebbero centralizzare nel gateway.",
      "excerpt": "Quando il traffico AI attraversa provider, strumenti, tenant e team, l’osservabilità deve collegare qualità, latency, costo, sicurezza e decisioni di routing.",
      "heroEyebrow": "Osservabilità",
      "intro": "I sistemi LLM in produzione falliscono in modi che le dashboard HTTP ordinarie non spiegano. Una richiesta può restituire 200 OK ed essere comunque troppo lenta, troppo costosa, instradata verso il model sbagliato, bloccata da un guardrail o inutilizzabile per il cliente. I team hanno bisogno di un’osservabilità che comprenda il traffico AI, e il gateway è il posto giusto per raccoglierla perché ogni chiamata a model e tool passa dallo stesso punto di controllo.",
      "keyTakeaways": [
        "L’osservabilità LLM dovrebbe collegare latency, scelta del provider, spesa in token, risultati dei guardrail e identità del tenant.",
        "I log devono essere utili senza esporre segreti, credenziali raw o dati cliente non necessari.",
        "Odock si posiziona come il punto centrale per monitorare il traffico AI tra provider, server MCP, plugin, budget e policy."
      ],
      "cta": {
        "title": "Ti serve un unico livello di osservabilità per il traffico AI?",
        "description": "Odock aiuta i team a centralizzare routing, spesa, guardrail e telemetria dei provider dietro un unico gateway, invece di ricostruire visibilità in ogni servizio.",
        "primaryLabel": "Richiedi una demo",
        "secondaryLabel": "Esplora GitHub"
      },
      "readingTime": "8 min",
      "keywords": [
        "llm observability",
        "ai gateway logs",
        "llm tracing",
        "token spend monitoring",
        "ai production metrics",
        "odock observability"
      ],
      "faq": [
        {
          "question": "Bisogna loggare ogni prompt e risposta?",
          "answer": "Non di default. I log raw di prompt e risposte possono creare rischi di privacy e sicurezza. Molti team hanno bisogno di redaction configurabile, sampling, controlli di retention e osservabilità basata prima di tutto sui metadati."
        },
        {
          "question": "Quale metrica LLM conta di più?",
          "answer": "Non esiste una singola metrica. Latency, tasso di errore, spesa, volume di token, blocchi dei guardrail, decisioni di routing e utilizzo a livello cliente rispondono a domande operative diverse."
        },
        {
          "question": "Perché raccogliere osservabilità nel gateway?",
          "answer": "Il gateway ha visibilità coerente su provider e applicazioni. Questo lo rende un posto migliore per standardizzare metriche e audit trail rispetto a ogni singolo servizio applicativo."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## Why normal API monitoring is not enough

Traditional service monitoring tells you whether an endpoint is up, how long it took, and how many errors occurred. That is necessary, but it is not enough for AI workloads. An LLM request has business and policy context that generic HTTP metrics do not capture.

The same user action may fan out into a model call, an embedding lookup, a retrieval step, an MCP tool call, and a guardrail check. A successful response may still violate budget policy, use the wrong provider, or consume far more tokens than expected. Without AI-specific telemetry, teams see traffic but miss the reason it matters.

- Which tenant, team, project, or virtual API key created the request?
- Which provider and model handled it?
- How many input and output tokens were billed?
- Which guardrails ran, and what did they decide?
- Did routing use the preferred model or a fallback?
- Which plugin or MCP tool participated in the workflow?

## Metrics that should exist on day one

The first layer of observability should answer operational questions quickly. Is the system healthy? Are customers waiting too long? Is spend drifting? Are failures provider-specific or app-specific?

Teams should track request counts, error rates, timeout rates, token usage, spend, provider distribution, cache behavior, guardrail decisions, and latency percentiles. Averages are not enough because LLM workloads often hurt users at the tail. A p99 latency spike can turn an otherwise healthy feature into a bad experience.

Useful metrics are also dimensional. A total error rate is less useful than error rate by provider, model, endpoint, tenant, virtual key, and workload. The gateway can attach those dimensions consistently because it sees identity and routing context before the request leaves the organization.

## Logs should explain decisions without leaking secrets

AI logs need discipline. Too little detail makes incidents impossible to debug. Too much raw data can expose customer content, credentials, system prompts, or internal policy rules.

The safest default is metadata-first logging: request identity, provider, model, route decision, token counts, latency, guardrail status, plugin status, and error class. Raw prompts and responses should be controlled separately with redaction, sampling, tenant policy, and retention limits.

- Never log provider keys or forwarded authorization headers.
- Redact secrets before data reaches traces, spend logs, or dashboards.
- Prefer structured fields over free-form text blobs.
- Separate operational metadata from customer content.
- Make sensitive logging opt-in, scoped, and time-limited.

## Traces reveal where agent workflows actually spend time

As AI workflows become more agentic, a single user request can include several steps. The model may call a tool, retrieve documents, ask for another model completion, validate the result, and write output through a plugin.

Tracing makes that flow visible. Instead of seeing one slow endpoint, teams can see whether latency came from the model provider, a retrieval service, an MCP server, a guardrail callback, or a downstream tool. That distinction matters because each bottleneck has a different owner and a different fix.

Gateway-level traces also help during provider migrations. If a new route lowers model latency but increases retries or tool failures, traces can show the tradeoff before customers report it.

## How Odock fits the observability model

Odock is built as the control plane for AI traffic across providers, MCP servers, plugins, budgets, and guardrails. That makes it the right place to normalize observability data. Instead of each service inventing its own logging shape, Odock can provide one consistent view of how AI requests move through the system.

The value is not only dashboards. Centralized observability supports better incident response, cost governance, security audits, model evaluations, and customer support. When a customer asks why a request was blocked, slowed, or expensive, the answer should not require searching through five unrelated systems.

## The questions your observability should answer

A practical observability setup should help teams answer these questions without a custom investigation every time:

- Which customers are driving the most token spend?
- Which provider is causing tail latency this week?
- Which model routes are falling back most often?
- Which guardrail rules are blocking real users?
- Which tools are slow, flaky, or overused?
- Which virtual keys are close to their budget or quota?

When those answers live at the gateway, AI operations become less reactive. Teams can see pressure building before it becomes an incident.

<!-- locale:fr -->
## Pourquoi le monitoring API classique ne suffit pas

Le monitoring de services traditionnel vous indique si un endpoint est disponible, combien de temps il a pris et combien d’erreurs se sont produites. C’est nécessaire, mais insuffisant pour les workloads IA. Une requête LLM porte un contexte métier et de politique que les métriques HTTP génériques ne capturent pas.

La même action utilisateur peut se déployer en un appel de model, une recherche d’embedding, une étape de retrieval, un appel d’outil MCP et une vérification de guardrail. Une réponse réussie peut tout de même enfreindre une politique de budget, utiliser le mauvais provider ou consommer beaucoup plus de tokens que prévu. Sans télémétrie spécifique à l’AI, les équipes voient le trafic mais manquent la raison pour laquelle il compte.

- Quel tenant, quelle équipe, quel projet ou quelle virtual key a créé la requête ?
- Quel provider et quel model l’ont traitée ?
- Combien de tokens d’entrée et de sortie ont été facturés ?
- Quels guardrails ont été exécutés, et qu’ont-ils décidé ?
- Le routing a-t-il utilisé le model préféré ou un fallback ?
- Quel plugin ou outil MCP a participé au workflow ?

## Les métriques à avoir dès le premier jour

La première couche d’observabilité doit répondre rapidement aux questions opérationnelles. Le système est-il sain ? Les clients attendent-ils trop longtemps ? Les dépenses dérivent-elles ? Les échecs sont-ils liés à un provider ou à une application ?

Les équipes doivent suivre le nombre de requêtes, les taux d’erreur, les taux de timeout, l’usage des tokens, les dépenses, la distribution par provider, le comportement du cache, les décisions de guardrails et les percentiles de latency. Les moyennes ne suffisent pas, car les workloads LLM dégradent souvent l’expérience en queue de distribution. Un pic de latency p99 peut transformer une fonctionnalité par ailleurs saine en mauvaise expérience.

Les métriques utiles sont aussi dimensionnelles. Un taux d’erreur total est moins utile qu’un taux d’erreur par provider, model, endpoint, tenant, virtual key et workload. Le gateway peut attacher ces dimensions de façon cohérente, car il voit l’identité et le contexte de routing avant que la requête quitte l’organisation.

## Les logs doivent expliquer sans exposer les secrets

Les logs IA exigent de la discipline. Trop peu de détail rend les incidents impossibles à déboguer. Trop de données brutes peut exposer du contenu client, des credentials, des prompts système ou des règles de politique internes.

Le default le plus sûr est un logging d’abord basé sur les métadonnées : identité de la requête, provider, model, décision de route, compteurs de tokens, latency, statut des guardrails, statut des plugins et classe d’erreur. Les prompts et réponses bruts doivent être contrôlés séparément avec redaction, sampling, politique par tenant et limites de rétention.

- Ne loggez jamais les clés provider ni les headers d’autorisation transférés.
- Masquez les secrets avant que les données atteignent les traces, les logs de dépenses ou les dashboards.
- Préférez les champs structurés aux blobs de texte libre.
- Séparez les métadonnées opérationnelles du contenu client.
- Rendez le logging sensible opt-in, limité en périmètre et dans le temps.

## Les traces montrent où les workflows agents passent du temps

À mesure que les workflows IA deviennent plus agentiques, une seule requête utilisateur peut inclure plusieurs étapes. Le model peut appeler un outil, récupérer des documents, demander une autre complétion de model, valider le résultat puis écrire la sortie via un plugin.

Le tracing rend ce flux visible. Au lieu de voir un seul endpoint lent, les équipes peuvent déterminer si la latency vient du model provider, d’un service de retrieval, d’un serveur MCP, d’un callback de guardrail ou d’un outil en aval. Cette distinction compte, car chaque goulot d’étranglement a un propriétaire différent et une correction différente.

Les traces au niveau du gateway aident aussi pendant les migrations de providers. Si une nouvelle route réduit la latency du model mais augmente les retries ou les échecs d’outils, les traces peuvent montrer ce compromis avant que les clients ne le signalent.

## Comment Odock s’inscrit dans ce modèle

Odock est conçu comme le control plane du trafic IA à travers providers, serveurs MCP, plugins, budgets et guardrails. Cela en fait le bon endroit pour normaliser les données d’observabilité. Au lieu que chaque service invente son propre format de logging, Odock peut fournir une vue cohérente de la façon dont les requêtes IA circulent dans le système.

La valeur ne se limite pas aux dashboards. L’observabilité centralisée améliore la réponse aux incidents, la gouvernance des coûts, les audits de sécurité, les évaluations de models et le support client. Quand un client demande pourquoi une requête a été bloquée, ralentie ou coûteuse, la réponse ne devrait pas exiger de chercher dans cinq systèmes sans lien entre eux.

## Les questions auxquelles votre observabilité doit répondre

Une configuration d’observabilité pragmatique doit aider les équipes à répondre à ces questions sans enquête sur mesure à chaque fois :

- Quels clients génèrent le plus de dépenses en tokens ?
- Quel provider cause la tail latency cette semaine ?
- Quelles routes de model basculent le plus souvent en fallback ?
- Quelles règles de guardrail bloquent de vrais utilisateurs ?
- Quels outils sont lents, instables ou trop utilisés ?
- Quelles virtual keys approchent de leur budget ou de leur quota ?

Quand ces réponses vivent au niveau du gateway, les opérations IA deviennent moins réactives. Les équipes peuvent voir la pression monter avant qu’elle ne devienne un incident.

<!-- locale:it -->
## Perché il monitoring API classico non basta

Il monitoring tradizionale dei servizi ti dice se un endpoint è attivo, quanto tempo ha impiegato e quanti errori si sono verificati. È necessario, ma non basta per i workload AI. Una richiesta LLM contiene contesto di business e di policy che le metriche HTTP generiche non catturano.

La stessa azione utente può espandersi in una chiamata a un model, una ricerca di embedding, uno step di retrieval, una chiamata a un tool MCP e un controllo di guardrail. Una risposta riuscita può comunque violare una policy di budget, usare il provider sbagliato o consumare molti più token del previsto. Senza telemetria specifica per l’AI, i team vedono il traffico ma perdono il motivo per cui conta.

- Quale tenant, team, progetto o virtual key ha creato la richiesta?
- Quale provider e quale model l’hanno gestita?
- Quanti token di input e output sono stati fatturati?
- Quali guardrail sono stati eseguiti, e cosa hanno deciso?
- Il routing ha usato il model preferito o un fallback?
- Quale plugin o tool MCP ha partecipato al workflow?

## Metriche da avere dal primo giorno

Il primo livello di osservabilità dovrebbe rispondere rapidamente alle domande operative. Il sistema è sano? I clienti aspettano troppo? La spesa sta deviando? I fallimenti sono specifici di un provider o di un’app?

I team dovrebbero tracciare conteggi delle richieste, tassi di errore, tassi di timeout, utilizzo dei token, spesa, distribuzione per provider, comportamento della cache, decisioni dei guardrail e percentili di latency. Le medie non bastano, perché i workload LLM spesso penalizzano gli utenti nella coda della distribuzione. Un picco di latency p99 può trasformare una funzionalità altrimenti sana in una cattiva esperienza.

Le metriche utili sono anche dimensionali. Un tasso di errore totale è meno utile di un tasso di errore per provider, model, endpoint, tenant, virtual key e workload. Il gateway può associare queste dimensioni in modo coerente perché vede identità e contesto di routing prima che la richiesta lasci l’organizzazione.

## I log devono spiegare senza esporre segreti

I log AI richiedono disciplina. Troppo poco dettaglio rende impossibile debuggare gli incidenti. Troppi dati raw possono esporre contenuti dei clienti, credenziali, prompt di sistema o regole di policy interne.

Il default più sicuro è un logging basato prima di tutto sui metadati: identità della richiesta, provider, model, decisione di route, conteggi dei token, latency, stato dei guardrail, stato dei plugin e classe di errore. Prompt e risposte raw dovrebbero essere controllati separatamente con redaction, sampling, policy per tenant e limiti di retention.

- Non loggare mai chiavi provider o header di autorizzazione inoltrati.
- Redigi i segreti prima che i dati arrivino a trace, log di spesa o dashboard.
- Preferisci campi strutturati a blob di testo libero.
- Separa i metadati operativi dal contenuto del cliente.
- Rendi il logging sensibile opt-in, circoscritto e limitato nel tempo.

## Le tracce mostrano dove i workflow agentici spendono tempo

Man mano che i workflow AI diventano più agentici, una singola richiesta utente può includere diversi step. Il model può chiamare un tool, recuperare documenti, chiedere un’altra completion a un model, validare il risultato e scrivere l’output tramite un plugin.

Il tracing rende visibile questo flusso. Invece di vedere un solo endpoint lento, i team possono capire se la latency viene dal model provider, da un servizio di retrieval, da un server MCP, da un callback di guardrail o da un tool downstream. Questa distinzione conta, perché ogni collo di bottiglia ha un owner diverso e una soluzione diversa.

Le trace a livello gateway aiutano anche durante le migrazioni di provider. Se una nuova route riduce la latency del model ma aumenta i retry o i fallimenti dei tool, le trace possono mostrare il tradeoff prima che lo segnalino i clienti.

## Come Odock entra nel modello

Odock è costruito come control plane per il traffico AI tra provider, server MCP, plugin, budget e guardrail. Questo lo rende il posto giusto per normalizzare i dati di osservabilità. Invece di lasciare che ogni servizio inventi il proprio formato di logging, Odock può offrire una vista coerente di come le richieste AI si muovono nel sistema.

Il valore non è solo nelle dashboard. L’osservabilità centralizzata supporta una migliore risposta agli incidenti, governance dei costi, audit di sicurezza, valutazioni dei model e customer support. Quando un cliente chiede perché una richiesta è stata bloccata, rallentata o è risultata costosa, la risposta non dovrebbe richiedere ricerche in cinque sistemi scollegati.

## Le domande a cui l’osservabilità deve rispondere

Un setup di osservabilità pratico dovrebbe aiutare i team a rispondere a queste domande senza un’indagine custom ogni volta:

- Quali clienti generano la maggiore spesa in token?
- Quale provider sta causando tail latency questa settimana?
- Quali route di model finiscono più spesso in fallback?
- Quali regole di guardrail stanno bloccando utenti reali?
- Quali tool sono lenti, instabili o sovrautilizzati?
- Quali virtual key sono vicine al budget o alla quota?

Quando queste risposte vivono nel gateway, le operazioni AI diventano meno reattive. I team possono vedere la pressione crescere prima che diventi un incidente.
