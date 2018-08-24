const gulp = require('gulp');
const { spawn } = require('child_process');
const sequence = require('run-sequence');

process.on('SIGINT', process.exit);

gulp.task('copy', () => {
    return gulp.src([
        'src/**/*',
        '!**/*.ts',
    ], { base: 'src' })
    .pipe(gulp.dest('./dist'))
    .on('error', console.log);
});

gulp.task('compile', (done) => {
    const tscProcess = spawn('node_modules/.bin/tsc', ['-p', '.'], { stdio: 'inherit' })
        .on('error', function(err) {
            console.log({err});
        })
        .on('close', function () {
            this.emit('end');
            done();
        });

    return tscProcess;
});

gulp.task('build', () => {
    return sequence('copy', 'compile');    
})

gulp.task('watch', () => {
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('dev', () => {
    return sequence('build', 'watch');
});

