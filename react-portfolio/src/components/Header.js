function Header({ section, setSection }) {
  const handleClick = (newSection) => {
    setSection(newSection)
  }
  return (
    <header className="App-Header">
      <h1>Yuval</h1>
      <nav>
        <a
          className={section === "about" ? "active" : ""}
          onClick={(e) => handleClick("about")}
        >
          About Me
        </a>
        <a
          className={section === "portfolio" ? "active" : ""}
          onClick={(e) => handleClick("portfolio")}
        >
          Portfolio
        </a>
        <a
          className={section === "contact" ? "active" : ""}
          onClick={(e) => handleClick("contact")}
        >
          Contact
        </a>
        <a
          className={section === "resume" ? "active" : ""}
          onClick={(e) => handleClick("resume")}
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Header
