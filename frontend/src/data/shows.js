// Broadway shows — factual public information (titles, venues, genres, runtimes)
// No copyrighted images or descriptions used.

const COLORS = [
  "from-amber-500 to-orange-600",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-red-500 to-rose-600",
  "from-fuchsia-500 to-pink-600",
  "from-lime-500 to-green-600",
  "from-sky-500 to-indigo-600",
]

export const BROADWAY_SHOWS = [
  {
    id: 1,
    title: "Aladdin",
    venue: "New Amsterdam Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Family",
    year: 2014,
    description: "A thrilling adaptation of the Disney classic, featuring the Genie, magic carpet, and iconic songs.",
  },
  {
    id: 2,
    title: "Back to the Future: The Musical",
    venue: "Winter Garden Theatre",
    category: "Musical",
    runtime: "2h 35m",
    rating: "All Ages",
    year: 2023,
    description: "Marty McFly travels back in time in this electrifying stage adaptation of the beloved film.",
  },
  {
    id: 3,
    title: "The Book of Mormon",
    venue: "Eugene O'Neill Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Mature",
    year: 2011,
    description: "A satirical musical comedy from the creators of South Park about two mismatched missionaries.",
  },
  {
    id: 4,
    title: "Chicago",
    venue: "Ambassador Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Teen+",
    year: 1996,
    description: "The longest-running American musical, a dazzling tale of fame, jazz, and corruption in the 1920s.",
  },
  {
    id: 5,
    title: "Death Becomes Her",
    venue: "Lunt-Fontanne Theatre",
    category: "Musical",
    runtime: "2h 15m",
    rating: "Teen+",
    year: 2024,
    description: "A wickedly funny musical about two rivals who discover a potion granting eternal youth.",
  },
  {
    id: 6,
    title: "Gypsy",
    venue: "Majestic Theatre",
    category: "Musical",
    runtime: "2h 45m",
    rating: "All Ages",
    year: 2024,
    description: "The ultimate tale of an ambitious stage mother pushing her daughters to vaudeville stardom.",
  },
  {
    id: 7,
    title: "Hamilton",
    venue: "Richard Rodgers Theatre",
    category: "Musical",
    runtime: "2h 45m",
    rating: "Teen+",
    year: 2015,
    description: "The revolutionary hip-hop musical telling the story of founding father Alexander Hamilton.",
  },
  {
    id: 8,
    title: "Harry Potter and the Cursed Child",
    venue: "Lyric Theatre",
    category: "Play",
    runtime: "3h 30m",
    rating: "All Ages",
    year: 2018,
    description: "Harry Potter's story continues as his son Albus navigates life at Hogwarts.",
  },
  {
    id: 9,
    title: "Hell's Kitchen",
    venue: "Shubert Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Teen+",
    year: 2024,
    description: "A coming-of-age story set in 1990s NYC, featuring the music of Alicia Keys.",
  },
  {
    id: 10,
    title: "The Lion King",
    venue: "Minskoff Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Family",
    year: 1997,
    description: "Disney's spectacular musical brings the African savanna to life with stunning puppetry.",
  },
  {
    id: 11,
    title: "MJ The Musical",
    venue: "Neil Simon Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "All Ages",
    year: 2022,
    description: "A jukebox musical celebrating the artistry and music of Michael Jackson.",
  },
  {
    id: 12,
    title: "Moulin Rouge! The Musical",
    venue: "Al Hirschfeld Theatre",
    category: "Musical",
    runtime: "2h 35m",
    rating: "Teen+",
    year: 2019,
    description: "A spectacular mash-up of over 70 pop songs set in the legendary Parisian nightclub.",
  },
  {
    id: 13,
    title: "Oh, Mary!",
    venue: "Lyceum Theatre",
    category: "Play",
    runtime: "1h 20m",
    rating: "Mature",
    year: 2024,
    description: "A hilarious alt-history comedy imagining Mary Todd Lincoln as a struggling cabaret performer.",
  },
  {
    id: 14,
    title: "The Outsiders",
    venue: "Bernard B. Jacobs Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Teen+",
    year: 2024,
    description: "S.E. Hinton's classic novel about rival teen gangs comes alive on stage.",
  },
  {
    id: 15,
    title: "Smash",
    venue: "Imperial Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Teen+",
    year: 2025,
    description: "Based on the TV series, a musical-within-a-musical about creating a Broadway show.",
  },
  {
    id: 16,
    title: "Suffs",
    venue: "Music Box Theatre",
    category: "Musical",
    runtime: "2h 45m",
    rating: "All Ages",
    year: 2024,
    description: "The story of the women's suffrage movement and the fight for the right to vote.",
  },
  {
    id: 17,
    title: "Swept Away",
    venue: "Longacre Theatre",
    category: "Musical",
    runtime: "2h 15m",
    rating: "Teen+",
    year: 2024,
    description: "A haunting maritime tale set to the folk-rock music of The Avett Brothers.",
  },
  {
    id: 18,
    title: "Wicked",
    venue: "Gershwin Theatre",
    category: "Musical",
    runtime: "2h 45m",
    rating: "Family",
    year: 2003,
    description: "The untold story of the Witches of Oz — their friendship, rivalry, and destiny.",
  },
  {
    id: 19,
    title: "The Great Gatsby",
    venue: "Broadway Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "Teen+",
    year: 2024,
    description: "F. Scott Fitzgerald's Jazz Age masterpiece reimagined as a lavish musical.",
  },
  {
    id: 20,
    title: "Water for Elephants",
    venue: "Imperial Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "All Ages",
    year: 2024,
    description: "A Depression-era love story set in a traveling circus, with breathtaking acrobatics.",
  },
  {
    id: 21,
    title: "Hadestown",
    venue: "Walter Kerr Theatre",
    category: "Musical",
    runtime: "2h 30m",
    rating: "All Ages",
    year: 2019,
    description: "An ancient Greek myth retold through New Orleans jazz and folk — a journey to the underworld.",
  },
  {
    id: 22,
    title: "The Notebook",
    venue: "Schoenfeld Theatre",
    category: "Musical",
    runtime: "2h 20m",
    rating: "All Ages",
    year: 2024,
    description: "The beloved story of enduring love, adapted from Nicholas Sparks' iconic novel.",
  },
  {
    id: 23,
    title: "Cabaret",
    venue: "August Wilson Theatre",
    category: "Musical",
    runtime: "2h 50m",
    rating: "Mature",
    year: 2024,
    description: "The Kit Kat Club comes alive in this immersive revival set in 1930s Berlin.",
  },
  {
    id: 24,
    title: "McNeal",
    venue: "Vivian Beaumont Theater",
    category: "Play",
    runtime: "1h 45m",
    rating: "Mature",
    year: 2024,
    description: "A provocative drama exploring a celebrated novelist's relationship with artificial intelligence.",
  },
  {
    id: 25,
    title: "Sunset Boulevard",
    venue: "St. James Theatre",
    category: "Musical",
    runtime: "2h 15m",
    rating: "Teen+",
    year: 2024,
    description: "A bold, reimagined revival of Andrew Lloyd Webber's tale of Hollywood obsession and faded glory.",
  },
]

// Generate a consistent color gradient for each show based on its id
export function getShowColor(id) {
  return COLORS[(id - 1) % COLORS.length]
}

// Generate broadway.com URL for a show
export function getShowUrl(show) {
  if (show.slug) return `https://www.broadway.com/shows/${show.slug}/`
  const slug = show.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
  return `https://www.broadway.com/shows/${slug}/`
}

// Get initials for the poster placeholder
export function getShowInitials(title) {
  return title
    .replace(/^The\s+/i, '')
    .split(/[\s:]+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}
