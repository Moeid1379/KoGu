const path = require('path');

module.exports = {
    entry: './assets/js/index.js', // ! My Main Js File.
    output: {
        filename: 'bundle.js', // ! Name Output Bundle File.
        path: path.resolve(__dirname, 'dist') // ! Path Output Bundle File.
    }
    /*
    * How To use Bundle File :
    * Add Tag <script class="lozad" data-src="Path Bundle File"></script> 
    */
    
};