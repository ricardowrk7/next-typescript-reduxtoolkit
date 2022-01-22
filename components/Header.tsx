import { useState, useEffect } from "react";

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
    <header className={`${header ? "bg-yellow-400" : "bg-lime-100"} flex justify-center` } >
      <div className={` container flex py-6`}>
        <div>logo</div>
        <div className="flex flex-1">
            <nav className="w-full">
                <ul className="flex justify-end w-full">
                    <li className="mr-6">signup</li>
                    <li className="mr-6">login</li>
                    <li className="mr-6">order</li>
                    <li>basket</li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
