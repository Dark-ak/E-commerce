import { useEffect, useState } from "react"

const Order = ({ items }) => {

    return (
        items.map(item => {
            return (
                <div key={item.id}>
                    <div class="grid grid-cols-[2fr_1fr] text-lg">
                        <p>{item.name}(x{item.quantity})</p>
                        <p>{item.price * item.quantity}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Order