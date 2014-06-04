'use strict';

module.exports = function compass(grunt) {

  // Load task
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Options
  return {
    dist: {
      options: {
        require: 'susy',
        config: './config.rb'
      }
    }
  };

};
