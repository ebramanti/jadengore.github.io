define(function(require, exports, module) {
    var backbone = require('backbone');
    var marionette = require('marionette');
    var app = require('app/app');
    var $ = require('jquery');

    var MainLayout = require('app/layouts/main-layout').MainLayout;

    var AppController = marionette.Controller.extend({
        initialize: function() {
            this.app = app;
            this.app.mainRegion.show(new MainLayout());
        },
        // Needed for AppRouter to initialize index route.
        index: function() {

        }
    });
    exports.AppController = AppController;
});
