/**
 * Created by hn on 14-4-11.
 */

const { kity } = require('../global')

// 光标定位
const LocationComponent = require('./location')

// 输入控制组件
const InputComponent = require('./input')

// 选区
const SelectionComponent = require('./selection')

module.exports = kity.createClass( "MoveComponent", {
    constructor: function ( parentComponent, kfEditor ) {
        this.parentComponent = parentComponent;
        this.kfEditor = kfEditor;
        this.components = {};
        this.initComponents();
    },

    initComponents: function () {
        this.components.location= new LocationComponent( this, this.kfEditor );
        this.components.selection = new SelectionComponent( this, this.kfEditor );
        this.components.input = new InputComponent( this, this.kfEditor );
    }

});
