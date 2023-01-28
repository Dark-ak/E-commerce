import React from "react";
import { useState } from "react";
import Menu from "./mainSide";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    const [bg, setBg] = useState({})
    const set = () => {
        setSidebar(!sidebar)
        sidebar ?
            setBg({
                color: "black",
                backgroundColor: "white"
            })
            : setBg({
                color: 'white',
                backgroundColor: '#DA5726',
            })

    }

    return (

        <div >
            <div style={bg} class="absolute flex flex-col gap-4 rounded hover:text-white   hover:bg-[#DA5726]  duration-1000  " onClick={() => set()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 hover:bg-[#DA5726] hover:text-white rounded cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <Menu side={sidebar} />
            </div>

        </div>

    )
}

export default Sidebar