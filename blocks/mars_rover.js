/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview Mars rover blocks for Blockly.
 */
'use strict';
goog.module('Blockly.libraryBlocks.mars_rover');
//const {BlockDefinition} = goog.requireType('Blockly.blocks');
// TODO (6248): Properly import the BlockDefinition type.
/* eslint-disable-next-line no-unused-vars */
const BlockDefinition = Object;
const { createBlockDefinitionsFromJsonArray, defineBlocks } = goog.require('Blockly.common');

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
const blocks = createBlockDefinitionsFromJsonArray([  
  // Move forward 
  {
    "type": "move_forward",
    "message0": "rover move forward",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "move_backward",
    "message0": "rover move backward",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rover_stop",
    "message0": "rover stop",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "object_detect",
    "message0": "object detecting",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "wait_seconds",
    "message0": " wait %1 seconds",
    "args0": [{
      "type": "field_number",
      "name": "SECONDS",
      "min": 0,
      "max": 600,
      "value": 1,
    }],
    "previousStatement": null,
    "nextStatement": null,
  },
  {
    "type": "turn_left",
    "message0": "rover turn left",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turn_right",
    "message0": "rover turn right",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "read_angle",
    "message0": "Read robot angle",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "read_sensor1",
    "message0": "Read front distance sensor",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "read_sensor2",
    "message0": "Read rear distance sensor",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "led_on",
    "message0": "Turn arduino LED ON",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "led_off",
    "message0": "Turn arduino LED OFF",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "console_print",
    "message0": "console  print %1  %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "CONSOLE_LOG"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
  
  
  /*,
    // Move servo 
    
    {
      "type": "move_servo",
      "message0": "Move servo  %1 servo number %2 %3 angle  %4",
      "args0": [
        {
          "type": "input_value",
          "name": "SERVO"
        },
        {
          "type": "field_number",
          "name": "SERVO_NO",
          "value": 0,
          "min": 1,
          "max": 4,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "ANGLE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Set up motor 
    {
      "type": "setup_motor",
      "message0": "Set up DC motor  %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Start motor 
    {
      "type": "start_motor",
      "message0": "Start motor  %1 right/reft %2 with speed %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_dropdown",
          "name": "MOTOR_SEL",
          "options": [
            [
              "right",
              "1"
            ],
            [
              "left",
              "2"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "SPEED",
          "value": 0,
          "min": 0,
          "max": 100,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Start all motor 
    {
      "type": "start_all_motor",
      "message0": "Start all motor %1 speed %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_number",
          "name": "SPEED",
          "value": 0,
          "min": 0,
          "max": 100,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Stop all motors
    {
      "type": "stop_all_motor",
      "message0": "Stop all motors %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Stop motor
    {
      "type": "stop_motor",
      "message0": "Stop motor %1 left/right %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MOTOR"
        },
        {
          "type": "field_dropdown",
          "name": "MOTOR_SEL",
          "options": [
            [
              "right",
              "1"
            ],
            [
              "left",
              "2"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    },
    // Wait seconds 
    {
      "type": "wait_seconds",
      "message0": "Wait seconds %1",
      "args0": [
        {
          "type": "field_number",
          "name": "SECONDS",
          "value": 1,
          "min": 0,
          "precision": 0.1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
      "tooltip": "",
      "helpUrl": ""
    }
  

*/
]);  

// Register provided blocks.
defineBlocks(blocks);
