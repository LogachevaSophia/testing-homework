import { MemoryRouter } from "react-router";
import { CartApi } from "../../src/client/api";
import { initStore } from "../../src/client/store";
import { CartState } from "../../src/common/types";
import mockApi from "./mockApi";
import { Provider } from "react-redux";
import { Application } from "../../src/client/Application";
import React from "react";

export const createApp = (
    path: string = "/",
    initCartState: CartState = {}
) => {
    const cart = new CartApi();
    cart.getState = () => initCartState;
    const api = mockApi;

    const store = initStore(api, cart);

    const App = () => {
        return (
            <MemoryRouter initialEntries={[path]}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </MemoryRouter>
        );
    };
    return { App, store };

}