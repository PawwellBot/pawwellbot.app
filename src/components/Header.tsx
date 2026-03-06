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
      className="fixed bottom-6 left-1/2 z-50"
    >
      {/* Compact iOS Floating Dock */}
      <div 
        className="relative flex items-center p-1.5 rounded-full"
        style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
        }}
      >
        {/* Top highlight line */}
        <div className="absolute inset-x-3 top-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none" />
        
        {/* Active Pill Background */}
        <motion.div 
          className="absolute rounded-full bg-white"
          style={{ 
            top: '6px', 
            bottom: '6px', 
            left: '6px',
            height: 'calc(100% - 12px)',
            width: '80px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
          }}
          animate={{ 
            x: activeIndex * 84
          }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />

        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center justify-center gap-2 rounded-full z-10 h-10 px-4 transition-colors duration-200 ${
                isActive ? 'text-gray-900' : 'text-white/70 hover:text-white'
              }`}
              style={{ width: '80px' }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-xs font-medium">{tab.label}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}