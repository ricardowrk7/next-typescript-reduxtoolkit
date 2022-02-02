import Head from "next/head";
import Header from "../components/Header";


import { commerce } from "../lib/commerce";
import { useEffect } from "react";
import { getCookie, setCookie } from "typescript-cookie";
import { useAppDispatch, useAppSelector } from "../useHook/useReduxHook";
import { loginByCookies } from "../redux/AuthSlice";
import Products from "../components/AllProducts";
type Props = {
  data: any;
};

export default function Home({ data }: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const data = getCookie("userInfo");
    console.log(data);
    if (data) {
      const paresedData = JSON.parse(data!);

      dispatch(loginByCookies(paresedData));
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header bg={true} />
      <div className="container mx-auto">
        <Products allProducts={data} />
      </div>
    </div>
  );
}



export const getStaticProps = async () => {
  const { data } = await commerce.products.list();
  return {
    props: {
      data,
    },
  };
};
