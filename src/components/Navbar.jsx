import { useState } from "react";
import { TfiAlignRight, TfiClose, TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from "react-router-dom";


export default function Navbar() {

  const [Menu, setMenu] = useState(true);
  const [CarritoMod, setCarritoMod] = useState(true);


  const OcultarMenu = () => {
    setMenu(!Menu);
  };


  const conter = 0;


  const abrirmodalcarrito = () => {
    setCarritoMod(!CarritoMod);
  };

  const aparecer = CarritoMod ? "hidden" : "fixed right-4 top-2 py-8 px-10 rounded-2xl w-[300px] lg:w-[400px] h-[98vh] z-40 bg-black text-white " ;


  return (
    <>
      <header className="">
        <nav className="max-w-screen-xl m-auto flex justify-between items-center px-6 py-4">
          <div>
            <Link className="text-3xl" to={"/"}>
              {" "}
              Rosabella
            </Link>
          </div>
          <div className="lg:hidden">
            <TfiAlignRight
              className="cursor-pointer "
              onClick={OcultarMenu}
              size={27}
            />
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-5 text-lg">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/Catalogo"}>Catalogo</Link>
              </li>
              <li>
                <Link to={"/Arreglos"}>Arreglos</Link>
              </li>
              <li
                className=" px-7 py-1 rounded-xl bg-amber-200 cursor-pointer relative"
                onClick={abrirmodalcarrito}
              >
                <TfiShoppingCartFull size={23} />
                <p className="absolute top-[-15px] right-[-20px] text-[14px] px-4 bg-red-500 rounded-full text-white font-medium  tracking-wide ">
                  {conter}
                </p>
              </li>
            </ul>
          </nav>
          <div
            className={
              Menu
                ? "hidden"
                : "fixed w-60 h-screen right-0 top-0 bg-amber-200 z-20 lg:hidden"
            }
          >
            <TfiClose
              className="absolute top-4 right-2 cursor-pointer"
              size={27}
              onClick={OcultarMenu}
            />
            <nav>
              <ul className="text-lg">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
        <div className="lg:hidden fixed top-[60vh] z-10 right-3 p-4 bg-amber-200 rounded-full cursor-pointer" onClick={abrirmodalcarrito}>
          <TfiShoppingCartFull size={27}  />
        </div>

       
      </header>

      <aside className={aparecer}>
        <TfiClose
          className="absolute top-4 right-4 cursor-pointer"
          size={27}
          onClick={abrirmodalcarrito}
          
        />
       
        modelcarrito
      </aside>
    </>

    // un color bg-amber-200 - amarillo / rojo  bg-red-300
  );
}
