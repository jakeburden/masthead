const test = require('tape')
const vdom = require('virtual-dom')
const hyperx = require('hyperx')
const masthead = require('../')

const hx = hyperx(vdom.h)
const tree = hx(masthead)
const expected = `<main>
  <h1>
    Jacob Burden
  </h1>
  <h2>
    Frontend &amp; Node.js Developer
  </h2>
</main>`

test('masthead', t => {
  t.plan(1)
  t.same(vdom.create(tree).toString(), expected)
})

