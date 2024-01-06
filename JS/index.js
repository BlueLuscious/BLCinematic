import { Interactivity, Styles, Toolbox } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    const COLOR1 = 'rgb(6, 33, 74)'
    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))

    // REDIRECTIONS //
    if (window.location.pathname === '/HTML/index.html') {
        navbarItems[0].style.color = COLOR1
        navbarItems[0].style.borderBottomColor = COLOR1
        navbarItems[0].style.cursor = 'default'
    }
    if (window.location.pathname === '/HTML/movies.html') {
        navbarItems[1].style.color = COLOR1
        navbarItems[1].style.borderBottomColor = COLOR1
        navbarItems[1].style.cursor = 'default'
    }
    if (window.location.pathname === '/HTML/series.html') {
        navbarItems[2].style.color = COLOR1
        navbarItems[2].style.borderBottomColor = COLOR1
        navbarItems[2].style.cursor = 'default'
    }
    // REDIRECTIONS //

    // REDIRECTIONS BY CLICK MOVIES OR SERIES (URLPARAMS) //
    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const mains = Array.from(document.getElementsByClassName('main_divs'))

    if (window.location.pathname === '/HTML/movies.html' && window.location.search === '') {
        mains.forEach(function (main, index) {
            if (index != 0) {
                main.style.display = 'none'
            }
        })
    }

    if (window.location.pathname === '/HTML/movies.html' && window.location.search === `?indexCard=${indexCard}`) {
        mains.forEach(function (main, index) {
            if (index != 1) {
                main.style.display = 'none'
            }
        })
    }

    if (window.location.pathname === '/HTML/series.html' && window.location.search === '') {
        mains.forEach(function (main, index) {
            if (index != 0) {
                main.style.display = 'none'
            }
        })
    }

    if (window.location.pathname === '/HTML/series.html' && window.location.search === `?indexCard=${indexCard}`) {
        mains.forEach(function (main, index) {
            if (index != 1) {
                main.style.display = 'none'
            }
        })
    }
    // REDIRECTIONS BY CLICK MOVIES OR SERIES (URLPARAMS) //

    // NAVBAR ITEMS COLOR --> BY REDIRECTIONS //
    navbarItems.forEach(function (navbarItem, index) {
        navbarItem.addEventListener('click', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (index == 1) {
                    window.location.href = 'movies.html'
                }
                if (index == 2) {
                    window.location.href = 'series.html'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index == 0) {
                    window.location.href = 'index.html'
                }
                if (index == 2) {
                    window.location.href = 'series.html'
                }
            }
            if (window.location.pathname === '/HTML/series.html') {
                if (index == 0) {
                    window.location.href = 'index.html'
                }
                if (index == 1) {
                    window.location.href = 'movies.html'
                }
            }
        })

        navbarItem.addEventListener('mouseover', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (window.innerWidth <= 1600 && index > 0) {
                    this.style.fontSize = '1.35em'
                } else if (window.innerWidth > 1600 && index > 0) {
                    this.style.fontSize = '1.6em'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index != 1) {
                    this.style.fontSize = '1.6em'
                }
            }
            if (window.location.pathname === '/HTML/series.html') {
                if (index != 2) {
                    this.style.fontSize = '1.6em'
                }
            }
        })

        navbarItem.addEventListener('mouseout', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (window.innerWidth <= 1600 && index > 0) {
                    this.style.fontSize = '1.25em'
                } else if (window.innerWidth > 1600 && index > 0) {
                    this.style.fontSize = '1.5em'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index != 1) {
                    this.style.fontSize = '1.5em'
                }
            }
            if (window.location.pathname === '/HTML/series.html') {
                if (index != 2) {
                    this.style.fontSize = '1.5em'
                }
            }
        })
        // NAVBAR ITEMS COLOR --> BY REDIRECTIONS //
    })

})