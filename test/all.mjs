import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import markdownit from 'markdown-it'
import tml_plugin from '../index.mjs'
import tape from 'tape'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const load = require('markdown-it-testgen').load

const md = markdownit()
  .use(tml_plugin)

const __dirname = dirname(fileURLToPath(import.meta.url))

load(join(__dirname, 'fixtures/default.txt'), data => {
  data.fixtures.forEach(fixture => {
    tape(fixture.header, t => {
      t.plan(1)

      const expected = fixture.second.text
      const actual = md.render(fixture.first.text)

      t.equals(actual, expected)
    })
  })
})
