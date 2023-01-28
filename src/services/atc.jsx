import cart from "./cart"



const addToCart = (id, name, image, price,setMsg) => {


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

export default {addToCart}