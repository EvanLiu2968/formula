const KFEditor = require('./editor')
const Factory = require('./factory')

const ui = require('./ui/ui')
const parser = require('./parse/parser')
const render = require('./render/render')
const position = require('./position/position')
const syntax = require('./syntax/syntax')
const control = require('./control/controller')
const print = require('./print/printer')

// 注册组件
KFEditor.registerComponents( "ui", ui );
KFEditor.registerComponents( "parser", parser );
KFEditor.registerComponents( "render", render );
KFEditor.registerComponents( "position", position );
KFEditor.registerComponents( "syntax", syntax );
KFEditor.registerComponents( "control", control );
KFEditor.registerComponents( "print", print );

module.exports = Factory
