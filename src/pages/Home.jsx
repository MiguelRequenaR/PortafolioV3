import 'remixicon/fonts/remixicon.css'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {

    const icons = [
        {
            name: 'LinkedIn',
            icon: 'ri-linkedin-fill',
            link: 'https://www.linkedin.com/in/miguel-angel-requena-ramos-553b5b264/'
        },
        {
            name: 'GitHub',
            icon: 'ri-github-fill',
            link: 'https://github.com/MiguelRequenaR'
        },
    ]

    return (
        <div className='flex h-screen items-center justify-center' id='home'>
            <div className='flex flex-col'>
                <header className='hidden lg:flex rounded-lg gap-16 justify-center items-center p-10'>
                    <div>
                        <span className='text-6xl font-black text-white'>Miguel Angel</span>
                    </div>
                    <div className='space-x-5'>
                        {icons.map((icon, index) => (
                            <a 
                                href={icon.link}
                                key={index}
                                target='_blank'
                            >
                                <button 
                                    className='btn hover:scale-150 transition-transform duration-500 ease-in-out'
                                >
                                    <i className={`text-white text-xl ${icon.icon}`}></i>
                                </button>
                            </a>
                        ))}
                    </div>
                </header>
                <div>
                    <div>
                        <span>
                            <TypeAnimation
                                className="text-6xl text-center text-black font-black"
                                cursorColor="cyan"
                                sequence={['Full Stack Developer']}
                                wrapper="h1"
                                cursor={false}
                            />
                        </span>
                        <TypeAnimation
                                className="text-6xl text-center text-cyan-400 font-black"
                                cursorColor="cyan"
                                sequence={['Desarrollador Web', 'Diseñador Gráfico']}
                                wrapper="p"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home