const logo = document.getElementById("logomain");
const navscroll = document.getElementById("navegacion");
const coffeshop = document.getElementById("my_box1")


window.addEventListener('scroll', function() {
    if (this.window.scrollY>0) {
        logo.style.width="85px";
        navscroll.style.background=("var(--marron)")
    } else {
        logo.style.width="150px"
        navscroll.style.background=("linear-gradient(0deg, rgba(212,202,175,0.4729344729344729) 0%, rgba(212,202,175,0.48290598290598286) 100%)")
    }
})

/*coffeshop.addEventListener('mouseover', function() {
    coffeshop.style.flexDirection=('row')        
})

coffeshop.addEventListener('mouseout', function() {
    coffeshop.style.flexDirection=('column')        
})*/




