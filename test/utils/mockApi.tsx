import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { ExampleApi } from "../../src/client/api";
import { products, productsShort } from "./ExampleProducts";

const mockApi = new ExampleApi("");
const axiosResponseSchema: AxiosResponse = {
    data: {},
    status: 200,
    statusText: "OK",
    headers: {},
    config: { 
        headers: {} as AxiosRequestHeaders
     },
    request: {},
};
mockApi.getProducts = async () => ({
    ...axiosResponseSchema,
    data: productsShort,
});

mockApi.getProductById = async (id) => ({
    ...axiosResponseSchema,
    data: products[id],
});

mockApi.checkout = async () => ({
    ...axiosResponseSchema,
    data: { id: 1 },
});

export default mockApi;
