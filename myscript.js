function close_coupon() {
    document.getElementById("coupon").style.display = "none";
    document.getElementById("coupon-2").style.display = "none";
}

function hide_me_right() {
    document.getElementById("scroll-nav-right").style.display = "none";
    document.getElementById("scroll-nav-left").style.display = "inline-block";
}

function hide_me_left() {
    document.getElementById("scroll-nav-left").style.display = "none";
    document.getElementById("scroll-nav-right").style.display = "inline-block";
}
// Set the date we're counting down to
var countDownDate = new Date("May 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var elements = document.getElementsByClassName("demo-2");
    for (var i = 0, len = elements.length; i < len; i++) {
        // elements[i].style ...
        elements[i].innerHTML = "Ends in " +
            days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
    }


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        for (var i = 0, len = elements.length; i < len; i++) {
            // elements[i].style ...
            elements[i].innerHTML = "EXPIRED";
        }
    }
}, 1000);

function change_the(x) {
    let m = document.getElementsByClassName('array-class-me');
    for (var i = 0, len = m.length; i < len; i++) {
        m[i].style.display = 'none';
    }
    document.getElementById(`pic-swap-${x}`).style.display = "block";
}