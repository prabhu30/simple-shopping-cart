import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

export default function Sidebar() {
  const btnClasses = "hover:bg-slate-400 py-3";
  const { sortByPrice } = useContext(InventoryContext);

  return (
    <aside className="w-1/5 h-screen text-center py-8 text-xl bg-slate-300 flex flex-col gap-3">
      <h1 className="my-4 text-2xl font-bold">Filter Products</h1>
      <button className={btnClasses} onClick={() => sortByPrice("asc")}>
        Sort by: Price: Low to High
      </button>
      <button className={btnClasses} onClick={() => sortByPrice("desc")}>
        Sort by: Price: High to Low
      </button>
      <button
        className="bg-blue-600 text-white w-1/2 mx-auto mt-5 p-2 disabled:bg-slate-600 cursor-not-allowed"
        disabled
      >
        Clear Filters
      </button>
    </aside>
  );
}
