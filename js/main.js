// switch out font
$window = $(window);

document.addEventListener('DOMContentLoaded', (event) => {
  quotes()
})

window.onscroll = function() {
    stickyNav()
};

$(window).scroll(function() {
    var position = $(this).scrollTop();
    for (let x = 1; x < 12; x++) {
        var sectionTop = Math.floor($("#section-" + x).offset().top) - 100;
        // console.log("top:" + sectionTop);
        var sectionBottom = Math.floor($("#section-" + x).offset().top + $("#section-" + x).outerHeight()) - 80;
        // console.log(x);
        if (position >= sectionTop && position <= sectionBottom) {
          console.log(x + ' is in top');
          // $('#title h1, #title h2').attr('id', 'font-' + x);
          document.querySelector(`#nav-${x} em`).classList.add('current')
        } else {
          document.querySelector(`#nav-${x} em`).classList.remove('current')
        }
    }
});


var nav = document.getElementsByTagName("nav")[0]
var title = document.getElementById("title")
var sticky = nav.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
    title.style.paddingBottom = '69px'
  } else {
    nav.classList.remove("sticky")
    title.style.paddingBottom = '1em'
  }
}

function imageViewer(img) {
    if (document.body.clientWidth >= 1200) {
      var image_viewer = document.getElementById("image-viewer");
      var image_viewer_img = document.getElementById("image-viewer-img");

      console.log(img.getElementsByTagName('img')[0].src)
  
      image_viewer.style.display = "block";
      image_viewer_img.src = img.getElementsByTagName('img')[0].src;

      console.log(image_viewer_img.onmouseout)
    }
}

document.getElementById("image-viewer").addEventListener('click', () => imageHide())

function imageHide() {
  document.getElementById("image-viewer").style.display = "none";
}

function quotes() {
  var quotesEl = document.getElementsByClassName('quote')

  function randomNum(max) {
    return Math.floor((Math.random() * max) + 1);
  }

  for (let quote of quotesEl) {
    quote.style.marginTop = randomNum(5) + '%'
    quote.style.marginLeft = randomNum(50) + '%'
    quote.style.transform = `rotate(${randomNum(5)}deg)`
    quote.classList.add('palette-' + randomNum(11))
  }
}