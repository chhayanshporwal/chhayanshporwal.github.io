---
title: "Nandini: Voice-Enabled RAG Architecture"
seo_title: "Nandini Voice RAG Assistant | Pinecone, Groq LLM & Vercel Serverless API"
description: "A production-grade voice-enabled RAG assistant using Pinecone vector database, Groq LLM, Vercel Serverless Functions, and Google Cloud TTS with a zero-LangChain architecture."
excerpt: "A scalable, self-aware AI assistant utilizing a Pinecone Vector Database and Vercel Serverless with a highly optimized Zero-LangChain architecture."
collection: portfolio
date: "2024-04-01"
---

[<i class="fab fa-fw fa-github"></i> View Source Code](https://github.com/chhayanshporwal/voice-rag-backend)

## Overview
To demonstrate production-grade LLM engineering, I built **"Nandini"**—a custom Retrieval-Augmented Generation (RAG) assistant integrated directly into this portfolio. Instead of utilizing basic API wrappers or heavy abstraction frameworks, this system relies on a lightweight, standalone serverless backend and a dedicated vector database to answer complex technical queries about my work with zero hallucinations. 

Nandini is capable of intelligently describing her own architecture and creation process to users in real-time.

---

## System Architecture

The architecture is divided into three highly optimized layers, strictly avoiding heavy abstractions like LangChain in favor of raw speed.

### 1️⃣ The ETL Data Pipeline (Vector Generation)
*   **Data Ingestion:** A custom Node.js script automatically crawls and chunks my raw project markdown files.
*   **Vectorization:** Text chunks are embedded using high-dimensional embedding models.
*   **Storage:** Vectors are indexed into a **Pinecone Serverless Database** alongside relational metadata (GitHub URLs, deep links). The script actively wipes stale ghost vectors to ensure pristine data hygiene.

### 2️⃣ Zero-LangChain Orchestration (Backend)
*   **Native Web Speech:** The browser's native API transcribes spoken audio and POSTs it to the backend.
*   **Vercel Serverless:** A lightning-fast serverless function intercepts the request.
*   **Memory & Context:** The backend automatically rewrites queries using conversation history (Contextualize Question step) before executing the cosine similarity search.
*   **Groq LLM Generation:** The system utilizes **Groq** for high-speed, grounded response generation, strictly forbidding hallucinations.

### 3️⃣ Synthesis & State Persistence (Frontend)
*   **Google Cloud Neural2 TTS:** By stripping away third-party fallback dependencies, the system achieves incredibly low latency for voice generation.
*   **Session Persistence:** The React frontend utilizes `sessionStorage`, guaranteeing that a user's conversation history and chat window state remain fully intact even as they navigate across different pages.
