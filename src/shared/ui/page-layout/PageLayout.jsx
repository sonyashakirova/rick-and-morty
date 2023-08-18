import { Outlet } from "react-router"
import { Navigation, UserBlock } from "../../../components"
import "./PageLayout.css"

export function PageLayout({ children }) {
  return (
    <div className="layout">
      <div className="layout-sidebar">
        <Navigation />
      </div>
      <main className="layout-main">
        {<Outlet /> || children}
      </main>
      <div className="layout-right-block">
        <UserBlock />
      </div>
    </div>
  )
}
