// describe('Общие требования:', function () {
//     const test_url = 'http://localhost:3000/hw/store/'
//     it('в шапке отображаются ссылки на страницы магазина, а также ссылка на корзину', async ({ browser }) => {
//         // подготовка 
//         await browser.url(test_url);


//         const linkElements = await browser.$$('.navbar-nav .nav-link');

//         const links = await Promise.all(linkElements.map(async (el) => {
//             const text = await el.getText();
//             const href = await el.getAttribute('href');
//             return { text, href };
//         }));


//         //действия

//         //проверки

//         const expectedLinks = [
//             { text: 'Catalog', href: '/hw/store/catalog' },
//             { text: 'Delivery', href: '/hw/store/delivery' },
//             { text: 'Contacts', href: '/hw/store/contacts' },
//             { text: 'Cart', href: '/hw/store/cart' }
//         ];
//         expectedLinks.forEach(expectedLink => {
//             const match = links.find(link => link.text === expectedLink.text && link.href === expectedLink.href);
//             expect(match).toExist();
//         });




//     });


//     it('название магазина в шапке должно быть ссылкой на главную страницу', async ({ browser }) => {
//         // подготовка
//         await browser.url(test_url);

//         //проверка, что в шапке ссылка на главную страницу
//         const link = await browser.$('.navbar .Application-Brand.navbar-brand');
//         const linkHref = await link.getAttribute('href') 
//         expect(linkHref).toEqual('/hw/store')

//     })

//     it('на ширине меньше 576px навигационное меню должно скрываться за "гамбургер', async ({ browser }) => {

//         // подготовка
        
       
//         await browser.url( `http://localhost:3000/hw/store/catalog/0`);
//         await browser.setWindowSize(575, 800);

//         const navbarToggler = await browser.$('.navbar-toggler');
//         const isTogglerDisplayed = await navbarToggler.isDisplayed();

//         //проверка
//         expect(isTogglerDisplayed).toBeTruthy();



//     })
//     it('при выборе элемента из меню "гамбургера", меню должно закрываться', async ({browser}) => {
        
//         //подготовка
//         //bug_id = 4
//         const bug_id = 4;
//         await browser.url(`http://localhost:3000/hw/store/catalog/0`);
//         await browser.setWindowSize(575, 800);

//         const button = await browser.$('.navbar button.navbar-toggler');
//         const menu = await browser.$('.Application-Menu.navbar-collapse');

//         const item = await browser.$('.navbar .nav-link');

//         //действия
//         await button.click();
//         await item.click();


//         //проверка
//         const isMenuDisplayed = await menu.isDisplayed();

//         expect(isMenuDisplayed).toBeFalsy();
//     })
// })


///////////////////////////////////////////////////////
describe("Общие требования:", function () {
    const path = `http://localhost:3000/hw/store?bug_id=${
      process.env.BUG_ID || 0
    }`;
  
    it("на ширине меньше 576px навигационное меню должно скрываться за 'гамбургер'", async function () {
      this.browser.setWindowSize(480, 20000);
      await this.browser.url(path);
  
      await this.browser.assertView("navbar", ".navbar");
    });
  
    it("при клике по 'гамбургеру', меню должно открываться", async function () {
      this.browser.setWindowSize(480, 20000);
      await this.browser.url(path);
  
      await (await this.browser.$(".navbar-toggler")).click();
      await this.browser.pause(200);
  
      await this.browser.assertView("navbar", ".navbar");
    });
  
    it("при повторном клике по 'гамбургеру', меню должно закрываться", async function () {
      this.browser.setWindowSize(480, 20000);
      await this.browser.url(path);
  
      await (await this.browser.$(".navbar-toggler")).click();
      await (await this.browser.$(".navbar-toggler")).click();
      await this.browser.pause(200);
  
      await this.browser.assertView("navbar", ".navbar");
    });
  
    it("при выборе элемента из меню 'гамбургера', меню должно закрываться", async function () {
      this.browser.setWindowSize(480, 20000);
      await this.browser.url(path);
  
      await this.browser.$(".navbar-toggler").click();
      await this.browser.$(".nav-link[href='/hw/store/contacts']").click();
  
      await this.browser.assertView("navbar", ".navbar");
    });
  });