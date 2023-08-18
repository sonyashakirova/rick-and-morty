import { Outlet } from "react-router"
import { Logo, Navigation, UserBlock } from "shared/ui"
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
