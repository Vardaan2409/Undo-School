import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm',
        secondary: 'bg-white text-foreground border border-border hover:bg-muted',
        ghost: 'hover:bg-muted text-muted-foreground hover:text-foreground',
        outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
    }

    const sizes = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-8 text-lg',
    }

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    )
})

Button.displayName = 'Button'
