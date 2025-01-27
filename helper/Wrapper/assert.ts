import { expect, page } from "@playwright/test";

export default class Assert{

    constructor(private page: page){}

    async assertTitle(title: string){
        await expect(this.page).toHaveTitle(title);
    }

    async assertTitleContains(title: string){
        const pageTitle =await this.page.title();
        expect(pageTitle).toContain(title);
    }
    
    async assertURL(URL: string){
        await expect(this.page).toHaveURL(URL);
    }

    async assertURLContains(title: string){
        const pageURL = this.page.url();
        expect(pageURL).toContain(title);
    }
}
