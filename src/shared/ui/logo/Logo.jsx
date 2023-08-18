import { Image } from "@mantine/core"
import { Link } from "react-router-dom"
import logo from "shared/images/logo.png"

export function Logo() {
  return (
    <Link to="/">
      <Image miw={150} maw={300} src={logo} alt="Home" />
    </Link>
  )
}
