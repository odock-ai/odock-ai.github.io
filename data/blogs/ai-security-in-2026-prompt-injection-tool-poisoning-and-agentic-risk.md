---
{
  "slug": "ai-security-in-2026-prompt-injection-tool-poisoning-and-agentic-risk",
  "category": "AI Security",
  "title": "AI Security in 2026: Prompt Injection, Tool Poisoning, and the New Agentic Risk Stack",
  "seoTitle": "AI Security in 2026 for LLM and MCP Infrastructure",
  "description": "The latest OWASP and MCP security work shows that AI security has moved from simple prompt filters to runtime capability control. Compare the 2025-2026 threat landscape with how Odock handles security in its engine and gateway.",
  "excerpt": "AI security is no longer only about bad prompts. It now includes tool misuse, MCP poisoning, unbounded consumption, and response-side leakage. This post compares those risks with Odock's actual runtime controls.",
  "publishedAt": "2026-06-11",
  "updatedAt": "2026-06-11",
  "readingTime": "9 min",
  "keywords": [
    "ai infrastructure security",
    "prompt injection",
    "tool poisoning",
    "agentic ai security",
    "mcp security",
    "odock security engine"
  ],
  "heroEyebrow": "AI infrastructure security",
  "intro": "The AI security conversation changed materially between March 2025 and June 2026. OWASP moved the discussion beyond prompt injection alone, agentic guidance started focusing on tool misuse and runtime containment, and new MCP research showed that tool metadata itself can become an attack path. For platform teams, the implication is clear: production AI security now has to govern capabilities, cost, and outputs across the full request lifecycle.",
  "keyTakeaways": [
    "The latest AI security guidance is shifting from prompt-only thinking to agent, tool, and runtime control.",
    "Our Security Engine maps well to prompt injection, redaction, leakage, tool governance, and unbounded-consumption controls that belong in the gateway.",
    "Some risks, such as model supply-chain attestation and training-data poisoning, still need controls outside the gateway."
  ],
  "faq": [
    {
      "question": "Is prompt injection still the main AI security issue?",
      "answer": "It is still a top issue, but it is no longer the whole story. Once models can call tools, use MCP servers, or run multi-step workflows, teams also need capability control, output handling, cost limits, and auditability."
    },
    {
      "question": "Can one gateway solve every AI security problem?",
      "answer": "No. A gateway is the right place for runtime enforcement, identity-aware access control, redaction, leakage checks, and cost guardrails. It is not the only place for supply-chain security, model evaluations, or secure software delivery."
    },
    {
      "question": "Why compare MCP research with Odock?",
      "answer": "Because MCP turns AI security into a tool governance problem. At Odock, we already treat MCP access as capability access with grants, scopes, tool allowlists, semantic filters, and runtime policy checks."
    }
  ],
  "relatedSlugs": [
    "mcp-server-governance-for-ai-agents",
    "prompt-injection-data-leakage-and-llm-security-guardrails",
    "how-to-build-a-lifecycle-aware-ai-security-engine"
  ],
  "cta": {
    "title": "Need runtime AI security that covers models and tools?",
    "description": "Odock centralizes prompt security, MCP governance, redaction, budgets, quotas, and response-side checks behind one gateway so AI controls do not fragment across app services.",
    "primaryLabel": "Talk to the team",
    "primaryHref": "#waitlist-section",
    "secondaryLabel": "View on GitHub",
    "secondaryHref": "https://github.com/odock-ai"
  },
  "locales": {
    "fr": {
      "category": "Securite IA",
      "title": "Securite IA en 2026 : prompt injection, tool poisoning et nouveau risque agentique",
      "seoTitle": "Securite IA en 2026 pour l'infrastructure LLM et MCP",
      "description": "Les travaux recents d'OWASP et de la securite MCP montrent que la securite IA ne se limite plus aux filtres de prompts. Comparez le paysage 2025-2026 avec la facon dont Odock traite la securite dans son engine et son gateway.",
      "excerpt": "La securite IA ne concerne plus seulement les mauvais prompts. Elle couvre aussi l'abus d'outils, le poisoning MCP, la consommation non bornee et les fuites cote reponse. Cet article compare ces risques avec les controles runtime reelles d'Odock.",
      "heroEyebrow": "Securite de l'infrastructure IA",
      "intro": "La conversation sur la securite IA a change de facon concrete entre mars 2025 et juin 2026. OWASP a depasse le seul sujet de la prompt injection, les guides agentiques ont commence a insister sur l'abus d'outils et le runtime containment, et de nouvelles recherches MCP ont montre que les metadonnees d'un outil peuvent elles-memes devenir un chemin d'attaque. Pour les equipes plateforme, la conclusion est simple : la securite IA en production doit maintenant gouverner les capacites, le cout et les sorties sur tout le cycle de vie de la requete.",
      "keyTakeaways": [
        "Les recommandations recentes en securite IA se deplacent d'une logique centree sur les prompts vers le controle des agents, des outils et du runtime.",
        "Notre Security Engine correspond bien aux controles de prompt injection, de redaction, de fuite, de gouvernance d'outils et de consommation non bornee qui doivent vivre dans le gateway.",
        "Certains risques, comme l'attestation de supply chain model ou le poisoning des donnees d'entrainement, demandent toujours des controles hors du gateway."
      ],
      "cta": {
        "title": "Besoin d'une securite runtime pour les models et les outils ?",
        "description": "Odock centralise la securite des prompts, la gouvernance MCP, la redaction, les budgets, les quotas et les controles cote reponse derriere un seul gateway afin d'eviter la fragmentation des controles IA entre services applicatifs.",
        "primaryLabel": "Parler a l'equipe",
        "secondaryLabel": "Voir sur GitHub"
      },
      "readingTime": "9 min",
      "keywords": [
        "ai infrastructure security",
        "prompt injection",
        "tool poisoning",
        "agentic ai security",
        "mcp security",
        "odock security engine"
      ],
      "faq": [
        {
          "question": "La prompt injection reste-t-elle le principal sujet de securite IA ?",
          "answer": "Elle reste un sujet majeur, mais ce n'est plus toute l'histoire. Des qu'un model peut appeler des outils, utiliser des serveurs MCP ou executer des workflows en plusieurs etapes, il faut aussi du controle de capacites, de la gestion de sortie, des limites de cout et de l'auditabilite."
        },
        {
          "question": "Un seul gateway peut-il resoudre tous les problemes de securite IA ?",
          "answer": "Non. Le gateway est le bon endroit pour l'enforcement runtime, le controle d'acces lie a l'identite, la redaction, les controles de fuite et les garde-fous de cout. Ce n'est pas le seul endroit pour la securite de supply chain, les evaluations de model ou la securisation du delivery logiciel."
        },
        {
          "question": "Pourquoi comparer les recherches MCP avec Odock ?",
          "answer": "Parce que MCP transforme la securite IA en probleme de gouvernance des outils. Chez Odock, nous traitons deja l'acces MCP comme un acces a des capacites avec grants, scopes, allowlists d'outils, filtres semantiques et controles runtime."
        }
      ]
    }
  }
}
---
<!-- locale:en -->
## The threat model changed between March 2025 and June 2026

