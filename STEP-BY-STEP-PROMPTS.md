# Step-by-Step Claude Code Prompts — EduProSport Website Build

## Ako používať tento súbor

1. Otvor Claude Code vo VS Code
2. Skopíruj a vlož každý prompt postupne
3. Počkaj kým Claude Code dokončí pred ďalším krokom
4. Po každom kroku skontroluj výsledok na localhost:3000
5. Ak niečo nie je OK → oprav promptom pred pokračovaním

---

## PROMPT 1: Projekt Setup + Tailwind Config

```
Read the CLAUDE.md file first. Then set up this Next.js project:

1. Initialize Next.js 16 with TypeScript, Tailwind CSS 4, App Router, src/ directory
2. Install: framer-motion, gsap, puppeteer, lucide-react
3. Configure tailwind.config.ts with these custom colors from CLAUDE.md (the full dark theme palette)
4. Set up Google Fonts (Inter + Space Grotesk) in the layout
5. Create a global CSS file with the color variables from brand-guidelines.md
6. Set up the basic layout with dark background (#0A0E17)
7. Create the temp_screenshots/ directory and scripts/screenshot.js from CLAUDE.md

Start the dev server on localhost:3000 and verify it loads with the dark background.
```

---

## PROMPT 2: Navigation Component

```
Build the sticky navigation bar for our website. Requirements:

- Dark background (#1F2937) with blur backdrop
- Logo on the left (use brand_assets/logo/logo_hdceurope_header.png)
- Center menu: Home, Courses, About, Certifications, Contact
- Right side: "Enroll Now" CTA button with cyan gradient glow
- Sticky on scroll with shadow appearance
- Mobile: hamburger menu with slide-in drawer
- Use Framer Motion for smooth open/close animation
- Add subtle border-bottom on scroll

Check the screenshot after building. Compare against MasterClass.com nav style (dark, minimal, premium).
```

---

## PROMPT 3: Hero Section

```
Build the hero section. This is the MOST IMPORTANT section — it needs to be stunning.

Requirements:
- Full viewport height (100vh)
- Dark background with animated gradient/shader effect (browse 21st.dev for background components — look for "aurora", "gradient", or "particle" backgrounds)
- Main headline: "Internationally Certified Hockey Performance System"
- Subtitle: "From coach preparation through player education to measurable performance growth. Join the leading hockey development program in Europe."
- Primary CTA: "Start Your Certification" — cyan gradient, glow pulse animation
- Secondary CTA: "Explore Courses" — ghost button, cyan border
- Stats bar below CTAs: "15+ Countries | 500+ Coaches Certified | 7 Course Programs"
- Badge: "Trusted by hockey centers across Europe"
- Use Framer Motion for text reveal (stagger children)
- Use GSAP for the background animation
- If using a Midjourney hero image, layer it with a dark overlay

IMPORTANT: For the animated background, do NOT use the screenshot tool to compare. Just build it and show me on localhost.

Start localhost and take a screenshot of the hero when done.
```

---

## PROMPT 4: Social Proof / Marquee Bar

```
Build a social proof marquee bar below the hero. Requirements:

- Auto-scrolling horizontal marquee (infinite loop)
- Content: partner logos or country flags with names
- Dark background slightly different from hero (#111827)
- Include: Slovakia, Czech Republic, Austria, Finland, Switzerland, Germany, Russia
- Add subtle glow/gradient at edges (fade effect)
- Framer Motion or CSS animation for smooth scroll
- Pause on hover

Take a screenshot when done.
```

---

## PROMPT 5: Value Proposition Section

```
Build the "Why HDC Europe" section with our 4 messaging pillars. Requirements:

- Section id="about"
- Background: #0A0E17
- Section header: "Why Choose HDC Europe?" centered, with subtitle
- 4 feature cards in a 2x2 grid (responsive: 1 column mobile, 2 desktop):

  1. **International Standard** — "Courses designed by international hockey standards" — icon: Globe
  2. **Measurable Growth** — "Concrete metrics for player performance improvement" — icon: TrendingUp
  3. **Certified Training** — "Recognized certifications for coaches" — icon: Award
  4. **Complete Ecosystem** — "From coaches through players to parents" — icon: Users

- Cards: dark bg (#111827), rounded-2xl, hover scale + border glow (cyan)
- Each card has icon (lucide-react), title, description
- Framer Motion: fade-in + slide-up on scroll (whileInView)
- Use Space Grotesk for any numbers/stats in cards

Take a screenshot when done.
```

---

## PROMPT 6: Course Categories Section

```
Build the course categories section. Requirements:

- Section id="courses"
- Background: #111827
- Header: "Our Programs" with subtitle "Specialized education for every role in hockey"
- 4 category cards:

  1. **For Coaches** — 6 courses (CC001-CC006) — "Master advanced coaching methodologies"
  2. **For Players** — Training programs — "Elevate your game with scientific methods"
  3. **For Hockey Centers** — Center-wide programs — "Transform your hockey center operations"
  4. **For Parents** — Nutrition & support (PC001) — "Support your young player's development"

- Card design: large image top (use Midjourney images or placeholder), content below
- Each card shows: category name, course count, brief description, "View Courses →" link
- Cards have dramatic hover: scale(1.03), shadow-2xl, border glow
- Mobile: stack vertically
- Framer Motion: stagger animation on scroll

Take a screenshot when done.
```

---

## PROMPT 7: Featured Courses with Pricing

```
Build the featured courses section with VISIBLE PRICING. Requirements:

- Section id="pricing"
- Background: #0A0E17
- Header: "Course Catalog" with subtitle "Transparent pricing, world-class education"
- Display all courses from CLAUDE.md data as a grid of cards:

  CC001-CC006 (Coaches) and PC001 (Players/Parents)

- Each card shows: course code badge, title, target audience tag, description, price (use placeholder €299-€999 range), "Enroll Now" button
- Highlight one course as "Most Popular" with special border/badge
- Include filter tabs at top: All | Coaches | Players | Centers
- Pricing: clearly visible, bold, Space Grotesk font
- Cards: dark bg, hover effects, consistent sizing

Take a screenshot when done.
```

---

## PROMPT 8: Lecturers / Team Section

```
Build the lecturers section with REAL DATA from CLAUDE.md. Requirements:

- Section id="lecturers"
- Background: #111827
- Header: "World-Class Lecturers" with subtitle "Learn from Olympic-level experts"
- 3 lecturer cards with REAL data:

  1. Prof. PhDr. Eugen Laczo, PhD. — University professor, Olympics trainer (Salt Lake City, Sydney), HC Slovan Bratislava
     Photo: brand_assets/images/team_eugen_laczo.jpg

  2. Mgr. Norbert Javorčík — HDC Europe Director, Slovakia U17/U20/U18 coach, World Championship bronze
     Photo: brand_assets/images/team_noro_javorcik.jpg

  3. Mgr. Milan Kabát, PhD. — Sports Education PhD, performance diagnostics specialist
     Photo: brand_assets/images/team_milan-kabat.jpg

- Card design: large circular photo, name, title, key credentials as badges/pills
- Dark premium feel — think award ceremony cards
- Framer Motion animations on scroll

Take a screenshot when done.
```

---

## PROMPT 9: Certifications Section

```
Build the certifications section. Requirements:

- Section id="certifications"
- Background: #0A0E17
- Header: "Your Path to Certification" with subtitle
- Show a horizontal process/steps flow:
  1. Choose Your Course → 2. Complete Training → 3. Pass Theory & Practical Test → 4. Receive HDC Certificate
- Visual: connected dots/steps with icons, animated progress on scroll
- Below the steps: certification badge image (use Midjourney cert-badge.png or placeholder)
- Key benefit: "Become a certified trainer for hockey centers worldwide"
- CTA: "Start Your Journey" button

Take a screenshot when done.
```

---

## PROMPT 10: Testimonials Section

```
Build the testimonials section. Requirements:

- Section id="testimonials"
- Background: #111827
- Header: "What Our Graduates Say"
- Carousel/slider with 3-4 testimonials (use placeholder content for now):

  1. "HDC Europe's certification transformed how I coach. The international standards gave me credibility with top clubs." — Coach from Czech Republic
  2. "The systematic approach to player development is unmatched. My players' metrics improved 40% in one season." — Hockey Center Director, Austria
  3. "Prof. Laczo's expertise in conditioning was a game-changer for our training program." — Head Coach, Finland

- Card design: quote text, author name, role, country flag
- Auto-play carousel with manual navigation dots
- Dark cards with subtle cyan accent on active

Take a screenshot when done.
```

