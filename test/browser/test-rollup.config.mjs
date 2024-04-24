import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { babel } from '@rollup/plugin-babel'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url)))

function globalName (name) {
  const parts = name.split('-')
  for (let i = 2; i < parts.length; i++) {
    parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1)
  }
  return parts.join('')
}

const test_umd_full = {
  input: './test/browser/test.mjs',
  output: {
    file: './test/browser/bundled.js',
    format: 'umd',
    name: globalName(pkg.name),
    plugins: [
      terser({
        mangle: false,
        compress: false,
        format: { comments: 'all', beautify: true, ascii_only: true, indent_level: 2 }
      })
    ]
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}

const config = [
  test_umd_full
]

export default config
