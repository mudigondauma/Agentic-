const state = {
  period: "q2-2026",
  team: "enterprise",
  workflow: "all",
  mode: "pilot",
  oversightTab: "overview",
};

const periodLabels = {
  "last-30": "Last 30 days",
  "q1-2026": "Q1 2026",
  "q2-2026": "Q2 2026",
};

const workflowLabels = {
  all: "All workflows",
  planning: "Planning / Refinement",
  build: "Build / Test / Review",
  run: "Run / Support",
};

const portfolios = {
  enterprise: {
    label: "Enterprise Portfolio",
    scope: "27 delivery trains | 4,800 engineers, analysts, and service leads",
    updatedAt: {
      "last-30": "Last updated 07 Apr 2026, 08:30 BST",
      "q1-2026": "Last updated 31 Mar 2026, 18:00 BST",
      "q2-2026": "Last updated 07 Apr 2026, 08:30 BST",
    },
    dataSources: [
      "Jira Align delivery telemetry",
      "GitHub Enterprise workflows",
      "ServiceNow operations records",
      "FinOps AI ledger",
      "Control Tower policy registry",
      "Internal audit evidence hub",
    ],
    kpis: [
      {
        label: "Net Productivity Gain",
        definition: "Estimated change in assisted delivery output after normalizing for portfolio mix and release complexity.",
        baseline: 0,
        pilot: 18,
        target: 22,
        format: "percent",
        improve: "up",
      },
      {
        label: "AI Workflow Coverage",
        definition: "Share of delivery workflows with an approved AI assist pattern in production use.",
        baseline: 24,
        pilot: 63,
        target: 75,
        format: "percent",
        improve: "up",
      },
      {
        label: "Delivery Flow Index",
        definition: "Composite score combining throughput, cycle time, blocked work, and predictability across the portfolio.",
        baseline: 67,
        pilot: 79,
        target: 84,
        format: "index",
        improve: "up",
      },
      {
        label: "Quality Guardrail",
        definition: "Weighted quality score across escaped defects, rework, test reliability, and change stability.",
        baseline: 91,
        pilot: 96,
        target: 97,
        format: "percent",
        improve: "up",
      },
      {
        label: "Governance Compliance",
        definition: "Share of AI-assisted delivery activity operating inside approved policy controls and evidence requirements.",
        baseline: 92,
        pilot: 98,
        target: 99,
        format: "percent",
        improve: "up",
      },
      {
        label: "AI Run-Rate Cost",
        definition: "Annualized AI operating spend covering model usage, orchestration, safety controls, and platform support.",
        baseline: 1.24,
        pilot: 1.31,
        target: 1.18,
        format: "currencyM",
        improve: "down",
      },
    ],
    swimlanes: [
      {
        id: "planning",
        title: "Planning / Refinement",
        valueMetric: {
          label: "Decision latency",
          definition: "Median elapsed time from intake to approved scope decision.",
          baseline: 9.5,
          pilot: 6.8,
          format: "days",
          improve: "down",
        },
        riskMetric: {
          label: "Requirements quality score",
          definition: "Quality score for backlog items entering build, based on completeness, dependency clarity, and acceptance criteria.",
          baseline: 87,
          pilot: 93,
          format: "percent",
          improve: "up",
        },
        interpretation: {
          baseline: "Portfolio planning is document-heavy, with delayed approval cycles and uneven requirements quality across trains.",
          pilot: "Assisted refinement is compressing approval time and improving scope quality before work hits build queues.",
        },
      },
      {
        id: "build",
        title: "Build / Test / Review",
        valueMetric: {
          label: "PR cycle time",
          definition: "Median time from pull request open to approved merge for in-scope repositories.",
          baseline: 31,
          pilot: 23,
          format: "hours",
          improve: "down",
        },
        riskMetric: {
          label: "Critical rework rate",
          definition: "Share of completed work reopened for material code, test, or control remediation.",
          baseline: 11.2,
          pilot: 7.1,
          format: "percent",
          improve: "down",
        },
        interpretation: {
          baseline: "Engineering flow is held back by review queues and inconsistent evidence capture on AI-assisted changes.",
          pilot: "Review acceleration is material, but cost discipline and evidence automation still need executive pressure.",
        },
      },
      {
        id: "run",
        title: "Run / Support",
        valueMetric: {
          label: "Mean time to resolve",
          definition: "Average time to restore service for priority incidents touched by AI-assisted support workflows.",
          baseline: 7.2,
          pilot: 5.1,
          format: "hours",
          improve: "down",
        },
        riskMetric: {
          label: "Change failure rate",
          definition: "Share of changes that trigger rollback, hotfix, or incident activity within the observation window.",
          baseline: 9.1,
          pilot: 6.4,
          format: "percent",
          improve: "down",
        },
        interpretation: {
          baseline: "Support teams rely on manual triage and fragmented runbooks, which keeps incident recovery inconsistent.",
          pilot: "Assisted triage is improving recovery speed, with fewer unstable changes flowing into production support.",
        },
      },
    ],
    trends: [
      {
        title: "Adoption",
        definition: "Approved AI-assisted workflow coverage across the end-to-end delivery chain.",
        baseline: 24,
        current: 63,
        target: 75,
        format: "percent",
        improve: "up",
      },
      {
        title: "Flow",
        definition: "Portfolio flow score derived from throughput, delay, and predictability.",
        baseline: 67,
        current: 79,
        target: 84,
        format: "index",
        improve: "up",
      },
      {
        title: "Quality",
        definition: "Composite quality guardrail score across release and support outcomes.",
        baseline: 91,
        current: 96,
        target: 97,
        format: "percent",
        improve: "up",
      },
      {
        title: "Cost",
        definition: "Annualized AI run-rate cost relative to the target operating model.",
        baseline: 1.24,
        current: 1.31,
        target: 1.18,
        format: "currencyM",
        improve: "down",
      },
    ],
    governance: {
      useCases: [
        {
          label: "Green use cases",
          detail: "Standard copilots and bounded automation",
          baseline: 14,
          pilot: 26,
          status: "green",
        },
        {
          label: "Amber use cases",
          detail: "Supervised workflows awaiting scaled approval",
          baseline: 10,
          pilot: 8,
          status: "amber",
        },
        {
          label: "Red use cases",
          detail: "Restricted or under exception review",
          baseline: 6,
          pilot: 2,
          status: "red",
        },
      ],
      metrics: [
        {
          label: "Policy exceptions",
          definition: "Active exceptions requiring governance approval to continue operating.",
          baseline: 14,
          pilot: 5,
          format: "count",
          improve: "down",
        },
        {
          label: "Human review override rate",
          definition: "Share of AI-assisted actions escalated or overturned during mandatory human review.",
          baseline: 18,
          pilot: 9,
          format: "percent",
          improve: "down",
        },
        {
          label: "Audit evidence completeness",
          definition: "Share of in-scope AI activity with complete linked evidence for audit and regulatory review.",
          baseline: 84,
          pilot: 97,
          format: "percent",
          improve: "up",
        },
      ],
      notes: {
        baseline: "Baseline posture shows fragmented controls and a high manual review burden across the enterprise portfolio.",
        pilot: "Controls are materially tighter in pilot scope, but amber approvals still need faster policy decisions to scale.",
      },
      controls: [
        {
          name: "Model Usage Policy",
          detail: "Enterprise GPT-4 reasoning tier limits enforced by workflow policy.",
          status: "green",
          label: "Compliant",
        },
        {
          name: "Data Privacy Controls",
          detail: "PII masking and outbound prompt filters active across delivery assistants.",
          status: "green",
          label: "Enforced",
        },
        {
          name: "Prompt Injection Guard",
          detail: "3 suspicious prompt patterns quarantined in non-production review queues.",
          status: "amber",
          label: "Review Req",
        },
        {
          name: "Output Quality Threshold",
          detail: "Hallucination score remains below 0.1% on approved enterprise workflows.",
          status: "green",
          label: "Passing",
        },
        {
          name: "Cost Budget Alerts",
          detail: "Q2 AI budget is at 82% utilization and within CFO guardrails.",
          status: "amber",
          label: "Warning",
        },
        {
          name: "Audit Logging",
          detail: "All agent actions and human approvals written to immutable cold storage.",
          status: "green",
          label: "Active",
        },
      ],
    },
    economics: {
      byWorkflow: [
        { id: "planning", label: "Planning / Refinement", baseline: 260, pilot: 290, format: "currencyK" },
        { id: "build", label: "Build / Test / Review", baseline: 630, pilot: 710, format: "currencyK" },
        { id: "run", label: "Run / Support", baseline: 350, pilot: 310, format: "currencyK" },
      ],
      modelMix: [
        { label: "Reasoning tier", share: 34, className: "mix-segment--one" },
        { label: "Fast completion tier", share: 29, className: "mix-segment--two" },
        { label: "Embedding / retrieval", share: 21, className: "mix-segment--three" },
        { label: "Policy and safety", share: 16, className: "mix-segment--four" },
      ],
      summary: [
        {
          label: "Cost per assisted outcome",
          definition: "Average AI spend for each completed assisted outcome across approved workflows.",
          baseline: 18.9,
          pilot: 14.8,
          format: "currency",
          improve: "down",
        },
        {
          label: "Model concentration risk",
          definition: "Share of spend concentrated in the primary model family.",
          baseline: 58,
          pilot: 44,
          format: "percent",
          improve: "down",
        },
      ],
      notes: {
        baseline: "Baseline spend is lower because usage is sparse, but unit economics are weaker and outcomes are slower.",
        pilot: "Pilot spend is higher in absolute terms, yet unit cost per assisted outcome is down and model mix is healthier.",
      },
    },
    actions: [
      {
        workflow: "planning",
        title: "Expand the green-list for planning copilots across tier-2 demand intake",
        owner: "Enterprise Architecture",
        due: "18 Apr 2026",
        impact: "Unlock +12 pts workflow coverage",
      },
      {
        workflow: "build",
        title: "Require evidence-pack auto-attach on AI-assisted pull requests",
        owner: "Quality Engineering",
        due: "22 Apr 2026",
        impact: "Lift audit completeness by 3 pts",
      },
      {
        workflow: "build",
        title: "Shift routine test generation to the efficient model tier",
        owner: "FinOps",
        due: "26 Apr 2026",
        impact: "Reduce annual run-rate by $110K",
      },
      {
        workflow: "run",
        title: "Scale supervised incident triage to all P2 and P3 queues",
        owner: "Service Operations",
        due: "30 Apr 2026",
        impact: "Cut MTTR by 1.1 hours",
      },
      {
        workflow: "all",
        title: "Close the amber use-case review backlog with a monthly CIO risk forum",
        owner: "Risk & Compliance",
        due: "03 May 2026",
        impact: "Remove 6 active exceptions",
      },
    ],
    roadmap: [
      {
        window: "30 days",
        title: "Stabilize the operating baseline",
        items: [
          "Standardize approved assistant patterns for planning, code review, and incident triage.",
          "Automate evidence capture for AI-assisted work in the engineering toolchain.",
          "Publish a shared cost guardrail with workflow-level budgets.",
        ],
      },
      {
        window: "60 days",
        title: "Scale safe adoption",
        items: [
          "Extend green use cases into adjacent service and platform teams.",
          "Roll out model-routing by task type to lower completion spend.",
          "Reduce amber approval time with pre-cleared control templates.",
        ],
      },
      {
        window: "90 days",
        title: "Move to portfolio governance",
        items: [
          "Embed AI metrics into the standard CIO monthly operating review.",
          "Tie product funding gates to evidence completeness and guardrail performance.",
          "Set target state for enterprise-wide AI delivery run-rate and realized savings.",
        ],
      },
    ],
  },
  product: {
    label: "Digital Products",
    scope: "14 product lines | 2,100 engineers, designers, and quality leads",
    updatedAt: {
      "last-30": "Last updated 07 Apr 2026, 08:15 BST",
      "q1-2026": "Last updated 31 Mar 2026, 17:45 BST",
      "q2-2026": "Last updated 07 Apr 2026, 08:15 BST",
    },
    dataSources: [
      "Product delivery dashboard",
      "GitHub Enterprise checks",
      "Automated test telemetry",
      "FinOps AI ledger",
      "Control Tower policy registry",
      "Release evidence store",
    ],
    kpis: [
      {
        label: "Net Productivity Gain",
        definition: "Estimated change in assisted delivery output after normalizing for product portfolio mix.",
        baseline: 0,
        pilot: 22,
        target: 25,
        format: "percent",
        improve: "up",
      },
      {
        label: "AI Workflow Coverage",
        definition: "Share of product delivery workflows using approved AI assistance patterns.",
        baseline: 28,
        pilot: 68,
        target: 78,
        format: "percent",
        improve: "up",
      },
      {
        label: "Delivery Flow Index",
        definition: "Composite score for throughput, delay, predictability, and queue health across product squads.",
        baseline: 70,
        pilot: 81,
        target: 86,
        format: "index",
        improve: "up",
      },
      {
        label: "Quality Guardrail",
        definition: "Weighted score across defect escape, test reliability, and release stability.",
        baseline: 90,
        pilot: 95,
        target: 97,
        format: "percent",
        improve: "up",
      },
      {
        label: "Governance Compliance",
        definition: "Share of AI-assisted product work running with approved controls and evidence.",
        baseline: 91,
        pilot: 97,
        target: 99,
        format: "percent",
        improve: "up",
      },
      {
        label: "AI Run-Rate Cost",
        definition: "Annualized AI operating spend for the digital product estate.",
        baseline: 1.08,
        pilot: 1.16,
        target: 1.05,
        format: "currencyM",
        improve: "down",
      },
    ],
    swimlanes: [
      {
        id: "planning",
        title: "Planning / Refinement",
        valueMetric: {
          label: "Decision latency",
          definition: "Median elapsed time from intake to approved scope decision.",
          baseline: 8.1,
          pilot: 5.9,
          format: "days",
          improve: "down",
        },
        riskMetric: {
          label: "Requirements quality score",
          definition: "Quality score for backlog items entering delivery.",
          baseline: 89,
          pilot: 94,
          format: "percent",
          improve: "up",
        },
        interpretation: {
          baseline: "Product planning still depends on manual backlog shaping and PM review bottlenecks.",
          pilot: "AI-assisted briefs are helping squads reach implementation-ready scope faster and with fewer missed dependencies.",
        },
      },
      {
        id: "build",
        title: "Build / Test / Review",
        valueMetric: {
          label: "PR cycle time",
          definition: "Median time from pull request open to approved merge.",
          baseline: 27,
          pilot: 19,
          format: "hours",
          improve: "down",
        },
        riskMetric: {
          label: "Critical rework rate",
          definition: "Share of completed work reopened for material remediation.",
          baseline: 9.6,
          pilot: 6.2,
          format: "percent",
          improve: "down",
        },
        interpretation: {
          baseline: "Engineering velocity is solid, but review handoffs and flaky test evidence still create churn.",
          pilot: "The strongest return is in build flow, especially where assisted code review and test authoring are fully approved.",
        },
      },
      {
        id: "run",
        title: "Run / Support",
        valueMetric: {
          label: "Mean time to resolve",
          definition: "Average time to restore service for priority incidents touched by AI-assisted support workflows.",
          baseline: 5.8,
          pilot: 4.4,
          format: "hours",
          improve: "down",
        },
        riskMetric: {
          label: "Change failure rate",
          definition: "Share of changes that trigger rollback, hotfix, or incident activity.",
          baseline: 8.4,
          pilot: 5.9,
          format: "percent",
          improve: "down",
        },
        interpretation: {
          baseline: "Support performance is acceptable, but incident context is still fragmented across tools.",
          pilot: "Operational gains are emerging, though adoption remains more mature in build than in run workflows.",
        },
      },
    ],
    trends: [
      {
        title: "Adoption",
        definition: "Approved AI-assisted workflow coverage across the digital product chain.",
        baseline: 28,
        current: 68,
        target: 78,
        format: "percent",
        improve: "up",
      },
      {
        title: "Flow",
        definition: "Product flow score derived from throughput, delay, and predictability.",
        baseline: 70,
        current: 81,
        target: 86,
        format: "index",
        improve: "up",
      },
      {
        title: "Quality",
        definition: "Composite quality guardrail score for product delivery.",
        baseline: 90,
        current: 95,
        target: 97,
        format: "percent",
        improve: "up",
      },
      {
        title: "Cost",
        definition: "Annualized AI run-rate cost for the product estate.",
        baseline: 1.08,
        current: 1.16,
        target: 1.05,
        format: "currencyM",
        improve: "down",
      },
    ],
    governance: {
      useCases: [
        {
          label: "Green use cases",
          detail: "Standard copilots and bounded automation",
          baseline: 11,
          pilot: 23,
          status: "green",
        },
        {
          label: "Amber use cases",
          detail: "Supervised workflows awaiting scaled approval",
          baseline: 7,
          pilot: 6,
          status: "amber",
        },
        {
          label: "Red use cases",
          detail: "Restricted or under exception review",
          baseline: 4,
          pilot: 1,
          status: "red",
        },
      ],
      metrics: [
        {
          label: "Policy exceptions",
          definition: "Active exceptions requiring governance approval to continue operating.",
          baseline: 9,
          pilot: 3,
          format: "count",
          improve: "down",
        },
        {
          label: "Human review override rate",
          definition: "Share of AI-assisted actions escalated or overturned during mandatory human review.",
          baseline: 14,
          pilot: 7,
          format: "percent",
          improve: "down",
        },
        {
          label: "Audit evidence completeness",
          definition: "Share of in-scope AI activity with complete linked evidence.",
          baseline: 87,
          pilot: 96,
          format: "percent",
          improve: "up",
        },
      ],
      notes: {
        baseline: "Product teams had lighter controls before scale, with approval patterns varying significantly by squad.",
        pilot: "Governance is now mostly standardized, but build-time evidence capture remains the gating factor for further rollout.",
      },
      controls: [
        {
          name: "Model Usage Policy",
          detail: "Reasoning-model use is capped by task type and product release tier.",
          status: "green",
          label: "Compliant",
        },
        {
          name: "Data Privacy Controls",
          detail: "Sensitive customer fields masked before prompts leave product environments.",
          status: "green",
          label: "Enforced",
        },
        {
          name: "Prompt Injection Guard",
          detail: "2 suspicious prompt patterns detected in pre-release developer sandboxes.",
          status: "amber",
          label: "Review Req",
        },
        {
          name: "Output Quality Threshold",
          detail: "Approved product copilots remain within release-quality tolerance bands.",
          status: "green",
          label: "Passing",
        },
        {
          name: "Cost Budget Alerts",
          detail: "Product AI spend is at 86% of quarter-to-date forecast after test expansion.",
          status: "amber",
          label: "Warning",
        },
        {
          name: "Audit Logging",
          detail: "AI-assisted review decisions and evidence links are retained in the release store.",
          status: "green",
          label: "Active",
        },
      ],
    },
    economics: {
      byWorkflow: [
        { id: "planning", label: "Planning / Refinement", baseline: 230, pilot: 250, format: "currencyK" },
        { id: "build", label: "Build / Test / Review", baseline: 550, pilot: 610, format: "currencyK" },
        { id: "run", label: "Run / Support", baseline: 300, pilot: 300, format: "currencyK" },
      ],
      modelMix: [
        { label: "Reasoning tier", share: 31, className: "mix-segment--one" },
        { label: "Fast completion tier", share: 35, className: "mix-segment--two" },
        { label: "Embedding / retrieval", share: 18, className: "mix-segment--three" },
        { label: "Policy and safety", share: 16, className: "mix-segment--four" },
      ],
      summary: [
        {
          label: "Cost per assisted outcome",
          definition: "Average AI spend for each completed assisted outcome across approved workflows.",
          baseline: 16.8,
          pilot: 12.9,
          format: "currency",
          improve: "down",
        },
        {
          label: "Model concentration risk",
          definition: "Share of spend concentrated in the primary model family.",
          baseline: 53,
          pilot: 41,
          format: "percent",
          improve: "down",
        },
      ],
      notes: {
        baseline: "Product delivery had better unit economics than enterprise average, but still carried avoidable premium model usage.",
        pilot: "Cost per outcome is down sharply; the next executive lever is routing more test and review work to lower-cost tiers.",
      },
    },
    actions: [
      {
        workflow: "build",
        title: "Make AI-generated test evidence mandatory in release readiness reviews",
        owner: "Product Quality",
        due: "17 Apr 2026",
        impact: "Reduce rework by 2.1 pts",
      },
      {
        workflow: "planning",
        title: "Scale assisted discovery briefs to all new digital initiatives",
        owner: "Product Management",
        due: "21 Apr 2026",
        impact: "Shorten scope approval by 1.4 days",
      },
      {
        workflow: "build",
        title: "Tune model routing for code review and regression generation",
        owner: "Engineering Enablement",
        due: "28 Apr 2026",
        impact: "Lower annual spend by $85K",
      },
      {
        workflow: "run",
        title: "Extend support copilots into post-release monitoring workflows",
        owner: "SRE",
        due: "02 May 2026",
        impact: "Improve MTTR by 0.8 hours",
      },
      {
        workflow: "all",
        title: "Set product-line adoption targets in the monthly delivery review",
        owner: "CIO Chief of Staff",
        due: "05 May 2026",
        impact: "Increase coverage accountability",
      },
    ],
    roadmap: [
      {
        window: "30 days",
        title: "Tighten product delivery controls",
        items: [
          "Standardize the approved AI workflow playbook for squads and release managers.",
          "Close evidence gaps on test generation and code review.",
          "Add cost routing defaults by task type in the product platform.",
        ],
      },
      {
        window: "60 days",
        title: "Scale adoption into adjacent squads",
        items: [
          "Extend assisted backlog shaping to all active roadmap streams.",
          "Broaden supervised support copilots for release operations.",
          "Push exception handling into a single product governance lane.",
        ],
      },
      {
        window: "90 days",
        title: "Institutionalize outcomes",
        items: [
          "Tie product funding reviews to delivery flow and quality guardrails.",
          "Bake AI economics into quarterly planning and platform chargeback.",
          "Publish a reusable AI operating model for new product launches.",
        ],
      },
    ],
  },
  operations: {
    label: "RunOps & Support",
    scope: "9 service towers | 1,600 operators, platform engineers, and analysts",
    updatedAt: {
      "last-30": "Last updated 07 Apr 2026, 07:55 BST",
      "q1-2026": "Last updated 31 Mar 2026, 17:30 BST",
      "q2-2026": "Last updated 07 Apr 2026, 07:55 BST",
    },
    dataSources: [
      "ServiceNow incident telemetry",
      "Platform reliability dashboard",
      "Runbook automation logs",
      "FinOps AI ledger",
      "Control Tower policy registry",
      "Audit evidence store",
    ],
    kpis: [
      {
        label: "Net Productivity Gain",
        definition: "Estimated change in assisted operations throughput after normalizing for case mix and tower complexity.",
        baseline: 0,
        pilot: 14,
        target: 18,
        format: "percent",
        improve: "up",
      },
      {
        label: "AI Workflow Coverage",
        definition: "Share of support and operations workflows using approved AI assistance patterns.",
        baseline: 21,
        pilot: 56,
        target: 68,
        format: "percent",
        improve: "up",
      },
      {
        label: "Delivery Flow Index",
        definition: "Composite score for service flow, delay, predictability, and queue health.",
        baseline: 69,
        pilot: 76,
        target: 82,
        format: "index",
        improve: "up",
      },
      {
        label: "Quality Guardrail",
        definition: "Weighted score across resolution quality, rollback risk, and change stability.",
        baseline: 92,
        pilot: 94,
        target: 96,
        format: "percent",
        improve: "up",
      },
      {
        label: "Governance Compliance",
        definition: "Share of AI-assisted operations activity inside approved control boundaries.",
        baseline: 95,
        pilot: 99,
        target: 99.5,
        format: "percent",
        improve: "up",
      },
      {
        label: "AI Run-Rate Cost",
        definition: "Annualized AI operating spend for operations and support workflows.",
        baseline: 0.92,
        pilot: 0.98,
        target: 0.89,
        format: "currencyM",
        improve: "down",
      },
    ],
    swimlanes: [
      {
        id: "planning",
        title: "Planning / Refinement",
        valueMetric: {
          label: "Decision latency",
          definition: "Median elapsed time from intake to approved scope decision.",
          baseline: 6.4,
          pilot: 5.1,
          format: "days",
          improve: "down",
        },
        riskMetric: {
          label: "Playbook quality score",
          definition: "Quality score for operational runbooks and escalation playbooks entering active use.",
          baseline: 91,
          pilot: 95,
          format: "percent",
          improve: "up",
        },
        interpretation: {
          baseline: "Operations planning is more mature than product planning, but playbook updates are still slow to approve.",
          pilot: "The biggest near-term gain is faster refinement of runbooks and operating procedures for common incident classes.",
        },
      },
      {
        id: "build",
        title: "Build / Test / Review",
        valueMetric: {
          label: "Automation release cycle",
          definition: "Median time from automation change open to approved production deployment.",
          baseline: 19,
          pilot: 16,
          format: "hours",
          improve: "down",
        },
        riskMetric: {
          label: "Rollback risk",
          definition: "Share of automation changes requiring rollback or rapid remediation.",
          baseline: 7.4,
          pilot: 6.1,
          format: "percent",
          improve: "down",
        },
        interpretation: {
          baseline: "Automation changes are relatively controlled, but reviews remain expert-dependent and slow to scale.",
          pilot: "Assisted review is improving release confidence, though benefits are smaller than in digital product engineering.",
        },
      },
      {
        id: "run",
        title: "Run / Support",
        valueMetric: {
          label: "Mean time to resolve",
          definition: "Average time to restore service for priority incidents touched by AI-assisted support workflows.",
          baseline: 4.9,
          pilot: 3.2,
          format: "hours",
          improve: "down",
        },
        riskMetric: {
          label: "Policy-compliant resolution",
          definition: "Share of incidents resolved with full control adherence and traceable action evidence.",
          baseline: 88,
          pilot: 96,
          format: "percent",
          improve: "up",
        },
        interpretation: {
          baseline: "Run operations already have clear procedures, but incident context gathering is manual and time-consuming.",
          pilot: "This is the most compelling lane for RunOps: faster resolution with stronger policy traceability than the baseline.",
        },
      },
    ],
    trends: [
      {
        title: "Adoption",
        definition: "Approved AI-assisted workflow coverage across support and operations.",
        baseline: 21,
        current: 56,
        target: 68,
        format: "percent",
        improve: "up",
      },
      {
        title: "Flow",
        definition: "Operations flow score derived from throughput, delay, and predictability.",
        baseline: 69,
        current: 76,
        target: 82,
        format: "index",
        improve: "up",
      },
      {
        title: "Quality",
        definition: "Composite quality guardrail score for support and reliability outcomes.",
        baseline: 92,
        current: 94,
        target: 96,
        format: "percent",
        improve: "up",
      },
      {
        title: "Cost",
        definition: "Annualized AI run-rate cost for operations and support workflows.",
        baseline: 0.92,
        current: 0.98,
        target: 0.89,
        format: "currencyM",
        improve: "down",
      },
    ],
    governance: {
      useCases: [
        {
          label: "Green use cases",
          detail: "Standard copilots and bounded automation",
          baseline: 12,
          pilot: 22,
          status: "green",
        },
        {
          label: "Amber use cases",
          detail: "Supervised workflows awaiting scaled approval",
          baseline: 5,
          pilot: 4,
          status: "amber",
        },
        {
          label: "Red use cases",
          detail: "Restricted or under exception review",
          baseline: 2,
          pilot: 1,
          status: "red",
        },
      ],
      metrics: [
        {
          label: "Policy exceptions",
          definition: "Active exceptions requiring governance approval to continue operating.",
          baseline: 6,
          pilot: 2,
          format: "count",
          improve: "down",
        },
        {
          label: "Human review override rate",
          definition: "Share of AI-assisted actions escalated or overturned during mandatory human review.",
          baseline: 10,
          pilot: 4,
          format: "percent",
          improve: "down",
        },
        {
          label: "Audit evidence completeness",
          definition: "Share of in-scope AI activity with complete linked evidence.",
          baseline: 90,
          pilot: 99,
          format: "percent",
          improve: "up",
        },
      ],
      notes: {
        baseline: "Operations already run with stronger controls, but evidence is split across multiple reliability systems.",
        pilot: "Pilot scope is close to target-state compliance; the remaining gap is broader adoption, not governance quality.",
      },
      controls: [
        {
          name: "Model Usage Policy",
          detail: "Incident and automation tasks route models by risk and service criticality.",
          status: "green",
          label: "Compliant",
        },
        {
          name: "Data Privacy Controls",
          detail: "Operational prompts redact secrets, credentials, and customer identifiers by default.",
          status: "green",
          label: "Enforced",
        },
        {
          name: "Prompt Injection Guard",
          detail: "One escalated runbook recommendation is under active security review.",
          status: "amber",
          label: "Review Req",
        },
        {
          name: "Output Quality Threshold",
          detail: "Resolution guidance remains inside approved confidence and traceability thresholds.",
          status: "green",
          label: "Passing",
        },
        {
          name: "Cost Budget Alerts",
          detail: "Run-support spend is at 79% of budget with a high-volume incident month in flight.",
          status: "amber",
          label: "Warning",
        },
        {
          name: "Audit Logging",
          detail: "All assisted incident actions are written to the immutable operations evidence store.",
          status: "green",
          label: "Active",
        },
      ],
    },
    economics: {
      byWorkflow: [
        { id: "planning", label: "Planning / Refinement", baseline: 170, pilot: 190, format: "currencyK" },
        { id: "build", label: "Build / Test / Review", baseline: 280, pilot: 320, format: "currencyK" },
        { id: "run", label: "Run / Support", baseline: 470, pilot: 470, format: "currencyK" },
      ],
      modelMix: [
        { label: "Reasoning tier", share: 25, className: "mix-segment--one" },
        { label: "Fast completion tier", share: 24, className: "mix-segment--two" },
        { label: "Embedding / retrieval", share: 28, className: "mix-segment--three" },
        { label: "Policy and safety", share: 23, className: "mix-segment--four" },
      ],
      summary: [
        {
          label: "Cost per assisted outcome",
          definition: "Average AI spend for each completed assisted outcome across approved workflows.",
          baseline: 12.4,
          pilot: 10.8,
          format: "currency",
          improve: "down",
        },
        {
          label: "Model concentration risk",
          definition: "Share of spend concentrated in the primary model family.",
          baseline: 42,
          pilot: 33,
          format: "percent",
          improve: "down",
        },
      ],
      notes: {
        baseline: "Operations had the lowest spend baseline, but also the smallest assisted footprint across workflows.",
        pilot: "Run-support remains the main cost center, yet unit economics are improving and spend concentration risk is low.",
      },
    },
    actions: [
      {
        workflow: "run",
        title: "Expand assisted triage to all service towers handling P2 and P3 incidents",
        owner: "Operations Director",
        due: "16 Apr 2026",
        impact: "Improve MTTR by 0.9 hours",
      },
      {
        workflow: "planning",
        title: "Approve a standard playbook template for AI-updated runbooks",
        owner: "Risk & Control",
        due: "20 Apr 2026",
        impact: "Accelerate playbook approvals by 1.0 day",
      },
      {
        workflow: "build",
        title: "Automate rollback evidence checks on automation releases",
        owner: "Platform Engineering",
        due: "24 Apr 2026",
        impact: "Reduce rollback risk by 0.8 pts",
      },
      {
        workflow: "all",
        title: "Shift low-complexity incident summarization to the efficient model tier",
        owner: "FinOps",
        due: "29 Apr 2026",
        impact: "Lower annual spend by $60K",
      },
      {
        workflow: "run",
        title: "Mandate policy traceability for AI-assisted incident actions",
        owner: "Internal Audit",
        due: "04 May 2026",
        impact: "Sustain 99% evidence completeness",
      },
    ],
    roadmap: [
      {
        window: "30 days",
        title: "Scale incident use cases",
        items: [
          "Expand supervised triage into all in-scope support queues.",
          "Standardize AI-updated runbook evidence and approval flow.",
          "Set workflow budgets for support and automation teams.",
        ],
      },
      {
        window: "60 days",
        title: "Improve release confidence",
        items: [
          "Broaden AI-assisted review for automation and platform changes.",
          "Route low-risk summarization to lower-cost completion models.",
          "Reduce residual manual exception handling to near zero.",
        ],
      },
      {
        window: "90 days",
        title: "Move to steady-state operations",
        items: [
          "Embed AI run and support KPIs into the service operating cadence.",
          "Finalize chargeback and savings attribution for AI-assisted operations.",
          "Define the long-term target mix between human-led and AI-assisted support work.",
        ],
      },
    ],
  },
};

