    $('.page-scroll').on('click', function(e) {
        e.preventDefault();  // Mencegah perilaku default dari link

        // Mengambil target URL dari atribut href
        let tujuan = $(this).attr('href');
        let elemenTujuan = $(tujuan);

        $('a[href="#home"]').addClass('active');

        // Menghapus kelas 'active' dari semua elemen dengan kelas 'page-scroll'
        $('.page-scroll').removeClass('active');

        // Menambahkan kelas 'active' pada elemen yang diklik
        $(this).addClass('active');

        // Animasi scroll ke elemen tujuan dengan offset 80px
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 100
        }, 1000, 'easeInOutExpo');
    });


    // Bersihkan url
    $(document).ready(function() {
        // Menangani klik tautan pada halaman 'Work' (atau halaman lainnya)
        $('.page-scroll').on('click', function(e) {
            e.preventDefault();  // Mencegah perilaku default dari link
    
            let tujuan = $(this).attr('href'); // Mengambil href (target link)
            let elemenTujuan;
            
            if (tujuan.includes('#')) {
                // Jika tujuan mengandung '#', ambil elemen berdasarkan ID
                elemenTujuan =  $(tujuan) ; 
            } else {
                // Jika bukan hash, pastikan kita scroll ke bagian yang relevan
                return;
            }
    
            // Hapus hash dari URL tanpa reload halaman
            if (window.history.pushState) {
                window.history.pushState("", document.title, window.location.pathname + window.location.search);
            } else {
                window.location.hash = "";
            }
        });
    });


// Fungsi untuk memeriksa apakah media query cocok
function checkMediaQuery() {
    const wScroll = $(window).scrollTop();
    const mediaQuery = window.matchMedia('(min-width: 1025px)'); 

    if (mediaQuery.matches) {
        applyParallax(wScroll);
    } else {
        resetParallax();
    }

    if( wScroll > $('.kelompok-2').offset().top - 250 ) {
        $('.kelompok-2 .cards').each(function(i) {
            setTimeout(function() {
                $('.kelompok-2 .cards').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
    }

}

// Fungsi untuk menerapkan efek parallax
function applyParallax(wScroll) {
    // Jumbotron
    $('.jumbotron-main h1').css({
        'transform' : 'translate(0px, '+ wScroll/.9 +'%)'
    });

    $('.jumbotron-main p').css({
        'transform' : 'translate(0px, '+ wScroll/.74 +'%)'
    });

    $('.jumbotron-main button').css({
        'transform' : 'translate(0px, '+ wScroll/.4 +'%)'
    });

    // About section
    $('.about .p-left').css({
        'transform' : 'translateX(' + Math.max(wScroll / 2, 600) + 'px)'
    });

    $('.about .p-right').css({
        'transform' : 'translateX(' + +Math.min(-wScroll / 2, -600) + 'px)'
    });

    // Portfolio
    if( wScroll > $('.kelompok-2').offset().top - 250 ) {
        $('.kelompok-2 .cards').each(function(i) {
            setTimeout(function() {
                $('.kelompok-2 .cards').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
    }

    

}

// Fungsi untuk reset efek parallax pada mobile
function resetParallax() {
    // Reset semua transformasi untuk menghindari efek parallax
    $('.jumbotron-main h1, .jumbotron-main p, .jumbotron-main button').css('transform', 'none');
    $('.about .p-left, .about .p-right').css('transform', 'none');

}

// Memanggil fungsi ketika halaman digulir
$(window).scroll(function() {
    checkMediaQuery();  // Mengecek apakah media query cocok dan menerapkan efek
});

// Juga memanggil fungsi saat pertama kali halaman dimuat untuk memeriksa kondisi media query
$(document).ready(function() {
    checkMediaQuery();
});

$(document).ready(function(){
    $("a[href^='#']").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top -100
        }, 500);
    });
});


































