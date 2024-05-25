import { createContext, useEffect, useState } from "react";

export const InventoryContext = createContext({});

export default function InventoryContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const productsData = await apiResponse.json();
    setProducts(productsData.products);
    setProductsCopy(productsData.products);
  }

  function addProductToCart(productId) {
    const [product] = products.filter((product) => product.id === productId);
    setCart([...cart, product]);
  }

  function removeProductFromCart(productId) {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  }

  function sortByPrice(order) {
    if (order === "asc") {
      const sortedProducts = products.sort(
        (product1, product2) => product1.price - product2.price
      );
      setProducts([...sortedProducts]);
    } else if (order === "desc") {
      const sortedProducts = products.sort(
        (product1, product2) => product2.price - product1.price
      );
      setProducts([...sortedProducts]);
    }
  }

  function searchProducts(name) {
    const searchedProducts = productsCopy.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );
    setProducts(searchedProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <InventoryContext.Provider
      value={{
        products,
        cart,
        addProductToCart,
        removeProductFromCart,
        sortByPrice,
        searchProducts,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
