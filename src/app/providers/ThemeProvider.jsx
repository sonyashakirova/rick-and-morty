import { MantineProvider } from "@mantine/core"

export function ThemeProvider({ children }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (theme) => ({
          ".visually-hidden": {
            position: "absolute",
            clip: "rect(0 0 0 0)",
            width: "1px",
            height: "1px",
            margin: "-1px",
          }
        }),
        colorScheme: "light",
        colors: {
          teal: [
            "#ddfcff",
            "#b7edf7",
            "#8edfef",
            "#64d2e7",
            "#3ec5e0",
            "#26acc6",
            "#18869b",
            "#095f70",
            "#003a44",
            "#00151a",
          ]
        },
        primaryColor: "teal",
        black: "#15778a",
      }}
    >
      { children }
    </MantineProvider>
  )
}
