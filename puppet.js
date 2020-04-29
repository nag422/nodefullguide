const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://reelnreel.com');
  await page.pdf({path: 'C:/Users/Dell/Desktop/reelnreel.pdf', format: 'A4'});

  await browser.close();
})();