/* eslint no-invalid-this: off */

'use strict';

module.exports = function(grunt) {
    const {exec} = require('child_process');

    grunt.registerTask(
        'setup:git-alias',
        'Set up our custom git aliases',
        function() {
            const done = this.async();

            exec('`pwd`/scripts/git-alias/setup_alias',
                function(error/* , stdout*/) {
                    grunt.log.writeln(error
                        ? 'Error! one or more aliases haven\'t'
                        + ' been imported to .git/config.'
                        : 'Git alias imported successfully!'
                    );
                    done(!error);
                });
        });

    grunt.registerTask(
        'setup:alias-autocomplete',
        'Enable params autocomplete for our git alias',
        function() {
            const done = this.async();
            const cmd = [
                /* eslint-disable-next-line max-len */
                '! grep -xq "source ~/.git-alias-autocomplete.sh" ~/.bash_profile',
                'echo "source ~/.git-alias-autocomplete.sh" >> ~/.bash_profile'
            ].join(' && ');

            exec(cmd, function(error) {
                grunt.log.writeln(error
                    ? 'Error setting up git-alias autocompletation.'
                    : 'Git alias autocompletation set up successfully!'
                );
                done(true);
            });
        });

    grunt.registerTask(
        'setup:scripts',
        'Change scripts permissions',
        function() {
            const done = this.async();
            const cmd = [
                'chmod 755 `pwd`/scripts/git-alias/setup_alias'
            ].join(' && ');

            exec(cmd, function(error/* , stdout*/) {
                grunt.log.writeln(error
                    ? 'Error changing scripts permissions.'
                    : 'Scripts permissions changed correctly.'
                );
                done(!error);
            });
        });

    grunt.registerTask('setup', [
        'setup:scripts',
        'setup:git-alias',
        'setup:alias-autocomplete'
    ]);
};
