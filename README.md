# grunt-iife

[![Build Status](https://travis-ci.org/virtyaluk/grunt-iife.svg?branch=master)](https://travis-ci.org/virtyaluk/grunt-iife) [![Code Climate](https://codeclimate.com/github/virtyaluk/grunt-iife/badges/gpa.svg)](https://codeclimate.com/github/virtyaluk/grunt-iife) [![Dependency Status](https://gemnasium.com/virtyaluk/grunt-iife.svg)](https://gemnasium.com/virtyaluk/grunt-iife) [![npm version](https://badge.fury.io/js/grunt-iife.svg)](https://badge.fury.io/js/grunt-iife)


> A Grunt plugin for wrapping JavaScript code within immediately invoked function expressions (IIFEs).

Wraps JavaScript code within an *immediately invoked function expression*.


## :cd: Getting Started

This plugin requires Grunt `>=0.4.0`

If you haven't used [:link:Grunt](http://gruntjs.com/) before, be sure to check out the [:link:Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [:link:Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```sh
$ npm install --save-dev grunt-iife
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-iife');
```

## :zap: Usage

This configuration will wrap JS files using the default options.

```js
// Project configuration.
grunt.initConfig({
    iife: {
        myTarget: {
            files: {
                'dest/output.js': 'src/input.js'
            }
        }
    }
});
```

So, if input file looks like this:
```js
var foo = 'bar';
console.log(foo);
```

Then output file will be like this:
```js
;(function() {
'use strict';
var foo = 'bar';
console.log(foo);
}());
```

## :wrench: Options

You can pass additional options to change output file:

- [`useStrict`](#useStrict)
- [`prependSemicolon`](#prependSemicolon)
- [`bindThis`](#bindThis)
- [`trimCode`](#trimCode)
- [`args`](#args)
- [`params`](#params)
- [`indent`](#indent)

### `useStrict`

Type: `Boolean`
Default: `true`

A boolean indicating whether to prepend a `'use strict';` directive to the function body.

### `prependSemicolon`

Type: `Boolean`
Default: `true`

A boolean indicating whether to prepend a semicolon as statement terminator before the IIFE.

### `bindThis`

Type: `Boolean`
Default: `false`

A boolean indicating whether to append `.bind(this)` to the IIFE. Setting this value to `true` makes the surrounding global object available to the function, which is usually not the case in strict mode.

### `trimCode`

Type: `Boolean`
Default: `true`

A boolean indicating whether to remove leading & trailing whitespace from the code.

### `args`

Type: `String[]`
Default: `null`

An array of argument names to be passed into the IIFE. If the [`params`](#params) option is not specified, the parameters of the function will have the same names as the arguments passed.

### `params`

Type: `String[]`
Default: `null`

An array of parameter names to be accepted by the IIFE. If the [`args`](#args) option is not specified, the same identifiers will be passed as arguments of the function call.

### `indent`

Type: `String`
Default: `null`

A string value that is used to indent.

Here's an example specifying all available options:

```js
grunt.initConfig({
    iife: {
        myTarget: {
            options: {
                useStrict: true,
                prependSemicolon: false,
                bindThis: true,
                trimCode: true,
                indent
                args: ['window', '$'],
                params: ['window', 'jQuery']
            },
            files: {
                'dest/output.js': 'src/input.js'
            }
        }
    }
});
```

Input file:

```js
var foo = 'bar';
console.log(foo);
```

Output file:

```js
(function(window, $) {
    'use strict';
    var foo = 'bar';
    console.log(foo);
}(window, jQuery));
```

## :scroll: Changelog

### 0.2.0 (April 30, 2016)

 - Fixed [issue](https://github.com/virtyaluk/grunt-iife/issues/1) resulting in error while performing *iife* task.

### 0.3.0 (Mai 1, 2016)

 - Added new feature - *indentation of code*. [@brunowego](https://github.com/brunowego) in [#3](https://github.com/virtyaluk/grunt-iife/pull/3).
 - Codebase improvements.

## :green_book: License

[Licensed under the MIT license.](https://github.com/virtyaluk/grunt-iife/blob/master/LICENSE)

Copyright (c) 2016 Bohdan Shtepan and all the [contributors](https://github.com/virtyaluk/grunt-iife/graphs/contributors).

---

> [modern-dev.com](http://modern-dev.com) &nbsp;&middot;&nbsp;
> GitHub [@virtyaluk](https://github.com/virtyaluk) &nbsp;&middot;&nbsp;
> Twitter [@virtyaluk](https://twitter.com/virtyaluk)
