import {
  useCatalogCategoryFilter,
  useCatalogNameFilter,
} from './Catalog.logic';
import { type SingleItem } from './Catalog.types';
import SingleItemComponent from './SingleItem/SingleItem';
import {
  StyledCatalogHeader,
  StyledFilterContainer,
  StyledCardHolder,
  CatalogWrapper,
  StyledForm,
  StyledSubmitButton,
} from './Catalog.styles';
import { products } from '../../assets/products';
import { useState } from 'react';

function Catalog() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const {items: searchItems} = useCatalogNameFilter(query);
  const {items: categoryItems} = useCatalogCategoryFilter(filter);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter('');
    setQuery(searchInput);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    setQuery('');
    setSearchInput('');
  };

  const isSearching = query.trim() !== '';
const itemsToRender = isSearching
  ? searchItems
  : categoryItems.length > 0
  ? categoryItems
  : products;

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
        <StyledForm onSubmit={handleSearch}>
          <label>Search by name:</label>
          <input
            type="text"
            placeholder="Submit empty to reset"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <StyledSubmitButton type="submit">Search</StyledSubmitButton>
        </StyledForm>
      </StyledFilterContainer>

      <StyledCardHolder>
        {itemsToRender.map((item: SingleItem) => (
          <SingleItemComponent key={item.id} {...item} />
        ))}
      </StyledCardHolder>
    </CatalogWrapper>
  );
}

export default Catalog;
