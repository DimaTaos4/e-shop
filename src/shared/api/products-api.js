import backendInstance from "./backendInstance";
import requestDecorator from "./requestDecorator";


export const getPopularProducts = requestDecorator(async () => {
    const { data } = await backendInstance.get("/products");
    return data.data;
});

export const getPopularById = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/products${id}`);
    return data.data;
});
