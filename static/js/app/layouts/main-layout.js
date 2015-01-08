define(function(require, exports, module) {
    var marionette = require('marionette');
    var template = require('hbs!../templates/layouts/main-layout');

    var MenuView = require('app/views/menu-view').MenuView;
    var AboutView = require('app/views/about-view').AboutView;
    var ProjectView = require('app/views/project-view').ProjectView;

    var MainLayout = marionette.LayoutView.extend({
        template: template,

        regions: {
            menu: '#menu',
            main: '#content'
        },

        ui: {
            layout: '#layout',
            menu: '#menu',
            menuLink: '#menuLink'
        },

        events: {
            'click #menuLink': 'mobileMenuClick',
            'click .nav-links': 'navClick',
            'click .name': 'nameClick'
        },

        initialize: function(options) {
            this.views = this.createViews();
            this.active = 'pure-menu-selected';
        },

        createViews: function() {
            var partitions = {};
            partitions['about'] = new AboutView();
            partitions['projects'] = new ProjectView();
            return partitions;
        },

        onRender: function() {
            this.menu.show(new MenuView());
            this.setMainView('about');
        },

        mobileMenuClick: function(event) {
            event.preventDefault();
            this.toggleClass(this.ui.layout);
            this.toggleClass(this.ui.menu);
            this.toggleClass(this.ui.menuLink);
        },

        navClick: function(event) {
            var $target = $(event.currentTarget);
            var id = $target.find('a').attr('id');
            if (id) this.setMainView(id);
            this.clearActive();
            $target.addClass(this.active);
        },

        setMainView: function(view) {
            var view = this.views[view] || null;
            if (view) this.showMainView(view);
        },

        showMainView: function(view) {
            if (view !== this.currentMainView) {
                this.main.show(view, {preventDestroy: true});
                this.currentMainView = view;
            }
        },

        clearActive: function() {
            $('.nav-links').removeClass(this.active);
        },

        setActive: function(target) {
            target.addClass(this.active);
        },

        toggleClass: function(element) {
            var active = 'active';
            var toggled = element.hasClass(active);
            if (toggled) {
                element.removeClass(active);
            } else {
                element.addClass(active);
            }
        }

    });
    exports.MainLayout = MainLayout;
})
