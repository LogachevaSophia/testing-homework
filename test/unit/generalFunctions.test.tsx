import React from "react";
import { createApp } from "../utils/createApplication"
import { act, render } from "@testing-library/react";


describe('Общие требования', () => {

    it('в шапке отображаются ссылки на страницы магазина, а также ссылка на корзину', async () => {
        const { App } = createApp();
        const { findAllByRole } = render(<App />);

        //страница главная P.S. i - влияние на регистр
        await findAllByRole("link", {
            name: /store/i,
        });

        //страница доставки
        await findAllByRole("link", {
            name: /delivery/i,
        });

        //страница каталога
        await findAllByRole("link", {
            name: /catalog/i,
        });

        //страница контактов
        await findAllByRole("link", {
            name: /contacts/i,
        });

        //страница корзины
        await findAllByRole("link", {
            name: /cart/i,
        });
    })
    it('название магазина в шапке должно быть ссылкой на главную страницу', async() => {
       
        const { App } = createApp();
        const { findByText } = render(<App />);

        const homeLink = await findByText('Kogtetochka store');
        expect(homeLink.getAttribute("href")).toBe('/')

        
    })

})