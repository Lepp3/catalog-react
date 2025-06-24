import { useCart } from "../../context/useContext";
import { CartContainer, ClearCartButton } from "./Cart.styles";


function Cart(){
    const {totalItems, totalPrice, clearCart} = useCart();

    return (
  <CartContainer>
    <h2><i className="fa-solid fa-cart-shopping"></i> ({totalItems} items)</h2>
    <p>Total: ${totalPrice.toFixed(2)}</p>
    <ClearCartButton onClick={() => clearCart()}>Clear Cart</ClearCartButton>
  </CartContainer>
    )
}


export default Cart