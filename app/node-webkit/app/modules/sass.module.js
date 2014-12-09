/*
 * @package platypus-sass
 * @version 0.1.0
 *
*/

(function(window, platypus) {

  this.config = {
    name: "SASS",
    description: "A SASS module for Platypus."
  }

  this.construct = function() {
    console.log("Constructor called for SASS");
  };

  window.sass = this;

  this.construct();

})(window, platypus);
