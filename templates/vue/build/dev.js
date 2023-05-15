import { createServer } from 'vite'

;(async () => {
  const server = await createServer()
  await server.listen()
  server.printUrls()
  server.openBrowser()
})()
