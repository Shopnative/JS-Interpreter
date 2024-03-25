
const Acorn = require('acorn')

declare global {
    var acorn : typeof Acorn
}

globalThis.acorn = Acorn

import './interpreter'
