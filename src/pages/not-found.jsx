import { Flex, Title } from "@mantine/core"
import { ErrorWrapper } from "shared/ui"

function NotFound() {
  return (
    <Flex direction="column" align="center" justify="center" h="100%">
      <ErrorWrapper>
        <Title>404 Error</Title>
        <p>Sorry, this page does not exist :(</p>
      </ErrorWrapper>
    </Flex>
  )
}

export default NotFound
