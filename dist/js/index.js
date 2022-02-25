$('a').click(function(e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});

// DYNAMIC DATE FETCH
(function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let greeting = document.querySelector('.timed-greeting')
    console.log(hours)

    if (hours >= 12 && hours < 17) {
        greeting.innerHTML = 'Good Afternoon!'
    } else if (hours >= 1 && hours < 12) {
        greeting.innerHTML = 'Good Morning!'
    } else if (hours >= 17 && hours <= 23) {
        greeting.innerHTML = "Good Evening!"
    }
})();

AOS.init();