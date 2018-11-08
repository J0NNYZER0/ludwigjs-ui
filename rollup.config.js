import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/main.js',
    external: ['react', 'react-dom'],
    output: {
      file: 'dist/viddy.min.js',
      format: 'umd',
      name: 'viddy',
      globals: {
        react: 'React',
        "react-dom": 'ReactDOM'
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
