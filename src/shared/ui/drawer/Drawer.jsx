import "./Drawer.css"

export function Drawer({ from, opened, onClick, children }) {
  return (
    <div className={`drawer ${from} ${opened ? "show" : "hide"}`} onClick={onClick}>
      { children }
    </div>
  )
}
