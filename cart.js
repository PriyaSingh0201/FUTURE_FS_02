import { useCart } from '../contexts/CartContext';
import Header from '../components/Header';
import Link from 'next/link';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <Header />
        <div className="container mx-auto p-4">
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-bounce">🛒</div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Your cart is empty</h1>
            <p className="text-xl text-gray-600 mb-8">Discover amazing products and start shopping!</p>
            <Link href="/" className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              🛍️ Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🛒 Shopping Cart</h1>
          <p className="text-gray-600">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl p-2">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 capitalize">📦 {item.category}</p>
                    <p className="text-2xl font-bold text-purple-600 mt-2">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.qty - 1))}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-lg transition-colors"
                    >
                      −
                    </button>
                    <span className="w-12 h-10 bg-purple-100 rounded-lg flex items-center justify-center font-bold text-purple-600">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">${(item.price * item.qty).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium mt-2 transition-colors"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">💳 Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Shipping:</span>
                  <span className="font-semibold text-green-600">Free 🚚</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-2xl font-bold text-purple-600">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link href="/checkout" className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl text-center font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  🚀 Proceed to Checkout
                </Link>
                
                <Link href="/" className="block w-full bg-gray-200 text-gray-700 py-3 rounded-xl text-center font-medium hover:bg-gray-300 transition-colors">
                  ← Continue Shopping
                </Link>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-red-100 text-red-600 py-3 rounded-xl font-medium hover:bg-red-200 transition-colors"
                >
                  🗑️ Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}