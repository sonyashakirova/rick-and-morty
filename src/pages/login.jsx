import { useRef } from "react"
import { Input } from "../components"
import { useAuth } from "shared/hooks"
import { useLocation, useNavigate } from "react-router-dom"

const initialValues = {
  name: "",
  password: "",
}

function Login() {
  const { user, login, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || "/"
  const values = useRef(initialValues)

  function handleChange(event) {
    values.current = {
      ...values.current,
      [event.target.name]: event.target.value,
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    login(values.current.name, () => navigate(from, { replace: true }))
  }

  return (
    <div className="content-wrapper">
      <h1 className="title">Login</h1>
      <form
        className="form"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <Input
          id="login-name"
          name="name"
          label="Name"
          placeholder="Enter your name"
          required
        />
        <Input
          id="login-password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
