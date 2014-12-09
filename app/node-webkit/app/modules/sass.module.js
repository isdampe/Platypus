/*
 * @package platypus-sass
 * @description Provides Platypus with SASS support.
 * @version 0.1.0
 *
*/

(function(window) {

  this.moduleObject = {
    name: "SASS",
    URI: "sass",
    description: "A SASS module for Platypus.",
    logo: "sass.png",
    style: "sass.css",
    terminal: true,
    fields: {
      type: "compressed",
      parameters: "--watch",
      basedir: "scss",
      builddir: "css"
    },
    callbacks: {
      launch: this.launch,
      close: this.close
    }
  }

  this.construct = function() {

    //Register the module with Platypus.
    window.platypus.loadModule(this.moduleObject);

  };

  this.launch = function(project,config) {

    //This callback is called when launching.

  }

  this.close = function(project,config) {

    //This config is called when closing.

  }

  window.sass = this;

  this.construct();

})(window);
