function homeSlider() {
    var scrollTop = $(window).scrollTop();
    var heightW = $(window).height();

    if (heightW > scrollTop) {
        var cof = scrollTop*100/heightW + 50;
        $('.parallax').css("background-position-y", cof + '%');
    }
}

$(document).ready(function () {

    $(window).on('scroll', function () {
        homeSlider();
    });

	$('.cookies__ok').click(function () {
        $('.cookies').hide('slow');
        document.cookie = "test=true";
	});
	
	$('.mMenu').click(function () {
		$('.mobile__container').removeClass('is-opened');
        $('.mobile__overlay').fadeOut(200);
		var mMenu = $(this).attr("href");
		var destination = $(mMenu).offset().top - 30; 
		$('html,body').animate( { scrollTop: destination }, 1100 );
	});
		
	
	var mobileSidebar = (function() {
        var animSpeed = 200;

        function init() {
            setEvents();
        };

        function setEvents() {

            // Open sidebar
            $('.mobile-open').on('click', function() {
                openSidebar();
            });

            // Close sidebar
            $('.mobile-close, .mobile__overlay').on('click', function() {
                closeSidebar();
            });

        };

        function openSidebar() {
            $('.mobile__container').addClass('is-opened');
            $('.mobile__overlay').fadeIn(animSpeed);
        };

        function closeSidebar() {
            $('.mobile__container').removeClass('is-opened');
            $('.mobile__overlay').fadeOut(animSpeed);
        };

        init();

        return {
            open: openSidebar,
            close: closeSidebar
        };
    })();



    var wow = new WOW(
        {
            boxClass: 'wow',      // ะ ั”ะ ยปะ ยฐะกะะกะ, ะกะะ ั”ะกะะกโ€นะ ะะ ยฐะกะะกโ€ฐะ ั‘ะ โ– ะกะะ ยปะ ยตะ ัะ ยตะ ะ…ะกโ€ ะ า‘ะ ั• ะ ัะ ั•ะ ัะ ยตะ ะ…ะกโ€ะ ยฐ ะ ั•ะกโ€ะ ั•ะ ยฑะกะะ ยฐะ ยถะ ยตะ ะ…ะ ั‘ะกะ ะ ะ…ะ ยฐ ะกะะ ั”ะกะะ ยฐะ ะ…ะ ยต (ะ ั—ะ ั• ะกั“ะ ัะ ั•ะ ยปะกโ€กะ ยฐะ ะ…ะ ั‘ะกะ, wow)
            animateClass: 'animated', // ะ ั”ะ ยปะ ยฐะกะะกะ ะ า‘ะ ยปะกะ ะ ยฐะ ะ…ะ ั‘ะ ัะ ยฐะกโ€ ะ ั‘ะ ั‘ ะกะะ ยปะ ยตะ ัะ ยตะ ะ…ะกโ€ะ ยฐ (ะ ั—ะ ั• ะกั“ะ ัะ ั•ะ ยปะกโ€กะ ยฐะ ะ…ะ ั‘ะกะ, animated)
            offset: 0,          // ะกะะ ยฐะกะะกะะกโ€ะ ั•ะกะะ ะ…ะ ั‘ะ ยต ะ ะ ะ ั—ะ ั‘ะ ั”ะกะะ ยตะ ยปะกะะกโ€ฆ ะ ั•ะกโ€ ะ ะ…ะ ั‘ะ ยถะ ะ…ะ ยตะ ั–ะ ั• ะ ั”ะกะะ ยฐะกะ ะ ยฑะกะะ ยฐะกั“ะ ยทะ ยตะกะะ ยฐ ะ า‘ะ ั• ะ ะะ ยตะกะะกโ€ฆะ ะ…ะ ยตะ โ– ะ ั–ะกะะ ยฐะ ะ…ะ ั‘ะกโ€ ะกโ€น ะกะะ ยปะ ยตะ ัะ ยตะ ะ…ะกโ€ะ ยฐ, ะ ะ…ะ ยตะ ั•ะ ยฑะกโ€ฆะ ั•ะ า‘ะ ั‘ะ ัะ ั•ะ ยต ะ า‘ะ ยปะกะ ะ ะ…ะ ยฐะกโ€กะ ยฐะ ยปะ ยฐ ะ ยฐะ ะ…ะ ั‘ะ ัะ ยฐะกโ€ ะ ั‘ะ ั‘ (ะ ั—ะ ั• ะกั“ะ ัะ ั•ะ ยปะกโ€กะ ยฐะ ะ…ะ ั‘ะกะ, 0)
            mobile: true,       // ะ ะะ ั”ะ ยปะกะะกโ€กะ ยตะ ะ…ะ ั‘ะ ยต/ะ ั•ะกโ€ะ ั”ะ ยปะกะะกโ€กะ ยตะ ะ…ะ ั‘ะ ยต WOW.js ะ ะ…ะ ยฐ ะ ัะ ั•ะ ยฑะ ั‘ะ ยปะกะะ ะ…ะกโ€นะกโ€ฆ ะกั“ะกะะกโ€ะกะะ ั•ะ โ–ะกะะกโ€ะ ะะ ยฐะกโ€ฆ (ะ ั—ะ ั• ะกั“ะ ัะ ั•ะ ยปะกโ€กะ ยฐะ ะ…ะ ั‘ะกะ, ะ ะะ ั”ะ ยปะกะะกโ€กะ ยตะ ะ…ะ ั•)
            live: true,       // ะ ั—ะ ั•ะ า‘ะ า‘ะ ยตะกะะ ยถะ ั”ะ ยฐ ะ ยฐะกะะ ั‘ะ ะ…ะกโ€ฆะกะะ ั•ะ ะ…ะ ะ…ะ ั• ะ ยทะ ยฐะ ั–ะกะะกั“ะ ยถะ ยตะ ะ…ะ ะ…ะกโ€นะกโ€ฆ ะกะะ ยปะ ยตะ ัะ ยตะ ะ…ะกโ€ะ ั•ะ ะ (ะ ั—ะ ั• ะกั“ะ ัะ ั•ะ ยปะกโ€กะ ยฐะ ะ…ะ ั‘ะกะ, ะ ะะ ั”ะ ยปะกะะกโ€กะ ยตะ ะ…ะ ยฐ)
            callback: function (box) {
                // ะกโ€ะกั“ะ ะ…ะ ั”ะกโ€ ะ ั‘ะกะ ะกะะกะะ ยฐะ ยฑะ ยฐะกโ€ะกโ€นะ ะะ ยฐะ ยตะกโ€ ะ ั”ะ ยฐะ ยถะ า‘ะกโ€นะ โ– ะกะะ ยฐะ ยท ะ ั—ะกะะ ั‘ ะกะะกโ€ะ ยฐะกะะกโ€ะ ยต ะ ยฐะ ะ…ะ ั‘ะ ัะ ยฐะกโ€ ะ ั‘ะ ั‘
                // ะ ยฐะกะะ ั–ะกั“ะ ัะ ยตะ ะ…ะกโ€ box ะฒะโ€ ะกะะ ยปะ ยตะ ัะ ยตะ ะ…ะกโ€, ะ า‘ะ ยปะกะ ะ ั”ะ ั•ะกโ€ะ ั•ะกะะ ั•ะ ั–ะ ั• ะ ยฑะกโ€นะ ยปะ ยฐ ะ ยทะ ยฐะ ั—ะกั“ะกโ€ฐะ ยตะ ะ…ะ ยฐ ะ ยฐะ ะ…ะ ั‘ะ ัะ ยฐะกโ€ ะ ั‘ะกะ
            },
            scrollContainer: null // ะกะะ ยตะ ยปะ ยตะ ั”ะกโ€ะ ั•ะกะ ะ ั—ะกะะ ั•ะ ั”ะกะะกั“ะกโ€กะ ั‘ะ ะะ ยฐะกะะกโ€ฐะ ยตะ ั–ะ ั•ะกะะกะ ะ ั”ะ ั•ะ ะ…ะกโ€ะ ยตะ โ–ะ ะ…ะ ยตะกะะ ยฐ (ะ ั•ะ ั—ะกโ€ ะ ั‘ะ ั•ะ ะ…ะ ยฐะ ยปะกะะ ะ…ะ ั•, ะ ั—ะ ั• ะกั“ะ ัะ ั•ะ ยปะกโ€กะ ยฐะ ะ…ะ ั‘ะกะ, window)
        }
    );
    wow.init();
    
});