const oversightProfiles = {
  enterprise: {
    kpis: [
      {
        label: "Straight-Through Rate",
        definition: "Share of in-scope decisions cleared by policy and evidence checks without manual review.",
        baseline: 52,
        pilot: 71,
        target: 78,
        format: "percent",
        improve: "up",
      },
      {
        label: "Human Review Queue",
        definition: "Active items awaiting accountable reviewer action across the enterprise delivery estate.",
        baseline: 19,
        pilot: 8,
        target: 6,
        format: "count",
        improve: "down",
      },
      {
        label: "Median Review SLA",
        definition: "Median time to decision for items requiring human review after policy scan.",
        baseline: 18.6,
        pilot: 7.4,
        target: 6,
        format: "hours",
        improve: "down",
      },
      {
        label: "Override Rate",
        definition: "Share of recommendations changed by accountable humans after escalation.",
        baseline: 12,
        pilot: 6,
        target: 5,
        format: "percent",
        improve: "down",
      },
      {
        label: "High-Risk Holds",
        definition: "Count of red-tier items placed on hold pending investigation, approval, or rejection.",
        baseline: 7,
        pilot: 2,
        target: 1,
        format: "count",
        improve: "down",
      },
    ],
    routeMix: [
      { label: "Green auto-approved", tone: "green", baseline: 52, pilot: 71, format: "percent" },
      { label: "Amber under review", tone: "amber", baseline: 32, pilot: 23, format: "percent" },
      { label: "Red on hold", tone: "red", baseline: 16, pilot: 6, format: "percent" },
    ],
    slaStatus: [
      { label: "Within SLA", tone: "green", baseline: 61, pilot: 84 },
      { label: "Watch", tone: "amber", baseline: 23, pilot: 11 },
      { label: "Breached", tone: "red", baseline: 16, pilot: 5 },
    ],
    queue: [
      {
        name: "Customer Profile Schema Migration - EU Tenant Cluster",
        workflow: "Build / Test / Review",
        workflowId: "build",
        riskTier: "red",
        owner: "Data Platform CAB",
        due: "Due in 2h 10m",
        slaDefinition: "Red-tier architectural changes require a named decision inside 4 business hours.",
        reason: "Cross-border data retention controls require explicit approval before DDL execution in production.",
        evidenceTags: ["PII-impact", "rollback-plan", "CAB-note", "data-lineage"],
        actions: ["Approve with controls", "Place hold", "Reject change"],
      },
      {
        name: "Payments Feature Flag Rollout - Tier-1 Checkout",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "amber",
        owner: "Release Management",
        due: "Due in 5h 40m",
        slaDefinition: "Amber-tier release decisions target disposition within 8 business hours.",
        reason: "Projected traffic exposure exceeds the pre-cleared policy threshold for auto-expansion.",
        evidenceTags: ["canary-metrics", "rollback-window", "change-ticket", "customer-impact"],
        actions: ["Approve rollout", "Request review notes", "Hold wave"],
      },
      {
        name: "Incident 47821 RCA Draft Approval",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "amber",
        owner: "Site Reliability Lead",
        due: "Due in 1d 2h",
        slaDefinition: "Amber-tier post-incident artifacts require sign-off within 2 business days.",
        reason: "The draft attributes causal responsibility to an external dependency and needs accountable validation.",
        evidenceTags: ["timeline", "log-extracts", "vendor-bridge", "control-gap"],
        actions: ["Approve draft", "Return for revision", "Escalate to risk"],
      },
      {
        name: "Release Note Auto-Approval for Payroll Patch 26.4",
        workflow: "Planning / Refinement",
        workflowId: "planning",
        riskTier: "green",
        owner: "Change Communications",
        due: "Due in 6h 15m",
        slaDefinition: "Green-tier communications items are expected to close inside the same business day.",
        reason: "Policy-based auto-approval is enabled, but a new regulatory wording check flagged a documentation delta for review.",
        evidenceTags: ["comms-template", "regulatory-copy", "release-brief"],
        actions: ["Approve copy", "Return to author", "Archive item"],
      },
      {
        name: "Severity-2 Incident Response Recommendation - Network Saturation",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "red",
        owner: "Major Incident Manager",
        due: "Due in 38m",
        slaDefinition: "Red-tier live-incident interventions require accountable review inside 1 hour.",
        reason: "The recommendation includes aggressive traffic shedding across executive reporting services.",
        evidenceTags: ["blast-radius", "war-room-log", "runbook-step", "exec-service-map"],
        actions: ["Approve intervention", "Escalate hold", "Reject recommendation"],
      },
    ],
  },
  product: {
    kpis: [
      {
        label: "Straight-Through Rate",
        definition: "Share of in-scope product decisions cleared by policy and evidence checks without manual review.",
        baseline: 55,
        pilot: 74,
        target: 80,
        format: "percent",
        improve: "up",
      },
      {
        label: "Human Review Queue",
        definition: "Active items awaiting accountable reviewer action across product delivery.",
        baseline: 14,
        pilot: 6,
        target: 4,
        format: "count",
        improve: "down",
      },
      {
        label: "Median Review SLA",
        definition: "Median time to decision for product items requiring human review.",
        baseline: 14.2,
        pilot: 6.3,
        target: 5,
        format: "hours",
        improve: "down",
      },
      {
        label: "Override Rate",
        definition: "Share of recommendations changed by accountable humans after escalation.",
        baseline: 11,
        pilot: 5,
        target: 4,
        format: "percent",
        improve: "down",
      },
      {
        label: "High-Risk Holds",
        definition: "Count of red-tier items placed on hold pending investigation, approval, or rejection.",
        baseline: 5,
        pilot: 2,
        target: 1,
        format: "count",
        improve: "down",
      },
    ],
    routeMix: [
      { label: "Green auto-approved", tone: "green", baseline: 55, pilot: 74, format: "percent" },
      { label: "Amber under review", tone: "amber", baseline: 29, pilot: 20, format: "percent" },
      { label: "Red on hold", tone: "red", baseline: 16, pilot: 6, format: "percent" },
    ],
    slaStatus: [
      { label: "Within SLA", tone: "green", baseline: 66, pilot: 87 },
      { label: "Watch", tone: "amber", baseline: 21, pilot: 9 },
      { label: "Breached", tone: "red", baseline: 13, pilot: 4 },
    ],
    queue: [
      {
        name: "Customer Profile Schema Migration - Product Graph",
        workflow: "Build / Test / Review",
        workflowId: "build",
        riskTier: "red",
        owner: "Platform Architecture",
        due: "Due in 3h 05m",
        slaDefinition: "Red-tier architectural changes require a named decision inside 4 business hours.",
        reason: "The migration touches shared identity entities and exceeds the approved blast-radius for autonomous execution.",
        evidenceTags: ["entity-map", "rollback-plan", "CAB-note", "data-contract"],
        actions: ["Approve with controls", "Place hold", "Reject change"],
      },
      {
        name: "Payments Feature Flag Rollout - Mobile Checkout",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "amber",
        owner: "Release Manager",
        due: "Due in 4h 20m",
        slaDefinition: "Amber-tier release decisions target disposition within 8 business hours.",
        reason: "Traffic expansion exceeds the cohort threshold allowed for unattended progression.",
        evidenceTags: ["canary-metrics", "rollback-window", "app-store-impact"],
        actions: ["Approve rollout", "Request review notes", "Hold wave"],
      },
      {
        name: "Release Note Auto-Approval for Pricing Engine Patch 14.8",
        workflow: "Planning / Refinement",
        workflowId: "planning",
        riskTier: "green",
        owner: "Product Communications",
        due: "Due in 7h 00m",
        slaDefinition: "Green-tier communications items are expected to close inside the same business day.",
        reason: "A new compliance phrase was inserted after the last approved content template and requires named approval.",
        evidenceTags: ["release-brief", "legal-copy", "comms-template"],
        actions: ["Approve copy", "Return to author", "Archive item"],
      },
      {
        name: "Incident Response Recommendation - Feature Service Saturation",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "red",
        owner: "SRE Director",
        due: "Due in 44m",
        slaDefinition: "Red-tier live-incident interventions require accountable review inside 1 hour.",
        reason: "The recommendation proposes temporary request shedding for premium customer paths.",
        evidenceTags: ["blast-radius", "war-room-log", "runbook-step"],
        actions: ["Approve intervention", "Escalate hold", "Reject recommendation"],
      },
    ],
  },
  operations: {
    kpis: [
      {
        label: "Straight-Through Rate",
        definition: "Share of in-scope operations decisions cleared by policy and evidence checks without manual review.",
        baseline: 60,
        pilot: 79,
        target: 84,
        format: "percent",
        improve: "up",
      },
      {
        label: "Human Review Queue",
        definition: "Active items awaiting accountable reviewer action across support and operations.",
        baseline: 10,
        pilot: 5,
        target: 3,
        format: "count",
        improve: "down",
      },
      {
        label: "Median Review SLA",
        definition: "Median time to decision for operations items requiring human review.",
        baseline: 10.1,
        pilot: 4.6,
        target: 4,
        format: "hours",
        improve: "down",
      },
      {
        label: "Override Rate",
        definition: "Share of recommendations changed by accountable humans after escalation.",
        baseline: 8,
        pilot: 4,
        target: 3,
        format: "percent",
        improve: "down",
      },
      {
        label: "High-Risk Holds",
        definition: "Count of red-tier items placed on hold pending investigation, approval, or rejection.",
        baseline: 3,
        pilot: 1,
        target: 1,
        format: "count",
        improve: "down",
      },
    ],
    routeMix: [
      { label: "Green auto-approved", tone: "green", baseline: 60, pilot: 79, format: "percent" },
      { label: "Amber under review", tone: "amber", baseline: 26, pilot: 17, format: "percent" },
      { label: "Red on hold", tone: "red", baseline: 14, pilot: 4, format: "percent" },
    ],
    slaStatus: [
      { label: "Within SLA", tone: "green", baseline: 72, pilot: 90 },
      { label: "Watch", tone: "amber", baseline: 18, pilot: 7 },
      { label: "Breached", tone: "red", baseline: 10, pilot: 3 },
    ],
    queue: [
      {
        name: "Severity-2 Incident Response Recommendation - WAN Saturation",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "red",
        owner: "Major Incident Manager",
        due: "Due in 22m",
        slaDefinition: "Red-tier live-incident interventions require accountable review inside 1 hour.",
        reason: "The recommendation would shed traffic from internal reporting systems to stabilize the network edge.",
        evidenceTags: ["blast-radius", "war-room-log", "runbook-step", "service-map"],
        actions: ["Approve intervention", "Escalate hold", "Reject recommendation"],
      },
      {
        name: "RCA Draft Approval - Storage Cluster Recovery",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "amber",
        owner: "Operations Director",
        due: "Due in 18h",
        slaDefinition: "Amber-tier post-incident artifacts require sign-off within 2 business days.",
        reason: "The draft proposes a control gap finding that must be affirmed before distribution to audit stakeholders.",
        evidenceTags: ["timeline", "log-extracts", "control-gap", "vendor-bridge"],
        actions: ["Approve draft", "Return for revision", "Escalate to risk"],
      },
      {
        name: "Release Note Auto-Approval for VPN Client Update",
        workflow: "Planning / Refinement",
        workflowId: "planning",
        riskTier: "green",
        owner: "Service Communications",
        due: "Due in 5h 25m",
        slaDefinition: "Green-tier communications items are expected to close inside the same business day.",
        reason: "Policy-based auto-approval is enabled, but a revised security disclaimer triggered named review.",
        evidenceTags: ["release-brief", "security-copy", "comms-template"],
        actions: ["Approve copy", "Return to author", "Archive item"],
      },
      {
        name: "Feature Flag Rollout - Self-Service Password Reset",
        workflow: "Run / Support",
        workflowId: "run",
        riskTier: "amber",
        owner: "Service Transition",
        due: "Due in 6h 30m",
        slaDefinition: "Amber-tier release decisions target disposition within 8 business hours.",
        reason: "The rollout affects identity recovery journeys and exceeds the unattended cohort threshold.",
        evidenceTags: ["change-ticket", "customer-impact", "rollback-window"],
        actions: ["Approve rollout", "Request review notes", "Hold wave"],
      },
    ],
  },
};

