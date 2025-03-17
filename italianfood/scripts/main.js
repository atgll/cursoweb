window.document.addEventListener('DOMContentLoaded', function() {

    const logo = document.getElementById("logomain");
    const navscroll = document.getElementById("navegacion");

    window.addEventListener('scroll', function() {
        if (this.window.scrollY>0) {
            logo.style.width="70px";
            navscroll.style.background=("black")
        } else {
            logo.style.width="125px"
            navscroll.style.background=("linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(195, 195, 195, 0) 100%)")
        }
    })

    $('.slide').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },

            {
                breakpoint: 650,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },

            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });
});
