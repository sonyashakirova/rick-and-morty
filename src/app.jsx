import { BrowserRouter } from "react-router-dom";
import { UserBlock } from "./components/user-block";
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
          <UserBlock />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
