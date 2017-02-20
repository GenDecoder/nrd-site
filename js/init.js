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

    /**
     * Simple Modal Implementation for a Web Site
     */
    var mask = $('#mask');

    var modal = $('#modal');
    var modalSendBtn = $('#modalSendBtn');
    var modalTrigger = $('#modalTrigger');
    var modalBackDrop = $('#modalBackDrop');
    var modalCancelBtn = $('#modalCancelBtn');
    var modalEmailField = $('#modalEmailField');
    var modalMessageField = $('#modalMessageField');
    var toggleModal =  function() {        
        modal.toggle();
        modalBackDrop.toggle();       
        setModalBox();
        clearModalFields();
    };
    var setModalBox = function() {
        modal.css({
            left: $(window).width()/2 - modal.width()/2,
            top: $(window).height()/2 - modal.height()/2
        });
    };
    var clearModalFields = function() {
        modalEmailField.val('');
        modalMessageField.val('');
    };
    var isFormValid = function() {

    };
    modalTrigger.on('click', toggleModal);
    modalBackDrop.on('click', toggleModal);
    modalCancelBtn.on('click', toggleModal);

    modalSendBtn.on('click', function() {
        var isValid = modal[0].checkValidity();
        if (isValid) {
            mask.show();
            modal.append(mask);
            setTimeout(function() {
                mask.hide();
                toggleModal();
            }, 2000);        
        } else {
            
        }
    });

    modal.hide();    
    modalBackDrop.hide();

    /**
     * Mask Management
     */
});