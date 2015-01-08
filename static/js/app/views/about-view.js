define(function(require, exports, module) {

    var marionette = require('marionette');
    var template = require('hbs!../templates/about-view')

    var AboutView = marionette.ItemView.extend({
        template: template,

        ui: {
        },

        events: {
        },

        initialize: function(options) {
        }

    });

    exports.AboutView = AboutView;
})
