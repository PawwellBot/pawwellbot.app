type PortfolioVideo = {
  id: string
  title: string
}

type ClientComment = {
  name: string
  channel: string
  image: string
  quote: string
}

const portfolioVideos: PortfolioVideo[] = [
  {
    id: 'akFL91Jqy_g',
    title: 'These NEW Geometry Dash 2.2 Levels Are Crazy',
  },
  {
    id: '5haV6rwtfoA',
    title: 'Playing 3 Levels of Platformer Difficulty',
  },
  {
    id: 'cwn9xxUEgmI',
    title: '*FIRST PLACE* WAVE 106 STRAT FOR ENDLESS LEADERBOARD',
  },
  {
    id: 'MUsBxQvg3vg',
    title: 'NEW WAVE 111 STRAT FOR ENDLESS LEADERBOARD',
  },
  {
    id: 'mibL4K_MxQs',
    title: 'How to get MAX RANK in a Day',
  },
  {
    id: 'Q8bZjg43KhA',
    title: 'WAVE 128 STRAT FOR ENDLESS LEADERBOARD',
  },
]

const clientComments: ClientComment[] = [
  {
    name: 'ItzBranGD',
    channel: 'https://www.youtube.com/@ItzBranGD',
    image: '/carrd/client-itzbrangd.png',
    quote:
      'Working with Pawwell was a very interesting experience. His editing skills are extremely impressive considering he just started a couple months ago. I would highly recommend looking into Pawwell as your next video editor.',
  },
  {
    name: 'manoftaj',
    channel: 'https://www.youtube.com/@manoftaj',
    image: '/carrd/client-manoftaj.jpg',
    quote:
      'Will do everything in his power to make sure the video is on time. Does a good job with revisions, asks questions when confused, and overall is a great editor. Highly recommend.',
  },
  {
    name: 'AngryR3V3NG3',
    channel: 'https://www.youtube.com/@AngryR3V3NG3',
    image: '/carrd/client-angryr3v3ng3.jpg',
    quote:
      "Even though we live in different time zones, he is very responsive and met the deadline early. He is very skilled. Pawwell is 10/10, would recommend.",
  },
]

const hireLinks = [
  {
    label: 'YT Jobs',
    href: 'https://ytjobs.co/@pawwell',
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/Pawwell1245',
  },
  {
    label: 'PawwellBot X',
    href: 'https://x.com/PawwellBot',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@PawwellBot',
  },
]

function embedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&controls=1&cc_load_policy=0`
}

function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`
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
        <section className="hero-panel portfolio-hero">
          <section className="panel hero-copy portfolio-intro" aria-labelledby="portfolio-title">
            <a className="portfolio-mark-link" href="https://x.com/PawwellBot" target="_blank" rel="noreferrer">
              <img className="portfolio-mark" src="/carrd/profile.png" alt="PawwellBot mark" />
            </a>
            <p className="section-kicker">Portfolio</p>
            <h1 id="portfolio-title">Video editing for creators.</h1>
            <p className="lead-copy">
              Hey guys, I am Pawwell. I help take gaming videos to the next level with
              tight pacing, clean revisions, and creator-focused edits. Check out my work,
              client comments, and hire links below.
            </p>
            <div className="action-row">
              <a className="button button-accent" href="https://ytjobs.co/@pawwell" target="_blank" rel="noreferrer">
                <span className="button-label">Hire Me</span>
              </a>
              <a className="button" href="#portfolio-videos">
                <span className="button-label">Watch Work</span>
              </a>
            </div>
          </section>

          <section className="panel dashboard-card portfolio-video-card" id="portfolio-videos" aria-labelledby="videos-title">
            <div className="dashboard-card-heading">
              <p className="section-kicker" id="videos-title">Videos</p>
              <span>Selected edits</span>
            </div>
            <div className="portfolio-video-grid">
              {portfolioVideos.map((video) => (
                <article key={video.id} className="portfolio-video">
                  <iframe
                    title={video.title}
                    src={embedUrl(video.id)}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  <div className="portfolio-video-meta">
                    <strong>{video.title}</strong>
                    <a href={watchUrl(video.id)} target="_blank" rel="noreferrer">
                      Open on YouTube
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel dashboard-card portfolio-proof-card" aria-labelledby="comments-title">
            <div className="dashboard-card-heading">
              <p className="section-kicker" id="comments-title">Client Comments</p>
              <span>Creator feedback</span>
            </div>
            <div className="client-grid">
              {clientComments.map((comment) => (
                <article key={comment.name} className="client-card">
                  <a className="client-avatar" href={comment.channel} target="_blank" rel="noreferrer">
                    <img src={comment.image} alt={`${comment.name} avatar`} loading="lazy" />
                  </a>
                  <div className="client-copy">
                    <strong>{comment.name}</strong>
                    <p>{comment.quote}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel dashboard-card portfolio-hire-card" aria-labelledby="hire-title">
            <div className="dashboard-card-heading">
              <p className="section-kicker" id="hire-title">How To Hire Me</p>
              <span>Direct links</span>
            </div>
            <div className="hire-link-grid">
              {hireLinks.map((link, index) => (
                <a
                  key={link.href}
                  className={`button ${index === 0 ? 'button-accent' : ''}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="button-label">{link.label}</span>
                </a>
              ))}
            </div>
            <p className="portfolio-source-note">Available for gaming edits, revisions, and creator projects.</p>
          </section>
        </section>
      </main>
    </div>
  )
}