On March 12, 2025, the OWASP GenAI Security Project published the 2025 LLM Top 10 and made the shift explicit. The list still starts with prompt injection, but it also highlights sensitive information disclosure, improper output handling, excessive agency, system prompt leakage, vector and embedding weaknesses, and unbounded consumption. That is a broader runtime security surface than the early "just moderate the answer" framing.

The next signal came on February 17, 2025, when OWASP published *Agentic AI - Threats and Mitigations*. The framing changed from single-model misuse to autonomous-system risk: repeated tool calls, broader capabilities, and a larger blast radius when instructions are manipulated.

By March 23, 2026, MCP-specific research had pushed the model further. Papers such as *Are AI-assisted Development Tools Immune to Prompt Injection?* and *Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning* argued that tool metadata and client behavior can become their own attack surfaces. Then on June 1, 2026, OWASP's *State of Agentic AI Security and Governance 2.01* and, on May 25, 2026, the AIUC-1 crosswalk added even more emphasis on agent identity, runtime containment, architectural monitoring, and privilege abuse.

The practical change is simple: AI infra security is now a layered control-plane problem, not a prompt-formatting problem.

## The runtime risks that matter most now

**Prompt injection and jailbreaks remain first-order risks.** OWASP still lists prompt injection as `LLM01:2025`, and it explicitly notes that RAG and fine-tuning do not remove the vulnerability. If the gateway cannot inspect untrusted input before the provider call, the rest of the stack inherits the risk.

