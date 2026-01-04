export default function CartItem({ item, cart }) {
  return (
    <div>
      <span>{item.title}</span>

      <input
        type="number"
        min="1"
        max={item.stock}
        value={item.quantity}
        onChange={e =>
          cart.dispatch({
            type: "UPDATE",
            payload: { id: item.id, qty: +e.target.value }
          })
        }
      />

      <button
        onClick={() =>
          cart.dispatch({ type: "REMOVE", payload: item.id })
        }
      >
        Remove
      </button>
    </div>
  );
}
