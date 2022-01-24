import { ShoppingCartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import Size from "../model/SizeModel";
import useWindowSize from "../useHook/useWindowSize";
import ProductLargeScreen from "./ProductLargeScreen";
import ProductSmallScreen from "./ProductSmallScreen";

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
         <ProductLargeScreen foodOptions={breakFast}  />
         <ProductLargeScreen foodOptions={sandwiches}  />

        </div>
      )}
      {size.width! <= 768 && (
        <div>
         <ProductSmallScreen foodOptions={breakFast} />
         <ProductSmallScreen  foodOptions={sandwiches} />
        
        </div>
      )}
    </div>
  );
};

export default Products;
