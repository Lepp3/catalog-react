
import { useCatalogFilter } from "./Catalog.logic"
import { type SingleItem } from "./Catalog.types"
import SingleItemComponent from "./SingleItem/SingleItem"



function Catalog(){
    const {items, filter, handleFilter} = useCatalogFilter();
    

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