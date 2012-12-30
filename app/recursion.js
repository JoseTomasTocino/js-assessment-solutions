if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

        var ret = [], i;

        if (dirName == data.dir) {
            return this.listFiles(data);
        }

        for (i = 0; i < data.files.length; i++) {
            if (typeof data.files[i] == "object") {
                ret = ret.concat(this.listFiles(data.files[i], dirName))
            } else {
                if (dirName == undefined)
                    ret.push(data.files[i]);
            }
        }

        return ret;
    },

    permute: function(arr) {
        var equals = function (that, otherArray) {
            if (that.length != otherArray.length)
                return false;

            return that.every(function(v,i,a) { return v == otherArray[i];});
        };

        var pushUnique = function (that, e){
            if (!that.some(function(p) { return equals(p, e); }))
                that.push(e);
        };

        var i, j, e, rest;

        if (arr.length == 1) {
            return [arr];
        } else {

            var ret = [];
            for (i = 0; i < arr.length; i++) {
                e = arr[i];
                rest = arr.slice(0,i).concat(arr.slice(i+1));

                var subCases = this.permute(rest);

                for (j = 0; j < subCases.length; j++){
                    pushUnique(ret, subCases[j].concat(e));
                    pushUnique(ret, [e].concat(subCases[j]));
                }
            }

            return ret;
        }
    }
  };
});
