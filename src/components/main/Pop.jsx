import React from "react";
import add from "../../services/atc"

const Pop = ({ id, setId, product, rating, setMsg}) => {


    const close = () => {
        setId()
    }


    if (id != null) {
        return (
            <div class="fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex-col flex justify-center items-center">
                <div class="flex flex-col items-end bg-white">
                    <div onClick={() => close()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>


                    </div>
                    <div class="w-[800px]">
                        <div class="grid grid-flow-col gap-[30px] px-10 pb-8 items-center">
                            <div>
                                <img class="w-[250px]" src={product.image} alt="" />
                            </div>
                            <hr />
                            <div class="flex flex-col gap-5">
                                <div>
                                    <h1 class="text-[30px] mb-[10px] font-bold">{product.title}</h1>
                                    <p class="text-[20px]">{product.description}</p>
                                </div>

                                <div>
                                    <p class="text-[25px]">Rating: {rating.rate} out of 5</p>
                                </div>

                                <div>
                                    <button onClick={() => add.addToCart(product.id ,product.title, product.image, product.price , setMsg)} class="flex text-xl gap-3 items-center border-[3px] border-black border-solid py-1 hover:text-white hover:bg-black   hover:shadow-[7px_8px_0_rgba(0,0,0,0.3)] px-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pop