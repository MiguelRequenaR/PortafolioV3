import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    return (
        <div className="pt-32 text-center bg-white pb-32 " id="project">
            <div className="flex flex-col space-y-10 items-center">
                <span className="bg-indigo-600 w-20 text-center text-white font-bold p-1 rounded-lg">Proyectos</span>
                <h3 className="lg:text-4xl text-2xl text-black font-black">Proyectos</h3>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:px-20 px-5 py-10">
                    <ProjectCard />
                    <ProjectCard />
                </div>  
            </div>
        </div>
    )
}

export default Projects