import { useParams } from 'react-router-dom';
import { products } from '../../../assets/products';
import { useCart } from '../../../context/useContext';


function Details() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const {addToCart} = useCart();

  if(!product){
    return (
        <p>Product not found!</p>
    )
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <button onClick={()=>addToCart(product)}> Add to cart</button>
    </>
  );
}

export default Details;
