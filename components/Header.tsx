import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useAppSelector } from "../useHook/useReduxHook";
import { stat } from "fs";
import Image from "next/image";

interface Props {
  bg: boolean;
}

const Header = ({ bg }: Props) => {
  const [header, setHeader] = useState<boolean>(true);
  const state = useAppSelector((state) => state.basket);
  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 150) {
      return setHeader(true);
    } else if (window.scrollY > 153) {
      return setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <header
        className={`${
          header ? "bg-main" : "bg-lime-100"
        } flex justify-center sticky top-0 z-10 `}
      >
        <div className={` container flex py-4 px-5 items-center`}>
          <div className="cursor-pointer">
            <Link href="/">
              <Image width={35} height={35} src="/brand.png" />
            </Link>
          </div>
          <div className="flex flex-1">
            <nav className="w-full">
              <ul className="flex justify-end items-center w-full">
                <li className="mr-6 cursor-pointer"><Link href="SignUp">signup</Link></li>
                <li className="mr-6 cursor-pointer">login</li>
                <li className="mr-6 cursor-pointer">order</li>
                <li className="cursor-pointer">
                  <Link href="/Basket">
                    <span className="relative">
                      <ShoppingBagIcon className="h-8 w-8" />
                      {state.cartItems?.length! > 0 ? (
                        <span className="absolute -bottom-4 left-6 bg-red-600 text-white  w-5 h-5 flex justify-center items-center rounded-full    ">
                          {state.cartItems?.length}
                        </span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {bg && <div className={styles.background}></div>}
    </>
  );
};

export default Header;
