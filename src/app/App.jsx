import { BrowserRouter } from "react-router-dom"
import { Pages } from "pages"
import { AuthProvider, ThemeProvider } from "./providers"

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
