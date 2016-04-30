/**
 * grunt-iife - a Grunt plugin for wrapping JavaScript code in IIFEs.
 * https://github.com/virtyaluk/grunt-iife
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-eslint');

    grunt.initConfig({
        eslint: {
            target: 'tasks/**/*.js'
        }
    });

    grunt.registerTask('default', ['eslint']);
};