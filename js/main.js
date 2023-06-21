let mode = document.querySelector('.mode div')
let headerh2 = document.querySelector('header h2')
let bars = document.querySelector('.fa-ellipsis-v')
let menu = document.querySelector('.side-menu')
let modeSpan = document.querySelector('.mode span.mode')
let modeSpan2 = document.querySelector('.mode >span')
console.log(modeSpan);
let body = document.querySelector('body')
let section = document.querySelector('section')
let dark = false
let menushow = true
function Mode() {
    if (dark) {
        mode.style.backgroundColor = '#000'
        modeSpan.style.left = '3px'
        headerh2.style.color = 'white'
        section.style.backgroundColor = 'black'
        section.style.color = 'white'
        modeSpan2.style.color = 'white'
        menu.style.color = 'white'
        menu.style.backgroundColor = 'rgb(56, 56, 56)'
        body.style.backgroundColor = 'rgb(39, 38, 38)'
        dark = false
    } else {
        modeSpan.style.left = '25px'
        headerh2.style.color = 'black'
        mode.style.backgroundColor = '#DDD'
        section.style.backgroundColor = 'white'
        section.style.color = 'black'
        body.style.backgroundColor = '#eee'
        menu.style.backgroundColor = '#EEE'
        menu.style.color = 'black'
        modeSpan2.style.color = 'black'
        dark = true
    }
}
function showMenu() {
    menu.classList.toggle('show')
    // if (menushow) {
    //     menu.style.height = '70px'
    //     menu.style.width = '70px'
    //     menushow = false
    // } else {
    //     menu.style.height = '0px'
    //     menu.style.width = '0px'
    //     menushow = true
    // }
}

mode.addEventListener("click", Mode)
bars.addEventListener("click", showMenu)
document.querySelector('.close').addEventListener('click', () => {

    document.querySelector('.animate').remove()
})

function removeSection() {
}