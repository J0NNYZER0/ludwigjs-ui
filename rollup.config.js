import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
    input: 'lib/index.js',
    external: ['react', 'react-dom'],
    output: {
      format: 'umd',
      name: 'viddy',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      babel({
          exclude: 'node_modules/**'
      }),
      uglify()
    ]
}
export default config
