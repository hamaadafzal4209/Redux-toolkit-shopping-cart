import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

function CartCard({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <div className="bg-white rounded-lg border-2 p-4 m-2 flex items-center">
      <img
        src={cartItem.images[0]}
        alt={cartItem.title}
        className="w-24 h-24 rounded-md mr-4"
      />
      <div>
        <h2 className="text-gray-800 text-lg font-semibold mb-2">
          {cartItem.title}
        </h2>
        <p className="text-gray-600 mb-2">${cartItem.price}</p>
        <button
          onClick={handleRemoveFromCart}
          className="bg-blue-500 text-white px-3 py-1.5 rounded-md shadow font-semibold cursor-pointer mt-4 transition-transform duration-300 hover:scale-105"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;
