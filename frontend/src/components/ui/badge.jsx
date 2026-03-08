import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-600 text-white",
        secondary: "border-transparent bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300",
        success: "border-transparent bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400",
        outline: "text-gray-950 dark:text-gray-50 border-gray-200 dark:border-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
