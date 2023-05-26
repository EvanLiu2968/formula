/**
 * Created by hn on 14-4-11.
 */

const { kity } = require('../global')
const ListenerComponent = require('./listener')

var ControllerComponent = kity.createClass( 'ControllerComponent', {
    constructor: function ( kfEditor ) {
        this.kfEditor = kfEditor;
        this.components = {};
        this.initComponents();
    },
    initComponents: function () {
        this.components.listener = new ListenerComponent( this, this.kfEditor );
    }
});

module.exports = ControllerComponent;
