# Setup Instructions — EduProSport Website Build

## Predtým ako začneš v Claude Code, urob tieto kroky:

---

## KROK 0: Príprava prostredia

### VS Code + Claude Code Extension
1. Otvor VS Code
2. Nainštaluj Claude Code extension (Extensions → search "Claude Code")
3. Prihlás sa cez Anthropic účet (Pro alebo Max)
4. Otvor tento folder ako projekt v VS Code

### Zapni Bypass Permissions (voliteľné ale odporúčané)
1. VS Code → Settings → hľadaj "claude code"
2. Nájdi "Allow Dangerously Skip Permissions" → zapni
3. ⚠️ Buď opatrný — Claude bude robiť bez pýtania

---

## KROK 1: Nainštaluj Front-End Design Skill (Hack #1)

Skopíruj a vlož do Claude Code:

```
Install the front-end design skill. Run these commands:

npx @anthropic-ai/claude-code-skill install frontend-design

If that doesn't work, try:

curl -sL https://raw.githubusercontent.com/anthropics/claude-code-skills/main/frontend-design/install.sh | bash
```

**Overenie:** Po inštalácii by Claude Code mal automaticky invokovať front-end design skill pred akýmkoľvek frontendovým kódom.

---

## KROK 2: Nastav Node.js projekt

Skopíruj do Claude Code:

```
Initialize a new Next.js 16 project in this directory with:
- TypeScript
- Tailwind CSS 4
- App Router
- src/ directory
- ESLint

Then install these additional dependencies:
- framer-motion (for animations)
- gsap (for advanced animations)
- puppeteer (for screenshots)
- lucide-react (for icons)
- @fontsource/inter (font)
- @fontsource/space-grotesk (font)

Use npm, not yarn or pnpm.
```

---

## KROK 3: Stiahni assets zo starého webu

Skopíruj do Claude Code:

```
Download these images from the old website and save them to brand_assets/images/:

1. Logo: https://www.eduprosport.com/wp-content/uploads/2023/11/logo_hdceurope_header.png → save as logo/logo_hdceurope_header.png

2. Team photos:
   - https://www.eduprosport.com/wp-content/uploads/2023/11/team_eugen_laczo.jpg → save as images/team_eugen_laczo.jpg
   - https://www.eduprosport.com/wp-content/uploads/2023/11/team_noro_javorcik.jpg → save as images/team_noro_javorcik.jpg
   - https://www.eduprosport.com/wp-content/uploads/2023/11/team_milan-kabat.jpg → save as images/team_milan-kabat.jpg

Use curl or wget to download them.
```

---

## KROK 4: Pridaj Midjourney obrázky

1. Otvor `midjourney_prompts/ALL-PROMPTS.md`
2. Použi prompty v Midjourney na vygenerovanie obrázkov
3. Uloži výsledky do `brand_assets/images/` s presným názvom z promptov
4. **Minimum potrebné na start:** hero-bg.png, course-coaching.png, course-players.png

---

## KROK 5: Nastav Puppeteer Screenshot Script

Skopíruj do Claude Code:

```
Create the screenshot script at scripts/screenshot.js based on the CLAUDE.md instructions. Make sure it:
1. Creates temp_screenshots/ directory if it doesn't exist
2. Takes full page screenshot
3. Takes individual section screenshots
4. Names them descriptively
5. Works with localhost:3000
```

---

## KROK 6: Nastav Git + GitHub

Skopíruj do Claude Code:

```
Initialize a git repository for this project. Create a .gitignore that excludes:
- node_modules/
- .next/
- temp_screenshots/
- .env
- .env.local

Create an initial commit with the project setup.
Do NOT push to GitHub yet — I will tell you when.
```

---

## Hotovo! Teraz môžeš začať buildovať.

Pokračuj s promptami z `STEP-BY-STEP-PROMPTS.md` — krok za krokom.
