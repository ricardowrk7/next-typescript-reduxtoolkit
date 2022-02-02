import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../useHook/useReduxHook";
import { UserCircleIcon } from "@heroicons/react/outline";
import { stat } from "fs";
import Image from "next/image";
import { logoutUser } from "../redux/AuthSlice";

interface Props {
  bg: boolean;
}

const Header = ({ bg }: Props) => {
  const [header, setHeader] = useState<boolean>(true);
  const state = useAppSelector((state) => state.basket);
  const userData = useAppSelector((state) => state.user);
  const dispatch=useAppDispatch()
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
  const logoutUserHandler=()=>{
   dispatch(logoutUser())
  }
  return (
    <>
      <header
        className={`${
          header ? "bg-main" : "bg-white"
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
                {userData.userInfo.name ? (
                  <>
                   <li onClick={logoutUserHandler} className="mr-4 sm:mr-7 hover:bg-gray-600 hover:text-neutral-50 cursor-pointer px-3 py-1 border-2 border-gray-400 rounded-full">
                      logout
                    </li>
                  <li className="mr-4 sm:mr-7 flex items-center">
                    <span className="mr-2 font-semibold  text-sm sm:text-base ">
                       {userData.userInfo.name}
                    </span>
                    <span>
                      <UserCircleIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </span>
                  </li>
                  </>
                ) : (
                  <>
                    <li className="mr-4 sm:mr-7 hover:bg-gray-600 hover:text-neutral-50 cursor-pointer px-3 py-1 border-2 border-gray-400 rounded-full">
                      <Link href="SignUp">signup</Link>
                    </li>
                    <li className="mr-4 sm:mr-7 hover:bg-gray-600 hover:text-neutral-50 cursor-pointer px-3 py-1 border-2 border-gray-400 rounded-full">
                      <Link href="Login">login</Link>
                    </li>
                  </>
                )}

                <li className="cursor-pointer">
                  <Link href="/Basket">
                    <span className="relative">
                      <ShoppingBagIcon className="h-6 w-6 sm:h-8 sm:w-8" />
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
