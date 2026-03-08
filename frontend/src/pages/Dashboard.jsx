import { useState, useEffect, useCallback } from 'react'
import { LogOut, Theater, RefreshCw } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import { BROADWAY_SHOWS } from '../data/shows'
import { scrapeShows } from '../lib/scraper'
import { Button } from '../components/ui/button'
import { TabsList, TabsTrigger } from '../components/ui/tabs'
import ShowsTab from '../components/ShowsTab'
import MyListTab from '../components/MyListTab'
import BoughtTab from '../components/BoughtTab'

const TABS = ['Shows', 'My List', 'Bought']
const UPDATE_COOLDOWN_MS = (import.meta.env.VITE_UPDATE_COOLDOWN_MINUTES || 5) * 60 * 1000

export default function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState(0)
  const [shows, setShows] = useState(BROADWAY_SHOWS)
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [boughtIds, setBoughtIds] = useState(new Set())
  const [updating, setUpdating] = useState(false)
  const [updateMsg, setUpdateMsg] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [cooldownEnd, setCooldownEnd] = useState(0)
  const [remainingSecs, setRemainingSecs] = useState(0)

  const onCooldown = remainingSecs > 0

  useEffect(() => {
    if (cooldownEnd <= Date.now()) return
    const tick = () => {
      const left = Math.ceil((cooldownEnd - Date.now()) / 1000)
      if (left <= 0) {
        setRemainingSecs(0)
        return
      }
      setRemainingSecs(left)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [cooldownEnd])

  const formatRemaining = useCallback((secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }, [])

  const handleUpdate = async () => {
    setUpdateMsg({ type: 'info', text: 'This feature is coming soon!' })
    setTimeout(() => setUpdateMsg(null), 3000)
    return
    // TODO: Re-enable scraping once broadway.com parsing is fixed
    setUpdating(true)
    setUpdateMsg(null)
    try {
      const scraped = await scrapeShows()
      setShows(scraped)
      setSelectedIds(new Set())
      setBoughtIds(new Set())
      setActiveTab(0)
      setLastUpdated(new Date())
      setUpdateMsg({ type: 'success', text: `Updated! ${scraped.length} shows found.` })
      setCooldownEnd(Date.now() + UPDATE_COOLDOWN_MS)
      setTimeout(() => setUpdateMsg(null), 3000)
    } catch (err) {
      const detail = err?.message || 'Unknown error'
      setUpdateMsg({ type: 'error', text: `Update failed: ${detail}` })
      setTimeout(() => setUpdateMsg(null), 10000)
    } finally {
      setUpdating(false)
    }
  }

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectAll = () => {
    if (selectedIds.size === shows.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(shows.map((s) => s.id)))
    }
  }

  const buyTicket = (id) => {
    setBoughtIds((prev) => new Set(prev).add(id))
    setActiveTab(2)
  }

  const selectedShows = shows.filter((s) => selectedIds.has(s.id))
  const boughtShows = shows.filter((s) => boughtIds.has(s.id))

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Theater className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight">Broadway</h1>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleUpdate}
            disabled={updating || onCooldown}
            className="gap-1.5 border-yellow-400 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 dark:hover:bg-yellow-900/50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${updating ? 'animate-spin' : ''}`} />
            {onCooldown ? formatRemaining(remainingSecs) : 'Update'}
          </Button>
          <Button variant="ghost" size="sm" onClick={onLogout} className="text-gray-500 dark:text-gray-400 gap-1.5">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Update status toast */}
      {updateMsg && (
        <div className={`mx-4 mt-2 px-3 py-2 rounded-lg text-sm font-medium flex items-start justify-between gap-2 ${
          updateMsg.type === 'success'
            ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
            : updateMsg.type === 'info'
            ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800'
            : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
        }`}>
          <span>{updateMsg.text}</span>
          <button onClick={() => setUpdateMsg(null)} className="opacity-60 hover:opacity-100 flex-shrink-0 text-xs font-bold leading-none mt-0.5">X</button>
        </div>
      )}

      {/* Tabs */}
      <div className="px-3 pt-3">
        <TabsList className="rounded-lg">
          {TABS.map((tab, i) => (
            <TabsTrigger
              key={tab}
              active={activeTab === i}
              onClick={() => setActiveTab(i)}
              badge={i === 1 ? selectedIds.size : i === 2 ? boughtIds.size : undefined}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Tab Content */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === 0 && (
          <ShowsTab
            shows={shows}
            selectedIds={selectedIds}
            boughtIds={boughtIds}
            onToggle={toggleSelect}
            onSelectAll={selectAll}
            lastUpdated={lastUpdated}
          />
        )}
        {activeTab === 1 && (
          <MyListTab
            shows={selectedShows}
            boughtIds={boughtIds}
            onBuy={buyTicket}
          />
        )}
        {activeTab === 2 && <BoughtTab shows={boughtShows} />}
      </main>
    </div>
  )
}
