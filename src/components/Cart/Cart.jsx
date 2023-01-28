import React from "react";
import logo from "../../assets/logo.png"
import CartItem from "./cartItem";
import cartItem from "../../services/cart"
import { useState, useEffect } from "react";
import Order from "./Order";
import { useNavigate } from "react-router-dom";



const Cart = () => {

    const [item, setItem] = useState([]);
    const [total, setTotal] = useState(0)

    const nav = useNavigate();

    useEffect(() => {
        cartItem
            .getItem()
            .then(response => {
                setItem(response)
                const sum = response.reduce((acc, crr) => {
                    return acc + (crr.price * crr.quantity)
                }, 0)

                setTotal(sum);
            })
    }, [])


    return (
        <div>
            <img src={logo} alt="" class="m-4 cursor-pointer" onClick={() => nav('/')} />
            <div class="grid grid-cols-[2fr_1fr] grid-rows-[100px,0px] mt-8 mx-4 gap-5 items-start">
                <div>
                    <p class="text-4xl text-orange-500 font-bold">Your Cart</p>
                    <div class="flex flex-col">
                        <CartItem items={item} set={setItem} total={total} settotal={setTotal} />
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-5 border-solid border-4 border-orange-500 rounded-xl p-4">
                        <p class="text-2xl text-orange-500">Order Summary</p>
                        <Order items={item} />
                        <div class="grid grid-col-[3fr_2fr] grid-flow-col text-xl border-t-2 border-solid p-1">
                            <p>Total amount to pay: </p>
                            <p>{total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div>
                        <button class="border-2 border-solid p-4 w-full rounded-lg bg-orange-400 text-white hover:bg-orange-500 duration-75 hover:shadow-[8px_8px_0px_0px_rgba(180,180,180,0.5)]">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart