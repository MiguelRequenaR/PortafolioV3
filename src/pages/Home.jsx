import 'remixicon/fonts/remixicon.css'
import '../styles/Home.css'

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
    //estilos



    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='flex flex-col'>
                <header className=' lg:flex rounded-lg gap-16 justify-center items-center p-10'>
                    <div className="p-8">
                        <p className="text-white-400 text-2xl mb-2">My</p>
                        <h1 className="lg:text-[100px] text-6xl font-bold">
                            <span className="text-outline">Port</span><span className="text-gray-400">folio.</span>
                        </h1>
                    </div>
                    <div
                        className='space-x-5 text-center'
                        data-aos='fade-left'
                        data-aos-delay='200'
                        data-aos-duration='500'
                    >
                        {icons.map((icon, index) => (
                            <a
                                href={icon.link}
                                key={index}
                                target='_blank'
                            >
                                <button
                                    className='btn btn-neutral hover:scale-110 transition-transform duration-500 ease-in-out group'
                                >
                                    <i className={`text-white text-xl ${icon.icon} group-hover:text-cyan-300 transition-colors duration-500 ease-in-out`}></i>
                                </button>
                            </a>
                        ))}
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Home