import cart from "../../services/cart"

const CartItem = ({ items, set, total, settotal}) => {

    const less = (id, price, qty) => {


        if (qty == 0) {
            cart.remove(id);
            set(items.filter(value => {
                return value.id != id
            }))
        }
        else {
            cart.update(id, qty).then(response => {
                set(items.map(item => item.id !== id ? item : response))
            });
        }
        settotal(total-price);
    }

    const add = (id,price,qty) => {
        cart.update(id, qty).then(response => {
            set(items.map(item => item.id !== id ? item : response))
        });

        settotal(total+(price))
    }


    return (
        items.map(item => {
            return (
                <div key={item.id} class="flex gap-10 m-2 border-2 border-solid border-slate-300 rounded shadow-md p-3">
                    <img class="w-[80px]" src={item.image} alt="" />
                    <div class="flex flex-col">
                        <p class="text-2xl">{item.name}</p>
                        <p class="text-xl mb-2">Price: ${item.price}</p>
                        <div class="flex  gap-3">
                            <button onClick={() => less(item.id, item.price, item.quantity - 1)} class="border-2 border-solid border-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <p>Qty. {item.quantity}</p>
                            <button onClick={() => add(item.id, item.price ,item.quantity + 1)} class="border-2 border-solid border-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CartItem