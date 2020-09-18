define(function() {
    var m = require('moduleB');
    setTimeout(() => console.log(m), 1000);
});