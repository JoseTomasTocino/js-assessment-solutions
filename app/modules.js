if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        return {
            sayIt : function () {
                return this.greeting + ", " + this.name;
            },

            greeting : str1,

            name : str2
        };
    }
  };
});

