import { StyledLink } from "../../utils/GlobalStyles";
import { HomeHeading, HomeSubheading, Container } from "./Home.styles";

function HomePageComponent(){
    return(
        <Container>
        <HomeHeading>Welcome to this React catalog assignment</HomeHeading>
        <HomeSubheading>Perhaps you would like to see our <StyledLink to={`/catalog`}>Catalog</StyledLink>?</HomeSubheading>
        </Container>
    )
}

export default HomePageComponent