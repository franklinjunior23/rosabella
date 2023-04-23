import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';



export default function Catalogo() {
  const categoriasfotos = [
    {
      id: 1,
      image: "/images/aniversario1.png",
    },
    {
      id: 2,
      image: "/images/aniversario1.png",
    },{
      id: 3,
      image: "/images/aniversario1.png",
    },{
      id: 4,
      image: "/images/aniversario1.png",
    },{
      id: 5,
      image: "/images/aniversario1.png",
    },{
      id: 6,
      image: "/images/aniversario1.png",
    },
  ];

  return (
    <>
      <main className=" my-[40px] max-w-screen-xl m-auto">
        <section className="p-9">
          <h3>Para eventos</h3>
         
          <div className="flex gap-1">
          <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}

            
            
          >
            {categoriasfotos.map((fotoslider) => (
              <SwiperSlide key={fotoslider.id} className="cursor-pointer">
                 <img src={fotoslider.image}  alt="" />a
              </SwiperSlide>
              
             
            ))}
            
           
          </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}
