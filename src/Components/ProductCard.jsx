import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

function ProductCard({ product }) {

    const disPatch = useDispatch();
    const { cart } = useSelector(state => state)

    const handleAddToCart = () => {
        disPatch(addToCart(product))
    }
    
    const handleRemoveFromCart = () => {
        console.log("Removing");
        disPatch(removeFromCart(product.id))
    }
    
    return (
        <div className='bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300'>
            <img src={product?.images[0]} alt={product.title} className='w-full h-48 object-cover rounded-t-lg' />
            <div className='mt-4'>
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                <button onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className='bg-blue-500 text-white px-3 py-1.5 rounded-md shadow font-semibold cursor-pointer mt-4 transition-transform duration-300 hover:scale-105'>
                    {
                        cart.some(item => item.id === product.id) ? 'Remove From Cart' : 'Add To Cart'
                    }
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
