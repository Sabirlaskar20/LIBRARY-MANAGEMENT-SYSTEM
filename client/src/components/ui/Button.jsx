function Button({ children, type = "button", variant = "primary", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;