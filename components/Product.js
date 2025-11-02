import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

export default function Product({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, qty: 1 });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
        </a>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <a className="text-lg font-semibold hover:text-blue-600">
            {product.title}
          </a>
        </Link>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}