const elements = {
  scopeSummary: document.querySelector("#scopeSummary"),
  dateFilter: document.querySelector("#dateFilter"),
  teamFilter: document.querySelector("#teamFilter"),
  workflowFilter: document.querySelector("#workflowFilter"),
  baselineToggle: document.querySelector("#baselineToggle"),
  pilotToggle: document.querySelector("#pilotToggle"),
  kpiGrid: document.querySelector("#kpiGrid"),
  swimlaneGrid: document.querySelector("#swimlaneGrid"),
  trendGrid: document.querySelector("#trendGrid"),
  overviewTab: document.querySelector("#overviewTab"),
  governanceTab: document.querySelector("#governanceTab"),
  oversightKpis: document.querySelector("#oversightKpis"),
  oversightSummary: document.querySelector("#oversightSummary"),
  routingMap: document.querySelector("#routingMap"),
  pendingQueue: document.querySelector("#pendingQueue"),
  governancePanel: document.querySelector("#governancePanel"),
  economicsPanel: document.querySelector("#economicsPanel"),
  actionCenter: document.querySelector("#actionCenter"),
  roadmapPanel: document.querySelector("#roadmapPanel"),
  trendWindowNote: document.querySelector("#trendWindowNote"),
  lastUpdated: document.querySelector("#lastUpdated"),
  dataSources: document.querySelector("#dataSources"),
};

