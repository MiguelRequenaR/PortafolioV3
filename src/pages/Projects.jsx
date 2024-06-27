import ProjectCard from "../components/ProjectCard"
import project1 from "../assets/project1.png"

const Projects = () => {

    const projects = [
        {
            title: "Expense Tracker - Mobile",
            description: "Aplicación movil para el seguimiento y control de gastos financieros.",
            image: project1,
            button: "Ver en GitHub",
            link: "https://github.com/kralion/expense-tracker",
        },
    ]
    return (
        <div className="pt-32 text-center bg-[#fdfff5] pb-32 ">
            <div 
                className="flex flex-col space-y-10 items-center"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
            >
                <span className="bg-gray-900 text-center w-32 text-white font-light px-2 py-1 rounded-lg">Proyectos</span>
                <h3 className="lg:text-4xl text-2xl font-normal text-black">Proyectos</h3>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 lg:px-20 px-5 py-10">
                    {
                        projects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                            />
                        ))
                    }
                </div>  
            </div>
        </div>
    )
}

export default Projects