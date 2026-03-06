import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import VideoGrid from './components/VideoGrid'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'

// ==========================================
// VIDEO PORTFOLIO DATA - 6 YOUTUBE VIDEOS
// ==========================================

const videos = [
  {
    id: 1,
    title: 'Video Project 1',
    client: 'Client Project',
    duration: 'Short Form',
    views: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/akFL91Jqy_g/maxresdefault.jpg',
    description: 'Professional video editing showcase',
    youtubeUrl: 'https://youtu.be/akFL91Jqy_g'
  },
  {
    id: 2,
    title: 'Video Project 2',
    client: 'Client Project',
    duration: 'Short Form',
    views: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/5haV6rwtfoA/maxresdefault.jpg',
    description: 'Professional video editing showcase',
    youtubeUrl: 'https://youtu.be/5haV6rwtfoA'
  },
  {
    id: 3,
    title: 'Video Project 3',
    client: 'Client Project',
    duration: 'Short Form',
    views: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/cwn9xxUEgmI/maxresdefault.jpg',
    description: 'Professional video editing showcase',
    youtubeUrl: 'https://youtu.be/cwn9xxUEgmI'
  },
  {
    id: 4,
    title: 'Video Project 4',
    client: 'Client Project',
    duration: 'Short Form',
    views: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/MUsBxQvg3vg/maxresdefault.jpg',
    description: 'Professional video editing showcase',
    youtubeUrl: 'https://youtu.be/MUsBxQvg3vg'
  },
  {
    id: 5,
    title: 'Video Project 5',
    client: 'Client Project',
    duration: 'Short Form',
    views: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/mibL4K_MxQs/maxresdefault.jpg',
    description: 'Professional video editing showcase',
    youtubeUrl: 'https://youtu.be/mibL4K_MxQs'
  },
  {
    id: 6,
    title: 'Video Project 6',
    client: 'Client Project',
    duration: 'Short Form',
    views: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/Q8bZjg43KhA/maxresdefault.jpg',
    description: 'Professional video editing showcase',
    youtubeUrl: 'https://youtu.be/Q8bZjg43KhA'
  }
]

const reviews = [
  {
    id: 1,
    client: 'Gaming Creator',
    role: 'YouTube Content Creator',
    content: 'PawwellBot delivered incredible edits that boosted my engagement significantly. The pacing and transitions are top-notch!',
    rating: 5,
    avatar: '🎮'
  },
  {
    id: 2,
    client: 'Esports Team',
    role: 'Professional Team Manager',
    content: 'Outstanding work on our highlight reels. Fast turnaround and amazing attention to detail. Highly recommended!',
    rating: 5,
    avatar: '🏆'
  },
  {
    id: 3,
    client: 'Streamer',
    role: 'Twitch Partner',
    content: 'The best editor I have worked with. Understands exactly what content needs to go viral. Will definitely hire again!',
    rating: 5,
    avatar: '📺'
  }
]

// ==========================================

type TabType = 'videos' | 'reviews' | 'contact'

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('videos')

  return (
    <div className="min-h-screen bg-pawwelium-dark overflow-hidden flex flex-col relative">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        <AnimatePresence mode="wait">
          {activeTab === 'videos' && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection />
              <VideoGrid videos={videos} />
            </motion.div>
          )}
          
          {activeTab === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ReviewsSection reviews={reviews} />
            </motion.div>
          )}
          
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* iOS 26 Style Bottom Navigation */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App