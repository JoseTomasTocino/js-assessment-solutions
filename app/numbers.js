if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num >> bit - 1) & 1;
    },

    base10: function(str) {
        return parseInt(str,2);
    },

    convertToBinary: function(num) {
        var baseStr = num.toString(2);
        while (baseStr.length < 8) baseStr = "0" + baseStr;
        return baseStr;
    },

    multiply: function(a, b) {
        return +(a * b).toPrecision(10);
    }
  };
});

