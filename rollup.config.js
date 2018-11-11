import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'lib/index.js',
    external: ['react', 'react-dom'],
    output: {
      file: 'dist/ludwig.min.js',
      format: 'umd',
      name: 'ludwig',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
      }
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs(),
      uglify()
    ]
}
