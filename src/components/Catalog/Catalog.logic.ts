import { useState } from "react"
import { products } from "../../assets/products"


export const useCatalogFilter = () => {
  const [items, setItems] = useState(products)
  const [filter, setFilter] = useState('')

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value
    setFilter(selectedFilter)

    let filteredItems = [...products]

    switch (selectedFilter) {
      case 'toys':
        filteredItems = filteredItems.filter(item => item.category === 'Toys')
        break
      case 'books':
        filteredItems = filteredItems.filter(item => item.category === 'Books')
        break
      case 'electronics':
        filteredItems = filteredItems.filter(item => item.category === 'Electronics')
        break
      case 'home':
        filteredItems = filteredItems.filter(item => item.category === 'Home')
        break
      case 'clothing':
        filteredItems = filteredItems.filter(item => item.category === 'Clothing')
        break
      default:
        break
    }

    setItems(filteredItems)
  }

  return {
    items,
    filter,
    handleFilter,
  }
}