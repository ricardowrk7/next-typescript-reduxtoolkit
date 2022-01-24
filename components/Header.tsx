import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  const [header, setHeader] = useState<boolean>(true);

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
        } flex justify-center sticky top-0 z-10`}
      >
        <div className={` container flex py-6 items-center`}>
          <div>logo</div>
          <div className="flex flex-1">
            <nav className="w-full">
              <ul className="flex justify-end items-center w-full">
                <li className="mr-6">signup</li>
                <li className="mr-6">login</li>
                <li className="mr-6">order</li>
                <li><Link href="/basket">
                  <span className="relative">
                  <ShoppingBagIcon className="h-8 w-8" />
                  <span className="absolute -bottom-4 left-6 bg-red-600 text-white  w-5 h-5 flex justify-center items-center rounded-full    ">2</span>
                  </span>
                  
                  </Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
     
        <div className={styles.background}></div>
     
    </>
  );
};

export default Header;
