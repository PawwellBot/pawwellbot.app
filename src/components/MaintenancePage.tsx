import { motion } from 'framer-motion'
import { Wrench, Clock, AlertCircle } from 'lucide-react'

export default function MaintenancePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-pawwelium-dark flex items-center justify-center px-4 relative overflow-hidden">
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
        className="relative z-10 text-center max-w-md mx-auto"
      >
        {/* Icon */}
        <motion.div 
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 mb-8 ring-2 ring-white/20"
        >
          <Wrench className="w-12 h-12 text-white" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-pawwelium-muted text-lg mb-8 leading-relaxed">
          We're currently updating the site to bring you something amazing. 
          Check back soon!
        </p>

        {/* Status Card */}
        <div className="bg-pawwelium-card/80 border border-pawwelium-border/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-white mb-4">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Estimated Time</span>
          </div>
          <p className="text-3xl font-bold gradient-text mb-2">30 Minutes</p>
          <div className="flex items-center justify-center gap-2 text-pawwelium-muted text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Last updated: Just now</span>
          </div>
        </div>

        {/* Contact Info */}
        <p className="text-pawwelium-muted text-sm mt-8">
          Need urgent help? Contact{' '}
          <a 
            href="https://x.com/PawwellBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            @PawwellBot
          </a>
        </p>
      </motion.div>
    </div>
  )
}