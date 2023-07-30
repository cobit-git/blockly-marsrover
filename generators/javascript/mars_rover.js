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
  //const speed = block.getFieldValue('SPEED');
  //const code =  'motor_speed = '+speed+';\n document.dispatchEvent(event_move_forward);\n ';
  // for acron 
  const code = "move_forward_acorn();\nwaitForSeconds(0.3);\n";
  
  return code;
};

JavaScript['move_backward'] = function(block) {
  // Append to a variable in place.
  //const varName = JavaScript.nameDB_.getName(
  //    block.getFieldValue('SERVO'), NameType.VARIABLE);
  //const value = JavaScript.valueToCode(block, 'TEXT',
  //    JavaScript.ORDER_NONE) || "''";
  //const speed = block.getFieldValue('SPEED');
  //const code =  'motor_speed = '+speed+';\n document.dispatchEvent(event_move_forward);\n ';
  // for acron 
  const code = "move_backward_acorn();\nwaitForSeconds(0.3);\n";
  
  return code;
};


JavaScript['rover_stop'] = function(block) {
  // Append to a variable in place.
  //const varName = JavaScript.nameDB_.getName(
  //    block.getFieldValue('SERVO'), NameType.VARIABLE);
  //const value = JavaScript.valueToCode(block, 'TEXT',
  //    JavaScript.ORDER_NONE) || "''";
  //const code =  'document.dispatchEvent(event_rover_stop);\n';
  const code = "rover_stop_acorn();\nwaitForSeconds(0.3);\n";
  return code;
};

JavaScript['object_detect'] = function(block) {
  // Append to a variable in place.
  //const varName = JavaScript.nameDB_.getName(
  //    block.getFieldValue('SERVO'), NameType.VARIABLE);
  //const value = JavaScript.valueToCode(block, 'TEXT',
  //    JavaScript.ORDER_NONE) || "''";
  //const code =  'document.dispatchEvent(event_rover_stop);\n';
  const code = "object_detect_acorn();\n";
  return code;
};


JavaScript['wait_seconds'] = function(block) {
  const seconds = Number(block.getFieldValue('SECONDS'));
  const code = 'waitForSeconds(' + seconds + ');\n';
  return code;
};

JavaScript['turn_left'] = function(block) {
  //const degrees = Number(block.getFieldValue('DEGREES'));
  const code = 'turn_left_acorn();\nwaitForSeconds(0.3);\n';
  return code;
};

JavaScript['turn_right'] = function(block) {
  //const degrees = Number(block.getFieldValue('DEGREES'));
  const code = 'turn_right_acorn();waitForSeconds(0.3);\n\n';
  return code;
};


JavaScript['led_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  const code = "led_on_acorn();\nwaitForSeconds(0.3);\n";
  return code;
};

JavaScript['led_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  const code = "led_off_acorn();\nwaitForSeconds(0.3);\n";
  return code;
};

JavaScript['console_print'] = function(block) {
  var value_console_log = Blockly.JavaScript.valueToCode(block, 'CONSOLE_LOG', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log('+value_console_log+')\n';
  return code;
};

JavaScript['read_angle'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  const code = "read_angle_acorn()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

JavaScript['read_sensor1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  const code = "read_front_sensor_acorn()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

JavaScript['read_sensor2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  const code = "read_rear_sensor_acorn()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

setTimeout(function() {
  console.log('Works!');
}, 3000);
