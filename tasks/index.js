/**
 * grunt-iife - a Grunt plugin for wrapping JavaScript code in IIFEs.
 * https://github.com/virtyaluk/grunt-iife
 *
 * Copyright (c) 2015 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

var iife = require('./lib/iife'),
    chalk = require('chalk');

module.exports = function(grunt) {
    grunt.registerMultiTask('iife', 'Performs wrapping JavaScript code within immediately invoked function expressions', function() {
        var createdFiles = 0;

        this.files.forEach(function(file) {
            var contents = file.src.filter(function(filePath) {
                    if (!grunt.file.exist(filePath)) {
                        grunt.log.warn('Source file ' + chalk.cyan(filePath) + ' not found.');
                        return false;
                    }

                    return true;
                }).map(function(filePath) {
                    return grunt.file.read(filePath);
                }).join('\n'),
                result = iife.wrap(contents, this.options());

            grunt.file.write(file.dest, result);
            grunt.verbose.writeln('File ' + chalk.cyan(file.dest) + ' created.');

            createdFiles++;
        });

        if (createdFiles > 0) {
            grunt.log.ok(createdFiles + ' ' + grunt.util.pluralize(this.files.length, 'file/files') + ' created.');
        } else {
            grunt.log.warn('No files created.');
        }
    });
};