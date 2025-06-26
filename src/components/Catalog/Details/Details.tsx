import { useParams } from 'react-router-dom';
import { products } from '../../../assets/products';
import { useCart } from '../../../context/useContext';
import {
  DetailsWrapper,
  StyledItemHeading,
  StyledItemDescription,
  StyledItemImage,
  StyledAddToCartButton,
} from './Details.styles';

function Details() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <DetailsWrapper>
      <StyledItemHeading>{product.name}</StyledItemHeading>
      <StyledItemDescription>{product.description}</StyledItemDescription>
      <StyledItemImage src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <StyledAddToCartButton onClick={() => addToCart(product)}>
        Add to cart
      </StyledAddToCartButton>
    </DetailsWrapper>
  );
}

export default Details;
