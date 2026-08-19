---
{
  "slug": "a2a-mcp-and-the-agent-standards-race-why-interoperability-needs-governance",
  "category": "AI Infrastructure",
  "title": "A2A, MCP, and the Agent Standards Race: Why Interoperability Needs Governance",
  "seoTitle": "A2A and MCP Agent Standards Need Governance",
  "description": "A2A and MCP are becoming the standards layer for agent interoperability and tool access. The next enterprise challenge is governing those standards before agents can talk to everything and act everywhere.",
  "excerpt": "The agent standards race is one of the loudest AI infrastructure stories of 2026. A2A helps agents communicate, MCP connects agents to tools, and enterprises now need a governance layer that controls both.",
  "publishedAt": "2026-08-19",
  "updatedAt": "2026-08-19",
  "readingTime": "8 min",
  "keywords": [
    "A2A protocol",
    "Model Context Protocol",
    "MCP governance",
    "agent interoperability",
    "agentic AI security",
    "AI standards"
  ],
  "heroEyebrow": "Agent interoperability",
  "intro": "The agent standards race became one of the loudest AI infrastructure stories of 2026. MCP gave agents a common way to connect to tools and data. A2A is pushing toward a common way for agents to communicate with each other. Both are useful. Both also expand the blast radius of agentic AI. Interoperability without governance means agents can discover more, talk to more, and act through more systems than most organizations are ready to control.",
  "keyTakeaways": [
    "MCP standardizes agent-to-tool access, while A2A focuses on agent-to-agent communication.",
    "The security issue is not the standards themselves; it is unmanaged capability expansion across tools, identities, and agent chains.",
    "Odock's MCP-native governance is the right foundation for this shift because it treats tool calls as governed runtime capabilities, not just integrations."
  ],
  "faq": [
    {
      "question": "What is the difference between A2A and MCP?",
      "answer": "MCP connects AI applications and agents to tools, services, and data sources. A2A focuses on communication between independent agents. In production, enterprises will likely need both."
    },
    {
      "question": "Why does interoperability create governance risk?",
      "answer": "Because every new connection can expand what an agent can see, say, or do. Without identity, tool-level access control, payload inspection, and audit logs, interoperability becomes an uncontrolled capability graph."
    },
    {
      "question": "How does Odock help with agent standards?",
      "answer": "Odock already governs MCP servers and tool calls with server registry, grants, allowlists, blocklists, semantic filters, upstream auth injection, and usage records. That creates a control point for agent tool execution."
    }
  ],
  "relatedSlugs": [
    "mcp-security-risks-enterprise-ai-agents-2026",
    "mcp-server-governance-for-ai-agents",
    "ai-security-in-2026-prompt-injection-tool-poisoning-and-agentic-risk",
    "ai-agent-identity-and-non-human-identity-security-in-2026"
  ],
  "cta": {
    "title": "Put governance between agents and tools",
    "description": "Odock governs MCP access with per-key grants, tool allowlists and blocklists, semantic payload filters, upstream auth injection, and durable tool-call usage records.",
    "primaryLabel": "Talk to the team",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "Read MCP docs",
    "secondaryHref": "https://docs.odock.ai/docs/models-and-mcp/mcp-servers/"
  },
  "locales": {
    "fr": {
      "category": "Infrastructure IA",
      "title": "A2A, MCP et la course aux standards agents : pourquoi l'interoperabilite doit etre gouvernee",
      "seoTitle": "Les standards agents A2A et MCP ont besoin de gouvernance",
      "description": "A2A et MCP deviennent la couche de standards pour l'interoperabilite des agents et l'acces aux outils. Le prochain defi enterprise est de gouverner ces standards.",
      "excerpt": "La course aux standards agents est l'un des grands sujets infrastructure IA de 2026. A2A aide les agents a communiquer, MCP connecte les agents aux outils, et les entreprises doivent gouverner les deux.",
      "heroEyebrow": "Interoperabilite agent",
      "intro": "La course aux standards agents est devenue l'un des sujets infrastructure IA les plus visibles de 2026. MCP donne aux agents une facon commune de se connecter aux outils et aux donnees. A2A pousse vers une communication standardisee entre agents.",
      "keyTakeaways": [
        "MCP standardise l'acces agent-vers-outil, tandis qu'A2A se concentre sur la communication agent-vers-agent.",
        "Le risque n'est pas le standard lui-meme, mais l'expansion non gouvernee des capacites entre outils, identites et chaines d'agents.",
        "La gouvernance MCP native d'Odock est une base solide car elle traite les tool calls comme des capacites runtime gouvernees."
      ],
      "cta": {
        "title": "Placez la gouvernance entre agents et outils",
        "description": "Odock gouverne l'acces MCP avec grants par key, allowlists et blocklists d'outils, filtres semantiques, injection d'auth upstream et usage records durables.",
        "primaryLabel": "Parler a l'equipe",
        "secondaryLabel": "Lire les docs MCP"
      },
      "readingTime": "8 min",
      "keywords": [
        "protocole A2A",
        "Model Context Protocol",
        "gouvernance MCP",
        "interoperabilite agent",
        "securite IA agentique"
      ],
      "faq": [
        {
          "question": "Quelle est la difference entre A2A et MCP ?",
          "answer": "MCP connecte les applications IA et les agents aux outils, services et sources de donnees. A2A se concentre sur la communication entre agents independants. En production, les entreprises auront probablement besoin des deux."
        },
        {
          "question": "Pourquoi l'interoperabilite cree-t-elle un risque de gouvernance ?",
          "answer": "Parce que chaque nouvelle connexion peut etendre ce qu'un agent peut voir, dire ou faire. Sans identite, controle d'acces par outil, inspection des payloads et logs d'audit, l'interoperabilite devient un graphe de capacites non controle."
        },
        {
          "question": "Comment Odock aide-t-il avec les standards agents ?",
          "answer": "Odock gouverne deja les serveurs MCP et les tool calls avec registry, grants, allowlists, blocklists, filtres semantiques, injection d'auth upstream et usage records."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## Interoperability became the new agent battleground

In August 2026, Axios reported that Google's Agent2Agent protocol, A2A, was moving under the Agentic AI Foundation. The point of A2A is straightforward: independent agents need a standard way to communicate across platforms.

That move sits next to the rapid adoption of the Model Context Protocol, MCP. MCP addresses a different layer: it gives AI applications and agents a common way to connect to tools, services, databases, file systems, and APIs.

Together, the pattern is clear:

- MCP: how an agent reaches tools and data
- A2A: how agents talk to other agents
- governance: how the enterprise decides what any of them are allowed to do

The first two are becoming standards conversations. The third is the enterprise control problem.

## Standards make adoption easier and risk easier to spread

Interoperability is valuable because it reduces integration work. A team can plug an agent into a tool ecosystem without building every connector from scratch. Another team can let agents collaborate across boundaries instead of hard-coding one workflow.

But the same property creates risk. If a standard makes it easier to connect, it also makes it easier to over-connect. A poorly governed agent can inherit too many tools, trust too many descriptions, call too many endpoints, and pass data through too many hops.

Microsoft's June 2026 security research explains why this matters. As agents move from reading to acting, a prompt injection against an agent can trigger an action. Microsoft also walked through an MCP tool-poisoning pattern where a tool description change could redirect an agent's behavior and cause sensitive data to be sent through a tool call.

That is the real lesson of the standards race. The question is not whether MCP or A2A is good or bad. The question is whether the organization has a control plane around the capabilities those standards expose.

## Agent authorization is becoming its own discipline

The World Economic Forum's May 2026 agent playbook framed the issue as authorization. Organizations need to define the conditions under which agents are authorized to act, and they need enforcement that keeps working as systems evolve.

That is a useful framing because agents do not map cleanly to old governance categories.

They are not only users. They may act on behalf of users, teams, services, or workflows.

They are not only applications. They may choose tools dynamically and compose actions at runtime.

They are not only models. Many agents may share a model while having very different scopes, data access, and allowed actions.

That is why governance has to move from "which model did we approve?" to "which agent identity can use which capability under which policy?"

## MCP is the immediate control point

A2A matters because agent-to-agent workflows are coming. But for most enterprises, MCP is the immediate risk surface because it connects agents to systems that can read, write, spend, delete, create, search, and modify.

Odock's data room calls MCP governance the differentiator for exactly that reason. An MCP server is not just an integration. It is a bundle of capabilities. Some tools may be harmless, some may expose sensitive data, and some may be destructive. Treating the whole server as allowed or denied is too blunt for production.

Odock governs MCP at the tool-call level:

**Server registry.** Approved MCP servers are registered centrally instead of discovered informally by each agent team.

**Grants.** Access is scoped to virtual API keys, teams, or workloads.

**Tool allowlists.** A key can expose only the tools the agent actually needs.

**Tool blocklists.** Destructive or risky actions can be blocked explicitly.

**Semantic payload filters.** Tool-call payloads can be inspected for dangerous patterns before execution.

**Upstream auth injection.** Credentials stay in Odock, so agents do not handle secrets directly.

**Usage records.** Tool calls are attributed to key, team, server, tool, cost, status, and outcome.

That set of controls is what turns MCP from an open capability surface into governed infrastructure.

## The next governance layer will span agent chains

As A2A adoption grows, the same principles will need to apply across chains of agents. The control plane will have to understand not only "agent A called tool X" but also "agent A delegated to agent B, which used tool X under policy Y."

The shape of the answer is already visible:

- every agent needs a non-human identity
- every delegation needs scope
- every tool call needs authorization
- every high-impact action needs a halt or approval path
- every cross-agent workflow needs traceability
- every policy decision needs to be reconstructable later

This is why agent interoperability and AI governance are becoming the same conversation. The standards define how agents connect. The governance layer defines whether they should.

## What enterprises should do now

Do not wait for the agent standards ecosystem to settle before building controls. The direction is already clear enough.

Create an inventory of MCP servers and agent connectors. Identify which tools can read sensitive data, write to business systems, spend money, or change production state.

Replace shared provider keys with scoped virtual API keys. The key should carry owner, team, model access, MCP access, budget, quota, and policy context.

Move from server-level approval to tool-level approval. "This agent can use GitHub" is too broad. "This agent can read issues and open pull requests, but cannot delete repositories or modify secrets" is closer to production governance.

Inspect tool metadata and payloads. Tool descriptions are part of the agent context, and payloads are where sensitive data often leaves the boundary.

Record every action. If an incident involves an agent chain, an MCP tool, and a provider response, teams need one evidence trail.

A2A and MCP are making agentic AI more interoperable. That is good for adoption. It is also exactly why the governance layer now matters. The more agents can connect, the more enterprises need one place to decide, enforce, and prove what those agents are allowed to do.

## Sources

- [Axios, Google-backed agentic A2A protocol gets a new home, August 17, 2026](https://www.axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards)
- [Microsoft Security, Securing AI agents: When AI tools move from reading to acting, June 30, 2026](https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/)
- [World Economic Forum, AI Agents in Action: A Playbook for Trusted Adoption, Authorization and Scaling, May 26, 2026](https://www.weforum.org/publications/ai-agents-in-action-a-playbook-for-trusted-adoption-authorization-and-scaling/)
- [Microsoft for Developers, Securing MCP: A Control Plane for Agent Tool Execution, April 22, 2026](https://developer.microsoft.com/blog/securing-mcp-a-control-plane-for-agent-tool-execution)
- [Odock MCP Servers documentation](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/)
- [Odock MCP Security documentation](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)

<!-- locale:fr -->
## L'interopérabilité est devenue le nouveau terrain de bataille des agents

En août 2026, Axios a rapporté que le protocole Agent2Agent de Google, A2A, passait sous l'égide de l'Agentic AI Foundation. L'objectif d'A2A est simple : des agents indépendants ont besoin d'une manière standard de communiquer entre plateformes.

Ce mouvement s'inscrit à côté de l'adoption rapide du Model Context Protocol, MCP. MCP traite une autre couche : il donne aux applications IA et aux agents une manière commune de se connecter aux outils, services, bases de données, systèmes de fichiers et APIs.

Ensemble, le schéma est clair :

- MCP : comment un agent accède aux outils et aux données
- A2A : comment les agents parlent à d'autres agents
- gouvernance : comment l'entreprise décide ce que chacun d'eux est autorisé à faire

Les deux premiers deviennent des sujets de standardisation. Le troisième est le problème de contrôle de l'entreprise.

## Les standards facilitent l'adoption, et facilitent aussi la diffusion du risque

L'interopérabilité est précieuse parce qu'elle réduit le travail d'intégration. Une équipe peut brancher un agent sur un écosystème d'outils sans construire chaque connecteur depuis zéro. Une autre équipe peut laisser des agents collaborer entre périmètres au lieu de coder en dur un workflow unique.

Mais cette même propriété crée du risque. Si un standard facilite la connexion, il facilite aussi la sur-connexion. Un agent mal gouverné peut hériter de trop d'outils, faire confiance à trop de descriptions, appeler trop d'endpoints et faire transiter des données par trop de sauts.

Les recherches sécurité de Microsoft publiées en juin 2026 expliquent pourquoi cela compte. À mesure que les agents passent de la lecture à l'action, une injection de prompt contre un agent peut déclencher une action. Microsoft a aussi détaillé un schéma de tool poisoning MCP dans lequel une modification de description d'outil pouvait rediriger le comportement d'un agent et provoquer l'envoi de données sensibles via un appel outil.

C'est la vraie leçon de la course aux standards. La question n'est pas de savoir si MCP ou A2A est bon ou mauvais. La question est de savoir si l'organisation dispose d'un control plane autour des capacités que ces standards exposent.

## L'autorisation des agents devient une discipline à part entière

Le playbook du World Economic Forum publié en mai 2026 sur les agents a cadré le sujet en termes d'autorisation. Les organisations doivent définir les conditions dans lesquelles les agents sont autorisés à agir, et elles ont besoin d'une application qui continue de fonctionner lorsque les systèmes évoluent.

Ce cadrage est utile parce que les agents ne correspondent pas proprement aux anciennes catégories de gouvernance.

Ils ne sont pas seulement des utilisateurs. Ils peuvent agir au nom d'utilisateurs, d'équipes, de services ou de workflows.

Ils ne sont pas seulement des applications. Ils peuvent choisir des outils dynamiquement et composer des actions au runtime.

Ils ne sont pas seulement des modèles. Plusieurs agents peuvent partager un même modèle tout en ayant des périmètres, des accès aux données et des actions autorisées très différents.

C'est pourquoi la gouvernance doit passer de "quel modèle avons-nous approuvé ?" à "quelle identité agent peut utiliser quelle capacité, sous quelle politique ?"

## MCP est le point de contrôle immédiat

A2A compte parce que les workflows agent-à-agent arrivent. Mais pour la plupart des entreprises, MCP est la surface de risque immédiate, parce qu'il connecte les agents à des systèmes qui peuvent lire, écrire, dépenser, supprimer, créer, rechercher et modifier.

La data room d'Odock présente la gouvernance MCP comme un différenciateur précisément pour cette raison. Un serveur MCP n'est pas une simple intégration. C'est un ensemble de capacités. Certains outils peuvent être inoffensifs, d'autres peuvent exposer des données sensibles, et d'autres encore peuvent être destructifs. Traiter tout le serveur comme autorisé ou refusé est trop grossier pour la production.

Odock gouverne MCP au niveau du tool call :

**Server registry.** Les serveurs MCP approuvés sont enregistrés de manière centralisée au lieu d'être découverts informellement par chaque équipe agent.

**Grants.** L'accès est scoped aux virtual API keys, aux équipes ou aux workloads.

**Tool allowlists.** Une clé peut n'exposer que les outils dont l'agent a réellement besoin.

**Tool blocklists.** Les actions destructives ou risquées peuvent être bloquées explicitement.

**Semantic payload filters.** Les payloads de tool call peuvent être inspectés avant exécution pour détecter des motifs dangereux.

**Upstream auth injection.** Les credentials restent dans Odock, afin que les agents ne manipulent pas directement les secrets.

**Usage records.** Les tool calls sont attribués à une clé, une équipe, un serveur, un outil, un coût, un statut et un résultat.

Cet ensemble de contrôles transforme MCP d'une surface ouverte de capacités en infrastructure gouvernée.

## La prochaine couche de gouvernance couvrira les chaînes d'agents

À mesure que l'adoption d'A2A progressera, les mêmes principes devront s'appliquer aux chaînes d'agents. Le control plane devra comprendre non seulement "l'agent A a appelé l'outil X", mais aussi "l'agent A a délégué à l'agent B, qui a utilisé l'outil X sous la politique Y".

La forme de la réponse est déjà visible :

- chaque agent a besoin d'une identité non humaine
- chaque délégation a besoin d'un périmètre
- chaque tool call a besoin d'une autorisation
- chaque action à fort impact a besoin d'un chemin d'arrêt ou d'approbation
- chaque workflow cross-agent a besoin de traçabilité
- chaque décision de politique doit pouvoir être reconstruite plus tard

C'est pourquoi l'interopérabilité des agents et la gouvernance IA deviennent la même conversation. Les standards définissent comment les agents se connectent. La couche de gouvernance définit s'ils devraient le faire.

## Ce que les entreprises devraient faire maintenant

N'attendez pas que l'écosystème des standards agents soit stabilisé avant de construire les contrôles. La direction est déjà suffisamment claire.

Créez un inventaire des serveurs MCP et des connecteurs agents. Identifiez les outils capables de lire des données sensibles, d'écrire dans des systèmes métier, de dépenser de l'argent ou de modifier l'état de production.

Remplacez les clés provider partagées par des virtual API keys scoped. La clé doit porter le propriétaire, l'équipe, l'accès aux modèles, l'accès MCP, le budget, le quota et le contexte de politique.

Passez de l'approbation au niveau serveur à l'approbation au niveau outil. "Cet agent peut utiliser GitHub" est trop large. "Cet agent peut lire les issues et ouvrir des pull requests, mais ne peut pas supprimer de repositories ni modifier des secrets" est plus proche d'une gouvernance de production.

Inspectez les métadonnées et les payloads des outils. Les descriptions d'outils font partie du contexte de l'agent, et les payloads sont souvent l'endroit où les données sensibles quittent le périmètre.

Enregistrez chaque action. Si un incident implique une chaîne d'agents, un outil MCP et une réponse provider, les équipes ont besoin d'une piste de preuve unique.

A2A et MCP rendent l'IA agentique plus interopérable. C'est positif pour l'adoption. C'est aussi précisément pour cela que la couche de gouvernance compte désormais. Plus les agents peuvent se connecter, plus les entreprises ont besoin d'un endroit unique pour décider, appliquer et prouver ce que ces agents sont autorisés à faire.

## Sources

- [Axios, Google-backed agentic A2A protocol gets a new home, August 17, 2026](https://www.axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards)
- [Microsoft Security, Securing AI agents: When AI tools move from reading to acting, June 30, 2026](https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/)
- [World Economic Forum, AI Agents in Action: A Playbook for Trusted Adoption, Authorization and Scaling, May 26, 2026](https://www.weforum.org/publications/ai-agents-in-action-a-playbook-for-trusted-adoption-authorization-and-scaling/)
- [Microsoft for Developers, Securing MCP: A Control Plane for Agent Tool Execution, April 22, 2026](https://developer.microsoft.com/blog/securing-mcp-a-control-plane-for-agent-tool-execution)
- [Odock MCP Servers documentation](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/)
- [Odock MCP Security documentation](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
