import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart, searchProducts } = useContext(InventoryContext);

  return (
    <header className="bg-slate-800 text-white flex justify-around items-center px-4 py-5">
      <h1 className="text-2xl">Shoppy</h1>
      <div className="flex items-center">
        <input
          type="text"
          className="p-2 px-6 text-black rounded-full rounded-r-none focus:outline-none"
          onChange={(event) => searchProducts(event.target.value)}
        />
        <button onClick={(event) => searchProducts(event.target.value)}>
          <i className="fa-solid fa-magnifying-glass bg-orange-300 text-black rounded-full rounded-l-none p-3 px-5 hover:bg-orange-400"></i>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
        </Link>
        <span className="text-xl text-orange-300">{cart.length}</span>
      </div>
    </header>
  );
}
