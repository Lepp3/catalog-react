import { useState, useEffect } from 'react';
import { products } from '../../assets/products';

export const useCatalogCategoryFilter = (filter: string) => {
  const [items, setItems] = useState(products);

  useEffect(() => {
    let filteredItems = [...products];

    filteredItems = filter
      ? products.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase()
        )
      : products;
    setItems(filteredItems);
  }, [filter]);

  return {
    items,
  };
};

export const useCatalogNameFilter = (query: string) => {
  const [items, setItems] = useState(products);

  useEffect(() => {
    const inputQuery = query.trim().toLowerCase();

    if (!inputQuery) {
      setItems(products);
      return;
    }

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(inputQuery)
    );
    setItems(filtered);
  }, [query]);

  return {
    items,
  };
};
