import { useAppSelector } from "../useHook/useReduxHook";
import Image from "next/image";
import { basketItem } from "../model/basketItem";

const Basket = () => {
  const state = useAppSelector((state) => state.basket);
  return (
    <div className="grid px-3 py-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {state.cartItems?.map((product:basketItem) => {
        return (
          <div key={product.id}>
            <div className="w-full">
              <Image width={400} height={220}  src={product.src} />
            </div>
            <div>
            <p className="font-bold">{product.name}</p>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
