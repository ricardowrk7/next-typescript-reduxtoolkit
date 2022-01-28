import { ShoppingCartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { addToCart } from "../redux/basketSlice";
import { useAppDispatch } from "../useHook/useReduxHook";

type Props={
    foodOptions:any
}
const ProductSmallScreen=({foodOptions}:Props)=>{
  const dispatch = useAppDispatch();
  const addToCartHandler = (item: any) => {
    console.log(item);
    dispatch(
      addToCart({
        name: item.name,
        category: item.categories[0].slug,
        price: item.price.raw,
        qty: 1,
        id: item.id,
        src: item.media.source,
      })
    );
  };
    return(
        <div className="flex Flipped my-5  overflow-x-auto px-3 py-5 space-x-5">
        {foodOptions?.map((item: any) => {
          return (
            <div
              key={item.id}
              className="shrink-0  bg-white rounded-md overflow-hidden"
              style={{ width: "280px", flexShrink: 0 }}
            >
              <div className="w-full   relative ">
                <Image width={280} height={190} src={item.media.source} />
              </div>
              <div className="p-2 content">
                <p className="font-bold">{item.name}</p>

                <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className="flex justify-between mt-2">
                  <p className="text-semibold">{item.categories[0].slug}</p>
                  <div  onClick={() => addToCartHandler(item)} className="border-2 py-1 px-2 cursor-pointer group hover:bg-yellow-400 flex justify-center space-x-4 rounded-md border-yellow-400 ">
                    <span className="text-gray-700 group-hover:text-teal-900">
                      add to cart
                    </span>
                    <ShoppingCartIcon className="h-6 w-6 text-gray-700 group-hover:text-teal-900" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
}

export default ProductSmallScreen