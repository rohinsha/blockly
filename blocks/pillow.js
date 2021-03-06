/**
 * @license
 * Visual Blocks Editor - Python Pillow library extension
 *
 * Copyright 2015 Grok Learning
 * https://groklearning.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Python's pillow library.
 */
'use strict';

goog.provide('Blockly.Blocks.pillow');

goog.require('Blockly.Blocks');


var BODY_COLOR = '#00BFBA';
var TRIM_COLOR = '#00858F';

var LOOP_BODY_COLOR = '#FF7700';
var LOOP_TRIM_COLOR = '#C05900';

var NUMBER_BODY_COLOR = '#0080E4';
var NUMBER_TRIM_COLOR = '#003660';


Blockly.Blocks['pillow_open'] = {
  /**
   * Block for Image.open('filename')
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_OPEN_IMAGE,
                        ['FILENAME', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Image');
    this.setTooltip(Blockly.Msg.PILLOW_OPEN_IMAGE_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['pillow_image_size'] = {
  /**
   * Block for image.width and image.height
   * @this Blockly.Block
   */
  init: function() {
    var DIMENSIONS =
        [[Blockly.Msg.PILLOW_IMAGE_WIDTH, 'WIDTH'],
         [Blockly.Msg.PILLOW_IMAGE_HEIGHT, 'HEIGHT']];
    this.setColours(NUMBER_BODY_COLOR, NUMBER_TRIM_COLOR);

    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIMENSIONS), 'DIMENSION');
    this.appendValueInput('IMAGE')
        .appendField(Blockly.Msg.PILLOW_IMAGE_SIZE_TAIL);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PILLOW_IMAGE_SIZE_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['pillow_channel_split_rgb'] = {
  /**
   * Block for splitting out single channels from an image.
   * @this Blockly.Block
   */
  init: function() {
    var CHANNELS =
        [[Blockly.Msg.PILLOW_CHANNEL_RED, 'RED'],
         [Blockly.Msg.PILLOW_CHANNEL_GREEN, 'GREEN'],
         [Blockly.Msg.PILLOW_CHANNEL_BLUE, 'BLUE']];
    this.setColours(BODY_COLOR, TRIM_COLOR);

    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(CHANNELS), 'CHANNEL');
    this.appendValueInput('IMAGE')
        .appendField(Blockly.Msg.PILLOW_CHANNEL_SPLIT_TAIL);
    this.setOutput(true, 'Image');
    this.setTooltip(Blockly.Msg.PILLOW_CHANNEL_SPLIT_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['pillow_set_pixel_gray'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_SET_PIXEL_GRAY_TEXT,
                        ['PIXEL', 'Pixel', Blockly.ALIGN_RIGHT],
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_SET_PIXEL_GRAY_TOOLTIP);
  }
};


Blockly.Blocks['pillow_get_pixel_gray'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(NUMBER_BODY_COLOR, NUMBER_TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_GET_PIXEL_GRAY_TEXT,
                        ['PIXEL', 'Pixel', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PILLOW_GET_PIXEL_GRAY_TOOLTIP);
  }
};


Blockly.Blocks['pillow_set_pixel_rgb'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    var CHANNELS =
        [[Blockly.Msg.PILLOW_VALUE_RED, 'RED'],
         [Blockly.Msg.PILLOW_VALUE_GREEN, 'GREEN'],
         [Blockly.Msg.PILLOW_VALUE_BLUE, 'BLUE']];
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_SET_PIXEL_RGB_TEXT,
                        ['PIXEL', 'Pixel', Blockly.ALIGN_RIGHT],
                        ['CHANNEL', new Blockly.FieldDropdown(CHANNELS), Blockly.ALIGN_RIGHT],
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_SET_PIXEL_RGB_TOOLTIP);
  }
};


Blockly.Blocks['pillow_get_pixel_rgba'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    var CHANNELS =
        [[Blockly.Msg.PILLOW_VALUE_RED, 'RED'],
         [Blockly.Msg.PILLOW_VALUE_GREEN, 'GREEN'],
         [Blockly.Msg.PILLOW_VALUE_BLUE, 'BLUE'],
         [Blockly.Msg.PILLOW_VALUE_ALPHA, 'ALPHA']];
    this.setColours(NUMBER_BODY_COLOR, NUMBER_TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_GET_PIXEL_RGB_TEXT,
                        ['PIXEL', 'Pixel', Blockly.ALIGN_RIGHT],
                        ['CHANNEL', new Blockly.FieldDropdown(CHANNELS), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PILLOW_GET_PIXEL_RGB_TOOLTIP);
  }
};


Blockly.Blocks['pillow_get_pixel_rgb'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    var CHANNELS =
        [[Blockly.Msg.PILLOW_VALUE_RED, 'RED'],
         [Blockly.Msg.PILLOW_VALUE_GREEN, 'GREEN'],
         [Blockly.Msg.PILLOW_VALUE_BLUE, 'BLUE']];
    this.setColours(NUMBER_BODY_COLOR, NUMBER_TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_GET_PIXEL_RGB_TEXT,
                        ['PIXEL', 'Pixel', Blockly.ALIGN_RIGHT],
                        ['CHANNEL', new Blockly.FieldDropdown(CHANNELS), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PILLOW_GET_PIXEL_RGB_TOOLTIP);
  }
};


