
const ProjectCard = ({title, description, image, link}) => {

    return (
        <div
            data-aos='fade-up'
            data-aos-duration='1000'
            className='card-container'
        >
            <div className="card w-96 shadow-xl bg-white">
                <figure className="px-10 pt-10">
                    <img 
                        src={image} 
                        alt="Shoes" 
                        className="rounded-xl" 
                    />
                </figure>
                <div className="card-body items-center text-center space-y-5">
                    <h2 className="card-title text-black font-black text-4xl">{title}</h2>
                    <p className='text-gray-700'>{description}</p>
                    <div className="card-actions">
                         <a 
                            href={link}
                            target='_blank'
                            className='w-fit group'
                        >
                            <button
                                className='flex gap-2 items-center btn text-white font-bold hover:scale-110 transition-transform duration-500 ease-in-out group-hover:text-cyan-500'
                            >
                                Ver en GitHub
                                <i className="ri-external-link-line "></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard