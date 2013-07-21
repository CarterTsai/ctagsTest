module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        watch: {
            ctags: {
                files: ['ctags'],
                tasks: ['shell:ctags'],
                options: {
                     nospawn: false,
                },
            }
        },
        shell: {
            ctags: {
                command: [
                        'cp ctags $HOME/.ctags',
                        'cp taglist.vim $HOME/.vim/bundle/taglist/plugin/taglist.vim',
                        'ctags -f - --format=2 --excmd=pattern --fields=nks '+
                              '--sort=no --language-force=css --css-types=cis test.css'
                ].join('&&')
            },
            release: {
                command: 'cp ctags $HOME/.ctags',
            },
            options:{
                stdout:true
            }
        },   
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('release', ['shell:release']);
};

