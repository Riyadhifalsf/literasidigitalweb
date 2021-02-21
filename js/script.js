// Event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // Ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }/*, Kecepatan Scrolling*/ /*1000*/ /*Efek*/ /*, 'swing'*/ /*'linear'*/, 'easeInOutExpo');

    e.pereventDefault();

});

// Parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/.5  +'%)'
    });


    // Portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
    }






});

































