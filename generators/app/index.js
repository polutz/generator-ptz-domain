'use strict';

var Generator = require('yeoman-generator'),
    _ = require('lodash'),
    defaultPrompting = require('generator-ptz/generators/app/defaultPrompting');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    //initializing - Your initialization methods (checking current project state, getting configs, etc)
    initializing() {
        this.log('initializing');
    }

    //prompting - Where you prompt users for options (where you'd call this.prompt())
    prompting() {
        return defaultPrompting(this);
    }

    //    configuring - Saving configurations and configure the project (creating.editorconfig files and other metadata files)
    configuring() {
        this.log('configuring');
    }

    //default - If the method name doesn't match a priority, it will be pushed to this group.
    default() {
        this.log('default');
        this.composeWith(require.resolve('generator-ptz/generators/app'), {
            isComposing: true,
            skipInstall: this.options.skipInstall,
            ptz: this.options.ptz
        });
    }

    //writing - Where you write the generator specific files (routes, controllers, etc)
    writing() {
        console.log('ptz-domain options =>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.options.ptz);

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            {
                codecovToken: this.options.codecovToken,
                appname: this.options.appname,
                githubAuthorProject: this.options.githubAuthorProject
            });

        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'),
            {
                appname: this.options.appname,
                githubAuthorProject: this.options.githubAuthorProject
            });

        this.fs.copy(this.templatePath('typings/_index.d.ts'), this.destinationPath('typings/index.d.ts'));

        this.fs.copy(this.templatePath('src/_index.ts'), this.destinationPath('src/index.ts'));
        this.fs.copy(this.templatePath('src/_errors.ts'), this.destinationPath('src/errors.ts'));

        this.fs.copyTpl(
            this.templatePath('src/typings/_index.d.ts'),
            this.destinationPath('src/typings/index.d.ts'),
            {
                appname: this.options.appname,
                appnameStartCase: this.options.appnameStartCase
            });
    }

    //conflicts - Where conflicts are handled (used internally)
    conflicts() {
        this.log('conflicts');
    }

    //install - Where installation are run (npm, bower)
    install() {
        if (!this.options.runNpmInstall)
            return;

        this.npmInstall(['ptz-core-domain'], { 'save': true });
    }

    //end - Called last, cleanup, say good bye, etc
    end() {
        this.log('end');
    }
};