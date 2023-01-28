import { useEffect, useState } from "react"
import data from "../../services/data"

const Categ = ({ setPro }) => {

    const [active, setActive] = useState("all")


    const handleClick = (event) => {

        setActive(event.target.id);

        

        if (event.target.id == "all") {
            data
                .getAll()
                .then(response => {
                    setPro(response)
                })


        }

        else {
            data
                .category(event.target.id)
                .then(response => {
                    setPro(response);
                })
        }
    }


    return (
        <div class="flex m-5">
            <button class="text-2xl text-orange-600 bg-white p-2" >Categories:</button>
            <div class="flex gap-4 m-1">
                <button style={{ borderColor: (active == "all") ? "grey" : "white" }} class="type" onClick={() => handleClick(event)} id="all">All</button>
                <button style={{ borderColor: (active == "electronics") ? "grey" : "white" }} class="type" onClick={() => handleClick(event)} id="electronics">Electronics</button>
                <button style={{ borderColor: (active == "jewelery") ? "grey" : "white" }} class="type" onClick={() => handleClick(event)} id="jewelery">Jewelery</button>
                <button style={{ borderColor: (active == "men's clothing") ? "grey" : "white" }} class="type" onClick={() => handleClick(event)} id="men's clothing">Men</button>
                <button style={{ borderColor: (active == "women's clothing") ? "grey" : "white" }} class="type" onClick={() => handleClick(event)} id="women's clothing">Women</button>
            </div>
        </div>
    )
}

export default Categ