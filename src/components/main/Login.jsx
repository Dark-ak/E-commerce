import React from "react";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

    const nav = useNavigate();


    const handleClick = () => {
        nav("/")
    }

    return (
        <div class="flex-col flex justify-center items-center mt-[60px]">
            <div class="w-[500px] h-[500px] border-2 border-solid border-orange-400 rounded">
                <div class="flex flex-col items-center gap-6 my-5">
                    <img src={logo} alt="logo" class="w-[150px] cursor-pointer" onClick={() => nav("/")} />
                    <p class="text-3xl font-bold text-orange-500 font-serif">Log In</p>
                </div>

                <form class="flex flex-col items-center gap-5 mb-5">
                    <div>
                        <label htmlFor="email" class="text-xl">
                            Email
                        </label><br />
                        <input type="email" class="w-[250px] h-[25px] focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100 border-solid border-2 " />
                    </div>

                    <div>
                        <label htmlFor="password" class="text-xl">Password</label><br />
                        <input type="password" name="" id="" class="w-[250px] h-[25px] border-solid border-2 focus:outline-none focus:shadow-[2px_2px_0_rgba(0,0,0,0.5)] duration-100"/>
                    </div>
                </form>

                <div class="flex flex-col gap-4 items-center"> 
                    <button onClick={handleClick} class="log border-2 text-[20px] border-solid bg-orange-400 text-white hover:bg-orange-600 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)]  px-6 py-1">LogIn</button>
                    <button class="text-blue-400 hover:text-blue-800">Forgot Password</button>
                    <button onClick={() => nav('/signup')} class="text-blue-400 hover:text-blue-800" >Don't have an account? sign in</button>
                </div>
            </div>
        </div>

    )
}

export default Login