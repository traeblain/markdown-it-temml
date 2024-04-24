# markdown-it-temml

Add Math to your Markdown

[![Build Status](https://travis-ci.org/traeblain/markdown-it-temml.svg?branch=master)](https://travis-ci.org/traeblain/markdown-it-temml)

[Temml](https://temml.org/) is as fast as [KaTeX](https://github.com/Khan/KaTeX) and an alternative to MathJax. Temml supports additional LaTeX features that KaTeX might not support yet. This plugin makes it easy to support in your markdown.

Temml works in browsers that support [MathML markup](https://caniuse.com/mathml).  This includes Chrome, Edge, Firefox, and Safari; but not Internet Explorer.

## Usage

Install markdown-it

```bash
npm install markdown-it
```

Install the plugin

```bash
npm install @traeblain/markdown-it-temml
```

Use it in your javascript

```javascript
import markdownit from 'markdown-it'
import tml_plugin from '@traeblain/markdown-it-temml'

const md = markdownit()
const tml_plugin = require('@traeblain/markdown-it-temml')
md.use(tml_plugin)

// double backslash is required for javascript strings, but not html input
let result = md.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$')
```

Include the Temml stylesheet in your html:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/temml@0.10.24/dist/Temml-Local.min.css">
```

If you're using the default markdown-it parser, I also recommend the [github stylesheet](https://github.com/sindresorhus/github-markdown-css):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"/>
```

$\Large \mathrm{T}\negthinspace\lower2pt{\mathrm{E}}\negthinspace\mathrm{M}\negthinspace\raise2pt{\mathrm{M}}\negthinspace\mathrm{L}$ options can be supplied with the second argument to use.

```javascript
md.use(tml_plugin, {"throwOnError" : false, "errorColor" : " #cc0000"});
```

Additional options are available at [Temml's Documentation](https://temml.org/docs/en/administration#options).

## Examples

### Inline

Surround your LaTeX with a single `$` on each side for inline rendering.

```latex
$\sqrt{3x-1}+(1+x)^2$
```

### Block

Use two (`$$`) for block rendering. This mode uses bigger symbols and centers
the result.

```latex
$$\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}$$
```

## Syntax

Math parsing in markdown is designed to agree with the conventions set by pandoc:

    Anything between two $ characters will be treated as TeX math. The opening $ must
    have a non-space character immediately to its right, while the closing $ must
    have a non-space character immediately to its left, and must not be followed
    immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math. If for some
    reason you need to enclose text in literal $ characters, backslash-escape them and
    they won’t be treated as math delimiters.

## Math Syntax Support

Temml is based on TeX and LaTeX. Support for both is in constant development
Here's a table of supported and unsupported functions:

[Temml Support Table](https://temml.org/docs/en/support_table)
