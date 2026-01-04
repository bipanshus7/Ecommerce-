export default function ProductCard({ product, cart }) {
  const inStock = product.stock > 0;

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>

      <button
        disabled={!inStock}
        onClick={() =>
          cart.dispatch({
            type: "ADD",
            payload: {
              id: product.id,
              title: product.title,
              price: product.price,
              stock: product.stock
            }
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
