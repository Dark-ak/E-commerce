import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"


const Head = () => {

    const navigate = useNavigate()

    return (

        <div class="flex sticky z-10 top-0 bg-white items-center justify-between px-4 py-5 border-solid border-orange-500 border-b-[5px] rounded-lg shadow-xl">
            
            <Sidebar />
            
            <div class="">
                <img src={logo} class="w-[130px] mt-[4px]" alt="" />
            </div>
            
            <div class="p-1 flex items-center gap-5 rounded ">
                <div>
                    <button class="text-xl text-orange-600 border-slate-500  px-5 border-2  border-solid py-1 hover:text-white hover:bg-orange-600   hover:shadow-[7px_8px_0_rgba(0,0,0,0.3)] duration-200" onClick={() => navigate('/login')}>Log in</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rounded hover:text-white  hover:bg-[#DA5726] cursor-pointer" onClick={() => navigate('/cart')}>
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>

            </div>

        </div>
    )
}

export default Head