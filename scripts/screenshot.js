const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function takeScreenshots() {
  const dir = path.join(__dirname, "..", "temp_screenshots");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Navigating to localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 30000 });

  // Full page screenshot
  await page.screenshot({ path: path.join(dir, "full_page.png"), fullPage: true });
  console.log("Saved: full_page.png");

  // Individual sections
  const sections = [
    "hero",
    "social-proof",
    "about",
    "courses",
    "pricing",
    "lecturers",
    "certifications",
    "testimonials",
    "cta",
  ];

  for (const section of sections) {
    const el = await page.$(`#${section}`);
    if (el) {
      await el.screenshot({ path: path.join(dir, `${section}.png`) });
      console.log(`Saved: ${section}.png`);
    } else {
      console.log(`Section #${section} not found, skipping.`);
    }
  }

  await browser.close();
  console.log("Done! Screenshots saved to temp_screenshots/");
}

takeScreenshots().catch(console.error);
