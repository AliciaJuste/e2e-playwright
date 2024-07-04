import { Before, After, setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext, devices } from 'playwright';

//let browser: Browser;

class CustomWorld extends World {
  browser?: Browser;
  page?: Page;
  context?: BrowserContext;
  URL: string = 'https://www.saucedemo.com/';

  constructor(options: any) {
    super(options);
    //this.browser = null;
    //this.page = options.page;
    //this.context = options.context;
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60000);

Before(async function() {
  // Launch browser in headless mode
  this.browser = await chromium.launch({ headless: true });

  // Define viewport size based on the environment variable VIEWPORT
  let device = {};
  if (process.env.VIEWPORT === 'mobile') {
    device = devices['iPhone 12'];
  } else {
    device = devices['Desktop Chrome'];
  }

  // Create context with video recording based on the viewport
  this.context = await this.browser.newContext({
    ...device,
    recordVideo: {
      dir: `src/videos/${process.env.VIEWPORT}`, // Save videos in separate folders based on VIEWPORT
    }
  });

  // Create a new page in the context
  this.page = await this.context.newPage();
});

After(async function() {
  // Close the page and browser context if they exist
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();

  }
  if (this.browser) {
    await this.browser.close();
  }
});


