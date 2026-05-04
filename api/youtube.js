const DEFAULT_CHANNEL_ID = 'UCS7dCSZsFgUZ9Zzu6OCTUwQ'

function decodeXml(value = '') {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function matchValue(source, pattern) {
  return decodeXml(source.match(pattern)?.[1]?.trim() ?? '')
}

function formatDate(value) {
  if (!value) {
    return ''
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export default async function handler(request, response) {
  const channelId = request.query.channelId || DEFAULT_CHANNEL_ID
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`

  try {
    const feedResponse = await fetch(feedUrl, {
      headers: {
        'user-agent': 'pawwellbot.app youtube feed loader',
      },
    })

    if (!feedResponse.ok) {
      throw new Error(`YouTube RSS returned ${feedResponse.status}`)
    }

    const xml = await feedResponse.text()
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? []
    const videos = entries.slice(0, 8).map((entry) => {
      const id = matchValue(entry, /<yt:videoId>([\s\S]*?)<\/yt:videoId>/)
      const title = matchValue(entry, /<title>([\s\S]*?)<\/title>/)
      const published = matchValue(entry, /<published>([\s\S]*?)<\/published>/)
      const thumbnail =
        entry.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1] ||
        `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

      return {
        id,
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail,
        published: formatDate(published),
      }
    })

    response.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400')
    response.setHeader('Content-Type', 'application/json')
    response.status(200).json({ videos })
  } catch (error) {
    response.status(502).json({
      error: error instanceof Error ? error.message : 'Unable to load YouTube feed',
      videos: [],
    })
  }
}
