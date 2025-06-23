import {  useState, type ReactNode } from "react";
import { type SingleItem } from "../components/Catalog/Catalog.types";
import { CartContext } from "./CartContext";

type CartItem = SingleItem & {quantity:number};

export interface CartContextType {
    addToCart: (item: SingleItem) => void,
    clearCart: () => void,
    totalItems: number,
    totalPrice: number
}



export const CartProvider = ({children}: {children:ReactNode}) =>{
    const [cart,setCart] = useState<CartItem[]>([]);


   const addToCart = (item: SingleItem) =>{
        setCart(previousState=>{
            const existing = previousState.find(itemInCart => itemInCart.id === item.id);
            if(existing){
                return previousState.map(previousStateItem => previousStateItem.id === item.id ? {...previousStateItem,quantity: previousStateItem.quantity +1} : previousStateItem);
            }else{
                return [...previousState,{...item,quantity:1}]
            }
        });
    }

        const clearCart = () =>{
            setCart([]);
        }

        const totalItems = cart.reduce((sum,item)=> sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum,item)=>sum + item.price * item.quantity, 0);

        return (
    <CartContext.Provider
      value={{ addToCart, clearCart, totalItems, totalPrice}}
    >
      {children}
    </CartContext.Provider>
  )
   }


