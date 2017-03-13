var Generator = require('yeoman-generator'),
    _ = require('lodash');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    //initializing - Your initialization methods (checking current project state, getting configs, etc)
    initializing() {
        this.log('initializing');
    }

    //prompting - Where you prompt users for options (where you'd call this.prompt())
    prompting() {
        this.log('prompting');

        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname, // Default to current folder name
            store: true
        },
        {
            type: 'input',
            name: 'githubAuthor',
            message: 'git hub Author',
            default: 'polutz',
            store: true
        },
        {
            type: 'input',
            name: 'codecovToken',
            message: 'get codecov token at https://codecov.io/'
        },
        {
            type: 'confirm',
            name: 'runNpmInstall',
            message: 'Run npm install?',
            default: true,
            store: true
        }]).then((answers) => {
            this.appname = _.kebabCase(answers.name.replace(/\s+/g, ''));
            this.appnameStartCase = _.startCase(this.appname);
            this.codecovToken = answers.codecovToken;
            this.githubAuthorProject = answers.githubAuthor + '/' + answers.name;
            this.runNpmInstall = answers.runNpmInstall;
        });
    }

    //    configuring - Saving configurations and configure the project (creating.editorconfig files and other metadata files)
    configuring() {
        this.log('configuring');
    }

    //default - If the method name doesn't match a priority, it will be pushed to this group.
    default() {
        this.log('default');
    }

    //writing - Where you write the generator specific files (routes, controllers, etc)
    writing() {
        this.fs.copy(this.templatePath('_gulpfile.js'), this.destinationPath('gulpfile.js'));
        this.fs.copy(this.templatePath('_LICENSE'), this.destinationPath('LICENSE'));
        this.fs.copy(this.templatePath('_tsconfig.json'), this.destinationPath('tsconfig.json'));
        this.fs.copy(this.templatePath('_typings.json'), this.destinationPath('typings.json'));

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            {
                codecovToken: this.codecovToken,
                appname: this.appname,
                githubAuthorProject: this.githubAuthorProject
            });

        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'),
            {
                appname: this.appname,
                githubAuthorProject: this.githubAuthorProject
            });

        this.fs.copy(this.templatePath('babelrc'), this.destinationPath('.babelrc'));
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        this.fs.copy(this.templatePath('travis.yml'), this.destinationPath('.travis.yml'));

        this.fs.copy(this.templatePath('typings/_index.d.ts'), this.destinationPath('src/typings/index.d.ts'));

        this.fs.copy(this.templatePath('src/_index.ts'), this.destinationPath('src/index.ts'));
        this.fs.copy(this.templatePath('src/_errors.ts'), this.destinationPath('src/errors.ts'));

        this.fs.copyTpl(
            this.templatePath('src/typings/_index.d.ts'),
            this.destinationPath('src/typings/index.d.ts'),
            {
                appname: this.appname,
                appnameStartCase: this.appnameStartCase
            });
    }

    //conflicts - Where conflicts are handled (used internally)
    conflicts() {
        this.log('conflicts');
    }

    //install - Where installation are run (npm, bower)
    install() {
        if (!this.runNpmInstall)
            return;

        this.npmInstall();
    }

    //end - Called last, cleanup, say good bye, etc
    end() {
        this.log('end');
    }
};

