import { cn } from "../../lib/utils"

export function Tabs({ value, onValueChange, children }) {
  return <div data-value={value}>{typeof children === 'function' ? children(value, onValueChange) : children}</div>
}

export function TabsList({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex w-full items-center justify-center bg-gray-100 dark:bg-gray-800 p-1 text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, active, children, badge, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        active
          ? "bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50 shadow-sm"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span className={cn(
          "ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full text-[10px] font-bold",
          active ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
        )}>
          {badge}
        </span>
      )}
    </button>
  )
}
