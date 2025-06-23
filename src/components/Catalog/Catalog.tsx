
import { useCatalogCategoryFilter, useCatalogNameFilter } from "./Catalog.logic"
import { type SingleItem } from "./Catalog.types"
import SingleItemComponent from "./SingleItem/SingleItem"



function Catalog(){
    const {items:categoryItems , filter, handleFilter} = useCatalogCategoryFilter();
    const {items:searchItems, query, handleSearch} = useCatalogNameFilter();

    

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


            <label>
        Search by name:
        <input type="text" value={query} onChange={handleSearch} />
      </label>

        <ul>
            {(query ? searchItems : categoryItems).map((item:SingleItem)=>(
                <SingleItemComponent key={item.id} {...item}/>
            ))}
        </ul>
        </>
    )
}

export default Catalog