function tooltip(label, definition) {
  return `
    <div class="metric-header">
      <span class="metric-header__label">${label}</span>
      <span class="tooltip">
        <button class="tooltip__button" type="button" aria-label="${label} definition">i</button>
        <span class="tooltip__text">${definition}</span>
      </span>
    </div>
  `;
}

function inlineTooltip(definition, label = "Definition") {
  return `
    <span class="tooltip tooltip--inline">
      <button class="tooltip__button" type="button" aria-label="${label}">i</button>
      <span class="tooltip__text">${definition}</span>
    </span>
  `;
}

function formatValue(value, format) {
  switch (format) {
    case "percent":
      return `${Number(value).toFixed(value % 1 === 0 ? 0 : 1)}%`;
    case "index":
      return `${Math.round(value)}`;
    case "currencyM":
      return `$${Number(value).toFixed(2)}M`;
    case "currencyK":
      return `$${Math.round(value)}K`;
    case "currency":
      return `$${Number(value).toFixed(1)}`;
    case "days":
      return `${Number(value).toFixed(1)} d`;
    case "hours":
      return `${Number(value).toFixed(value % 1 === 0 ? 0 : 1)} h`;
    case "count":
      return `${Math.round(value)}`;
    default:
      return `${value}`;
  }
}

function formatDelta(value, format) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  const absolute = Math.abs(value);

  switch (format) {
    case "percent":
      return `${sign}${absolute.toFixed(absolute % 1 === 0 ? 0 : 1)} pts`;
    case "index":
      return `${sign}${absolute.toFixed(absolute % 1 === 0 ? 0 : 1)} pts`;
    case "currencyM":
      return `${sign}$${absolute.toFixed(2)}M`;
    case "currencyK":
      return `${sign}$${absolute.toFixed(0)}K`;
    case "currency":
      return `${sign}$${absolute.toFixed(1)}`;
    case "days":
      return `${sign}${absolute.toFixed(1)} d`;
    case "hours":
      return `${sign}${absolute.toFixed(absolute % 1 === 0 ? 0 : 1)} h`;
    case "count":
      return `${sign}${absolute.toFixed(0)}`;
    default:
      return `${sign}${absolute}`;
  }
}

