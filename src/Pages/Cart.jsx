import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../Components/CartCard";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="p-4">
      {cart && cart.length > 0 ? (
        <div className="min-h-[80vh] max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-4">
          <div className="grid">
            {cart.map((cartItem, index) => (
              <CartCard key={index} cartItem={cartItem} />
            ))}
          </div>
            <div className="border-2  rounded-md border-black space-y-3 p-5">
              <h1 className="text-xl font-semibold text-red-700">Your Cart Summary</h1>
              <h1 className="text-lg font-semibold">Total Items : <span>{cart.length}</span></h1>
              <h1 className="text-lg font-semibold">Total Amount : <span>${totalCart}</span></h1>
            </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart is empty
          </h1>
          <Link to="/">
            <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md shadow font-semibold cursor-pointer mt-4 transition-transform duration-300 hover:scale-105">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