Blockly.Blocks['pillow_set_pixel_rgba'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    var CHANNELS =
        [[Blockly.Msg.PILLOW_VALUE_RED, 'RED'],
         [Blockly.Msg.PILLOW_VALUE_GREEN, 'GREEN'],
         [Blockly.Msg.PILLOW_VALUE_BLUE, 'BLUE'],
         [Blockly.Msg.PILLOW_VALUE_ALPHA, 'ALPHA']];
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_SET_PIXEL_RGB_TEXT,
                        ['PIXEL', 'Pixel', Blockly.ALIGN_RIGHT],
                        ['CHANNEL', new Blockly.FieldDropdown(CHANNELS), Blockly.ALIGN_RIGHT],
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_SET_PIXEL_GRAY_TOOLTIP);
  }
};


Blockly.Blocks['pillow_pixel_loop'] = {
  /**
   * Block for looping over all Pixel objects in an image.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(LOOP_BODY_COLOR, LOOP_TRIM_COLOR);

    // Row 1
    this.appendDummyInput()
      .appendField(Blockly.Msg.PILLOW_PIXEL_LOOP_START)
      .appendField(new Blockly.FieldVariable('pixel'), 'PIXELVAR');
    this.appendValueInput('IMAGE')
      .setCheck('Image')
      .appendField(Blockly.Msg.PILLOW_PIXEL_LOOP_END);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_PIXEL_LOOP_TOOLTIP);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('PIXELVAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('PIXELVAR'))) {
      this.setFieldValue(newName, 'PIXELVAR');
    }
  },
};


Blockly.Blocks['pillow_coordinate_loop'] = {
  /**
   * Block for looping over all (x, y) pixel coordinates in an image.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(LOOP_BODY_COLOR, LOOP_TRIM_COLOR);

    // Row 1
    this.appendDummyInput()
      .appendField(Blockly.Msg.PILLOW_COORDINATE_LOOP_START)
      .appendField(new Blockly.FieldVariable('x'), 'XVAR')
      .appendField(',')
      .appendField(new Blockly.FieldVariable('y'), 'YVAR');
    this.appendValueInput('IMAGE')
      .setCheck('Image')
      .appendField(Blockly.Msg.PILLOW_COORDINATE_LOOP_END);

    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_COORDINATE_LOOP_TOOLTIP);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('XVAR'), this.getFieldValue('YVAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('XVAR'))) {
      this.setFieldValue(newName, 'XVAR');
    }
    if (Blockly.Names.equals(oldName, this.getFieldValue('YVAR'))) {
      this.setFieldValue(newName, 'YVAR');
    }
  },
};


Blockly.Blocks['pillow_dimension_loop'] = {
  /**
   * Block for looping from 0 to a value, but with image-specific language.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(LOOP_BODY_COLOR, LOOP_TRIM_COLOR);

    this.appendDummyInput()
      .appendField(Blockly.Msg.PILLOW_DIMENSION_LOOP_START)
      .appendField(new Blockly.FieldVariable('i'), 'IVAR');
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.PILLOW_DIMENSION_LOOP_MIDDLE);

    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_DIMENSION_LOOP_TOOLTIP);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('IVAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('IVAR'))) {
      this.setFieldValue(newName, 'IVAR');
    }
  },
};


Blockly.Blocks['pillow_get_pixel'] = {
  /**
   * Block for image.getpixel((x, y));
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_GET_PIXEL_TEXT,
                        ['X', 'Number', Blockly.ALIGN_RIGHT],
                        ['Y', 'Number', Blockly.ALIGN_RIGHT],
                        ['IMAGE', 'Image', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Pixel');
    this.setTooltip(Blockly.Msg.PILLOW_GET_PIXEL_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['pillow_get_pixel_value'] = {
  /**
   * Block for image.getpixel((x, y));
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(NUMBER_BODY_COLOR, NUMBER_TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_GET_PIXEL_TEXT,
                        ['X', 'Number', Blockly.ALIGN_RIGHT],
                        ['Y', 'Number', Blockly.ALIGN_RIGHT],
                        ['IMAGE', 'Image', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PILLOW_GET_PIXEL_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['pillow_set_pixel_value'] = {
  /**
   * Block for image.putpixel((x, y), value);
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_SET_PIXEL_TEXT,
                        ['X', 'Number', Blockly.ALIGN_RIGHT],
                        ['Y', 'Number', Blockly.ALIGN_RIGHT],
                        ['IMAGE', 'Image', Blockly.ALIGN_RIGHT],
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PILLOW_SET_PIXEL_TOOLTIP);
  }
};


Blockly.Blocks['pillow_channel_merge_rgb'] = {
  /**
   * Block for Image.merge('RGB', (red, green, blue))
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_MERGE_RGB_TEXT,
                        ['RED', 'Image', Blockly.ALIGN_RIGHT],
                        ['GREEN', 'Image', Blockly.ALIGN_RIGHT],
                        ['BLUE', 'Image', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Image');
    this.setTooltip(Blockly.Msg.PILLOW_MERGE_RGB_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['pillow_save'] = {
  /**
   * Block for image.save(filename)
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.PILLOW_SAVE_TEXT,
                        ['IMAGE', 'Image', Blockly.ALIGN_RIGHT],
                        ['FILENAME', 'String', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.PILLOW_SAVE_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
