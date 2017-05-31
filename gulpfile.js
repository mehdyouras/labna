var gulp = require("gulp"),
    image = require("gulp-imagemin"),
    pug = require("gulp-pug"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso"),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    imageResize = require("gulp-image-resize"),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps');


// --- Task for images
// gulp.task("images", function() {
//     gulp.src("src/img/**", !"src/img/*.db")
//         .pipe(image([
//             image.jpegtran({ progressive: true }),
//         ]))
//         .pipe(gulp.dest("assets/img"));
// });

gulp.task("resize", function() {
    gulp.src("src/img/gallery*/*.jpg")
        .pipe(imageResize({
            height: 255,
        }))
        .pipe(image([
            image.jpegtran({ progressive: true }),
        ]))
        .pipe(gulp.dest("assets/img"))
    gulp.src("src/img/gallery*/*.jpg")
        .pipe(imageResize({
            height: 510,
        }))
        .pipe(rename(function (path) {
            path.basename += "-510";
        }))
        .pipe(image([
            image.jpegtran({ progressive: true }),
        ]))
        .pipe(gulp.dest("assets/img"))
    gulp.src("src/img/gallery*/*.jpg")
        .pipe(rename(function (path) {
            path.basename += "-full";
        }))
        .pipe(image([
            image.jpegtran({ progressive: true }),
        ]))
        .pipe(gulp.dest("assets/img"))
});

gulp.task("image", function(){
    gulp.src("src/img/gallery*/*.jpg")
        .pipe(image([
            image.jpegtran({ progressive: true }),
        ]))
        .pipe(gulp.dest("assets/img"))
});

// --- Task for pug
gulp.task("html", function() {
    gulp.src("src/pug/**/*.pug")
        .pipe(pug())
        .pipe(gulp.dest("assets/"));
});

// -- Task for fonts
gulp.task("fonts", function() {
    gulp.src("src/fonts/**")
        .pipe(gulp.dest("assets/fonts"));
});

// -- Task for favicon
gulp.task("favicon", function() {
    gulp.src("src/img/favicon.ico")
        .pipe(gulp.dest("assets/"));
});

// --- Task for styles
gulp.task("css", function() {
    gulp.src("src/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest("assets/css"));
});
// --- Task for js
gulp.task("js", function() {
    gulp.src(["src/js/Labna.js", "src/js/Platform.js", "src/js/Rules.js", "src/js/**/*.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("script.js"))
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("assets/js"));
});
// --- Watch tasks
gulp.task("watch", function() {
    gulp.watch("src/img/**", ["images"]);
    gulp.watch("src/sass/**", ["css"]);
    gulp.watch("src/pug/**", ["html"]);
    gulp.watch("src/js/**", ["js"]);
});

// --- Aliases
gulp.task("default", ["css", "html", "js", "image", "fonts", "favicon"]);
gulp.task("work", ["default", "watch"]);