function describeDelta(metric, currentValue) {
  if (state.mode === "baseline") {
    return {
      arrow: "→",
      tone: "watch",
      text: "Reference baseline",
    };
  }

  const delta = currentValue - metric.baseline;
  const improved = (metric.improve === "up" && delta > 0) || (metric.improve === "down" && delta < 0);
  const flat = Math.abs(delta) < 0.1;

  return {
    arrow: flat ? "→" : improved ? delta > 0 ? "↑" : "↓" : delta > 0 ? "↑" : "↓",
    tone: flat ? "watch" : improved ? "good" : "risk",
    text: `${formatDelta(delta, metric.format)} vs baseline`,
  };
}

function progressState(metric, currentValue) {
  if (state.mode === "baseline") {
    return {
      className: "",
      label: "Reference",
    };
  }

  const range = metric.target - metric.baseline;
  const progress = metric.improve === "down"
    ? (metric.baseline - currentValue) / (metric.baseline - metric.target || 1)
    : (currentValue - metric.baseline) / (range || 1);

  if (progress >= 0.85) {
    return { className: "status-chip--green", label: "Strong" };
  }

  if (progress >= 0.45) {
    return { className: "status-chip--amber", label: "Watch" };
  }

  return { className: "status-chip--red", label: "At risk" };
}

