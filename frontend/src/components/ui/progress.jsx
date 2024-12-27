import React from "react";

const Progress = React.forwardRef(({ 
  value = 0, 
  className = "",
  ...props 
}, ref) => {
  return (
    <div
      className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
      ref={ref}
    >
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
});

Progress.displayName = "Progress"

export { Progress }