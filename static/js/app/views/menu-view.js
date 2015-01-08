define(function(require, exports, module) {

    var marionette = require('marionette');
    var template = require('hbs!../templates/menu-view')

    var MenuView = marionette.ItemView.extend({
        template: template,
        className: 'pure-menu pure-menu-open',

        ui: {
        },

        events: {
        },

        initialize: function(options) {
        }

    });

    exports.MenuView = MenuView;
})
