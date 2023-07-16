import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./not-found"
import { Home } from "./home"

export function Pages() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
