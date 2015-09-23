module.exports = function(grunt) {

  grunt.initConfig({
      less: {
        dist: {
          files: {
            "css/style.css": "less/style.less"
          }
        }
      },
      watch: {
        css: {
          files: '**/*.less',
          tasks: ['less'],
          options: {
            livereload: true,
          },
        },
      },
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['less','watch']);

};