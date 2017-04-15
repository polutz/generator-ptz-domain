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
    }

    //default - If the method name doesn't match a priority, it will be pushed to this group.
    default() {
        this.options.ptz.dontCreateIndexTs = true;

        this.composeWith(require.resolve('generator-ptz/generators/app'), {
            isComposing: true,
            skipInstall: this.options.skipInstall,
            ptz: this.options.ptz
        });
    }

    //writing - Where you write the generator specific files (routes, controllers, etc)
    writing() {
        const currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {});

        const pkg = _.merge({
            dependencies: {
                "ptz-core-domain": "^1.3.3"
            }
        }, currentPkg);

        // Let's extend package.json so we're not overwriting user previous fields
        this.fs.writeJSON(this.destinationPath('package.json'), pkg);

        this.fs.copy(this.templatePath('src/_index.ts'), this.destinationPath('src/index.ts'));

        this.fs.copyTpl(
            this.templatePath('src/_index.test.ts'),
            this.destinationPath('src/index.test.ts'),
            this.options.ptz);

        this.fs.copy(this.templatePath('src/_errors.ts'), this.destinationPath('src/errors.ts'));
    }

    //conflicts - Where conflicts are handled (used internally)
    conflicts() {
    }

    //install - Where installation are run (npm, bower)
    install() {
    }

    //end - Called last, cleanup, say good bye, etc
    end() {
    }
};