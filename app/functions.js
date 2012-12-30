if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(in_str) {
            return str + ", " + in_str;
        };
    },

    makeClosures : function(arr, fn) {
        var argArray = Array.prototype.slice.call(arr),
            funArray = [],
            i, e;

        for (i in argArray) {
            e = argArray[i];

            funArray.push((function(p) {
                return function(){
                    return fn(p);
                }
            }(e))); //*/
        };

        return funArray;
    },

    partial : function(fn, str1, str2) {
        return fn.bind(undefined, str1, str2);
    },

    useArguments : function() {
        var argArray = Array.prototype.slice.call(arguments);
        return argArray.reduce(function(a, b) { return a + b; });
    },

    callIt : function(fn) {
        var argArray = Array.prototype.slice.call(arguments, 1);
        return fn.apply(undefined, argArray);
    },

    curryIt : function(fn) {
        var argArray = Array.prototype.slice.call(arguments, 1);
        return function () {
            var insideArgArray = argArray.concat(Array.prototype.slice.call(arguments));
            return fn.apply(undefined, insideArgArray);
        };
    }
  };
});
