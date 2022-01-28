import { useAppDispatch, useAppSelector } from "../useHook/useReduxHook";
import Image from "next/image";
import { basketItem } from "../model/basketItem";
import { PlusIcon } from "@heroicons/react/solid";
import { MinusIcon } from "@heroicons/react/solid";
import { decreaseQty, increaseQty } from "../redux/basketSlice";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";

const Basket = () => {
  const router = useRouter();
  const state = useAppSelector((state) => state.basket);

  const userToken = useAppSelector((state) => state.user.userInfo.token);
  const dispatch = useAppDispatch();
  const increaseQtyHandler = (product: basketItem) => {
    dispatch(increaseQty(product));
  };

  const decreaseQtyHandler = (product: basketItem) => {
    dispatch(decreaseQty(product));
  };

  return (
    <div>
      <Header bg={false} />
      <div className="grid px-6 sm:px-16 my-5  py-5 gap-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {state.cartItems?.length! > 0 ? (
          state.cartItems?.map((product: basketItem) => {
            return (
              <div key={product.id} className="rounded  overflow-hidden">
                <div className="w-full">
                  <Image width={400} height={220} src={product.src} />
                </div>
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p className="mt-2">
                    qty*price: ${product.qty * product.price}
                  </p>
                  <div className="flex mt-3 space-x-5">
                    <span
                      onClick={() => decreaseQtyHandler(product)}
                      className="border-yellow-400 cursor-pointer border-2 px-2 flex items-center rounded"
                    >
                      <MinusIcon className="w-5 h-5 " />
                    </span>
                    <span className="font-semibold">{product.qty}</span>
                    <span
                      onClick={() => increaseQtyHandler(product)}
                      className="border-yellow-400 border-2 px-2 flex items-center rounded cursor-pointer"
                    >
                      <PlusIcon className="w-5 h-5 " />
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <p className="font-bold  text-base sm:text-lg text-gray-500 mb-4">
              there isnt any item in your basket
            </p>
            <span className="text-blue-500 font-semibold">
              <Link href="/">click here to go home page</Link>
            </span>
          </div>
        )}
      </div>
      <div className=" flex my-5 justify-center sm:justify-start container mx-auto px-4 py-4">
        {userToken ? (
          <button
            onClick={() => router.push({ pathname: "/Checkout" })}
            className="bg-yellow-400 px-8 py-2 rounded"
          >
            checkout
          </button>
        ) : (
          <button
            onClick={() => router.push({ pathname: "/SignUp" })}
            className="bg-yellow-400 px-8 py-2 rounded"
          >
            checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Basket;
