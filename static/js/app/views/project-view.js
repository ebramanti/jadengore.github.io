define(function(require, exports, module) {

    var marionette = require('marionette');
    var template = require('hbs!../templates/project-view')

    var ProjectView = marionette.ItemView.extend({
        template: template,

        ui: {
        },

        events: {
        },

        initialize: function(options) {
        }

    });

    exports.ProjectView = ProjectView;
})
