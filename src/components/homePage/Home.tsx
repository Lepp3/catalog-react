import { StyledLink, Container } from "../../utils/GlobalStyles";
import { HomeHeading, HomeSubheading } from "./Home.styles";

function HomePageComponent(){
    return(
        <Container>
        <HomeHeading>Welcome to...this</HomeHeading>
        <HomeSubheading>Perhaps you would like to see our <StyledLink to={`/catalog`}>Catalog</StyledLink>?</HomeSubheading>
        </Container>
    )
}

export default HomePageComponent