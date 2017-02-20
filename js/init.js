$(function() {
    var menuOn = false;
    var sideMenu = $('#sideMenu');
    var toggleMenu = $('#toggleMenu');
    var mainContent = $('#mainContent');
    var sideMenuTop = $('#sideMenuTop');
    var isMobile = $(window).width() <= 900;
    var onToggleMenu = function() {
        menuOn ? sideMenu.show() : sideMenu.hide();
        menuOn ? sideMenuTop.show() : sideMenuTop.hide();
    };
    var onMoveMain = function() {
         mainContent.css('margin-left', (menuOn && !isMobile) ? sideMenu.width() + 'px': 0);
    };
    toggleMenu.on('click', function() {
        menuOn = !menuOn;
        onMoveMain();
        onToggleMenu();
    });
     $(window).resize(function() {
         isMobile = $(this).width() <= 900;
         onMoveMain();
     });
    $('body').menu({
        fixedHeaderHeight: 50,
        selectedCls: 'selected',
        pairs: {
            '#homeMenu': '#homeContent',
            '#ourTeamMenu': '#ourTeamContent',
            '#sponsorsMenu': '#sponsorsContent'
        },       
    });
    onMoveMain();
    onToggleMenu();
});