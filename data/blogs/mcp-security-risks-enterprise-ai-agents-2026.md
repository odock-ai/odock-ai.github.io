---
{
  "slug": "mcp-security-risks-enterprise-ai-agents-2026",
  "category": "AI Security",
  "title": "The 6 MCP Security Risks Every Enterprise Faces in 2026",
  "seoTitle": "MCP Security Risks 2026: Enterprise Guide for AI Agents",
  "description": "MCP became the backbone for connecting AI agents to tools, and it inherited an entire attack surface. Here are the six MCP security risks enterprise teams face in 2026, from tool poisoning to credential sprawl, and how to close each one at the gateway.",
  "excerpt": "The Model Context Protocol made it trivial to give AI agents tools. It also made it trivial to give attackers a way in. These are the six MCP security risks enterprise teams keep hitting in 2026, and the gateway controls that shut each one down.",
  "publishedAt": "2026-07-03",
  "updatedAt": "2026-07-03",
  "readingTime": "11 min",
  "keywords": [
    "mcp security",
    "model context protocol security",
    "tool poisoning",
    "mcp server security",
    "ai agent security",
    "mcp governance",
    "over-privileged agents"
  ],
  "heroEyebrow": "AI infrastructure security",
  "intro": "The Model Context Protocol went from a late-2024 proposal to backbone infrastructure faster than almost any protocol in recent memory. By 2026 it connects AI agents to tools, data sources, and business workflows across most of the industry. The problem is that MCP was released with a deliberately flexible, underspecified design. That flexibility is wonderful for adoption and dangerous for security, because ambiguity at the protocol level becomes vulnerability at the implementation level. Here are the six risks enterprise teams keep running into, and where each one is actually stopped.",
  "keyTakeaways": [
    "MCP turns AI security into a tool governance problem: the risk is no longer only what a model says, but what it is allowed to do.",
    "The six recurring enterprise risks are over-privileged access, indirect prompt injection, tool poisoning and rug pulls, credential sprawl, audit blind spots, and unbounded consumption.",
    "Most of these close at the gateway, where MCP access is treated as scoped, inspected, logged capability access rather than an open integration."
  ],
  "faq": [
    {
      "question": "Is MCP inherently insecure?",
      "answer": "MCP is not inherently insecure, but its flexible, underspecified design pushes a lot of security responsibility onto implementers. Many MCP servers ship without strong authentication, scoping, or logging by default, so the danger is less the protocol itself and more how it is deployed and governed in practice."
    },
    {
      "question": "What is the difference between prompt injection and tool poisoning?",
      "answer": "Prompt injection hides malicious instructions in content the model reads, steering its behaviour. Tool poisoning manipulates the tool itself, its description, metadata, or behaviour, so that an agent is lured into unsafe actions even when the user's prompt looks fine. Tool poisoning is specific to the tool layer that MCP introduced."
    },
    {
      "question": "How do I secure MCP tool access for agents?",
      "answer": "Treat tool access as capability access. Grant each virtual key only the servers it needs, scope down to specific allowed tools, apply semantic filters on payloads, enforce rate and payload limits, and log every tool call. Doing this at the gateway keeps the policy consistent across every agent instead of per application."
    }
  ],
  "relatedSlugs": [
    "mcp-server-governance-for-ai-agents",
    "ai-security-in-2026-prompt-injection-tool-poisoning-and-agentic-risk",
    "prompt-injection-data-leakage-and-llm-security-guardrails",
    "why-the-ai-gateway-became-mandatory-infrastructure-in-2026"
  ],
  "cta": {
    "title": "Govern MCP tool access as a capability, not a convenience",
    "description": "Odock treats every MCP server as scoped capability access with grants, allowed and blocked tools, semantic filters, rate and payload limits, and a record of every tool call.",
    "primaryLabel": "Talk to the team",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "Explore the MCP gateway",
    "secondaryHref": "/mcp-gateway/"
  },
  "locales": {
    "fr": {
      "category": "Sécurité IA",
      "title": "Les 6 risques de sécurité MCP auxquels toute entreprise est confrontée en 2026",
      "seoTitle": "Risques de sécurité MCP 2026 : guide pour les agents IA en entreprise",
      "description": "MCP est devenu la colonne vertébrale qui relie les agents IA aux outils, avec toute une surface d'attaque associée. Voici les six risques de sécurité MCP auxquels les équipes en entreprise sont confrontées en 2026, du tool poisoning à la dispersion des credentials, et les moyens de les maîtriser au niveau de la gateway.",
      "excerpt": "Le Model Context Protocol a considérablement simplifié l'attribution d'outils aux agents IA. Il a aussi facilité la création de portes d'entrée pour les attaquants. Voici les six risques de sécurité MCP auxquels les équipes en entreprise sont régulièrement confrontées en 2026, ainsi que les contrôles à appliquer au niveau de la gateway pour les neutraliser.",
      "heroEyebrow": "Sécurité de l'infrastructure IA",
      "intro": "Le Model Context Protocol est passé du statut de proposition, fin 2024, à celui d'infrastructure fondamentale plus rapidement que la plupart des protocoles récents. En 2026, il relie les agents IA aux outils, aux sources de données et aux workflows métier dans une grande partie de l'industrie. Le problème tient à son design délibérément flexible et sous-spécifié. Cette souplesse favorise l'adoption, mais présente un risque pour la sécurité : toute ambiguïté au niveau du protocole peut devenir une vulnérabilité dans l'implémentation. Voici les six risques auxquels les équipes en entreprise sont régulièrement confrontées, et le niveau auquel chacun peut être réellement maîtrisé.",
      "keyTakeaways": [
        "MCP transforme la sécurité IA en un enjeu de gouvernance des outils : le risque ne réside plus seulement dans ce que dit un model, mais aussi dans ce qu'il est autorisé à faire.",
        "Les six risques récurrents en entreprise sont l'accès sur-privilégié, l'indirect prompt injection, le tool poisoning et les rug pulls, la dispersion des credentials, les angles morts d'audit et la consommation non bornée.",
        "La plupart peuvent être maîtrisés au niveau de la gateway, où l'accès MCP est traité comme un accès scopé à des capacités, inspecté et journalisé, plutôt que comme une intégration ouverte."
      ],
      "cta": {
        "title": "Gouvernez l'accès aux outils MCP comme une capacité, et non comme un simple confort",
        "description": "Odock traite chaque serveur MCP comme un accès scopé à des capacités, avec grants, allowed et blocked tools, semantic filters, limites de rate et de payload, ainsi qu'un enregistrement de chaque tool call.",
        "primaryLabel": "Parler à l'équipe",
        "secondaryLabel": "Explorer la MCP gateway"
      },
      "readingTime": "11 min",
      "keywords": [
        "sécurité mcp",
        "sécurité model context protocol",
        "tool poisoning",
        "sécurité serveur mcp",
        "sécurité agent ia",
        "gouvernance mcp",
        "agents sur-privilégiés"
      ],
      "faq": [
        {
          "question": "MCP est-il intrinsèquement non sécurisé ?",
          "answer": "MCP n'est pas intrinsèquement non sécurisé, mais son design flexible et sous-spécifié transfère une grande partie de la responsabilité en matière de sécurité aux personnes qui l'implémentent. De nombreux serveurs MCP sont fournis sans mécanismes robustes d'authentification, de scoping ou de logging par défaut. Le risque tient donc moins au protocole lui-même qu'à la manière dont il est déployé et gouverné."
        },
        {
          "question": "Quelle différence entre prompt injection et tool poisoning ?",
          "answer": "La prompt injection dissimule des instructions malveillantes dans un contenu lu par le model afin d'orienter son comportement. Le tool poisoning manipule l'outil lui-même — sa description, ses métadonnées ou son comportement — afin d'amener un agent à effectuer des actions dangereuses, même lorsque le prompt de l'utilisateur semble légitime. Le tool poisoning est propre à la couche d'outils introduite par MCP."
        },
        {
          "question": "Comment sécuriser l'accès aux outils MCP pour les agents ?",
          "answer": "Traitez l'accès aux outils comme un accès à des capacités. N'accordez à chaque virtual key que les serveurs dont elle a besoin, limitez-la à une liste précise de tools autorisés, appliquez des semantic filters aux payloads, imposez des limites de rate et de payload, puis journalisez chaque tool call. Appliquer ces contrôles au niveau de la gateway garantit une politique cohérente pour tous les agents, plutôt qu'une implémentation propre à chaque application."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## Why MCP changed the security question

Before agents had tools, AI security was mostly about content: is this prompt trying to manipulate the model, and is this response leaking something it should not? Those questions still matter. But the Model Context Protocol added a second, sharper question: what is this agent allowed to actually do?

That is a different kind of risk. A tool is not text. A tool can write files, open network connections, modify a repository, call a paid API, or read a sensitive system. As the Odock MCP security documentation puts it, you should treat MCP access as runtime capability access, not just a convenience feature. Once you accept that framing, the security work becomes clear: you are governing capabilities, and every capability needs a boundary.

The research through 2026 keeps landing on the same shortlist of failure modes. Here they are, with the control that closes each.

## Risk 1: Over-privileged agent access

The most common MCP problem is also the most boring: agents get more access than they need. A server is connected once, and from then on every agent that can reach it can call every tool it exposes. Read-only intent quietly becomes write capability. The principle of least privilege, which security teams have applied to human accounts for decades, often evaporates the moment an AI agent is involved.

The fix is to make access explicit and narrow. In Odock, an MCP server existing in the organisation does not make it callable. A virtual API key must hold an explicit MCP access grant for that specific server, and access can be narrowed further by team or key scope. On top of the grant, governance settings define allowed tools and blocked tools, so a key that needs one read tool does not silently inherit a dozen write tools. The details are in the [MCP security documentation](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security).

## Risk 2: Indirect prompt injection through tools

Direct prompt injection is when a user types something malicious. Indirect prompt injection is more insidious: the malicious instruction arrives inside data the agent retrieves through a tool. A document, a web page, a database row, or an issue comment can carry hidden instructions that the model reads as if they were commands. The user did nothing wrong, and the payload still gets in.

This is why request-side content inspection cannot be the only line. You need to inspect what tools return and constrain what tool calls are allowed to contain. Odock applies semantic filters to MCP payloads at runtime and runs its SafetySec engine on both request and response content, so injected instructions arriving through a tool have a chance of being caught before they steer an action. Prompt injection remains the top item on the OWASP LLM list precisely because retrieval and tools do not remove it, a point we go deeper on in [prompt injection, data leakage, and why guardrails belong in the gateway](/blog/prompt-injection-data-leakage-and-llm-security-guardrails/).

## Risk 3: Tool poisoning and rug pulls

Tool poisoning is the risk MCP introduced that has no clean equivalent in the pre-agent world. Instead of attacking the prompt, an attacker manipulates the tool: its description, its metadata, its parameters, or its behaviour. A poisoned tool description can carry instructions that the model treats as trusted context. Security researchers have demonstrated tool poisoning attacks that silently exfiltrate a user's entire chat history, including credentials and tokens, without the user ever seeing a suspicious prompt.

The rug pull variant is worse in a slow way. A tool behaves correctly during review and approval, then changes its behaviour after it is trusted. This is a supply-chain problem wearing an agent costume.

The defence has two parts. First, control provenance: only connect MCP servers from sources you trust, which is why Odock supports adding servers from a trusted catalog rather than arbitrary endpoints. Second, constrain behaviour at runtime regardless of trust: allowed and blocked tool lists, semantic filters on payloads, and inspection of tool calls mean a tool that starts misbehaving is operating inside a boundary rather than with a blank cheque. We covered the threat-model background in [AI security in 2026](/blog/ai-security-in-2026-prompt-injection-tool-poisoning-and-agentic-risk/).

## Risk 4: Credential sprawl and single points of failure

MCP servers tend to aggregate credentials. One server might hold access to a database, a file system, a cloud account, and a third-party API, because that is what makes it useful. That aggregation is also what makes it dangerous. A single MCP server deployed without proper authentication controls becomes a single point of failure that can expose every integrated system behind it. Compromise the server, and you have not breached one service, you have breached all of them.

The mitigation is to stop letting credentials sprawl across ungoverned servers and to put a controlled boundary in front. Odock handles upstream MCP authentication as part of its layered controls and keeps access grants, scopes, and transport security in one place, so credentials are governed centrally rather than scattered across per-application integrations. You can review the auth and transport surface in the [MCP security and access settings](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/review-security-access/). Centralising the boundary does not eliminate the value of a compromised server, but it removes the ungoverned sprawl that makes compromise easy and invisible.

## Risk 5: Audit blind spots

Ask a team running agents in production a simple question: which tools did this agent call last Tuesday, with what arguments, and what came back? A surprising number cannot answer. Tool calls happen inside application code, logs are inconsistent, and there is no single record of agent actions. That blind spot is a security problem and, under tightening regulation, a compliance problem too.

You cannot investigate what you did not record. Because Odock sits in the path of every MCP call, it produces usage records for tool traffic the same way it does for model traffic, with identity, tool, outcome, and cost attached. There is dedicated support for MCP usage records, described in the [observability documentation](https://docs.odock.ai/docs/observability/usage-records/mcp-usage-records/). The difference between a blocked tool call and an explainable blocked tool call is exactly this record.

## Risk 6: Unbounded consumption through agents

Agents amplify cost and load. A model that loops, a tool that gets called in a tight cycle, or an agent that retries aggressively can turn into denial of wallet and denial of service at the same time. In agentic systems, cost abuse and availability abuse are frequently the same operational event, and MCP tool calls can carry both real spend and real side effects.

This is why cost and rate controls belong on the tool path, not only the model path. Odock applies payload limits, rate limits, concurrency controls, budgets, and quotas to MCP traffic, so an agent that starts consuming without bound hits a ceiling before it hits your invoice or your upstream systems. Budgets are reserved before the call rather than reconciled after the damage, which is the difference between a limit and a report. See [budgets](https://docs.odock.ai/docs/management/budgets/) and [quotas](https://docs.odock.ai/docs/management/quotas/).

## The pattern behind all six

Read the six risks together and a single theme appears. Every one of them is a version of the same mistake: treating tool access as an integration feature instead of a governed capability boundary. Over-privileged access is a missing boundary. Injection and poisoning are boundaries that do not inspect content. Credential sprawl is a boundary that was never centralised. Audit blind spots are a boundary that does not record. Unbounded consumption is a boundary without a ceiling.

That is why Odock.ai is the natural place to solve most of this. When MCP access runs through Odock's controlled layer, the boundary exists by default, it inspects, it records, and it enforces limits, consistently, for every agent, instead of being reinvented per application. The concept is laid out in more depth in [MCP server governance for AI agents](/blog/mcp-server-governance-for-ai-agents/).

## What Odock does not solve

Honesty matters here, because MCP security has parts that live outside any gateway, and I would rather tell you where Odock stops.

Odock does not patch the MCP server itself. Secure SDLC and patch management for the servers you run are still your responsibility. It does not validate deep, business-specific schemas inside a tool handler, which sometimes belongs in the tool code. And it does not replace the judgement of not connecting a sketchy server in the first place. Provenance and trust decisions are yours to make.

What Odock does is remove the excuse for the six risks above. Each of them has a known, boring, effective control, and the reason they keep showing up in incident reports is that those controls were never applied consistently.

## Why we built this into Odock.ai

I will not pretend to be neutral: securing agent tool access is a core reason Odock.ai exists. We treat every MCP server as scoped capability access, with grants, allowed and blocked tools, semantic filters, rate and payload limits, and a record of every tool call, all behind one OpenAI-compatible endpoint you can adopt without rewriting your agents. Put your MCP access behind Odock and each tool call becomes scoped, inspected, and recorded capability access, so the majority of the 2026 MCP attack surface simply has nowhere to land.

If your agents are getting tools faster than your security review can keep up, that gap is exactly what Odock.ai is meant to close. [Talk to our team](#waitlist-section) or [explore the Odock MCP gateway](/mcp-gateway/), and give your agents tools without handing them a blank cheque.

## Sources

- [MCP Security, 6 Risks Enterprise Teams Face in 2026, DataStealth](https://datastealth.io/blogs/mcp-security)
- [Model Context Protocol Security, Complete Guide, SentinelOne](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)
- [MCP Security Vulnerabilities, Prompt Injection and Tool Poisoning, Practical DevSecOps](https://www.practical-devsecops.com/mcp-security-vulnerabilities/)
- [Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning, arXiv](https://arxiv.org/pdf/2603.22489)
- [Odock MCP security](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
- [Odock MCP usage records](https://docs.odock.ai/docs/observability/usage-records/mcp-usage-records/)

<!-- locale:fr -->
## Pourquoi MCP a changé la question de sécurité

Avant que les agents ne disposent d'outils, la sécurité IA portait principalement sur le contenu : ce prompt tente-t-il de manipuler le model ? Cette réponse divulgue-t-elle des informations qui devraient rester confidentielles ? Ces questions restent pertinentes. Mais le Model Context Protocol en a ajouté une seconde, plus critique : que cet agent est-il concrètement autorisé à faire ?

Il s'agit d'un risque d'une autre nature. Un outil n'est pas du texte : il peut écrire des fichiers, ouvrir des connexions réseau, modifier un dépôt, appeler une API payante ou lire les données d'un système sensible. Comme l'indique la documentation sur la sécurité MCP d'Odock, l'accès MCP doit être traité comme un accès runtime à des capacités, et non comme une simple fonctionnalité pratique. Le cadre de sécurité devient alors clair : vous gouvernez des capacités, dont chacune doit être délimitée.

Les recherches menées en 2026 font régulièrement ressortir les mêmes modes de défaillance. Voici les principaux, accompagnés du contrôle qui permet de maîtriser chacun d'eux.

## Risque 1 : accès sur-privilégié des agents

Le problème MCP le plus courant est aussi le plus banal : les agents obtiennent davantage d'accès que nécessaire. Une fois un serveur connecté, chaque agent qui peut l'atteindre est susceptible d'appeler tous les outils qu'il expose. Une intention read-only se transforme alors discrètement en capacité d'écriture. Le principe du moindre privilège, appliqué depuis des décennies aux comptes humains par les équipes de sécurité, disparaît souvent dès qu'un agent IA entre en jeu.

La solution consiste à rendre l'accès explicite et strictement limité. Dans Odock, la simple présence d'un serveur MCP dans l'organisation ne suffit pas à le rendre accessible. Une virtual API key doit disposer d'un access grant MCP explicite pour ce serveur précis, et l'accès peut être davantage restreint par scope d'équipe ou de clé. En complément du grant, les paramètres de gouvernance définissent les allowed tools et les blocked tools. Une clé qui n'a besoin que d'un outil de lecture n'hérite donc pas implicitement d'une dizaine d'outils d'écriture. Pour plus de détails, consultez la [documentation sur la sécurité MCP](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/).

## Risque 2 : indirect prompt injection par les outils

La prompt injection directe se produit lorsqu'un utilisateur saisit un contenu malveillant. L'indirect prompt injection est plus insidieuse : l'instruction malveillante se trouve dans les données que l'agent récupère au moyen d'un outil. Un document, une page web, une ligne de base de données ou un commentaire d'issue peut contenir des instructions cachées que le model interprète comme des commandes. L'utilisateur n'a commis aucune erreur, mais le payload parvient tout de même au model.

L'inspection du contenu des requêtes ne peut donc pas constituer l'unique ligne de défense. Il faut également inspecter les données renvoyées par les outils et limiter le contenu autorisé dans les tool calls. Odock applique des semantic filters aux payloads MCP au runtime et exécute son moteur SafetySec sur le contenu des requêtes et des réponses. Les instructions injectées par l'intermédiaire d'un outil peuvent ainsi être détectées avant d'orienter une action. La prompt injection reste en tête de la liste OWASP LLM précisément parce que le retrieval et les outils ne l'éliminent pas. Nous approfondissons ce sujet dans [notre article sur la prompt injection, les fuites de données et le rôle des guardrails dans la gateway](/fr/blog/prompt-injection-data-leakage-and-llm-security-guardrails/).

## Risque 3 : tool poisoning et rug pulls

Le tool poisoning est un risque introduit par MCP qui n'a pas d'équivalent direct dans le monde antérieur aux agents. Au lieu d'attaquer le prompt, l'attaquant manipule l'outil : sa description, ses métadonnées, ses paramètres ou son comportement. Une description empoisonnée peut contenir des instructions que le model considère comme un contexte de confiance. Des chercheurs en sécurité ont démontré que des attaques de tool poisoning pouvaient exfiltrer silencieusement l'intégralité de l'historique de conversation d'un utilisateur, credentials et tokens compris, sans jamais lui présenter de prompt suspect.

La variante rug pull agit de manière différée. Un outil se comporte correctement pendant sa revue et son approbation, puis change de comportement une fois considéré comme fiable. Il s'agit d'un problème de supply chain appliqué aux agents.

La défense comporte deux volets. Il faut d'abord contrôler la provenance en ne connectant que des serveurs MCP issus de sources fiables. C'est pourquoi Odock permet d'ajouter des serveurs depuis un catalogue de confiance plutôt que depuis des endpoints arbitraires. Il faut ensuite contraindre leur comportement au runtime, quel que soit le niveau de confiance accordé. Les listes d'allowed et blocked tools, les semantic filters appliqués aux payloads et l'inspection des tool calls permettent de maintenir dans un périmètre contrôlé tout outil qui commencerait à se comporter de manière anormale. Le contexte du modèle de menace est détaillé dans [notre article sur la sécurité IA en 2026](/fr/blog/ai-security-in-2026-prompt-injection-tool-poisoning-and-agentic-risk/).

## Risque 4 : dispersion des credentials et point unique de défaillance

Les serveurs MCP ont tendance à agréger des credentials. Un même serveur peut détenir des accès à une base de données, à un système de fichiers, à un compte cloud et à une API tierce, car c'est précisément ce qui le rend utile. Mais cette agrégation le rend également dangereux. Un serveur MCP déployé sans contrôles d'authentification appropriés devient un point unique de défaillance capable d'exposer tous les systèmes auxquels il est intégré. Sa compromission ne touche pas un seul service, mais potentiellement l'ensemble de ces systèmes.

La mitigation consiste à empêcher la dispersion des credentials sur des serveurs non gouvernés et à placer une frontière contrôlée en amont. Odock gère l'authentification MCP upstream dans le cadre de ses contrôles en couches et centralise les access grants, les scopes et la sécurité du transport. Les credentials sont ainsi gouvernés depuis un point unique plutôt que disséminés dans des intégrations propres à chaque application. La surface d'authentification et de transport est présentée dans les [paramètres de sécurité et d'accès MCP](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/review-security-access/). La centralisation de cette frontière ne réduit pas les conséquences potentielles de la compromission d'un serveur, mais elle élimine la dispersion non gouvernée qui la rend plus facile et moins visible.

## Risque 5 : angles morts d'audit

Posez une question simple à une équipe qui exploite des agents en production : quels outils cet agent a-t-il appelés mardi dernier, avec quels arguments et quels résultats ? Un nombre étonnant d'équipes ne sait pas répondre. Les tool calls s'effectuent dans le code applicatif, les logs sont incohérents et aucun enregistrement centralisé ne retrace les actions de l'agent. Cet angle mort pose un problème de sécurité et, dans un contexte de durcissement réglementaire, de conformité.

Il est impossible d'enquêter sur ce qui n'a pas été enregistré. Comme Odock intervient dans le flux de chaque appel MCP, il produit des usage records pour le trafic d'outils comme pour celui des models, auxquels sont associés l'identité, l'outil, le résultat et le coût. La [documentation sur l'observability](https://docs.odock.ai/docs/observability/usage-records/mcp-usage-records/) décrit la prise en charge spécifique des usage records MCP. Cet enregistrement fait toute la différence entre un tool call simplement bloqué et un blocage qu'il est possible d'expliquer.

## Risque 6 : consommation non bornée via les agents

Les agents amplifient les coûts et la charge. Un model qui boucle, un outil appelé en continu ou un agent qui multiplie les retries peut provoquer simultanément un denial of wallet et un denial of service. Dans les systèmes agentiques, l'abus de coûts et l'atteinte à la disponibilité correspondent souvent au même incident opérationnel. Les tool calls MCP peuvent en effet entraîner à la fois des dépenses et des effets de bord réels.

Les contrôles de coûts et de rate doivent donc s'appliquer au flux des outils, et pas uniquement à celui des models. Odock impose au trafic MCP des limites de payload, des rate limits, des contrôles de concurrency, des budgets et des quotas. Un agent dont la consommation devient incontrôlée atteint ainsi un plafond avant d'alourdir votre facture ou de saturer vos systèmes upstream. Les budgets sont réservés avant l'appel, et non rapprochés une fois les dégâts constatés : c'est ce qui distingue une véritable limite d'un simple rapport. Consultez les pages consacrées aux [budgets](https://docs.odock.ai/docs/management/budgets/) et aux [quotas](https://docs.odock.ai/docs/management/quotas/).

## Le point commun aux six risques

Ces six risques ont un point commun. Chacun constitue une variante de la même erreur : traiter l'accès aux outils comme une fonctionnalité d'intégration plutôt que comme une frontière gouvernée entre des capacités. L'accès sur-privilégié résulte d'une frontière absente. L'injection et le poisoning exploitent des frontières qui n'inspectent pas le contenu. La dispersion des credentials découle d'une frontière qui n'a jamais été centralisée. Les angles morts d'audit apparaissent lorsqu'elle n'enregistre rien, et la consommation non bornée lorsqu'elle n'impose aucun plafond.

C'est pourquoi Odock.ai constitue un point naturel pour maîtriser l'essentiel de ces risques. Lorsque l'accès MCP passe par la couche contrôlée d'Odock, cette frontière existe par défaut : elle inspecte, enregistre et applique des limites de manière cohérente pour chaque agent, au lieu d'être réimplémentée dans chaque application. Ce concept est approfondi dans [notre article sur la gouvernance des serveurs MCP pour les agents IA](/fr/blog/mcp-server-governance-for-ai-agents/).

## Ce qu'Odock ne résout pas

Il est important de préciser les limites d'Odock, car certains aspects de la sécurité MCP se situent hors du périmètre de toute gateway.

Odock ne patche pas le serveur MCP lui-même. Le secure SDLC et la gestion des correctifs des serveurs que vous exploitez restent sous votre responsabilité. Il ne valide pas les schémas métier complexes au sein d'un handler d'outil, car cette vérification relève parfois du code de l'outil. Enfin, il ne remplace pas la décision initiale de refuser la connexion d'un serveur douteux. Les choix relatifs à la provenance et à la confiance vous appartiennent.

Odock permet néanmoins d'appliquer les contrôles connus, simples et efficaces qui répondent aux six risques décrits ci-dessus. Si ces risques apparaissent régulièrement dans les rapports d'incident, c'est précisément parce que ces contrôles ne sont pas appliqués de manière cohérente.

## Pourquoi nous l'avons intégré à Odock.ai

Soyons transparents : la sécurisation de l'accès des agents aux outils constitue l'une des principales raisons d'être d'Odock.ai. Chaque serveur MCP est traité comme un accès scopé à des capacités, avec grants, allowed et blocked tools, semantic filters, limites de rate et de payload, ainsi qu'un enregistrement de chaque tool call. L'ensemble est placé derrière un endpoint unique compatible avec OpenAI, que vous pouvez adopter sans réécrire vos agents. En faisant passer vos accès MCP par Odock, chaque tool call devient un accès scopé à des capacités, inspecté et enregistré. La majeure partie de la surface d'attaque MCP observée en 2026 se retrouve ainsi privée de point d'entrée.

Si vos agents obtiennent de nouveaux outils plus vite que votre processus de revue de sécurité ne peut les examiner, Odock.ai est précisément conçu pour combler cet écart. [Parlez à notre équipe](#waitlist-section) ou [découvrez la MCP gateway Odock](/fr/mcp-gateway/) afin de fournir des outils à vos agents sans leur accorder un accès sans limites.

## Sources

- [MCP Security, 6 Risks Enterprise Teams Face in 2026, DataStealth](https://datastealth.io/blogs/mcp-security)
- [Model Context Protocol Security, Complete Guide, SentinelOne](https://www.sentinelone.com/cybersecurity-101/cybersecurity/mcp-security/)
- [MCP Security Vulnerabilities, Prompt Injection and Tool Poisoning, Practical DevSecOps](https://www.practical-devsecops.com/mcp-security-vulnerabilities/)
- [Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning, arXiv](https://arxiv.org/pdf/2603.22489)
- [Sécurité MCP Odock](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
- [Usage records MCP Odock](https://docs.odock.ai/docs/observability/usage-records/mcp-usage-records/)
