console.log("built by Aziz Safouane 🐱‍👤");

var i = 0;
var txt = 'Nos activités parascolaires';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
function show_menu(){
    var nav = document.getElementById("mobile-catego");
    nav.style.opacity = '100';
    nav.style.transition = '600ms';
    var reds = document.getElementById('mobile-span')
    reds.style.display = "block";
    var reds2 = document.getElementById('mobile-span2')
    reds2.style.display = "block";
    var reds3 = document.getElementById('mobile-span3')
    reds3.style.display = "block";
}
function hide_menu(){
    var nav = document.getElementById("mobile-catego");
    nav.style.opacity = '0';
    nav.style.transition = '600ms';
    var reds = document.getElementById('mobile-span')
    reds.style.display = "none";
    var reds2 = document.getElementById('mobile-span2')
    reds2.style.display = "none";
    var reds3 = document.getElementById('mobile-span3')
    reds3.style.display = "none";
}
function verify() {
var nav = document.getElementById("mobile-catego");
var computedStyle = window.getComputedStyle(nav);

if (computedStyle.opacity === '0') {
    show_menu();
} 
else{
    hide_menu();
}
}