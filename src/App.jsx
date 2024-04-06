import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import About from "./pages/About"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div >
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App