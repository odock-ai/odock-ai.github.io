---
{
  "slug": "litellm-vs-envoy-ai-gateway",
  "category": "AI Gateway Comparison",
  "title": "LiteLLM vs Envoy AI Gateway: Application Gateway or Infrastructure Layer?",
  "seoTitle": "Envoy AI Gateway vs LiteLLM (2026 Comparison)",
  "description": "Envoy AI Gateway vs LiteLLM compared on Kubernetes-native routing, provider support, token rate limiting, virtual keys, budgets, and extensibility — plus where Odock fits for AI governance.",
  "excerpt": "LiteLLM is an application-level LLM gateway with product features like virtual keys and budgets. Envoy AI Gateway is cloud-native infrastructure: Envoy and Kubernetes primitives for AI traffic. They solve different layers of the same problem.",
  "publishedAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "readingTime": "7 min",
  "keywords": [
    "envoy ai gateway vs litellm",
    "litellm vs envoy ai gateway",
    "envoy ai gateway",
    "kubernetes llm gateway",
    "llm gateway comparison",
    "ai gateway comparison",
    "litellm alternative"
  ],
  "heroEyebrow": "Head-to-head comparison",
  "intro": "Envoy AI Gateway and LiteLLM both put a gateway in front of your model providers, but they live at different layers. LiteLLM is an application gateway with platform features built in. Envoy AI Gateway is infrastructure: open, Envoy-based routing primitives managed through Kubernetes resources.",
  "keyTakeaways": [
    "Choose LiteLLM when you want product-level gateway features today: virtual keys, budgets, spend attribution, guardrail hooks, and broad provider coverage in a self-hosted proxy.",
    "Choose Envoy AI Gateway when your platform is deeply Kubernetes-native and you want AI traffic managed with Envoy performance and CRD-driven configuration.",
    "Choose Odock when you need governance above routing: MCP tool-call control, tenant policy, budget reservation, security modules, and audit records in one AI-native plane."
  ],
  "faq": [
    {
      "question": "Is Envoy AI Gateway production-ready compared to LiteLLM?",
      "answer": "Envoy itself is battle-tested infrastructure, and Envoy AI Gateway builds on it with backing from the CNCF ecosystem. As a newer project, its AI-specific product surface — key management, budgets, guardrail ecosystems — is thinner than LiteLLM's. Many teams treat it as infrastructure to build on rather than a finished platform."
    },
    {
      "question": "Do I need Kubernetes to run Envoy AI Gateway?",
      "answer": "Practically, yes — it is configured through Kubernetes resources built on the Gateway API. LiteLLM runs anywhere a container or Python process runs, which makes it more accessible for teams not standardized on Kubernetes."
    },
    {
      "question": "Can Odock replace either of them?",
      "answer": "Odock overlaps with LiteLLM's governance features (keys, budgets, routing, guardrails) and adds MCP tool governance and workflow-level security modules. It is not an Envoy-style infrastructure layer; teams with heavy Kubernetes routing needs sometimes pair infrastructure routing with an AI-native governance plane like Odock above it."
    }
  ],
  "relatedSlugs": [
    "litellm-vs-kong-ai-gateway",
    "litellm-vs-cloudflare-ai-gateway",
    "litellm-vs-portkey",
    "litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison"
  ],
  "cta": {
    "title": "Need AI governance above the routing layer?",
    "description": "Odock gives you one controlled endpoint for providers, MCP servers, guardrails, budgets, quotas, and plugin-augmented AI workflows.",
    "primaryLabel": "Request a demo",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "View on GitHub",
    "secondaryHref": "https://github.com/odock-ai"
  },
  "locales": {
    "fr": {
      "category": "Comparatif AI Gateway",
      "title": "LiteLLM vs Envoy AI Gateway : gateway applicative ou couche d'infrastructure ?",
      "seoTitle": "Envoy AI Gateway vs LiteLLM (comparatif 2026)",
      "description": "Envoy AI Gateway vs LiteLLM comparés sur le routing Kubernetes-native, le support providers, le rate limiting en tokens, les virtual keys, les budgets et l'extensibilité — et où Odock se situe pour la gouvernance IA.",
      "excerpt": "LiteLLM est une gateway LLM applicative avec des fonctionnalités produit comme les virtual keys et les budgets. Envoy AI Gateway est de l'infrastructure cloud-native : des primitives Envoy et Kubernetes pour le trafic IA. Ils résolvent des couches différentes du même problème.",
      "readingTime": "7 min",
      "heroEyebrow": "Comparatif direct",
      "intro": "Envoy AI Gateway et LiteLLM placent tous deux une gateway devant vos providers de models, mais ils vivent à des couches différentes. LiteLLM est une gateway applicative avec des fonctionnalités plateforme intégrées. Envoy AI Gateway est de l'infrastructure : des primitives de routing ouvertes, basées sur Envoy, gérées via des ressources Kubernetes.",
      "keyTakeaways": [
        "Choisissez LiteLLM quand vous voulez des fonctionnalités de gateway produit dès aujourd'hui : virtual keys, budgets, attribution de dépense, hooks de guardrails et large couverture providers dans un proxy auto-hébergé.",
        "Choisissez Envoy AI Gateway quand votre plateforme est profondément Kubernetes-native et que vous voulez le trafic IA géré avec la performance d'Envoy et une configuration par CRD.",
        "Choisissez Odock quand il vous faut de la gouvernance au-dessus du routing : contrôle des tool calls MCP, politiques tenant, réservation de budget, modules de sécurité et enregistrements d'audit dans un plan AI-native unique."
      ],
      "faq": [
        {
          "question": "Envoy AI Gateway est-il prêt pour la production face à LiteLLM ?",
          "answer": "Envoy lui-même est une infrastructure éprouvée, et Envoy AI Gateway s'appuie dessus avec le soutien de l'écosystème CNCF. En tant que projet plus récent, sa surface produit spécifique à l'IA — gestion des clés, budgets, écosystèmes de guardrails — est plus mince que celle de LiteLLM. Beaucoup d'équipes le traitent comme une infrastructure sur laquelle construire plutôt qu'une plateforme finie."
        },
        {
          "question": "Faut-il Kubernetes pour faire tourner Envoy AI Gateway ?",
          "answer": "En pratique, oui — il se configure via des ressources Kubernetes construites sur la Gateway API. LiteLLM tourne partout où un conteneur ou un process Python tourne, ce qui le rend plus accessible aux équipes non standardisées sur Kubernetes."
        },
        {
          "question": "Odock peut-il remplacer l'un ou l'autre ?",
          "answer": "Odock recouvre les fonctionnalités de gouvernance de LiteLLM (clés, budgets, routing, guardrails) et ajoute la gouvernance des outils MCP et des modules de sécurité au niveau du workflow. Ce n'est pas une couche d'infrastructure façon Envoy ; les équipes avec de gros besoins de routing Kubernetes associent parfois le routing d'infrastructure à un plan de gouvernance AI-native comme Odock au-dessus."
        }
      ],
      "cta": {
        "title": "Besoin de gouvernance IA au-dessus de la couche de routing ?",
        "description": "Odock vous donne un endpoint contrôlé unique pour les providers, serveurs MCP, guardrails, budgets, quotas et workflows IA augmentés par plugins.",
        "primaryLabel": "Demander une démo",
        "secondaryLabel": "Voir sur GitHub"
      }
    }
  }
}
---
<!-- locale:en -->
## The short answer

