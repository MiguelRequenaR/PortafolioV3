import skills from "../data/skills.json"

const ProjectCard = ({ title, description, image, link, techs, button }) => {

    const techIcons = techs.map(techName => skills.find(skill => skill.name === techName));

    return (
        <div
            data-aos='fade-up'
            data-aos-duration='1000'
            className='card-container'
        >
            <div className="card w-auto shadow-xl bg-white">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center space-y-5">
                    <h2 className="card-title text-zinc-700 text-center font-semibold text-3xl">{title}</h2>
                    <p className='text-gray-700 font-normal'>{description}</p>
                    <div className="card-actions justify-end gap-5">
                        <div className="space-x-5 flex flex-wrap items-center justify-around">
                            {techIcons.map((tech, index) => (
                                <img
                                    key={index}
                                    src={tech.icon}
                                    alt={tech.label}
                                    title={tech.label}
                                    className="w-10 h-10"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-body items-center space-y-5">
                    <a
                        href={link}
                        target='_blank'
                        className='w-fit group'
                    >
                        <button
                            className='flex gap-2 items-center btn btn-neutral text-white font-bold hover:scale-110 transition-transform duration-500 ease-in-out group-hover:text-cyan-500'
                        >
                            {button}
                            <i className="ri-external-link-line "></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard