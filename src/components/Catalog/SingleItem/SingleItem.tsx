import type { SingleItem } from "../Catalog.types";
import { Link } from "react-router-dom";

function SingleItemComponent(productInfo:SingleItem){

    return(
        <li>
            <img src={productInfo.image} alt="product image" />
            <p>{productInfo.name}</p>
            <p>{productInfo.description}</p>
            <p>{productInfo.category}</p>
            <Link to={`/details/${productInfo.id}`}>View Details</Link>
        </li>
    )
}

export default SingleItemComponent