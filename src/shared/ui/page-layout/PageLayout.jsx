import { useState } from "react"
import { Outlet } from "react-router"
import { ActionIcon, Burger } from "@mantine/core"
import { ReactComponent as UserIcon } from "shared/images/user.svg"
import { Drawer, Logo, Navigation, UserBlock } from "shared/ui"
import "./PageLayout.css"

export function PageLayout({ children }) {
  const [openNavigation, setOpenNavigation] = useState(false)
  const [openUserBlock, setOpenUserBlock] = useState(false)

  return (
    <div className="layout">
      <div className="layout-header">
        <div>
          <Burger
            opened={openNavigation}
            onClick={() => {
              if (openUserBlock) setOpenUserBlock(false)
              setOpenNavigation(o => !o)
            }}
            size="md"
          />
          <Drawer from="left" opened={openNavigation} onClick={() => setOpenNavigation(false)}>
            <Navigation closeMenu={() => openNavigation(false)} />
          </Drawer>
        </div>
        <Logo />
        <div>
          <ActionIcon onClick={() => {
            if (openNavigation) setOpenNavigation(false)
            setOpenUserBlock(o => !o)
          }}>
            <UserIcon fill="#15778a" />
          </ActionIcon>
          <Drawer from="right" opened={openUserBlock} onClick={() => setOpenUserBlock(false)}>
            <UserBlock />
          </Drawer>
        </div>
      </div>
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
