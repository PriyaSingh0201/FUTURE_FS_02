import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '../contexts/CartContext';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = total * 0.1;
  const shipping = 0; // Free shipping
  const finalTotal = total + tax + shipping;

  const onSubmit = async (data) => {
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setOrderComplete(true);
    clearCart();
    setProcessing(false);
  };

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <Header />
        <div className="container mx-auto p-4 text-center py-20">
          <div className="text-8xl mb-6">😕</div>
          <h1 className="text-3xl font-bold mb-4">No items to checkout</h1>
          <Link href="/" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Header />
        <div className="container mx-auto p-4">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-2xl text-center mt-20">
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-3xl font-bold text-green-800 mb-4">Order Successful!</h1>
            <p className="text-gray-600 mb-2">Thank you for your purchase!</p>
            <p className="text-sm text-gray-500 mb-8">Order confirmation sent to your email</p>
            
            <div className="bg-green-50 p-4 rounded-2xl mb-6">
              <p className="text-green-800 font-semibold">Order Total: ${finalTotal.toFixed(2)}</p>
              <p className="text-green-600 text-sm">Estimated delivery: 3-5 business days</p>
            </div>
            
            <button
              onClick={() => router.push('/')}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              🛍️ Continue Shopping
            </button>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🚀 Checkout</h1>
          <p className="text-gray-600">Complete your order in just a few steps</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Shipping Information</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">👤 First Name</label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">👤 Last Name</label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">📧 Email</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                  type="email"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">🏠 Address</label>
                <input
                  {...register('address', { required: 'Address is required' })}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="123 Main Street"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">🏙️ City</label>
                  <input
                    {...register('city', { required: 'City is required' })}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                    placeholder="New York"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">📮 ZIP Code</label>
                  <input
                    {...register('zip', { required: 'ZIP code is required' })}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                    placeholder="10001"
                  />
                  {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">💳 Payment Method</h3>
                <div className="space-y-3">
                  {[
                    { value: 'credit', label: '💳 Credit Card', desc: 'Visa, Mastercard, Amex' },
                    { value: 'paypal', label: '🅿️ PayPal', desc: 'Pay with your PayPal account' },
                    { value: 'cash', label: '💵 Cash on Delivery', desc: 'Pay when you receive' }
                  ].map((method) => (
                    <label key={method.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-300 transition-all duration-300">
                      <input
                        {...register('payment', { required: 'Payment method is required' })}
                        type="radio"
                        value={method.value}
                        className="mr-4 w-5 h-5 text-purple-600"
                      />
                      <div>
                        <div className="font-semibold">{method.label}</div>
                        <div className="text-sm text-gray-600">{method.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.payment && <p className="text-red-500 text-sm mt-1">{errors.payment.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {processing ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⏳</span>
                    Processing Order...
                  </span>
                ) : (
                  `🚀 Place Order - $${finalTotal.toFixed(2)}`
                )}
              </button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.title.slice(0, 40)}...</h4>
                    <p className="text-gray-600 text-sm">Qty: {item.qty}</p>
                  </div>
                  <span className="font-bold text-purple-600">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 border-t pt-6">
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Tax (10%):</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping:</span>
                <span className="font-semibold text-green-600">Free 🚚</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-purple-600 border-t pt-3">
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}