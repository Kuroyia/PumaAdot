/*Fonction rendant le scroll "smooth"*/
function myFunction(){
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
}

/*API Google pour la carte intéractive*/
function initMap() {
    const leclerc = { lat: 48.86423529738328, lng: 2.366428523506397 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: leclerc,
      disableDefaultUI: true,
    });
    const marker = new google.maps.Marker({
      position: leclerc,
      map: map,
    });
}
/*Fonction qui permet de faire l'animation de la vidéo qui disparaît sous forme de cercle*/
const videoBox =  document.querySelector(".videobox");
window.addEventListener("scroll", function(){
    const val = 250 - window.scrollY;
    videoBox.style.clipPath = "circle("+ val +"px at center center";
});

/*Si le scroll atteint le bas de la page, on fait disparaître "En profiter" pour faire apparaître "J'y vais" et on cache les flèches*/
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()){
        $('.enprofiter').fadeOut();
        arrow.style.opacity = "0";
    }
    else{
        $('.enprofiter').fadeIn();
        arrow.style.opacity = "1";
        }
});

/*Après 50 pixels on affiche le screen 2*/
window.onscroll = function() {
    const hide = document.getElementById("hide");
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 50) {
        hide.style.opacity = "1";
    } else {
        hide.style.opacity = "0";
    }
}