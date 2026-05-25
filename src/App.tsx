import { useEffect, useState } from 'react'

const youtubeChannelId = 'UCS7dCSZsFgUZ9Zzu6OCTUwQ'

type YouTubeVideo = {
  id: string
  title: string
  url: string
  thumbnail: string
  published?: string
  views?: string
  likes?: string
  description?: string
  channel?: string
  duration?: string
  age?: string
}

const mockThumbnail = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
      <rect width="640" height="360" fill="#111111"/>
      <rect x="24" y="24" width="592" height="312" rx="24" fill="#1f2023"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="38" font-weight="800">${label}</text>
    </svg>`,
  )}`

const mockYouTubeVideos: YouTubeVideo[] = [
  {
    id: 'mock-video-1',
    title: 'Latest channel upload',
    url: 'https://youtube.com/@PawwellBot',
    thumbnail: mockThumbnail('PawwellBot'),
    published: 'Mock preview',
    views: '12.4K views',
    likes: '840 likes',
    channel: 'PawwellBot',
    duration: '3:34',
    age: '2 days ago',
  },
  {
    id: 'mock-video-2',
    title: 'Recent gaming edit',
    url: 'https://youtube.com/@PawwellBot',
    thumbnail: mockThumbnail('Gaming Edit'),
    published: 'Mock preview',
    views: '8.1K views',
    likes: '520 likes',
    channel: 'PawwellBot',
    duration: '2:18',
    age: '1 week ago',
  },
]

function getYouTubeThumbnail(video: YouTubeVideo) {
  if (video.thumbnail) {
    return video.thumbnail
  }

  return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
}

const quickLinks = [
  {
    label: 'Discord',
    note: 'https://discord.gg/NbCfSFj4fd',
  },
  {
    label: 'GitHub',
    note: 'https://github.com/PawwellBot',
  },
  {
    label: 'YouTube',
    note: 'https://youtube.com/@PawwellBot',
  },
  {
    label: 'X / Twitter',
    note: 'https://x.com/PawwellBot',
    accent: true,
  },
]

const socialLinks = [
  { label: 'Discord', href: 'https://discord.gg/NbCfSFj4fd' },
  { label: 'GitHub', href: 'https://github.com/PawwellBot' },
  { label: 'YouTube', href: 'https://youtube.com/@PawwellBot' },
  { label: 'X / Twitter', href: 'https://x.com/PawwellBot' },
  { label: 'TikTok', href: 'https://tiktok.com/@pawwellbot' },
  { label: 'Instagram', href: 'https://instagram.com/pawwellbot' },
]

const projectCards = [
  {
    title: 'PawwellBot',
    tag: 'About',
    description: 'Content Creator | Editor',
    stats: 'Video Editor / Small Time YouTuber / Vibe Coder',
  },
  {
    title: 'Public Repos',
    tag: 'GitHub',
    description: 'Live GitHub project list is ready to be fetched from the PawwellBot account.',
    stats: '@PawwellBot',
  },
  {
    title: 'Contact',
    tag: 'Direct',
    description: 'Business and Discord contact details from the current live site.',
    stats: 'pawwellinquiries@gmail.com / pawwell124',
  },
]

const setupTables = [
  {
    title: 'Core Stack',
    rows: [
      ['Primary Device', 'Brand', 'Model coming soon'],
      ['Camera', 'Brand', 'Placeholder entry'],
      ['Lighting', 'Brand', 'Placeholder entry'],
      ['Main Software', 'Suite', 'Placeholder entry'],
    ],
  },
  {
    title: 'Audio',
    rows: [
      ['Microphone', 'Brand', 'Placeholder entry'],
      ['Interface', 'Brand', 'Placeholder entry'],
      ['Headphones', 'Brand', 'Placeholder entry'],
      ['Backup Input', 'Brand', 'Placeholder entry'],
    ],
  },
  {
    title: 'Peripherals',
    rows: [
      ['Keyboard', 'Brand', 'Placeholder entry'],
      ['Mouse', 'Brand', 'Placeholder entry'],
      ['Display', 'Brand', 'Placeholder entry'],
      ['Controller', 'Brand', 'Placeholder entry'],
    ],
  },
]

const settingsCards = [
  {
    title: 'Gameplay',
    lines: ['Sensitivity: TBD', 'Field of view: TBD', 'Key binds: TBD'],
  },
  {
    title: 'Video',
    lines: ['Resolution: TBD', 'Frame rate: TBD', 'Encoder preset: TBD'],
  },
  {
    title: 'Audio Mix',
    lines: ['Mic gain: TBD', 'Music ducking: TBD', 'Limiter chain: TBD'],
  },
]

type DecorNode = {
  id: string
  x: string
  y: string
  w: string
  h: string
  label: string
  detail?: string
  preview: string[]
  socials?: Array<{
    label: string
    href: string
  }>
  tone?: 'main' | 'soft' | 'tiny'
}

type DecorLink = {
  id: string
  x: string
  y: string
  w: string
  rotate: number
}

type DecorClusterData = {
  className: string
  nodes: DecorNode[]
  links: DecorLink[]
}

function createReferenceModules(prefix: string, className: string): DecorClusterData {
  return {
    className,
    nodes: [
      {
        id: `${prefix}-main`,
        x: '2.25rem',
        y: '0.85rem',
        w: '7.15rem',
        h: '4.25rem',
        label: 'Links',
        detail: 'Follow PawwellBot',
        preview: ['Discord', 'GitHub', 'YouTube', 'X / Twitter'],
        socials: [
          { label: 'Discord', href: 'https://discord.gg/NbCfSFj4fd' },
          { label: 'GitHub', href: 'https://github.com/PawwellBot' },
          { label: 'YouTube', href: 'https://youtube.com/@PawwellBot' },
          { label: 'X / Twitter', href: 'https://x.com/PawwellBot' },
          { label: 'TikTok', href: 'https://tiktok.com/@pawwellbot' },
          { label: 'Instagram', href: 'https://instagram.com/pawwellbot' },
        ],
        tone: 'main',
      },
      {
        id: `${prefix}-github-projects`,
        x: '8.35rem',
        y: '0.2rem',
        w: '3.25rem',
        h: '1.15rem',
        label: 'GitHub Projects',
        detail: '@PawwellBot',
        preview: ['Fetch public repos', 'Sort by updated', 'Show language + stars'],
        tone: 'tiny',
      },
      {
        id: `${prefix}-setup`,
        x: '0.45rem',
        y: '5.75rem',
        w: '3.35rem',
        h: '1.35rem',
        label: 'Latest Videos',
        detail: '@PawwellBot',
        preview: ['Video Editing', 'Small Time YouTuber', 'Vibe Coder'],
      },
      {
        id: `${prefix}-discord`,
        x: '4.45rem',
        y: '5.9rem',
        w: '3.2rem',
        h: '1.1rem',
        label: 'Discord Presence',
        detail: 'pawwell124',
        preview: ['Presence fetcher', 'Discord server link', 'Status placeholder'],
        tone: 'tiny',
      },
    ],
    links: [
      { id: `${prefix}-link-a`, x: '8.45rem', y: '1.32rem', w: '0.95rem', rotate: 90 },
      { id: `${prefix}-link-b`, x: '9.35rem', y: '3.15rem', w: '0.45rem', rotate: 0 },
      { id: `${prefix}-link-c`, x: '3.2rem', y: '5.12rem', w: '0.8rem', rotate: 90 },
      { id: `${prefix}-link-d`, x: '3.8rem', y: '6.35rem', w: '0.65rem', rotate: 0 },
    ],
  }
}

const linksModules = createReferenceModules('links', 'panel-modules-links')
const scheduleModules = createReferenceModules('schedule', 'panel-modules-schedule')
const projectsModules = createReferenceModules('projects', 'panel-modules-projects')
const setupModules = createReferenceModules('setup', 'panel-modules-setup')
const settingsModules = createReferenceModules('settings', 'panel-modules-settings')

function YouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let isMounted = true

    async function loadVideos() {
      try {
        const response = await fetch(`/api/youtube?channelId=${youtubeChannelId}`)

        if (!response.ok) {
          throw new Error(`YouTube feed failed: ${response.status}`)
        }

        const data = (await response.json()) as { videos?: YouTubeVideo[] }

        if (!isMounted) {
          return
        }

        setVideos((data.videos ?? []).slice(0, 4))
        setStatus('ready')
      } catch (error) {
        if (!isMounted) {
          return
        }

        console.error(error)
        setStatus('error')
      }
    }

    loadVideos()

    return () => {
      isMounted = false
    }
  }, [])

  if (status === 'loading') {
    return (
      <span className="youtube-feed youtube-feed-state">
        <span>Fetching channel videos...</span>
      </span>
    )
  }

  const visibleVideos = status === 'ready' && videos.length > 0 ? videos : mockYouTubeVideos

  return (
    <span className="youtube-feed">
      {visibleVideos.map((video) => (
        <article key={video.id} className="youtube-card">
          <span className="youtube-thumb">
            <img src={getYouTubeThumbnail(video)} alt="" loading="lazy" />
            {video.duration ? <span className="youtube-duration">{video.duration}</span> : null}
          </span>
          <span className="youtube-meta-row">
            <span className="youtube-avatar" aria-hidden="true">P</span>
            <span className="youtube-copy">
              <strong>{video.title}</strong>
              <small>{[video.views, video.age, video.likes].filter(Boolean).join(' - ')}</small>
            </span>
          </span>
        </article>
      ))}
    </span>
  )
}

