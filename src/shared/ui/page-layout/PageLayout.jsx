import { Outlet } from "react-router"
import { UserBlock } from "../../../components"
import { Logo, Navigation } from "shared/ui"
import "./PageLayout.css"

export function PageLayout({ children }) {
  return (
    <div className="layout">
      <div className="layout-sidebar">
        <Logo />
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
