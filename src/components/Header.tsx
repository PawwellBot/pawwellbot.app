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
      initial={{ y: 100 }} 
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      {/* iOS 26 Style Floating Dock */}
      <div 
        className="relative flex items-center gap-1 p-2 rounded-[32px]"
        style={{ 
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Top highlight line for glass effect */}
        <div className="absolute inset-x-2 top-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none" />
        
        {/* Active Indicator Pill */}
        <motion.div 
          className="absolute rounded-[24px] bg-white/95"
          style={{ 
            top: '8px', 
            bottom: '8px', 
            left: '8px', 
            width: '88px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
          animate={{ 
            x: activeIndex * 96
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
              className={`relative flex flex-col items-center justify-center gap-1 rounded-[24px] z-10 w-[88px] h-[64px] transition-colors duration-200 ${
                isActive ? 'text-gray-900' : 'text-white/70 hover:text-white'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}