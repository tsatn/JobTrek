import * as React from "react"

import { cn } from "@/lib/utils"

// Instead of extending InputHTMLAttributes with an empty interface,
// we'll use a type alias and add a custom property
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  // Adding a custom property as an example
  // Remove this if you don't need any custom properties
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, wrapperClassName, ...props }, ref) => {
    return (
      <div className={wrapperClassName}>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
export type { InputProps }