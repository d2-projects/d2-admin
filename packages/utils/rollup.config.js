import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import multi from '@rollup/plugin-multi-entry'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/**/*.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      name: 'D2Utils',
      format: 'umd'
    },
    {
      file: 'dist/index.es.js',
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    multi(),
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
