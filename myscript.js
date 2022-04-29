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
// var countDownDate = new Date("Jul 25, 2022 16:37:52").getTime();
// var myfunc = setInterval(function() {
//     var now = new Date().getTime();
//     var timeleft = countDownDate - now;

//     var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
//     document.getElementById("days").innerHTML = days + "d "
//     document.getElementById("hours").innerHTML = hours + "h "
//     document.getElementById("mins").innerHTML = minutes + "m "
//     document.getElementById("secs").innerHTML = seconds + "s"
//     if (timeleft < 0) {
//         clearInterval(myfunc);
//         document.getElementById("days").innerHTML = ""
//         document.getElementById("hours").innerHTML = ""
//         document.getElementById("mins").innerHTML = ""
//         document.getElementById("secs").innerHTML = ""
//         document.getElementById("end").innerHTML = "TIME UP!!";
//     }
// }, 1000)
// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2022 15:37:25").getTime();

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
    document.getElementById("demo-2").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo-2").innerHTML = "EXPIRED";
    }
}, 1000);