
// - generare un array contenente la lista delle immagini
const imgs = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

// - Richiamare elemento dal DOM
const caroselloDOMElement = document.querySelector('.carousel')

// - Trovare lunghezza dell'array
// const arrayLength = imgs.length

// - Rimuovere il markup statico
//         - inserire tutte le immgini dinamicamente
//             - serviamoci dell'array per generare un ciclo for

for ( let i = 0; i < imgs.length; i++ ) {
    let immagineCorrenteSrc = imgs[i]
    // let immagine1 = imgs[0]
    console.log(i, immagineCorrenteSrc)
    // console.log(immagine1)

//        - il ciclo dovrà concatenare un template literal
    let imgString =`
        <img src="${immagineCorrenteSrc}" class = "img-item"></img>
    `
    console.log(imgString)
    caroselloDOMElement.innerHTML += imgString
    // ESPERIMENTI MIEI
    // caroselloDOMElement.classList.add('d-none')
    // const caroselloImgDOMElement = document.querySelector('image')
    // let active = caroselloImgDOMElement[0]
    // active.classList.add('d-block')
    // carosello1ImgDOMElement.classList.add('d-block')
}

//         - tutte le immagini dovranno essere nascoste, tranne la prima che avrà una classe display block

// recupero dal DOM tutte le immagini stampate nel ciclo
const caroselloImgDOMElements = document.querySelectorAll('.img-item');
console.log(caroselloImgDOMElements);

// memorizzo lo stato del carosello (indice slide attiva)
let currentIndex = 0;

// aggiungo la classe active alla slide attiva
let currentSlide = caroselloImgDOMElements[currentIndex];
currentSlide.classList.add('active')

// recupero dal DOM le frecce

const arrowTop = document.querySelector('.carousel .arrow-top');

const arrowBottom = document.querySelector('.carousel .arrow-bottom');

console.log(arrowTop, arrowBottom)
// creo l'event listener per ogni freccia
arrowBottom.addEventListener('click', function() {
    console.log("click arrow bottom")

    // assegnare alla slide successiva la classe active
    
    
})

arrowTop.addEventListener('click', function(){
    console.log('click arrow top')

    // assegnare alla classe precedente la classe active

})





