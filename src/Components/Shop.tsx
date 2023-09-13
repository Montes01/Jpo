import { useEffect, useState, useContext } from 'react'
import { Product, getProducts } from './ApiRequests'
import { ProductCard } from './ProductCard'

export const Shop = () => {
    const [products, setProducts] = useState([{} as Product])
    

    let productList = products
    async function getAllProducts() {
        setProducts(await getProducts())
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <main className=''>
            <main className=''>
                <section className=" products">

                    {productList.map(el => <ProductCard description={el.description} key={el.id} id={el.id} category={el.category} title={el.title} price={el.price} image={el.image} />)}

                </section>
            </main>
        </main>
    )
}
