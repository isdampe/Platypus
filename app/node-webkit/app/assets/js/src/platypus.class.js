/*
 * @package platypus
 * @version 0.1.0
 *
 * Welcome to Platypus.class.js
 * This is the home of Platypus's main control object.
*/

(function(window) {

  var nw = require("nw.gui");

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

  

  //Create global patypus reference.
  window.platypus = this;

})(window);
