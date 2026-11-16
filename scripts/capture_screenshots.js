import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function run() {
  const screenshotsDir = path.resolve(process.cwd(), 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('Launching headless Chromium with WebGL2 flags...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: [
      '--headless=new',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--no-sandbox',
      '--disable-gpu-sandbox',
    ],
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Browser Console Error:', msg.text());
    }
  });

  const url = 'http://localhost:5173';
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000); // Allow WebGL scene to settle and animate

  // 1. Main Viewport & Mechanics Orbit
  console.log('Capturing 01_reality_engine_laboratory_view.png...');
  await page.screenshot({ path: path.join(screenshotsDir, '01_reality_engine_laboratory_view.png') });

  // 2. Switch to Electromagnetism
  console.log('Switching to Electromagnetism domain...');
  const emButton = page.locator('button:has-text("E & B Fields")');
  if (await emButton.count() > 0) {
    await emButton.click();
    await page.waitForTimeout(2500);
    console.log('Capturing 02_lorentz_magnetic_cyclotron.png...');
    await page.screenshot({ path: path.join(screenshotsDir, '02_lorentz_magnetic_cyclotron.png') });
  }

  // 3. Switch to 3D Collisions
  console.log('Switching to 3D Collisions domain...');
  const collButton = page.locator('button:has-text("3D Collisions")');
  if (await collButton.count() > 0) {
    await collButton.click();
    await page.waitForTimeout(2000);
    console.log('Capturing 03_elastic_collisions_momentum_relay.png...');
    await page.screenshot({ path: path.join(screenshotsDir, '03_elastic_collisions_momentum_relay.png') });
  }

  // 4. Switch to Fluid Dynamics
  console.log('Switching to Fluid Dynamics domain...');
  const fluidButton = page.locator('button:has-text("Fluid Dynamics")');
  if (await fluidButton.count() > 0) {
    await fluidButton.click();
    await page.waitForTimeout(2000);
    console.log('Capturing 04_archimedes_buoyancy_fluid_equilibrium.png...');
    await page.screenshot({ path: path.join(screenshotsDir, '04_archimedes_buoyancy_fluid_equilibrium.png') });
  }

  // 5. Open Concept Compendium
  console.log('Opening Concept Compendium Drawer...');
  const conceptsBtn = page.locator('button:has-text("Concepts")');
  if (await conceptsBtn.count() > 0) {
    await conceptsBtn.click();
    await page.waitForTimeout(1500);
    console.log('Capturing 05_concept_compendium_120_encyclopedia.png...');
    await page.screenshot({ path: path.join(screenshotsDir, '05_concept_compendium_120_encyclopedia.png') });
    // Also save legacy name for backward compatibility
    await page.screenshot({ path: path.join(screenshotsDir, '05_concept_compendium_84_encyclopedia.png') });
    // Close drawer
    const closeBtn = page.locator('[data-testid="close-concepts"]');
    if (await closeBtn.count() > 0) {
      await closeBtn.click();
    }
    await page.waitForTimeout(500);
  }

  // 6. Open Historic Guided Labs Modal
  console.log('Opening Historic Guided Labs Modal...');
  const labsBtn = page.locator('button:has-text("Historic Labs")');
  if (await labsBtn.count() > 0) {
    await labsBtn.click();
    await page.waitForTimeout(1500);
    console.log('Capturing 06_guided_historic_labs_dossier.png...');
    await page.screenshot({ path: path.join(screenshotsDir, '06_guided_historic_labs_dossier.png') });
    const closeLabs = page.locator('[data-testid="close-labs"]');
    if (await closeLabs.count() > 0) {
      await closeLabs.click();
    }
    await page.waitForTimeout(500);
  }

  // 7. Telemetry & Live KaTeX formula
  console.log('Capturing 07_live_katex_formula_telemetry.png...');
  await page.screenshot({ path: path.join(screenshotsDir, '07_live_katex_formula_telemetry.png') });

  // 8. Open Lab Report Modal
  console.log('Opening Lab Report Modal...');
  const reportBtn = page.locator('button[title="Open Lab Observation Report"]');
  if (await reportBtn.count() > 0) {
    await reportBtn.click();
    await page.waitForTimeout(1500);
    console.log('Capturing 08_laboratory_observation_report.png...');
    await page.screenshot({ path: path.join(screenshotsDir, '08_laboratory_observation_report.png') });
  }

  console.log('All 8 high-resolution screenshots captured successfully!');
  await browser.close();
}

run().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
