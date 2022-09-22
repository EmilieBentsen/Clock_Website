function functionName(){
    alert("It worked!");
};

function showTimeUntilFallBreak(){
    
    const countDownDate = new Date("oct 10, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="column1"
    document.getElementById("column4").innerHTML = days + " days " + hours + " hours "
    + minutes + " minutes " + seconds + " seconds" + "<br />" + "until fall break";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("column4").innerHTML = "COUNTDOWN ENDED";
    }
    }, 1000);
        
};

function showTimeUntilDimission(){
    const countDownDate = new Date("jun 30, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="column1"
    document.getElementById("column6").innerHTML = days + " days " + hours + " hours "
    + minutes + " minutes " + seconds + " seconds" + "<br />" + "until summer holiday";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("column6").innerHTML = "COUNTDOWN ENDED";
    }
    }, 1000);
        
};
function showTimeUntilChristmasBreak(){

    const countDownDate = new Date("dec 22, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="column1"
    document.getElementById("column5").innerHTML = days + " days " + hours + " hours "
    + minutes + " minutes " + seconds + " seconds" + "<br />" + "until christmas break";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("column5").innerHTML = "COUNTDOWN ENDED";
    }
    }, 1000);
};

function startCountdowns(){
    showTimeUntilFallBreak();
    showTimeUntilChristmasBreak();
    showTimeUntilDimission();
}
window.onload = startCountdowns;

