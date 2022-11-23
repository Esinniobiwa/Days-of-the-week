var d = new Date();
var weekay = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";   

var date2 = new Date();
var weekday2 = new Array(7);
weekday2[0] ="Time to chillax!";
weekday2[1] ="Monday morning blues!";
weekday2[2] ="Taco Time!";
weekday2[3] ="Two moe days to the weekend.";
weekday2[4] ="The weeekend is almost here...";
weekday2[5] ="Weekens is here!";
weekday2[6] ="Time to party!";

 var n = weekday[d.getDay()];
 var n2 = weekday2[date2.getDay()];

 var displayweekday = document.getElementById('weekday');
 var phrase = document.getElementById('phrase');

 whatDayIsIt();
 function whatDayIsIt() {
     displayweekday.innerText = n ;
     phrase.innerText= n2;
 }
  