// get current day and date
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// save to local storage
$(".btn9").on("click", function() {
    var entertext = $(".todo9").val();
    localStorage.setItem("9:00", entertext);
});
$(".todo9").val(localStorage.getItem("9:00"));

$(".btn10").on("click", function() {
    var entertext = $(".todo10").val();
    localStorage.setItem("10:00", entertext);
});
$(".todo10").val(localStorage.getItem("10:00"));

$(".btn11").on("click", function() {
    var entertext = $(".todo11").val();
    localStorage.setItem("11:00", entertext);
});
$(".todo11").val(localStorage.getItem("11:00"));

$(".btn12").on("click", function() {
    var entertext = $(".todo12").val();
    localStorage.setItem("12:00", entertext);
});
$(".todo12").val(localStorage.getItem("12:00"));

$(".btn1").on("click", function() {
    var entertext = $(".todo1").val();
    localStorage.setItem("1:00", entertext);
});
$(".todo1").val(localStorage.getItem("1:00"));

$(".btn2").on("click", function() {
    var entertext = $(".todo2").val();
    localStorage.setItem("2:00", entertext);
});
$(".todo2").val(localStorage.getItem("2:00"));

$(".btn3").on("click", function() {
    var entertext = $(".todo3").val();
    localStorage.setItem("3:00", entertext);
});
$(".todo3").val(localStorage.getItem("3:00"));

$(".btn4").on("click", function() {
    var entertext = $(".todo4").val();
    localStorage.setItem("4:00", entertext);
});
$(".todo4").val(localStorage.getItem("4:00"));

$(".btn5").on("click", function() {
    var entertext = $(".todo5").val();
    localStorage.setItem("5:00", entertext);
});
$(".todo5").val(localStorage.getItem("5:00"));

// defining hours and tasks 
var hr9 = document.querySelector(".hr9").textContent;
hr9 = parseInt(hr9[0]);
var todo9 = document.querySelector(".todo9");

var hr10 = document.querySelector(".hr10").textContent;
hr10 = parseInt(hr10[0]);
var todo10 = document.querySelector(".todo10");

var hr11 = document.querySelector(".hr11").textContent;
hr11 = parseInt(hr11[0]);
var todo11 = document.querySelector(".todo11");

var hr12 = document.querySelector(".hr12").textContent;
hr12 = parseInt(hr12[0]);
var todo12 = document.querySelector(".todo12");

var hr1 = document.querySelector(".hr1").textContent;
hr1 = parseInt(hr1[0]);
var todo1 = document.querySelector(".todo1");

var hr2 = document.querySelector(".hr2").textContent;
hr2 = parseInt(hr2[0]);
var todo2 = document.querySelector(".todo2");

var hr3 = document.querySelector(".hr3").textContent;
hr3 = parseInt(hr3[0]);
var todo3 = document.querySelector(".todo3");

var hr4 = document.querySelector(".hr4").textContent;
hr4 = parseInt(hr4[0]);
var todo4 = document.querySelector(".todo4");

var hr5 = document.querySelector(".hr5").textContent;
hr5 = parseInt(hr5[0]);
var todo5 = document.querySelector(".todo5");

var currentTime = moment().hour();
var hours = [hr9, hr10, hr11, hr12, hr1, hr2, hr3, hr4, hr5];
var tasks = [todo9, todo10, todo11, todo12, todo1, todo2, todo3, todo4, todo5];

// creating colors for rows regarding time of day
function timeColor() {
    for (i = 0; i < hours.length; i ++) {
        if (hours[i] < currentTime) {
            tasks[i].classList.remove("present");
            tasks[i].classList.remove("future");
            tasks[i].classList.add("past");
        }
        else if (hours[i] === currentTime) {
            tasks[i].classList.remove("past");
            tasks[i].classList.remove("future");
            tasks[i].classList.add("present");
        }
        else {
            tasks[i].classList.remove("past");
            tasks[i].classList.remove("present");
            tasks[i].classList.add("future");
        }
    }
};

timeColor();