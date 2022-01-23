import { height } from "@mui/system";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  allProducts: any;
};

const Products = ({ allProducts }: Props) => {
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
              <div className="p-2 content">
                <p className="font-bold">{item.name}</p>
                <p>{item.categories[0].slug}</p>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
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
                <p>{item.categories[0].slug}</p>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
