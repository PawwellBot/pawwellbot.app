import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function fullReloadOnProjectChanges(): Plugin {
  return {
    name: 'pawwellbot-full-reload',
    configureServer(server) {
      server.watcher.add(['src/**/*', 'api/**/*', 'index.html', 'package.json', 'vite.config.ts'])
    },
    handleHotUpdate({ file, server }) {
      const normalizedFile = file.replace(/\\/g, '/')
      const shouldReload =
        normalizedFile.includes('/src/') ||
        normalizedFile.includes('/api/') ||
        normalizedFile.endsWith('/index.html') ||
        normalizedFile.endsWith('/package.json') ||
        normalizedFile.endsWith('/vite.config.ts')

      if (!shouldReload) {
        return
      }

      server.ws.send({ type: 'full-reload' })
      return []
    },
  }
}

export default defineConfig({
  plugins: [react(), fullReloadOnProjectChanges()],
})
