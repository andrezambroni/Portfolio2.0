import React from "react"
import "./styles/global.css"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
