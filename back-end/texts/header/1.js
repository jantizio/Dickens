window.addEventListener("load", function(event) {
    var h = 50;
    if(window.location.pathname.includes("contenuti")){
      h = 420;
    }
    var header = document.querySelector(".header");

    window.onscroll = function(event) {
      if(window.scrollY>h){
        header.classList.add("transparency");
      }else {
        header.classList.remove("transparency");
      }

    };
  });

  // toggle per l'immagine della lingua
  function changeImg() {
    var img = document.getElementById('lang').src;
    if (img.indexOf('it.png')!=-1) {
      document.getElementById('lang').src  = './img/header/eng.png';
    }
    else {
      document.getElementById('lang').src = './img/header/it.png';
    }
  }
  
