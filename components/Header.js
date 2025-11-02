import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-purple-200 transition-all duration-300 transform hover:scale-105">
          🛍️ ShopZone
        </Link>
        <nav className="flex items-center space-x-8">
          <Link href="/" className="hover:text-purple-200 transition-colors font-medium">
            Products
          </Link>
          <Link href="/cart" className="relative group">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <span className="text-2xl">🛒</span>
              <span className="font-medium">Cart</span>
              {itemCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                  {itemCount}
                </span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}