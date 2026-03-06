import { motion } from 'framer-motion'
import { Clapperboard, Star, Send } from 'lucide-react'

interface HeaderProps {
  activeTab: 'videos' | 'reviews' | 'contact'
  onTabChange: (tab: 'videos' | 'reviews' | 'contact') => void
}

const tabs = [
  { id: 'videos' as const, label: 'Videos', icon: Clapperboard },
  { id: 'reviews' as const, label: 'Reviews', icon: Star },
  { id: 'contact' as const, label: 'Contact', icon: Send },
]

export default function Header({ activeTab, onTabChange }: HeaderProps): JSX.Element {
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab)

  return (
    <motion.nav 
      initial={{ y: 100, x: '-50%' }} 
      animate={{ y: 0, x: '-50%' }}
      className="fixed bottom-8 left-1/2 z-50"
    >
      {/* Modrinth-style Floating Dock */}
      <div 
        className="relative flex items-center p-1.5 rounded-2xl"
        style={{ 
          background: 'rgba(100, 100, 100, 0.22)',
          backdropFilter: 'blur(16px) saturate(140%)',
          WebkitBackdropFilter: 'blur(16px) saturate(140%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
        }}
      >
        {/* Subtle top highlight */}
        <div className="absolute inset-x-3 top-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none" />
        
        {/* White Active Pill - Perfectly centered in button */}
        <motion.div 
          className="absolute bg-white"
          style={{ 
            top: '6px', 
            bottom: '6px',
            borderRadius: '14px',
            width: '96px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
          }}
          initial={false}
          animate={{ 
            x: 6 + (activeIndex * 100)
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />

        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center justify-center gap-2 z-10 h-11 transition-colors duration-200 ${
                isActive ? 'text-gray-900' : 'text-white/75 hover:text-white'
              }`}
              style={{ 
                width: '96px',
                borderRadius: '14px'
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[13px] font-semibold tracking-tight">{tab.label}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}