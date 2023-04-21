import Homefoto from '/images/Home.png'

export default function Slider() {
    return (
        <header className=''>
            <section className='max-w-screen-xl m-auto mt-7 px-3 relative'>
                <img src={Homefoto} alt="" className='w-full h-[600px]  lg:h-[750px] ' />
                <div className='absolute top-0 left-0 w-full h-full grid place-content-center text-center '>
                    <div className='backdrop-blur-sm bg-white/50 p-6 rounded-xl md:px-6 '>
                       <h2 className='text-4xl md:text-5xl font-bold  font-Open py-3'>Floresteria Rosabella </h2>
                       <h3 className='text-xl py-3 font-medium'>Para conquistar los corazones más exigentes</h3>
                       <button className='bg-yellow-200 py-2 px-6 rounded-xl mt-4 uppercase font-medium text-xl' > Compra ya ! </button>
                    </div>
                </div>
            </section>
        </header>
    )
}
