## jekrb.codes masthead

masthead for jekrb.codes

[![build status](http://img.shields.io/travis/jekrb/masthead.svg?style=flat)](http://travis-ci.org/jekrb/masthead)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

### install
```
npm install @jekrb/masthead --save
``

## usage
```js
const masthead = require('@jekrb/masthead')
const vdom = require('virtual-dom')
const hyperx = require('hyperx')

const hx = hyperx(vdom.h)
const tree = hx(masthead)

console.log(vdom.create(tree).toString())
```

yields

```html
<main>
  <h1>
    Jacob Burden
  </h1>
  <h2>
    Frontend &amp; Node.js Developer
  </h2>
</main>
```

#### license
MIT
