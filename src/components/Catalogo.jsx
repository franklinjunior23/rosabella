import Sliderscat from "./Sliderscat";

export default function Catalogo() {
 
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

      <Sliderscat fots={categoriasfotos} />

      
    </>
  );
}