These two projects answer different questions. LiteLLM answers "how do our teams call many model providers with keys, budgets, and fallbacks?" Envoy AI Gateway answers "how does our Kubernetes platform route and rate-limit AI traffic with Envoy-grade infrastructure?"

If you're choosing between them, decide first whether you're buying an application gateway or building on infrastructure primitives.

## Side-by-side comparison

| Dimension | LiteLLM | Envoy AI Gateway |
| --- | --- | --- |
| Layer | Application-level LLM proxy | Cloud-native infrastructure on Envoy |
| Configuration | Proxy config, admin UI, Python extensibility | Kubernetes CRDs built on the Gateway API |
| Provider support | 100+ providers, OpenAI-compatible interface | OpenAI/Anthropic-compatible endpoints, provider connectivity, model virtualization |
| Access control | Virtual keys per user, team, org | Upstream credential management, platform-level auth |
| Budgets and limits | Budgets, spend tracking, rate limits per key | Token-aware rate limiting primitives |
| Guardrails | Built-in, third-party, custom hooks | Assemble from infrastructure and external services |
| Reliability | Retries, fallbacks, load balancing | Envoy-grade routing, fallback, load balancing |
| Best fit | AI platform teams wanting features now | Kubernetes platform teams wanting open routing infrastructure |

