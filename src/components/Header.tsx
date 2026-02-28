import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Bot, Clapperboard, Star, Send } from 'lucide-react'

interface HeaderProps {
  activeTab: 'videos' | 'reviews' | 'contact'
  onTabChange: (tab: 'videos' | 'reviews' | 'contact') => void
}

const tabs = [
  { id: 'videos', label: 'Videos', icon: Clapperboard },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'contact', label: 'Contact', icon: Send },
] as const

const BRAND_NAME = 'pawwellbot.app'
const TAGLINE = 'Peak Video Editing'
const WEBSITE_URL = 'https://pawwellbot.app'

export default function Header({ activeTab, onTabChange }: HeaderProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab)
  const dragX = useMotionValue(0)
  const springX = useSpring(dragX, { stiffness: 400, damping: 35 })

  const handleDragEnd = () => {
    const threshold = 30
    const currentX = dragX.get()
    
    let newIndex = activeIndex
    if (currentX > threshold && activeIndex > 0) {
      newIndex = activeIndex - 1
    } else if (currentX < -threshold && activeIndex < tabs.length - 1) {
      newIndex = activeIndex + 1
    }
    
    onTabChange(tabs[newIndex].id)
    dragX.set(0)
  }

  const handleLogoClick = () => {
    window.open(WEBSITE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between relative">
          
          {/* Logo */}
          <motion.div 
            className="hidden sm:flex items-center gap-3 cursor-pointer group z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-gray-200 to-gray-400 flex items-center justify-center shadow-lg shadow-white/20">
              <Bot className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">{BRAND_NAME}</h1>
              <p className="text-[10px] text-pawwelium-muted">{TAGLINE}</p>
            </div>
          </motion.div>

          {/* Center Nav - REDUCED BLUR */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.nav 
              ref={containerRef}
              className="relative flex items-center p-1.5 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',        // More transparent
                backdropFilter: 'blur(10px) saturate(140%)',    // Less blur & saturation
                WebkitBackdropFilter: 'blur(10px) saturate(140%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',  // Thinner border
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',       // Softer shadow
                minWidth: '320px',
              }}
            >
              {/* Subtler gloss */}
              <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-b from-white/10 to-transparent" />

              {/* Selection pill */}
              <motion.div
                className="absolute rounded-full bg-white/95"
                style={{
                  top: '4px', bottom: '4px', left: '4px',
                  width: 'calc(33.333% - 2.5px)', x: springX,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
                animate={{ x: activeIndex * (containerRef.current ? (containerRef.current.offsetWidth - 8) / 3 : 0) }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
              />

              {/* Tabs */}
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`relative flex items-center justify-center gap-2 rounded-full font-medium z-10 flex-1 py-2.5 px-4 ${isActive ? 'text-gray-900' : 'text-white/70'}`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                    <span className="hidden sm:inline text-sm">{tab.label}</span>
                  </motion.button>
                )
              })}
            </motion.nav>
          </div>

          <div className="hidden sm:block w-32" />
        </div>
      </div>
    </motion.header>
  )
}