**Excessive agency turns weak model behavior into real actions.** OWASP's `LLM06:2025 Excessive Agency` points directly at too much functionality, too many permissions, and too much autonomy. In practice, that means the security question is not only "what did the model say?" but also "what was it allowed to do next?"

**Tool poisoning is now part of the agentic attack surface.** The latest MCP papers focus on poisoned tool metadata, hidden parameters, cross-tool poisoning, and unauthorized invocation. That matters because many teams still treat tool integration as a product feature instead of a governed capability boundary.

**Unbounded consumption is both a resilience and a security issue.** OWASP's `LLM10:2025 Unbounded Consumption` explicitly ties uncontrolled inference to denial of service, denial of wallet, service degradation, and model extraction pressure. In AI systems, cost abuse and availability abuse are often the same operational event.

**Sensitive disclosure is not only a provider problem.** The 2025 OWASP list separates sensitive information disclosure and improper output handling because the model can leak data even if the original prompt looked acceptable. Response-side enforcement matters as much as request-side filtering.

## How Odock handles these risks in the security engine

At Odock, we make a deliberate separation: policy guardrails handle traffic shape, access, payload, tokens, budgets, and quotas, while our Security Engine, SafetySec, handles prompt and response content.

That separation maps cleanly to the newer AI security guidance:

- Prompt injection and jailbreaks:
  We run request-side content checks before upstream execution with SafetySec prompt-injection and jailbreak-pattern modules.
- Sensitive data entering or leaving the provider boundary:
  We support redaction before upstream calls and leakage checks after upstream responses through sensitive-redaction and data-leakage modules.
- Repeated low-signal attacks:
  We use repeated-risk awareness so suspicious patterns can escalate based on behavior rather than one isolated score.
- Excessive agency and tool misuse:
  We enforce explicit capability boundaries on tool access with MCP grants, team or API-key scope, and allowed or blocked tools.
- MCP tool poisoning or risky payloads:
  We inspect tool calls at runtime and apply narrow content rules with semantic filters on MCP payloads.
- Denial of wallet and runaway usage:
  We enforce token-aware and cost-aware lifecycle gates through token limits, budgets, quotas, and final usage reconciliation.

The key architectural point is timing. At Odock, our runtime enforces staged gates: request-aware checks, identity and access checks, resource-aware context, token and cost gates, request-side safety, plugin gates, upstream execution, response-side safety, and then usage evidence. That matches the reality that different risks become visible at different moments.

SafetySec itself is also lifecycle-aware. In our runtime, request-side modules can catch prompt manipulation and redact sensitive input before the provider call. Response-side modules can then catch data leakage or sensitive output before the caller receives it. That is much closer to what OWASP 2025 is asking for than a single preflight regex layer.

## Where Odock is especially strong in the comparison

**Gateway-level prompt and response controls.** The Security Engine is not described as a one-time admission check. It can act both before and after upstream work, which is important for prompt injection on the way in and leakage on the way out.

**Capability governance for MCP.** At Odock, we treat tool access as runtime capability access. A server must be granted to a virtual API key, can be narrowed by team or key scope, and can have allowed tools, blocked tools, and semantic filters. That is the right mental model for agent security.

**Cost and abuse protection in the same path.** Budgets, quotas, token gates, concurrency, and usage reconciliation are separate from SafetySec but still part of the enforcement pipeline. That matters because OWASP's unbounded-consumption category is not just FinOps; it is also security and availability control.

