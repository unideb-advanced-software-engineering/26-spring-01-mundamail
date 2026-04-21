---
title: Architecturally Significant Requirements (ASRs)
description: What will influence the architecture for the Government Messaging system?
---


---

## Identification Criteria

A requirement is architecturally significant if it:
- **Constrains** the architecture (e.g., must use SMTP/IMAP)
- **Drives** structural decisions (e.g., API bridge, RBAC, encryption)
- **Crosses multiple components** (e.g., logging, security)
- Is **difficult to achieve** and cannot easily be added later
- Relates to a **quality attribute** at a demanding level (performance, security, availability)

---

## 1. Availability

| ASR ID | Description | Source |
|--------|-------------|--------|
| ASR-001 | The system shall maintain 99.9% uptime, requiring redundant infrastructure and failover mechanisms | P-MM-003, SA-MM-003 |
| ASR-002 | Recovery Time Objective (RTO) of 4 hours and Recovery Point Objective (RPO) of 1 hour demands a backup and failover architecture | SA-MM-003 |

> **Architectural implication:** Requires load balancing, database replication, and a disaster recovery deployment strategy.

---

## 2. Performance

| ASR ID | Description | Source |
|--------|-------------|--------|
| ASR-003 | API must respond within 2 seconds for 95% of calls under concurrent load, requiring non-blocking asynchronous processing | P-MM-002 |
| ASR-004 | Mass messaging to 50,000 recipients within 10 minutes requires a message queue architecture rather than direct synchronous delivery | P-MM-004 |
| ASR-005 | Support for 10,000 concurrent users demands horizontal scalability — the architecture cannot be monolithic | P-MM-003 |

> **Architectural implication:** Rules out a simple synchronous monolith. Requires a message queue, async workers, and horizontally scalable services.

---

## 3. Security

| ASR ID | Description | Source |
|--------|-------------|--------|
| ASR-006 | Authentication for all API consumers requires an identity and authorization server component in the architecture | SE-MM-001 |
| ASR-007 | For all data in transit requires a secure gateway or reverse proxy layer | SE-MM-002 |
| ASR-008 | Encryption at rest affects the database and storage layer design | SE-MM-003 |
| ASR-009 | Role-Based Access Control (RBAC) must be enforced system-wide, implying a centralized authorization module that all components consult | SE-MM-004 |
| ASR-010 | Audit logging of all API calls, logins, and admin actions for 12 months requires a dedicated, tamper-evident logging subsystem | SE-MM-005 |

> **Architectural implication:** Security cannot be bolted on — it must be woven into the API gateway, storage, and identity layers from the start.

---

## 4. Interoperability

| ASR ID | Description | Source |
|--------|-------------|--------|
| ASR-011 | The API bridge that translates REST calls to IMAP/SMTP commands is a core architectural component — it defines the system boundary between modern clients and legacy email protocols | F-MM-104 |
| ASR-012 | Integration with government identity systems via LDAP/SAML requires a federated identity layer | Interoperability |

> **Architectural implication:** The REST-to-IMAP/SMTP bridge is a key architectural component that must be designed for extensibility as protocols evolve.

---

## 5. Maintainability & Scalability

| ASR ID | Description | Source |
|--------|-------------|--------|
| ASR-013 | Modular architecture requirement means the system must be decomposed into independently deployable services (microservices or well-defined modules) | Maintainability |
| ASR-014 | Horizontal scaling support rules out shared mutable state between instances — session and state management must be externalized (e.g., Redis) | Scalability |

---

## 6. Compliance & Data Retention

| ASR ID | Description | Source |
|--------|-------------|--------|
| ASR-015 | 5-year retention of government agency message logs requires a dedicated archival storage strategy separate from the active message store | BR-MM-007 |
| ASR-016 | Blocking executable attachments (.exe, .bat, .sh) requires a content inspection component at the message ingestion layer | BR-MM-006 |

---

## 7. General ZDR requirements
### Economy
Zamunda is not a poor country, but it does not want to waste money unnecessarily: projects must be planned with economy in mind.

---

## ASR Summary — Impact on Architecture

| Quality Attribute    | # of ASRs | Architectural Impact                              |
|----------------------|-----------|---------------------------------------------------|
| Availability         | 2         | Load balancer, failover, replication              |
| Performance          | 3         | Message queue, async workers, horizontal scaling  |
| Security             | 5         | API gateway, OAuth server, RBAC module, audit log |
| Interoperability     | 2         | REST-to-SMTP bridge, LDAP/SAML federation         |
| Maintainability      | 2         | Modular/microservice decomposition, external state|
| Compliance           | 2         | Archive storage, content inspection               |
| **Total**            | **16**    |                                                   |
