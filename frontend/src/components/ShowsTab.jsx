import { Check, ListChecks, Clock, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { cn } from '../lib/utils'
import { getShowColor, getShowInitials, getShowUrl } from '../data/shows'

function formatAsOf(date) {
  if (!date) return 'today'
  return date.toLocaleString(undefined, {
    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
  })
}

export default function ShowsTab({ shows, selectedIds, onToggle, onSelectAll, lastUpdated }) {
  const allSelected = selectedIds.size === shows.length

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">All Shows <span className="font-normal text-gray-500 dark:text-gray-400">(as of {formatAsOf(lastUpdated)})</span></h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{shows.length} shows on Broadway</p>
        </div>
        <Button variant="outline" size="sm" onClick={onSelectAll} className="gap-1.5">
          <ListChecks className="h-3.5 w-3.5" />
          {allSelected ? 'Deselect All' : 'Select All'}
        </Button>
      </div>

      <div className="space-y-2.5">
        {shows.map((show) => {
          const selected = selectedIds.has(show.id)
          return (
            <button
              key={show.id}
              onClick={() => onToggle(show.id)}
              className={cn(
                "w-full text-left rounded-xl border transition-all duration-150 overflow-hidden",
                selected
                  ? "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 shadow-sm shadow-blue-100 dark:shadow-none"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 active:bg-gray-50 dark:active:bg-gray-800"
              )}
            >
              <div className="flex gap-3 p-3">
                <div className={cn(
                  "w-16 h-20 rounded-lg bg-gradient-to-br flex-shrink-0 flex items-center justify-center shadow-inner",
                  getShowColor(show.id)
                )}>
                  <span className="text-white/90 font-bold text-lg tracking-wide">
                    {getShowInitials(show.title)}
                  </span>
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <a
                        href={getShowUrl(show)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-semibold text-blue-600 dark:text-blue-400 hover:underline text-sm leading-tight"
                      >{show.title}</a>
                      <div
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5",
                          selected ? "bg-blue-600 border-blue-600" : "border-gray-300 dark:border-gray-600"
                        )}
                      >
                        {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{show.description}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                      <MapPin className="h-3 w-3" />{show.venue.split(' ').slice(0, 2).join(' ')}...
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                      <Clock className="h-3 w-3" />{show.runtime}
                    </span>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                      {show.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
