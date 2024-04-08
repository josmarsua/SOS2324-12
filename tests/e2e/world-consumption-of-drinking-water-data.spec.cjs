const { test, expect, beforeAll, afterAll, beforeEach, afterEach } = require('@playwright/test');

let page;

beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

afterAll(async () => {
  await page.close();
});

beforeEach(async () => {
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  await page.click('#deleteAllButton');
  await page.waitForTimeout(500);
  await page.click('#deleteAllButtonConfirm');
  await page.waitForTimeout(10000);
});

afterEach(async () => {
  // Limpieza después de cada prueba si es necesario
});

test('has title SOS2324-12 Project', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:10000');
  await expect(page).toHaveTitle(/SOS2324-12 Project/);
});

test('load and list water data', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:10000/api/v2/world-consumption-of-drinking-water-data/loadInitialData');
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  await expect((await page.locator('.tarjetas-datos').all()).length).toBeGreaterThan(5);
});

test('delete resource', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:10000/api/v2/world-consumption-of-drinking-water-data/loadInitialData');
  await page.waitForTimeout(1000);
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  let resourceTitleBeforeDelete = await page.textContent('.tarjeta:first-child .card-title');
  await page.click('#deleteResourceButton');
  await page.waitForTimeout(1000);
  let resourceTitleAfterDelete = await page.textContent('.tarjeta:first-child .card-title');
  expect(resourceTitleAfterDelete).not.toEqual(resourceTitleBeforeDelete);
});
test('delete all resources', async () => {
  test.setTimeout(90000);
  await page.goto('http://localhost:10000/api/v2/world-consumption-of-drinking-water-data/loadInitialData');
  await page.waitForTimeout(1000);
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  let cardElements = await page.locator('.tarjetas-datos').count();
  expect(cardElements).toBeGreaterThan(5);
  await page.click('#deleteAllButton');
  await page.waitForTimeout(500);
  await page.click('#deleteAllButtonConfirm');
  await page.waitForTimeout(10000);
  let updatedCardElements = await page.locator('.tarjetas-datos').count();
  expect(updatedCardElements).toBe(0);
});

test('create resource', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:10000/api/v2/world-consumption-of-drinking-water-data/loadInitialData');
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data');
  await page.waitForLoadState('load');
  await page.click('text="Crear Nuevo Dato"');
  await page.waitForSelector('text="Crear dato"');
  await page.fill('#iso_code', 'POL');
  await page.fill('#country', 'Polonia');
  await page.fill('#year', '2024');
  await page.fill('#urban_improved_total', '3');
  await page.fill('#urban_improved_piped', '33');
  await page.fill('#urban_improved_other', '33');
  await page.fill('#urban_unimproved_other', '33');
  await page.fill('#rural_improved_total', '12');
  await page.fill('#rural_improved_piped', '32');
  await page.fill('#rural_improved_other', '3');
  await page.fill('#rural_unimproved_other', '21');
  await page.fill('#rural_unimproved_surface', '10');
  await page.fill('#total_improved_total', '78');
  await page.fill('#total_improved_piped', '13');
  await page.fill('#total_improved_other', '12');
  await page.fill('#total_unimproved_other', '34');
  await page.fill('#total_unimproved_surface', '14');
  await page.click('text="Crear"');
  let successMessage = await page.$('Se ha creado correctamente el post de iso_code POL');
  expect(successMessage).not.toBeNull();
});

test('edit resource', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:10000/api/v2/world-consumption-of-drinking-water-data/loadInitialData');
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data/1/CHL/2015');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  await page.fill('#urban_improved_other', '33');
  await page.click('button:text("Actualizar")');
  await page.waitForTimeout(1000);
  let successMessage = await page.$('text=El dato con iso_code CHL y year 2015 se ha actuallizado correctamente');
  expect(successMessage).not.toBeNull();
});


test('pagination works', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:10000/api/v2/world-consumption-of-drinking-water-data/loadInitialData');
  await page.goto('http://localhost:10000/world-consumption-of-drinking-water-data');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  let resourceTitleFirstPage = await page.textContent('.tarjeta:first-child .card-title');
  await page.click('button:has-text("Siguiente")');
  await page.waitForTimeout(1000);
  let resourceTitleSecondPage = await page.textContent('.tarjeta:first-child .card-title');
  expect(resourceTitleSecondPage).not.toEqual(resourceTitleFirstPage);
});
