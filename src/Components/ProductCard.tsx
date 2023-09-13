import { useContext, useEffect, useRef, useState } from 'react'
import { Product } from "./ApiRequests"
export const ProductCard = ({ category, description, id, image, price, title }: Product) => {
    const actualProduct = {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        category: category
    }
    const handleClick = () => {
        // isAlready?setProductCount(productCount.filter((el:Product) => el.id != id)):setProductCount([...productCount, actualProduct])
    }
    // const [isAlready, setIsAlready] = useState(false)
    const Article = useRef(null)

    return (
        <div className="project">

            <article ref={Article} onClick={handleClick} className=" ">
                <h2 className="">{title}</h2>
                <img className=" " src={image} alt="" />
                <div className="">
                    <p className="">{description}</p>
                </div>
                <p className="">{price}$</p>
                <p>{category}</p>
            </article>
        </div>
    )
}
