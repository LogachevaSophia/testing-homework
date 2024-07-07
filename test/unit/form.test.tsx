import userEvent from "@testing-library/user-event";
import React from "react";
import { checkout } from "../../src/client/store";
import { render } from "@testing-library/react";
import { productsCart } from "../utils/ExampleProducts";
import { createApp } from "../utils/createApplication";

describe("Форма заказа:", () => {
  const path = "/cart";
  const form = {
    name: "Имя",
    phone: "+79000000000",
    address: "Aдрес",
  };

  it("если введено невалидное имя, поле имеет класс 'is-invalid'", async () => {
    const { App } = createApp(path, productsCart);
    const { findByRole } = render(<App />);

    const btn = await findByRole("button", { name: /checkout/i });
    await userEvent.click(btn);

    const input = await findByRole("textbox", { name: /name/i });
    expect(input.classList.contains('is-invalid')).toBe(true);
  });

  it("если введен невалидный номер, поле имеет класс 'is-invalid'", async () => {
    const { App } = createApp(path, productsCart);
    const { findByRole } = render(<App />);

    const btn = await findByRole("button", { name: /checkout/i });
    await userEvent.click(btn);

    const input = await findByRole("textbox", { name: /phone/i });
    expect(input.classList.contains('is-invalid')).toBe(true);
  });

  it("если введен невалидный адрес, поле имеет класс 'is-invalid'", async () => {
    const { App } = createApp(path, productsCart);
    const { findByRole } = render(<App />);

    const btn = await findByRole("button", { name: /checkout/i });
    await userEvent.click(btn);

    const input = await findByRole("textbox", { name: /address/i });
    expect(input.classList.contains('is-invalid')).toBe(true);
  });

  it("если введено валидное имя, поле не должно имеет класс 'is-invalid'", async () => {
    const { App } = createApp(path, productsCart);
    const { findByRole } = render(<App />);

    const input = await findByRole("textbox", { name: /name/i });
    await userEvent.type(input, form.name);

    const btn = await findByRole("button", { name: /checkout/i });
    await userEvent.click(btn);

    expect(input.classList.contains('is-invalid')).toBe(false);
  });

  it("если введен валидный номер, поле не должно имеет класс 'is-invalid'", async () => {
    //bug_id = 10
    const { App } = createApp(path, productsCart);
    const { findByRole } = render(<App />);

    const input = await findByRole("textbox", { name: /phone/i });
    await userEvent.type(input, form.phone);

    const btn = await findByRole("button", { name: /checkout/i });
    await userEvent.click(btn);

    expect(input.classList.contains('is-invalid')).toBe(false);
  });

  it("если введен валидный адрес, поле не должно имеет класс 'is-invalid'", async () => {
    const { App } = createApp(path, productsCart);
    const { findByRole } = render(<App />);

    const input = await findByRole("textbox", { name: /address/i });
    await userEvent.type(input, form.address);

    const btn = await findByRole("button", { name: /checkout/i });
    await userEvent.click(btn);

    expect(input.classList.contains('is-invalid')).toBe(false);
  });

  it("после выполнения заказа, должно выводиться сообщение об успешном выполненнии заказа", async () => {
    //bug_id = 5
    const { App, store } = createApp(path, productsCart);
    const { findByText } = render(<App />);

    store.dispatch(checkout(form, productsCart));
    await findByText(/order # has been successfully completed\./i);
  });

  it("после выполнения заказа, корзина должна очищаться", async () => {
    //bug_id = 5
    const { App, store } = createApp(path, productsCart);
    const { findByText } = render(<App />);

    store.dispatch(checkout(form, productsCart));
    await findByText(/cart is empty\. please select products in the \./i);
  });
});