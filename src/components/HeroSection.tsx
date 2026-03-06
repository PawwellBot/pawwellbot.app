import { motion } from 'framer-motion'
import { Sparkles, Scissors, Film } from 'lucide-react'
import profileImage from '../assets/profile-square.png'

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-glow-primary opacity-30 blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* PawwellBot Profile Button - FrameCraft Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-6 sm:mb-8"
            style={{
              background: 'rgba(40, 40, 40, 0.8)',
              backdropFilter: 'blur(12px) saturate(140%)',
              WebkitBackdropFilter: 'blur(12px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-white/20">
              <img 
                src={profileImage} 
                alt="PawwellBot"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-semibold text-base sm:text-lg tracking-tight">PawwellBot</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Creating <span className="gradient-text glow-text">Viral</span> Content
          </h2>
          
          <p className="text-base sm:text-xl text-pawwelium-muted max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Specializing in gaming content, highlights, and engaging short-form videos that capture attention.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-pawwelium-muted text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>1.5 Years Experience</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white" />
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>10+ Projects</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>@PawwellBot</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}