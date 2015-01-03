define(function(require, exports, module) {
    var backbone = require('backbone');
    var marionette = require('marionette');
    var app = require('app/app');
    var $ = require('jquery');

    var AppController = marionette.Controller.extend({
        initialize: function() {
            this.app = app;
        },
        // Needed for AppRouter to initialize index route.
        index: function() {

        }
    });
    exports.AppController = AppController;
});
