
// - generare un array contenente la lista delle immagini
const imgs = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]
const caroselloDOMElement = document.querySelector('.container')
const arrayLength = imgs.length

// - Rimuovere il markup statico
//         - inserire tutte le immgini dinamicamente
//             - serviamoci dell'array per generare un ciclo for

for ( let i = 0; i < arrayLength; i++ ) {
    let immagineCorrente = imgs[i]
    console.log(i, immagineCorrente)
    let imgString =`
    <div class="d-none">
        <img src="${immagineCorrente}"></img>
    </div>
    `
    caroselloDOMElement.innerHTML += imgString
}
//         - il ciclo dovrà concatenare un template literal


//         - tutte le immagini dovranno essere nascoste, tranne la prima che avrà una classe display block



