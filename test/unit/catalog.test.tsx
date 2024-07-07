import { findByRole, findByText, within } from "@testing-library/react";
import { createApp } from "../utils/createApplication";
import React from "react";
import { productsCart, productsShort } from "../utils/ExampleProducts";
import { CartApi, ExampleApi } from "../../src/client/api";
import { initStore } from "../../src/client/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Application } from "../../src/client/Application";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'

describe("Тестирование каталога", () => {
    const path = "/catalog";

    it("отображены товары, список которых приходит с сервера", async () => {
        const { App } = createApp(path);

        const { findAllByTestId } = render(<App />);


        await findAllByTestId(productsShort[0].id);
        await findAllByTestId(productsShort[1].id);
    });

    it("для каждого товара отображается название", async () => {
        const { App } = createApp(path);
        const { findByText } = render(<App />);

        await findByText(productsShort[0].name);
        await findByText(productsShort[1].name);
    });

    it("для каждого товара отображается цена", async () => {
        const { App } = createApp(path);
        const { findByText } = render(<App />);

        await findByText(`$${productsShort[0].price}`);
        await findByText(`$${productsShort[1].price}`);
    });

    it("для каждого товара отображается ссылка на страницу с подробной информацией о товаре", async () => {
        const { App } = createApp(path);
        const { findAllByTestId } = render(<App />);

        const card1 = await findAllByTestId(productsShort[0].id).then(result => result[0]);
        const card1LinkEl = await findByRole(card1, "link", { name: /details/i });
        expect(card1LinkEl.getAttribute("href")).toEqual(
            `/catalog/${productsShort[0].id}`
        );

        const card2 = await findAllByTestId(productsShort[1].id).then(result => result[0]);
        const card2LinkEl = await findByRole(card2, "link", { name: /details/i });
        expect(card2LinkEl.getAttribute("href")).toEqual(
            `/catalog/${productsShort[1].id}`
        );
    });

    it("если товар уже добавлен в корзину должно отображаться сообщение об этом", async () => {
        const { App } = createApp(path, productsCart);
        const { findAllByTestId } = render(<App />);

        const card1 = await findAllByTestId(productsShort[0].id).then(result => result[0]);
        const card2 = await findAllByTestId(productsShort[1].id).then(result => result[0]);

        await within(card1).getByText(/item in cart/i);
        await within(card2).getByText(/item in cart/i);
    });

    it('undefined на названиях', async () => {

        const basename = '';

        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);

        const application = (
            <MemoryRouter basename={basename} initialEntries={[path]} initialIndex={0}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </MemoryRouter>
        );

        const {container} = render(application);
        const cardTitles = container.querySelectorAll('.card-title');
        console.log(cardTitles)
        cardTitles.forEach(cardTitle => {
            expect(cardTitle).not.toBeEmptyDOMElement();
        });

    })


});