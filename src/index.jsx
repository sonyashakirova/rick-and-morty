import { createRoot } from "react-dom/client"
import { Pages } from "./pages"
import "./styles.css"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Pages />)
