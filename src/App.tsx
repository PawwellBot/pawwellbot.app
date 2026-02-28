import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import VideoGrid from './components/VideoGrid'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'

// ==========================================
// PLACEHOLDER DATA - REPLACE WITH YOUR ACTUAL CONTENT
// ==========================================

const videos = [
  {
    id: 1,
    title: '[PLACEHOLDER: Video Title 1]',
    client: '[PLACEHOLDER: Client Name]',
    duration: '[PLACEHOLDER: Duration]',
    views: '[PLACEHOLDER: View Count]',
    thumbnail: '🎬',
    category: '[PLACEHOLDER: Category]',
    description: '[PLACEHOLDER: Video description]'
  },
  {
    id: 2,
    title: '[PLACEHOLDER: Video Title 2]',
    client: '[PLACEHOLDER: Client Name]',
    duration: '[PLACEHOLDER: Duration]',
    views: '[PLACEHOLDER: View Count]',
    thumbnail: '🎮',
    category: '[PLACEHOLDER: Category]',
    description: '[PLACEHOLDER: Video description]'
  },
  {
    id: 3,
    title: '[PLACEHOLDER: Video Title 3]',
    client: '[PLACEHOLDER: Client Name]',
    duration: '[PLACEHOLDER: Duration]',
    views: '[PLACEHOLDER: View Count]',
    thumbnail: '🎵',
    category: '[PLACEHOLDER: Category]',
    description: '[PLACEHOLDER: Video description]'
  }
]

const reviews = [
  {
    id: 1,
    client: '[PLACEHOLDER: Client Name]',
    role: '[PLACEHOLDER: Client Role]',
    content: '[PLACEHOLDER: Client testimonial]',
    rating: 5,
    avatar: '👤'
  },
  {
    id: 2,
    client: '[PLACEHOLDER: Client Name]',
    role: '[PLACEHOLDER: Client Role]',
    content: '[PLACEHOLDER: Client testimonial]',
    rating: 5,
    avatar: '👤'
  }
]

// ==========================================

type TabType = 'videos' | 'reviews' | 'contact'

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('videos')

  return (
    <div className="min-h-screen bg-pawwelium-dark overflow-hidden flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
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
    </div>
  )
}

export default App