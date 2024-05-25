import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function SingleProduct({ product }) {
  const { cart, addProductToCart, removeProductFromCart } =
    useContext(InventoryContext);

  return (
    <div className="border border-slate-300 p-3 rounded bg-slate-200">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-56 h-56 rounded bg-white"
      />
      <h1 className="my-2 w-48 h-12 overflow-hidden">{product.title}</h1>
      <div className="flex items-center justify-between">
        <span>${product.price}</span>
        {cart.includes(product) ? (
          <button
            className="mx-1 px-3 py-1 rounded bg-orange-300"
            onClick={() => removeProductFromCart(product.id)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="mx-1 px-3 py-1 rounded bg-orange-300"
            onClick={() => addProductToCart(product.id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
