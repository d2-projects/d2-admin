import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/d2-utils.js',
      name: 'D2Utils',
      format: 'umd'
    },
    {
      file: 'dist/d2-utils.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
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
