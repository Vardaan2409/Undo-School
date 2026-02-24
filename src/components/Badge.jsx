import React from 'react'
import { cn } from './Button'

export const Badge = ({ className, variant = 'default', ...props }) => {
    const variants = {
        default: 'border-transparent bg-primary-500 text-white',
        secondary: 'border-transparent bg-secondary-100 text-secondary-900',
        outline: 'text-foreground border-border',
        success: 'border-transparent bg-emerald-500 text-white',
    }

    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                variants[variant],
                className
            )}
            {...props}
        />
    )
}
