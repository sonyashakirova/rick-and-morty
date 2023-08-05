import { Suspense } from "react"
import { Outlet } from "react-router-dom"

function Loading() {
  return (
    <div className="content-wrapper">
      <h1 className="title">Loading...</h1>
    </div>
  )
}

export function SuspenseRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  )
}