function trendStatus(metric) {
  const delta = metric.current - metric.baseline;
  const improved = (metric.improve === "up" && delta > 0) || (metric.improve === "down" && delta < 0);
  const tone = improved ? "good" : "risk";
  const arrow = improved ? delta > 0 ? "↑" : "↓" : delta > 0 ? "↑" : "↓";

  return `<span class="delta-chip delta-chip--${tone}">${arrow} ${formatDelta(delta, metric.format)} vs baseline</span>`;
}

function renderKpis(portfolio) {
  elements.kpiGrid.innerHTML = portfolio.kpis
    .map((metric) => {
      const currentValue = state.mode === "pilot" ? metric.pilot : metric.baseline;
      const delta = describeDelta(metric, currentValue);
      const status = progressState(metric, currentValue);

      return `
        <article class="kpi-card">
          ${tooltip(metric.label, metric.definition)}
          <div class="metric-value">${formatValue(currentValue, metric.format)}</div>
          <div class="metric-meta">
            <span class="delta-chip delta-chip--${delta.tone}">${delta.arrow} ${delta.text}</span>
            <span class="status-chip ${status.className}">${status.label}</span>
          </div>
          <p class="metric-baseline">Baseline ${formatValue(metric.baseline, metric.format)} | Target ${formatValue(metric.target, metric.format)}</p>
        </article>
      `;
    })
    .join("");
}

function renderSwimlanes(portfolio) {
  elements.swimlaneGrid.innerHTML = portfolio.swimlanes
    .map((lane) => {
      const isFocused = state.workflow === "all" || state.workflow === lane.id;
      const valueMetric = {
        ...lane.valueMetric,
        current: state.mode === "pilot" ? lane.valueMetric.pilot : lane.valueMetric.baseline,
      };
      const riskMetric = {
        ...lane.riskMetric,
        current: state.mode === "pilot" ? lane.riskMetric.pilot : lane.riskMetric.baseline,
      };
      const valueDelta = describeDelta(lane.valueMetric, valueMetric.current);
      const riskDelta = describeDelta(lane.riskMetric, riskMetric.current);

      return `
        <article class="swimlane ${isFocused ? "is-focused" : ""}">
          <div class="swimlane__title">
            <h3>${lane.title}</h3>
            <span class="status-chip ${isFocused ? "" : ""}">${isFocused ? "In view" : "Available"}</span>
          </div>
          <div class="swimlane__metrics">
            <div class="swimlane__metric">
              ${tooltip(valueMetric.label, valueMetric.definition)}
              <div class="swimlane__metric-value">
                <strong>${formatValue(valueMetric.current, valueMetric.format)}</strong>
                <span class="delta-chip delta-chip--${valueDelta.tone}">${valueDelta.arrow} ${valueDelta.text}</span>
              </div>
            </div>
            <div class="swimlane__metric">
              ${tooltip(riskMetric.label, riskMetric.definition)}
              <div class="swimlane__metric-value">
                <strong>${formatValue(riskMetric.current, riskMetric.format)}</strong>
                <span class="delta-chip delta-chip--${riskDelta.tone}">${riskDelta.arrow} ${riskDelta.text}</span>
              </div>
            </div>
          </div>
          <p class="swimlane__interpretation">${lane.interpretation[state.mode]}</p>
        </article>
      `;
    })
    .join("");
}

function renderTrendSvg(metric) {
  const values = [metric.baseline, metric.current, metric.target];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const xCoords = [28, 150, 272];
  const yFor = (value) => 106 - ((value - min) / range) * 70;
  const points = values.map((value, index) => `${xCoords[index]},${yFor(value)}`).join(" ");

  return `
    <svg viewBox="0 0 300 124" role="img" aria-label="${metric.title} trend chart">
      <line x1="28" y1="106" x2="272" y2="106" stroke="#d7dfeb" stroke-width="1.5"></line>
      <line x1="28" y1="36" x2="272" y2="36" stroke="#edf2f8" stroke-width="1"></line>
      <line x1="${xCoords[2]}" y1="22" x2="${xCoords[2]}" y2="106" stroke="#9db8e1" stroke-width="1.5" stroke-dasharray="4 4"></line>
      <polyline points="${points}" fill="none" stroke="#2059a8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <circle cx="${xCoords[0]}" cy="${yFor(metric.baseline)}" r="5" fill="#c8d2e1"></circle>
      <circle cx="${xCoords[1]}" cy="${yFor(metric.current)}" r="6" fill="#2059a8"></circle>
      <circle cx="${xCoords[2]}" cy="${yFor(metric.target)}" r="6" fill="#ffffff" stroke="#2059a8" stroke-width="3"></circle>
    </svg>
  `;
}

