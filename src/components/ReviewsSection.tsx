import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Review {
  id: number
  client: string
  role: string
  content: string
  rating: number
  avatar: string
  avatarType: 'emoji' | 'image'
  avatarUrl?: string
}

interface ReviewsSectionProps {
  reviews: Review[]
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps): JSX.Element {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20 min-h-screen pb-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Client Reviews</h2>
          <p className="text-pawwelium-muted text-base sm:text-lg">
            What people say about working with me
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className="relative bg-gradient-to-r from-pawwelium-card/80 to-pawwelium-dark/80 border border-pawwelium-border/50 rounded-2xl p-5 sm:p-8 card-hover backdrop-blur-sm"
            >
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-10 sm:h-10 text-white/10" />
              
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {review.avatarType === 'image' && review.avatarUrl ? (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/20 bg-pawwelium-card">
                    <img 
                      src={review.avatarUrl} 
                      alt={review.client}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to emoji if image fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<span class="text-2xl">👤</span>';
                          parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-white', 'to-gray-300');
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-2xl sm:text-3xl shadow-lg shadow-white/10 flex-shrink-0">
                    {review.avatar}
                  </div>
                )}
                
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
                  
                  <p className="text-sm sm:text-lg text-pawwelium-text/90 leading-relaxed">
                    "{review.content}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 text-center"
        >
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-pawwelium-card/60 border border-pawwelium-border/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">100%</div>
            <div className="text-xs sm:text-sm text-pawwelium-muted">Satisfaction</div>
          </div>
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-pawwelium-card/60 border border-pawwelium-border/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">10+</div>
            <div className="text-xs sm:text-sm text-pawwelium-muted">Clients</div>
          </div>
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-pawwelium-card/60 border border-pawwelium-border/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">Fast</div>
            <div className="text-xs sm:text-sm text-pawwelium-muted">Turnaround</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}