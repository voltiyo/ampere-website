function copy_mail(){
    navigator.clipboard.writeText('ampereprive@gmail.com');
    alert('copié dans le presse papier');
};
function copy_number1(){
    navigator.clipboard.writeText('08 08 58 99 54');
    alert('copié dans le presse papier');
};
function copy_number2(){
    navigator.clipboard.writeText('07 67 79 71 85');
    alert('copié dans le presse papier');
};
window.addEventListener('scroll',reveal); 
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0;i < reveals.length;i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[1].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight -revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
};
function hide_menu(){
    var nav = document.getElementById("mobile-catego");
    nav.style.opacity = '0';
    nav.style.transition = '600ms';
};
function show_menu(){
    var nav = document.getElementById("mobile-catego");
    nav.style.opacity = '100';
    nav.style.transition = '600ms';
};
function verify() {
    var nav = document.getElementById("mobile-catego");
    var computedStyle = window.getComputedStyle(nav);

    if (computedStyle.opacity === '0') {
        show_menu();
    } 
    else {
        hide_menu();
    }
}