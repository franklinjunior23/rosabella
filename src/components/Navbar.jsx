import { useState } from "react";
import { TfiAlignRight, TfiClose, TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Rosas from "/images/rosas.png";
import { HiOutlineTrash } from "react-icons/hi2";

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

  const aparecer = CarritoMod
    ? "hidden"
    : "fixed right-4 top-2 py-8 px-4 md:px-7 rounded-2xl w-[300px] lg:w-[400px] h-[98vh] z-40 bg-white text-white shadow-2xl	 ";

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
        <div
          className="lg:hidden fixed top-[60vh] z-10 right-3 p-4 bg-amber-200 rounded-full cursor-pointer"
          onClick={abrirmodalcarrito}
        >
          <TfiShoppingCartFull size={27} />
        </div>
      </header>

      <aside className={aparecer}>
        <TfiClose
          className="absolute top-2 right-4 cursor-pointer "
          size={25}
          color="black"
          fontWeight={700}
          onClick={abrirmodalcarrito}
        />
        <main className=" mt-2 h-5/6 w-full overflow-y-auto	  text-black  ">
          <section className="flex overflow-hidden border-t border-b-4 rounded-3xl h-30 my-4">
            <img
              src={Rosas}
              alt=""
              className="w-[110px] h-[120px] block p-2 rounded-2xl "
            />
            <div className="p-4 lg:p-2 ">
              <p className=" w-32 lg:w-48 h-14 lg:text-xl">
                Rosas Rojas Bretaña
              </p>
              <div className="grid  grid-cols-4 lg:mt-2	gap-x-1">
                <button> - </button>
                <input
                  className="text-center w-[40px]"
                  readOnly
                  type="text"
                  name=""
                  id=""
                />
                <button> + </button>
                <button>
                  {" "}
                  <HiOutlineTrash size={24} />{" "}
                </button>
              </div>
            </div>
          </section>
          <section className="flex overflow-hidden border-t border-b-4 rounded-3xl h-30 my-4">
            <img
              src={Rosas}
              alt=""
              className="w-[110px] h-[120px] block p-2 rounded-2xl "
            />
            <div className="p-4 lg:p-2 ">
              <p className=" w-32 lg:w-48 h-14 lg:text-xl">
                Rosas Rojas Bretaña
              </p>
              <div className="grid  grid-cols-4 lg:mt-2	gap-x-1">
                <button> - </button>
                <input
                  className="text-center w-[40px]"
                  readOnly
                  type="text"
                  name=""
                  id=""
                />
                <button> + </button>
                <button>
                  {" "}
                  <HiOutlineTrash size={24} />{" "}
                </button>
              </div>
            </div>
          </section>
          <section className="flex overflow-hidden border-t border-b-4 rounded-3xl h-30 my-4">
            <img
              src={Rosas}
              alt=""
              className="w-[110px] h-[120px] block p-2 rounded-2xl "
            />
            <div className="p-4 lg:p-2 ">
              <p className=" w-32 lg:w-48 h-14 lg:text-xl">
                Rosas Rojas Bretaña
              </p>
              <div className="grid  grid-cols-4 lg:mt-2	gap-x-1">
                <button> - </button>
                <input
                  className="text-center w-[40px]"
                  readOnly
                  type="text"
                  name=""
                  id=""
                />
                <button> + </button>
                <button>
                  {" "}
                  <HiOutlineTrash size={24} />{" "}
                </button>
              </div>
            </div>
          </section>
          <section className="flex overflow-hidden border-t border-b-4 rounded-3xl h-30 my-4">
            <img
              src={Rosas}
              alt=""
              className="w-[110px] h-[120px] block p-2 rounded-2xl "
            />
            <div className="p-4 lg:p-2 ">
              <p className=" w-32 lg:w-48 h-14 lg:text-xl">
                Rosas Rojas Bretaña
              </p>
              <div className="grid  grid-cols-4 lg:mt-2	gap-x-1">
                <button> - </button>
                <input
                  className="text-center w-[40px]"
                  readOnly
                  type="text"
                  name=""
                  id=""
                />
                <button> + </button>
                <button>
                  {" "}
                  <HiOutlineTrash size={24} />{" "}
                </button>
              </div>
            </div>
          </section>
          
          

          

          
        </main>
        <hr className="to-black  border-black	" />
        <section className="text-black">
            <div className="grid grid-cols-2 text-xl my-5">
              <h4> Subtotal  </h4>
              <h4 className="text-end"> $ 202.20 </h4>
              
            </div>
          </section>
      </aside>
    </>

    // un color bg-amber-200 - amarillo / rojo  bg-red-300
  );
}
