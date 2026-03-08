import { motion } from 'framer-motion'
import { Wrench, Clock, AlertCircle, Loader2, RefreshCw } from 'lucide-react'
import { useState, useEffect } from 'react'

// Set maintenance duration here (in minutes)
const MAINTENANCE_DURATION_MINUTES = 30
const STORAGE_KEY = 'maintenance_end_time'

export default function MaintenancePage(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(0)
  const [isOverdue, setIsOverdue] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize timer from localStorage or set new end time
  useEffect(() => {
    // Check if window exists (client-side only)
    if (typeof window === 'undefined') return

    const now = Date.now()
    let endTime: number | null = null

    try {
      const storedEndTime = localStorage.getItem(STORAGE_KEY)
      if (storedEndTime) {
        endTime = parseInt(storedEndTime, 10)
        // If stored time is in the past, clear it and set new time
        if (endTime < now) {
          localStorage.removeItem(STORAGE_KEY)
          endTime = null
        }
      }
    } catch (e) {
      console.error('localStorage error:', e)
    }

    // If no valid stored time, set new end time
    if (!endTime) {
      endTime = now + (MAINTENANCE_DURATION_MINUTES * 60 * 1000)
      try {
        localStorage.setItem(STORAGE_KEY, endTime.toString())
      } catch (e) {
        console.error('localStorage set error:', e)
      }
    }

    // Calculate initial time left
    const calculateTimeLeft = () => {
      const remaining = Math.max(0, Math.floor((endTime! - Date.now()) / 1000))
      setTimeLeft(remaining)
      setIsOverdue(remaining === 0)
      setIsLoaded(true)
    }

    calculateTimeLeft()

    // Update every second
    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime! - Date.now()) / 1000))
      setTimeLeft(remaining)
      
      if (remaining === 0) {
        setIsOverdue(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Show loading state while initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
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
        {/* Icon */}
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

        {/* Title */}
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          {isOverdue ? (
            <>Almost<br />Ready</>
          ) : (
            <>Under<br />Maintenance</>
          )}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-xl sm:text-2xl mb-10 leading-relaxed max-w-xl mx-auto">
          {isOverdue 
            ? "Update is ready but waiting for deployment. Should be live any moment now!"
            : "We're currently updating the site to bring you something amazing. Check back soon!"
          }
        </p>

        {/* Status Card */}
        <div 
          className={`border rounded-3xl p-8 backdrop-blur-sm max-w-md mx-auto transition-colors duration-500 ${
            isOverdue 
              ? 'bg-yellow-500/10 border-yellow-500/30' 
              : 'bg-[#141414]/80 border-[#2A2A2A]/50'
          }`}
        >
          <div 
            className={`flex items-center justify-center gap-3 mb-4 ${
              isOverdue ? 'text-yellow-400' : 'text-white'
            }`}
          >
            {isOverdue ? (
              <AlertCircle className="w-6 h-6" />
            ) : (
              <Clock className="w-6 h-6" />
            )}
            <span className="font-semibold text-lg">
              {isOverdue ? 'Status' : 'Estimated Time'}
            </span>
          </div>
          
          <p 
            className={`text-4xl sm:text-5xl font-bold mb-3 ${
              isOverdue ? 'text-yellow-400' : 'text-white'
            }`}
          >
            {isOverdue ? 'Waiting for maintainer' : formatTime(timeLeft)}
          </p>
          
          <div 
            className={`flex items-center justify-center gap-2 text-base ${
              isOverdue ? 'text-yellow-400/70' : 'text-gray-500'
            }`}
          >
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

        {/* Reload Instruction - Only show when timer is up */}
        {isOverdue && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>If the page doesn't reload automatically, please reload it yourself</span>
          </motion.div>
        )}

        {/* Contact Info */}
        <p className="text-gray-500 text-lg mt-10">
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