describe("Страница каталога:", function () {
    const path = `http://localhost:3000/hw/store/catalog?bug_id=${process.env.BUG_ID || 0
        }`;
    it("каждый товар должен отображать название, цену и ссылку на страницу с подробной информацией", async ({
        browser,
    }) => {
        //bug_id = 1
        await browser.url(path);

        const products = await browser.$$(".ProductItem");

        for (let product of products) {
            const productName = await product.$(".ProductItem-Name");
            const productPrice = await product.$(".ProductItem-Price");
            const productLink = await product.$(".ProductItem-DetailsLink");

            await expect(productName).toBeDisplayed();
            await expect(productPrice).toBeDisplayed();
            await expect(productLink).toBeDisplayed();

            const linkHref = await productLink.getAttribute("href");
            await expect(linkHref).toMatch(/\/hw\/store\/catalog\/\d+/);
        }
    });

    


})