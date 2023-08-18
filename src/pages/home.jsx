import { Flex, Image } from "@mantine/core"
import homeImage from "shared/images/rick-and-morty.png" 

function Home() {
  return (
    <Flex direction="column" align="center" justify="center" h="100%">
      <h1 className="visually-hidden">Home</h1>
      <Image maw={600} mx="auto" src={homeImage} alt="Rick and Morty" />
    </Flex>
  )
}

export default Home
