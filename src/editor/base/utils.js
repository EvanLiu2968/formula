/*!
 * 基础工具包
 */

const commonUtils = require('./common')
const eventUtils = require('./event/event')

var Utils = {};

commonUtils.extend(Utils, commonUtils, eventUtils);

module.exports = Utils;
