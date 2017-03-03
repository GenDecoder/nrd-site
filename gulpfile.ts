import {Gulpclass, Task} from "gulpclass/Decorators";

let gulp = require("gulp");
let sass = require('gulp-sass');
let browserSync = require("browser-sync");

let errorFn = function(error) {
    this.emit('end');
    console.error(error + '\nError detected, but server not stopped');    
};

@Gulpclass()
export class Gulpfile {    
    @Task()
    compile_sass() {
        return gulp.src('scss/**/*.scss')
            .pipe(sass())
            .on("error", errorFn)
            .pipe(gulp.dest('./css/'))           
            .pipe(browserSync.stream());
    }
    @Task()
    default() {
        browserSync.init({
            open: false,
            server: './'
        });
        gulp.watch('scss/**/*.scss', ['compile_sass']);        
    }     
}