function renderTrends(portfolio) {
  elements.trendWindowNote.textContent = `${periodLabels[state.period]} view. Current reflects the live assisted operating state; baseline and target remain fixed anchors.`;

  elements.trendGrid.innerHTML = portfolio.trends
    .map((metric) => {
      return `
        <article class="trend-card">
          <div class="trend-card__header">
            <div>
              ${tooltip(metric.title, metric.definition)}
            </div>
            ${trendStatus(metric)}
          </div>
          <div class="trend-card__chart">${renderTrendSvg(metric)}</div>
          <div class="trend-card__legend">
            <div>
              <span>Baseline</span>
              <strong>${formatValue(metric.baseline, metric.format)}</strong>
            </div>
            <div>
              <span>Current</span>
              <strong>${formatValue(metric.current, metric.format)}</strong>
            </div>
            <div>
              <span>Target</span>
              <strong>${formatValue(metric.target, metric.format)}</strong>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderOversightKpis(profile) {
  elements.oversightKpis.innerHTML = profile.kpis
    .map((metric) => {
      const currentValue = state.mode === "pilot" ? metric.pilot : metric.baseline;
      const delta = describeDelta(metric, currentValue);
      return `
        <article class="oversight-kpi">
          ${tooltip(metric.label, metric.definition)}
          <div class="metric-value">${formatValue(currentValue, metric.format)}</div>
          <div class="metric-meta">
            <span class="delta-chip delta-chip--${delta.tone}">${delta.arrow} ${delta.text}</span>
          </div>
          <p class="metric-baseline">Target ${formatValue(metric.target, metric.format)}</p>
        </article>
      `;
    })
    .join("");
}

function renderOversightSummary(profile) {
  const straightThrough = profile.kpis.find((metric) => metric.label === "Straight-Through Rate");
  const reviewQueue = profile.kpis.find((metric) => metric.label === "Human Review Queue");
  const highRiskHolds = profile.kpis.find((metric) => metric.label === "High-Risk Holds");

  const straightThroughValue = state.mode === "pilot" ? straightThrough.pilot : straightThrough.baseline;
  const reviewQueueValue = state.mode === "pilot" ? reviewQueue.pilot : reviewQueue.baseline;
  const highRiskHoldsValue = state.mode === "pilot" ? highRiskHolds.pilot : highRiskHolds.baseline;

  elements.oversightSummary.innerHTML = `
    <span class="oversight-summary-chip">
      <strong>${formatValue(straightThroughValue, straightThrough.format)}</strong>
      <span>Straight-through policy clearance</span>
    </span>
    <span class="oversight-summary-chip">
      <strong>${formatValue(reviewQueueValue, reviewQueue.format)}</strong>
      <span>Items awaiting accountable review</span>
    </span>
    <span class="oversight-summary-chip">
      <strong>${formatValue(highRiskHoldsValue, highRiskHolds.format)}</strong>
      <span>High-risk holds currently active</span>
    </span>
  `;
}

function renderRoutingMap(profile) {
  const routeMix = profile.routeMix.map((item) => ({
    ...item,
    value: state.mode === "pilot" ? item.pilot : item.baseline,
  }));
  const slaStatus = profile.slaStatus.map((item) => ({
    ...item,
    value: state.mode === "pilot" ? item.pilot : item.baseline,
  }));
  const straightThrough = profile.kpis.find((metric) => metric.label === "Straight-Through Rate");
  const reviewQueue = profile.kpis.find((metric) => metric.label === "Human Review Queue");
  const overrideRate = profile.kpis.find((metric) => metric.label === "Override Rate");
  const footerStats = [
    {
      label: "Auto-cleared",
      value: state.mode === "pilot" ? straightThrough.pilot : straightThrough.baseline,
      format: straightThrough.format,
    },
    {
      label: "Queue in review",
      value: state.mode === "pilot" ? reviewQueue.pilot : reviewQueue.baseline,
      format: reviewQueue.format,
    },
    {
      label: "Human override",
      value: state.mode === "pilot" ? overrideRate.pilot : overrideRate.baseline,
      format: overrideRate.format,
    },
  ];

  elements.routingMap.innerHTML = `
    <div class="routing-map">
      <div class="routing-map__kpi-strip">
        ${routeMix
          .map(
            (item) => `
              <article class="routing-map__mini-kpi routing-map__mini-kpi--${item.tone}">
                <span class="routing-map__mini-label">${item.label}</span>
                <strong>${formatValue(item.value, item.format)}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="routing-map__sla">
        <div class="routing-map__sla-head">
          <div>
            <span class="routing-map__overview-label">Oversight SLA</span>
            <strong>Disposition status for escalated decisions</strong>
          </div>
          <span class="status-chip">${slaStatus[0].value}% within SLA</span>
        </div>
        <div class="routing-map__sla-bar">
          ${slaStatus
            .map(
              (item) => `
                <span
                  class="routing-map__sla-segment routing-map__sla-segment--${item.tone}"
                  style="width: ${item.value}%"
                ></span>
              `,
            )
            .join("")}
        </div>
        <div class="routing-map__sla-legend">
          ${slaStatus
            .map(
              (item) => `
                <span class="routing-map__sla-legend-item routing-map__sla-legend-item--${item.tone}">
                  ${item.label} ${item.value}%
                </span>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="routing-map__stage">
        <div class="routing-map__label">
          <strong>AI Recommendation</strong>
          <span>Structured recommendation generated from approved workflow context and evidence.</span>
        </div>
        <span class="status-chip">Input</span>
      </div>
      <div class="routing-map__stage">
        <div class="routing-map__label">
          <strong>Policy &amp; Risk Scan</strong>
          <span>Control checks evaluate data sensitivity, blast radius, workflow policy, and evidence completeness.</span>
        </div>
        <span class="status-chip">Decision point</span>
      </div>
      <div class="routing-map__split">
        <div class="routing-map__branches">
          <article class="routing-map__branch routing-map__branch--green">
            <div>
              <strong>Green</strong>
              <p>Low-risk, policy-conformant work with complete evidence.</p>
            </div>
            <div class="routing-map__flow">
              <span class="routing-map__step">Policy-Based Auto-Approval Enabled</span>
              <span class="routing-map__step">Execute</span>
            </div>
          </article>
          <article class="routing-map__branch routing-map__branch--amber">
            <div>
              <strong>Amber</strong>
              <p>Material impact or incomplete evidence requiring accountable review.</p>
            </div>
            <div class="routing-map__flow">
              <span class="routing-map__step">Human Review</span>
              <span class="routing-map__step">Approve</span>
              <span class="routing-map__step">Execute</span>
            </div>
          </article>
          <article class="routing-map__branch routing-map__branch--red">
            <div>
              <strong>Red</strong>
              <p>High-risk, restricted, or policy-conflicting recommendations.</p>
            </div>
            <div class="routing-map__flow">
              <span class="routing-map__step">Escalate</span>
              <span class="routing-map__step">Hold</span>
              <span class="routing-map__step">Reject</span>
            </div>
          </article>
        </div>
      </div>
      <div class="routing-map__footer">
        ${footerStats
          .map(
            (item) => `
              <article class="routing-map__footer-kpi">
                <span>${item.label}</span>
                <strong>${formatValue(item.value, item.format)}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function riskDefinition(riskTier) {
  const definitions = {
    green: "Green: low-risk work with complete evidence and no policy conflicts.",
    amber: "Amber: material impact, missing evidence, or elevated blast radius requiring accountable review.",
    red: "Red: high-risk or policy-conflicting work that must be escalated, held, or rejected.",
  };
  return definitions[riskTier];
}

function riskLabel(riskTier) {
  return `${riskTier.charAt(0).toUpperCase()}${riskTier.slice(1)}`;
}

function prioritizedQueueItems(items) {
  return [...items].sort((left, right) => {
    const leftRank = left.workflowId === state.workflow ? 0 : left.workflowId === "all" ? 1 : 2;
    const rightRank = right.workflowId === state.workflow ? 0 : right.workflowId === "all" ? 1 : 2;
    return leftRank - rightRank;
  });
}

function renderPendingQueue(profile) {
  const queue = prioritizedQueueItems(profile.queue);
  const visibleItems = state.oversightTab === "overview" ? queue.slice(0, 3) : queue;

  elements.pendingQueue.innerHTML = `
    <div class="queue-toolbar">
      <span>${state.oversightTab === "overview" ? "Showing top 3 pending items" : `Showing full queue (${queue.length} items)`}</span>
      <span>SLA ${inlineTooltip("SLA is the accountable decision window for escalated items after policy scan.", "SLA definition")}</span>
    </div>
    <div class="queue-list">
      ${visibleItems
        .map(
          (item) => `
            <article class="pending-item">
              <div class="pending-item__header">
                <div class="pending-item__title-group">
                  <div class="pending-item__title">${item.name}</div>
                  <p class="pending-item__meta">${item.workflow} | Owner: ${item.owner}</p>
                </div>
                <div class="pending-item__chips">
                  <span class="risk-chip risk-chip--${item.riskTier}">
                    ${riskLabel(item.riskTier)}
                    ${inlineTooltip(riskDefinition(item.riskTier), `${riskLabel(item.riskTier)} risk definition`)}
                  </span>
                  <span class="status-chip">
                    ${item.due}
                    ${inlineTooltip(item.slaDefinition, "SLA definition")}
                  </span>
                </div>
              </div>
              <p class="pending-item__reason">${item.reason}</p>
              <div class="pending-item__tags">
                ${item.evidenceTags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("")}
              </div>
              <div class="pending-item__footer">
                <span class="pending-item__meta">Escalation reason documented and evidence pack attached.</span>
                <div class="pending-item__actions">
                  <button class="action-button action-button--primary" type="button">${item.actions[0]}</button>
                  <button class="action-button" type="button">${item.actions[1]}</button>
                  <button class="action-button action-button--ghost" type="button">${item.actions[2]}</button>
                </div>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderGovernance(portfolio) {
  elements.governancePanel.innerHTML = `
    <div class="governance-layout">
      <div class="classification-grid">
        ${portfolio.governance.useCases
          .map((item) => {
            const count = state.mode === "pilot" ? item.pilot : item.baseline;
            return `
              <article class="classification-card">
                <span class="classification-dot classification-dot--${item.status}"></span>
                <div>
                  <strong>${item.label}</strong>
                  <small>${item.detail}</small>
                </div>
                <strong>${count}</strong>
              </article>
            `;
          })
          .join("")}
      </div>
      <div class="stat-list">
        ${portfolio.governance.metrics
          .map((metric) => {
            const currentValue = state.mode === "pilot" ? metric.pilot : metric.baseline;
            const delta = describeDelta(metric, currentValue);
            return `
              <div class="stat-row">
                <div>
                  ${tooltip(metric.label, metric.definition)}
                </div>
                <div class="stat-row__value">
                  <strong>${formatValue(currentValue, metric.format)}</strong>
                  <div><span class="delta-chip delta-chip--${delta.tone}">${delta.arrow} ${delta.text}</span></div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
      <p class="governance-note">${portfolio.governance.notes[state.mode]}</p>
      <div class="governance-console">
        <div class="governance-console__head">
          <div>
            <p class="eyebrow eyebrow--dark">Control-Level View</p>
            <h3>Explicit policy and control status</h3>
          </div>
          <span class="status-chip">Auditable</span>
        </div>
        <div class="governance-console__list">
          ${portfolio.governance.controls
            .map(
              (control) => `
                <article class="governance-control">
                  <div class="governance-control__copy">
                    <strong>${control.name}</strong>
                    <span>${control.detail}</span>
                  </div>
                  <div class="governance-control__status">
                    <span class="status-chip status-chip--${control.status === "green" ? "green" : control.status === "amber" ? "amber" : "red"}">${control.label}</span>
                    <button class="governance-control__button" type="button" aria-label="${control.name} control details">⋯</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderEconomics(portfolio) {
  const currentCostBars = portfolio.economics.byWorkflow.map((item) => ({
    ...item,
    value: state.mode === "pilot" ? item.pilot : item.baseline,
  }));
  const maxValue = Math.max(...currentCostBars.map((item) => item.value));

  elements.economicsPanel.innerHTML = `
    <div class="economics-layout">
      <div class="cost-bars">
        ${currentCostBars
          .map((item) => {
            const width = (item.value / maxValue) * 100;
            const isFocus = state.workflow === "all" || state.workflow === item.id;
            return `
              <div class="cost-bars__row">
                <div class="cost-bars__top">
                  <span>${item.label}</span>
                  <strong>${formatValue(item.value, item.format)}</strong>
                </div>
                <div class="bar-track">
                  <span class="bar-fill ${isFocus ? "is-focus" : ""}" style="width: ${width}%"></span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
      <div>
        <div class="mix-stack">
          ${portfolio.economics.modelMix
            .map(
              (segment) =>
                `<span class="${segment.className}" style="width: ${segment.share}%"></span>`,
            )
            .join("")}
        </div>
        <div class="mix-legend">
          ${portfolio.economics.modelMix
            .map((segment, index) => {
              const colorMap = ["#1d5aa9", "#4b83c7", "#88acd8", "#c3d3e8"];
              return `
                <div class="mix-row" style="--mix-color: ${colorMap[index]}">
                  <span>${segment.label}</span>
                  <span>${segment.share}%</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
      <div class="economics-summary">
        ${portfolio.economics.summary
          .map((metric) => {
            const currentValue = state.mode === "pilot" ? metric.pilot : metric.baseline;
            const delta = describeDelta(metric, currentValue);
            return `
              <div class="summary-row">
                <div>${tooltip(metric.label, metric.definition)}</div>
                <div class="summary-row__value">
                  <strong>${formatValue(currentValue, metric.format)}</strong>
                  <div><span class="delta-chip delta-chip--${delta.tone}">${delta.arrow} ${delta.text}</span></div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
      <p class="economics-note">${portfolio.economics.notes[state.mode]}</p>
    </div>
  `;
}

function getPrioritizedActions(actions) {
  return [...actions]
    .sort((left, right) => {
      const leftRank = left.workflow === state.workflow ? 0 : left.workflow === "all" ? 1 : 2;
      const rightRank = right.workflow === state.workflow ? 0 : right.workflow === "all" ? 1 : 2;
      return leftRank - rightRank;
    })
    .slice(0, 5);
}

function renderActionCenter(portfolio) {
  const actions = getPrioritizedActions(portfolio.actions);

  elements.actionCenter.innerHTML = `
    <table class="action-table">
      <thead>
        <tr>
          <th>Executive Action</th>
          <th>Owner</th>
          <th>Due Date</th>
          <th>Expected Impact</th>
        </tr>
      </thead>
      <tbody>
        ${actions
          .map(
            (action) => `
              <tr>
                <td>
                  <div class="action-table__title">
                    <strong>${action.title}</strong>
                    <span>${workflowLabels[action.workflow] || "Cross-workflow"} priority</span>
                  </div>
                </td>
                <td>${action.owner}</td>
                <td>${action.due}</td>
                <td><span class="impact-pill">${action.impact}</span></td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderRoadmap(portfolio) {
  elements.roadmapPanel.innerHTML = `
    <div class="roadmap-grid">
      ${portfolio.roadmap
        .map(
          (step) => `
            <article class="roadmap-step">
              <span class="roadmap-step__window">${step.window}</span>
              <h3>${step.title}</h3>
              <ul>
                ${step.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderScopeSummary(portfolio) {
  elements.scopeSummary.innerHTML = `
    <span class="scope-chip"><strong>Team</strong><span>${portfolio.label}</span></span>
    <span class="scope-chip"><strong>Workflow</strong><span>${workflowLabels[state.workflow]}</span></span>
    <span class="scope-chip"><strong>View</strong><span>${state.mode === "pilot" ? "Pilot assisted" : "Baseline reference"}</span></span>
    <span class="scope-chip"><strong>Date</strong><span>${periodLabels[state.period]}</span></span>
    <span class="scope-chip"><strong>Scope</strong><span>${portfolio.scope}</span></span>
  `;
}

function renderFooter(portfolio) {
  elements.lastUpdated.textContent = portfolio.updatedAt[state.period];
  elements.dataSources.textContent = portfolio.dataSources.join(" | ");
}

function render() {
  const portfolio = portfolios[state.team];
  const oversightProfile = oversightProfiles[state.team];
  renderScopeSummary(portfolio);
  renderKpis(portfolio);
  renderSwimlanes(portfolio);
  renderOversightSummary(oversightProfile);
  renderOversightKpis(oversightProfile);
  renderRoutingMap(oversightProfile);
  renderPendingQueue(oversightProfile);
  renderTrends(portfolio);
  renderGovernance(portfolio);
  renderEconomics(portfolio);
  renderActionCenter(portfolio);
  renderRoadmap(portfolio);
  renderFooter(portfolio);

  elements.baselineToggle.classList.toggle("is-active", state.mode === "baseline");
  elements.baselineToggle.setAttribute("aria-pressed", String(state.mode === "baseline"));
  elements.pilotToggle.classList.toggle("is-active", state.mode === "pilot");
  elements.pilotToggle.setAttribute("aria-pressed", String(state.mode === "pilot"));
  elements.overviewTab.classList.toggle("is-active", state.oversightTab === "overview");
  elements.overviewTab.setAttribute("aria-selected", String(state.oversightTab === "overview"));
  elements.governanceTab.classList.toggle("is-active", state.oversightTab === "governance");
  elements.governanceTab.setAttribute("aria-selected", String(state.oversightTab === "governance"));
}

elements.dateFilter.addEventListener("change", (event) => {
  state.period = event.target.value;
  render();
});

elements.teamFilter.addEventListener("change", (event) => {
  state.team = event.target.value;
  render();
});

elements.workflowFilter.addEventListener("change", (event) => {
  state.workflow = event.target.value;
  render();
});

[elements.baselineToggle, elements.pilotToggle].forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    render();
  });
});

[elements.overviewTab, elements.governanceTab].forEach((button) => {
  button.addEventListener("click", () => {
    state.oversightTab = button.dataset.oversightTab;
    render();
  });
});

render();
