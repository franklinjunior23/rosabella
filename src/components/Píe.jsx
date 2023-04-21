import {TfiArrowRight } from "react-icons/tfi";
import { RiFacebookCircleFill , RiInstagramLine , RiLinkedinBoxFill } from "react-icons/ri";

export default function Píe() {
  return (
    <footer className="bg-amber-200" >
      <div className="max-w-screen-xl m-auto mt-[140px] p-9 flex flex-wrap flex-col md:items-center md:flex-row md:justify-between gap-x-7 gap-y-7">
        <div className="">
          <a href="" className="text-2xl block text-center py-3">Rosabella</a>
          <button className="flex items-center py-2 px-5 m-auto my-4 gap-2 bg-white rounded-xl"> Contactanos <TfiArrowRight/> </button>
          <button className="flex items-center  m-auto py-2 px-5 bg-white gap-2 rounded-xl">Pedidos <TfiArrowRight/></button>
        </div>
        <div className="  text-center">
          <h3 className="text-2xl py-3 ">Floreria</h3>
          <ul className="list-disc ">  
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Categoria</a>
              </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-center py-4">Siguenos en nuestras redes sociales ..!</h3>
          <div className="flex gap-1 justify-center text-4xl">
            <RiFacebookCircleFill/>
            <RiInstagramLine/>
            <RiLinkedinBoxFill/>
          </div>
        </div>
      </div>
    </footer>)
}
