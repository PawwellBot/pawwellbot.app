import { motion } from 'framer-motion'
import { Wrench, Clock, AlertCircle, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'

// Set maintenance end time here (in minutes from now)
const MAINTENANCE_DURATION_MINUTES = 30

export default function MaintenancePage(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(MAINTENANCE_DURATION_MINUTES * 60) // Convert to seconds
  const [isOverdue, setIsOverdue] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          setIsOverdue(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-pawwelium-dark flex items-center justify-center px-6 relative overflow-hidden">
      {/* Same grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
            animation: 'gridScroll 4s linear infinite',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%'
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Icon - BIGGER */}
        <motion.div 
          animate={isOverdue ? {} : { rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/10 mb-10 ring-2 ring-white/20"
        >
          {isOverdue ? (
            <Loader2 className="w-16 h-16 text-white animate-spin" />
          ) : (
            <Wrench className="w-16 h-16 text-white" />
          )}
        </motion.div>

        {/* Title - BIGGER */}
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          {isOverdue ? 'Almost\nReady' : 'Under\nMaintenance'}
        </h1>

        {/* Description - BIGGER */}
        <p className="text-pawwelium-muted text-xl sm:text-2xl mb-10 leading-relaxed max-w-xl mx-auto">
          {isOverdue 
            ? "Update is ready but waiting for deployment. Should be live any moment now!"
            : "We're currently updating the site to bring you something amazing. Check back soon!"
          }
        </p>

        {/* Status Card - BIGGER */}
        <div className={`border rounded-3xl p-8 backdrop-blur-sm max-w-md mx-auto transition-colors duration-500 ${
          isOverdue 
            ? 'bg-yellow-500/10 border-yellow-500/30' 
            : 'bg-pawwelium-card/80 border-pawwelium-border/50'
        }`}>
          <div className={`flex items-center justify-center gap-3 mb-4 ${
            isOverdue ? 'text-yellow-400' : 'text-white'
          }`}>
            {isOverdue ? (
              <AlertCircle className="w-6 h-6" />
            ) : (
              <Clock className="w-6 h-6" />
            )}
            <span className="font-semibold text-lg">
              {isOverdue ? 'Status' : 'Estimated Time'}
            </span>
          </div>
          
          <p className={`text-4xl sm:text-5xl font-bold mb-3 ${
            isOverdue ? 'text-yellow-400' : 'gradient-text'
          }`}>
            {isOverdue ? 'Waiting for maintainer' : formatTime(timeLeft)}
          </p>
          
          <div className={`flex items-center justify-center gap-2 text-base ${
            isOverdue ? 'text-yellow-400/70' : 'text-pawwelium-muted'
          }`}>
            {isOverdue ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Push update to go live</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5" />
                <span>Auto-updating countdown</span>
              </>
            )}
          </div>
        </div>

        {/* Contact Info - BIGGER */}
        <p className="text-pawwelium-muted text-lg mt-10">
          Need urgent help? Contact{' '}
          <a 
            href="https://x.com/PawwellBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:underline font-semibold"
          >
            @PawwellBot
          </a>
        </p>
      </motion.div>
    </div>
  )
}