define([
    'jquery',
    "matchMedia"
], function ($) {
    let acc = $("#accordion");

    acc.accordion({
        "openedState": "active",
        "multipleCollapsible": true
    });

    mediaCheck({
        media: '(max-width: 767px)',
        entry: function() {
            acc.accordion({'collapsible' : true});
            acc.accordion('deactivate');
        },
        exit: function() {
            acc.accordion("destroy");
        }
    });
});
