import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Mail, ExternalLink, Send, Clock, Check, Copy } from 'lucide-react'

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function ContactSection(): JSX.Element {
  const [showPopup, setShowPopup] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState('')

  const handleEmailClick = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(email)
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Get In Touch</h2>
          <p className="text-pawwelium-muted text-base sm:text-lg">
            Ready to elevate your content? Let's work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12 relative">
          {/* X Card */}
          <motion.a
            href="https://x.com/PawwellBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 sm:p-8 card-hover"
          >
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <XLogo className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">X (Twitter)</h3>
              <p className="text-pawwelium-muted text-sm sm:text-base mb-3 sm:mb-4">Fastest way to reach me</p>
              
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <span>@PawwellBot</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Email Card */}
          <div className="relative">
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 w-full max-w-[280px]"
                >
                  <div className="bg-pawwelium-card border border-white/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-2xl shadow-black/50 flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-pawwelium-yellow to-pawwelium-gold flex items-center justify-center flex-shrink-0"
                    >
                      <Check className="w-5 h-5 text-gray-900" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-white">Copied to clipboard!</p>
                      <p className="text-xs text-pawwelium-muted truncate">{copiedEmail}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-pawwelium-card border-r border-b border-white/20 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => handleEmailClick('pawwellinquiries@gmail.com')}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden bg-gradient-to-br from-white/20 to-pawwelium-card border border-white/30 rounded-2xl p-6 sm:p-8 card-hover text-left w-full"
            >
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-white to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-gray-900" />
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Email</h3>
                <p className="text-pawwelium-muted text-sm sm:text-base mb-3 sm:mb-4">For detailed inquiries</p>
                
                <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                  <span>pawwellinquiries@gmail.com</span>
                </div>
                
                <p className="text-white/40 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to copy
                </p>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Contact Form with Coming Soon Overlay */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-pawwelium-card border border-pawwelium-border rounded-2xl p-5 sm:p-8 opacity-20 grayscale pointer-events-none select-none blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>
            
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <input type="text" placeholder="Your Name" disabled className="w-full bg-pawwelium-dark border border-pawwelium-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-pawwelium-muted" />
                <input type="email" placeholder="Your Email" disabled className="w-full bg-pawwelium-dark border border-pawwelium-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-pawwelium-muted" />
              </div>
              <input type="text" placeholder="Project Type" disabled className="w-full bg-pawwelium-dark border border-pawwelium-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-pawwelium-muted" />
              <textarea rows={4} placeholder="Tell me about your project..." disabled className="w-full bg-pawwelium-dark border border-pawwelium-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-pawwelium-muted resize-none" />
              <button disabled className="w-full py-3 sm:py-4 bg-gradient-to-r from-white to-gray-200 text-gray-900 font-bold rounded-lg sm:rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base opacity-50">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 200 }} className="absolute inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px]" />
            <div className="relative bg-pawwelium-card/95 border border-white/20 rounded-3xl px-12 py-10 shadow-2xl shadow-black/50 text-center min-w-[320px] sm:min-w-[400px]">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <Clock className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold text-white mb-4">Coming Soon</h3>
              <p className="text-pawwelium-muted text-lg mb-2">Direct messaging is under development</p>
              <p className="text-white/60 text-base mt-4">Use X or Email for now</p>
            </div>
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center text-pawwelium-muted text-xs sm:text-sm mt-6 sm:mt-8">
          Peak Video Editing
        </motion.p>
      </div>
    </section>
  )
}