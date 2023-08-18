import { BrowserRouter } from "react-router-dom"
import { Pages } from "pages"
import { AuthProvider, ThemeProvider } from "./providers"
import { Navigation, UserBlock } from "../components"
import "../styles.css"

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="app-wrapper">
            <Navigation />
            <Pages />
            <UserBlock />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
