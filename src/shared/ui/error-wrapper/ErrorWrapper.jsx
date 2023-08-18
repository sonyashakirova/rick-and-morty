import "./ErrorWrapper.css"

export function ErrorWrapper({ children }) {
  return (
    <div className="error-wrapper">
      {children}
    </div>
  )
}
