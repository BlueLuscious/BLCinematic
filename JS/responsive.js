import { Display, Template } from "./constants.js"
import { Interactivity, Styles, Toolbox } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))
    const navbarRows = Array.from(document.getElementsByClassName('header_navbar_tr'))
    const expandableNavbarItems = Array.from(document.getElementsByClassName('expandable_navbar_td'))
    const expandableNavbarRows = Array.from(document.getElementsByClassName('expandable_navbar_tr'))

    const expandableNavbar = document.getElementById('expandableNavbar')
    const expandBtnBox = document.getElementById('expandButtonBox')
    const expandNavbarBtn = document.getElementById('expandNavbarButton')
    const expandBtnIcon = document.getElementById('expandButtonIcon')

    const chooseContentBox = Array.from(document.getElementsByClassName('choose_content'))
    const chooseTimeBox = Array.from(document.getElementsByClassName('choose_time'))
    const selectContentTime = Array.from(document.getElementsByClassName('select_content_time'))

    expandableNavbar.style.display = Display.DISPLAY_NONE
    toolbox.displayArray(selectContentTime, Display.DISPLAY_NONE)

    /* MacBook Pro, Nest Hub Max */
    if (window.innerWidth > 1024) {
        toolbox.addClassListToArray(navbarItems, 'header_navbar_td')
        toolbox.removeAttributeToArray(expandableNavbarItems, 'class')
        toolbox.addClassListToArray(expandableNavbarItems, 'expandable_navbar_td')

        toolbox.addClassListToArray(navbarRows, 'header_navbar_tr')
        toolbox.removeAttributeToArray(expandableNavbarRows, 'class')
        toolbox.addClassListToArray(expandableNavbarRows, 'expandable_navbar_tr')

        styles.setNavItemStylesByURL(Template.INDEX_TEMPLATE, navbarItems[0])
        styles.setNavItemStylesByURL(Template.MOVIES_TEMPLATE, navbarItems[1])
        styles.setNavItemStylesByURL(Template.SERIES_TEMPLATE, navbarItems[2])
        
        interactivity.templateRedirects(navbarItems, Template.INDEX_TEMPLATE)
        interactivity.templateRedirects(navbarItems, Template.MOVIES_TEMPLATE)
        interactivity.templateRedirects(navbarItems, Template.SERIES_TEMPLATE)

        styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseout', '')
    }
    /* MacBook Pro, Nest Hub Max */

    /* Nest Hub */
    if (window.innerWidth <= 1024) {
        toolbox.removeAttributeToArray(navbarItems, 'class')
        toolbox.removeAttributeToArray(expandableNavbarItems, 'class')
        toolbox.addClassListToArray(expandableNavbarItems, 'header_navbar_td')

        toolbox.removeAttributeToArray(navbarRows, 'class')
        toolbox.removeAttributeToArray(expandableNavbarRows, 'class')
        toolbox.addClassListToArray(expandableNavbarRows, 'header_navbar_tr')

        styles.setNavItemStylesByURL(Template.INDEX_TEMPLATE, expandableNavbarItems[0])
        styles.setNavItemStylesByURL(Template.MOVIES_TEMPLATE, expandableNavbarItems[1])
        styles.setNavItemStylesByURL(Template.SERIES_TEMPLATE, expandableNavbarItems[2])

        interactivity.templateRedirects(expandableNavbarItems, Template.INDEX_TEMPLATE)
        interactivity.templateRedirects(expandableNavbarItems, Template.MOVIES_TEMPLATE)
        interactivity.templateRedirects(expandableNavbarItems, Template.SERIES_TEMPLATE)

        styles.changeFontSizeByListener(expandableNavbarItems, Template.INDEX_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.INDEX_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.MOVIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.MOVIES_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.SERIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.SERIES_TEMPLATE, 'mouseout', '')

        let openIt = true
        let closeIt = false

        expandNavbarBtn.addEventListener('click', function () {
            if (openIt) {
                toolbox.displayOneThing(expandableNavbar, Display.DISPLAY_BLOCK)
                expandableNavbar.classList.remove('expandable_navbar_slide_out')
                expandableNavbar.classList.add('expandable_navbar')
                expandBtnIcon.classList.add('bi_x')
                $('.icon').removeClass('bi bi-list').addClass('bi bi-x-lg')
                openIt = false
                closeIt = true
            } else if (closeIt) {
                expandableNavbar.classList.remove('expandable_navbar')
                expandableNavbar.classList.add('expandable_navbar_slide_out')
                setTimeout(() => {
                    toolbox.displayOneThing(expandableNavbar, Display.DISPLAY_NONE)
                }, 300)
                expandBtnIcon.classList.remove('bi_x')
                $('.icon').removeClass('bi bi-x-lg').addClass('bi bi-list')
                closeIt = false
                openIt = true
            }
        })

        window.addEventListener('scroll', function () {
            if (scrollY) {
               expandableNavbar.classList.remove('expandable_navbar')
                expandableNavbar.classList.add('expandable_navbar_slide_out')
                setTimeout(() => {
                    toolbox.displayOneThing(expandableNavbar, Display.DISPLAY_NONE)
                }, 300)
                expandBtnIcon.classList.remove('bi_x')
                $('.icon').removeClass('bi bi-x-lg').addClass('bi bi-list')
                closeIt = false
                openIt = true
            }
        })
    
        document.addEventListener('keyup', function (event) {
            if (event.key === 'Escape') {
               expandableNavbar.classList.remove('expandable_navbar')
                expandableNavbar.classList.add('expandable_navbar_slide_out')
                setTimeout(() => {
                    toolbox.displayOneThing(expandableNavbar, Display.DISPLAY_NONE)
                }, 300)
                expandBtnIcon.classList.remove('bi_x')
                $('.icon').removeClass('bi bi-x-lg').addClass('bi bi-list')
                closeIt = false
                openIt = true
            }
        });

        if (window.innerHeight <= 600) {
            expandBtnBox.style.marginLeft = '130vh'
        }
    }
    /* Nest Hub */

    /* iPad Pro */
    if (window.innerWidth <= 1024 && window.innerHeight > 600) {
        chooseContentBox.forEach(function (choose, index) {
            if (index != 0 && index != 2 && index != 4) {
                choose.style.display = Display.DISPLAY_NONE
            }
        })

        toolbox.displayArray(chooseTimeBox, Display.DISPLAY_NONE)
        toolbox.displayArray(selectContentTime, Display.DISPLAY_BLOCK)
    }
    /* iPad Pro */

})