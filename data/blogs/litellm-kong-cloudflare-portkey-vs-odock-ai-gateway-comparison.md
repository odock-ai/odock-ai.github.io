---
{
  "slug": "litellm-kong-cloudflare-portkey-vs-odock-ai-gateway-comparison",
  "category": "AI Gateway Comparison",
  "title": "LiteLLM, Kong, Cloudflare, Portkey, and Odock: An Honest AI Gateway Comparison",
  "seoTitle": "LiteLLM vs Kong vs Cloudflare vs Portkey vs Odock",
  "description": "Compare LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway, and Odock by architecture, security, plugins, governance, and workflow extensibility.",
  "excerpt": "Most AI gateways overlap on provider routing, logs, budgets, and guardrails. The real difference is the philosophy: model access, API management, edge control, hosted AI ops, cloud-native routing, or modular AI workflow governance.",
  "publishedAt": "2026-04-27",
  "updatedAt": "2026-07-02",
  "readingTime": "10 min",
  "keywords": [
    "litellm vs kong",
    "ai gateway comparison",
    "llm gateway comparison",
    "kong ai gateway",
    "litellm alternative",
    "odock ai gateway",
    "ai gateway plugins"
  ],
  "heroEyebrow": "Gateway comparison",
  "intro": "AI gateways are starting to sound similar: one endpoint, many providers, logs, budgets, guardrails, and fallbacks. That overlap is real. The meaningful difference is not whether a product can proxy an OpenAI-style request. The difference is where each product starts from, what it optimizes for, and how deeply it treats security and workflow customization as part of the AI runtime.",
  "keyTakeaways": [
    "LiteLLM is currently one of the strongest open-source choices for broad model access, virtual keys, budgets, fallbacks, and production AI gateway operations.",
    "Kong is strongest for organizations that already think in API gateway terms and want AI controls through a mature plugin-based API management platform.",
    "Odock's intended differentiation is a modular security engine and workflow plugin layer designed specifically around AI, MCP tools, tenant policy, and request lifecycle augmentation."
  ],
  "faq": [
    {
      "question": "Is Odock more mature than LiteLLM or Kong today?",
      "answer": "No. LiteLLM and Kong are more mature products today. Odock's argument is architectural focus: a lighter AI-native gateway where modular security and workflow plugins are first-class design goals."
    },
    {
      "question": "Why not just use Kong plugins?",
      "answer": "Kong is excellent when you already run Kong or need enterprise API management. Odock is meant for teams that want AI workflow plugins, MCP governance, model routing, and security modules without adopting a broad API management platform."
    },
    {
      "question": "How is Odock different from LiteLLM guardrails?",
      "answer": "LiteLLM already has strong guardrail support, including custom guardrails and lifecycle hooks. Odock's intended direction is to make the entire security and workflow pipeline modular: prompt, context, tool call, provider route, response, telemetry, and tenant policy."
    }
  ],
  "relatedSlugs": [
    "what-is-an-llm-gateway-and-why-ai-teams-need-one",
    "how-to-build-a-plugin-layer-for-llm-workflows",
    "mcp-server-governance-for-ai-agents",
    "prompt-injection-data-leakage-and-llm-security-guardrails"
  ],
  "cta": {
    "title": "Want an AI-native gateway with modular security and workflow plugins?",
    "description": "Odock is built around one controlled endpoint for providers, MCP servers, guardrails, budgets, quotas, and plugin-augmented AI workflows.",
    "primaryLabel": "Request a demo",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "View on GitHub",
    "secondaryHref": "https://github.com/odock-ai"
  },
  "locales": {
    "fr": {
      "category": "Comparatif IA Gateway",
      "title": "LiteLLM, Kong, Cloudflare, Portkey et Odock : une comparaison honnête des IA gateways",
      "seoTitle": "LiteLLM vs Kong vs Cloudflare vs Portkey vs Odock",
      "description": "Comparez LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway et Odock selon l'architecture, la sécurité, les plugins, la gouvernance et l'extensibilité des workflows.",
      "excerpt": "La plupart des AI gateways se recoupent sur le routing provider, les logs, les budgets et les guardrails. La vraie différence tient à la philosophie : accès aux models, API management, contrôle à l'edge, opérations AI hébergées, routing cloud-native ou gouvernance modulaire des workflows AI.",
      "heroEyebrow": "Comparatif gateway",
      "intro": "Les AI gateways commencent à se ressembler : un endpoint, plusieurs providers, logs, budgets, guardrails et fallbacks. Ce chevauchement est réel. La différence importante n'est pas de savoir si un produit peut proxy une requête de style OpenAI. Elle tient au point de départ de chaque produit, à ce qu'il optimise, et à la profondeur avec laquelle il traite la sécurité et la personnalisation des workflows comme une partie du runtime AI.",
      "keyTakeaways": [
        "LiteLLM est actuellement l'un des choix open-source les plus solides pour un large accès aux models, les virtual keys, les budgets, les fallbacks et les opérations de production d'une AI gateway.",
        "Kong est le plus pertinent pour les organisations qui raisonnent déjà en termes d'API gateway et veulent des contrôles AI via une plateforme mature d'API management basée sur des plugins.",
        "La différenciation visée par Odock est un moteur de sécurité modulaire et une couche de workflow plugins conçus spécifiquement autour de l'AI, des outils MCP, des politiques tenant et de l'augmentation du cycle de vie des requêtes."
      ],
      "cta": {
        "title": "Vous voulez une AI-native gateway avec sécurité modulaire et workflow plugins ?",
        "description": "Odock est construit autour d'un endpoint contrôlé unique pour les providers, serveurs MCP, guardrails, budgets, quotas et workflows AI augmentés par plugins.",
        "primaryLabel": "Demander une démo",
        "secondaryLabel": "Voir sur GitHub"
      },
      "readingTime": "10 min",
      "keywords": [
        "litellm vs kong",
        "ai gateway comparison",
        "llm gateway comparison",
        "kong ai gateway",
        "litellm alternative",
        "odock ai gateway",
        "ai gateway plugins"
      ],
      "faq": [
        {
          "question": "Odock est-il aujourd’hui plus mature que LiteLLM ou Kong ?",
          "answer": "Non. LiteLLM et Kong sont aujourd'hui des produits plus matures. L'argument d'Odock est son orientation architecturale : une AI-native gateway plus légère, où la sécurité modulaire et les workflow plugins sont des objectifs de conception de premier plan."
        },
        {
          "question": "Pourquoi ne pas simplement utiliser des plugins Kong ?",
          "answer": "Kong est excellent si vous utilisez déjà Kong ou si vous avez besoin d'API management enterprise. Odock s'adresse aux équipes qui veulent des workflow plugins AI, une gouvernance MCP, du model routing et des modules de sécurité sans adopter une plateforme large d'API management."
        },
        {
          "question": "En quoi Odock diffère-t-il des guardrails LiteLLM ?",
          "answer": "LiteLLM dispose déjà d'un support solide des guardrails, y compris des guardrails personnalisés et des lifecycle hooks. La direction visée par Odock est de rendre tout le pipeline de sécurité et de workflow modulaire : prompt, contexte, tool call, provider route, réponse, télémétrie et politique tenant."
        }
      ]
    },
    "it": {
      "category": "Confronto gateway AI",
      "title": "LiteLLM, Kong, Cloudflare, Portkey e Odock: un confronto onesto tra AI gateway",
      "seoTitle": "LiteLLM vs Kong vs Cloudflare vs Portkey vs Odock",
      "description": "Confronta LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway e Odock per architettura, sicurezza, plugin, governance ed estensibilità dei workflow.",
      "excerpt": "La maggior parte degli AI gateway si sovrappone su provider routing, log, budget e guardrail. La vera differenza è la filosofia: accesso ai model, API management, controllo edge, operations AI hosted, routing cloud-native o governance modulare dei workflow AI.",
      "heroEyebrow": "Confronto gateway",
      "intro": "Gli AI gateway iniziano a sembrare simili: un endpoint, molti providers, log, budget, guardrail e fallback. Questa sovrapposizione è reale. La differenza significativa non è se un prodotto possa fare da proxy a una richiesta in stile OpenAI. La differenza è da dove parte ogni prodotto, cosa ottimizza e quanto considera sicurezza e personalizzazione dei workflow come parte del runtime AI.",
      "keyTakeaways": [
        "LiteLLM è oggi una delle opzioni open-source più solide per ampio accesso ai model, virtual keys, budget, fallback e operations di produzione per un AI gateway.",
        "Kong è più forte per le organizzazioni che ragionano già in termini di API gateway e vogliono controlli AI tramite una piattaforma matura di API management basata su plugin.",
        "La differenziazione prevista per Odock è un motore di sicurezza modulare e un layer di workflow plugin progettati specificamente attorno ad AI, strumenti MCP, policy tenant e augmentation del ciclo di vita delle richieste."
      ],
      "cta": {
        "title": "Vuoi un AI-native gateway con sicurezza modulare e workflow plugin?",
        "description": "Odock è costruito attorno a un endpoint controllato unico per providers, server MCP, guardrail, budget, quote e workflow AI aumentati dai plugin.",
        "primaryLabel": "Richiedi una demo",
        "secondaryLabel": "Vedi su GitHub"
      },
      "readingTime": "10 min",
      "keywords": [
        "litellm vs kong",
        "ai gateway comparison",
        "llm gateway comparison",
        "kong ai gateway",
        "litellm alternative",
        "odock ai gateway",
        "ai gateway plugins"
      ],
      "faq": [
        {
          "question": "Odock oggi è più maturo di LiteLLM o Kong?",
          "answer": "No. LiteLLM e Kong oggi sono prodotti più maturi. L'argomento di Odock è il focus architetturale: un AI-native gateway più leggero, in cui sicurezza modulare e workflow plugin sono obiettivi di design di primo livello."
        },
        {
          "question": "Perché non usare semplicemente plugin Kong?",
          "answer": "Kong è eccellente quando usi già Kong o hai bisogno di API management enterprise. Odock è pensato per team che vogliono workflow plugin AI, governance MCP, model routing e moduli di sicurezza senza adottare una piattaforma ampia di API management."
        },
        {
          "question": "In cosa Odock differisce dai guardrail LiteLLM?",
          "answer": "LiteLLM ha già un forte supporto per i guardrail, inclusi guardrail personalizzati e lifecycle hook. La direzione prevista per Odock è rendere modulare l'intero pipeline di sicurezza e workflow: prompt, contesto, tool call, provider route, risposta, telemetria e policy tenant."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## Looking for a specific head-to-head?

This guide covers the whole landscape. If you're deciding between two specific gateways, we've broken each matchup into its own detailed comparison:

- [LiteLLM vs Kong AI Gateway](/compare/litellm-vs-kong-ai-gateway/)
- [LiteLLM vs Portkey](/compare/litellm-vs-portkey/)
- [LiteLLM vs Cloudflare AI Gateway](/compare/litellm-vs-cloudflare-ai-gateway/)
- [LiteLLM vs Envoy AI Gateway](/compare/litellm-vs-envoy-ai-gateway/)
- [Kong AI Gateway vs Cloudflare AI Gateway](/compare/kong-vs-cloudflare-ai-gateway/)
- [Odock vs LiteLLM](/compare/odock-vs-litellm/)
- [Odock vs Kong AI Gateway](/compare/odock-vs-kong-ai-gateway/)

Or browse [all AI gateway comparisons](/compare/).

## The short version

If you need the most mature open-source LLM gateway today, LiteLLM is hard to ignore. It has broad provider support, OpenAI-compatible access, virtual keys, spend tracking, budgets, rate limits, fallbacks, observability integrations, MCP gateway work, and a serious guardrail ecosystem.

If your company already runs Kong, Kong AI Gateway is a logical path. It extends a proven API gateway with AI proxying, prompt-aware plugins, semantic guards, rate limiting, logging, and enterprise deployment patterns. The biggest advantage is not only AI. It is Kong's existing API management muscle.

If you want quick edge-level visibility, caching, routing, DLP, and controls inside Cloudflare's network, Cloudflare AI Gateway is attractive. If you want a productized AI operations platform with dashboards, prompt management, guardrails, and hosted ergonomics, Portkey is strong. If your platform is deeply Kubernetes-native and you want open, Envoy-based routing primitives, Envoy AI Gateway is worth watching.

Odock should be judged differently. The goal is not to pretend that a newer project has more maturity than these platforms. The goal is to build an AI-native gateway where modular security and plugin-augmented workflows are not side features. They are the core operating model.

## Where LiteLLM is strongest

LiteLLM's center of gravity is model access for platform teams. It is designed to give developers one OpenAI-compatible interface across many model providers while giving platform owners controls for cost, model access, keys, budgets, rate limits, fallbacks, observability, and guardrails.

That makes LiteLLM a strong fit when the main problem is provider sprawl. Teams can standardize access across OpenAI, Anthropic, Azure, Bedrock, Vertex, self-hosted models, and many others. It is also strong when finance and platform teams need usage attribution by key, user, team, or organization.

LiteLLM's guardrail approach is more mature than many people assume. It supports built-in and third-party guardrails, custom guardrail classes, and lifecycle hooks before the call, during the call, after the call, and across streaming responses. That is real extensibility.

The tradeoff is that LiteLLM's architecture still feels primarily like a model access gateway with guardrails and callbacks around it. That is not a weakness for many teams. It is exactly what they need. But if your core design goal is a modular security engine and workflow plugin graph that treats AI requests, MCP tool calls, policy decisions, and transformations as one programmable pipeline, Odock is aiming at a different shape.

## Where Kong is strongest

Kong starts from a different world: API management. Kong AI Gateway is not just an LLM proxy. It is Kong Gateway plus AI-specific plugins. That matters because Kong already has a mature story for routing, auth, rate limiting, plugins, deployment modes, Konnect, Kubernetes, observability, governance, and enterprise operations.

For organizations already standardized on Kong, this is compelling. AI traffic becomes another class of API traffic with prompt-aware plugins layered in. Kong's AI Proxy handles provider translation. AI Proxy Advanced adds load balancing, retries, and fallback. Prompt guard plugins can scan user messages with regex or semantic similarity. Response guard and semantic cache plugins extend that model further.

Kong's strength is also its tradeoff. It is an API gateway first. The AI capabilities are powerful, but they live inside a broad API management framework. If you need enterprise API lifecycle management, that is excellent. If you only want a focused AI control plane for LLMs, MCP servers, security modules, and workflow plugins, Kong can feel larger than the problem.

Odock's plugin idea is narrower and more AI-specific: enrich or constrain the AI workflow itself, not only attach policies to an API route. That means plugins for prompt transformation, data masking, retrieval policy, tool-call approval, schema validation, output repair, routing hints, budget behavior, audit metadata, and tenant-specific workflow rules.

## Where Cloudflare AI Gateway fits

Cloudflare AI Gateway is strongest when teams want a fast path to centralized AI observability and control at the edge. It emphasizes analytics, logs, caching, rate limiting, dynamic routing, model fallbacks, BYOK, guardrails, DLP, and cost tracking across supported providers.

The main advantage is operational convenience. If your application already sits behind Cloudflare, adding AI visibility and controls with minimal application changes is appealing. Caching and rate limiting also fit naturally into Cloudflare's infrastructure strengths.

The tradeoff is ecosystem gravity. Cloudflare AI Gateway is best when you are comfortable putting this control layer into Cloudflare's platform. For many teams that is a good decision. For teams that want a self-contained open-source gateway with custom workflow modules, deeper MCP control, and plugin logic that can run wherever the AI platform runs, Odock is aiming for more portability and custom extension.

## Where Portkey fits

Portkey is closer to a productized AI operations platform. It combines a gateway with observability, logs, prompt management, guardrails, caching, retries, fallbacks, load balancing, budget limits, and agent framework integrations. It has a broad feature set and a polished operating model for teams that want dashboards and workflow around LLM usage.

Portkey is especially interesting for teams that want prompt lifecycle management and AI observability alongside gateway controls. Its guardrails can be deterministic, model-based, partner-provided, or custom, and guardrail outcomes can influence routing behavior.

The tradeoff is that Portkey is more of a full platform. That is useful if you want the platform. It is less ideal if you want to own a smaller gateway layer, keep workflow logic close to your infrastructure, and build custom security/plugin modules as code-first primitives.

Odock should not try to out-dashboard Portkey on day one. The sharper goal is to make the request lifecycle itself more programmable and governable for teams building their own AI platform.

## Where Envoy AI Gateway fits

Envoy AI Gateway is important because it comes from the cloud-native infrastructure side. It builds on Envoy Gateway patterns and Kubernetes resources to route and manage LLM traffic. Its strengths are provider connectivity, OpenAI-compatible and Anthropic-compatible endpoints, model virtualization, fallback, token-aware rate limiting, observability, and Kubernetes-native configuration.

This is a strong direction for platform teams that already run Kubernetes and want AI traffic managed through familiar infrastructure primitives. It is also promising for high-performance, open, infrastructure-level deployments.

The tradeoff is product surface. Envoy AI Gateway is a lower-level infrastructure project compared with hosted AI ops platforms or app-facing gateways. If you want a rich modular security engine, workflow plugins, tenant-aware AI policies, and MCP governance as first-class user-facing concepts, you may need to assemble more of that yourself.

## Where WSO2, Tyk, and Apigee fit

WSO2, Tyk, and Apigee come from enterprise API management. Their AI gateway work focuses on bringing LLM access, governance, traffic control, observability, cost tracking, model abstraction, safety policies, and developer access into established API management systems.

This is useful for larger organizations that already need portals, lifecycle workflows, enterprise governance, SSO, policy management, and compliance reporting. They are often a better fit for centralized platform teams than for small teams that want a lightweight AI-native gateway.

The tradeoff is complexity and focus. Enterprise API management platforms solve many problems beyond AI. Odock is intentionally narrower: one dock for LLM providers, MCP servers, security modules, budgets, quotas, and workflow plugins.

## The real difference: approach

Most AI gateways now share the same checklist:

- Unified provider access
- OpenAI-compatible request paths
- Provider keys and credential management
- Logs, metrics, and usage tracking
- Budgets, quotas, and rate limits
- Caching, retries, routing, and fallbacks
- Prompt or response guardrails
- Some form of custom extension

That checklist does not explain the architectural difference. The better question is: what does the gateway consider its primary object?

- LiteLLM primarily treats the model request as the object to normalize, meter, route, and govern.
- Kong primarily treats AI traffic as API traffic enhanced by AI-aware plugins.
- Cloudflare primarily treats AI calls as traffic to observe, cache, route, and secure at the edge.
- Portkey primarily treats AI usage as an operations workflow with gateway, logs, prompts, guardrails, and dashboards.
- Envoy AI Gateway primarily treats AI traffic as cloud-native infrastructure routing with Kubernetes and Envoy primitives.
- Odock treats the AI workflow as the object: model calls, MCP tools, tenant policy, security checks, plugins, budgets, and observability running through one programmable control plane.

That is the positioning. Odock is not only a proxy. It is meant to be a workflow gateway.

## Odock's modular security engine

Security in AI systems is not one filter. A real AI request has several moments where security decisions may be needed:

- Before the prompt reaches a provider
- After retrieval adds private context
- Before an MCP tool is exposed to an agent
- Before a tool call executes
- While routing to a provider with different data policies
- After the model returns output
- Before logs, traces, and spend records store metadata

Odock's security engine should be modular across those moments. A module can be deterministic, model-based, external, tenant-specific, or workflow-specific. One module might redact PII. Another might detect prompt injection. Another might enforce a customer data boundary. Another might approve or block an MCP tool call. Another might strip sensitive data before telemetry is written.

This is the important difference from a simple "guardrails" checkbox. The security engine is not just prompt moderation. It is a chain of policy modules that can inspect, transform, deny, route, annotate, or escalate at different stages of the AI workflow.

## Odock's workflow plugins

Plugins are the other half of the approach. In many AI systems, application teams keep rewriting the same glue code: prompt formatting, schema checks, tool argument validation, output repair, fallback rules, customer-specific metadata, and audit hooks.

Odock's plugin layer is meant to move that logic into the gateway when it is shared, operational, or policy-sensitive.

- A validation plugin can reject malformed requests before they spend tokens.
- A transformation plugin can normalize provider-specific response shapes.
- A security plugin can mask secrets before a provider sees them.
- A routing plugin can add model hints based on tenant, workload, or budget state.
- A tool plugin can require approval before an MCP action executes.
- An observability plugin can attach audit metadata without exposing raw content.
- A response plugin can enforce JSON schema or citation requirements before returning to the app.

This is where Odock should differentiate: plugins should not be only generic HTTP middleware. They should understand the AI lifecycle and let teams augment the workflow around the model.

## When you should choose each gateway

Choose LiteLLM if you want mature open-source model access, broad provider coverage, virtual keys, budgets, fallbacks, and a battle-tested AI gateway pattern today.

Choose Kong if your organization already uses Kong or needs enterprise API management with AI plugins layered into the same operational model.

Choose Cloudflare AI Gateway if you want fast edge-level analytics, caching, DLP, routing, and controls inside Cloudflare's platform.

Choose Portkey if you want a productized AI ops platform with gateway, prompt management, observability, guardrails, and dashboards.

Choose Envoy AI Gateway if your team wants open, Kubernetes-native, Envoy-based AI routing infrastructure.

Choose WSO2, Tyk, or Apigee if your organization already needs enterprise API lifecycle management and wants AI governance inside that broader platform.

Choose Odock if your priority is an AI-native gateway where modular security, MCP governance, and workflow plugins are central to the design, and where the gateway is not only routing requests but shaping the full AI workflow.

## The honest Odock weakness

Odock should be clear about its current position. It is newer. It does not yet have the same production history, provider ecosystem, enterprise packaging, or community size as LiteLLM, Kong, Cloudflare, Portkey, Envoy, WSO2, Tyk, or Apigee.

That matters. A team with urgent production requirements should evaluate maturity, deployment model, support, security posture, and operational evidence before choosing any gateway.

The reason to bet on Odock is not that the market lacks gateways. The reason is that AI workflows are becoming more than model calls. They include tools, context, policies, approvals, transformations, budgets, and tenant-specific rules. Odock's opportunity is to make those workflow controls modular from the beginning.

## Final take

The AI gateway market is splitting into several categories. LiteLLM is the practical open-source model gateway. Kong is the API management gateway extended for AI. Cloudflare is the edge control layer. Portkey is the AI operations platform. Envoy is the cloud-native routing foundation. Enterprise API platforms bring governance at organizational scale.

Odock's thesis is narrower and sharper: AI teams need a gateway where security modules and workflow plugins are first-class, because the hard production problems are no longer only "which provider do we call?" The hard problems are "what should happen before, during, and after this AI workflow, for this tenant, with this data, this model, and these tools?"

That is the difference in approach.

<!-- locale:fr -->
## Vous cherchez un duel précis ?

Ce guide couvre l'ensemble du paysage. Si vous hésitez entre deux gateways précises, chaque duel a son comparatif détaillé :

- [LiteLLM vs Kong AI Gateway](/fr/compare/litellm-vs-kong-ai-gateway/)
- [LiteLLM vs Portkey](/fr/compare/litellm-vs-portkey/)
- [LiteLLM vs Cloudflare AI Gateway](/fr/compare/litellm-vs-cloudflare-ai-gateway/)
- [LiteLLM vs Envoy AI Gateway](/fr/compare/litellm-vs-envoy-ai-gateway/)
- [Kong AI Gateway vs Cloudflare AI Gateway](/fr/compare/kong-vs-cloudflare-ai-gateway/)
- [Odock vs LiteLLM](/fr/compare/odock-vs-litellm/)
- [Odock vs Kong AI Gateway](/fr/compare/odock-vs-kong-ai-gateway/)

Ou parcourez [tous les comparatifs AI gateway](/fr/compare/).

## La version courte

Si vous cherchez aujourd'hui la LLM gateway open-source la plus mature, LiteLLM est difficile à ignorer. Elle offre une large prise en charge des providers, un accès compatible OpenAI, des virtual keys, le suivi des dépenses, des budgets, des rate limits, des fallbacks, des intégrations d'observability, des travaux autour d'une gateway MCP et un écosystème sérieux de guardrails.

Si votre entreprise utilise déjà Kong, Kong AI Gateway est une trajectoire logique. Elle étend une API gateway éprouvée avec du proxying AI, des plugins sensibles aux prompts, des gardes sémantiques, du rate limiting, du logging et des modèles de déploiement enterprise. Son principal avantage n'est pas seulement l'AI. C'est la puissance déjà établie de Kong en API management.

Si vous voulez rapidement de la visibilité, du caching, du routing, du DLP et des contrôles au niveau edge dans le réseau de Cloudflare, Cloudflare AI Gateway est attractive. Si vous voulez une plateforme productisée d'opérations AI avec dashboards, gestion des prompts, guardrails et ergonomie hébergée, Portkey est solide. Si votre plateforme est profondément Kubernetes-native et que vous voulez des primitives de routing ouvertes basées sur Envoy, Envoy AI Gateway mérite d'être suivie.

Odock doit être évalué autrement. L'objectif n'est pas de prétendre qu'un projet plus récent est plus mature que ces plateformes. L'objectif est de construire une AI-native gateway où la sécurité modulaire et les workflows augmentés par plugins ne sont pas des fonctionnalités secondaires. Ils constituent le modèle opérationnel central.

## Là où LiteLLM est fort

Le centre de gravité de LiteLLM est l'accès aux models pour les équipes plateforme. Elle est conçue pour donner aux développeurs une interface compatible OpenAI sur de nombreux model providers, tout en donnant aux responsables plateforme des contrôles sur les coûts, l'accès aux models, les clés, les budgets, les rate limits, les fallbacks, l'observability et les guardrails.

Cela fait de LiteLLM un bon choix lorsque le problème principal est la dispersion des providers. Les équipes peuvent standardiser l'accès à OpenAI, Anthropic, Azure, Bedrock, Vertex, aux models self-hosted et à beaucoup d'autres. Elle est aussi solide lorsque les équipes finance et plateforme ont besoin d'attribuer l'usage par clé, utilisateur, équipe ou organisation.

L'approche guardrails de LiteLLM est plus mature que beaucoup ne l'imaginent. Elle prend en charge des guardrails intégrés et tiers, des classes de guardrails personnalisées et des lifecycle hooks avant l'appel, pendant l'appel, après l'appel et sur les réponses en streaming. C'est une vraie extensibilité.

Le compromis est que l'architecture de LiteLLM ressemble encore principalement à une gateway d'accès aux models avec des guardrails et callbacks autour. Ce n'est pas une faiblesse pour beaucoup d'équipes. C'est exactement ce dont elles ont besoin. Mais si votre objectif de conception central est un moteur de sécurité modulaire et un graphe de workflow plugins qui traite les requêtes AI, les appels d'outils MCP, les décisions de politique et les transformations comme un pipeline programmable unique, Odock vise une autre forme.

## Là où Kong est fort

Kong part d'un autre monde : l'API management. Kong AI Gateway n'est pas seulement un proxy LLM. C'est Kong Gateway plus des plugins spécifiques à l'AI. C'est important, car Kong a déjà une histoire mature pour le routing, l'auth, le rate limiting, les plugins, les modes de déploiement, Konnect, Kubernetes, l'observability, la gouvernance et les opérations enterprise.

Pour les organisations déjà standardisées sur Kong, c'est convaincant. Le trafic AI devient une autre classe de trafic API avec des plugins sensibles aux prompts par-dessus. AI Proxy de Kong gère la traduction des providers. AI Proxy Advanced ajoute le load balancing, les retries et le fallback. Les plugins Prompt Guard peuvent analyser les messages utilisateur avec des regex ou de la similarité sémantique. Les plugins Response Guard et Semantic Cache étendent encore ce modèle.

La force de Kong est aussi son compromis. C'est d'abord une API gateway. Les capacités AI sont puissantes, mais elles vivent dans un framework large d'API management. Si vous avez besoin de gestion enterprise du cycle de vie des API, c'est excellent. Si vous voulez seulement un control plane AI ciblé pour les LLMs, les serveurs MCP, les modules de sécurité et les workflow plugins, Kong peut sembler plus large que le problème.

L'idée de plugins d'Odock est plus étroite et plus spécifique à l'AI : enrichir ou contraindre le workflow AI lui-même, et pas seulement attacher des politiques à une route API. Cela signifie des plugins pour la transformation de prompts, le masquage de données, la politique de retrieval, l'approbation des tool calls, la validation de schema, la réparation de sortie, les indices de routing, le comportement des budgets, les métadonnées d'audit et les règles de workflow propres à chaque tenant.

## Où Cloudflare AI Gateway s’inscrit

Cloudflare AI Gateway est particulièrement forte lorsque les équipes veulent une voie rapide vers une observability et un contrôle AI centralisés à l'edge. Elle met l'accent sur les analytics, les logs, le caching, le rate limiting, le routing dynamique, les model fallbacks, le BYOK, les guardrails, le DLP et le suivi des coûts sur les providers pris en charge.

Le principal avantage est la commodité opérationnelle. Si votre application est déjà derrière Cloudflare, ajouter de la visibilité et des contrôles AI avec peu de changements applicatifs est attractif. Le caching et le rate limiting s'intègrent aussi naturellement aux forces d'infrastructure de Cloudflare.

Le compromis est la gravité de l'écosystème. Cloudflare AI Gateway est meilleure lorsque vous êtes à l'aise avec l'idée de placer cette couche de contrôle dans la plateforme Cloudflare. Pour beaucoup d'équipes, c'est une bonne décision. Pour celles qui veulent une gateway open-source autonome avec des modules de workflow personnalisés, un contrôle MCP plus profond et une logique de plugins capable de s'exécuter là où tourne la plateforme AI, Odock vise davantage de portabilité et d'extension personnalisée.

## Où Portkey s’inscrit

Portkey est plus proche d'une plateforme productisée d'opérations AI. Elle combine une gateway avec observability, logs, gestion des prompts, guardrails, caching, retries, fallbacks, load balancing, limites budgétaires et intégrations avec des frameworks d'agents. Elle propose un ensemble de fonctionnalités large et un modèle opérationnel soigné pour les équipes qui veulent des dashboards et des workflows autour de l'usage des LLM.

Portkey est particulièrement intéressante pour les équipes qui veulent la gestion du cycle de vie des prompts et l'observability AI à côté des contrôles de gateway. Ses guardrails peuvent être déterministes, basés sur des models, fournis par des partenaires ou personnalisés, et les résultats des guardrails peuvent influencer le comportement de routing.

Le compromis est que Portkey est davantage une plateforme complète. C'est utile si vous voulez cette plateforme. C'est moins idéal si vous voulez posséder une couche de gateway plus petite, garder la logique de workflow proche de votre infrastructure et construire des modules de sécurité/plugins personnalisés comme primitives code-first.

Odock ne doit pas essayer de surpasser Portkey sur les dashboards dès le premier jour. L'objectif plus net est de rendre le cycle de vie de la requête lui-même plus programmable et gouvernable pour les équipes qui construisent leur propre plateforme AI.

## Où Envoy AI Gateway s’inscrit

Envoy AI Gateway est importante parce qu'elle vient du côté infrastructure cloud-native. Elle s'appuie sur les patterns Envoy Gateway et les ressources Kubernetes pour router et gérer le trafic LLM. Ses forces sont la connectivité provider, les endpoints compatibles OpenAI et Anthropic, la virtualisation des models, le fallback, le rate limiting tenant compte des tokens, l'observability et la configuration Kubernetes-native.

C'est une direction solide pour les équipes plateforme qui utilisent déjà Kubernetes et veulent gérer le trafic AI à travers des primitives d'infrastructure familières. C'est aussi prometteur pour des déploiements ouverts, performants et de niveau infrastructure.

Le compromis est la surface produit. Envoy AI Gateway est un projet d'infrastructure de plus bas niveau comparé aux plateformes d'opérations AI hébergées ou aux gateways orientées application. Si vous voulez un moteur de sécurité modulaire riche, des workflow plugins, des politiques AI tenant-aware et une gouvernance MCP comme concepts visibles de premier plan, vous devrez probablement assembler davantage de pièces vous-même.

## Où WSO2, Tyk et Apigee s’inscrivent

WSO2, Tyk et Apigee viennent de l'API management enterprise. Leur travail d'AI gateway consiste à intégrer l'accès LLM, la gouvernance, le contrôle du trafic, l'observability, le suivi des coûts, l'abstraction des models, les politiques de sécurité et l'accès développeur dans des systèmes établis d'API management.

C'est utile pour les grandes organisations qui ont déjà besoin de portails, de workflows de cycle de vie, de gouvernance enterprise, de SSO, de gestion des politiques et de rapports de conformité. Ils conviennent souvent mieux aux équipes plateforme centralisées qu'aux petites équipes qui veulent une AI-native gateway légère.

Le compromis est la complexité et le focus. Les plateformes d'API management enterprise résolvent beaucoup de problèmes au-delà de l'AI. Odock est volontairement plus étroit : un dock unique pour les LLM providers, les serveurs MCP, les modules de sécurité, les budgets, les quotas et les workflow plugins.

## La vraie différence : l’approche

La plupart des AI gateways partagent désormais la même checklist :

- Accès provider unifié
- Chemins de requête compatibles OpenAI
- Gestion des provider keys et des identifiants
- Logs, métriques et suivi d'usage
- Budgets, quotas et rate limits
- Caching, retries, routing et fallbacks
- Guardrails sur prompts ou réponses
- Une forme d'extension personnalisée

Cette checklist n'explique pas la différence architecturale. La meilleure question est : quel objet la gateway considère-t-elle comme central ?

- LiteLLM traite principalement la requête model comme l'objet à normaliser, mesurer, router et gouverner.
- Kong traite principalement le trafic AI comme du trafic API enrichi par des plugins conscients de l'AI.
- Cloudflare traite principalement les appels AI comme du trafic à observer, mettre en cache, router et sécuriser à l'edge.
- Portkey traite principalement l'usage AI comme un workflow d'opérations avec gateway, logs, prompts, guardrails et dashboards.
- Envoy AI Gateway traite principalement le trafic AI comme du routing d'infrastructure cloud-native avec des primitives Kubernetes et Envoy.
- Odock traite le workflow AI comme l'objet : appels model, outils MCP, politique tenant, contrôles de sécurité, plugins, budgets et observability dans un control plane programmable unique.

C'est le positionnement. Odock n'est pas seulement un proxy. Il est pensé comme une workflow gateway.

## Le moteur de sécurité modulaire d’Odock

La sécurité dans les systèmes AI n'est pas un filtre unique. Une vraie requête AI comporte plusieurs moments où des décisions de sécurité peuvent être nécessaires :

- Avant que le prompt atteigne un provider
- Après que le retrieval ajoute du contexte privé
- Avant qu'un outil MCP soit exposé à un agent
- Avant l'exécution d'un tool call
- Pendant le routing vers un provider avec des politiques de données différentes
- Après que le model renvoie une sortie
- Avant que les logs, traces et enregistrements de dépenses stockent des métadonnées

Le moteur de sécurité d'Odock doit être modulaire sur tous ces moments. Un module peut être déterministe, basé sur un model, externe, propre à un tenant ou propre à un workflow. Un module peut expurger des PII. Un autre peut détecter une prompt injection. Un autre peut faire respecter une frontière de données client. Un autre peut approuver ou bloquer un tool call MCP. Un autre peut retirer des données sensibles avant l'écriture de la télémétrie.

C'est la différence importante avec une simple case "guardrails". Le moteur de sécurité n'est pas seulement de la modération de prompts. C'est une chaîne de modules de politique capables d'inspecter, transformer, refuser, router, annoter ou escalader à différents stades du workflow AI.

## Les plugins de workflow d’Odock

Les plugins sont l'autre moitié de l'approche. Dans beaucoup de systèmes AI, les équipes applicatives réécrivent sans cesse le même code de liaison : formatage des prompts, vérifications de schema, validation des arguments d'outils, réparation de sorties, règles de fallback, métadonnées propres aux clients et hooks d'audit.

La couche de plugins d'Odock vise à déplacer cette logique dans la gateway lorsqu'elle est partagée, opérationnelle ou sensible aux politiques.

- Un plugin de validation peut rejeter des requêtes mal formées avant qu'elles consomment des tokens.
- Un plugin de transformation peut normaliser les formes de réponses propres aux providers.
- Un plugin de sécurité peut masquer les secrets avant qu'un provider les voie.
- Un plugin de routing peut ajouter des indices de model selon le tenant, la charge de travail ou l'état du budget.
- Un plugin d'outil peut exiger une approbation avant l'exécution d'une action MCP.
- Un plugin d'observability peut attacher des métadonnées d'audit sans exposer le contenu brut.
- Un plugin de réponse peut imposer un JSON schema ou des exigences de citation avant de retourner vers l'application.

C'est ici qu'Odock doit se différencier : les plugins ne doivent pas être seulement du middleware HTTP générique. Ils doivent comprendre le cycle de vie AI et permettre aux équipes d'augmenter le workflow autour du model.

## Quand choisir chaque passerelle

Choisissez LiteLLM si vous voulez aujourd'hui un accès mature et open-source aux models, une large couverture provider, des virtual keys, des budgets, des fallbacks et un pattern d'AI gateway éprouvé.

Choisissez Kong si votre organisation utilise déjà Kong ou a besoin d'API management enterprise avec des plugins AI intégrés au même modèle opérationnel.

Choisissez Cloudflare AI Gateway si vous voulez rapidement des analytics, du caching, du DLP, du routing et des contrôles au niveau edge dans la plateforme Cloudflare.

Choisissez Portkey si vous voulez une plateforme productisée d'AI ops avec gateway, gestion des prompts, observability, guardrails et dashboards.

Choisissez Envoy AI Gateway si votre équipe veut une infrastructure de routing AI ouverte, Kubernetes-native et basée sur Envoy.

Choisissez WSO2, Tyk ou Apigee si votre organisation a déjà besoin de gestion enterprise du cycle de vie des API et veut une gouvernance AI dans cette plateforme plus large.

Choisissez Odock si votre priorité est une AI-native gateway où la sécurité modulaire, la gouvernance MCP et les workflow plugins sont centraux dans le design, et où la gateway ne fait pas que router les requêtes mais façonne tout le workflow AI.

## La faiblesse honnête d’Odock

Odock doit être clair sur sa position actuelle. Il est plus récent. Il n'a pas encore le même historique de production, le même écosystème de providers, le même packaging enterprise ni la même taille de communauté que LiteLLM, Kong, Cloudflare, Portkey, Envoy, WSO2, Tyk ou Apigee.

C'est important. Une équipe avec des exigences de production urgentes doit évaluer la maturité, le modèle de déploiement, le support, la posture de sécurité et les preuves opérationnelles avant de choisir une gateway.

La raison de miser sur Odock n'est pas que le marché manque de gateways. La raison est que les workflows AI deviennent plus que des appels model. Ils incluent des outils, du contexte, des politiques, des approbations, des transformations, des budgets et des règles propres aux tenants. L'opportunité d'Odock est de rendre ces contrôles de workflow modulaires dès le départ.

## Conclusion

Le marché des AI gateways se divise en plusieurs catégories. LiteLLM est la model gateway open-source pragmatique. Kong est l'API management gateway étendue à l'AI. Cloudflare est la couche de contrôle edge. Portkey est la plateforme d'opérations AI. Envoy est la fondation de routing cloud-native. Les plateformes d'API enterprise apportent une gouvernance à l'échelle de l'organisation.

La thèse d'Odock est plus étroite et plus nette : les équipes AI ont besoin d'une gateway où les modules de sécurité et les workflow plugins sont de premier plan, parce que les problèmes difficiles en production ne sont plus seulement "quel provider appeler ?". Les problèmes difficiles sont "que doit-il se passer avant, pendant et après ce workflow AI, pour ce tenant, avec ces données, ce model et ces outils ?"

C'est la différence d'approche.

<!-- locale:it -->
## La versione breve

Se oggi ti serve il gateway LLM open-source più maturo, LiteLLM è difficile da ignorare. Ha ampio supporto per i providers, accesso compatibile con OpenAI, virtual keys, tracciamento della spesa, budget, rate limit, fallback, integrazioni di observability, lavoro su MCP gateway e un ecosistema serio di guardrail.

Se la tua azienda usa già Kong, Kong AI Gateway è un percorso logico. Estende un API gateway collaudato con proxying AI, plugin consapevoli dei prompt, guard semantici, rate limiting, logging e pattern di deployment enterprise. Il vantaggio principale non è solo l'AI. È la forza già esistente di Kong nell'API management.

Se vuoi rapidamente visibilità, caching, routing, DLP e controlli a livello edge dentro la rete Cloudflare, Cloudflare AI Gateway è interessante. Se vuoi una piattaforma productizzata per operations AI con dashboard, gestione dei prompt, guardrail ed ergonomia hosted, Portkey è forte. Se la tua piattaforma è profondamente Kubernetes-native e vuoi primitive di routing aperte basate su Envoy, Envoy AI Gateway merita attenzione.

Odock va giudicato diversamente. L'obiettivo non è fingere che un progetto più nuovo abbia più maturità di queste piattaforme. L'obiettivo è costruire un AI-native gateway in cui sicurezza modulare e workflow aumentati dai plugin non siano funzionalità laterali. Sono il modello operativo centrale.

## Dove LiteLLM è forte

Il centro di gravità di LiteLLM è l'accesso ai model per i team di piattaforma. È progettato per dare agli sviluppatori un'interfaccia compatibile con OpenAI su molti model providers, offrendo ai responsabili di piattaforma controlli su costi, accesso ai model, chiavi, budget, rate limit, fallback, observability e guardrail.

Questo rende LiteLLM una buona scelta quando il problema principale è la dispersione dei providers. I team possono standardizzare l'accesso a OpenAI, Anthropic, Azure, Bedrock, Vertex, model self-hosted e molti altri. È forte anche quando i team finance e platform devono attribuire l'uso per chiave, utente, team o organizzazione.

L'approccio ai guardrail di LiteLLM è più maturo di quanto molti pensino. Supporta guardrail integrati e di terze parti, classi di guardrail personalizzate e lifecycle hook prima della call, durante la call, dopo la call e sulle risposte in streaming. Questa è vera estensibilità.

Il compromesso è che l'architettura di LiteLLM appare ancora principalmente come un gateway di accesso ai model con guardrail e callbacks attorno. Per molti team non è una debolezza. È esattamente ciò di cui hanno bisogno. Ma se il tuo obiettivo di design principale è un motore di sicurezza modulare e un grafo di workflow plugin che tratti richieste AI, chiamate a strumenti MCP, decisioni di policy e trasformazioni come un unico pipeline programmabile, Odock punta a una forma diversa.

## Dove Kong è forte

Kong parte da un altro mondo: l'API management. Kong AI Gateway non è solo un proxy LLM. È Kong Gateway più plugin specifici per l'AI. Questo conta perché Kong ha già una storia matura per routing, auth, rate limiting, plugin, modalità di deployment, Konnect, Kubernetes, observability, governance e operations enterprise.

Per le organizzazioni già standardizzate su Kong, è una scelta convincente. Il traffico AI diventa un'altra classe di traffico API con plugin consapevoli dei prompt sopra. AI Proxy di Kong gestisce la traduzione dei providers. AI Proxy Advanced aggiunge load balancing, retry e fallback. I plugin Prompt Guard possono analizzare i messaggi utente con regex o similarità semantica. I plugin Response Guard e Semantic Cache estendono ulteriormente quel modello.

La forza di Kong è anche il suo compromesso. È prima di tutto un API gateway. Le capacità AI sono potenti, ma vivono dentro un framework ampio di API management. Se ti serve gestione enterprise del ciclo di vita delle API, è eccellente. Se vuoi solo un control plane AI focalizzato per LLM, server MCP, moduli di sicurezza e workflow plugin, Kong può sembrare più grande del problema.

L'idea di plugin di Odock è più stretta e più specifica per l'AI: arricchire o vincolare il workflow AI stesso, non solo attaccare policy a una route API. Questo significa plugin per trasformazione dei prompt, mascheramento dei dati, policy di retrieval, approvazione dei tool call, validazione di schema, riparazione dell'output, suggerimenti di routing, comportamento dei budget, metadati di audit e regole di workflow specifiche per tenant.

## Dove si inserisce Cloudflare AI Gateway

Cloudflare AI Gateway è più forte quando i team vogliono un percorso rapido verso observability e controllo AI centralizzati all'edge. Enfatizza analytics, log, caching, rate limiting, routing dinamico, model fallback, BYOK, guardrail, DLP e tracciamento dei costi sui providers supportati.

Il vantaggio principale è la comodità operativa. Se la tua applicazione è già dietro Cloudflare, aggiungere visibilità e controlli AI con modifiche applicative minime è interessante. Caching e rate limiting si integrano anche naturalmente con i punti di forza dell'infrastruttura Cloudflare.

Il compromesso è la gravità dell'ecosistema. Cloudflare AI Gateway funziona meglio quando sei a tuo agio nel mettere questo layer di controllo dentro la piattaforma Cloudflare. Per molti team è una buona decisione. Per i team che vogliono un gateway open-source autonomo con moduli di workflow personalizzati, controllo MCP più profondo e logica di plugin eseguibile ovunque giri la piattaforma AI, Odock punta a maggiore portabilità ed estensione custom.

## Dove si inserisce Portkey

Portkey è più vicino a una piattaforma productizzata per operations AI. Combina un gateway con observability, log, gestione dei prompt, guardrail, caching, retry, fallback, load balancing, limiti di budget e integrazioni con framework agentici. Ha un set di funzionalità ampio e un modello operativo rifinito per team che vogliono dashboard e workflow attorno all'uso degli LLM.

Portkey è particolarmente interessante per i team che vogliono gestione del ciclo di vita dei prompt e observability AI insieme ai controlli di gateway. I suoi guardrail possono essere deterministici, basati su model, forniti da partner o custom, e gli esiti dei guardrail possono influenzare il comportamento di routing.

Il compromesso è che Portkey è più una piattaforma completa. È utile se vuoi la piattaforma. È meno ideale se vuoi possedere un layer gateway più piccolo, tenere la logica di workflow vicina alla tua infrastruttura e costruire moduli custom di sicurezza/plugin come primitive code-first.

Odock non dovrebbe provare a battere Portkey sulle dashboard dal primo giorno. L'obiettivo più netto è rendere il ciclo di vita della richiesta più programmabile e governabile per i team che costruiscono la propria piattaforma AI.

## Dove si inserisce Envoy AI Gateway

Envoy AI Gateway è importante perché arriva dal lato infrastruttura cloud-native. Si basa sui pattern di Envoy Gateway e sulle risorse Kubernetes per instradare e gestire traffico LLM. I suoi punti di forza sono connettività provider, endpoint compatibili con OpenAI e Anthropic, virtualizzazione dei model, fallback, rate limiting consapevole dei tokens, observability e configurazione Kubernetes-native.

È una direzione solida per i team platform che usano già Kubernetes e vogliono gestire il traffico AI tramite primitive infrastrutturali familiari. È promettente anche per deployment aperti, performanti e a livello infrastruttura.

Il compromesso è la superficie prodotto. Envoy AI Gateway è un progetto infrastrutturale di livello più basso rispetto alle piattaforme hosted di AI ops o ai gateway rivolti alle applicazioni. Se vuoi un motore di sicurezza modulare ricco, workflow plugin, policy AI tenant-aware e governance MCP come concetti user-facing di primo livello, probabilmente dovrai assemblare più parti da solo.

## Dove si inseriscono WSO2, Tyk e Apigee

WSO2, Tyk e Apigee arrivano dall'API management enterprise. Il loro lavoro sugli AI gateway si concentra sul portare accesso LLM, governance, controllo del traffico, observability, tracciamento dei costi, astrazione dei model, policy di safety e accesso sviluppatori dentro sistemi consolidati di API management.

È utile per organizzazioni più grandi che hanno già bisogno di portali, workflow di lifecycle, governance enterprise, SSO, gestione delle policy e reporting di compliance. Spesso sono più adatti a team platform centralizzati che a piccoli team che vogliono un AI-native gateway leggero.

Il compromesso è complessità e focus. Le piattaforme di API management enterprise risolvono molti problemi oltre l'AI. Odock è intenzionalmente più stretto: un dock unico per LLM providers, server MCP, moduli di sicurezza, budget, quote e workflow plugin.

## La vera differenza: l’approccio

La maggior parte degli AI gateway ora condivide la stessa checklist:

- Accesso provider unificato
- Percorsi di richiesta compatibili con OpenAI
- Gestione di provider keys e credenziali
- Log, metriche e tracciamento dell'uso
- Budget, quote e rate limit
- Caching, retry, routing e fallback
- Guardrail su prompt o risposte
- Una qualche forma di estensione custom

Questa checklist non spiega la differenza architetturale. La domanda migliore è: quale oggetto considera primario il gateway?

- LiteLLM tratta principalmente la richiesta model come l'oggetto da normalizzare, misurare, instradare e governare.
- Kong tratta principalmente il traffico AI come traffico API arricchito da plugin AI-aware.
- Cloudflare tratta principalmente le call AI come traffico da osservare, mettere in cache, instradare e proteggere all'edge.
- Portkey tratta principalmente l'uso AI come un workflow operativo con gateway, log, prompt, guardrail e dashboard.
- Envoy AI Gateway tratta principalmente il traffico AI come routing infrastrutturale cloud-native con primitive Kubernetes ed Envoy.
- Odock tratta il workflow AI come l'oggetto: call ai model, strumenti MCP, policy tenant, controlli di sicurezza, plugin, budget e observability dentro un unico control plane programmabile.

Questo è il posizionamento. Odock non è solo un proxy. È pensato come un workflow gateway.

## Il motore di sicurezza modulare di Odock

La sicurezza nei sistemi AI non è un solo filtro. Una vera richiesta AI ha diversi momenti in cui possono servire decisioni di sicurezza:

- Prima che il prompt raggiunga un provider
- Dopo che il retrieval aggiunge contesto privato
- Prima che uno strumento MCP sia esposto a un agent
- Prima che un tool call venga eseguito
- Durante il routing verso un provider con policy sui dati diverse
- Dopo che il model restituisce l'output
- Prima che log, trace e record di spesa archivino metadati

Il motore di sicurezza di Odock dovrebbe essere modulare in tutti questi momenti. Un modulo può essere deterministico, basato su model, esterno, specifico per tenant o specifico per workflow. Un modulo potrebbe redigere PII. Un altro potrebbe rilevare prompt injection. Un altro potrebbe applicare un confine sui dati del cliente. Un altro potrebbe approvare o bloccare un tool call MCP. Un altro potrebbe rimuovere dati sensibili prima che la telemetria venga scritta.

Questa è la differenza importante rispetto a una semplice checkbox "guardrails". Il motore di sicurezza non è solo moderazione dei prompt. È una catena di moduli di policy che possono ispezionare, trasformare, negare, instradare, annotare o fare escalation in fasi diverse del workflow AI.

## I plugin di workflow di Odock

I plugin sono l'altra metà dell'approccio. In molti sistemi AI, i team applicativi continuano a riscrivere lo stesso codice di collegamento: formattazione dei prompt, controlli di schema, validazione degli argomenti degli strumenti, riparazione dell'output, regole di fallback, metadati specifici per cliente e audit hook.

Il layer di plugin di Odock è pensato per spostare quella logica nel gateway quando è condivisa, operativa o sensibile alle policy.

- Un plugin di validazione può rifiutare richieste malformate prima che consumino tokens.
- Un plugin di trasformazione può normalizzare le forme di risposta specifiche dei providers.
- Un plugin di sicurezza può mascherare segreti prima che un provider li veda.
- Un plugin di routing può aggiungere suggerimenti di model in base a tenant, workload o stato del budget.
- Un plugin per strumenti può richiedere approvazione prima che un'azione MCP venga eseguita.
- Un plugin di observability può allegare metadati di audit senza esporre contenuto grezzo.
- Un plugin di risposta può applicare JSON schema o requisiti di citazione prima di tornare all'app.

Qui Odock dovrebbe differenziarsi: i plugin non dovrebbero essere solo middleware HTTP generico. Dovrebbero comprendere il lifecycle AI e permettere ai team di aumentare il workflow attorno al model.

## Quando scegliere ogni gateway

Scegli LiteLLM se oggi vuoi accesso open-source maturo ai model, ampia copertura provider, virtual keys, budget, fallback e un pattern AI gateway collaudato.

Scegli Kong se la tua organizzazione usa già Kong o ha bisogno di API management enterprise con plugin AI integrati nello stesso modello operativo.

Scegli Cloudflare AI Gateway se vuoi rapidamente analytics, caching, DLP, routing e controlli a livello edge dentro la piattaforma Cloudflare.

Scegli Portkey se vuoi una piattaforma productizzata di AI ops con gateway, gestione dei prompt, observability, guardrail e dashboard.

Scegli Envoy AI Gateway se il tuo team vuole un'infrastruttura di routing AI aperta, Kubernetes-native e basata su Envoy.

Scegli WSO2, Tyk o Apigee se la tua organizzazione ha già bisogno di gestione enterprise del ciclo di vita delle API e vuole governance AI dentro quella piattaforma più ampia.

Scegli Odock se la tua priorità è un AI-native gateway in cui sicurezza modulare, governance MCP e workflow plugin sono centrali nel design, e in cui il gateway non si limita a instradare richieste ma modella l'intero workflow AI.

## Il limite onesto di Odock

Odock deve essere chiaro sulla sua posizione attuale. È più nuovo. Non ha ancora la stessa storia di produzione, lo stesso ecosistema provider, lo stesso packaging enterprise o la stessa dimensione di community di LiteLLM, Kong, Cloudflare, Portkey, Envoy, WSO2, Tyk o Apigee.

Questo conta. Un team con requisiti di produzione urgenti dovrebbe valutare maturità, modello di deployment, supporto, postura di sicurezza ed evidenze operative prima di scegliere qualsiasi gateway.

La ragione per puntare su Odock non è che al mercato manchino gateway. La ragione è che i workflow AI stanno diventando più che call ai model. Includono strumenti, contesto, policy, approvazioni, trasformazioni, budget e regole specifiche per tenant. L'opportunità di Odock è rendere modulari questi controlli di workflow fin dall'inizio.

## Conclusione

Il mercato degli AI gateway si sta dividendo in diverse categorie. LiteLLM è il pratico model gateway open-source. Kong è l'API management gateway esteso per l'AI. Cloudflare è il layer di controllo edge. Portkey è la piattaforma di operations AI. Envoy è la base di routing cloud-native. Le piattaforme API enterprise portano governance su scala organizzativa.

La tesi di Odock è più stretta e più netta: i team AI hanno bisogno di un gateway in cui moduli di sicurezza e workflow plugin siano first-class, perché i problemi difficili in produzione non sono più solo "quale provider chiamiamo?". I problemi difficili sono "cosa dovrebbe succedere prima, durante e dopo questo workflow AI, per questo tenant, con questi dati, questo model e questi strumenti?"

Questa è la differenza di approccio.
