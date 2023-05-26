/*!
 * 分割符
 */

const { kity } = require('../../global')
// UiUitls
const $$ = require('./ui-utils')

var PREFIX = "kf-editor-ui-";

var Delimiter = kity.createClass( "Delimiter", {

    constructor: function ( doc ) {

        this.doc = doc;
        this.element = this.createDilimiter();

    },

    setToolbar: function ( toolbar ) {
    // do nothing
    },

    createDilimiter: function () {

        var dilimiterNode = $$.ele( this.doc, "div", {
            className: PREFIX + "delimiter"
        } );

        dilimiterNode.appendChild( $$.ele( this.doc, "div", {
            className: PREFIX + "delimiter-line"
        } ) );

        return dilimiterNode;

    },

    attachTo: function ( container ) {

        container.appendChild( this.element );

    }

});

module.exports = Delimiter;
