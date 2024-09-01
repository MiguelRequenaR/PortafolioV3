import Perfil from '../assets/perfilgithub.jpg'
import 'remixicon/fonts/remixicon.css'

const About = () => {
    return (
        <section
            className="flex flex-col lg:flex-row lg:justify-center gap-4 pt-24 lg:pt-16 px-4 items-center bg-[#fdfff5] pb-24"
        >
            <div
                className='flex flex-col lg:w-1/2 gap-5'
                data-aos='fade-in'
                data-aos-delay='200'
                data-aos-duration='500'
            >
                <span className='bg-cyan-500 text-center w-32 text-white font-semibold px-2 py-1 rounded-lg'>Sobre mí</span>
                <div className='flex flex-col space-y-5'>
                    <h3 className='lg:text-3xl text-2xl font-normal text-gray-700'>
                        ¿Quien soy y que hago?
                    </h3>
                    <div className='text-gray-600 lg:px-0 lg:w-3/4 w-full'>
                        <p className='text-justify text-lg'>
                            Bachiller en Ingeniería de Sistemas, con una sólida formación académica y experiencia, en el ámbito del diseño y desarrollo web. Me considero una persona proactiva y orientada a resultados, siempre buscando desafíos y soluciones innovadores. Con conocimientos en <span className='text-indigo-500 font-semibold'>HTML, CSS, JavaScript, Typescript, React, Vite, MySQL, Supabase, Git, GitHub, entre otros</span>, y en el ámbito del diseño en <span className='text-indigo-500 font-semibold'>Adobe Photoshop, Ilustrator, y Figma.</span>
                        </p>
                    </div>
                </div>
                <a
                    href="https://drive.google.com/file/d/19VklqRcxQXAxPPBLWobt4cQX3Dzrwkqu/view?usp=drive_link"
                    target='_blank'
                    className='w-fit group'
                >
                    <button
                        className='flex gap-2 items-center btn btn-neutral text-white font-bold hover:scale-110 transition-transform duration-500 ease-in-out group-hover:text-cyan-300'
                    >
                        Mi curriculum
                        <i className="ri-external-link-line "></i>
                    </button>
                </a>
            </div>
            <img
                data-aos='fade-up'
                data-aos-duration='1000'
                src={Perfil}
                alt="foto de perfil"
                className='rounded-full w-[300px] h-[300px] object-cover'
            />
        </section>
    )
}

export default About