import { motion } from 'framer-motion'
import { Sparkles, Scissors, Film, Bot } from 'lucide-react'

export default function HeroSection(): JSX.Element {
  return (
    // ADDED pt-24 (padding top) to push content below header
    <section className="relative pt-24 sm:pt-28 py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-glow-primary opacity-30 blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/30 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>[PLACEHOLDER: Your Title]</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            [PLACEHOLDER: Headline]{' '}
            <span className="gradient-text glow-text">[Highlight]</span>
          </h2>
          
          <p className="text-base sm:text-xl text-pawwelium-muted max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Hi, I'm <span className="text-white font-semibold">[PLACEHOLDER: Name]</span>. 
            [PLACEHOLDER: Your bio description]
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-pawwelium-muted text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>[PLACEHOLDER] Years Experience</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white" />
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>[PLACEHOLDER]+ Projects</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white" />
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>@PawwellBot</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}