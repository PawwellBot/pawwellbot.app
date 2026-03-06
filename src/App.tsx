import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import VideoGrid from './components/VideoGrid'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'

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

// Your actual reviews with image paths
const reviews = [
  {
    id: 1,
    client: 'Byte',
    role: 'Content Creator',
    content: 'Working with Pawwell was a very interesting experience. His editing skills are extremely impressive considering he just started a couple months ago! I would highly recommend looking into Pawwell as your next video editor.',
    rating: 5,
    avatar: '',
    avatarType: 'image' as const,
    avatarUrl: '/reviews/byte.png'
  },
  {
    id: 2,
    client: 'Mystic',
    role: 'YouTube Creator',
    content: 'Will do everything in his power to make sure the video is on time. Does a good job with revisions. Asks questions when confused. Overall a great editor, highly recommend!!!!',
    rating: 5,
    avatar: '',
    avatarType: 'image' as const,
    avatarUrl: '/reviews/mystic.png'
  },
  {
    id: 3,
    client: 'AngryR3v3ng3',
    role: 'YouTube Creator',
    content: 'Even though we live in different time zones he is very responsive and met the deadline early. He is very skilled. I have used a few editors and they don\'t even come close to professional. Pawwell is 10/10 would recommend!!!',
    rating: 5,
    avatar: '',
    avatarType: 'image' as const,
    avatarUrl: '/reviews/angryr3v3ng3.png'
  }
]

type TabType = 'videos' | 'reviews' | 'contact'

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('videos')

  return (
    <div className="min-h-screen bg-pawwelium-dark overflow-hidden flex flex-col relative">
      <main className="flex-1 overflow-y-auto pb-32">
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

      <Header activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App