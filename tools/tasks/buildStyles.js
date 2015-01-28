/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        sass: {
            buildStyles: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>/assets/scss',
                    src: ['*.scss'],
                    dest: '<%= env.DIR_DEST %>/assets/styles',
                    ext: '.css'
                }],
                options: {
                    outputStyle: (grunt.option('prod') ? 'compressed' : 'nested')
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'Android >= 4', 'iOS >= 7'],
                map: false // modifies source map, or creates new
            },
            styles: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_DEST %>/assets/styles',
                    src: ['*.css'],
                    dest: '<%= env.DIR_DEST %>/assets/styles',
                    ext: '.css'
                }],
            }
        }

    });

    grunt.registerTask('buildStyles', [
        'sass:buildStyles',
        'autoprefixer'
    ]);
};
