---
title: "Small Practice on Google Workspace"
description: A reference architecture for a solo or small group practice running entirely on Google Workspace with a BAA — email, storage, calendar, and video, with the controls HIPAA expects.
tags: [google-workspace, small-practice, architecture]
lastUpdated: 2026-07-08
---

<!-- PLACEHOLDER CONTENT — replace with a reviewed architecture before launch. -->

A solo or small group practice can run its entire administrative and clinical
communication stack on Google Workspace under a single BAA. This architecture
shows the data flows and the control points HIPAA cares about.

## Data flow

```mermaid
graph LR
    subgraph Practice
        T[Therapist laptop<br/>2SV + disk encryption]
        M[Mobile device<br/>screen lock + MDM basic]
    end
    subgraph "Google Workspace (BAA signed)"
        G[Gmail]
        D[Drive - session notes]
        C[Calendar]
        V[Meet - telehealth]
    end
    P[Client / Patient]

    T --> G
    T --> D
    T --> C
    M --> G
    P -->|email| G
    P -->|telehealth session| V
    V --> T
```

## Control points

| Control | Where | Why |
| --- | --- | --- |
| Signed BAA | Admin Console → Legal & compliance | Required before any PHI touches Workspace |
| 2-Step Verification enforced | Admin Console → Security | Access control safeguard |
| Drive sharing: restricted by default | Admin Console → Apps → Drive | Prevents accidental public exposure of notes |
| Endpoint screen lock + encryption | Devices | Physical safeguard for BYOD reality |

## Known limits

This pattern covers communication and storage. It is **not** an EHR — clinical
records systems, billing clearinghouses, and payment processors each need
their own BAA and their own row in your asset inventory.
