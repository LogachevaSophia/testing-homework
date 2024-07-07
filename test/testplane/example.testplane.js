describe('Функциональные требования', function () {
    const test_url = 'http://localhost:3000/hw/store/'
   
    describe('Страницы:', function () {

        it('в магазине должны быть страницы: главная, каталог, условия доставки, контакты', async ({browser}) => {
            //подготовка
            await browser.url(test_url);

            const expectedPages = ['Catalog', 'Delivery', 'Contacts'];

            const linkElements = await browser.$$('.navbar-nav .nav-link');
            const links = await Promise.all(linkElements.map(async (el) => {
                const text = await el.getText();
                return text.trim(); // Удаляем лишние пробелы вокруг текста ссылки
            }));

            //действия

            //проверка
            expectedPages.forEach(expectedPage => {
                expect(links).toContain(expectedPage);
            });
        })
        it('страницы главная, условия доставки, контакты должны иметь статическое содержимое', async ({browser})=>{

        })

    })

});
