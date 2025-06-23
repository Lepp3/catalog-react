import { useState } from "react"
import { products } from "../../assets/products"
import { type SingleItem } from "./Catalog.types"
import SingleItemComponent from "./SingleItem/SingleItem"



function Catalog(){

    const [items, setItems] = useState(products);
    const [filter, setFilter] = useState('');

    const handleFilter = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);

        let filteredItems = [...items];

        switch (selectedFilter) {
            case "toys":
              filteredItems = products.filter(item=>item.category === 'Toys');
              break;
            case "books":
              filteredItems = products.filter(item=>item.category === 'Books');
              break;
            case "electronics":
            filteredItems = products.filter(item=>item.category === 'Electronics');

              break;
            case "home":
                filteredItems = products.filter(item=>item.category === 'Home');
              break;
              case "clothing":
                filteredItems = products.filter(item=>item.category === 'Clothing');
              break;
            default:
              break;
          };

          setItems(filteredItems);
    }

    return(
        <>
        <p>Catalog Component</p>

         <div>
            <label htmlFor="filter">Filter by:</label>
              <select id="filter" value={filter} onChange={handleFilter}>
                <option value="">Filters</option>
                <option value="books">Books</option>
                <option value="home">Home</option>
                <option value="electronics">Electronics</option>
                <option value="toys">Toys</option>
                <option value="clothing">Clothing</option>
            </select>  
          </div> 


        <ul>
            {items.map((item:SingleItem)=>(
                <SingleItemComponent key={item.id} {...item}/>
            ))}
        </ul>
        </>
    )
}

export default Catalog