---

## PROMPT 11: CTA Section

```
Build the final call-to-action section. Requirements:

- Section id="cta"
- Full-width, background image with dark overlay (use cta-bg.png or gradient)
- Headline: "Ready to Elevate Your Hockey Program?"
- Subtitle: "Join 500+ certified coaches across 15 European countries"
- Email input + "Get Started" button (inline form)
- Below: "Or call us directly: +421 903 305 178"
- GSAP animation: text reveal on scroll

Take a screenshot when done.
```

---

## PROMPT 12: Footer

```
Build the footer. Requirements:

- Dark bg (#0A0E17), subtle top border
- 4 columns:
  1. Logo + brief description + social links (Facebook, YouTube, VK)
  2. Quick Links: Home, Courses, Certifications, About, Contact
  3. Courses: For Coaches, For Players, For Centers, For Parents
  4. Contact: Phone (+421 903 305 178), Email (info@eduprosport.com), Address (Bratislava, Slovakia)
- Bottom bar: copyright 2024 HDC Europe, Privacy Policy, Terms

Take a screenshot when done.
```

---

## PROMPT 13: Subpages — Courses Page

```
Build the /courses page. Requirements:

- Reuse nav and footer components
- Hero banner: smaller (40vh), "All Courses" title
- Filter bar: tabs for Coaches | Players | Centers | Parents | All
- Course grid: all 7 courses as cards with full details
- Each card links to /courses/[slug]
- Sidebar or top: search/filter by audience

Take screenshots when done.
```

---

## PROMPT 14: Subpages — Contact Page

```
Build the /contact page. Requirements:

- Hero banner: "Get In Touch"
- Contact form: Name, Email, Phone, Subject (dropdown: Course Inquiry, Certification, Partnership, Other), Message
- Right side: contact details, map embed (Bratislava, Slovakia), office hours
- Form validation with React Hook Form + Zod
- Success state animation

Take screenshots when done.
```

---

## PROMPT 15: Subpages — About Page

```
Build the /about page. Requirements:

- Hero banner: "About HDC Europe"
- Story section: mission, vision, history
- Team section (reuse lecturers component)
- Stats section: animated counters (countries, coaches, courses, years)
- Partners section
- CTA section

Take screenshots when done.
```

---

## PROMPT 16: Final Polish

```
Now do a FULL review of the entire site. Read the CLAUDE.md and brand-guidelines.md again.

1. Take full-page screenshots of every page
2. Compare against brand guidelines (colors, typography, spacing)
3. Check all animations work smoothly
4. Verify mobile responsiveness (take screenshots at 375px, 768px, 1440px widths)
5. Check all links work
6. Verify SEO meta tags on all pages
7. Add og:image, title, description to all pages
8. Performance check — no layout shifts, images optimized

Fix ALL issues found. This is the final polish before deploy.
```

---

## PROMPT 17: Deploy to Vercel

```
We're ready to deploy. Please:

1. Create a .gitignore (exclude node_modules, .next, temp_screenshots, .env)
2. Initialize git repo
3. Create initial commit with all files
4. Create a GitHub repository called "eduprosport-website"
5. Push to GitHub
6. Guide me through connecting to Vercel for auto-deploy

After this, every time I tell you to push changes, push to GitHub and Vercel will auto-deploy.
```

---

## BONUS PROMPTS

### Pridaj 21st.dev komponent (Hack #4)
```
I want to add a [COMPONENT TYPE] from 21st.dev to the [SECTION] section. Here's the code: [PASTE CODE FROM 21st.dev]. Work this into the existing design. Because this is an animated component, do not use the screenshot tool to compare — just code it and I'll check manually.
```

### Iterácia na dizajne
```
Looking at the [SECTION] section on localhost — [DESCRIBE ISSUE]. Please fix this: [SPECIFIC CHANGES]. Take a screenshot after changes.
```

### Update brand colors
```
I want to update the color scheme. Change [OLD COLOR] to [NEW COLOR] across all components and the Tailwind config. Make sure it's consistent everywhere.
```
