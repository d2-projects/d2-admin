import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import multi from '@rollup/plugin-multi-entry'

export default {
  input: 'src/**/*.js',
  output: [
    {
      file: 'dist/index.umd.js',
      name: 'D2UtilsCommon',
      format: 'umd'
    },
    {
      file: 'dist/index.es.js',
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve(),
    multi(),
    terser({
      format: {
        comments: false
      },
      compress: {
        unused: true,
        dead_code: true,
        drop_console: false
      }
    })
  ]
}
