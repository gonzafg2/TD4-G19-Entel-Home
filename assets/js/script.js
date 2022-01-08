// Activando Tabs
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
var tabTrigger = new bootstrap.Tab(triggerEl)

triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
})
});

// Clonando Tab Carousel Items
let items = document.querySelectorAll('.carousel-tabs .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

// Desactivando botones anterior y siguiente
const sm = window.matchMedia("screen and (max-width:767px)").matches;
const md = window.matchMedia("screen and (min-width: 768px) and (max-width: 1200px)").matches;
const lg = window.matchMedia("screen and (min-width: 1200px)").matches;

    document.querySelector('#home-carousel').addEventListener('slid.bs.carousel', function (e) {
        if ((document.querySelector('#home-carousel__ThirdSlide').classList.contains('active') && lg) || (document.querySelector('#home-carousel__FourthSlide').classList.contains('active') && md) || (document.querySelector('#home-carousel__SixthSlide').classList.contains('active') && sm)) {
            document.querySelector('#home-carousel__next').classList.add('disabled');
            document.querySelector('#home-carousel__next').removeAttribute("href"); ;
        }
        else {
            document.querySelector('#home-carousel__next').classList.remove('disabled');
            document.querySelector('#home-carousel__next').setAttribute('href', '#home-carousel');
        }
        if (document.querySelector('#home-carousel__FirstSlide').classList.contains('active')) {
            document.querySelector('#home-carousel__prev').classList.add('disabled');
            document.querySelector('#home-carousel__prev').removeAttribute("href"); ;
        }
        else{
            document.querySelector('#home-carousel__prev').classList.remove('disabled');
            document.querySelector('#home-carousel__prev').setAttribute('href', '#home-carousel');
        }
    });
