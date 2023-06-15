import { createServer } from 'vite'
import config from './config.js'

;(async () => {
  const server = await createServer(await config())
  await server.listen()
  server.printUrls()
})()
