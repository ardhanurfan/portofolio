# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the single-page portfolio as a trust-first, gamified, data-driven site based on the CV.

**Architecture:** Typed content in `src/data/`, small focused section components in `src/sections/`, a `useExplore` progress store (React context + localStorage) shared by the progress bar, quest timeline, and command palette. Same Vite/React/Tailwind/Framer Motion stack.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind 3, Framer Motion, react-icons, @emailjs/browser, vitest (added for logic tests).

**Spec:** `docs/superpowers/specs/2026-11-12-portfolio-revamp-design.md`

## Global Constraints

- Never mention change failure rate / CFR anywhere (copy, data, comments).
- Only metrics present in the CV; headline stats: 25+ microservices @ 99.9% reliability, <60s MTTA (100% SLA), 10x SDLC, GPA 3.85 Summa Cum Laude, 4 placements (2 first place).
- Mekari 10x SDLC copy must state that engineers build test automation themselves instead of relying on QA (spec: Content notes).
- Dark + light theme; honor `prefers-reduced-motion`; mobile-first; no horizontal scroll at 360px.
- No playable mini-game; gamification must not block content.
- Keep existing EmailJS credentials in `Contact`. localStorage access wrapped in try/catch.
- `npm run build` and `npm run lint` must pass at the end of every task.

## Review Focus

- localStorage unavailable/corrupt JSON → app still renders, progress starts at 0 (test in Task 2).
- Same section visited twice → progress counted once (Task 2).
- Command palette with no match → shows "No results", Enter does nothing (Task 6).
- Contact form with empty/invalid email → blocked client-side, no send (Task 7).
- Project filter with a tag that has zero projects → empty state, not blank (Task 5).

---

### Task 1: Foundation, theme, data

**Files:** Create `src/data/{profile,experience,skills,awards,projects,education}.ts`, `src/lib/theme.ts`; Modify `package.json` (add vitest, remove aos/react-spring/react-tilt/typewriter-effect/usehooks-ts if unused), `tailwind.config.js`, `src/index.css`, `index.html` (title, OG meta, font), `src/App.tsx`; delete old `sections/`, `components/`.

**Interfaces — Produces:** `profile: {name, role, company, location, email, links, stats: {label,value,suffix?}[]}`; `experience: {id, role, org, period, location, xp: {label,value}[], bullets: string[]}[]`; `skillGroups: {id, name, skills: {name, level:1|2|3, icon?}[]}[]`; `awards: {id, title, event, year, place, blurb, link?}[]`; `projects: {id, title, desc, tech: string[], tags: string[], image, repo?, live?}[]` (existing `public/project/*` images; CV projects first); `useTheme(): {theme:'light'|'dark', toggle()}`.

- [ ] Step 1: Transcribe CV content into the data files (exact figures; no CFR). The Mekari 10x bullet includes "engineers build test automation themselves instead of relying on QA".
- [ ] Step 2: Write `scripts/` check-free test `src/data/data.test.ts` asserting no data string matches `/change failure|CFR/i` and every `projects[].image` exists under `public/`. Run `npx vitest run` → FAIL, then pass after data written.
- [ ] Step 3: Implement `useTheme` (class `dark` on `<html>`, persisted, defaults to system).
- [ ] Step 4: Tailwind tokens (accent palette, font), base CSS, reduced-motion rule. `npm run build` passes.
- [ ] Step 5: Commit `feat: data layer and theme`.

### Task 2: Explore progress store

**Files:** Create `src/lib/explore.tsx`, `src/lib/explore.test.ts`.

**Interfaces — Produces:** `SECTION_IDS = ['hero','about','quest','skills','trophies','projects','education','contact'] as const`; `loadVisited(storage?: Storage): Set<string>`; `ExploreProvider`; `useExplore(): {visited: Set<string>, percent: number, visit(id), complete: boolean}`.

- [ ] Step 1: Tests: `loadVisited` returns empty set on throwing storage and on corrupt JSON; `visit('about')` twice gives `percent` = 100/8 rounded; unknown ids ignored; `complete` true when all visited.
- [ ] Step 2: Run → FAIL. Step 3: Implement (persist to key `explore:v1`, try/catch). Step 4: Run → PASS. Step 5: Commit.

