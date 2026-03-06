import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Review {
  id: number
  client: string
  role: string
  content: string
  rating: number
  avatar: string
  profileUrl?: string
}

interface ReviewsSectionProps {
  reviews: Review[]
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps): JSX.Element {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Client Reviews</h2>
          <p className="text-pawwelium-muted text-base sm:text-lg">
            What content creators say about working with me
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.a
              href={review.profileUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              key={review.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-r from-pawwelium-card to-pawwelium-dark border border-pawwelium-border rounded-2xl p-5 sm:p-8 card-hover block"
            >
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-10 sm:h-10 text-white/20" />
              
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Profile Image */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-white/20 to-white/5 border border-white/10">
                  {review.avatar.startsWith('http') ? (
                    <img 
                      src={review.avatar} 
                      alt={review.client}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl">🎮</div>`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl bg-gradient-to-br from-white to-gray-300">
                      {review.avatar}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">{review.client}</h4>
                      <p className="text-white/60 text-xs sm:text-sm">{review.role}</p>
                    </div>
                    
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-lg text-pawwelium-text/90 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 text-center"
        >
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-pawwelium-card border border-pawwelium-border">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">84%</div>
            <div className="text-xs sm:text-sm text-pawwelium-muted">Satisfaction</div>
          </div>
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-pawwelium-card border border-pawwelium-border">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">10+</div>
            <div className="text-xs sm:text-sm text-pawwelium-muted">Clients</div>
          </div>
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-pawwelium-card border border-pawwelium-border">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">Varies</div>
            <div className="text-xs sm:text-sm text-pawwelium-muted">Turnaround</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}