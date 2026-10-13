---
{
  "slug": "jev-decision-model-with-odock-flow-studio-and-plugins",
  "category": "AI Workflows",
  "title": "Jev Meets the Gateway: Millisecond AI Decisions with Odock Flow Studio and Plugins",
  "seoTitle": "Jev Decision Model + Odock Flow Studio: Routing and Tool Gating",
  "description": "TypeSafe's Jev answers typed questions in about 100 ms for a fraction of LLM cost. Here is how to wire it into Odock Flow Studio and plugins to route models, gate MCP tool calls, and escalate low-confidence work.",
  "excerpt": "Jev is the first 'System One' decision model: typed answers with probabilities, no generated text. Put it inside the gateway with Flow Studio and every request, agent step, and MCP tool call can get a fast, cheap, auditable decision.",
  "publishedAt": "2026-10-13",
  "updatedAt": "2026-10-13",
  "readingTime": "11 min",
  "keywords": [
    "Jev decision model",
    "TypeSafe AI",
    "System One model",
    "AI model routing",
    "MCP tool call gating",
    "Flow Studio",
    "AI gateway plugins",
    "LLM cost optimization",
    "agent guardrails"
  ],
  "heroEyebrow": "Decision models",
  "intro": "In September 2026, TypeSafe AI released Jev, a model that does not write text at all. You give it state and a typed question; it gives back a choice, a score, or a yes/no probability, in roughly a tenth of a second. That is exactly the shape of most decisions inside an AI workflow: which model, which handler, is this tool call safe, does a human need to look. This article shows how to run those decisions where every request already passes, in the Odock gateway, using Flow Studio graphs and plugins, so the decision is fast, cheap, enforced, and recorded.",
  "keyTakeaways": [
    "Jev is a decision model, not a chat model: typed Choice, Score, and yes/no answers with probabilities, about 70 to 500 ms, $0.042 per million input tokens, no output token cost (TypeSafe's figures).",
    "Most of what agents spend frontier tokens on is decision-shaped. Moving those decisions to a System One model and acting on them in the gateway cuts cost and latency without touching application code.",
    "Odock Flow Studio provides the plumbing: HTTP Request to ask Jev, Switch and If to branch on the answer, Route Model to pick the tier, Abort or an approval call to stop risky actions, and Run Plugin to mask data before it leaves.",
    "Decisions made in the gateway are enforced for every client and leave evidence: flow traces, usage records, and MCP usage records tied to one request id.",
    "Treat Jev as a filter, not a security boundary: keep deterministic controls (grants, allowlists, budgets, SafetySec) first, and fail safe when the decision service is slow or unavailable."
  ],
  "faq": [
    {
      "question": "What is Jev?",
      "answer": "Jev is a 'System One' decision model released in early access by TypeSafe AI on September 15, 2026. It takes unstructured state and returns typed answers, a Choice among options, a Score on a scale, or a yes/no probability, each with calibrated confidence. It does not generate free text."
    },
    {
      "question": "Does Odock have a native Jev integration?",
      "answer": "No. Jev uses its own API rather than an OpenAI-compatible endpoint, so you call it from a Flow Studio HTTP Request node, ideally through a small relay that holds the TypeSafe key, or package the call as a custom Odock plugin whose credential is stored as an encrypted admin variable."
    },
    {
      "question": "Where in the request lifecycle should the Jev decision run?",
      "answer": "Model routing decisions belong in the pre-route phase, before Odock resolves routing, budgets, and safety. MCP tool-call gating belongs in pre-upstream, immediately before the call reaches the MCP server. Output scoring belongs in post-response, where it runs asynchronously and adds no latency for the caller."
    },
    {
      "question": "What happens if Jev is slow or unavailable?",
      "answer": "The HTTP Request node exposes an error output. For routing, wire the error branch to the end node so the request keeps its original model. For destructive tool calls, wire it to an Abort node so the action fails closed. Keep the node timeout short, for example 800 ms."
    },
    {
      "question": "Is it safe to send prompts to an external decision model?",
      "answer": "Only after minimisation. Run a masking plugin such as pii_mask through a Run Plugin node before the HTTP Request, send only the fields the question needs, and review TypeSafe's data handling like any other vendor that receives request content."
    }
  ],
  "relatedSlugs": [
    "how-to-build-a-plugin-layer-for-llm-workflows",
    "mcp-security-risks-enterprise-ai-agents-2026",
    "how-to-control-llm-costs-with-virtual-api-keys-budgets-and-quotas",
    "the-great-model-churn-of-2026-why-model-agnostic-routing-matters"
  ],
  "cta": {
    "title": "Put fast decisions where every request already passes",
    "description": "Odock Flow Studio lets you route models, gate MCP tool calls, and call external decision services from the gateway, with traces and usage records for every run.",
    "primaryLabel": "Talk to the team",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "Read the Flow Studio docs",
    "secondaryHref": "https://docs.odock.ai/docs/plugins/flow-studio/"
  },
  "locales": {
    "fr": {
      "category": "Workflows IA",
      "title": "Jev rencontre la gateway : des décisions IA en millisecondes avec Flow Studio et les plugins Odock",
      "seoTitle": "Modèle de décision Jev + Flow Studio Odock : routage et contrôle des outils",
      "description": "Jev, de TypeSafe, répond à des questions typées en environ 100 ms pour une fraction du coût d'un LLM. Voici comment le brancher sur Flow Studio et les plugins Odock pour router les modèles, contrôler les appels d'outils MCP et escalader les cas incertains.",
      "excerpt": "Jev est le premier modèle de décision « System One » : des réponses typées avec probabilités, sans texte généré. Placé dans la gateway avec Flow Studio, il donne à chaque requête, étape d'agent et appel d'outil MCP une décision rapide, peu coûteuse et auditable.",
      "heroEyebrow": "Modèles de décision",
      "intro": "En septembre 2026, TypeSafe AI a publié Jev, un modèle qui n'écrit pas de texte. Vous lui donnez un état et une question typée ; il renvoie un choix, un score ou une probabilité oui/non en environ un dixième de seconde. C'est exactement la forme de la plupart des décisions dans un workflow IA : quel modèle, quel traitement, cet appel d'outil est-il sûr, faut-il un humain. Cet article montre comment exécuter ces décisions là où passe déjà chaque requête, dans la gateway Odock, avec des graphes Flow Studio et des plugins, pour qu'elles soient rapides, peu coûteuses, appliquées et tracées.",
      "keyTakeaways": [
        "Jev est un modèle de décision, pas un modèle de chat : réponses typées Choice, Score et oui/non avec probabilités, environ 70 à 500 ms, 0,042 $ par million de tokens d'entrée, tokens de sortie gratuits (chiffres TypeSafe).",
        "Une grande partie des tokens frontier consommés par les agents sert à des décisions. Les confier à un modèle System One et agir dessus dans la gateway réduit coût et latence sans toucher au code applicatif.",
        "Flow Studio fournit la plomberie : HTTP Request pour interroger Jev, Switch et If pour brancher, Route Model pour choisir le tier, Abort ou un appel d'approbation pour stopper les actions risquées, et Run Plugin pour masquer les données avant leur sortie.",
        "Une décision prise dans la gateway s'applique à tous les clients et laisse des preuves : traces de flow, usage records et usage records MCP reliés par un même request id.",
        "Jev est un filtre, pas une frontière de sécurité : gardez d'abord les contrôles déterministes (grants, allowlists, budgets, SafetySec) et prévoyez un comportement sûr si le service de décision est lent ou indisponible."
      ],
      "cta": {
        "title": "Placez les décisions rapides là où passe chaque requête",
        "description": "Flow Studio d'Odock permet de router les modèles, de contrôler les appels d'outils MCP et d'appeler des services de décision externes depuis la gateway, avec traces et usage records à chaque exécution.",
        "primaryLabel": "Parler à l'équipe",
        "secondaryLabel": "Lire la doc Flow Studio"
      },
      "readingTime": "11 min",
      "keywords": [
        "modèle de décision Jev",
        "TypeSafe AI",
        "modèle System One",
        "routage de modèles IA",
        "contrôle des appels d'outils MCP",
        "Flow Studio",
        "plugins gateway IA",
        "optimisation des coûts LLM"
      ],
      "faq": [
        {
          "question": "Qu'est-ce que Jev ?",
          "answer": "Jev est un modèle de décision « System One » publié en accès anticipé par TypeSafe AI le 15 septembre 2026. Il reçoit un état non structuré et renvoie des réponses typées : un Choice parmi des options, un Score sur une échelle ou une probabilité oui/non, chacune avec une confiance calibrée. Il ne génère pas de texte libre."
        },
        {
          "question": "Odock propose-t-il une intégration native de Jev ?",
          "answer": "Non. Jev utilise sa propre API et non un endpoint compatible OpenAI. On l'appelle depuis un nœud HTTP Request de Flow Studio, idéalement via un petit relais qui détient la clé TypeSafe, ou en empaquetant l'appel dans un plugin Odock personnalisé dont le secret est stocké comme admin variable chiffrée."
        },
        {
          "question": "À quel moment du cycle de vie la décision Jev doit-elle s'exécuter ?",
          "answer": "Le routage de modèle se place en pre-route, avant le routage, les budgets et la sécurité d'Odock. Le contrôle des appels d'outils MCP se place en pre-upstream, juste avant l'appel au serveur MCP. La notation des réponses se place en post-response, en asynchrone, sans latence pour l'appelant."
        },
        {
          "question": "Que se passe-t-il si Jev est lent ou indisponible ?",
          "answer": "Le nœud HTTP Request expose une sortie error. Pour le routage, reliez-la au nœud de fin afin que la requête garde son modèle d'origine. Pour les outils destructifs, reliez-la à un nœud Abort pour échouer fermé. Gardez un timeout court, par exemple 800 ms."
        },
        {
          "question": "Peut-on envoyer des prompts à un modèle de décision externe ?",
          "answer": "Seulement après minimisation. Exécutez un plugin de masquage comme pii_mask via un nœud Run Plugin avant le HTTP Request, n'envoyez que les champs utiles à la question et évaluez la gestion des données de TypeSafe comme pour tout fournisseur qui reçoit du contenu de requête."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## Why a model that cannot write is trending

On September 15, 2026, TypeSafe AI came out of stealth with a $40 million seed round led by DCVC and released its first public model, Jev, in early access. Within a month it had its own talks, explainers, and a trending topic about agents making decisions faster.

The reason is simple. Jev does not generate text. TypeSafe calls it a "System One" model: you send unstructured state, text or JSON, plus a map of typed questions, and it returns typed answers with probabilities:

- **Choice**: pick one of up to 255 options, with a probability per option and a confidence value
- **Score**: place the state on an ordered scale of 2 to 10 levels
- **Noul**: a yes/no question that returns the probability of "yes"

All questions in one call run in parallel against the same state. TypeSafe reports 70 to 500 ms end to end and a price of $0.042 per million input tokens, with output tokens free. Early adopters report concrete wins: one writeup estimates scoring a million reviews at about $6 on Jev versus about $1,050 on a frontier model, and Good Start Labs reported 91.5% agreement with Claude's verdicts across 6,003 rubric checks.

The caveats matter as much as the numbers. Most figures are TypeSafe's own or come from early adopters. Jev is hosted only, in early access, behind a waitlist. It cannot fetch live data, it cannot write prose or code, and a schema guarantees a well-formed answer, not a correct one. In TypeSafe's own evaluation it trails the best frontier models on accuracy. It is a fast, cheap, calibrated judge, not a smarter brain.

That is exactly why it belongs in infrastructure.

## Most agent spend is decision-shaped

Look at what an agent actually does between the interesting parts. It classifies an intent. It picks a tool. It decides whether a result is good enough. It decides whether to retry, escalate, or stop. Each of those is a question with a small, known set of answers, and most teams answer them by calling a frontier model and parsing its text.

That pattern is expensive in three ways:

- **Cost.** Gartner warned in August 2026 that while token prices keep falling, inference costs for agentic workflows will rise more than fivefold over two years, because agents use 5 to 30 times more tokens than chatbots for equivalent tasks.
- **Latency.** A frontier model asked to "just decide" still takes seconds. Routers built on an LLM-as-judge can add 1 to 5 seconds to every request.
- **Inconsistency.** When the decision lives in each application's prompt, every team implements routing, escalation, and tool approval differently, and none of it shows up in one audit trail.

A System One model fixes the first two. The gateway fixes the third.

## Why the decision belongs in the gateway

You could call Jev from application code. Many teams will. But the decisions that matter most for a company are not owned by one application:

- which model tier a request is allowed to use
- whether an agent's tool call is consistent with the task it was given
- when a human must be pulled in
- what gets recorded for audit

Those are platform decisions. In Odock, every model call and every MCP tool call already passes through one lifecycle: authenticate, authorize, inspect, reserve budget, route, record. Flow Studio lets you insert your own logic at four phases of that lifecycle (pre-route, pre-upstream, post-upstream, post-response) as a visual or YAML node graph. Plugins from the Marketplace run at the same phases and can be invoked from a flow.

Put Jev there and you get properties application code cannot give you:

- **Enforced for every client.** The support bot, the internal copilot, and the agent worker all get the same routing and the same tool gate, without a code change.
- **Composed with deterministic controls.** Access grants, MCP tool allowlists and blocklists, budgets, quotas, and SafetySec still run. Jev adds judgment on top; it does not replace policy.
- **Recorded.** Every flow run leaves a node-by-node trace (node, outcome, duration) attached to request evidence, next to the usage record for the call.
- **Reversible.** Flows live in a library and only run when activated, on one API key for a pilot or org-wide. Turning one off takes effect on the next request.

[![Diagram of an Odock Flow Studio pre-route graph that masks PII, asks Jev a typed routing question, and switches between a small model, a frontier model, and a human review path](/blog/jev-odock-flow-studio-routing.svg "Jev answers the question; Flow Studio enforces the answer and records it.")](/blog/jev-odock-flow-studio-routing.svg)

## Pattern 1: confidence-aware model routing

The fastest win is routing. Instead of sending every request to the frontier model a developer hardcoded, ask Jev one Choice question at pre-route and let Flow Studio rewrite the target model.

The graph:

1. **Run Plugin `pii_mask`** so the state you send out is minimised.
2. **HTTP Request** to your decision relay, with the user's messages as state and one Choice question: `simple`, `complex`, `needs_human`, `other`.
3. **If** confidence is at least 0.8, go to a **Switch** on the choice. Otherwise keep the frontier model.
4. **Switch**: `simple` goes to **Route Model** with the small tier, `needs_human` goes to an approval path, everything else falls through unchanged.
5. The HTTP Request's **error** output goes straight to **End**: if the decision service is slow or down, the request keeps the model it asked for.

In YAML, the shape looks like this. The relay URL and the response field paths are illustrative; match them to the relay you deploy and TypeSafe's current API reference.

```yaml
version: 1
name: Jev confidence-aware routing
on_error: continue
phases:
  pre_route:
    nodes:
      - {id: start, type: start}
      - {id: mask, type: plugin_call, config: {slug: pii_mask}}
      - id: jev
        type: http_request
        config:
          method: POST
          url: https://decisions.internal.example.com/v1/route
          body:
            state: "{{request.body.messages}}"
            question: {type: choice, options: [simple, complex, needs_human, other]}
          timeout_ms: 800
      - id: confident
        type: if
        config:
          conditions:
            - {left: "{{nodes.jev.body.confidence}}", op: gte, right: 0.8}
      - id: decide
        type: switch
        config:
          value: "{{nodes.jev.body.choice}}"
          cases:
            - {equals: simple}
            - {equals: needs_human}
      - {id: small, type: model_route, config: {model: gpt-4.1-mini}}
      - id: escalate
        type: abort
        config:
          status: 409
          code: flow.needs_human
          message: "This request needs a human reviewer. It has been queued."
      - {id: end, type: end}
    edges:
      - {from: start, to: mask}
      - {from: mask, to: jev}
      - {from: jev, to: confident}
      - {from: jev, to: end, handle: error}
      - {from: confident, to: decide, handle: "true"}
      - {from: confident, to: end, handle: "false"}
      - {from: decide, to: small, handle: simple}
      - {from: decide, to: escalate, handle: needs_human}
      - {from: decide, to: end, handle: default}
      - {from: small, to: end}
```

A few details make this production-grade rather than a demo:

- **Routing still respects grants.** Route Model rewrites the target, but Odock's access grants still decide whether the key may call that model. A flow cannot route a key onto a model it was never granted.
- **Budgets see the real model.** Budget reservation happens after pre-route, so the estimate is made against the model that will actually be called.
- **The default is safe.** Low confidence and errors keep the original model. You only save money when the decision is confident.

This is the same pattern Gartner recommends as "inference tiering", stopping agents from defaulting to frontier models for simple tasks, implemented once for the whole organisation.

## Pattern 2: gating MCP tool calls

The most important use of a fast judge is not saving money; it is stopping the wrong action. The classic example from the Jev community: `npm run db:reset` is the correct command when the task is "reset my local database" and a disaster when the task is "add a column".

Static rules cannot tell those apart. A tool allowlist either allows `db.reset` or it does not. A judgment can.

Odock already gives you the deterministic layers for MCP traffic: an MCP access grant per key, team or key scope, allowed and blocked tools, semantic filters on tool payloads, upstream auth injection so agents never see credentials, and budgets and quotas. Keep all of that. Then add a pre-upstream flow for the small set of high-impact tools:

1. **If** `{{request.metadata.mcp_method}}` is `tools/call` and `{{request.metadata.mcp_tool}}` is in your high-impact list.
2. **HTTP Request** to the decision relay with two pieces of state: the task the agent was given (sent by the agent in a header such as `x-agent-task`) and the pending action, tool name plus `{{request.body.params.arguments}}`. One yes/no question: "Is this action consistent with the task?"
3. Probability at least 0.9: continue. Between 0.5 and 0.9: call your approval service, as in Odock's built-in **MCP external approval gate** template. Below 0.5: **Abort** with a 403 and a clear message the agent can act on.
4. The HTTP Request's **error** output goes to an **Abort** with 503. For destructive tools, fail closed.

[![Diagram of an MCP tools/call passing access grants, allowlist, blocklist, and semantic filter, then a pre-upstream flow that asks Jev whether the action is consistent with the task, with allow, approval, and abort outcomes](/blog/jev-mcp-tool-call-gate.svg "Deterministic controls first; a typed judgment only where the action is high impact.")](/blog/jev-mcp-tool-call-gate.svg)

Two design rules from early Jev users apply directly:

- **The gate sees the task and the pending action, never the tool's output.** Tool output is where indirect prompt injection lives. Keep it out of the judge's state.
- **Treat it as a filter, not a boundary.** Jev does not treat its input as hostile. That is why it sits behind grants, allowlists, blocklists, and semantic filters, not in place of them.

Every decision lands in Odock's MCP usage records and flow traces with the same request id, so a security reviewer can see which agent key asked for which tool, what Jev answered, and what the gateway did.

## Pattern 3: confidence-gated escalation

Calibrated probabilities change how you design human-in-the-loop. Instead of reviewing everything or nothing, use three bands:

- **High confidence:** act automatically.
- **Medium confidence:** retry with more context or a stronger model, with a finite limit.
- **Low confidence:** escalate to a person.

In Flow Studio that is one Switch or two If nodes after the HTTP Request. Combine it with Odock's built-in **Agent identity and loop ceiling** template, which requires `x-odock-agent-id` and `x-odock-agent-iteration` headers and stops runaway loops after a set number of turns, so a medium-confidence retry can never spin forever.

The important part is measurement. Before trusting thresholds, run the flow in shadow mode: have it record the decision without acting on it, label 100 to 200 real cases, and check whether 0.9 confidence really means 90% correct for your traffic. Then turn on the automatic paths.

## Pattern 4: free scoring after the response

The post-response phase runs asynchronously by default. It cannot change what the caller received and it adds no latency. That makes it the right place for quality scoring:

- read the model output with a **Get Response Value** node
- ask Jev for a **Score** (for example, answer completeness from 1 to 5) and a **Noul** (did the answer give medical or legal advice?)
- send the result with a **Send Webhook** node to your warehouse or eval pipeline

You get continuous evaluation on real traffic for a cost measured in cents, and you can compare quality per model tier to check whether Pattern 1 is routing correctly.

## Plugins, flows, and Jev: who does what

The cleanest architecture keeps each component on the job it is good at:

| Component | Job | Example |
| --- | --- | --- |
| Access grants, budgets, quotas | Deterministic policy | Key X may call these models and MCP servers, within this monthly spend |
| SafetySec | Prompt and response safety | Prompt injection, jailbreak patterns, redaction, leakage |
| Marketplace plugins | One reusable, audited job | `pii_mask`, SIEM export, Slack notification |
| Flow Studio | Conditional logic and orchestration | When to ask Jev, what to do with the answer, how to fail |
| Jev | Fast typed judgment | Which tier, is this action consistent, how good was this answer |

When a decision becomes load-bearing and your security team wants to review it as source code rather than a canvas, move it from a flow into a custom plugin. That is also the right home for the TypeSafe credential: plugin secrets are stored as admin variables, encrypted in the browser before they reach Odock and decrypted only when the plugin executes.

## Rollout checklist

- **Keep the key out of the flow document.** Flow documents are configuration that organisation roles can view. Put the TypeSafe key in a small relay you control, or in a custom plugin's admin variables, not in an HTTP Request header.
- **Make the relay reachable.** Flow HTTP Requests refuse private and loopback addresses by default, so expose the relay on an endpoint your deployment allows.
- **Minimise state.** Run `pii_mask` first and send only the fields each question needs.
- **Bound latency.** Set `timeout_ms` well below the 30-second ceiling; 500 to 800 ms is a good start for request-path decisions.
- **Choose the failure mode per decision.** Routing fails open to the requested model. Destructive tool calls fail closed.
- **Pilot on one key.** Activate the flow from a single API key's Automation tab, run matching, non-matching, failure, and abort scenarios, read the flow traces, then switch it on org-wide.
- **Watch the numbers.** Compare cost per request and quality scores per tier in usage records before and after.

## The bigger picture

Jev is an early example of a broader shift: AI systems are splitting into fast judges and slow thinkers. The slow thinkers write, plan, and reason. The fast judges route, gate, score, and escalate. Companies that let every application wire those judges differently will rebuild the same governance problem they had with provider keys.

The gateway is where the two systems meet. It sees every request, it enforces policy, and it keeps the record. With Odock Flow Studio and plugins, a decision model becomes a shared, governed capability for every team and every agent, not one more integration hidden in application code.

## Sources

- [You.com, What is Jev? (TypeSafe AI overview, API shape, pricing, limitations)](https://you.com/resources/what-is-jev)
- [My AI Community, Every AI Agent Starts With a Decision. Jev Just Made It Cheap, October 7, 2026](https://myaicommunity.substack.com/p/every-ai-agent-starts-with-a-decision)
- [Sarthak AI, Ways to Use Jev to Make AI Agents More Reliable](https://sarthakai.substack.com/p/6-ways-to-use-jev-to-make-ai-agents)
- [Callstack, Can Jev Make AI Agent Decisions Faster?](https://www.callstack.com/events/can-jev-make-ai-agent-decisions-faster)
- [Computerworld, AI inference is getting cheaper, but your agents are getting more expensive, August 17, 2026](https://www.computerworld.com/article/4210786/ai-inference-is-getting-cheaper-but-your-agents-are-getting-more-expensive.html)
- [Odock Flow Studio documentation](https://docs.odock.ai/docs/plugins/flow-studio/)
- [Odock Flow Studio building blocks](https://docs.odock.ai/docs/plugins/flow-studio/building-blocks/)
- [Odock plugin architecture](https://docs.odock.ai/docs/plugins/architecture/)
- [Odock MCP security](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)

<!-- locale:fr -->
## Pourquoi un modèle qui ne sait pas écrire fait autant parler

Le 15 septembre 2026, TypeSafe AI est sorti de l'ombre avec une levée seed de 40 millions de dollars menée par DCVC et a publié en accès anticipé son premier modèle public, Jev. En un mois, il avait déjà ses conférences, ses articles explicatifs et un sujet tendance sur les agents qui décident plus vite.

La raison est simple : Jev ne génère pas de texte. TypeSafe parle d'un modèle « System One ». Vous envoyez un état non structuré, texte ou JSON, avec une série de questions typées, et il renvoie des réponses typées accompagnées de probabilités :

- **Choice** : choisir une option parmi jusqu'à 255, avec une probabilité par option et une valeur de confiance
- **Score** : placer l'état sur une échelle ordonnée de 2 à 10 niveaux
- **Noul** : une question oui/non qui renvoie la probabilité du « oui »

Toutes les questions d'un même appel sont évaluées en parallèle sur le même état. TypeSafe annonce 70 à 500 ms de bout en bout et un prix de 0,042 $ par million de tokens d'entrée, les tokens de sortie étant gratuits. Les premiers utilisateurs rapportent des gains concrets : un article estime à environ 6 $ la notation d'un million d'avis avec Jev contre environ 1 050 $ avec un modèle frontier, et Good Start Labs a mesuré 91,5 % d'accord avec les verdicts de Claude sur 6 003 vérifications de grille.

Les limites comptent autant que les chiffres. La plupart des données viennent de TypeSafe ou des premiers utilisateurs. Jev est uniquement hébergé, en accès anticipé, sur liste d'attente. Il ne peut pas chercher de données en direct, ni écrire de prose ou de code, et un schéma garantit une réponse bien formée, pas une réponse juste. Dans l'évaluation de TypeSafe lui-même, il reste derrière les meilleurs modèles frontier en précision. C'est un juge rapide, bon marché et calibré, pas un cerveau plus intelligent.

C'est précisément pour cela qu'il a sa place dans l'infrastructure.

## L'essentiel de la dépense agentique sert à décider

Regardez ce que fait un agent entre les étapes intéressantes. Il classe une intention. Il choisit un outil. Il juge si un résultat est suffisant. Il décide de réessayer, d'escalader ou de s'arrêter. Chacune de ces étapes est une question avec un petit ensemble de réponses connues, et la plupart des équipes y répondent en appelant un modèle frontier puis en analysant son texte.

Ce schéma coûte cher de trois façons :

- **Le coût.** Gartner a averti en août 2026 que, si le prix des tokens continue de baisser, le coût d'inférence des workflows agentiques sera multiplié par plus de cinq en deux ans, car les agents consomment 5 à 30 fois plus de tokens qu'un chatbot pour une tâche équivalente.
- **La latence.** Un modèle frontier à qui l'on demande « juste de décider » prend quand même plusieurs secondes. Un routeur bâti sur un LLM-juge peut ajouter 1 à 5 secondes à chaque requête.
- **L'incohérence.** Quand la décision vit dans le prompt de chaque application, chaque équipe implémente routage, escalade et approbation d'outils à sa manière, et rien n'apparaît dans une piste d'audit unique.

Un modèle System One règle les deux premiers points. La gateway règle le troisième.

## Pourquoi la décision doit vivre dans la gateway

Vous pourriez appeler Jev depuis le code applicatif, et beaucoup d'équipes le feront. Mais les décisions qui comptent le plus pour une entreprise n'appartiennent pas à une seule application :

- quel tier de modèle une requête a le droit d'utiliser
- si l'appel d'outil d'un agent est cohérent avec la tâche reçue
- quand un humain doit intervenir
- ce qui est enregistré pour l'audit

Ce sont des décisions de plateforme. Dans Odock, chaque appel de modèle et chaque appel d'outil MCP passe déjà par un même cycle de vie : authentifier, autoriser, inspecter, réserver le budget, router, enregistrer. Flow Studio permet d'insérer votre propre logique à quatre phases de ce cycle (pre-route, pre-upstream, post-upstream, post-response) sous forme de graphe de nœuds visuel ou YAML. Les plugins du Marketplace s'exécutent aux mêmes phases et peuvent être invoqués depuis un flow.

Placez Jev à cet endroit et vous obtenez des propriétés que le code applicatif ne peut pas offrir :

- **Appliqué à tous les clients.** Le bot de support, le copilot interne et les workers agents reçoivent le même routage et le même contrôle d'outils, sans changement de code.
- **Combiné aux contrôles déterministes.** Grants d'accès, allowlists et blocklists d'outils MCP, budgets, quotas et SafetySec continuent de s'exécuter. Jev ajoute du jugement par-dessus ; il ne remplace pas la policy.
- **Tracé.** Chaque exécution de flow laisse une trace nœud par nœud (nœud, résultat, durée) attachée aux preuves de la requête, à côté de l'usage record de l'appel.
- **Réversible.** Les flows vivent dans une bibliothèque et ne s'exécutent qu'une fois activés, sur une seule clé API pour un pilote ou pour toute l'organisation. Les désactiver prend effet dès la requête suivante.

[![Schéma d'un graphe pre-route Flow Studio d'Odock qui masque les PII, pose à Jev une question de routage typée et bascule entre un petit modèle, un modèle frontier et une revue humaine](/blog/jev-odock-flow-studio-routing-fr.svg "Jev répond à la question ; Flow Studio applique la réponse et la trace.")](/blog/jev-odock-flow-studio-routing-fr.svg)

## Schéma 1 : un routage de modèle qui tient compte de la confiance

Le gain le plus rapide est le routage. Au lieu d'envoyer chaque requête au modèle frontier codé en dur par un développeur, posez à Jev une question Choice en pre-route et laissez Flow Studio réécrire le modèle cible.

Le graphe :

1. **Run Plugin `pii_mask`** pour minimiser l'état envoyé à l'extérieur.
2. **HTTP Request** vers votre relais de décision, avec les messages de l'utilisateur comme état et une question Choice : `simple`, `complex`, `needs_human`, `other`.
3. **If** la confiance est d'au moins 0,8, aller vers un **Switch** sur le choix. Sinon, garder le modèle frontier.
4. **Switch** : `simple` va vers **Route Model** avec le petit tier, `needs_human` vers un circuit d'approbation, tout le reste passe sans changement.
5. La sortie **error** du HTTP Request va directement vers **End** : si le service de décision est lent ou indisponible, la requête garde le modèle demandé.

En YAML, la structure ressemble à ceci. L'URL du relais et les chemins de champs de réponse sont illustratifs ; adaptez-les au relais que vous déployez et à la référence API actuelle de TypeSafe.

```yaml
version: 1
name: Jev confidence-aware routing
on_error: continue
phases:
  pre_route:
    nodes:
      - {id: start, type: start}
      - {id: mask, type: plugin_call, config: {slug: pii_mask}}
      - id: jev
        type: http_request
        config:
          method: POST
          url: https://decisions.internal.example.com/v1/route
          body:
            state: "{{request.body.messages}}"
            question: {type: choice, options: [simple, complex, needs_human, other]}
          timeout_ms: 800
      - id: confident
        type: if
        config:
          conditions:
            - {left: "{{nodes.jev.body.confidence}}", op: gte, right: 0.8}
      - id: decide
        type: switch
        config:
          value: "{{nodes.jev.body.choice}}"
          cases:
            - {equals: simple}
            - {equals: needs_human}
      - {id: small, type: model_route, config: {model: gpt-4.1-mini}}
      - id: escalate
        type: abort
        config:
          status: 409
          code: flow.needs_human
          message: "Cette demande nécessite une revue humaine. Elle a été mise en file."
      - {id: end, type: end}
    edges:
      - {from: start, to: mask}
      - {from: mask, to: jev}
      - {from: jev, to: confident}
      - {from: jev, to: end, handle: error}
      - {from: confident, to: decide, handle: "true"}
      - {from: confident, to: end, handle: "false"}
      - {from: decide, to: small, handle: simple}
      - {from: decide, to: escalate, handle: needs_human}
      - {from: decide, to: end, handle: default}
      - {from: small, to: end}
```

Quelques détails font passer ce schéma de la démo à la production :

- **Le routage respecte toujours les grants.** Route Model réécrit la cible, mais ce sont les grants d'accès d'Odock qui décident si la clé peut appeler ce modèle. Un flow ne peut pas router une clé vers un modèle qui ne lui a jamais été accordé.
- **Les budgets voient le vrai modèle.** La réservation de budget a lieu après le pre-route : l'estimation porte donc sur le modèle réellement appelé.
- **Le comportement par défaut est sûr.** Une confiance faible ou une erreur conserve le modèle d'origine. Vous n'économisez que lorsque la décision est confiante.

C'est le schéma que Gartner recommande sous le nom d'« inference tiering », qui consiste à empêcher les agents d'utiliser par défaut des modèles frontier pour des tâches simples, implémenté une seule fois pour toute l'organisation.

## Schéma 2 : contrôler les appels d'outils MCP

L'usage le plus important d'un juge rapide n'est pas d'économiser, mais d'empêcher la mauvaise action. L'exemple classique de la communauté Jev : `npm run db:reset` est la bonne commande si la tâche est « réinitialiser ma base locale » et une catastrophe si la tâche est « ajouter une colonne ».

Des règles statiques ne savent pas faire la différence. Une allowlist d'outils autorise `db.reset` ou ne l'autorise pas. Un jugement, lui, peut distinguer les deux cas.

Odock fournit déjà les couches déterministes pour le trafic MCP : un grant d'accès MCP par clé, un scope par équipe ou par clé, des outils autorisés et bloqués, des filtres sémantiques sur les payloads, l'injection de l'auth upstream pour que les agents ne voient jamais les secrets, ainsi que budgets et quotas. Gardez tout cela. Ajoutez ensuite un flow pre-upstream pour le petit ensemble d'outils à fort impact :

1. **If** `{{request.metadata.mcp_method}}` vaut `tools/call` et `{{request.metadata.mcp_tool}}` figure dans votre liste d'outils à fort impact.
2. **HTTP Request** vers le relais de décision avec deux éléments d'état : la tâche confiée à l'agent (envoyée par l'agent dans un header comme `x-agent-task`) et l'action en attente, nom de l'outil plus `{{request.body.params.arguments}}`. Une question oui/non : « Cette action est-elle cohérente avec la tâche ? »
3. Probabilité d'au moins 0,9 : on continue. Entre 0,5 et 0,9 : appel à votre service d'approbation, comme dans le template intégré **MCP external approval gate** d'Odock. Sous 0,5 : **Abort** avec un 403 et un message clair que l'agent peut exploiter.
4. La sortie **error** du HTTP Request va vers un **Abort** en 503. Pour les outils destructifs, on échoue fermé.

[![Schéma d'un tools/call MCP qui traverse grant d'accès, allowlist, blocklist et filtre sémantique, puis un flow pre-upstream qui demande à Jev si l'action est cohérente avec la tâche, avec les issues autoriser, approbation et blocage](/blog/jev-mcp-tool-call-gate-fr.svg "D'abord les contrôles déterministes ; un jugement typé seulement là où l'action a un fort impact.")](/blog/jev-mcp-tool-call-gate-fr.svg)

Deux règles de conception issues des premiers utilisateurs de Jev s'appliquent directement :

- **Le contrôle voit la tâche et l'action en attente, jamais la sortie de l'outil.** C'est dans la sortie des outils que se loge l'injection de prompt indirecte. Gardez-la hors de l'état transmis au juge.
- **C'est un filtre, pas une frontière.** Jev ne considère pas son entrée comme hostile. C'est pour cela qu'il se place derrière les grants, allowlists, blocklists et filtres sémantiques, et non à leur place.

Chaque décision arrive dans les usage records MCP et les traces de flow d'Odock avec le même request id. Un relecteur sécurité voit ainsi quelle clé agent a demandé quel outil, ce que Jev a répondu et ce que la gateway a fait.

## Schéma 3 : une escalade pilotée par la confiance

Des probabilités calibrées changent la conception du human-in-the-loop. Au lieu de tout relire ou de ne rien relire, utilisez trois zones :

- **Confiance élevée :** action automatique.
- **Confiance moyenne :** nouvel essai avec plus de contexte ou un modèle plus fort, avec une limite finie.
- **Confiance faible :** escalade vers une personne.

Dans Flow Studio, cela tient en un Switch ou deux nœuds If après le HTTP Request. Combinez-le avec le template intégré **Agent identity and loop ceiling** d'Odock, qui exige les headers `x-odock-agent-id` et `x-odock-agent-iteration` et arrête les boucles incontrôlées après un nombre de tours fixé : un nouvel essai en confiance moyenne ne peut jamais tourner indéfiniment.

L'essentiel est la mesure. Avant de faire confiance aux seuils, faites tourner le flow en mode shadow : il enregistre la décision sans agir, vous étiquetez 100 à 200 cas réels, puis vous vérifiez si une confiance de 0,9 correspond vraiment à 90 % de bonnes réponses sur votre trafic. Ensuite seulement, activez les chemins automatiques.

## Schéma 4 : une notation gratuite après la réponse

La phase post-response s'exécute en asynchrone par défaut. Elle ne peut pas modifier ce que l'appelant a reçu et n'ajoute aucune latence. C'est l'endroit idéal pour noter la qualité :

- lire la sortie du modèle avec un nœud **Get Response Value**
- demander à Jev un **Score** (par exemple, la complétude de la réponse de 1 à 5) et un **Noul** (la réponse donne-t-elle un conseil médical ou juridique ?)
- envoyer le résultat avec un nœud **Send Webhook** vers votre entrepôt de données ou votre pipeline d'évaluation

Vous obtenez une évaluation continue sur le trafic réel pour quelques centimes, et vous pouvez comparer la qualité par tier de modèle pour vérifier que le schéma 1 route correctement.

## Plugins, flows et Jev : qui fait quoi

L'architecture la plus propre laisse chaque composant sur ce qu'il fait le mieux :

| Composant | Rôle | Exemple |
| --- | --- | --- |
| Grants d'accès, budgets, quotas | Policy déterministe | La clé X peut appeler ces modèles et serveurs MCP, dans cette limite de dépense mensuelle |
| SafetySec | Sécurité des prompts et réponses | Injection de prompt, jailbreak, redaction, fuite de données |
| Plugins du Marketplace | Une tâche réutilisable et auditée | `pii_mask`, export SIEM, notification Slack |
| Flow Studio | Logique conditionnelle et orchestration | Quand interroger Jev, quoi faire de la réponse, comment échouer |
| Jev | Jugement typé et rapide | Quel tier, cette action est-elle cohérente, quelle qualité de réponse |

Quand une décision devient critique et que votre équipe sécurité veut la relire sous forme de code source plutôt que de canvas, déplacez-la d'un flow vers un plugin personnalisé. C'est aussi le bon endroit pour le secret TypeSafe : les secrets de plugin sont stockés comme admin variables, chiffrés dans le navigateur avant d'atteindre Odock et déchiffrés uniquement lors de l'exécution du plugin.

## Checklist de déploiement

- **Gardez la clé hors du document de flow.** Les documents de flow sont de la configuration consultable par les rôles de l'organisation. Placez la clé TypeSafe dans un petit relais que vous contrôlez, ou dans les admin variables d'un plugin personnalisé, pas dans un header de HTTP Request.
- **Rendez le relais joignable.** Les HTTP Request des flows refusent par défaut les adresses privées et loopback : exposez le relais sur un endpoint autorisé par votre déploiement.
- **Minimisez l'état.** Exécutez d'abord `pii_mask` et n'envoyez que les champs utiles à chaque question.
- **Bornez la latence.** Réglez `timeout_ms` bien en dessous du plafond de 30 secondes ; 500 à 800 ms est un bon point de départ pour les décisions dans le chemin de la requête.
- **Choisissez le mode d'échec par décision.** Le routage échoue ouvert vers le modèle demandé. Les appels d'outils destructifs échouent fermés.
- **Pilotez sur une seule clé.** Activez le flow depuis l'onglet Automation d'une clé API, testez les cas correspondants, non correspondants, d'échec et de blocage, lisez les traces de flow, puis activez-le pour toute l'organisation.
- **Suivez les chiffres.** Comparez le coût par requête et les scores de qualité par tier dans les usage records, avant et après.

## La vue d'ensemble

Jev est un exemple précoce d'une évolution plus large : les systèmes IA se séparent en juges rapides et en penseurs lents. Les penseurs lents écrivent, planifient et raisonnent. Les juges rapides routent, contrôlent, notent et escaladent. Les entreprises qui laissent chaque application brancher ces juges à sa manière reconstruiront le même problème de gouvernance qu'avec les clés provider.

La gateway est l'endroit où les deux systèmes se rencontrent. Elle voit chaque requête, applique la policy et conserve la trace. Avec Flow Studio et les plugins Odock, un modèle de décision devient une capacité partagée et gouvernée pour chaque équipe et chaque agent, et non une intégration de plus cachée dans le code applicatif.

## Sources

- [You.com, What is Jev? (présentation de TypeSafe AI, forme de l'API, prix, limites)](https://you.com/resources/what-is-jev)
- [My AI Community, Every AI Agent Starts With a Decision. Jev Just Made It Cheap, 7 octobre 2026](https://myaicommunity.substack.com/p/every-ai-agent-starts-with-a-decision)
- [Sarthak AI, Ways to Use Jev to Make AI Agents More Reliable](https://sarthakai.substack.com/p/6-ways-to-use-jev-to-make-ai-agents)
- [Callstack, Can Jev Make AI Agent Decisions Faster?](https://www.callstack.com/events/can-jev-make-ai-agent-decisions-faster)
- [Computerworld, AI inference is getting cheaper, but your agents are getting more expensive, 17 août 2026](https://www.computerworld.com/article/4210786/ai-inference-is-getting-cheaper-but-your-agents-are-getting-more-expensive.html)
- [Documentation Odock Flow Studio](https://docs.odock.ai/docs/plugins/flow-studio/)
- [Odock Flow Studio : building blocks](https://docs.odock.ai/docs/plugins/flow-studio/building-blocks/)
- [Architecture des plugins Odock](https://docs.odock.ai/docs/plugins/architecture/)
- [Sécurité MCP dans Odock](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
