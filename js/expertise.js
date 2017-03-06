(function ( $ ) {    
    $.fn.expertise = function(cfg) {
        var pairs = {};
        var me = $(this);
        var selected = null;        
        var changePair = function(pair) {
            selected && selected.removeClass(cfg.selectedCls);
            pair.menuItem.addClass(cfg.selectedCls);
            selected = pair.menuItem;
        };
        var i;

        for(i = 0; i <= cfg.level; i+= 1) {
            
        }

        cfg = $.extend({
            pairs: [],
            selectedCls: '',
            fixedHeaderHeight: 0
        }, cfg);

        $.each(cfg.pairs, function(key, value) {
            var menuItem = me.find(key);
            var contentItem = me.find(value);
            pairs[key] = {
                menuItem: menuItem,
                height: contentItem.height(),
                fromTop: contentItem.offset().top
            };

            menuItem.on('click', function() {
                var pair = pairs['#' + this.id];
                $('body').animate({
                    scrollTop: pair.fromTop - cfg.fixedHeaderHeight
                }, 500, function() {
                    changePair(pair);
                });
            });
        });

        $(window).scroll(function () {
            var fromTop = window.scrollY;
            $.each(pairs, function(key, value) {
                if (fromTop >= value.fromTop - cfg.fixedHeaderHeight)
                    changePair(value);
            });            
        });
    };
}( jQuery ));