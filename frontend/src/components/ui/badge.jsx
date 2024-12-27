import React from "react";

const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border border-gray-200 text-gray-800",
  success: "bg-green-100 text-green-800",
}

const Badge = React.forwardRef(({
  className = "",
  variant = "default",
  children,
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
        transition-colors focus:outline-none focus:ring-2 focus:ring-ring
        ${badgeVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
})

Badge.displayName = "Badge"

export { Badge, badgeVariants }