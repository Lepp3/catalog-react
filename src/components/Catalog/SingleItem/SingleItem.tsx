import type { SingleItem } from "../Catalog.types";
import { StyledSingleItemCard, StyledImg, StyledSingleItemCardTopPart,StyledButtonHolder, StyledCategory, StyledItemDescription, StyledItemName} from "./SingleItem.styles";
import { StyledLink } from "../../../utils/GlobalStyles";

function SingleItemComponent(productInfo:SingleItem){

    return(
        <StyledSingleItemCard>
            <StyledSingleItemCardTopPart>
            <StyledImg src={productInfo.image} alt="product image" />
            <StyledItemName>{productInfo.name}</StyledItemName>
            <StyledItemDescription>{productInfo.description}</StyledItemDescription>
            <StyledCategory>{productInfo.category}</StyledCategory>
            </StyledSingleItemCardTopPart>
            <StyledButtonHolder>
            <StyledLink to={`/details/${productInfo.id}`}>View Details</StyledLink>
            </StyledButtonHolder>
        </StyledSingleItemCard>
    )
}

export default SingleItemComponent