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
      <div 
        className="relative flex items-center rounded-full"
        style={{ 
          background: 'rgba(30, 30, 30, 0.65)',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          padding: '6px 8px'
        }}
      >
        {/* Subtle top highlight */}
        <div className="absolute inset-x-6 top-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full pointer-events-none" />
        
        {/* iOS 26 style floating pill indicator - thinner and longer */}
        <motion.div 
          className="absolute bg-white"
          style={{ 
            top: '6px', 
            bottom: '6px',
            borderRadius: '9999px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
          }}
          initial={false}
          animate={{ 
            left: `${8 + (activeIndex * 130)}px`,
            width: '122px'
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />

        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center justify-center gap-2 z-10 transition-colors duration-200 ${
                isActive ? 'text-gray-900' : 'text-white/65 hover:text-white'
              }`}
              style={{ 
                width: '130px',
                height: '44px',
                borderRadius: '9999px'
              }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[14px] font-semibold tracking-tight">{tab.label}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}