function PanelModules({ cluster }: { cluster: DecorClusterData }) {
  return (
    <div className={`panel-modules ${cluster.className}`}>
      {cluster.links.map((link) => (
        <span
          key={link.id}
          className="panel-module-link"
          style={{
            left: link.x,
            top: link.y,
            width: link.w,
            transform: `rotate(${link.rotate}deg)`,
          }}
        />
      ))}
      {cluster.nodes.map((node) => (
        <article
          key={node.id}
          className={`panel-module-node panel-module-node-${node.tone ?? 'soft'} panel-module-node-${node.id}`}
          style={{
            left: node.x,
            top: node.y,
            width: node.w,
            height: node.h,
          }}
        >
          <span className="panel-module-label">{node.label}</span>
          {node.detail ? <span className="panel-module-detail">{node.detail}</span> : null}
          {node.socials ? (
            <span className="panel-module-socials">
              {node.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <span>{social.label}</span>
                  <span>Open</span>
                </a>
              ))}
            </span>
          ) : node.id.endsWith('-setup') ? (
            <YouTubeVideos />
          ) : (
            <span className="panel-module-preview">
              {node.preview.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </span>
          )}
        </article>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo-text" href="#top">
          Pawwell<span>Bot</span>
        </a>
      </header>

      <main className="page-wrapper" id="top">
        <section className="hero-panel">
          <div className="panel hero-copy">
            <p className="section-kicker">@PawwellBot</p>
            <h1>Content Creator.</h1>
            <p className="lead-copy">
              I make gaming-focused videos, edits, and small creative projects around the
              PawwellBot brand. The site brings together my socials, latest uploads, project
              links, and contact details in one place, with more creator tools and updates planned
              as the channel grows.
            </p>
            <div className="action-row">
              <a className="button button-accent" href="mailto:pawwellinquiries@gmail.com">
                <span className="button-label">Email</span>
              </a>
              <a className="button" href="https://discord.gg/NbCfSFj4fd" target="_blank" rel="noreferrer">
                <span className="button-label">Discord</span>
              </a>
            </div>
          </div>
          <section className="panel dashboard-card social-card" aria-labelledby="social-card-title">
            <div className="dashboard-card-heading">
              <p className="section-kicker" id="social-card-title">Links</p>
              <span>Follow PawwellBot</span>
            </div>
            <div className="social-button-list">
              {socialLinks.map((social) => (
                <a key={social.label} className="button" href={social.href} target="_blank" rel="noreferrer">
                  <span className="button-label">{social.label}</span>
                </a>
              ))}
            </div>
          </section>
          <section className="panel dashboard-card projects-card" aria-labelledby="projects-card-title">
            <div className="dashboard-card-heading">
              <p className="section-kicker" id="projects-card-title">GitHub Projects</p>
              <span>@PawwellBot</span>
            </div>
            <div className="project-action-list">
              <span>Fetch public repos</span>
              <span>Sort by updated</span>
              <span>Show language + stars</span>
            </div>
          </section>
          <section className="panel dashboard-card videos-card" aria-labelledby="videos-card-title">
            <div className="dashboard-card-heading">
              <p className="section-kicker" id="videos-card-title">Latest Videos</p>
              <span>@PawwellBot</span>
            </div>
            <YouTubeVideos />
          </section>
        </section>

        <div className="split-grid">
          <section className="panel" id="links">
            <div className="panel-shell panel-shell-compact">
              <div className="panel-body">
                <div className="section-heading">
                  <p className="section-kicker">Links</p>
                  <h2>Swap these buttons for your real destinations.</h2>
                </div>
                <div className="button-grid">
                  {quickLinks.map((link) => (
                    <div key={link.label} className="link-item">
                      <a
                        className={`button link-button ${link.accent ? 'button-accent' : ''}`}
                        href="#"
                        onClick={(event) => event.preventDefault()}
                      >
                        <span className="button-label">{link.label}</span>
                      </a>
                      <span className="link-note">{link.note}</span>
                    </div>
                  ))}
                </div>
              </div>
              <PanelModules cluster={linksModules} />
            </div>
          </section>

          <section className="panel" id="schedule">
            <div className="panel-shell panel-shell-compact">
              <div className="panel-body">
                <div className="section-heading">
                  <p className="section-kicker">Schedule</p>
                  <h2>Use this space for stream times, drops, or launch dates.</h2>
                </div>
                <p className="section-copy">
                  No fixed schedule is live yet. Replace this block with your streaming routine,
                  release cadence, or a one-line directive telling people where to get notified first.
                </p>
                <div className="schedule-box">
                  <p className="schedule-day">Mon / Wed / Fri</p>
                  <p className="schedule-time">Placeholder window: 8:00 PM - 11:00 PM</p>
                  <p className="schedule-note">
                    Swap the cadence, timezone, and notification platform once you send real details.
                  </p>
                </div>
              </div>
              <PanelModules cluster={scheduleModules} />
            </div>
          </section>
        </div>

        <section className="panel" id="projects">
          <div className="panel-shell panel-shell-wide">
            <div className="panel-body">
              <div className="section-heading">
                <p className="section-kicker">Projects</p>
                <h2>Three slots for the pages or products you want to push hardest.</h2>
              </div>
              <div className="project-grid">
                {projectCards.map((project, index) => (
                  <article key={project.title} className={`project-card ${index === 0 ? 'project-card-featured' : ''}`}>
                    <div className="project-card-header">
                      <div>
                        <span className="project-card-title">{project.title}</span>
                        <span className="project-card-tag">{project.tag}</span>
                      </div>
                      <span className="project-card-arrow">-&gt;</span>
                    </div>
                    <p className="project-card-desc">{project.description}</p>
                    <p className="project-card-stats">{project.stats}</p>
                  </article>
                ))}
              </div>
            </div>
            <PanelModules cluster={projectsModules} />
          </div>
        </section>

        <section className="panel" id="setup">
          <div className="panel-shell panel-shell-wide">
            <div className="panel-body">
              <div className="section-heading">
                <p className="section-kicker">Setup</p>
                <h2>Hardware and software tables, ready for your real stack.</h2>
              </div>
              <p className="section-copy">
                The reference site exposes the creator setup in clear tables. This keeps that pattern
                but leaves the actual gear blank until you hand over the final list.
              </p>
              <div className="table-stack">
                {setupTables.map((table) => (
                  <table key={table.title}>
                    <thead>
                      <tr>
                        <th className="table-banner" colSpan={3}>
                          {table.title}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr key={row[0]}>
                          <th>{row[0]}</th>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
            <PanelModules cluster={setupModules} />
          </div>
        </section>

        <section className="panel" id="settings">
          <div className="panel-shell panel-shell-wide">
            <div className="panel-body">
              <div className="section-heading">
                <p className="section-kicker">Settings</p>
                <h2>Another placeholder block for game, stream, or production settings.</h2>
              </div>
              <div className="settings-grid">
                {settingsCards.map((card) => (
                  <article key={card.title} className="settings-card">
                    <h3>{card.title}</h3>
                    <div className="settings-list">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <PanelModules cluster={settingsModules} />
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div>
          <p className="footer-title">Placeholder Brand</p>
          <p className="footer-copy">Replace this footer with your final brand line, socials, and version note.</p>
        </div>
        <span className="footer-badge">v0.1 placeholder build</span>
      </footer>
    </div>
  )
}
