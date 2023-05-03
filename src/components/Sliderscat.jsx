
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";



export default function Sliderscat(props) {

    
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
  
    
  return (
    <main className=" my-[40px] max-w-screen-xl m-auto">
        <section className="p-9">
          <h3>Para eventos {width} </h3>
        
          <div className="flex gap-1">
            <Swiper 
            spaceBetween={10} 
            slidesPerView={  width > 800 ? 3 : 1 }>

              { 
              props.fots.map((fotoslider) => (

                <SwiperSlide key={fotoslider.id} className="cursor-pointer">
                  <img src={fotoslider.image} alt="" />
                </SwiperSlide>

              )) }
            </Swiper>
          </div>
        </section>
      </main>
  )
}
