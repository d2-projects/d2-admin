import { build } from 'vite'
import config from './config.js'

;(async () => {
  await build(await config())
})()
