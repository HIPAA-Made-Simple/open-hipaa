---
title: "Can I use real patient data in my dev or test environment?"
description: "Generally no. Production PHI copied into dev, test, or staging is still PHI and must carry the same encryption, access controls, and BAAs as production, so use de-identified or synthetic data unless the lower environment is fully secured and covered."
tags: [de-identification, phi, security-rule]
lastUpdated: 2026-07-09
---

<!-- STUB — the answer below is the verified `description` restated. The expanded
     answer, nuance, and exceptions have NOT been written. The description was
     machine-drafted and machine-checked (two adversarial passes; CFR section
     numbers validated against the eCFR API). It has NOT been reviewed by a
     human or by counsel. -->

Generally no. Production PHI copied into dev, test, or staging is still PHI and must carry the same encryption, access controls, and BAAs as production, so use de-identified or synthetic data unless the lower environment is fully secured and covered.

## Primary sources

- [45 CFR 164.514](https://www.ecfr.gov/current/title-45/section-164.514)
- 164.312

## Related questions

- [What counts as protected health information (PHI)?](/questions/what-counts-as-protected-health-information-phi/)
- [Is an IP address PHI?](/questions/is-an-ip-address-phi/)
- [What is the difference between Safe Harbor and Expert Determination?](/questions/what-is-the-difference-between-safe-harbor-and-expert-determination/)
