---
{
  "slug": "agent-supervision-runtime-oversight-for-enterprise-ai-agents",
  "category": "AI Governance",
  "title": "Agent Supervision Became a Category: Who Did What, With Which Data, at What Cost",
  "seoTitle": "AI Agent Supervision: Runtime Oversight, Evidence, and Cost Control",
  "description": "Classie Supervise, Gurucul AI Risk and Response, and Zscaler's Agentic SOC turned AI agent supervision into a product category in autumn 2026. Here are the five questions supervision must answer, and how a gateway answers them inline instead of after the fact.",
  "excerpt": "Agents moved into Gmail, Dynamics, Webex, and Jira in October 2026, and a new category followed them: agent supervision. The useful version does not just watch; it decides before the action and leaves evidence for every step.",
  "publishedAt": "2026-10-13",
  "updatedAt": "2026-10-13",
  "readingTime": "9 min",
  "keywords": [
    "AI agent supervision",
    "agent oversight",
    "agentic AI governance",
    "AI agent monitoring",
    "runtime enforcement AI",
    "AI agent cost control",
    "AI audit trail",
    "human in the loop AI",
    "agentic SOC"
  ],
  "heroEyebrow": "Agent oversight",
  "intro": "In the first two weeks of October 2026, agents moved into the tools people use all day: Google's Gemini workplace agent in Gmail, Drive, Docs, and Calendar; Microsoft's Work IQ connecting Copilot agents to live Dynamics 365 data; Webex agents joining meetings; SAP Joule becoming an agentic work layer. A new product category arrived alongside them. Classie shipped Supervise to track, control, and account for enterprise agents in real time. Gurucul launched AI Risk and Response. Zscaler's Agentic SOC framed agent oversight as a core security requirement. This article distils what agent supervision has to answer, and why the answers are strongest when they come from the gateway every agent call already passes through.",
  "keyTakeaways": [
    "Agent supervision is now a product category: Classie Supervise (October 1, 2026), Gurucul AI Risk and Response (September 24, 2026), and Zscaler's Agentic SOC (September 9, 2026) all target real-time visibility and control of AI agents.",
    "Supervision comes down to five questions: who initiated the action, what the agent did, what data it touched, what it cost, and whether it can be stopped.",
    "Observing after the fact answers the first four. Only an inline control point answers the fifth before damage is done, and it is also the only place budgets can be enforced before money is spent.",
    "Odock answers all five at the gateway: virtual key principals and agent identity headers, usage records and flow traces, SafetySec and MCP payload filters, budgets reserved before the call, and Abort nodes, approval gates, loop ceilings, and key revocation.",
    "Supervision tools and gateways are complementary: the gateway enforces and produces evidence; supervision, SIEM, and SOC platforms consume it through plugins and webhooks."
  ],
  "faq": [
    {
      "question": "What is AI agent supervision?",
      "answer": "Agent supervision is the runtime oversight of AI agents: recording who initiated each agent action, what the agent did, which data it accessed, what it cost, and enforcing policy, including stopping or escalating actions, while the agent runs rather than in a quarterly review."
    },
    {
      "question": "How is agent supervision different from LLM observability?",
      "answer": "LLM observability measures requests: latency, tokens, errors. Agent supervision adds identity, delegation, tool actions, data access, cost accountability, and the ability to intervene. It is closer to a security and governance function than a performance one."
    },
    {
      "question": "Why enforce at the gateway instead of only monitoring?",
      "answer": "A monitor sees an action after it happens. A gateway sits in the path of every model and MCP tool call, so it can deny, redact, re-route, require approval, or stop a loop before the upstream call executes, and it can reserve budget before spend is committed."
    },
    {
      "question": "Does Odock replace supervision or SOC platforms?",
      "answer": "No. Odock is the enforcement and evidence point. Its plugins and flows can forward decisions and usage evidence to SIEM, SOC, and supervision tools, for example with the built-in incident response fan-out flow template, so those platforms get clean, attributed data."
    },
    {
      "question": "How do I identify individual agents rather than applications?",
      "answer": "Issue a virtual API key per agent or workload, and require agent identity headers. Odock's built-in Agent identity and loop ceiling flow template rejects agent requests without x-odock-agent-id and x-odock-agent-iteration headers and stops agents that exceed an iteration limit."
    }
  ],
  "relatedSlugs": [
    "from-chatbots-to-delegated-work-why-agentic-ai-needs-a-runtime-control-plane",
    "ai-agent-identity-and-non-human-identity-security-in-2026",
    "shadow-ai-2026-how-to-govern-unsanctioned-ai-tool-use",
    "what-to-log-monitor-and-trace-in-production-llm-apps"
  ],
  "cta": {
    "title": "Supervise agents where they act",
    "description": "Odock attributes, inspects, budgets, and can stop every model and MCP tool call your agents make, and records the evidence with one request id.",
    "primaryLabel": "Talk to the team",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "Read the security docs",
    "secondaryHref": "https://docs.odock.ai/docs/security-and-guardrails/"
  },
  "locales": {
    "fr": {
      "category": "Gouvernance IA",
      "title": "La supervision d'agents devient une catégorie : qui a fait quoi, avec quelles données, pour quel coût",
      "seoTitle": "Supervision des agents IA : contrôle runtime, preuves et maîtrise des coûts",
      "description": "Classie Supervise, Gurucul AI Risk and Response et l'Agentic SOC de Zscaler ont fait de la supervision des agents IA une catégorie de produits à l'automne 2026. Voici les cinq questions auxquelles la supervision doit répondre, et comment une gateway y répond en ligne plutôt qu'après coup.",
      "excerpt": "Les agents sont entrés dans Gmail, Dynamics, Webex et Jira en octobre 2026, et une nouvelle catégorie les a suivis : la supervision d'agents. La version utile ne se contente pas d'observer ; elle décide avant l'action et laisse une preuve à chaque étape.",
      "heroEyebrow": "Supervision des agents",
      "intro": "Au cours des deux premières semaines d'octobre 2026, les agents sont entrés dans les outils utilisés toute la journée : l'agent de travail Gemini de Google dans Gmail, Drive, Docs et Agenda ; Work IQ de Microsoft qui connecte les agents Copilot aux données live de Dynamics 365 ; des agents Webex qui rejoignent les réunions ; SAP Joule qui devient une couche de travail agentique. Une nouvelle catégorie de produits est arrivée avec eux. Classie a lancé Supervise pour suivre, contrôler et rendre compte des agents d'entreprise en temps réel. Gurucul a lancé AI Risk and Response. L'Agentic SOC de Zscaler a présenté la supervision des agents comme une exigence de sécurité centrale. Cet article résume ce à quoi la supervision d'agents doit répondre, et pourquoi les réponses sont les plus solides quand elles viennent de la gateway par laquelle passe déjà chaque appel d'agent.",
      "keyTakeaways": [
        "La supervision d'agents est désormais une catégorie de produits : Classie Supervise (1er octobre 2026), Gurucul AI Risk and Response (24 septembre 2026) et l'Agentic SOC de Zscaler (9 septembre 2026) visent tous la visibilité et le contrôle en temps réel des agents IA.",
        "La supervision se résume à cinq questions : qui a initié l'action, ce que l'agent a fait, quelles données il a touchées, combien cela a coûté et si on peut l'arrêter.",
        "L'observation après coup répond aux quatre premières. Seul un point de contrôle en ligne répond à la cinquième avant les dégâts, et c'est aussi le seul endroit où appliquer les budgets avant que l'argent ne soit dépensé.",
        "Odock répond aux cinq dans la gateway : principals des virtual keys et headers d'identité agent, usage records et traces de flow, SafetySec et filtres de payload MCP, budgets réservés avant l'appel, et nœuds Abort, gates d'approbation, plafonds de boucles et révocation de clés.",
        "Outils de supervision et gateway sont complémentaires : la gateway applique et produit les preuves ; les plateformes de supervision, SIEM et SOC les consomment via plugins et webhooks."
      ],
      "cta": {
        "title": "Supervisez les agents là où ils agissent",
        "description": "Odock attribue, inspecte, budgète et peut arrêter chaque appel de modèle et d'outil MCP de vos agents, et enregistre les preuves avec un même request id.",
        "primaryLabel": "Parler à l'équipe",
        "secondaryLabel": "Lire la doc sécurité"
      },
      "readingTime": "9 min",
      "keywords": [
        "supervision agents IA",
        "contrôle des agents IA",
        "gouvernance IA agentique",
        "monitoring agents IA",
        "application runtime IA",
        "maîtrise des coûts agents IA",
        "piste d'audit IA",
        "human in the loop"
      ],
      "faq": [
        {
          "question": "Qu'est-ce que la supervision d'agents IA ?",
          "answer": "La supervision d'agents est le contrôle runtime des agents IA : enregistrer qui a initié chaque action, ce que l'agent a fait, quelles données il a consultées, ce que cela a coûté, et appliquer la policy, y compris arrêter ou escalader des actions, pendant que l'agent s'exécute plutôt que lors d'une revue trimestrielle."
        },
        {
          "question": "En quoi la supervision d'agents diffère-t-elle de l'observabilité LLM ?",
          "answer": "L'observabilité LLM mesure les requêtes : latence, tokens, erreurs. La supervision d'agents ajoute l'identité, la délégation, les actions d'outils, l'accès aux données, la responsabilité des coûts et la capacité d'intervenir. Elle relève davantage de la sécurité et de la gouvernance que de la performance."
        },
        {
          "question": "Pourquoi appliquer dans la gateway plutôt que seulement surveiller ?",
          "answer": "Un outil de monitoring voit une action après qu'elle a eu lieu. Une gateway est sur le chemin de chaque appel de modèle et d'outil MCP : elle peut refuser, masquer, re-router, exiger une approbation ou stopper une boucle avant l'appel upstream, et réserver le budget avant que la dépense ne soit engagée."
        },
        {
          "question": "Odock remplace-t-il les plateformes de supervision ou de SOC ?",
          "answer": "Non. Odock est le point d'application et de preuve. Ses plugins et flows peuvent transmettre décisions et preuves d'usage aux outils SIEM, SOC et de supervision, par exemple avec le template de flow intégré d'incident response fan-out, pour que ces plateformes reçoivent des données propres et attribuées."
        },
        {
          "question": "Comment identifier chaque agent plutôt que chaque application ?",
          "answer": "Émettez une virtual API key par agent ou workload et exigez des headers d'identité agent. Le template de flow intégré Agent identity and loop ceiling d'Odock rejette les requêtes d'agent sans headers x-odock-agent-id et x-odock-agent-iteration et arrête les agents qui dépassent une limite d'itérations."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## Agents moved into everyday work, and oversight followed

October 2026 is the month agents stopped being a separate product and became a feature of the tools people already use. Google introduced a Gemini workplace agent that works across Gmail, Drive, Docs, and Calendar. Microsoft began rolling out Work IQ in preview, connecting Copilot and autonomous agents to live Dynamics 365 and Power Platform data. Cisco let agents join Webex spaces, meetings, and calls to carry out multistep work. SAP expanded Joule into an agentic work layer.

Every one of those launches widens what an agent can read and do inside a company. And in the same weeks, a new category of products appeared to watch them:

- **Classie Supervise**, generally available on October 1, 2026, monitors sanctioned and unsanctioned agents as they run and enforces policy in real time. Its runtime transcript records who initiated the activity, what the agent did, what data it accessed, what it cost, and the chain of custody, with rules enforced inline through Open Policy Agent.
- **Gurucul AI Risk and Response**, announced September 24, 2026, connects AI activity from Claude, Gemini, ChatGPT, Azure AI Foundry, and Microsoft 365 Copilot to identity data for detection and response. Its feature for blocking risky AI interactions is still in preview.
- **Zscaler's Agentic SOC**, launched September 9, 2026, was read by analysts as the signal that agent oversight has moved from startup niche to enterprise requirement.

The urgency is real. Coverage of the Zscaler launch cited SailPoint's finding that 79% of organisations deploy AI agents but only 2% have the identity security to protect them, and Gartner's prediction that over 40% of agentic AI projects will be cancelled by 2027, largely over security and governance failures.

## The five questions every supervision tool is trying to answer

Strip away the vendor language and agent supervision comes down to five questions. Classie's runtime transcript lists almost exactly these:

1. **Who initiated it?** Which person, team, workload, or other agent started this chain of actions?
2. **What did it do?** Which models did it call, which tools, with what outcome?
3. **What data did it touch?** What left the boundary, what came back, what was redacted?
4. **What did it cost?** In tokens, in money, and against which budget?
5. **Can we stop it?** Before the action, not after the incident report.

Most monitoring answers the first four after the fact. The fifth is different: it can only be answered by something in the path of the action. And question four has the same property in practice, because a cost you learn about from an invoice is a cost you can no longer prevent.

## Why the answers belong in the path

Agents now spend money and take actions through two kinds of calls: model calls and tool calls. If both pass through one gateway, the gateway is the only component that sees every step with full context, *before* the upstream system executes it.

That changes what supervision can do:

- **Deny instead of alert.** A tool call outside the agent's grant never reaches the MCP server.
- **Redact instead of report.** Sensitive values are removed before the prompt leaves, not discovered in a log review.
- **Reserve instead of reconcile.** Budget is reserved before the provider call, so concurrent agents cannot overspend a window.
- **Pause instead of post-mortem.** High-impact actions wait for an approval decision, and fail closed if the approver is unavailable.

The cost dimension is not secondary. Gartner warned in August 2026 that inference costs for agentic workflows will rise more than fivefold over two years even as token prices fall, and that advanced reasoning agents can cost up to 150 times more per task than basic chatbots. A supervision programme that cannot cap spend in real time is only half a programme.

## How Odock answers the five questions

[![Diagram mapping the five agent supervision questions to Odock controls: virtual API key principals, usage records and flow traces, SafetySec and semantic filters, budgets and quotas, and abort, approval gate and loop ceiling, tied together by one gateway request id](/blog/agent-supervision-five-questions.svg "Every supervision answer comes from the same request path, with the same request id.")](/blog/agent-supervision-five-questions.svg)

### Who initiated it

Every call to Odock carries a **virtual API key**, and every key resolves to a principal: organisation, optional team, optional user, and the key itself. Issue one key per agent or workload rather than one per application, and the "who" stops being a guess.

Agents that act on behalf of others need more than a key. Odock's built-in **Agent identity and loop ceiling** flow template requires `x-odock-agent-id` and `x-odock-agent-iteration` headers on agent traffic and rejects requests without them, so every step in a chain is attributed to a named agent and a position in its run.

### What it did

Odock writes a **usage record** for every gateway call: principal, resolved provider and model, HTTP status, latency, gateway request id, tokens, cost, the routing trace showing which candidates were attempted, and the plugin and safety outcomes attached to the call. Prompts, completions, and credentials are never written into a usage record.

MCP tool calls get **MCP usage records** with server, tool, status, and cost. Every **Flow Studio** run leaves a node-by-node trace (node, outcome, duration) attached to the request evidence. Metrics, logs, and traces flow into the LGTM observability stack through OpenTelemetry.

### What data it touched

Three layers handle data before and after the upstream call:

- **SafetySec** detects prompt injection and jailbreak patterns, redacts secrets and PII-like values in requests and responses, and detects data leakage in model output.
- **MCP semantic filters** inspect tool-call payloads before execution, and **upstream auth injection** keeps tool credentials inside Odock so agents never handle them.
- **Plugins and flows** add organisation-specific handling: run a masking plugin before egress, or use the built-in **Block secrets in model output** template to stop API keys or private keys from reaching the caller.

### What it cost

**Budgets** apply to an organisation, team, user, or API key. Odock estimates each request's cost, reserves it against every matching budget before the upstream call, and settles the actual cost afterwards. When a window is exhausted the agent receives `402 budget_exceeded`. **Quotas** cap request and token counts the same way, and **routing** keeps agents on the cheapest approved model that works, with failover when a provider degrades.

### Can we stop it

This is where an inline gateway differs most from an observer:

- **Access grants and tool rules** stop unauthorised models and tools outright, with allowlists and blocklists per MCP server.
- **Abort nodes** in Flow Studio block a request with a status code and a clear message, at pre-route, pre-upstream, or post-upstream.
- The built-in **MCP external approval gate** template calls your policy or approval service before destructive tools and fails closed when approval is denied or unavailable.
- The **loop ceiling** stops agents that exceed their iteration limit before they spend more.
- **Key revocation and rotation** cut off a misbehaving agent immediately, without touching other workloads.

### Chain of custody

All of the above shares one gateway **request id**. The usage record, the MCP usage record, the flow trace, the SafetySec evidence, and the OpenTelemetry trace for the same step can be joined without guesswork. That is what turns a pile of logs into evidence an auditor or incident responder can follow.

## Gateway and supervision tools work together

None of this makes supervision or SOC platforms redundant. They correlate signals across identity, endpoints, SaaS, and networks that a gateway never sees. What they need from the AI layer is clean, attributed, real-time evidence, and an enforcement point that acts on their decisions.

Odock provides both directions:

- **Out:** the built-in **Incident response fan-out** template notifies security and SIEM concurrently for high-risk requests and every MCP tool invocation, after the caller gets its response. Audit and SIEM export plugins run in the asynchronous lane, so they never slow agents down.
- **In:** an approval or policy decision service, including one run by your supervision platform, can be called from a flow before high-impact actions.

## A 30-day supervision rollout

- **Week 1: inventory and identity.** Route agent traffic through Odock. Issue one virtual key per agent or workload. Revoke shared provider keys.
- **Week 2: observe.** Turn on SafetySec in observe mode, enable usage records review, and add the agent identity template in a pilot key's Automation tab.
- **Week 3: bound.** Set team and agent budgets, quotas, and the loop ceiling. Restrict MCP servers to allowlisted tools.
- **Week 4: intervene.** Add the external approval gate for destructive tools, switch SafetySec from observe to enforce where evidence supports it, and forward evidence to your SIEM or supervision platform.

Agent supervision is becoming a budget line and a board question. The organisations that answer it well will not be the ones with the most dashboards. They will be the ones where every agent action passes a point that knows who asked, checks what is allowed, protects the data, reserves the cost, and can say no, and where the record of all of that already exists when someone asks.

## Sources

- [VMblog, Classie launches Supervise to track, control and account for enterprise AI agents in real time, October 1, 2026](https://vmblog.com/news/classie-launches-supervise-to-track-control-and-account-for-enterprise-ai-agents-in-real-time/)
- [Help Net Security, Gurucul connects AI activity to identity data for faster threat response, September 24, 2026](https://www.helpnetsecurity.com/2026/09/24/gurucul-ai-risk-and-response/)
- [Forkast, Zscaler's Agentic SOC launch signals the category startups built is now an enterprise requirement, October 7, 2026](https://forkast.news/zscalers-agentic-soc-launch-signals-the-category-startups-built-is-now-an-enterprise-requirement)
- [Futurum, Google collapses enterprise AI into a single Gemini agent at Gemini at Work 2026](https://futurumgroup.com/insights/google-collapses-enterprise-ai-into-a-single-gemini-agent-at-gemini-at-work-2026/)
- [AI Agents Directory, AI Agents News Brief, October 6, 2026](https://aiagentsdirectory.com/news/ai-agents-news-brief-october-6-2026)
- [AI Agent Store, AI Agents News, week of October 11, 2026](https://aiagentstore.ai/ai-agent-news/this-week)
- [Computerworld, AI inference is getting cheaper, but your agents are getting more expensive, August 17, 2026](https://www.computerworld.com/article/4210786/ai-inference-is-getting-cheaper-but-your-agents-are-getting-more-expensive.html)
- [Odock security and guardrails](https://docs.odock.ai/docs/security-and-guardrails/)
- [Odock usage records](https://docs.odock.ai/docs/observability/usage-records/)
- [Odock MCP security](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
- [Odock Flow Studio](https://docs.odock.ai/docs/plugins/flow-studio/)

<!-- locale:fr -->
## Les agents sont entrés dans le travail quotidien, et la supervision a suivi

Octobre 2026 est le mois où les agents ont cessé d'être un produit à part pour devenir une fonction des outils déjà utilisés. Google a présenté un agent de travail Gemini qui opère dans Gmail, Drive, Docs et Agenda. Microsoft a commencé à déployer Work IQ en preview, qui connecte Copilot et les agents autonomes aux données live de Dynamics 365 et Power Platform. Cisco a permis aux agents de rejoindre espaces, réunions et appels Webex pour mener des tâches en plusieurs étapes. SAP a étendu Joule en couche de travail agentique.

Chacun de ces lancements élargit ce qu'un agent peut lire et faire dans une entreprise. Et dans les mêmes semaines, une nouvelle catégorie de produits est apparue pour les surveiller :

- **Classie Supervise**, disponible depuis le 1er octobre 2026, surveille les agents autorisés et non autorisés pendant leur exécution et applique la policy en temps réel. Son transcript runtime enregistre qui a initié l'activité, ce que l'agent a fait, quelles données il a consultées, ce que cela a coûté et la chaîne de traçabilité, avec des règles appliquées en ligne via Open Policy Agent.
- **Gurucul AI Risk and Response**, annoncé le 24 septembre 2026, relie l'activité IA de Claude, Gemini, ChatGPT, Azure AI Foundry et Microsoft 365 Copilot aux données d'identité pour la détection et la réponse. Sa fonction de blocage des interactions IA risquées est encore en preview.
- **L'Agentic SOC de Zscaler**, lancé le 9 septembre 2026, a été lu par les analystes comme le signal que la supervision des agents est passée de niche de startups à exigence d'entreprise.

L'urgence est réelle. La couverture du lancement de Zscaler cite l'étude de SailPoint selon laquelle 79 % des organisations déploient des agents IA mais seulement 2 % disposent de la sécurité d'identité pour les protéger, ainsi que la prévision de Gartner selon laquelle plus de 40 % des projets d'IA agentique seront annulés d'ici 2027, en grande partie à cause d'échecs de sécurité et de gouvernance.

## Les cinq questions auxquelles tout outil de supervision tente de répondre

Sans le vocabulaire marketing, la supervision d'agents se résume à cinq questions. Le transcript runtime de Classie en reprend presque exactement la liste :

1. **Qui l'a initié ?** Quelle personne, équipe, workload ou autre agent a lancé cette chaîne d'actions ?
2. **Qu'a-t-il fait ?** Quels modèles a-t-il appelés, quels outils, avec quel résultat ?
3. **Quelles données a-t-il touchées ?** Qu'est-ce qui est sorti du périmètre, qu'est-ce qui est revenu, qu'est-ce qui a été masqué ?
4. **Combien cela a-t-il coûté ?** En tokens, en argent, et sur quel budget ?
5. **Peut-on l'arrêter ?** Avant l'action, pas après le rapport d'incident.

La plupart des outils de monitoring répondent aux quatre premières après coup. La cinquième est différente : seul un composant placé sur le chemin de l'action peut y répondre. Et la quatrième a en pratique la même propriété, car un coût découvert sur une facture est un coût qu'on ne peut plus éviter.

## Pourquoi les réponses doivent venir du chemin de la requête

Les agents dépensent de l'argent et agissent désormais via deux types d'appels : les appels de modèles et les appels d'outils. Si les deux passent par une même gateway, celle-ci est le seul composant qui voit chaque étape avec tout son contexte, *avant* que le système upstream ne l'exécute.

Cela change ce que la supervision peut faire :

- **Refuser plutôt qu'alerter.** Un appel d'outil hors du grant de l'agent n'atteint jamais le serveur MCP.
- **Masquer plutôt que signaler.** Les valeurs sensibles sont retirées avant que le prompt ne sorte, pas découvertes lors d'une revue de logs.
- **Réserver plutôt que réconcilier.** Le budget est réservé avant l'appel provider, si bien que des agents concurrents ne peuvent pas dépasser une fenêtre.
- **Mettre en pause plutôt que faire un post-mortem.** Les actions à fort impact attendent une décision d'approbation et échouent fermées si l'approbateur est indisponible.

La dimension coût n'est pas secondaire. Gartner a averti en août 2026 que le coût d'inférence des workflows agentiques sera multiplié par plus de cinq en deux ans malgré la baisse du prix des tokens, et que les agents de raisonnement avancés peuvent coûter jusqu'à 150 fois plus par tâche qu'un chatbot basique. Un programme de supervision incapable de plafonner la dépense en temps réel n'est qu'un demi-programme.

## Comment Odock répond aux cinq questions

[![Schéma reliant les cinq questions de supervision d'agents aux contrôles Odock : principals des virtual API keys, usage records et traces de flow, SafetySec et filtres sémantiques, budgets et quotas, et abort, gate d'approbation et plafond de boucles, reliés par un même request id gateway](/blog/agent-supervision-five-questions-fr.svg "Chaque réponse de supervision vient du même chemin de requête, avec le même request id.")](/blog/agent-supervision-five-questions-fr.svg)

### Qui l'a initié

Chaque appel à Odock porte une **virtual API key**, et chaque clé correspond à un principal : organisation, équipe optionnelle, utilisateur optionnel et la clé elle-même. Émettez une clé par agent ou par workload plutôt qu'une par application, et le « qui » cesse d'être une supposition.

Les agents qui agissent pour le compte d'autres ont besoin de plus qu'une clé. Le template de flow intégré **Agent identity and loop ceiling** d'Odock exige les headers `x-odock-agent-id` et `x-odock-agent-iteration` sur le trafic agent et rejette les requêtes qui ne les portent pas : chaque étape d'une chaîne est attribuée à un agent nommé et à une position dans son exécution.

### Ce qu'il a fait

Odock écrit un **usage record** pour chaque appel à la gateway : principal, provider et modèle résolus, statut HTTP, latence, request id gateway, tokens, coût, trace de routage indiquant les candidats essayés, et résultats des plugins et de la sécurité attachés à l'appel. Prompts, réponses et credentials ne sont jamais écrits dans un usage record.

Les appels d'outils MCP disposent de **usage records MCP** avec serveur, outil, statut et coût. Chaque exécution **Flow Studio** laisse une trace nœud par nœud (nœud, résultat, durée) attachée aux preuves de la requête. Métriques, logs et traces alimentent la stack d'observabilité LGTM via OpenTelemetry.

### Quelles données il a touchées

Trois couches traitent les données avant et après l'appel upstream :

- **SafetySec** détecte l'injection de prompt et les schémas de jailbreak, masque secrets et valeurs de type PII dans les requêtes et réponses, et détecte les fuites de données dans la sortie des modèles.
- **Les filtres sémantiques MCP** inspectent les payloads d'appels d'outils avant exécution, et **l'injection de l'auth upstream** garde les credentials des outils dans Odock : les agents ne les manipulent jamais.
- **Les plugins et flows** ajoutent un traitement propre à l'organisation : exécuter un plugin de masquage avant la sortie, ou utiliser le template intégré **Block secrets in model output** pour empêcher des clés API ou clés privées d'atteindre l'appelant.

### Combien cela a coûté

**Les budgets** s'appliquent à une organisation, une équipe, un utilisateur ou une clé API. Odock estime le coût de chaque requête, le réserve sur chaque budget concerné avant l'appel upstream, puis règle le coût réel ensuite. Quand une fenêtre est épuisée, l'agent reçoit un `402 budget_exceeded`. **Les quotas** plafonnent de la même façon le nombre de requêtes et de tokens, et **le routage** maintient les agents sur le modèle approuvé le moins cher qui fonctionne, avec failover quand un provider se dégrade.

### Peut-on l'arrêter

C'est là qu'une gateway en ligne diffère le plus d'un observateur :

- **Les grants d'accès et règles d'outils** arrêtent net les modèles et outils non autorisés, avec allowlists et blocklists par serveur MCP.
- **Les nœuds Abort** de Flow Studio bloquent une requête avec un code de statut et un message clair, en pre-route, pre-upstream ou post-upstream.
- Le template intégré **MCP external approval gate** appelle votre service de policy ou d'approbation avant les outils destructifs et échoue fermé si l'approbation est refusée ou indisponible.
- **Le plafond de boucles** arrête les agents qui dépassent leur limite d'itérations avant qu'ils ne dépensent davantage.
- **La révocation et la rotation des clés** coupent immédiatement un agent défaillant sans toucher aux autres workloads.

### Chaîne de traçabilité

Tout ce qui précède partage un même **request id** gateway. L'usage record, l'usage record MCP, la trace de flow, les preuves SafetySec et la trace OpenTelemetry d'une même étape peuvent être reliés sans approximation. C'est ce qui transforme une pile de logs en preuves qu'un auditeur ou une équipe de réponse à incident peut suivre.

## Gateway et outils de supervision travaillent ensemble

Rien de tout cela ne rend les plateformes de supervision ou de SOC inutiles. Elles corrèlent des signaux d'identité, d'endpoints, de SaaS et de réseau qu'une gateway ne voit jamais. Ce dont elles ont besoin de la couche IA, ce sont des preuves propres, attribuées et en temps réel, et un point d'application qui agit sur leurs décisions.

Odock fournit les deux sens :

- **En sortie :** le template intégré **Incident response fan-out** notifie en parallèle la sécurité et le SIEM pour les requêtes à haut risque et chaque invocation d'outil MCP, après que l'appelant a reçu sa réponse. Les plugins d'audit et d'export SIEM s'exécutent dans la lane asynchrone et ne ralentissent jamais les agents.
- **En entrée :** un service d'approbation ou de décision de policy, y compris celui de votre plateforme de supervision, peut être appelé depuis un flow avant les actions à fort impact.

## Un déploiement de la supervision en 30 jours

- **Semaine 1 : inventaire et identité.** Faites passer le trafic agent par Odock. Émettez une virtual key par agent ou par workload. Révoquez les clés provider partagées.
- **Semaine 2 : observer.** Activez SafetySec en mode observation, mettez en place la revue des usage records et ajoutez le template d'identité agent dans l'onglet Automation d'une clé pilote.
- **Semaine 3 : borner.** Définissez budgets d'équipe et d'agent, quotas et plafond de boucles. Restreignez les serveurs MCP aux outils en allowlist.
- **Semaine 4 : intervenir.** Ajoutez la gate d'approbation externe pour les outils destructifs, passez SafetySec de l'observation à l'application là où les preuves le justifient, et transmettez les preuves à votre SIEM ou à votre plateforme de supervision.

La supervision des agents devient une ligne budgétaire et une question de conseil d'administration. Les organisations qui y répondront bien ne seront pas celles qui ont le plus de tableaux de bord. Ce seront celles où chaque action d'agent passe par un point qui sait qui a demandé, vérifie ce qui est autorisé, protège les données, réserve le coût et peut dire non, et où la trace de tout cela existe déjà quand quelqu'un la demande.

## Sources

- [VMblog, Classie launches Supervise to track, control and account for enterprise AI agents in real time, 1er octobre 2026](https://vmblog.com/news/classie-launches-supervise-to-track-control-and-account-for-enterprise-ai-agents-in-real-time/)
- [Help Net Security, Gurucul connects AI activity to identity data for faster threat response, 24 septembre 2026](https://www.helpnetsecurity.com/2026/09/24/gurucul-ai-risk-and-response/)
- [Forkast, Zscaler's Agentic SOC launch signals the category startups built is now an enterprise requirement, 7 octobre 2026](https://forkast.news/zscalers-agentic-soc-launch-signals-the-category-startups-built-is-now-an-enterprise-requirement)
- [Futurum, Google collapses enterprise AI into a single Gemini agent at Gemini at Work 2026](https://futurumgroup.com/insights/google-collapses-enterprise-ai-into-a-single-gemini-agent-at-gemini-at-work-2026/)
- [AI Agents Directory, AI Agents News Brief, 6 octobre 2026](https://aiagentsdirectory.com/news/ai-agents-news-brief-october-6-2026)
- [AI Agent Store, AI Agents News, semaine du 11 octobre 2026](https://aiagentstore.ai/ai-agent-news/this-week)
- [Computerworld, AI inference is getting cheaper, but your agents are getting more expensive, 17 août 2026](https://www.computerworld.com/article/4210786/ai-inference-is-getting-cheaper-but-your-agents-are-getting-more-expensive.html)
- [Sécurité et guardrails Odock](https://docs.odock.ai/docs/security-and-guardrails/)
- [Usage records Odock](https://docs.odock.ai/docs/observability/usage-records/)
- [Sécurité MCP dans Odock](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
- [Odock Flow Studio](https://docs.odock.ai/docs/plugins/flow-studio/)
