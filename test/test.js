/**
 * grunt-iife - a Grunt plugin for wrapping JavaScript code in IIFEs.
 * https://github.com/virtyaluk/grunt-iife
 *
 * Copyright (c) 2015 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

var iife = require('../tasks/lib/iife').wrap,
    expect = require('chai').expect;

describe('IIFE', function() {
    describe('#wrap()', function() {
        before(function() {
            this.code = 'var foo = \'bar\';\n\n';
        });

        it('should be a function', function() {
            expect(iife).to.be.a('function');
        });

        it('should return a string', function() {
            expect(iife('')).to.be.a('string');
        });

        it('should apply the correct defaults', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n}());';

            expect(iife(this.code)).to.be.equal(expectedResult);
        });

        it('should add a \'use strict\' directive when \'useStrict\' is true', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n}());';

            expect(iife(this.code, { useStrict: true })).to.be.equal(expectedResult);
        });

        it('should not add a \'use strict\' directive when \'useStrict\' is false', function() {
            var expectedResult = ';(function() {\nvar foo = \'bar\';\n}());';

            expect(iife(this.code, { useStrict: false })).to.be.equal(expectedResult);
        });

        it('should trim the code when \'trimCode\' is true', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n}());';

            expect(iife(this.code, { trimCode: true })).to.be.equal(expectedResult);
        });

        it('should not trim the code when \'trimCode\' is false', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n\n\n}());';

            expect(iife(this.code, { trimCode: false })).to.be.equal(expectedResult);
        });

        it('should prepend a semicolon when \'prependSemicolon\' is true', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n}());';

            expect(iife(this.code, { prependSemicolon: true })).to.be.equal(expectedResult);
        });

        it('should not prepend a semicolon when \'prependSemicolon\' is false', function() {
            var expectedResult = '(function() {\n\'use strict\';\nvar foo = \'bar\';\n}());';

            expect(iife(this.code, { prependSemicolon: false })).to.be.equal(expectedResult);
        });

        it('should add \'.bind(this)\' when \'bindThis\' is true', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n}.bind(this)());';

            expect(iife(this.code, { bindThis: true })).to.be.equal(expectedResult);
        });

        it('should not add \'.bind(this)\' when \'bindThis\' is false', function() {
            var expectedResult = ';(function() {\n\'use strict\';\nvar foo = \'bar\';\n}());';

            expect(iife(this.code, { bindThis: false })).to.be.equal(expectedResult);
        });

        it('should add the arguments and parameters specified in \'args\' and \'params\'', function() {
            var expectedResult = ';(function($, undefined) {\n\'use strict\';\nvar foo = \'bar\';\n}(jQuery));';

            expect(iife(this.code, { args: ['jQuery'], params: ['$', 'undefined'] })).to.be.equal(expectedResult);
        });

        it('should use \'params\' values for \'args\' if \'args\' is missing', function() {
            var expectedResult = ';(function(window) {\n\'use strict\';\nvar foo = \'bar\';\n}(window));';

            expect(iife(this.code, { params: ['window'] })).to.be.equal(expectedResult);
        });

        it('should use \'args\' values for \'params\' if \'params\' is missing', function() {
            var expectedResult = ';(function(window) {\n\'use strict\';\nvar foo = \'bar\';\n}(window));';

            expect(iife(this.code, { args: ['window'] })).to.be.equal(expectedResult);
        });
    });
});