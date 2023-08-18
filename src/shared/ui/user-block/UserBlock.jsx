import { Button, Flex, Text } from "@mantine/core"
import { useNavigate } from "react-router"
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "shared/hooks"

export function UserBlock() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleClick() {
    logout(() => navigate("/"))
  }

  return (
    <Flex direction="column" gap="xs" align="end">
      {user === null
        ? <Button component={Link} to="/login" radius="md">
            Login
          </Button>
        : <>
            <Text italic>Hello, {user}!</Text>
            <Button onClick={handleClick} radius="md">
              Logout
            </Button>
          </>
      }
    </Flex>
  )
}
