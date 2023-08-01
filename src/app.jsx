import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Pages } from "./pages";
import "./styles.css"

export function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navigation />
        <Pages />
      </div>
    </BrowserRouter>
  )
}
