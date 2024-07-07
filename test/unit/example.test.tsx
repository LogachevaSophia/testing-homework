import React from 'react';

import { addToCart, clearCart, initStore } from "../../src/client/store"

import { fireEvent, getByText, queryByText, render, screen, waitFor } from '@testing-library/react';
import { CartApi, ExampleApi } from '../../src/client/api';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from "../../src/client/Application"


describe('Simple Test Case', () => {
    it('Should render', () => {
        // const app = <div>example</div>;

        // const { container } = render(app);

        // expect(container.textContent).toBe('example');
    });
});

// describe('Корзина', function () {
//     let store: ReturnType<typeof initStore>;
//     const basename = '/hw/store';
//     const api = new ExampleApi(basename);
//     const cart = new CartApi();
//     beforeEach(() => {
//         store = initStore(api, cart); // Инициализация хранилища перед каждым тестом
//     });

//     it('в label в шапке должно быть показано количесвто уникальных товаров в корзине', () => {
//         //подготовка
//         // добавляем два одинаковых продукта с id 1, и один продукт с id 2
//         const products = [{
//             id: 1,
//             name: 'Test Product',
//             price: 10,
//             description: "Описание 1",
//             material: "материал",
//             color: "желтый"
//         }, {
//             id: 1,
//             name: 'Test Product',
//             price: 10,
//             description: "Описание 1",
//             material: "материал",
//             color: "желтый"
//         },
//         {
//             id: 2,
//             name: 'Test Product',
//             price: 10,
//             description: "Описание 1",
//             material: "материал",
//             color: "желтый"
//         }];

//         //действия
//         products.forEach(product =>
//             store.dispatch(addToCart(product))
//         )
//         const state = store.getState();
//         const count = Object.keys(state.cart).length;
//         const cartLabel = count ? `Cart (${count})` : 'Cart';

//         //проверка

//         //ожидаемый результат: в корзине 2 уникальных товара
//         expect(cartLabel).toBe("Cart (2)")



//     })
//     it('в корзине должна быть кнопка "очистить корзину", по нажатию на которую все товары должны удаляться', () => {
//         //подготовка
//         const products = [{
//             id: 1,
//             name: 'Test Product',
//             price: 10,
//             description: "Описание 1",
//             material: "материал",
//             color: "желтый"
//         }, {
//             id: 1,
//             name: 'Test Product',
//             price: 10,
//             description: "Описание 1",
//             material: "материал",
//             color: "желтый"
//         },
//         {
//             id: 2,
//             name: 'Test Product',
//             price: 10,
//             description: "Описание 1",
//             material: "материал",
//             color: "желтый"
//         }];
//         products.forEach(product =>
//             store.dispatch(addToCart(product))
//         )


//         //действия
//         store.dispatch(clearCart());


//         const state = store.getState();

//         console.log(state.cart)

//         //проверка
//         expect(Object.keys(state.cart).length).toBe(0)

//     })
// })
// const resizeWindow = (width: number) => {
//     window.innerWidth = width;
//     window.dispatchEvent(new Event('resize'));
// };
// describe('Шапка', () => {

//     it('при выборе элемента из меню "гамбургера", меню должно закрываться', async () => {
//         //баг 4
//         //resizeWindow(575);
//         const basename = '/hw/store';

//         const api = new ExampleApi(basename);
//         const cart = new CartApi();
//         const store = initStore(api, cart);
        
//         const application = (
//             <BrowserRouter basename={basename}>
//                 <Provider store={store}>
//                     <Application />
//                 </Provider>
//             </BrowserRouter>
//         );

//         const { container } = render(application
//         );

//         screen.logTestingPlaygroundURL();
//        // await fireEvent.click(screen.getByRole("link", { name: "Catalog" }));

//     });
// })
