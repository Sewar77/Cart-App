import { useCart } from "../context/CartContext";

const CartDropdown = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute top-16 right-4 sm:right-8 bg-white border border-gray-300 shadow-lg rounded-lg w-[90vw] sm:w-80 md:w-96 max-h-[80vh] overflow-y-auto z-50 p-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">Cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between py-3 border-b border-gray-200 gap-3 sm:gap-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1 sm:mx-4 w-full sm:w-auto text-center sm:text-left">
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-500">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex justify-center sm:justify-start items-center mt-2 space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded text-sm"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-xs"
              >
                Remove
              </button>
            </div>
          ))}

          <hr className="my-3" />
          <div className="text-right font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
