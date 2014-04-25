var gulp   = require('gulp');
var qrep = require('../index');

gulp.task('default', function() {
  gulp.src('index.html')
    .pipe(qrep('word', {encoding: 'utf8'}));
});

