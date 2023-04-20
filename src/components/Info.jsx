import foto1 from '/images/info1.png'
import foto2 from '/images/info2.png'

export default function Info() {
    const info = [
        {
            title: '¿Que es Floresteria Rosabella?',
            res: 'Es un negocio emprendedor dedicado a la venta, diseño y elaboracion de arreglos florales para todas las ocasiones, aniversario, condolencias, entre otros. Mas de diez años realizando arreglos florales y ramos personalizados'
        },
        {
            title: '',
            res: 'Aqui en ROSABELLA personalizamos tus arreglos, boxes o ramos. Recuerda que si deseas entregar un detalle, no lo pienses más. Solo HAZLO haras de esa persona un dia para recordar.'
        }
    ]
    const fotoinfo = [
        {
            id: '1',
            foto: foto1
        },
        {
            id: '2',
            foto: foto2
        }
    ]
    return (
        <main className=" mt-[140px]">
            <section className="max-w-screen-xl m-auto px-5  text-center flex flex-wrap  justify-center gap-4 " >

                {
                    info.map((dato =>

                        <aside className="bg-amber-200 p-6 rounded-2xl md:w-[45%]" key={dato.title}>
                            <h3 className="py-2 text-2xl">
                                {dato.title}
                            </h3>
                            <p className="text-lg">
                                {dato.res}
                            </p>
                        </aside>
                    ))
                }

                <aside className=' p-6 flex justify-center flex-wrap gap-14 '>
                    {
                        fotoinfo.map((foto =>

                            <img key={foto.id} src={foto.foto} className='w-full md:w-[45%]' alt="" />

                        ))
                    }
                </aside>

            </section>

        </main>
    )
}
