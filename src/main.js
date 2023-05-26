window.jQuery = require('./lib/jquery-1.11.0.min.js')
require('./lib/kitygraph.all.js') // 定义window.kity
require('./lib/kity-formula-render.all.js') // 定义window.kf
require('./lib/kity-formula-parser.all.js') // 扩展window.kf

const EditorFactory = require('./editor')

const factory = EditorFactory.create(document.getElementById('kf-editor'), {
  render: {
    fontsize: 40
  },
  resource: {
    path: "./resource/"
  }
});

factory.ready( function ( KFEditor ) {

  // this指向KFEditor

  KFEditor.execCommand( "render", "\\placeholder" );
  KFEditor.execCommand( "focus" );

  window.kfe = KFEditor;

  const textarea = document.getElementById('kf-textarea')

  KFEditor.Events.on('latexChange', (latexStr) => {
    textarea.value = latexStr
    renderDom && renderDom(latexStr)
  })

  textarea.addEventListener('input', () => {
    const latexStr = textarea.value
    KFEditor.execCommand("render", latexStr);
    renderDom && renderDom(latexStr)
  }, false)
});

var Parser = window.kf.Parser,
    Assembly = kf.Assembly,
    latexParser = Parser.use( "latex" );

kf.ResourceManager.ready( function ( Formula ) {

  var formula = new Formula( document.getElementById( "render-viewer" ), {
      fontsize: 24
  });
  var assembly = new Assembly( formula );

  window.renderDom = (str) => {
    var parseResult = latexParser.parse( str );
    console.log(parseResult)
    const renderRes = assembly.regenerateBy( parseResult );
    console.log(renderRes)
  }

}, {
    path: "./resource/"
} );
