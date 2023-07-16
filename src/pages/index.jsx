import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"

export function Pages() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
