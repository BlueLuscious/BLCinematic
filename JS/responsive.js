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
    const closeNavbarBtn = document.getElementById('closeNavbarButton')

    const chooseContentBox = Array.from(document.getElementsByClassName('choose_content'))
    const chooseTimeBox = Array.from(document.getElementsByClassName('choose_time'))
    const selectContentTime = Array.from(document.getElementsByClassName('select_content_time'))

    expandableNavbar.style.display = Display.DISPLAY_NONE

    toolbox.displaySomething(selectContentTime, Display.DISPLAY_NONE)
    toolbox.displayNavbarByListener(closeNavbarBtn, expandableNavbar, Display.DISPLAY_NONE, 'click')

    window.addEventListener('scroll', function () {
        if (scrollY) {
            expandableNavbar.style.display = Display.DISPLAY_NONE
        }
    })

    document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            expandableNavbar.style.display = Display.DISPLAY_NONE
        }
    });

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

        toolbox.displayNavbarByListener(expandNavbarBtn, expandableNavbar, Display.DISPLAY_BLOCK, 'click')

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

        toolbox.displaySomething(chooseTimeBox, Display.DISPLAY_NONE)
        toolbox.displaySomething(selectContentTime, Display.DISPLAY_BLOCK)
    }
    /* iPad Pro */

})