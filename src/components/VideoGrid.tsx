import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, Clock, Eye } from 'lucide-react'

interface Video {
  id: number
  title: string
  client: string
  duration: string
  views: string
  thumbnail: string
  description: string
  youtubeUrl: string
}

interface VideoGridProps {
  videos: Video[]
}

export default function VideoGrid({ videos }: VideoGridProps): JSX.Element {
  return (
    <section className="px-4 sm:px-6 pb-12 sm:pb-20 pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Featured Work</h3>
          <motion.a
            href="https://www.youtube.com/@PawwellBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="text-white hover:text-gray-300 transition-colors text-sm font-medium flex items-center gap-1"
          >
            View Channel <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {videos.map((video, index) => (
              <motion.a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-pawwelium-card rounded-2xl overflow-hidden card-hover cursor-pointer block"
              >
                {/* Thumbnail with YouTube image */}
                <div className="aspect-video relative overflow-hidden bg-pawwelium-dark">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${video.youtubeUrl.split('/').pop()}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-white/50"
                    >
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 ml-0.5 sm:ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-pawwelium-muted mb-2 sm:mb-3">{video.client}</p>
                  <p className="text-xs sm:text-sm text-pawwelium-text/70 mb-3 sm:mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-pawwelium-muted border-t border-pawwelium-border pt-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {video.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {video.views}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}