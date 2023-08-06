import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Loading } from "./loading"

export function SuspenseRoute({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      {children || <Outlet />}
    </Suspense>
  )
}
