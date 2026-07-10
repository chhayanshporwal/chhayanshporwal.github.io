---
title: "Orbit Workspace"
seo_title: "Orbit Workspace | Enterprise Collaboration & Real-Time Task Management"
description: "A live full-stack enterprise project management platform with a scalable Python/FastAPI backend and a React.js frontend, integrating real-time WebSockets and Redis."
excerpt: "Full-stack enterprise workspace collaboration platform built with Python/FastAPI, React.js, and live WebSockets for real-time task management."
collection: portfolio
date: "2024-05-01"
---

[<i class="fas fa-fw fa-link"></i> Live Site](https://www.orbitworkspace.xyz/) | [<i class="fab fa-fw fa-github"></i> View Source Code](https://github.com/chhayanshporwal/orbit-workspace)

**Summary:** An enterprise workspace collaboration platform designed for scalable real-time project and task management.

*   **Problem:** Enterprise teams require highly scalable backends and real-time synchronization to ensure seamless task management and instant notifications for all users without high latency.
*   **Solution:** Architected a live full-stack enterprise project management platform. Developed a scalable backend using Python and FastAPI, and built a dynamic React.js frontend that integrates real-time WebSockets and Redis for instant notifications and task tracking.
*   **Tech Stack:** `Python`, `FastAPI`, `React.js`, `WebSockets`, `Redis`, `Pytest`, `GitHub Actions`

### System Architecture

```mermaid
flowchart TD
    subgraph "Frontend (React.js)"
        A["Dashboard & Task View"]
        B["Notification Center"]
        C["Real-time Updates (WebSockets)"]
    end
    
    A --> D["REST API Calls"]
    B --> C
    
    subgraph "Backend (Python + FastAPI)"
        D --> E["API Routers"]
        E --> F["Task Assignment Engine\n(OOPs & Data Structures)"]
        E --> G["Notification Manager"]
    end
    
    C <--> H["WebSocket Server"]
    G --> H
    
    subgraph "Data Layer"
        F --> I[("Primary Database")]
        H --> J[("Redis\n(Pub/Sub & Cache)")]
        G --> J
    end
    
    subgraph "CI/CD & Testing"
        K["Pytest\n(Functional & Integration)"]
        L["GitHub Actions\n(Automated Pipeline)"]
    end
    
    K -.-> E
    L -.-> K
```

*   **What I learned:** Deepened expertise in architecting live, full-stack enterprise systems. Mastered real-time communication protocols using WebSockets and Redis, and strengthened testing and deployment practices with Pytest and GitHub Actions.
