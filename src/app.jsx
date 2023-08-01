import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { AuthProvider } from "./context/auth-provider";
import { Pages } from "./pages";
import "./styles.css"

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navigation />
          <Pages />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
