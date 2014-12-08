module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['node-webkit/app/assets/js/src/*.js'],
        dest: 'node-webkit/app/assets/js/concat/platypus.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'node-webkit/app/assets/js/build/platypus.min.js': ['node-webkit/app/assets/js/concat/platypus.js']
        }
      }
    },
    watch: {
      files: ['node-webkit/app/assets/js/src/*.js'],
      tasks: ['concat','uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);

};
