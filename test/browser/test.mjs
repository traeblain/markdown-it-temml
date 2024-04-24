// const md = require('markdown-it')()
// const tml_plugin = require('@traeblain/markdown-it-temml')
import markdownit from 'markdown-it'
import tml_plugin from '../../index.mjs'

const md = markdownit()

md.use(tml_plugin)

// Now check the button, then render the output.
const input = document.getElementById('input')
const output = document.getElementById('output')
const button = document.getElementById('button')

button.addEventListener('click', ev => {
  output.innerHTML = md.render(input.value)
})

window.onload = () => {
  output.innerHTML = md.render(input.value)
}
