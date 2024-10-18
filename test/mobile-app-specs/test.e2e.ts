import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        var color = await $("id=color");
        await color.waitForDisplayed({ timeout: 30000 });
        await color.click();
        await color.click();
    })
})

