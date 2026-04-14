# HDC Europe / EduProSport — Brand Guidelines

## 1. Brand Identity

**Full Name:** HDC Europe — Hockey Development Center Education
**Website:** eduprosport.com
**Tagline:** "Internationally certified system for hockey performance"
**Industry:** Hockey education, coaching certification, player development
**Reach:** International (Europe-wide)
**Primary Language:** English

---

## 2. Logo

**Current logo:** `logo/logo_hdceurope_header.png`
**Source URL:** https://www.eduprosport.com/wp-content/uploads/2023/11/logo_hdceurope_header.png

### Logo Usage Rules
- Always use on dark backgrounds (preferred) or white backgrounds
- Minimum clear space: 1x logo height on all sides
- Never stretch, rotate, or recolor the logo
- For dark backgrounds, use white/light version if available

---

## 3. Color Palette

### Primary Colors
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Brand Blue | ![#046bd2](https://via.placeholder.com/15/046bd2/046bd2.png) | `#046bd2` | Logo, primary buttons, links |
| Brand Blue Dark | ![#045cb4](https://via.placeholder.com/15/045cb4/045cb4.png) | `#045cb4` | Hover states, gradients |

### New Design System Colors (Dark Theme)
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Bg Dark | ![#0A0E17](https://via.placeholder.com/15/0A0E17/0A0E17.png) | `#0A0E17` | Main page background |
| Bg Card | ![#111827](https://via.placeholder.com/15/111827/111827.png) | `#111827` | Card backgrounds, sections |
| Bg Elevated | ![#1F2937](https://via.placeholder.com/15/1F2937/1F2937.png) | `#1F2937` | Elevated surfaces, nav |
| Cyan Accent | ![#00E5FF](https://via.placeholder.com/15/00E5FF/00E5FF.png) | `#00E5FF` | CTAs, highlights, active states |
| Orange Accent | ![#FF6B35](https://via.placeholder.com/15/FF6B35/FF6B35.png) | `#FF6B35` | Urgency, pricing, stats |
| Text Primary | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) | `#FFFFFF` | Headlines, primary text |
| Text Secondary | ![#94A3B8](https://via.placeholder.com/15/94A3B8/94A3B8.png) | `#94A3B8` | Body text, descriptions |
| Ice Blue | ![#E0F2FE](https://via.placeholder.com/15/E0F2FE/E0F2FE.png) | `#E0F2FE` | Subtle accents, ice theme |
| Success | ![#10B981](https://via.placeholder.com/15/10B981/10B981.png) | `#10B981` | Success states, checkmarks |

### Gradient Presets
```css
/* Hero gradient */
background: linear-gradient(135deg, #0A0E17 0%, #046bd2 50%, #0A0E17 100%);

/* Card gradient */
background: linear-gradient(180deg, #111827 0%, #1F2937 100%);

/* CTA gradient */
background: linear-gradient(90deg, #046bd2 0%, #00E5FF 100%);

/* Ice accent gradient */
background: linear-gradient(90deg, #046bd2 0%, #E0F2FE 100%);
```

---

## 4. Typography

### Font Stack
| Role | Font | Weight | Size Range |
|------|------|--------|------------|
| H1 (Hero) | Inter / Montserrat | 800 (ExtraBold) | 48–80px |
| H2 (Section) | Inter | 700 (Bold) | 36–48px |
| H3 (Subsection) | Inter | 600 (SemiBold) | 24–30px |
| Body | Inter | 400 (Regular) | 16–18px |
| Small / Caption | Inter | 400 | 12–14px |
| Stats / Numbers | Space Grotesk | 700 | 36–64px |
| Code / Technical | JetBrains Mono | 400 | 14px |

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

---

## 5. Brand Voice & Tone

### Voice Attributes (TARGET — improved from current)
| Attribute | Level | Description |
|-----------|-------|-------------|
| Formalita | HIGH | Professional, expert-level communication |
| Autorita | HIGH | Back claims with credentials and data |
| Energia | HIGH | Dynamic, motivating, action-oriented |
| Emocionalita | MEDIUM | Inspiring but fact-based |
| Inovácia | HIGH | Forward-thinking, modern approach |

### Power Words
**Nouns:** Mastery, Certification, System, Transformation, Performance Growth
**Verbs:** Develop, Certify, Master, Transform, Achieve, Elevate
**Values:** Hard work, Focus, International Standard, Community, Results

### Tone Rules
- Lead with results and credentials
- Use active voice: "We train champions" not "Training is provided"
- Include specific numbers where possible
- Avoid generic phrases like "professional training" — be specific about WHAT makes it professional
- CTA language: "Start Your Certification" > "Learn More" | "Enroll Now" > "Contact Us"

---

## 6. Imagery Style

### Photography
- Dark, moody lighting — stadium/rink atmosphere
- Action shots preferred over posed photos
- High contrast, slightly desaturated with blue tint
- Show real training moments, not stock photos

### Midjourney Style Guide
- **Style keywords:** cinematic, dramatic lighting, ice hockey, dark atmosphere, professional sports photography, --ar 16:9 --style raw
- **Color grading:** Cool blue tones, dark backgrounds, cyan highlights
- **Subjects:** Hockey training, coaches with players, ice rink interiors, equipment

---

## 7. Iconography

- **Style:** Outlined, 2px stroke, rounded caps
- **Library:** Lucide React or Heroicons
- **Color:** `#94A3B8` (default) → `#00E5FF` (active/hover)
- **Size:** 24px default, 20px small, 32px feature icons

---

## 8. Component Patterns

### Buttons
- **Primary:** Blue gradient bg, white text, glow effect on hover, rounded-xl
- **Secondary:** Transparent bg, cyan border, cyan text, rounded-xl
- **Ghost:** No border, text-only, underline on hover

### Cards
- Dark bg (#111827), rounded-2xl, subtle border (#1F2937)
- Hover: scale(1.02), increased shadow, border glow
- Image top, content bottom pattern

### Sections
- Full-width, alternating bg tones (#0A0E17 ↔ #111827)
- Max-width container: 1280px
- Section padding: py-24 (desktop), py-16 (mobile)
- Section header: centered, H2 + subtitle
