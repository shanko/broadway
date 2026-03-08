import { TicketCheck, ShoppingBag, MapPin, Clock } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { cn } from '../lib/utils'
import { getShowColor, getShowInitials, getShowUrl } from '../data/shows'

export default function BoughtTab({ shows }) {
  if (shows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-6">
        <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
          <ShoppingBag className="h-6 w-6 text-gray-400 dark:text-gray-500" />
        </div>
        <p className="text-base font-medium text-gray-900 dark:text-gray-100">No tickets yet</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Buy tickets from your list to see them here</p>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-3">
      {shows.map((show) => (
        <Card key={show.id} className="border-green-100 dark:border-green-900/50 overflow-hidden">
          <div className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900/50 px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-green-700 dark:text-green-400">
              <TicketCheck className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold">Ticket Confirmed</span>
            </div>
            <Badge variant="success" className="text-[10px]">Purchased</Badge>
          </div>

          <div className="flex gap-3 p-3">
            <div className={cn(
              "w-18 h-24 rounded-lg bg-gradient-to-br flex-shrink-0 flex items-center justify-center shadow-inner relative",
              getShowColor(show.id)
            )} style={{ width: '4.5rem', height: '6rem' }}>
              <span className="text-white/90 font-bold text-xl tracking-wide">
                {getShowInitials(show.title)}
              </span>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                <TicketCheck className="h-3 w-3 text-white" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <a href={getShowUrl(show)} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline text-sm leading-tight">{show.title}</a>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{show.description}</p>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                  <MapPin className="h-3 w-3" />{show.venue}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                  <Clock className="h-3 w-3" />{show.runtime}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{show.category}</Badge>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{show.rating}</Badge>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
