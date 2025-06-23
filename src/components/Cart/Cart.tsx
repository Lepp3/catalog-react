import { useCart } from "../../context/useContext";


function Cart(){
    const {totalItems, totalPrice, clearCart} = useCart();

    return (
  <>
    <h2>Cart ({totalItems} items)</h2>
    <p>Total: ${totalPrice.toFixed(2)}</p>
    <button onClick={() => clearCart()}>Clear Cart</button>
  </>
    )
}


export default Cart