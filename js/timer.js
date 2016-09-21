// 5 Minute Timer (300 seconds)
$(function() {
  var max_time = 300;
  var cinterval;

  function countdown_timer() {
    max_time--;
    document.getElementById('countdown1').innerHTML = max_time;
    if (max_time <= 0) {
      clearInterval(cinterval);
    }
  }


  $("#min5").click(function() {
    if (cinterval) return; //if timer is running, do not start up again
    cinterval = setInterval(countdown_timer, 1000);
  });
}());


// 1 Minute Timer (60 seconds)
$(function() {
  var max_time = 60;
  var cinterval;

  function countdown_timer() {
    max_time--;
    document.getElementById('countdown2').innerHTML = max_time;
    if (max_time <= 0) {
      clearInterval(cinterval);
    }
  }


  $("#min1").click(function() {
    if (cinterval) return; //if timer is running, do not start up again
    cinterval = setInterval(countdown_timer, 1000);
  });
}());

// 4 Minute Timer (240 seconds)
$(function() {
  var max_time = 240;
  var cinterval;

  function countdown_timer() {
    max_time--;
    document.getElementById('countdown3').innerHTML = max_time;
    if (max_time <= 0) {
      clearInterval(cinterval);
    }
  }


  $("#min4").click(function() {
    if (cinterval) return; //if timer is running, do not start up again
    cinterval = setInterval(countdown_timer, 1000);
  });
}());

// 6 Minute Timer (360 seconds)
$(function() {
  var max_time = 360;
  var cinterval;

  function countdown_timer() {
    max_time--;
    document.getElementById('countdown4').innerHTML = max_time;
    if (max_time <= 0) {
      clearInterval(cinterval);
    }
  }


  $("#min6").click(function() {
    if (cinterval) return; //if timer is running, do not start up again
    cinterval = setInterval(countdown_timer, 1000);
  });
}());

// 15second Timer
$(function() {
  var max_time = 15;
  var cinterval;

  function countdown_timer() {
    max_time--;
    document.getElementById('countdown5').innerHTML = max_time;
    if (max_time <= 0) {
      clearInterval(cinterval);
    }
  }


  $("#sec15").click(function() {
    if (cinterval) return; //if timer is running, do not start up again
    cinterval = setInterval(countdown_timer, 1000);
  });
}());