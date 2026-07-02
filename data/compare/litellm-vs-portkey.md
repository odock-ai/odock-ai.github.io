---
{
  "slug": "litellm-vs-portkey",
  "category": "AI Gateway Comparison",
  "title": "LiteLLM vs Portkey: Open-Source Gateway or AI Ops Platform?",
  "seoTitle": "LiteLLM vs Portkey (2026 Comparison)",
  "description": "LiteLLM vs Portkey compared on gateway architecture, observability, prompt management, guardrails, budgets, and deployment — plus where Odock fits for governed LLM and MCP traffic.",
  "excerpt": "LiteLLM is a self-hosted model-access gateway. Portkey is a productized AI operations platform with a gateway inside it. The decision is really about how much platform you want to own versus buy.",
  "publishedAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "readingTime": "8 min",
  "keywords": [
    "litellm vs portkey",
    "portkey vs litellm",
    "portkey alternative",
    "litellm alternative",
    "llm gateway comparison",
    "ai gateway comparison",
    "ai ops platform"
  ],
  "heroEyebrow": "Head-to-head comparison",
  "intro": "LiteLLM and Portkey overlap heavily on paper: unified provider access, keys, budgets, guardrails, caching, retries, and fallbacks. The real difference is the operating model. LiteLLM is infrastructure you run. Portkey is an AI operations product you adopt.",
  "keyTakeaways": [
    "Choose LiteLLM when you want a self-hosted, open-source model gateway you fully control, with virtual keys, budgets, and provider fallbacks as code-first primitives.",
    "Choose Portkey when you want a productized AI ops layer — dashboards, prompt management, observability, and guardrails — with hosted ergonomics and minimal platform work.",
    "Choose Odock when the gateway itself must govern more than model calls: MCP tool traffic, tenant policy, budget reservation, and modular security across the whole AI workflow."
  ],
  "faq": [
    {
      "question": "Is Portkey open source like LiteLLM?",
      "answer": "Portkey's core AI gateway is open source, but the full product experience — dashboards, prompt management, observability, and guardrail orchestration — is a hosted platform. LiteLLM concentrates more of its functionality in the self-hosted open-source proxy itself."
    },
    {
      "question": "Which is better for cost control, LiteLLM or Portkey?",
      "answer": "Both support budgets and rate limits. LiteLLM attributes spend per virtual key, user, team, or organization at the proxy level. Portkey adds product workflow around usage with dashboards and alerting. If you need spend enforcement close to the metal, LiteLLM; if you want cost visibility as a product, Portkey."
    },
    {
      "question": "Why consider Odock instead of either?",
      "answer": "Odock targets the governance gap: agents now make MCP tool calls as well as model calls, and most gateways govern only the latter. Odock applies access grants, budget holds, security scans, and audit records to both, from one control plane you can self-host."
    }
  ],
  "relatedSlugs": [
    "litellm-vs-kong-ai-gateway",
    "litellm-vs-cloudflare-ai-gateway",
    "kong-vs-cloudflare-ai-gateway",
    "litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison"
  ],
  "cta": {
    "title": "Want AI governance you own, not just dashboards you rent?",
    "description": "Odock gives you one controlled endpoint for providers, MCP servers, guardrails, budgets, quotas, and plugin-augmented AI workflows.",
    "primaryLabel": "Request a demo",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "View on GitHub",
    "secondaryHref": "https://github.com/odock-ai"
  },
  "locales": {
    "fr": {
      "category": "Comparatif AI Gateway",
      "title": "LiteLLM vs Portkey : gateway open-source ou plateforme AI ops ?",
      "seoTitle": "LiteLLM vs Portkey (comparatif 2026)",
      "description": "LiteLLM vs Portkey comparés sur l'architecture gateway, l'observabilité, la gestion des prompts, les guardrails, les budgets et le déploiement — et où Odock se situe pour le trafic LLM et MCP gouverné.",
      "excerpt": "LiteLLM est une gateway d'accès aux models auto-hébergée. Portkey est une plateforme d'opérations IA productisée avec une gateway à l'intérieur. La décision porte en réalité sur la part de plateforme que vous voulez posséder ou acheter.",
      "readingTime": "8 min",
      "heroEyebrow": "Comparatif direct",
      "intro": "LiteLLM et Portkey se recoupent largement sur le papier : accès unifié aux providers, clés, budgets, guardrails, cache, retries et fallbacks. La vraie différence est le modèle opérationnel. LiteLLM est une infrastructure que vous faites tourner. Portkey est un produit d'opérations IA que vous adoptez.",
      "keyTakeaways": [
        "Choisissez LiteLLM quand vous voulez une gateway de models open-source auto-hébergée que vous contrôlez entièrement, avec virtual keys, budgets et fallbacks providers comme primitives code-first.",
        "Choisissez Portkey quand vous voulez une couche AI ops productisée — dashboards, gestion des prompts, observabilité et guardrails — avec une ergonomie hébergée et un minimum de travail plateforme.",
        "Choisissez Odock quand la gateway elle-même doit gouverner plus que des appels de models : trafic d'outils MCP, politiques tenant, réservation de budget et sécurité modulaire sur tout le workflow IA."
      ],
      "faq": [
        {
          "question": "Portkey est-il open source comme LiteLLM ?",
          "answer": "Le cœur de l'AI gateway de Portkey est open source, mais l'expérience produit complète — dashboards, gestion des prompts, observabilité et orchestration des guardrails — est une plateforme hébergée. LiteLLM concentre davantage de ses fonctionnalités dans le proxy open-source auto-hébergé lui-même."
        },
        {
          "question": "Lequel est meilleur pour le contrôle des coûts, LiteLLM ou Portkey ?",
          "answer": "Les deux supportent budgets et rate limits. LiteLLM attribue la dépense par virtual key, utilisateur, équipe ou organisation au niveau du proxy. Portkey ajoute un workflow produit autour de l'usage avec dashboards et alertes. Pour une application de la dépense au plus près de l'infrastructure, LiteLLM ; pour la visibilité des coûts comme produit, Portkey."
        },
        {
          "question": "Pourquoi considérer Odock plutôt que l'un des deux ?",
          "answer": "Odock cible le vide de gouvernance : les agents font désormais des appels d'outils MCP en plus des appels de models, et la plupart des gateways ne gouvernent que les seconds. Odock applique droits d'accès, réservations de budget, scans de sécurité et enregistrements d'audit aux deux, depuis un plan de contrôle auto-hébergeable."
        }
      ],
      "cta": {
        "title": "Une gouvernance IA que vous possédez, pas seulement des dashboards que vous louez ?",
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

Ask one question first: **do you want to run your AI gateway or subscribe to it?**

LiteLLM is an open-source proxy your platform team deploys, configures, and extends in code. Portkey is closer to an AI operations platform: a gateway wrapped in dashboards, prompt management, observability, and guardrail workflows with hosted ergonomics.

Both will route your traffic to many providers through one API. They differ in who owns the operating experience.

## Side-by-side comparison

| Dimension | LiteLLM | Portkey |
| --- | --- | --- |
| Product shape | Self-hosted open-source LLM proxy | AI ops platform with gateway, hosted-first |
| Interface | OpenAI-compatible API across 100+ providers | Unified API with routing configs across providers |
| Observability | Callbacks and integrations (Langfuse, Prometheus, etc.) | Built-in logs, traces, analytics dashboards |
| Prompt management | Not a core focus | Prompt templates, versioning, and lifecycle as product features |
| Guardrails | Built-in, third-party, and custom guardrail hooks | Deterministic, model-based, partner, and custom guardrails that can influence routing |
| Budgets and keys | Virtual keys, budgets, rate limits per key/team/org | Budget limits and usage controls per key/workspace |
| Reliability | Retries, fallbacks, load balancing | Retries, fallbacks, load balancing, canary routing |
| Deployment | Self-hosted; enterprise tier available | Hosted platform; open-source gateway core |
| Best fit | Platform teams who want infrastructure they control | Product and ML teams who want AI ops out of the box |

## Where LiteLLM wins

LiteLLM keeps the control surface in your infrastructure. Virtual keys, budgets, provider fallbacks, and guardrail hooks are configuration and code — reviewable, versionable, and deployable like everything else you run. Provider coverage is broad, and the community iterates fast.

If your organization has data-residency constraints, a strong platform team, or simply a policy of owning critical infrastructure, LiteLLM's self-hosted model is the safer default.

## Where Portkey wins

Portkey is strongest when you want the operating workflow, not just the proxy. Logs, traces, cost analytics, prompt versioning, and guardrail outcomes live in one product. Guardrail results can steer routing decisions. Agent-framework integrations are packaged rather than assembled.

For teams without the appetite to run and maintain gateway infrastructure — or where prompt lifecycle management is a first-class need — Portkey compresses months of platform work into a subscription.

## When to choose which

Choose **LiteLLM** if:

- Self-hosting and data control are non-negotiable
- You want code-first extensibility (Python callbacks, custom guardrails)
- Your platform team is comfortable operating infrastructure

Choose **Portkey** if:

- You want dashboards, prompt management, and observability on day one
- A hosted control plane is acceptable for your data policies
- You'd rather configure a product than operate a proxy

## Where Odock fits

Odock's bet is that the next governance problem is not model access or AI ops dashboards — it is the **full AI workflow**, including what agents do with tools. A production agent request touches a model, retrieved context, MCP tool calls, tenant policy, and spend limits. Odock governs that as one pipeline:

- One controlled, self-hostable endpoint for LLM providers and MCP servers
- Access grants and virtual keys scoped to users, teams, and tenants
- Budget reservation before execution, not just spend reports after
- Modular security: prompt injection detection, data masking, tool-call approval
- Audit-ready usage records for compliance (including EU AI Act workflows)

If agents and MCP tools are on your roadmap, compare what happens to a **tool call** in each product — that is where the differences get sharp. See the [MCP gateway overview](/mcp-gateway/) and the full [AI gateway comparison](/blog/litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison/).

## Honest caveats

LiteLLM and Portkey are both more mature than Odock today. Portkey's dashboards are polished; LiteLLM's provider coverage is broad and battle-tested. Odock's argument is architectural focus — governed LLM plus MCP traffic in one place — not feature parity everywhere.

<!-- locale:fr -->
## La réponse courte

Posez d'abord une question : **voulez-vous opérer votre AI gateway ou vous y abonner ?**

LiteLLM est un proxy open-source que votre équipe plateforme déploie, configure et étend en code. Portkey est plus proche d'une plateforme d'opérations IA : une gateway enveloppée de dashboards, de gestion des prompts, d'observabilité et de workflows de guardrails, avec une ergonomie hébergée.

Les deux routeront votre trafic vers de nombreux providers via une seule API. Ils diffèrent sur qui possède l'expérience opérationnelle.

## Comparaison côte à côte

| Dimension | LiteLLM | Portkey |
| --- | --- | --- |
| Forme du produit | Proxy LLM open-source auto-hébergé | Plateforme AI ops avec gateway, hosted-first |
| Interface | API compatible OpenAI sur 100+ providers | API unifiée avec configs de routing entre providers |
| Observabilité | Callbacks et intégrations (Langfuse, Prometheus, etc.) | Logs, traces et dashboards analytiques intégrés |
| Gestion des prompts | Pas un focus central | Templates, versioning et cycle de vie des prompts comme fonctionnalités produit |
| Guardrails | Hooks intégrés, tiers et personnalisés | Guardrails déterministes, à base de models, partenaires ou personnalisés, pouvant influencer le routing |
| Budgets et clés | Virtual keys, budgets, rate limits par clé/équipe/org | Limites de budget et contrôles d'usage par clé/workspace |
| Fiabilité | Retries, fallbacks, load balancing | Retries, fallbacks, load balancing, routing canary |
| Déploiement | Auto-hébergé ; offre enterprise | Plateforme hébergée ; cœur de gateway open-source |
| Meilleur profil | Équipes plateforme qui veulent une infrastructure qu'elles contrôlent | Équipes produit et ML qui veulent l'AI ops clé en main |

## Où LiteLLM gagne

LiteLLM garde la surface de contrôle dans votre infrastructure. Virtual keys, budgets, fallbacks providers et hooks de guardrails sont de la configuration et du code — relisibles, versionnables et déployables comme tout ce que vous opérez. La couverture providers est large et la communauté itère vite.

Si votre organisation a des contraintes de résidence des données, une équipe plateforme solide, ou simplement une politique de possession de l'infrastructure critique, le modèle auto-hébergé de LiteLLM est le défaut le plus sûr.

## Où Portkey gagne

Portkey est le plus fort quand vous voulez le workflow opérationnel, pas seulement le proxy. Logs, traces, analyses de coûts, versioning des prompts et résultats de guardrails vivent dans un seul produit. Les résultats des guardrails peuvent orienter le routing. Les intégrations avec les frameworks d'agents sont packagées plutôt qu'assemblées.

Pour les équipes sans l'appétit d'opérer une infrastructure de gateway — ou quand la gestion du cycle de vie des prompts est un besoin de premier plan — Portkey compresse des mois de travail plateforme en un abonnement.

## Quand choisir lequel

Choisissez **LiteLLM** si :

- L'auto-hébergement et le contrôle des données ne sont pas négociables
- Vous voulez une extensibilité code-first (callbacks Python, guardrails personnalisés)
- Votre équipe plateforme est à l'aise pour opérer de l'infrastructure

Choisissez **Portkey** si :

- Vous voulez dashboards, gestion des prompts et observabilité dès le premier jour
- Un plan de contrôle hébergé est acceptable pour vos politiques de données
- Vous préférez configurer un produit plutôt qu'opérer un proxy

## Où Odock se situe

Le pari d'Odock est que le prochain problème de gouvernance n'est ni l'accès aux models ni les dashboards AI ops — c'est le **workflow IA complet**, y compris ce que les agents font avec les outils. Une requête d'agent en production touche un model, du contexte récupéré, des appels d'outils MCP, des politiques tenant et des limites de dépense. Odock gouverne cela comme un pipeline unique :

- Un endpoint contrôlé et auto-hébergeable pour les providers LLM et les serveurs MCP
- Des droits d'accès et des virtual keys par utilisateur, équipe et tenant
- La réservation de budget avant exécution, pas seulement des rapports après coup
- Une sécurité modulaire : détection de prompt injection, masquage de données, approbation des tool calls
- Des enregistrements d'usage prêts pour l'audit et la conformité (y compris le règlement IA européen)

Si les agents et les outils MCP sont dans votre feuille de route, comparez ce qui arrive à un **appel d'outil** dans chaque produit — c'est là que les différences deviennent nettes. Voir la page [gateway MCP](/fr/mcp-gateway/) et le [comparatif complet des AI gateways](/fr/blog/litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison/).

## Les réserves honnêtes

LiteLLM et Portkey sont tous deux plus matures qu'Odock aujourd'hui. Les dashboards de Portkey sont léchés ; la couverture providers de LiteLLM est large et éprouvée. L'argument d'Odock est le focus architectural — le trafic LLM et MCP gouverné au même endroit — pas la parité de fonctionnalités partout.
