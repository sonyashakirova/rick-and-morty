export function Input({
  id,
  name,
  label,
  placeholder,
  required,
  type="text",
}) {
  return (
    <div>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <div className="input-container">
        <input
          id={id}
          className="input"
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  )
}
