---
{
  "slug": "ai-coding-agents-productivity-paradox-measure-cost-per-resolved-issue",
  "category": "AI Engineering",
  "title": "AI Coding Agents Write 30% More Code but Ship No More: Measure Cost per Resolved Issue at the Gateway",
  "seoTitle": "AI Coding Agent ROI: From 30% More Code to Cost per Resolved Issue",
  "description": "A Harvard study of 700+ software firms found coding agents raise code output by 30% but leave issue resolution flat while review time climbs. Here is how to route, govern, and measure coding-agent traffic with Odock so spend maps to shipped work.",
  "excerpt": "Coding agents added 30% more lines of code across 700+ firms, but resolved issues did not move and PR merge time rose 49%. The fix is not fewer agents; it is measuring and governing them like infrastructure, at the gateway.",
  "publishedAt": "2026-10-13",
  "updatedAt": "2026-10-13",
  "readingTime": "10 min",
  "keywords": [
    "AI coding agents productivity",
    "AI coding ROI",
    "Claude Code gateway",
    "developer AI spend",
    "cost per resolved issue",
    "code review bottleneck",
    "GitHub MCP governance",
    "LLM cost attribution",
    "engineering metrics AI"
  ],
  "heroEyebrow": "Engineering productivity",
  "intro": "In October 2026, a Harvard working paper built on Jellyfish and GitHub telemetry from more than 700 software firms put a number on what many engineering leaders suspected. Adopting AI coding agents raised lines of code by about 30%, commits by 20%, and pull requests by 23%. The resolution rate of Jira issues and epics did not move. Time from pull request to merge rose 49%. The agents are producing; the organisation is not shipping more. This article explains why, and how to turn coding-agent traffic into something you can route, budget, govern, and measure against outcomes with Odock.",
  "keyTakeaways": [
    "The Harvard and Jellyfish data shows output up (lines +30%, commits +20%, PRs +23%) and outcomes flat (no significant change in Jira resolution), with the bottleneck moving to review: merge time +49%, comments per PR +35%.",
    "Most companies cannot answer 'what did coding agents cost per resolved issue?' because agent traffic goes straight from laptops and CI to providers, with shared keys and no ticket context.",
    "Routing every coding agent through Odock gives per-developer and per-agent virtual keys, team budgets reserved before each call, routing tiers, and usage records with cost, model, and latency.",
    "A Flow Studio graph can tag each request with repository and ticket from headers and export the outcome asynchronously, so spend joins cleanly with Jira and GitHub results.",
    "MCP tool rules stop agents from 'solving' the review bottleneck the dangerous way: allow reading issues and opening PRs, block merging, force-pushing, and deleting branches."
  ],
  "faq": [
    {
      "question": "What did the Harvard study on AI coding agents find?",
      "answer": "The working paper by Fiona Chen and James Stratton, using Jellyfish engineering telemetry and GitHub signals from more than 700 software firms through March 2026, found coding-agent adoption raised lines of code about 30%, commits 20%, and pull requests 23%, while the resolution of Jira issues and epics did not change significantly. Time from PR submission to merge rose about 49% and comments per PR about 35%."
    },
    {
      "question": "Can Claude Code and other coding agents run through Odock?",
      "answer": "Yes, for tools that let you set a base URL. Odock exposes native Anthropic Messages, OpenAI Chat Completions and Responses, Gemini, Mistral including Codestral fill-in-the-middle, and vLLM endpoints. Point the tool's base URL at Odock and use an Odock virtual API key instead of the provider key."
    },
    {
      "question": "How do I attribute AI coding spend to tickets?",
      "answer": "Have the agent send repository and ticket headers, for example with ANTHROPIC_CUSTOM_HEADERS in Claude Code. A pre-route flow copies them into request metadata, and a post-response flow sends model, tokens, status, and ticket to your warehouse with a webhook. Join that with Jira resolution data to compute cost per resolved issue."
    },
    {
      "question": "Should we cap coding-agent spend?",
      "answer": "Cap it per team with budgets, not per developer by hand. Odock reserves estimated cost before the upstream call and returns a clear 402 budget_exceeded when a window is exhausted, which stops runaway agent loops without blocking the rest of the organisation."
    },
    {
      "question": "Why govern the GitHub MCP server?",
      "answer": "Because the bottleneck is review. The fastest way to make an agent look productive is to let it merge its own pull requests. MCP tool allowlists and blocklists keep agents on reading, branching, and opening PRs, while merges, force-pushes, and deletions stay with humans."
    }
  ],
  "relatedSlugs": [
    "how-to-control-llm-costs-with-virtual-api-keys-budgets-and-quotas",
    "what-to-log-monitor-and-trace-in-production-llm-apps",
    "mcp-server-governance-for-ai-agents",
    "jev-decision-model-with-odock-flow-studio-and-plugins"
  ],
  "cta": {
    "title": "Know what every coding agent costs, and what it shipped",
    "description": "Odock gives each developer and agent a virtual key, enforces team budgets before the call, governs GitHub and CI tools over MCP, and records cost and outcome for every request.",
    "primaryLabel": "Talk to the team",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "Read the usage records docs",
    "secondaryHref": "https://docs.odock.ai/docs/observability/usage-records/"
  },
  "locales": {
    "fr": {
      "category": "Ingénierie IA",
      "title": "Les agents de code écrivent 30 % de code en plus mais ne livrent pas plus : mesurez le coût par ticket résolu dans la gateway",
      "seoTitle": "ROI des agents de code IA : du code en plus au coût par ticket résolu",
      "description": "Une étude de Harvard sur plus de 700 éditeurs logiciels montre que les agents de code augmentent la production de code de 30 % sans améliorer la résolution des tickets, tandis que le temps de revue grimpe. Voici comment router, gouverner et mesurer ce trafic avec Odock pour relier la dépense au travail livré.",
      "excerpt": "Les agents de code ont ajouté 30 % de lignes de code dans plus de 700 entreprises, mais les tickets résolus n'ont pas bougé et le délai de merge des PR a augmenté de 49 %. La solution n'est pas moins d'agents, mais de les mesurer et de les gouverner comme de l'infrastructure, dans la gateway.",
      "heroEyebrow": "Productivité de l'ingénierie",
      "intro": "En octobre 2026, un working paper de Harvard construit à partir de la télémétrie Jellyfish et GitHub de plus de 700 éditeurs logiciels a chiffré ce que beaucoup de responsables techniques soupçonnaient. L'adoption d'agents de code a augmenté les lignes de code d'environ 30 %, les commits de 20 % et les pull requests de 23 %. Le taux de résolution des tickets et epics Jira n'a pas bougé. Le délai entre pull request et merge a augmenté de 49 %. Les agents produisent ; l'organisation ne livre pas davantage. Cet article explique pourquoi, et comment transformer le trafic des agents de code en quelque chose que vous pouvez router, budgéter, gouverner et mesurer face aux résultats avec Odock.",
      "keyTakeaways": [
        "Les données Harvard et Jellyfish montrent une production en hausse (lignes +30 %, commits +20 %, PR +23 %) et des résultats stables (aucun changement significatif de la résolution Jira), avec un goulot déplacé vers la revue : délai de merge +49 %, commentaires par PR +35 %.",
        "La plupart des entreprises ne savent pas répondre à « combien les agents de code ont-ils coûté par ticket résolu ? », car leur trafic part directement des postes et de la CI vers les providers, avec des clés partagées et sans contexte de ticket.",
        "Faire passer chaque agent de code par Odock apporte des virtual keys par développeur et par agent, des budgets d'équipe réservés avant chaque appel, des tiers de routage et des usage records avec coût, modèle et latence.",
        "Un graphe Flow Studio peut marquer chaque requête avec le dépôt et le ticket issus des headers, puis exporter le résultat en asynchrone, pour relier proprement la dépense aux résultats Jira et GitHub.",
        "Les règles d'outils MCP empêchent les agents de « résoudre » le goulot de revue de la mauvaise manière : lire les tickets et ouvrir des PR, oui ; merger, forcer un push ou supprimer une branche, non."
      ],
      "cta": {
        "title": "Sachez ce que coûte chaque agent de code, et ce qu'il a livré",
        "description": "Odock donne à chaque développeur et à chaque agent une virtual key, applique les budgets d'équipe avant l'appel, gouverne les outils GitHub et CI via MCP et enregistre coût et résultat pour chaque requête.",
        "primaryLabel": "Parler à l'équipe",
        "secondaryLabel": "Lire la doc des usage records"
      },
      "readingTime": "10 min",
      "keywords": [
        "productivité agents de code IA",
        "ROI IA développement",
        "Claude Code gateway",
        "dépenses IA développeurs",
        "coût par ticket résolu",
        "goulot de revue de code",
        "gouvernance MCP GitHub",
        "attribution des coûts LLM"
      ],
      "faq": [
        {
          "question": "Qu'a montré l'étude de Harvard sur les agents de code ?",
          "answer": "Le working paper de Fiona Chen et James Stratton, fondé sur la télémétrie Jellyfish et les signaux GitHub de plus de 700 éditeurs logiciels jusqu'en mars 2026, montre que l'adoption d'agents de code augmente les lignes de code d'environ 30 %, les commits de 20 % et les pull requests de 23 %, sans changement significatif de la résolution des tickets et epics Jira. Le délai entre soumission et merge d'une PR augmente d'environ 49 % et les commentaires par PR d'environ 35 %."
        },
        {
          "question": "Claude Code et les autres agents de code peuvent-ils passer par Odock ?",
          "answer": "Oui, pour les outils qui permettent de définir une URL de base. Odock expose des endpoints natifs Anthropic Messages, OpenAI Chat Completions et Responses, Gemini, Mistral dont le fill-in-the-middle Codestral, et vLLM. Pointez l'URL de base de l'outil vers Odock et utilisez une virtual API key Odock à la place de la clé provider."
        },
        {
          "question": "Comment attribuer la dépense IA de développement aux tickets ?",
          "answer": "Faites envoyer à l'agent des headers de dépôt et de ticket, par exemple avec ANTHROPIC_CUSTOM_HEADERS dans Claude Code. Un flow pre-route les copie dans les métadonnées de la requête, et un flow post-response envoie modèle, tokens, statut et ticket vers votre entrepôt via un webhook. Croisez ensuite avec les données de résolution Jira pour obtenir le coût par ticket résolu."
        },
        {
          "question": "Faut-il plafonner la dépense des agents de code ?",
          "answer": "Plafonnez-la par équipe avec des budgets, pas à la main par développeur. Odock réserve le coût estimé avant l'appel upstream et renvoie un 402 budget_exceeded explicite quand une fenêtre est épuisée, ce qui stoppe les boucles d'agents sans bloquer le reste de l'organisation."
        },
        {
          "question": "Pourquoi gouverner le serveur MCP GitHub ?",
          "answer": "Parce que le goulot est la revue. La façon la plus rapide de rendre un agent « productif » est de le laisser merger ses propres pull requests. Les allowlists et blocklists d'outils MCP cantonnent les agents à la lecture, aux branches et à l'ouverture de PR, tandis que merges, force-push et suppressions restent aux humains."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## The number everyone shared this week

Between October 9 and 12, 2026, one chart travelled through every engineering Slack: AI coding agents make developers produce more code, and companies do not ship more software.

The source is a Harvard working paper by economists Fiona Chen and James Stratton, *Artificial Intelligence in the Firm: Bottlenecks in Software Production*. It pairs Jellyfish engineering telemetry with GitHub activity across more than 700 software companies and roughly 300 million work events, from 2021 through March 2026. According to the coverage of the paper:

- lines of code rose about **30%** after coding-agent adoption
- commits rose about **20%**, pull requests about **23%**
- the resolution rate of Jira issues and completed epics, the authors' proxy for shipped features, **did not change in a statistically significant way**
- time from pull request submission to merge rose about **49%**, revision requests nearly doubled, and comments per pull request rose about **35%**
- by March 2026, 80% of firms ran AI code review tools, yet only 23% of review comments were AI-generated

Some outlets read the 49% as reviewers working harder; others, more carefully, as work waiting longer downstream. Either way the conclusion is the same: agents moved the constraint. Writing code got cheaper. Reviewing, integrating, and deciding did not.

## Why most companies cannot see this in their own data

The study used years of telemetry from a specialised vendor. Most engineering organisations trying to answer the same question for themselves hit a wall within a day, because coding-agent traffic is invisible in the places that matter:

- **It goes straight to providers.** Terminal agents, IDE assistants, PR review bots, and CI agents each call a model provider directly, often with a shared team key or a personal card.
- **It has no business context.** A provider invoice says how many tokens a key used. It does not say which repository, which ticket, or which agent.
- **It has no ceiling.** An agent stuck in a fix-test-fix loop overnight spends until someone notices the invoice.
- **It has tools.** Agents now act on GitHub, Jira, and CI through MCP servers, with permissions that were scoped for humans.

You cannot compute cost per resolved issue if the cost has no issue attached. That is an infrastructure problem, and it has an infrastructure fix.

## Step 1: route every coding agent through one gateway

Odock exposes native endpoints for the API shapes coding tools already speak, so the migration is a base URL and a key, not a rewrite:

- **Anthropic Messages** at `https://api.odock.ai` for Claude Code and Anthropic SDK based agents
- **OpenAI Chat Completions and Responses** at `https://api.odock.ai/v1` for OpenAI-compatible CLIs, IDE extensions, and review bots
- **Mistral**, including Codestral **fill-in-the-middle** at `/v1/mistral/fim/completions` for autocomplete
- **vLLM** endpoints for self-hosted code models
- **Gemini** for Gemini-based tools

For Claude Code, that is three environment variables:

```bash
export ANTHROPIC_BASE_URL="https://api.odock.ai"
export ANTHROPIC_API_KEY="sk_dock_virtual_key_for_this_developer"
export ANTHROPIC_CUSTOM_HEADERS="x-repo: payments-api
x-ticket: PAY-1423"
```

Each developer, and each autonomous agent (the CI fixer, the PR reviewer, the dependency bot), gets its own **virtual API key**. Keys carry their owner, team, model grants, MCP grants, budgets, and quotas. Provider keys stay encrypted inside Odock and never reach a laptop.

## Step 2: put budgets where the loops are

Coding agents are the clearest case of the agent cost paradox. Gartner warned in August 2026 that inference costs for agentic workflows will rise more than fivefold in two years even as token prices fall, because agents use 5 to 30 times more tokens than chatbots for equivalent tasks.

In Odock, budgets apply to an organisation, team, user, or API key, and they are enforced **before** the upstream call: the gateway estimates the cost, reserves it against every matching budget, and only then calls the provider. When a window is exhausted the agent receives `402 budget_exceeded`, not a surprise on next month's invoice. Quotas do the same for request and token counts.

Two practical rules:

- **Budget teams, not individuals.** A team budget with per-key sub-limits for autonomous agents stops runaway loops without making developers ask for permission to work.
- **Give autonomous agents their own keys and lower ceilings.** A CI agent that retries a failing build forever is a different risk from a developer pairing with Claude Code.

For agents that run unattended, add Odock's built-in **Agent identity and loop ceiling** flow template. It requires `x-odock-agent-id` and `x-odock-agent-iteration` headers and stops an agent that exceeds a set number of turns, before it spends more tokens.

## Step 3: tag every request with the work it serves

Here is the piece that makes cost per resolved issue possible. The developer's tool sends `x-repo` and `x-ticket` headers (or your wrapper script derives them from the branch name). A small Flow Studio flow does the rest:

- **Pre-route:** a **Transform** node copies the headers into request metadata, so they travel with the request evidence.
- **Post-response:** a **Get Response Value** node reads token usage, and a **Send Webhook** node posts key, team, model, tokens, status, repository, and ticket to your warehouse. Post-response runs asynchronously by default, so it adds no latency for the developer.

```yaml
version: 1
name: Tag coding traffic with repo and ticket
on_error: continue
phases:
  pre_route:
    nodes:
      - {id: start, type: start}
      - id: tag
        type: transform
        config:
          target: request
          operations:
            - {op: set, path: metadata.repo, value: "{{request.headers.x-repo}}"}
            - {op: set, path: metadata.ticket, value: "{{request.headers.x-ticket}}"}
      - {id: end, type: end}
    edges:
      - {from: start, to: tag}
      - {from: tag, to: end}
  post_response:
    nodes:
      - {id: start, type: start}
      - {id: usage, type: response_get, config: {path: body.usage, var: usage}}
      - id: export
        type: webhook_send
        config:
          url: https://warehouse.example.com/hooks/ai-coding-usage
          payload:
            api_key_id: "{{request.api_key_id}}"
            model: "{{request.model}}"
            status: "{{response.status}}"
            usage: "{{vars.usage}}"
            repo: "{{request.headers.x-repo}}"
            ticket: "{{request.headers.x-ticket}}"
            at: "{{now}}"
      - {id: end, type: end}
    edges:
      - {from: start, to: usage}
      - {from: usage, to: export}
      - {from: export, to: end}
```

Odock's usage records already hold the principal (organisation, team, user, key), provider, model, status, latency, tokens, cost, routing trace, and plugin and safety outcomes for every call, without storing prompts or completions. The flow adds the business key you need to join it with Jira and GitHub.

[![Diagram showing coding agents routed through the Odock gateway with per-developer keys, team budgets, routing tiers, ticket tagging and MCP rules, then usage records joined with Jira and GitHub outcomes to compute cost per resolved issue](/blog/coding-agents-cost-per-resolved-issue.svg "Spend becomes measurable when every request carries the work it serves.")](/blog/coding-agents-cost-per-resolved-issue.svg)

## Step 4: measure outcomes, not output

With spend tagged by ticket, the warehouse join is straightforward. The metrics worth putting on a dashboard are the ones the Harvard paper says actually move, or do not:

| Metric | Source | What it tells you |
| --- | --- | --- |
| Cost per resolved issue | Odock export joined with Jira resolution | Whether agent spend buys shipped work |
| Agent spend on unresolved tickets | Same join, open or abandoned tickets | Where tokens go without outcomes |
| PR submit-to-merge time | GitHub | Whether review is the bottleneck |
| Follow-up fixes and reverts after merge | GitHub | Whether agent code creates downstream work |
| Spend by model tier per team | Odock usage records | Whether frontier models are used where they matter |

Lines of code and number of PRs belong nowhere near this dashboard. The study's whole point is that they rise while outcomes stay flat.

## Step 5: spend the savings on the real bottleneck

If review is the constraint, two things follow.

**Route generation to the cheapest tier that works.** Odock routing lets a key define candidates, strategies, and failover, and a pre-route flow can downgrade boilerplate-shaped requests to a smaller model. A decision model such as Jev, called from Flow Studio, can classify requests as simple or complex in about 100 ms. See [our article on Jev and Flow Studio](/blog/jev-decision-model-with-odock-flow-studio-and-plugins/).

**Measure AI review as its own workload.** Give PR review bots their own virtual keys and budgets. If 80% of firms run AI review but only 23% of comments come from it, you want to know what that spend buys: comments accepted, defects caught, review time saved.

## Step 6: do not let agents remove the bottleneck by removing review

There is a dangerous shortcut to "fixing" merge time: let agents merge. With MCP servers for GitHub and CI in every agent's toolset, that shortcut is one tool call away.

Odock governs MCP traffic per key:

- **Access grants** decide which keys may call the GitHub or CI MCP server at all.
- **Allowed tools** keep coding agents on the work they should do: read issues, read files, create branches, open pull requests, comment.
- **Blocked tools** keep the irreversible actions with humans: merge, force-push, delete branch, change repository settings or secrets.
- **Semantic filters** inspect tool-call payloads before execution.
- **Upstream auth injection** keeps the GitHub token in Odock, so it never appears in an agent's environment.
- **MCP usage records** attribute every tool call to key, server, tool, status, and cost.

For actions that are sometimes legitimate, such as an agent merging a dependency update in a low-risk repository, use the built-in **MCP external approval gate** flow template: it calls your policy service before destructive tools and fails closed when approval is denied or unavailable.

## What engineering leaders should do this quarter

- Inventory every coding tool and agent that calls a model provider directly, including CI.
- Issue a virtual key per developer and per autonomous agent; revoke shared provider keys.
- Set team budgets with lower ceilings for unattended agents; enable the loop ceiling template.
- Add repository and ticket headers to agent configurations and deploy the tagging flow.
- Join the export with Jira and GitHub and publish cost per resolved issue, not lines of code.
- Lock the GitHub MCP server down to read, branch, and open-PR tools; route merges through humans or an approval gate.

The Harvard result is not an argument against coding agents. It is an argument against running them as unmanaged, unmeasured traffic. Once every request carries an identity, a budget, a ticket, and a record, you can see where agents create shipped value and where they only create more code to review.

## Sources

- [AI Weekly, Harvard Study: AI Coding Agents Lift Code 30%, Shipped Output Flat](https://aiweekly.co/alerts/harvard-study-ai-coding-agents-lift-code-30-shipped-output-flat)
- [Tech Insider, AI Coding Agents Add 30% More Code, Not Software](https://tech-insider.org/ai-coding-agents-30-percent-more-code-not-software-2026/)
- [n8nlab, AI Coding Agents Add Code, Not Software Output, Study Finds](https://n8nlab.io/news/ai-coding-agents-code-review-bottleneck)
- [Superpower Daily, AI coding agents boosted code output without clear task completion gains](https://superpowerdaily.com/posts/ai-coding-agents-boosted-code-output-without-clear-task-completion-gains-study-finds)
- [Computerworld, AI inference is getting cheaper, but your agents are getting more expensive, August 17, 2026](https://www.computerworld.com/article/4210786/ai-inference-is-getting-cheaper-but-your-agents-are-getting-more-expensive.html)
- [Odock native model endpoints](https://docs.odock.ai/docs/usage/native-models-call/)
- [Odock budgets](https://docs.odock.ai/docs/management/budgets/)
- [Odock usage records](https://docs.odock.ai/docs/observability/usage-records/)
- [Odock MCP security](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)

<!-- locale:fr -->
## Le chiffre que tout le monde a partagé cette semaine

Entre le 9 et le 12 octobre 2026, un graphique a circulé dans tous les Slack d'ingénierie : les agents de code font produire plus de code aux développeurs, et les entreprises ne livrent pas plus de logiciel.

La source est un working paper de Harvard signé par les économistes Fiona Chen et James Stratton, *Artificial Intelligence in the Firm: Bottlenecks in Software Production*. Il croise la télémétrie d'ingénierie de Jellyfish avec l'activité GitHub de plus de 700 éditeurs logiciels et environ 300 millions d'événements de travail, de 2021 à mars 2026. D'après la couverture de l'étude :

- les lignes de code augmentent d'environ **30 %** après l'adoption d'agents de code
- les commits d'environ **20 %**, les pull requests d'environ **23 %**
- le taux de résolution des tickets Jira et des epics terminés, l'indicateur des auteurs pour les fonctionnalités livrées, **ne change pas de manière statistiquement significative**
- le délai entre soumission et merge d'une pull request augmente d'environ **49 %**, les demandes de révision doublent presque, et les commentaires par pull request augmentent d'environ **35 %**
- en mars 2026, 80 % des entreprises utilisaient des outils de revue de code IA, mais seuls 23 % des commentaires de revue étaient générés par l'IA

Certains médias y voient des relecteurs qui travaillent davantage ; d'autres, plus prudents, du travail qui attend plus longtemps en aval. Dans les deux cas, la conclusion est la même : les agents ont déplacé la contrainte. Écrire du code est devenu moins cher. Relire, intégrer et décider, non.

## Pourquoi la plupart des entreprises ne le voient pas dans leurs propres données

L'étude s'appuie sur des années de télémétrie d'un fournisseur spécialisé. La plupart des organisations qui tentent de répondre à la même question pour elles-mêmes butent dès le premier jour, car le trafic des agents de code est invisible là où cela compte :

- **Il part directement chez les providers.** Agents en terminal, assistants d'IDE, bots de revue de PR et agents CI appellent chacun un provider de modèles, souvent avec une clé d'équipe partagée ou une carte personnelle.
- **Il n'a pas de contexte métier.** Une facture provider indique combien de tokens une clé a consommés. Elle ne dit ni quel dépôt, ni quel ticket, ni quel agent.
- **Il n'a pas de plafond.** Un agent coincé toute la nuit dans une boucle correction-test-correction dépense jusqu'à ce que quelqu'un remarque la facture.
- **Il a des outils.** Les agents agissent désormais sur GitHub, Jira et la CI via des serveurs MCP, avec des permissions pensées pour des humains.

Impossible de calculer un coût par ticket résolu si le coût n'est rattaché à aucun ticket. C'est un problème d'infrastructure, et il a une solution d'infrastructure.

## Étape 1 : faire passer chaque agent de code par une seule gateway

Odock expose des endpoints natifs pour les formats d'API que les outils de code parlent déjà. La migration se résume à une URL de base et une clé, pas à une réécriture :

- **Anthropic Messages** sur `https://api.odock.ai` pour Claude Code et les agents fondés sur le SDK Anthropic
- **OpenAI Chat Completions et Responses** sur `https://api.odock.ai/v1` pour les CLIs compatibles OpenAI, les extensions d'IDE et les bots de revue
- **Mistral**, dont le **fill-in-the-middle** Codestral sur `/v1/mistral/fim/completions` pour l'autocomplétion
- les endpoints **vLLM** pour les modèles de code auto-hébergés
- **Gemini** pour les outils fondés sur Gemini

Pour Claude Code, cela tient en trois variables d'environnement :

```bash
export ANTHROPIC_BASE_URL="https://api.odock.ai"
export ANTHROPIC_API_KEY="sk_dock_virtual_key_for_this_developer"
export ANTHROPIC_CUSTOM_HEADERS="x-repo: payments-api
x-ticket: PAY-1423"
```

Chaque développeur, et chaque agent autonome (le correcteur CI, le relecteur de PR, le bot de dépendances), reçoit sa propre **virtual API key**. Les clés portent leur propriétaire, leur équipe, leurs grants de modèles et de MCP, leurs budgets et leurs quotas. Les clés provider restent chiffrées dans Odock et n'arrivent jamais sur un poste.

## Étape 2 : placer les budgets là où sont les boucles

Les agents de code sont le cas le plus net du paradoxe des coûts agentiques. Gartner a averti en août 2026 que le coût d'inférence des workflows agentiques sera multiplié par plus de cinq en deux ans, même si le prix des tokens baisse, car les agents consomment 5 à 30 fois plus de tokens qu'un chatbot pour une tâche équivalente.

Dans Odock, les budgets s'appliquent à une organisation, une équipe, un utilisateur ou une clé API, et sont appliqués **avant** l'appel upstream : la gateway estime le coût, le réserve sur chaque budget concerné, puis seulement appelle le provider. Quand une fenêtre est épuisée, l'agent reçoit un `402 budget_exceeded`, pas une surprise sur la facture du mois suivant. Les quotas font de même pour le nombre de requêtes et de tokens.

Deux règles pratiques :

- **Budgétez les équipes, pas les individus.** Un budget d'équipe avec des sous-limites par clé pour les agents autonomes stoppe les boucles sans obliger les développeurs à demander la permission de travailler.
- **Donnez aux agents autonomes leurs propres clés et des plafonds plus bas.** Un agent CI qui relance indéfiniment un build en échec n'a pas le même profil de risque qu'un développeur qui travaille avec Claude Code.

Pour les agents qui tournent sans surveillance, ajoutez le template de flow intégré **Agent identity and loop ceiling** d'Odock. Il exige les headers `x-odock-agent-id` et `x-odock-agent-iteration` et arrête un agent qui dépasse un nombre de tours fixé, avant qu'il ne dépense plus de tokens.

## Étape 3 : marquer chaque requête avec le travail qu'elle sert

C'est la pièce qui rend possible le coût par ticket résolu. L'outil du développeur envoie les headers `x-repo` et `x-ticket` (ou votre script d'enveloppe les déduit du nom de branche). Un petit flow Flow Studio fait le reste :

- **Pre-route :** un nœud **Transform** copie les headers dans les métadonnées de la requête, pour qu'ils voyagent avec les preuves de la requête.
- **Post-response :** un nœud **Get Response Value** lit la consommation de tokens, et un nœud **Send Webhook** envoie clé, équipe, modèle, tokens, statut, dépôt et ticket vers votre entrepôt. Le post-response s'exécute en asynchrone par défaut : aucune latence pour le développeur.

```yaml
version: 1
name: Tag coding traffic with repo and ticket
on_error: continue
phases:
  pre_route:
    nodes:
      - {id: start, type: start}
      - id: tag
        type: transform
        config:
          target: request
          operations:
            - {op: set, path: metadata.repo, value: "{{request.headers.x-repo}}"}
            - {op: set, path: metadata.ticket, value: "{{request.headers.x-ticket}}"}
      - {id: end, type: end}
    edges:
      - {from: start, to: tag}
      - {from: tag, to: end}
  post_response:
    nodes:
      - {id: start, type: start}
      - {id: usage, type: response_get, config: {path: body.usage, var: usage}}
      - id: export
        type: webhook_send
        config:
          url: https://warehouse.example.com/hooks/ai-coding-usage
          payload:
            api_key_id: "{{request.api_key_id}}"
            model: "{{request.model}}"
            status: "{{response.status}}"
            usage: "{{vars.usage}}"
            repo: "{{request.headers.x-repo}}"
            ticket: "{{request.headers.x-ticket}}"
            at: "{{now}}"
      - {id: end, type: end}
    edges:
      - {from: start, to: usage}
      - {from: usage, to: export}
      - {from: export, to: end}
```

Les usage records d'Odock contiennent déjà, pour chaque appel, le principal (organisation, équipe, utilisateur, clé), le provider, le modèle, le statut, la latence, les tokens, le coût, la trace de routage et les résultats des plugins et de la sécurité, sans stocker ni prompts ni réponses. Le flow ajoute la clé métier nécessaire pour les croiser avec Jira et GitHub.

[![Schéma montrant des agents de code routés via la gateway Odock avec virtual keys par développeur, budgets d'équipe, tiers de routage, marquage par ticket et règles MCP, puis des usage records croisés avec les résultats Jira et GitHub pour calculer le coût par ticket résolu](/blog/coding-agents-cost-per-resolved-issue-fr.svg "La dépense devient mesurable quand chaque requête porte le travail qu'elle sert.")](/blog/coding-agents-cost-per-resolved-issue-fr.svg)

## Étape 4 : mesurer les résultats, pas la production

Une fois la dépense marquée par ticket, la jointure dans l'entrepôt est simple. Les métriques qui méritent un tableau de bord sont celles qui, selon l'étude de Harvard, bougent vraiment, ou ne bougent pas :

| Métrique | Source | Ce qu'elle indique |
| --- | --- | --- |
| Coût par ticket résolu | Export Odock croisé avec la résolution Jira | Si la dépense agent achète du travail livré |
| Dépense agent sur tickets non résolus | Même jointure, tickets ouverts ou abandonnés | Où partent les tokens sans résultat |
| Délai entre soumission et merge des PR | GitHub | Si la revue est le goulot |
| Correctifs et reverts après merge | GitHub | Si le code des agents crée du travail en aval |
| Dépense par tier de modèle et par équipe | Usage records Odock | Si les modèles frontier servent là où ils comptent |

Les lignes de code et le nombre de PR n'ont rien à faire sur ce tableau de bord. Tout l'enseignement de l'étude est qu'ils augmentent pendant que les résultats stagnent.

## Étape 5 : investir les économies dans le vrai goulot

Si la revue est la contrainte, deux conséquences en découlent.

**Router la génération vers le tier le moins cher qui fonctionne.** Le routage Odock permet à une clé de définir des candidats, des stratégies et un failover, et un flow pre-route peut rétrograder les requêtes de type boilerplate vers un modèle plus petit. Un modèle de décision comme Jev, appelé depuis Flow Studio, peut classer une requête comme simple ou complexe en environ 100 ms. Voir [notre article sur Jev et Flow Studio](/fr/blog/jev-decision-model-with-odock-flow-studio-and-plugins/).

**Mesurer la revue IA comme une charge à part entière.** Donnez aux bots de revue de PR leurs propres virtual keys et budgets. Si 80 % des entreprises utilisent la revue IA mais que seuls 23 % des commentaires en proviennent, vous voulez savoir ce que cette dépense achète : commentaires acceptés, défauts détectés, temps de revue économisé.

## Étape 6 : ne pas laisser les agents supprimer le goulot en supprimant la revue

Il existe un raccourci dangereux pour « corriger » le délai de merge : laisser les agents merger. Avec des serveurs MCP pour GitHub et la CI dans la boîte à outils de chaque agent, ce raccourci n'est qu'à un appel d'outil.

Odock gouverne le trafic MCP par clé :

- **Les grants d'accès** décident quelles clés peuvent appeler le serveur MCP GitHub ou CI.
- **Les outils autorisés** cantonnent les agents de code à leur travail : lire les tickets et les fichiers, créer des branches, ouvrir des pull requests, commenter.
- **Les outils bloqués** gardent les actions irréversibles chez les humains : merge, force-push, suppression de branche, modification des paramètres ou secrets du dépôt.
- **Les filtres sémantiques** inspectent les payloads des appels d'outils avant exécution.
- **L'injection de l'auth upstream** garde le token GitHub dans Odock : il n'apparaît jamais dans l'environnement d'un agent.
- **Les usage records MCP** attribuent chaque appel d'outil à une clé, un serveur, un outil, un statut et un coût.

Pour les actions parfois légitimes, comme un agent qui merge une mise à jour de dépendance dans un dépôt à faible risque, utilisez le template de flow intégré **MCP external approval gate** : il appelle votre service de policy avant les outils destructifs et échoue fermé si l'approbation est refusée ou indisponible.

## Ce que les responsables techniques devraient faire ce trimestre

- Recenser chaque outil de code et chaque agent qui appelle directement un provider, y compris en CI.
- Émettre une virtual key par développeur et par agent autonome ; révoquer les clés provider partagées.
- Définir des budgets d'équipe avec des plafonds plus bas pour les agents sans surveillance ; activer le template de plafond de boucles.
- Ajouter les headers de dépôt et de ticket à la configuration des agents et déployer le flow de marquage.
- Croiser l'export avec Jira et GitHub et publier le coût par ticket résolu, pas les lignes de code.
- Restreindre le serveur MCP GitHub aux outils de lecture, de branche et d'ouverture de PR ; faire passer les merges par des humains ou une gate d'approbation.

Le résultat de Harvard n'est pas un argument contre les agents de code. C'est un argument contre leur exécution sous forme de trafic non géré et non mesuré. Dès que chaque requête porte une identité, un budget, un ticket et une trace, vous voyez où les agents créent de la valeur livrée et où ils ne créent que davantage de code à relire.

## Sources

- [AI Weekly, Harvard Study: AI Coding Agents Lift Code 30%, Shipped Output Flat](https://aiweekly.co/alerts/harvard-study-ai-coding-agents-lift-code-30-shipped-output-flat)
- [Tech Insider, AI Coding Agents Add 30% More Code, Not Software](https://tech-insider.org/ai-coding-agents-30-percent-more-code-not-software-2026/)
- [n8nlab, AI Coding Agents Add Code, Not Software Output, Study Finds](https://n8nlab.io/news/ai-coding-agents-code-review-bottleneck)
- [Superpower Daily, AI coding agents boosted code output without clear task completion gains](https://superpowerdaily.com/posts/ai-coding-agents-boosted-code-output-without-clear-task-completion-gains-study-finds)
- [Computerworld, AI inference is getting cheaper, but your agents are getting more expensive, 17 août 2026](https://www.computerworld.com/article/4210786/ai-inference-is-getting-cheaper-but-your-agents-are-getting-more-expensive.html)
- [Endpoints natifs Odock](https://docs.odock.ai/docs/usage/native-models-call/)
- [Budgets Odock](https://docs.odock.ai/docs/management/budgets/)
- [Usage records Odock](https://docs.odock.ai/docs/observability/usage-records/)
- [Sécurité MCP dans Odock](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
