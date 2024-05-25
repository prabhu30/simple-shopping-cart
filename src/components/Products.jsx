import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import SingleProduct from "./SingleProduct";

export default function Products() {
  const { products } = useContext(InventoryContext);

  return (
    <main className="w-5/6 p-8 px-16">
      {products.length > 0 && (
        <ul className="flex flex-wrap gap-12">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <SingleProduct product={product} />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
