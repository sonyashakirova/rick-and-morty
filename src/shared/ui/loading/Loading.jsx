import { Flex, Loader } from "@mantine/core"

export function Loading() {
  return (
    <Flex mih={300} justify="center" align="center">
      <Loader size="lg" />
    </Flex>
  )
}
