export const BASE_URL = "https://fakestoreapi.com/"
export const getProducts = async () => {
    return await fetch(BASE_URL + "products")
        .then(response => response.json())
}
export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}


    