**Evidence and auditability.** SafetySec produces safety evidence, and the runtime model records usage, status, tokens, cost, latency, and lifecycle outcomes. For platform teams, that is the difference between a blocked request and an explainable blocked request.

## What Odock does not claim to solve by itself

We are deliberate about this boundary. Our gateway provides strong runtime controls, but we do not claim that the gateway alone solves every AI security problem.

Areas that still need adjacent controls include:

- model and dataset supply-chain attestation
- training-data and embedding-data poisoning defense upstream of inference
- secure SDLC and patch management for MCP servers themselves
- deep schema validation inside business-specific tool handlers
- model evaluation, red-team workflows, and release-governance policy outside the request path

That is the honest comparative position. Odock covers a large part of the runtime AI infra layer. It should not be described as replacing the rest of the security program.

## The production standard for AI infra security

If your stack includes LLMs, MCP servers, or agent loops, your platform should be able to answer a few hard questions:

- Which prompts were blocked before reaching the provider?
- Which sensitive values were redacted on the way in or out?
- Which tools can each API key actually call?
- Which repeated suspicious events escalated from observe to block?
- Which workloads are closest to a cost, token, or concurrency limit?
- Which requests were denied by content policy, by capability policy, or by budget policy?

That is where the latest guidance is pointing. The winning design is not "better prompt templates." It is lifecycle-aware runtime enforcement with explicit capability boundaries and evidence.

## Sources

