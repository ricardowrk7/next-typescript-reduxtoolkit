import { ShoppingCartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import Size from "../model/SizeModel";
import useWindowSize from "../useHook/useWindowSize";

type Props = {
  allProducts: any;
};

const Products = ({ allProducts }: Props) => {
  const size: Size = useWindowSize();

  const [breakFast, setBreakfast] = useState<any>(null);
  const [sandwiches, setSandwiches] = useState<any>(null);

  useEffect(() => {
    setBreakfast(
      allProducts.filter((item: any) => item.categories[0].slug === "breakfast")
    );
    setSandwiches(
      allProducts.filter((item: any) => item.categories[0].slug === "sandwich")
    );
  }, []);
  return (
    <div>
      {size.width! >= 768 && (
        <div>
          <div className="flex  Flipped my-5 justify-between overflow-x-scroll px-5 py-5 space-x-5">
            {breakFast?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="shrink-0  Content bg-white rounded-md overflow-hidden"
                  style={{ width: "400", flexShrink: 0 }}
                >
                  <div className="w-full   ">
                    <Image width={400} height={220} src={item.media.source} />
                  </div>
                  <div className="p-2">
                    <p className="font-bold">{item.name}</p>

                    <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
                    <div className="flex justify-between mt-2">
                      <p className="font-semibold">{item.categories[0].slug}</p>
                      <div className="border-2 py-1 px-2 group hover:bg-yellow-400 flex justify-center space-x-4 rounded-md border-yellow-400 ">
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

          <div className="flex Flipped my-5  overflow-x-auto px-5 py-5 space-x-5">
            {sandwiches?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="shrink-0 Content bg-white rounded-md overflow-hidden"
                  style={{ width: "400px", flexShrink: 0 }}
                >
                  <div className="w-full   relative ">
                    <Image width={400} height={220} src={item.media.source} />
                  </div>
                  <div className="p-2 content">
                    <p className="font-bold">{item.name}</p>

                    <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
                    <div className="flex justify-between mt-2">
                      <p className="font-semibold">{item.categories[0].slug}</p>
                      <div className="border-2 py-1 px-2 group hover:bg-yellow-400 flex justify-center space-x-4 rounded-md border-yellow-400 ">
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
        </div>
      )}
      {size.width! <= 768 && (
        <div>
          <div className="flex Flipped my-5  overflow-x-auto px-3 py-5 space-x-5">
            {breakFast?.map((item: any) => {
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
                      <p>{item.categories[0].slug}</p>
                      <div className="border-2 py-1 px-2 group hover:bg-yellow-400 flex justify-center space-x-4 rounded-md border-yellow-400 ">
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

          <div className="flex Flipped my-5  overflow-x-auto px-3 py-5 space-x-5">
            {sandwiches?.map((item: any) => {
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
                      <p>{item.categories[0].slug}</p>
                      <div className="border-2 py-1 px-2 group hover:bg-yellow-400 flex justify-center space-x-4 rounded-md border-yellow-400 ">
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
        </div>
      )}
    </div>
  );
};

export default Products;
