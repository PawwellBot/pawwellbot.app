import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Mail, Play, Bot } from 'lucide-react'

interface HeaderProps {
  activeTab: 'videos' | 'reviews' | 'contact'
  onTabChange: (tab: 'videos' | 'reviews' | 'contact') => void
}

const tabs = [
  { id: 'videos', label: 'Videos', icon: Play },
  { id: 'reviews', label: 'Reviews', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const

// ==========================================
// BRANDING CONFIGURATION
// ==========================================

const BRAND_NAME = 'pawwellbot.app'
const TAGLINE = 'Peak Video Editing'
const WEBSITE_URL = 'https://pawwellbot.app'

// ==========================================

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
      className="fixed top-0 left-0 right-0 z-50 glass py-3"
    >
      <div className="w-full px-3 sm:px-4">
        <div className="flex items-center">
          
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogoClick}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-white via-gray-200 to-gray-400 flex items-center justify-center shadow-lg shadow-white/20 group-hover:shadow-white/40 transition-shadow">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg font-bold gradient-text tracking-tight leading-tight group-hover:opacity-80 transition-opacity">
                {BRAND_NAME}
              </h1>
              <p className="text-[10px] text-pawwelium-muted -mt-0.5">
                {TAGLINE}
              </p>
            </div>
          </motion.div>

          {/* iOS 26 Liquid Glass Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.nav 
              ref={containerRef}
              className="relative flex items-center gap-1 bg-pawwelium-card/60 backdrop-blur-2xl rounded-full p-1.5 border border-white/5 shadow-2xl shadow-black/30"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Liquid Glass Background */}
              <motion.div
                className="absolute rounded-full bg-white cursor-grab active:cursor-grabbing touch-none"
                style={{
                  top: '6px',
                  bottom: '6px',
                  left: '6px',
                  width: 'calc(33.333% - 4px)',
                  x: springX,
                  boxShadow: '0 4px 20px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1)',
                }}
                initial={false}
                animate={{
                  x: activeIndex * (containerRef.current ? (containerRef.current.offsetWidth - 12) / 3 : 0),
                }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/90 via-white to-gray-200/90" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-60" />
              </motion.div>

              {/* Tab Buttons - WITH ICONS */}
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`relative flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 z-10 w-[60px] sm:w-[80px] ${
                      isActive 
                        ? 'text-gray-900'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </motion.button>
                )
              })}
            </motion.nav>
          </div>

          {/* Spacer */}
          <div className="ml-auto w-20 sm:w-32" />
        </div>
      </div>
    </motion.header>
  )
}