import "./App.css"
import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

function App() {
  const [section, setSection] = useState("about")

  return (
    <>
      <Header section={section} setSection={setSection} />
      <div className="App">
        {section === "about" && <AboutMe />}
        {section === "portfolio" && <Portfolio />}
        {section === "contact" && <Contact />}
        {section === "resume" && <Resume />}
      </div>

      <Footer />
    </>
  )
}

export default App
