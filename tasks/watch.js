'use strict';

module.exports = function watch(grunt) {

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Options
  return {
    compass: {
      files: ['./public/_sass/**/*.{scss,sass}'],
      tasks: ['compass']
    }
  };

};
