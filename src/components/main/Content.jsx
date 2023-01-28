import React from "react";
import { useState, useEffect } from "react";
import api from "../../services/data"
import Pop from "./Pop";
import Product from "./Product";
import Message from "./Message";
import Categ from "./Category";

const Content = () => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [productId, setProductId] = useState()
    const [message, setMessage] = useState();


    useEffect(() => {
        api
            .getAll()
            .then(response => {
                setProducts(response)
            })
    }, [])



    return (
        <div>
            <Categ setPro={setProducts} />
            <div class="grid grid-flow-row grid-cols-4 gap-4 m-4 mt-5 justify-items-center">
                <Product data={products} setId={setProductId} setPop={setProduct} setMsg={setMessage} />
                <Pop id={productId} setId={setProductId} product={product} setPop={setProduct} rating = {product.rating} setMsg = {setMessage} />
            </div>
            <Message msg={message} />

        </div>
    )
}

export default Content