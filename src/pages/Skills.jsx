import SkillsData from '../data/skills.json'

const Skills = () => {
    return (
        <div className="pt-32 lg:pt-16 text-center lg:space-y-20 space-y-16 bg-[#fdfff5] pb-32" id='skills'>
            <div 
                className="text-center space-y-10"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="500"
            >
                <span className="bg-indigo-600 w-20 text-white font-bold p-1 rounded-lg">Habilidades</span>
                <h3 className="lg:text-3xl text-2xl text-black font-black">Mis habilidades</h3>
            </div>
            <div className='grid grid-cols-2 border-2 lg:border-none border-dashed rounded-lg lg:mx-72 mx-5 lg:grid-cols-5 lg:gap-y-14 lg:py-5 lg:px-3 justify-center'>
                {SkillsData.map((skill, index) => (
                    <div 
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                        data-aos-duration='1000'
                        title={skill.label}
                        key={index}
                        className='flex items-center justify-center duration-200 p-2'
                    >
                        <img 
                            src={skill.icon}
                            alt={skill.name}
                            className='h-20 w-20 hover:opacity-80 transition duration-200 ease-in-out'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills