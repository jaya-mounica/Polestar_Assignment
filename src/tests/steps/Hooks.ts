import { Before, After } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pagefixture } from "./Pagefixture";
import checkingmenuPage from "../../../pages/checkingmenuPage";
import loginPage from "../../../pages/loginPage";

let page: Page
let browser: Browser

Before(async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    pagefixture.page = page;
    pagefixture.verifypolestarmenu = new checkingmenuPage(pagefixture.page);
    pagefixture.verifyLoginPage = new loginPage(pagefixture.page);
    
});

After(async function () {
   await  pagefixture.page.close();
await browser.close();
    
});

