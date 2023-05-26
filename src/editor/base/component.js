/*!
 * 组件抽象类，所有的组件都是该类的子类
 * @abstract
 */
const { kity } = require('../global')

const component = kity.createClass('Component', {
    constructor: function () {}
});

module.exports = component
