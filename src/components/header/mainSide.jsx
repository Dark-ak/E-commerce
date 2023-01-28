import React from "react";

const Menu = ({ side }) => {
    return (
        side ?
            <div class="w-[250px] pb-4" >
                <ul class="flex flex-col gap-4 items-center text-2xl">
                    <li class= "flex-none w-[100%] pl-[80px] hover:bg-white hover:text-orange-500 cursor-pointer border-b-2 border-solid">Products</li>
                    <li class= "flex-none w-[100%] pl-[65px] hover:bg-white hover:text-orange-500 cursor-pointer border-b-2 border-solid">Your Profile</li>
                    <li class= "flex-none w-[100%] pl-[65px] hover:bg-white hover:text-orange-500 cursor-pointer">Your Orders</li>
                </ul>
            </div>
            :
            null
    )
}

export default Menu