### Task 3: Shell — navbar, progress bar, sticky CTAs, hero

**Files:** Create `src/components/{Navbar,ProgressBar,StickyCta,Section,StatCounter}.tsx`, `src/sections/Hero.tsx`; Modify `App.tsx`.

**Interfaces:** `Section({id, title, eyebrow, children})` calls `visit(id)` when ≥40% in view (IntersectionObserver); `StatCounter({value, suffix, label})` animates once in view (renders final value instantly under reduced motion).

- [ ] Step 1: Hero: name, role, one-line summary, 5 stat counters from `profile.stats`, CTAs "Download CV" (`/Ardhan_Nur_Urfan_CV.pdf`, copy PDF into `public/`) and "Let's talk" (scrolls to contact).
- [ ] Step 2: Navbar with theme toggle, section links, ⌘K hint; thin top progress bar showing `percent`; StickyCta visible after hero on all viewports.
- [ ] Step 3: `npm run build && npm run lint`; manually verify at 360px and 1440px. Commit.

### Task 4: Career Quest, skill tree, trophy cabinet

**Files:** Create `src/sections/{About,Quest,Skills,Trophies,Education}.tsx`.

- [ ] Step 1: Quest: vertical timeline from `experience`; each level card "unlocks" on scroll with level number, XP-style `StatCounter` chips, expandable bullets (first expanded for Mekari).
- [ ] Step 2: Skills: tabs per `skillGroups`; skill chips show 1–3 pip level; keyboard accessible.
- [ ] Step 3: Trophies: 4 award cards (gold for first place) with flip/expand for blurb and link. Education card with GPA + thesis.
- [ ] Step 4: build + lint; verify. Commit.

### Task 5: Projects

**Files:** Create `src/sections/Projects.tsx`, `src/lib/filterProjects.ts`, `src/lib/filterProjects.test.ts`.

**Interfaces:** `filterProjects(list: Project[], tag: string | 'all'): Project[]`.

- [ ] Step 1: Tests: `'all'` returns all; a tag returns only matching; unknown tag returns `[]`.
- [ ] Step 2: Implement; run → PASS. Step 3: UI with tag chips, animated grid, `lazy` images, live/repo links, empty state. Step 4: build+lint. Commit.

### Task 6: Command palette and easter eggs

**Files:** Create `src/components/CommandPalette.tsx`, `src/lib/commands.ts`, `src/lib/commands.test.ts`, `src/lib/useKonami.ts`.

**Interfaces:** `searchCommands(commands: Command[], query: string): Command[]` (case-insensitive, matches label/keywords); `Command = {id,label,keywords:string[],run():void}`.

- [ ] Step 1: Tests: empty query returns all; "cv" matches Download CV; "zzz" returns `[]`.
- [ ] Step 2: Implement; palette opens on ⌘/Ctrl+K, arrows/Enter/Esc, focus trapped; "No results" state. Commands: jump to each section, toggle theme, download CV, email, GitHub, LinkedIn.
- [ ] Step 3: Konami code triggers confetti-free toast "Achievement unlocked: Curious Engineer". Step 4: build+lint. Commit.

### Task 7: Contact, completion reward, SEO, polish

**Files:** Create `src/sections/Contact.tsx`, `src/lib/validate.ts`, `src/lib/validate.test.ts`, `src/components/CompletionToast.tsx`; Modify `index.html`, add `public/og.png` placeholder-free (reuse `logo.png`).

**Interfaces:** `validateContact({name,email,message}): Record<string,string>` (empty object = valid).

- [ ] Step 1: Tests: empty fields and `"a@b"` email yield errors; valid input yields `{}`.
- [ ] Step 2: Implement validation + EmailJS form (reuse existing credentials), success/error states, plus mailto/LinkedIn/GitHub/phone-free links.
- [ ] Step 3: `CompletionToast` when `complete` becomes true: "100% explored — let's talk" with Contact CTA, shown once.
- [ ] Step 4: Meta description, OG tags, favicon. Run `npx vitest run && npm run build && npm run lint`; Lighthouse-style manual check (no console errors, keyboard nav, 360px). Commit.
