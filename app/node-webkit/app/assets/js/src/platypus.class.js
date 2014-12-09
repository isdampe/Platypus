/*
 * @package platypus
 * @version 0.1.0
 *
 * Welcome to Platypus.class.js
 * This is the home of Platypus's main control object.
*/

(function(window, config) {

  //Global config for platypus.
  this.config = config;

  //Global modules
  this.modules = [];

  var nw = require("nw.gui");
  var fs = require("fs");

  /**
   * Shows or hides the main window.
   * @param {boolean} state - Show window = true, Hide window = false
   */
  this.setWindowState = function(state){
    if ( state === true ) {
      nw.Window.get().show();
    } else {
      nw.Window.get().hide();
    }
  };

  /**
   * Loads all of the modules found in modules/ directory.
   */
  this.loadModules = function() {

    //First up, generate a list of files in the directory.
    var tmpModules = fs.readdirSync( this.config.module_dir );
    for ( i=0; i<tmpModules.length; i++ ) {
      
      var module = tmpModules[i];
      module = module.split(".");
      if ( module.length > 1 ) {
        this.injectModule( "modules/" + tmpModules[i] );
      }

    }

  }

  /**
   * Injects a module into Platypus.
   * @param {string} file - Direct path to module file.
   */
  this.injectModule = function(file) {

    //Directly inject a <script> tag into the HTML view.
    //Once it's done, call the construct function.
    var href = file;

    //Create script element.
    var script = document.createElement('script');
    script.src = file;

    //Inject the script element.
    document.getElementById("platypus-modules").appendChild(script);

  }

  /**
   * Loads a module into Platypus memory.
   * @param {json} moduleObject - The module object for the module
   */
  this.loadModule = function(moduleObject) {

    var moduleId = this.modules.length;

    //Set the object into the buffer.
    this.modules[moduleId] = {
      object: moduleObject,
      config: {}
    }

    //We should now inject stylesheets that are associated with this modules.

    console.log("Added new module to buffer, " + moduleObject.name );

  }

  //Create global patypus reference.
  window.platypus = this;

})(window, {
  module_dir: "app/modules"
});
