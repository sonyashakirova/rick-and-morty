import { Button, PasswordInput, SimpleGrid, TextInput, Title } from "@mantine/core"
import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "shared/hooks"

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
    <SimpleGrid cols={1}>
      <Title order={1}>Login</Title>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <SimpleGrid cols={1}>
          <TextInput
            id="login-name"
            name="name"
            label="Name"
            placeholder="Enter your name"
            withAsterisk
            required
            miw={240}
            maw={350}
          />
          <PasswordInput
            id="login-password"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            withAsterisk
            required
            miw={240}
            maw={350}
          />
          <Button type="submit" radius="md" w="max-content" mt={14}>
            Submit
          </Button>
        </SimpleGrid>
      </form>
    </SimpleGrid>
  )
}

export default Login
