'use client'

import { cn } from '@/lib/utils'
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export interface InputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState)
    }

    return (
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
        >
          {showPassword ? (
            <EyeClosedIcon className="size-4" />
          ) : (
            <EyeOpenIcon className="size-4" />
          )}
        </button>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'

export { InputPassword }
