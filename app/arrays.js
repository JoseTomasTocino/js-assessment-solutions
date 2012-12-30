if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function (a, b) { return a + b; });
    },

    remove : function(arr, item) {
        while (arr.indexOf(item) != -1)
            arr.splice(arr.indexOf(item), 1);

        return arr;
    },

    // There must be an error here, these two cannot have the same code
    removeWithoutCopy : function(arr, item) {
        while (arr.indexOf(item) != -1)
            arr.splice(arr.indexOf(item), 1);

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function(e){ return e==item; }).length;
    },

    duplicates : function(arr) {
        arr.sort();
        var dups = [];
        for (var i = 0; i < arr.length; ++i) {
            if (arr.indexOf(arr[i], i + 1) != -1 && dups.indexOf(arr[i]) == -1) {
                dups.push(arr[i]);
            }
        }
        return dups;
    },

    square : function(arr) {
        return arr.map(function(e) { return e*e; });
    },

    findAllOccurrences : function(arr, target) {
        var ocurrences = [];
        arr.forEach(function(v, i, a) { if (v == target) { ocurrences.push(i); }});
        return ocurrences;
    }
  };
});
