import OrbitingCircles from '@/components/magicui/orbiting-circles'
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
                <span className="bg-cyan-500 w-32 text-white font-semibold px-2 py-1 rounded-lg">Habilidades</span>
                <h3 className="lg:text-4xl text-2xl font-normal text-gray-700">Mis habilidades</h3>
            </div>
            <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                    Skills
                </span>

                {SkillsData.map((skill, index) => {
                    const orbit = index % 4; 
                    const radius = 120 + orbit * 70; 
                    const delay = index * 2; 

                    return (
                        <OrbitingCircles
                            key={index}
                            className="size-[40px] border-none bg-transparenta"
                            duration={20 + orbit * 5} 
                            delay={delay}
                            radius={radius}
                            reverse={orbit === 1} 
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className='h-10 w-10 hover:opacity-80 transition duration-200 ease-in-out'
                            />
                        </OrbitingCircles>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;