## Where LiteLLM wins

Product surface. LiteLLM ships the features an AI platform team needs on day one: virtual keys with budgets and spend attribution, broad provider coverage behind an OpenAI-compatible interface, guardrail hooks across the request lifecycle, and fallbacks that just work. It runs anywhere, with or without Kubernetes.

For most teams whose problem is provider sprawl and cost control, LiteLLM is the shorter path.

## Where Envoy AI Gateway wins

Infrastructure quality and openness. Envoy is proven at enormous scale, and Envoy AI Gateway brings that engine to AI traffic with Kubernetes-native configuration, token-aware rate limiting, model virtualization, and no vendor control plane. For platform teams that already think in Gateway API resources, AI traffic becomes another well-managed workload class — open, performant, and composable.

The trade is assembly: guardrails, key products, budgets-as-features, and governance workflows are largely yours to build on top.

## When to choose which

Choose **LiteLLM** if:

- You want keys, budgets, and fallbacks as shipped features
- Your team isn't (only) Kubernetes-centric
- Custom guardrail code in Python fits your workflow

Choose **Envoy AI Gateway** if:

- Your platform is Kubernetes-native and Gateway API-driven
- You value Envoy's performance and open governance model
- You're prepared to build product features above the routing layer

## Where Odock fits

Odock lives above routing, at the governance layer — and extends it to what agents actually do. Beyond model calls, production agents make MCP tool calls against your repositories, databases, and SaaS tools. Odock governs both kinds of traffic in one plane:

- One controlled endpoint for LLM providers and MCP servers
- Tool-level access grants and approval steps for agent actions
- Budget reservation and quota enforcement before execution
- Modular security scans: prompt injection, data masking, output policy
- Audit-ready usage records for compliance (including EU AI Act workflows)

If your evaluation includes agentic workloads, look at how each option treats a tool call, then see the [MCP gateway overview](/mcp-gateway/) and the full [AI gateway comparison](/blog/litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison/).

## Honest caveats

LiteLLM has more production history, and Envoy is proven infrastructure; Odock is the newer project. Its case is focus: AI-native governance — MCP included — as the core design goal rather than a feature added to a router.

<!-- locale:fr -->
## La réponse courte

Ces deux projets répondent à des questions différentes. LiteLLM répond à « comment nos équipes appellent-elles de nombreux providers de models avec des clés, des budgets et des fallbacks ? » Envoy AI Gateway répond à « comment notre plateforme Kubernetes route-t-elle et limite-t-elle le trafic IA avec une infrastructure de niveau Envoy ? »

Si vous hésitez entre les deux, décidez d'abord si vous achetez une gateway applicative ou si vous construisez sur des primitives d'infrastructure.

## Comparaison côte à côte

| Dimension | LiteLLM | Envoy AI Gateway |
| --- | --- | --- |
| Couche | Proxy LLM applicatif | Infrastructure cloud-native sur Envoy |
| Configuration | Config du proxy, UI d'admin, extensibilité Python | CRD Kubernetes construits sur la Gateway API |
| Support providers | 100+ providers, interface compatible OpenAI | Endpoints compatibles OpenAI/Anthropic, connectivité providers, virtualisation de models |
| Contrôle d'accès | Virtual keys par utilisateur, équipe, org | Gestion des credentials amont, auth au niveau plateforme |
| Budgets et limites | Budgets, suivi de dépense, rate limits par clé | Primitives de rate limiting conscientes des tokens |
| Guardrails | Intégrés, tiers, hooks personnalisés | À assembler depuis l'infrastructure et des services externes |
| Fiabilité | Retries, fallbacks, load balancing | Routing, fallback et load balancing de niveau Envoy |
| Meilleur profil | Équipes plateforme IA qui veulent des fonctionnalités maintenant | Équipes plateforme Kubernetes qui veulent une infra de routing ouverte |

## Où LiteLLM gagne

La surface produit. LiteLLM livre dès le premier jour les fonctionnalités dont une équipe plateforme IA a besoin : virtual keys avec budgets et attribution de dépense, large couverture providers derrière une interface compatible OpenAI, hooks de guardrails sur le cycle de vie de la requête, et des fallbacks qui fonctionnent. Il tourne partout, avec ou sans Kubernetes.

Pour la plupart des équipes dont le problème est la prolifération des providers et le contrôle des coûts, LiteLLM est le chemin le plus court.

## Où Envoy AI Gateway gagne

La qualité d'infrastructure et l'ouverture. Envoy a fait ses preuves à très grande échelle, et Envoy AI Gateway apporte ce moteur au trafic IA avec une configuration Kubernetes-native, du rate limiting conscient des tokens, de la virtualisation de models et aucun plan de contrôle propriétaire. Pour les équipes plateforme qui pensent déjà en ressources Gateway API, le trafic IA devient une classe de charge bien gérée de plus — ouverte, performante et composable.

L'arbitrage est l'assemblage : guardrails, produits de clés, budgets-en-fonctionnalités et workflows de gouvernance restent largement à construire au-dessus.

## Quand choisir lequel

Choisissez **LiteLLM** si :

- Vous voulez clés, budgets et fallbacks comme fonctionnalités livrées
- Votre équipe n'est pas (uniquement) centrée Kubernetes
- Des guardrails personnalisés en Python conviennent à votre workflow

Choisissez **Envoy AI Gateway** si :

- Votre plateforme est Kubernetes-native et pilotée par la Gateway API
- Vous valorisez la performance d'Envoy et son modèle de gouvernance ouvert
- Vous êtes prêts à construire des fonctionnalités produit au-dessus de la couche de routing

## Où Odock se situe

Odock vit au-dessus du routing, à la couche de gouvernance — et l'étend à ce que les agents font réellement. Au-delà des appels de models, les agents en production font des appels d'outils MCP contre vos dépôts, bases de données et outils SaaS. Odock gouverne les deux types de trafic dans un plan unique :

- Un endpoint contrôlé pour les providers LLM et les serveurs MCP
- Des droits d'accès par outil et des étapes d'approbation pour les actions d'agents
- La réservation de budget et l'application des quotas avant exécution
- Des scans de sécurité modulaires : prompt injection, masquage de données, politique de sortie
- Des enregistrements d'usage prêts pour l'audit et la conformité (y compris le règlement IA européen)

Si votre évaluation inclut des charges agentiques, regardez comment chaque option traite un appel d'outil, puis voyez la page [gateway MCP](/fr/mcp-gateway/) et le [comparatif complet des AI gateways](/fr/blog/litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison/).

## Les réserves honnêtes

LiteLLM a plus d'historique de production, et Envoy est une infrastructure éprouvée ; Odock est le projet le plus récent. Son argument est le focus : la gouvernance AI-native — MCP compris — comme objectif de conception central plutôt qu'une fonctionnalité ajoutée à un routeur.
