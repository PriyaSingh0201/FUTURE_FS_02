import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useCart } from '../../contexts/CartContext';
import Header from '../../components/Header';

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    router.push('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">Loading...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-4 text-blue-500 hover:text-blue-700"
        >
          ← Go Back
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-contain p-8"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Quantity:</label>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-20 p-2 border rounded"
                >
                  {[...Array(10).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full py-3 px-4 rounded font-semibold bg-blue-500 hover:bg-blue-600 text-white"
              >
                Add to Cart
              </button>
              
              <div className="mt-6 text-gray-600">
                <p className="mb-2">
                  <span className="font-semibold">Category:</span> {product.category}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Rating:</span> {product.rating?.rate}/5 ({product.rating?.count} reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}