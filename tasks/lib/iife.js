/**
 * grunt-iife - a Grunt plugin for wrapping JavaScript code in IIFEs.
 * https://github.com/virtyaluk/grunt-iife
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

var merge = require('lodash.merge'),
    defaultOptions = {
        useStrict: true,
        prependSemicolon: true,
        trimCode: true,
        args: null,
        params: null
    };

module.exports = {
    wrap: function(code, options) {
        'use strict';

        var wrapOptions = merge({}, defaultOptions, options),
            args = wrapOptions.args || wrapOptions.params || [],
            params = wrapOptions.params || wrapOptions.args || [],
            result = [
                (wrapOptions.prependSemicolon ? ';' : '') + '(function(' + params.join(', ') + ') {',
                wrapOptions.useStrict ? '\'use strict\';' : '',
                wrapOptions.trimCode ? code.trim() : code,
                '}' + (wrapOptions.bindThis ? '.bind(this)' : '') + '(' + args.join(', ') + '));'
            ];

        return result
            .filter(function(line) { return line; })
            .join('\n');
    }
};