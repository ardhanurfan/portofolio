# Portfolio Revamp — Design

## Intent
Single-page portfolio for Ardhan Nur Urfan (Software Engineer I, Mekari). A recruiter should trust him within 30s, be curious enough to explore, and contact him for an interview. Source of truth for content: `Ardhan Nur Urfan_CV.pdf`.

## Goals
- Trust-first hero: role, 25+ microservices @ 99.9% reliability, <60s MTTA on high-urgency on-call alerts (100% SLA), 10x SDLC via AI workflows, ITB Summa Cum Laude GPA 3.85, 4 competition placements (2 first place). Download CV + Contact CTAs always reachable (sticky).
- Interactive and gamified, but professional: Career Quest timeline (each job a "level" with XP-style stat counters), skill tree (Backend/Frontend/Mobile & IoT/Data & Messaging/Cloud & DevOps), trophy cabinet for awards, explore-progress bar (sections visited) with a reward at 100% that nudges to contact, Cmd/Ctrl+K command palette, a few hidden easter eggs (Konami code).
- Modern/elegant: dark + light themes, smooth motion honoring prefers-reduced-motion, mobile-first, accessible.
- Full features: Projects (filterable by tag, with live/repo links), Education, Contact (EmailJS form + mailto/LinkedIn/GitHub), SEO/OG meta.

## Content notes
- Mekari 10x SDLC bullet: AI-assisted workflows (ATDD, automated testing, troubleshooting, PRD/RFC reviews, 80% AI-assisted PR rate). Owner addition: engineers build the test automation themselves rather than relying on a dedicated QA. Show this in the Mekari quest card and the 10x hero stat tooltip.

## Non-goals / anti-goals
- No playable mini-game. Gamification must never block or slow reading content.
- Do NOT mention change failure rate (CFR) anywhere (owner request).
- No fabricated metrics: only figures from the CV.

## Constraints / decisions
- Keep stack: Vite + React 18 + TypeScript + Tailwind + Framer Motion (+ react-icons, emailjs). Drop AOS, react-spring, react-tilt, typewriter if unused. (builder's call: none of these are required)
- Content lives in `src/data/*.ts`, typed, so sections are data-driven.
- Reuse existing assets in `public/` (project images, tech svgs, avatar).
- Existing EmailJS credentials in Contact.tsx are kept as-is.
- Progress/achievements persisted in localStorage (try/catch).

## Builder's call
Visual identity (palette, fonts), exact animations, and which existing projects to feature beyond those in the CV.
