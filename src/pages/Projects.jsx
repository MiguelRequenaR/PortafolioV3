import ProjectCard from "../components/ProjectCard"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

const Projects = () => {

    const projects = [
        {
            title: "Expense Tracker - Mobile",
            description: "Aplicación movil para el seguimiento y control de gastos financieros.",
            image: project1,
            button: "Ver en GitHub",
            link: "https://github.com/kralion/expense-tracker",
        },
        {
            title: "Constructora Marbella",
            description: "Sitio web para la empresa constructora Marbella.",
            image: project2,
            link: "https://github.com/MiguelRequenaR/ConstrucMarbella",
        },
        {
            title: "Dashboard Marbella",
            description: "Dashboard para la empresa constructora Marbella.",
            image: project3,
            link: "https://github.com/MiguelRequenaR/dashboardmarbella-remix",
        }
    ]
    return (
        <div className="pt-32 text-center bg-[#fdfff5] pb-32 " id="project">
            <div 
                className="flex flex-col space-y-10 items-center"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
            >
                <span className="bg-indigo-600 w-20 text-center text-white font-bold p-1 rounded-lg">Proyectos</span>
                <h3 className="lg:text-4xl text-2xl text-black font-black">Proyectos</h3>
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