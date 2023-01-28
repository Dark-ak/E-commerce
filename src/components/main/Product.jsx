import React from "react";
import api from "../../services/data"
import cart from "../../services/cart";
import add from "../../services/atc"

const Product = ({ data, setId, setPop, setMsg }) => {

    const addToCart = (id, name, image, price) => {


        const item = {
            id: id,
            name: name,
            image: image,
            quantity: 1,
            price: price
        }
        cart
            .setItem(item)
            .then(() => {
                setMsg("Added to Cart Successfully")
            })
            .catch(() => {
                setMsg("Item already in Cart")
            });
        setTimeout(() => {
            setMsg();
        }, 2000);

    }


    const modal = (id) => {

        api
            .single(id)
            .then(response => {
                setPop(response)
            })
        setTimeout(() => setId(id), 500)
    }


    return (
        data.map(product => {
            return (
                <div key={product.id} class=" product flex flex-col gap-2 items-center mt-[2px] border-2 border-solid p-4 cursor-pointer rounded-xl border-gray-300 hover:shadow-2xl hover:shadow-slate-400 mb-2">
                    <div class="flex flex-col gap-2 items-center" onClick={() => modal(product.id)}>
                        <img src={product.image} alt="" class="w-[300px] h-[200px] mb-5 border-2 border-solid p-5 border-slate-300 shadow-inner shadow-slate-200" />
                        <p class="text-[26px]">{product.title}</p>
                        <p class="text-[20px]"><strong>Price:</strong> ${product.price}</p>
                    </div>
                    <button onClick={() => add.addToCart(product.id, product.title, product.image, product.price, setMsg)} class="flex align-center gap-2 mt-[5px] border-2 border-black border-solid py-1 hover:text-white hover:bg-black   hover:shadow-[7px_8px_0_rgba(0,0,0,0.3)] px-10 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                        </svg>
                        <p class="text-[18px]  pt-[5px]">Add To Cart</p>
                    </button>
                </div>
            )
        })
    )
}

export default Product