import { Link, useRouteError } from "react-router-dom";
import imageerror from "/images/error404.png";
import { TfiArrowRight } from "react-icons/tfi";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="w-screen h-screen bg-black grid place-content-center ">
      <div>
        <img src={imageerror} alt="" className="" width={1200} />
        <Link
          to={"/"}
          className="text-white flex justify-center gap-x-3 items-center"
        >
          Volver al Inicio
          <TfiArrowRight />
        </Link>
      </div>
    </div>
  );
}
