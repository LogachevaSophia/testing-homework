describe("Страница продукта:", function () {
    const path = `http://localhost:3000/hw/store/catalog/3?bug_id=${process.env.BUG_ID || 0
        }`;
    it("содержимое корзины должно сохраняться между перезагрузками страницы", async function () {
        await this.browser.setWindowSize(480, 2000);
        await this.browser.url(path);

        await this.browser.$(".ProductDetails-AddToCart").click();
        await this.browser.refresh();
        await this.browser.pause(200);

        expect(await this.browser.$(".CartBadge").isExisting()).toBeTruthy();
    });
    it("на странице должны отображаться данные по товару (название)", async ({ browser }) => {

        //bug_id = 3
        await browser.url(path);
        const products = await browser.$(".ProductDetails");
        const productsExists = await products.isExisting();
        expect(productsExists).toBe(true);
        if (productsExists) {
            const title = await products.$('.ProductDetails-Name')
            await expect(title).toBeDisplayed();
        }


    })
    it("Кнопка 'добавить в корзину должна быть большой'", async ({ browser }) => {

        //bug_id = 9
        browser.url(path)

        const button = await browser.$('.ProductDetails-AddToCart')
        const buttonExists = await button.isExisting();
        expect(buttonExists).toBe(true);
        if (buttonExists) {
            const buttonClass = await button.getAttribute('class');
            expect(buttonClass.split(' ').includes('btn-lg')).toBe(true);
        }


    })
})