module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
        
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
        
      livereload: {
        options: {livereload: true},
        files: ['css/*.css'],
      },
    },
      
    connect: {
      server: {
        options:{
            livereload: true,
            hostname: '*',
            port: '80',
            open: 'http://localhost',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('connect-livereload');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','connect','watch']);
}