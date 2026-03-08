import { Heart, Ticket, CheckCircle2, Clock, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { cn } from '../lib/utils'
import { getShowColor, getShowInitials, getShowUrl } from '../data/shows'

export default function MyListTab({ shows, boughtIds, onBuy }) {
  if (shows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-6">
        <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
          <Heart className="h-6 w-6 text-gray-400 dark:text-gray-500" />
        </div>
        <p className="text-base font-medium text-gray-900 dark:text-gray-100">No shows selected</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Go to the Shows tab to add some to your list</p>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-3">
      {shows.map((show) => {
        const alreadyBought = boughtIds.has(show.id)
        return (
          <Card key={show.id} className="overflow-hidden">
            <div className="flex gap-3 p-3">
              <div className={cn(
                "w-18 h-24 rounded-lg bg-gradient-to-br flex-shrink-0 flex items-center justify-center shadow-inner",
                getShowColor(show.id)
              )} style={{ width: '4.5rem', height: '6rem' }}>
                <span className="text-white/90 font-bold text-xl tracking-wide">
                  {getShowInitials(show.title)}
                </span>
              </div>

              <div className="min-w-0 flex-1 flex flex-col justify-between">
                <div>
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
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Est. {show.year}</Badge>
                  </div>
                </div>

                <div className="mt-2">
                  {alreadyBought ? (
                    <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Ticket Purchased</span>
                    </div>
                  ) : (
                    <Button size="sm" onClick={() => onBuy(show.id)} className="gap-1.5">
                      <Ticket className="h-3.5 w-3.5" />
                      Buy Tickets
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
