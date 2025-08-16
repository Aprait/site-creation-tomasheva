import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-fast ease-gentle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-10 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - акцентная кнопка с приглушенным фоном
        default: "bg-accent-10 text-accent-ink border border-accent-10 hover:bg-accent/20 hover:border-accent/20",
        
        // Secondary - прозрачная с рамкой
        secondary: "bg-transparent text-ink border border-line hover:bg-accent-06 hover:border-accent-10",
        
        // Ghost - прозрачная без рамки
        ghost: "bg-transparent text-accent-ink border border-transparent hover:bg-accent-06 hover:border-accent-10",
        
        // Outline - с рамкой акцентного цвета
        outline: "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white",
        
        // Destructive - для опасных действий
        destructive: "bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200",
        
        // Link - как ссылка
        link: "text-accent underline-offset-4 hover:underline hover:text-accent/80 p-0 h-auto",
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }