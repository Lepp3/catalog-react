import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"


function Header(){
    return(
        <>
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/catalog`}>Catalog</Link></li>
        </ul>
        <Cart/>
        </>
    )
}

export default Header