const gulp = require('gulp')
const connect = require('gulp-connect')
const path = require('path')

gulp.task('devserver', () => {
    connect.server({
        root: path.resolve(__dirname, 'src/pages'),
        fallback: path.resolve(__dirname, 'src/pages/index.html')
    })
})
