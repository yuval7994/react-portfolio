import { useState } from "react"

function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  })

  const validate = (event) => {
    if (event.target.value === "") {
      alert(`${event.target.name} is required!`)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    console.log("click")
  }

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h2>Contact</h2>
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onBlur={validate}
          onChange={handleChange}
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onBlur={validate}
          onChange={handleChange}
        />
        <label for="message">Message</label>
        <input
          type="textfield"
          name="message"
          value={fields.message}
          onBlur={validate}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" onClick={handleClick}></input>
      </form>
    </>
  )
}
export default Contact
