# Code Architecture & Minimalist Style Guide

## Core Philosophy
This project strictly follows a minimalist and "forced precision" philosophy. Every line of code, every UI element, and every function must have a clear, undeniable purpose. If it's not strictly necessary, it should be removed.

## Architectural Standards

### 1. Separation of Concerns
*   **Data vs. Presentation:** String constants, texts, and static configurations MUST live in `src/const/`. Components MUST NOT contain hardcoded text.
*   **Component Structure:** Logic and data fetching should be separated from presentation as much as possible.

### 2. Code Cleanliness (Minimalism)
*   **No Redundant Wrappers:** Avoid unnecessary `<div>` wrappers or deeply nested HTML structures unless required for CSS Grid/Flexbox layouts.
*   **Zero Noise:** Comments in the code are strictly forbidden unless they explain *why* a specific pattern or complex logic was used. Do not use comments to explain *what* the code does (the code should be self-documenting).
*   **Dead Code:** Remove unused variables, imports, and functions immediately.

### 3. Astro & React Specifics
*   **Astro First:** Use `.astro` components for all static content and layouts.
*   **React Sparingly:** Use React components (`.tsx`) *only* when client-side state or interactivity is absolutely required (e.g., clocks, interactive forms).
*   **TypeScript:** Strict typing is mandatory. Avoid `any` types.

### 4. UI/UX
*   Visual design should align with a dark, minimalist aesthetic (inspired by Balenciaga, Typora, Dark Souls).
*   Use subtle, slow animations for interactions (e.g., hover effects).
*   Prioritize typography, whitespace, and high contrast over complex visual elements.

## Code Review Focus (Severity Thresholds)
Gemini Code Assist must evaluate pull requests based on these standards.
*   **CRITICAL:** Security vulnerabilities or massive architectural violations (e.g., putting business logic inside a UI component).
*   **HIGH:** Hardcoded text in components, redundant `<div>` nesting, unnecessary use of React for static content, or violations of the "Zero Noise" comment rule.