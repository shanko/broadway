function classifyShow(title) {
  const plays = [
    'harry potter', 'cursed child', 'oh, mary', 'mcneal', 'stranger things',
    'death of a salesman', 'every brilliant thing', 'the fear of', 'dog day',
    'joe turner', 'play that goes wrong', 'fallen angels', 'proof',
    'sexual misconduct', 'bug', 'becky shaw', 'much ado', 'private lives',
    'the receptionist', 'perfect crime', 'chinese republicans',
  ]
  const lower = title.toLowerCase()
  return plays.some((p) => lower.includes(p)) ? 'Play' : 'Musical'
}

export async function scrapeShows() {
  const res = await fetch('/api/broadway/shows/')
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  const html = await res.text()

  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const showCards = doc.querySelectorAll('a[href*="/shows/"]')
  const seen = new Set()
  const shows = []

  showCards.forEach((el) => {
    const href = el.getAttribute('href') || ''
    if (!href.match(/^\/shows\/[\w-]+\/?$/)) return

    // Find the title — usually in an h3, h4, or strong inside the card
    const titleEl = el.querySelector('h1, h2, h3, h4, h5, strong, .title, [class*="title"]')
    const title = titleEl?.textContent?.trim() || el.textContent?.trim().split('\n')[0]?.trim()
    if (!title || title.length < 2 || title.length > 100) return

    const slug = href.replace(/^\/shows\//, '').replace(/\/$/, '')
    if (seen.has(slug)) return
    seen.add(slug)

    shows.push({
      id: shows.length + 1,
      title,
      slug,
      venue: 'Broadway Theatre',
      category: classifyShow(title),
      runtime: '2h 30m',
      rating: 'All Ages',
      year: 2024,
      description: `Now playing on Broadway in New York City.`,
    })
  })

  // Deduplicate by title
  const uniqueByTitle = new Map()
  for (const show of shows) {
    if (!uniqueByTitle.has(show.title)) {
      uniqueByTitle.set(show.title, show)
    }
  }

  const result = Array.from(uniqueByTitle.values()).map((s, i) => ({ ...s, id: i + 1 }))
  if (result.length === 0) throw new Error('No shows parsed from page')
  return result
}
