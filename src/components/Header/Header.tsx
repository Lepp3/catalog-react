
import Cart from "../Cart/Cart"
import { NavigationContainer,NavigationList,StyledNavigationLink } from "./Header.styles"


function Header(){
    return(
        <NavigationContainer>
        <NavigationList>
            <li><StyledNavigationLink to={`/`}>Home</StyledNavigationLink></li>
            <li><StyledNavigationLink to={`/catalog`}>Catalog</StyledNavigationLink></li>
        </NavigationList>
        <Cart/>
        </NavigationContainer>
    )
}

export default Header