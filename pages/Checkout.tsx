import { useAppSelector } from "../useHook/useReduxHook";

const Checkout = () => {
  const state = useAppSelector((state) => state.basket);
  const totalPrice = state.cartItems!.reduce((a, c) => a + c.price, 0);
  const userName = useAppSelector((state) => state.user.userInfo.name);
  return (
    <div className="container my-10 px-6 mx-auto ">
     <div className="border-2 p-3 border-yellow-400 shadow-md rounded-md">
     <h1 className="font-bold text-lg text-gray-500">thanks {userName} </h1>
      <h1 className="mt-4 font-bold text-zinc-600 ">
        your total price is
        <span className=" text-gray-900 font-extrabold text-xl ">
          {totalPrice}$
        </span>
      </h1>
     </div>
    </div>
  );
};

export default Checkout;
