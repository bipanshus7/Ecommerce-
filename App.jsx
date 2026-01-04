import { useEffect, useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import { useCart } from "./hooks/useCart";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const cart = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter(p => p.category === category);
    }

    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <>
      <h1>Mini E-Commerce</h1>

      <Filters
        products={products}
        setSearch={setSearch}
        setCategory={setCategory}
        setSort={setSort}
      />

      <ProductList products={filteredProducts} cart={cart} />

      <Cart cart={cart} />
    </>
  );
}

export default App;
