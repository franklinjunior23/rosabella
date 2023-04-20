import { useState } from "react";
import { TfiAlignRight , TfiClose , TfiShoppingCartFull} from "react-icons/tfi";
useState

export default function Navbar() {

    const [Menu, setMenu ] = useState(true);

    const OcultarMenu =() =>{
        setMenu( !Menu )
    }
    return (
        <header className="">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
                <div>
                    <h1 className="text-3xl	">Rosabella</h1>
                </div>
                <div className="lg:hidden">
                    <TfiAlignRight className="cursor-pointer " onClick={OcultarMenu} size={27} />
                </div>
                
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Arreglos</a>
                        </li>
                        <li>
                            <a href="">Catalogo</a>
                        </li>
                        <li className=" px-7 py-1 rounded-xl bg-amber-200 cursor-pointer ">
                            <TfiShoppingCartFull  size={23}/>
                        </li>
                    </ul>
                </nav>
                <div className={ Menu ? 'hidden' : "fixed w-60 h-screen right-0 top-0 bg-amber-200 z-20 lg:hidden"}>
                    <TfiClose className="absolute top-4 right-2 cursor-pointer" size={27} onClick={OcultarMenu}/>
                    <nav>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </nav>
            <div className="lg:hidden fixed top-[60vh] z-10 right-3 p-4 bg-amber-200 rounded-full cursor-pointer" >
                    <TfiShoppingCartFull size={27}/>
            </div>
        </header>
        // un color bg-amber-200 - amarillo / rojo  bg-red-300
    )
}
