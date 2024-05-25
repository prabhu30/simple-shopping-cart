import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import SingleProduct from "./SingleProduct";

export default function Cart() {
  const { cart } = useContext(InventoryContext);
  const paragraphClasses = "text-xl my-4 mr-8";

  const cartSum = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );

  return (
    <div className="mx-8">
      <div className=" border-b-4 border-slate-400 my-8 text-right">
        <p className={paragraphClasses}>
          <span className="font-bold">Total Items in Cart :</span> {cart.length}
        </p>
        <p className={paragraphClasses}>
          <span className="font-bold">Cart Value :</span> ${cartSum}
        </p>
      </div>
      <ul className="flex flex-wrap gap-12">
        {cart.length > 0 ? (
          cart.map((product) => (
            <li key={product.id}>
              <SingleProduct product={product} />
            </li>
          ))
        ) : (
          <h1 className="mx-auto text-2xl text-slate-700">Cart is empty!</h1>
        )}
      </ul>
    </div>
  );
}
