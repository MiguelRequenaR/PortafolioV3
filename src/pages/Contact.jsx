
const Contact = () => {
    return (
        <div 
            id="contact" 
            className="pt-32 flex flex-col justify-center items-center space-y-5 pb-32"
            data-aos="fade-in"  
            data-aos-delay="200"
            data-aos-duration="500"
        >
            <h3 className="text-5xl text-center text-white font-bold">¡Contáctate conmigo!</h3>
            <p className="text-gray-400 pb-20 text-center font-semibold">
                Abierto a las oportunidades de colaborar en proyectos. Conectémonos para crear soluciones digitales e innovadoras.
            </p>
            <div
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="1000"
            >
                <a 
                    href="https://www.linkedin.com/in/miguel-angel-requena-ramos-553b5b264/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="btn btn-neutral uppercase text-white hover:scale-125 transition-transform duration-500 ease-in-out font-light">
                        Contacta conmigo
                    </button>
                </a>
            </div>
            <div className="flex gap-2 items-center mx-auto text-black">
                <hr className="border border-white w-20 rounded-md " />
                    <p className="text-white">or</p>
                <hr className="rounded-md border border-white w-20" />
            </div>
            <span className="text-gray-400 font-light">m.angelrequena20@gmail.com</span>
        </div>
    )
}

export default Contact