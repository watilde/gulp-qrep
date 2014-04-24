Usage
```
var qrep = require('gulp-qrep');

gulp.task('qrep', function() {
  gulp.src('./tpl/*.html')
    .pipe(qrep('#id', { encoding:utf8 }))
    .pipe(gulp.dest('./dist/'));
});
```
