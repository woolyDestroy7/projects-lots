var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4.2 * 12));

  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4.2));

  var weeks = Math.floor(distance % ((1000 * 60 * 60 * 24 * 7 * 4.2)) / (1000 * 60 * 60 * 24 * 7));
  
  var days = Math.floor(distance % ((1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("months").innerHTML = months;
                
  document.getElementById("days").innerHTML = days;
                
  document.getElementById("hrs").innerHTML = hours;
                
  document.getElementById("mins").innerHTML = minutes;
                
  document.getElementById("secs").innerHTML = seconds;

  document.getElementById("weeks").innerHTML = weeks;

  document.getElementById("years").innerHTML = years;
}, 1000);