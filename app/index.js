var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  paths: function () {
    this.fs.copy(this.sourceRoot(), this.destinationRoot());
  },

  install: {

    npmInstallGulp: function() {
      this.npmInstall(['gulp'], { 'saveDev': true });
    },

    npmInstallGulpSass: function() {
      this.npmInstall(['gulp-sass'], {'saveDev': true });
    }
  },

  end: function() {
    this.log('\n\nEighty9 ready to go');
    this.log('Type `gulp` to compile JS and CSS\n');
    this.log('Enjoy 👍🏻  \n\n');
  }

});

