import React from "react";

const buttonVariants = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-gray-200 bg-white hover:bg-gray-100",
  secondary: "bg-secondary text-white hover:bg-secondary/80",
  ghost: "hover:bg-gray-100",
  link: "text-primary underline-offset-4 hover:underline",
}

const Button = React.forwardRef(({ 
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props 
}, ref) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50
        disabled:pointer-events-none disabled:opacity-50
        ${buttonVariants[variant]}
        ${className}
      `}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
});

Button.displayName = "Button"

export { Button, buttonVariants }