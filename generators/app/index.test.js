'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('ptz-domain:app', function () {
    describe('default', function () {
        before(function (done) {
            helpers.run(path.join(__dirname, '../app'))
                .withArguments(['MyCoolApp'])
                .withOptions({ skipInstall: true })
                .on('end', done);
        });

        it('creates files', function () {
            assert.file([
                'LICENSE',
                'package.json',
                'README.md',
                'tsconfig.json',
                '.gitignore',
                '.travis.yml',
                
                'src/index.ts',
                'src/index.test.ts',
                'src/errors.ts'
            ]);
        });

        // it('adds default ngapp', function () {
        //     assert.fileContent('src/app/app.js', /angular.module\('app'/);
        // });
    });

    // describe('ngapp prompt', function () {
    //     before(function (done) {
    //         helpers.run(path.join(__dirname, '../app'))
    //             .withArguments(['MyCoolApp'])
    //             .withOptions({ skipInstall: true })
    //             .withPrompts({ ngappname: 'fooBarApp' })
    //             .on('end', done);
    //     });

    //     it('injects custom ngappname', function () {
    //         assert.fileContent('src/app/app.js', /angular.module\('fooBarApp'/);
    //         assert.fileContent('src/index.html', /<html ng-app="fooBarApp">/);
    //         assert.fileContent('src/app/home/home.controller.js', /angular.module\('fooBarApp'\).controller\('HomeCtrl', HomeCtrl\);/);

    //     });
    // });
});