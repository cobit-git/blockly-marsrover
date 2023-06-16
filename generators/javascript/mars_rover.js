/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating JavaScript for mars rover blocks.
 */
'use strict';

goog.module('Blockly.JavaScript.mars_rover');

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

//const stringUtils = goog.require('Blockly.utils.string');
//const {NameType} = goog.require('Blockly.Names');
const {javascriptGenerator: JavaScript} = goog.require('Blockly.JavaScript');

JavaScript['move_forward'] = function(block) {
  // Append to a variable in place.
  //const varName = JavaScript.nameDB_.getName(
  //    block.getFieldValue('SERVO'), NameType.VARIABLE);
  //const value = JavaScript.valueToCode(block, 'TEXT',
  //    JavaScript.ORDER_NONE) || "''";
  const speed = block.getFieldValue('SPEED');
  const code =  'motor_speed = '+speed+';\n document.dispatchEvent(event_move_forward);\n ';
  return code;
};

JavaScript['rover_stop'] = function(block) {
  // Append to a variable in place.
  //const varName = JavaScript.nameDB_.getName(
  //    block.getFieldValue('SERVO'), NameType.VARIABLE);
  //const value = JavaScript.valueToCode(block, 'TEXT',
  //    JavaScript.ORDER_NONE) || "''";
  const code =  'document.dispatchEvent(event_rover_stop);\n';
  return code;
};


JavaScript['wait_seconds'] = function(block) {
  const seconds = Number(block.getFieldValue('SECONDS'));
  const code = 'waitForSeconds(' + seconds + ');\n';
  return code;
};

JavaScript['led_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("LED on");\n document.dispatchEvent(event_led_on);\n';
  return code;
};

JavaScript['led_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("LED off");\n document.dispatchEvent(event_led_off);\n';
  return code;
};

JavaScript['console_print'] = function(block) {
  var value_console_log = Blockly.JavaScript.valueToCode(block, 'CONSOLE_LOG', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log('+value_console_log+')\n';
  return code;
};

setTimeout(function() {
  console.log('Works!');
}, 3000);
