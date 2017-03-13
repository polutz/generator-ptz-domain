'use strict';

var Generator = require('yeoman-generator'),
    _ = require('lodash');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.argument('entityName', { type: String, required: true });
    }

    //writing - Where you write the generator specific files (routes, controllers, etc)
    writing() {
        var vars = {
            entity: this.options.entityName,
            entityVar: this.options.entityName.toLowerCase()
        };

        this.fs.copyTpl(
            this.templatePath('src/_Entity.ts'),
            this.destinationPath('src/' +  vars.entity + '.ts'),
            vars);

        this.fs.copyTpl(
            this.templatePath('src/_Entity.test.ts'),
            this.destinationPath('src/' + vars.entity + '.test.ts'),
            vars);

        this.fs.copyTpl(
            this.templatePath('src/typings/_IEntity.d.ts'),
            this.destinationPath('src/typings/I' + vars.entity + '.d.ts'),
            vars);
    }
};

