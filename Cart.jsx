import CartItem from "./CartItem";

export default function Cart({ cart }) {
  if (!cart.state.items.length) return <p>Cart is empty</p>;

  return (
    <>
      <h2>Cart</h2>
      {cart.state.items.map(item => (
        <CartItem key={item.id} item={item} cart={cart} />
      ))}
      <h3>Total Items: {cart.totalItems}</h3>
      <h3>Total Price: ₹{cart.totalPrice}</h3>
    </>
  );
}
