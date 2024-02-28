import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  console.log(cartItems);

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <CartItem key={item.cartID} cartItem={item} />
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};
export default CartItemsList;
