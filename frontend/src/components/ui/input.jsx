import { cn } from "../../lib/utils"

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-gray-100 shadow-sm transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}
