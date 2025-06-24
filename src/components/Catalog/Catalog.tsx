import {
  useCatalogCategoryFilter,
  useCatalogNameFilter,
} from './Catalog.logic';
import { type SingleItem } from './Catalog.types';
import SingleItemComponent from './SingleItem/SingleItem';
import { StyledCatalogHeader, StyledFilterContainer, StyledCardHolder, CatalogWrapper } from './Catalog.styles';

function Catalog() {
  const {
    items: categoryItems,
    filter,
    handleFilter,
  } = useCatalogCategoryFilter();
  const { items: searchItems, query, handleSearch } = useCatalogNameFilter();

  return (
    <CatalogWrapper>
      <StyledCatalogHeader>Item Catalog</StyledCatalogHeader>

      <StyledFilterContainer>
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilter}>
          <option value="">All</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
          <option value="electronics">Electronics</option>
          <option value="toys">Toys</option>
          <option value="clothing">Clothing</option>
        </select>

         <label>
        Search by name: 
        <input type="text" value={query} onChange={handleSearch} />
      </label>
      </StyledFilterContainer>

     

      <StyledCardHolder>
        {(query ? searchItems : categoryItems).map((item: SingleItem) => (
          <SingleItemComponent key={item.id} {...item} />
        ))}
      </StyledCardHolder>
    </CatalogWrapper>
  );
}

export default Catalog;
