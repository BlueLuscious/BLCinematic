import { Template } from "./constants.js"
import { Interactivity, Styles, Toolbox } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const mains = Array.from(document.getElementsByClassName('main_divs'))

    styles.setNavItemStylesByURL(Template.INDEX_TEMPLATE, navbarItems[0])
    styles.setNavItemStylesByURL(Template.MOVIES_TEMPLATE, navbarItems[1])
    styles.setNavItemStylesByURL(Template.SERIES_TEMPLATE, navbarItems[2])

    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?indexCard=${indexCard}`], mains)

    interactivity.templateRedirects(navbarItems)

    // NAVBAR ITEMS COLOR --> BY REDIRECTIONS //
    navbarItems.forEach(function (navbarItem, index) {
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