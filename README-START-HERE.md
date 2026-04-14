# 🏒 EduProSport Website Rebuild — START HERE

## Čo je toto?

Kompletný balík na rebuild eduprosport.com z WordPress (skóre 38/100) 
na moderný Next.js web s dark sporty dizajnom.

Založené na 5 hackoch z videa: https://www.youtube.com/watch?v=86HM0RUWhCk

---

## Obsah balíka

| Súbor | Čo to je |
|-------|----------|
| `README-START-HERE.md` | Tento súbor — rozcestník |
| `CLAUDE.md` | System prompt pre Claude Code — NAJDÔLEŽITEJŠÍ SÚBOR |
| `SETUP-INSTRUCTIONS.md` | Kroky pred začiatkom (install skills, dependencies) |
| `STEP-BY-STEP-PROMPTS.md` | 17 promptov krok za krokom na celý build |
| `brand_assets/brand-guidelines.md` | Farby, typografia, voice, komponenty |
| `brand_assets/logo/` | Logo súbory (stiahni zo starého webu) |
| `brand_assets/images/` | Fotky tímu + Midjourney obrázky |
| `midjourney_prompts/ALL-PROMPTS.md` | 12 Midjourney promptov na všetku grafiku |
| `inspiration_screenshots/` | Screenshoty inšpiračných webov (pridaj manuálne) |

---

## Postup (Quick Start)

### 1. Príprava (30 min)
- [ ] Otvor VS Code + nainštaluj Claude Code extension
- [ ] Otvor tento folder ako projekt
- [ ] Sleduj `SETUP-INSTRUCTIONS.md` — kroky 0 až 6

### 2. Midjourney obrázky (1-2 hodiny)
- [ ] Otvor `midjourney_prompts/ALL-PROMPTS.md`
- [ ] Vygeneruj minimálne: hero-bg.png, course-coaching.png, course-players.png
- [ ] Uloži do `brand_assets/images/`

### 3. Inšpiračné screenshoty (15 min)
- [ ] Otvor tieto weby a urob full-page screenshoty (F12 → Ctrl+Shift+P → "Capture full size screenshot"):
  - masterclass.com
  - niketraining.com alebo nike.com/ntc
  - Vyber 1 hokejový web z awwwards.com/websites/sports/
- [ ] Uloži do `inspiration_screenshots/`

### 4. Build! (2-4 hodiny)
- [ ] Otvor Claude Code vo VS Code
- [ ] Sleduj `STEP-BY-STEP-PROMPTS.md` — prompt 1 až 17
- [ ] Po každom prompte skontroluj localhost:3000
- [ ] Ak niečo nesedí → povedz Claude Code čo zmeniť

### 5. Deploy (15 min)
- [ ] Prompt 17 z STEP-BY-STEP-PROMPTS.md
- [ ] GitHub repo → Vercel → custom doména

---

## 5 Hackov z videa — ako sú implementované

| Hack | Implementácia |
|------|---------------|
| #0 CLAUDE.md | ✅ `CLAUDE.md` — kompletný system prompt s brand rules, tech stack, content |
| #1 Front-end Design Skill | ✅ V SETUP-INSTRUCTIONS.md krok 1 — inštalácia skillu |
| #2 Screenshot Loop | ✅ V CLAUDE.md — Puppeteer workflow + script + pravidlá |
| #3 Inspiration Websites | ✅ 3 referencie v CLAUDE.md + `inspiration_screenshots/` folder |
| #4 Individual Components | ✅ V CLAUDE.md + bonus prompty v STEP-BY-STEP-PROMPTS.md (21st.dev) |

---

## Technické detaily

- **Stack:** Next.js 16, React 19, TypeScript, Tailwind 4, Framer Motion, GSAP
- **Deploy:** Vercel (auto-deploy z GitHub)
- **Dizajn:** Dark theme, sporty, dynamic animácie
- **Jazyk:** Anglicky (medzinárodný dosah)
- **Cieľ:** Predaj kurzov — transparentné pricing na webe

---

## Kontakt / Pôvodné dáta

- **Web:** eduprosport.com (starý WordPress)
- **Tel:** +421 903 305 178
- **Email:** info@eduprosport.com
- **Brand farba:** #046bd2 (modrá)
- **Logo:** https://www.eduprosport.com/wp-content/uploads/2023/11/logo_hdceurope_header.png