- [OWASP Top 10 Risk & Mitigations for LLMs and Gen AI Apps, 2025](https://genai.owasp.org/llm-top-10/)
- [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [OWASP LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- [OWASP LLM10:2025 Unbounded Consumption](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)
- [OWASP Agentic AI - Threats and Mitigations, February 17, 2025](https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/)
- [OWASP State of Agentic AI Security and Governance 2.01, June 1, 2026](https://genai.owasp.org/resource/state-of-agentic-ai-security-and-governance/)
- [OWASP AIUC-1 Crosswalks for Agentic Applications, May 25, 2026](https://genai.owasp.org/resource/aiuc-1-crosswalks-owasp-top-10-for-agentic-applications/)
- [Are AI-assisted Development Tools Immune to Prompt Injection?, March 23, 2026](https://arxiv.org/abs/2603.21642)
- [Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning, March 23, 2026](https://arxiv.org/abs/2603.22489)
- [Odock Security Engine](https://docs.odock.ai/docs/security-and-guardrails/safetysec-engine/)
- [Odock MCP Security](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)

<!-- locale:fr -->
## Le modele de menace a change entre mars 2025 et juin 2026

Le 12 mars 2025, le projet OWASP GenAI Security a publie le Top 10 2025 pour les LLM et a rendu le changement explicite. La liste commence toujours par la prompt injection, mais elle met aussi en avant la divulgation d'informations sensibles, l'improper output handling, l'excessive agency, la fuite de system prompt, les faiblesses des vecteurs et embeddings, ainsi que la consommation non bornee. La surface de securite runtime est donc beaucoup plus large que l'ancien reflexe "il suffit de moderer la reponse".

Le signal suivant est arrive le 17 fevrier 2025, quand OWASP a publie *Agentic AI - Threats and Mitigations*. Le cadrage est passe du mauvais usage d'un seul model au risque des systemes autonomes : appels d'outils repetes, capacites plus larges et rayon d'impact plus fort quand des instructions sont manipulees.

Le 23 mars 2026, des travaux specifiques a MCP ont encore pousse cette logique. Des papiers comme *Are AI-assisted Development Tools Immune to Prompt Injection?* et *Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning* expliquent que les metadonnees des outils et le comportement du client peuvent devenir des surfaces d'attaque a part entiere. Puis, le 1 juin 2026, le rapport OWASP *State of Agentic AI Security and Governance 2.01* et, le 25 mai 2026, le crosswalk AIUC-1 ont renforce l'accent sur l'identite des agents, le runtime containment, l'architectural monitoring et l'abus de privileges.

Le changement pratique est simple : la securite de l'infrastructure IA est maintenant un probleme de control plane a couches, pas un probleme de mise en forme de prompts.

## Les risques runtime qui comptent le plus aujourd'hui

**La prompt injection et les jailbreaks restent des risques majeurs.** OWASP place toujours la prompt injection en `LLM01:2025` et precise que le RAG ou le fine-tuning ne suppriment pas cette vulnerabilite. Si le gateway ne peut pas inspecter les entrees non fiables avant l'appel provider, le reste de la stack herite du risque.

**L'excessive agency transforme un comportement faible du model en actions reelles.** `LLM06:2025 Excessive Agency` vise directement trop de fonctionnalites, trop de permissions et trop d'autonomie. En pratique, la question de securite n'est plus seulement "qu'a dit le model ?" mais "qu'avait-il le droit de faire ensuite ?"

**Le tool poisoning fait maintenant partie de la surface d'attaque agentique.** Les recherches MCP recentes insistent sur les metadonnees d'outils empoisonnees, les parametres caches, le cross-tool poisoning et l'invocation non autorisee. C'est important parce que beaucoup d'equipes traitent encore l'integration d'outils comme une simple fonctionnalite produit au lieu d'une frontiere de capacites gouvernee.

**La consommation non bornee est a la fois un sujet de resilience et de securite.** `LLM10:2025 Unbounded Consumption` relie explicitement l'inference non controlee au deni de service, au denial of wallet, a la degradation de service et a la pression d'extraction de model. Dans les systemes IA, l'abus de cout et l'abus de disponibilite sont souvent le meme evenement operationnel.

**La divulgation sensible n'est pas seulement un sujet provider.** Le Top 10 2025 distingue la divulgation d'informations sensibles et l'improper output handling parce qu'un model peut fuir des donnees meme si le prompt initial semblait acceptable. L'enforcement cote reponse compte autant que le filtrage cote requete.

## Comment Odock traite ces risques dans le security engine

Chez Odock, nous faisons une separation claire : les policy guardrails gerent la forme du trafic, l'acces, le payload, les tokens, les budgets et les quotas, tandis que notre Security Engine, SafetySec, gere le contenu du prompt et de la reponse.

Cette separation colle bien aux recommandations recentes :

- Prompt injection et jailbreaks :
  Nous appliquons des verifications de contenu cote requete avant l'execution upstream avec les modules SafetySec de prompt injection et de jailbreak patterns.
- Donnees sensibles entrant ou sortant de la frontiere provider :
  Nous prenons en charge la redaction avant l'upstream et les controles de fuite apres la reponse upstream grace aux modules de sensitive redaction et de data leakage.
- Attaques repetes a faible signal :
  Nous utilisons la repeated-risk awareness afin d'escalader selon le comportement plutot que sur un score isole.
- Excessive agency et abus d'outils :
  Nous imposons des frontieres de capacites explicites sur l'acces aux outils avec les MCP grants, le scope par team ou API key, et les allowed ou blocked tools.
- Tool poisoning MCP ou payloads risques :
  Nous inspectons les appels d'outils au runtime et appliquons des regles de contenu etroites avec des semantic filters sur les payloads MCP.
- Denial of wallet et usage hors de controle :
  Nous appliquons des gates sensibles aux tokens et au cout via les token limits, budgets, quotas et la reconciliation finale de l'usage.

Le point architectural important est le timing. Chez Odock, notre runtime applique des gates par etapes : controles request-aware, controles d'identite et d'acces, contexte resource-aware, gates de tokens et de cout, securite cote requete, plugin gates, execution upstream, securite cote reponse puis preuves d'usage. Cela correspond au fait que des risques differents deviennent visibles a des moments differents.

SafetySec est lui-meme lifecycle-aware. Dans notre runtime, les modules cote requete peuvent attraper la manipulation de prompt et rediger des donnees sensibles avant l'appel provider. Les modules cote reponse peuvent ensuite attraper une fuite de donnees ou une sortie sensible avant que le client ne la recoive. C'est beaucoup plus proche de ce que demande OWASP 2025 qu'une simple couche de regex en preflight.

## Ou Odock est particulierement solide dans la comparaison

**Des controles gateway sur les prompts et les reponses.** Le Security Engine n'est pas decrit comme une simple verification d'admission. Il peut agir avant et apres l'upstream, ce qui est important pour la prompt injection a l'entree et les fuites a la sortie.

**Une gouvernance de capacites pour MCP.** Chez Odock, nous traitons l'acces aux outils comme un acces runtime a des capacites. Un serveur doit etre accorde a une virtual API key, peut etre limite par team ou key scope, et peut avoir des allowed tools, blocked tools et des semantic filters. C'est le bon modele mental pour la securite agentique.

**Protection cout et abus dans le meme chemin.** Budgets, quotas, token gates, concurrency et usage reconciliation sont separes de SafetySec mais restent dans le pipeline d'enforcement. C'est important parce que la categorie OWASP sur la consommation non bornee n'est pas seulement un sujet FinOps ; c'est aussi un controle de securite et de disponibilite.

**Preuves et auditabilite.** SafetySec produit des safety evidence, et le modele runtime enregistre usage, statut, tokens, cout, latency et resultats du cycle de vie. Pour les equipes plateforme, c'est la difference entre une requete bloquee et une requete bloquee mais explicable.

## Ce qu'Odock ne pretend pas resoudre seul

Nous sommes volontairement clairs sur cette frontiere. Notre gateway apporte de forts controles runtime, mais nous ne pretendons pas qu'il regle a lui seul tous les problemes de securite IA.

Les sujets qui demandent encore des controles adjacents incluent :

- l'attestation de supply chain des models et des datasets
- la defense contre le poisoning des donnees d'entrainement et des embeddings en amont de l'inference
- le secure SDLC et la gestion de correctifs pour les serveurs MCP eux-memes
- la validation de schema approfondie dans les handlers d'outils metier
- les evaluations de models, les workflows de red team et la gouvernance de release hors du chemin de requete

C'est la position comparative honnete. Odock couvre une grande partie de la couche runtime de l'infrastructure IA. Il ne doit pas etre presente comme un remplacement de tout le programme securite.

## Le standard de production pour la securite de l'infrastructure IA

Si votre stack inclut des LLM, des serveurs MCP ou des boucles d'agents, votre plateforme doit pouvoir repondre a quelques questions difficiles :

- Quels prompts ont ete bloques avant d'atteindre le provider ?
- Quelles valeurs sensibles ont ete redigees a l'entree ou a la sortie ?
- Quels outils chaque API key peut-elle reellement appeler ?
- Quels evenements suspects repetes sont passes de observe a block ?
- Quels workloads sont les plus proches d'une limite de cout, de tokens ou de concurrence ?
- Quelles requetes ont ete refusees pour une politique de contenu, de capacite ou de budget ?

C'est la direction des recommandations recentes. Le bon design n'est pas "de meilleurs templates de prompt". C'est un enforcement runtime lifecycle-aware avec des frontieres de capacites explicites et des preuves.

## Sources

- [OWASP Top 10 Risk & Mitigations for LLMs and Gen AI Apps, 2025](https://genai.owasp.org/llm-top-10/)
- [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [OWASP LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- [OWASP LLM10:2025 Unbounded Consumption](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)
- [OWASP Agentic AI - Threats and Mitigations, 17 fevrier 2025](https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/)
- [OWASP State of Agentic AI Security and Governance 2.01, 1 juin 2026](https://genai.owasp.org/resource/state-of-agentic-ai-security-and-governance/)
- [OWASP AIUC-1 Crosswalks for Agentic Applications, 25 mai 2026](https://genai.owasp.org/resource/aiuc-1-crosswalks-owasp-top-10-for-agentic-applications/)
- [Are AI-assisted Development Tools Immune to Prompt Injection?, 23 mars 2026](https://arxiv.org/abs/2603.21642)
- [Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning, 23 mars 2026](https://arxiv.org/abs/2603.22489)
- [Odock Security Engine](https://docs.odock.ai/docs/security-and-guardrails/safetysec-engine/)
- [Odock MCP Security](https://docs.odock.ai/docs/models-and-mcp/mcp-servers/security/)
