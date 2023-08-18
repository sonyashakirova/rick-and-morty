import { BrowserRouter } from "react-router-dom"
import { Pages } from "pages"
import { AuthProvider } from "./providers"
import { Navigation, UserBlock } from "../components"
import "../styles.css"

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navigation />
          <Pages />
          <UserBlock />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
