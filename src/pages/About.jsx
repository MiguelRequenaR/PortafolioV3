import Perfil from '../assets/perfilgithub.jpg'
import 'remixicon/fonts/remixicon.css'

const About = () => {
    return (
        <section 
            className="flex flex-col lg:flex-row lg:justify-center gap-4 pt-24 lg:pt-16 px-4 items-center bg-white pb-24"
            id='about'
        >
            <div 
                className='flex flex-col lg:w-1/2 gap-5'
                data-aos='fade-in'
                data-aos-delay='200'
                data-aos-duration='500'
            >
                <span className='bg-indigo-600 w-20 text-center text-white font-bold p-1 rounded-lg'>Sobre mí</span>
                <div className='flex flex-col space-y-5'>
                    <h3 className='lg:text-3xl text-2xl font-black text-black'>
                        ¿Quien soy y que hago?
                    </h3>
                    <div className='text-gray-600 lg:px-0 lg:w-3/4 w-full'>
                        <p>
                            Egresado de la carrera profesional de Ingeniería de Sistemas, con experiencia en el diseño gráfico y desarrollo de aplicaciones web. Con conocimientos en <span className='text-indigo-500 font-bold'>Adobe Photoshop, Ilustrator, Figma </span>
                            y en tecnologías como <span className='text-indigo-500 font-bold'>HTML, CSS, JavaScript, React, Vite, MySQL, Supabase, Git, GitHub, entre otros.</span>
                        </p>
                    </div>
                </div>
                <a 
                    href="https://drive.google.com/file/d/19VklqRcxQXAxPPBLWobt4cQX3Dzrwkqu/view?usp=drive_link"
                    target='_blank'
                    className='w-fit group'
                >
                    <button
                        className='flex gap-2 items-center btn text-white font-bold hover:scale-110 transition-transform duration-500 ease-in-out group-hover:text-cyan-500'
                    >
                        Mi curriculum
                        <i className="ri-external-link-line "></i>
                    </button>
                </a>
            </div>
            <img
                data-aos='slide-left'
                data-aos-duration='1000'
                src={Perfil}
                alt="foto de perfil"
                className='rounded-full w-[300px] h-[300px] object-cover' 
            />
        </section>
    )
}

export default About