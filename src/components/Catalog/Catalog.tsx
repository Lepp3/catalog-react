import { products } from "../../assets/products"
import { type SingleItem } from "./Catalog.types"
import SingleItemComponent from "./SingleItem/SingleItem"



function Catalog(){

    return(
        <>
        <p>Catalog Component</p>
        <ul>
            {products.map((product:SingleItem)=>(
                <SingleItemComponent key={product.id} {...product}/>
            ))}
        </ul>
        </>
    )
}

export default Catalog