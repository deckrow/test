(function($) {

    // click -----------------------------------------------------------------------------------------------------------
    $('.show-comment').click(() => {
        $('.home-posts').css('display', 'block');
        $('.show-comment').css('display', 'none');
    });

    $('.back-head').click(() => {
        $('.home-posts').css('display', 'none');
        $('.show-comment').css('display', 'block');
    });


    $('.show-sidebar').click(() => {
        $('.content-sidebar').css('left', '0');
        $('.show-sidebar').css('display', 'none');
    });

    $('.back-sidebar').click(() => {
        $('.content-sidebar').css('left', '-197px');
        $('.show-sidebar').css('display', 'block');
    });

    // add post --------------------------------------------------------------------------------------------------------
    $('.add-post').click(() => {
        var additionalPost = document.getElementsByClassName('additional-posts');

        var newPost = $('<div class="post">' +
                            '<div class="post-top">' +
                                '<h5 class="additional-posts__title">Some text</h5>' +
                                '<p class="date">Some person</p>' +
                                '<p class="text">Some text</p>' +
                                '<button class="more">more...</button>' +
                            '</div>' +
                            '<div class="post-bottom clearfix">' +
                                '<a href="#" class="post-com">33</a>' +
                                '<a href="#" class="post-like">33</a>' +
                            '</div>' +
                        '</div>');

        $(additionalPost).append(newPost);
    });

    // hide-show text --------------------------------------------------------------------------------------------------
    var textBlock   = $('.hide-text'),
	    textBlockP  = $('.hide-text-post'),
        btn         = $('.main-info__text .btn'),
	    btnP        = $('.post-top .more'),
		partText    = 45,
		textHeight  = textBlock.innerHeight(),
	    textHeightP = textBlockP.innerHeight();


	textBlock.css('height', partText);
	textBlockP.css('height', partText);

    $(btn).click(function () {                              //text-main
	    if (textBlock.innerHeight() === partText) {
		    textBlock.animate({ height: textHeight }, 500);
		    $(this).text('hide');
	    } else {
		    textBlock.animate({ height: partText }, 500);
		    $(this).text('read more');
	    }
    });


	$(btnP).click(function () {                             //text-additional-posts
		if ($(this).siblings('.hide-text-post').innerHeight() === partText) {
			$(this).siblings('.hide-text-post').animate({ height: textHeightP }, 500);
			$(this).css('display', 'none');
		}
	});

	// slider ----------------------------------------------------------------------------------------------------------
	$('.list-posts').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: false,
		nextArrow: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


})(jQuery);

