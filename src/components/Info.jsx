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

                        <aside className="bg-amber-200 p-8 rounded-2xl md:w-[45%]" key={dato.title}>
                            <h3 className="py-2 text-2xl">
                                {dato.title}
                            </h3>
                            <p className="text-lg">
                                {dato.res}
                            </p>
                        </aside>
                    ))
                }

                <aside className=' p-8 flex justify-center flex-wrap gap-14 '>
                    {
                        fotoinfo.map((foto =>

                            <img key={foto.id} src={foto.foto} className='w-full md:w-[45%]' alt="" />

                        ))
                    }
                </aside>

            </section>

            <section className='mt-[100px] max-w-screen-xl m-auto p-5 py-6'>
                <h3 className='text-center text-2xl py-5 bg-[url("")] mb-10 tracking-wide	'>TE INVITAMOS A NUESTRA TIENDA, ¡VEN! VISÍTANOS </h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.7818716548381!2d-76.99754653596544!3d-12.128458022400691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f7ddf912b9%3A0xe96baced7539a30d!2sFloreria%20Rosabella!5e0!3m2!1ses!2spe!4v1656897609492!5m2!1ses!2spe"
                    className='w-full h-[500px]' >
                </iframe>
               

            </section>

        </main>
    )
}
