// module.exports = function(grunt) {
//   grunt.initConfig({
//     pkg: grunt.file.readJSON("package.json"),
//     copy: {
//       jquery: {
//         expand: true,
//         cwd: "node_modules/jquery/dist/",
//         src: ["jquery.min.js"],
//         dest: "server/public/vendors/"
//       },
//       bootstrap: {
//         expand: true,
//         cwd: "node_modules/bootstrap/dist",
//         src:["*"],
//         dest: "server/public/vendors/"
//       }
//     },
//   });


grunt.loadNpmTasks("grunt-contrib-copy");

grunt.registerTask("default", ["copy"]);

};
