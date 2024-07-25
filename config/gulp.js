const browserSync = require("browser-sync");

var path = {
  // Declaring our distribution folder
  dist_dir: 'dist',
  // Declaring all files in our dist folder as our dist files
  dist_files: 'dist/**/*.*',

  views: {
    src: 'src/views/**/*.ejs',
    dist: 'dist/view'
  },
  styles: {
    src: 'src/styles/**/*.css',
    dist: 'dist/public/styles'
  }
};

modules.exports = {
  paths: paths,
  plugins: {
    browserSync: {
      proxy: "localhost:300",
      port: 5000,
      files: [paths.dist_files],
      browser: 'google chrome',
      notify: true
    },
    nodemone: {
      script: 'index.js',
      ignore: ['gulpfile.js', 'config/', 'node_modules/']
    }
  }
};