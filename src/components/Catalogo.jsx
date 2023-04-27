import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";

export default function Catalogo() {
  const [width, setWidth] = useState(window.innerWidth);

  const viewrot = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", viewrot);
    return () => {
      window.removeEventListener("resize", viewrot);
    };
  }, [width]);



  const categoriasfotos = [
    {
      id: 1,
      image: "/images/aniversario1.png",
    },
    {
      id: 2,
      image: "/images/aniversario1.png",
    },
    {
      id: 3,
      image: "/images/aniversario1.png",
    },
    {
      id: 4,
      image: "/images/aniversario1.png",
    },
    {
      id: 5,
      image: "/images/aniversario1.png",
    },
    {
      id: 6,
      image: "/images/aniversario1.png",
    },
  ];

  return (
    <>
      <main className=" my-[40px] max-w-screen-xl m-auto">
        <section className="p-9">
          <h3>Para eventos {width} </h3>
        
          <div className="flex gap-1">
            <Swiper 
            spaceBetween={10} 
            slidesPerView={  width > 800 ? 3 : 1 }>

              { 
              categoriasfotos.map((fotoslider) => (

                <SwiperSlide key={fotoslider.id} className="cursor-pointer">
                  <img src={fotoslider.image} alt="" />
                </SwiperSlide>

              )) }
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}
