var pageLoad = 0

function testScroll(ev){
    if(window.pageYOffset>200 && pageLoad==0) {
        pageLoad +=
        $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    }
}
window.onscroll=testScroll



