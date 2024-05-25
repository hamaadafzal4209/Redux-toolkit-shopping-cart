import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../Components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();  // Await here to get the JSON data

            if (data) {
                setProducts(data);  // Set the fetched products
                setLoading(false);
                console.log(data);
            }
        } catch (error) {
            console.error("Failed to fetch products", error);
            setLoading(false);  // Stop loading on error
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            ) : (
                <div className="min-h-[80vh] max-w-6xl mx-auto px-6">
                    {products && products.length > 0 ? (
                        <div className="grid  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {products.map((productItem, index) => (
                                <ProductCard key={index} product={productItem} />
                            ))}
                        </div>
                    ) : (
                        <p>No products available</p> 
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;
