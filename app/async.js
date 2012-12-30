if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var ret = new $.Deferred();
        setTimeout(function(){
            ret.resolve(value);
        }, 10);
        return ret;
    },

    manipulateRemoteData : function(url) {
        var ret = new $.Deferred();

        $.getJSON(url, function(data){
            var people = [];
            for (var person in data.people) {
                people.push(data.people[person].name);
            }
            people.sort();
            ret.resolve(people);
        });

        return ret;
    }
  };
});
