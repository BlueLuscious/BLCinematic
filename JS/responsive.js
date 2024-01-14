import { Template } from "./constants.js"
import { Interactivity, Styles } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles

document.addEventListener('DOMContentLoaded', function () {

    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))
    const navbarRows = Array.from(document.getElementsByClassName('header_navbar_tr'))
    const expandableNavbarItems = Array.from(document.getElementsByClassName('expandable_navbar_td'))
    const expandableNavbarRows = Array.from(document.getElementsByClassName('expandable_navbar_tr'))

    const expandableNavbar = document.getElementById('expandableNavbar')
    const expandableSearchBar = document.getElementById('expandableSearchBar')
    const expandNavbarBtn = document.getElementById('expandNavbarButton')
    const closeNavbarBtn = document.getElementById('closeNavbarButton')

    expandableNavbar.style.display = 'none'

    /* MacBook Pro, Nest Hub Max */
    if (window.innerWidth > 1024) {
        navbarItems.forEach(function(item) {
            item.classList.add('header_navbar_td')
        })
        expandableNavbarItems.forEach(function(item) {
            item.removeAttribute('class')
            item.classList.add('expandable_navbar_td')
        })

        navbarRows.forEach(function(row) {
            row.classList.add('header_navbar_tr')
        })
        expandableNavbarRows.forEach(function(row) {
            row.removeAttribute('class')
            row.classList.add('expandable_navbar_tr')
        })

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
        navbarItems.forEach(function(item) {
            item.removeAttribute('class')
        })
        expandableNavbarItems.forEach(function(item) {
            item.removeAttribute('class')
            item.classList.add('header_navbar_td')
        })
        
        navbarRows.forEach(function(row) {
            row.removeAttribute('class')
        })
        expandableNavbarRows.forEach(function(row) {
            row.removeAttribute('class')
            row.classList.add('header_navbar_tr')
        })

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

        expandNavbarBtn.addEventListener('click', function () {
            expandableNavbar.style.right = '0'
            expandableNavbar.style.left = '0'
            expandableNavbar.style.top = '7.5vh'
            expandableNavbar.style.display = 'block'
        })
    }
    /* Nest Hub */

    /* iPad Pro */
    if (window.innerWidth <= 1024 && window.innerHeight > 600) {
        expandNavbarBtn.addEventListener('click', function () {
            expandableNavbar.style.top = '5.5vh'
        })

        expandableSearchBar.style.padding = '1.5vh'
        expandableSearchBar.style.fontSize = '1.8vh'
    }
    /* iPad Pro */

    /* Surface Pro 7, iPad Air */
    if (window.innerWidth <= 912) {
        expandableNavbarRows.forEach(function(row) {
            row.style.display = 'flex'
            row.style.justifyContent = 'center'
            row.style.alignItems = 'center'
        })
    }
    /* Surface Pro 7, iPad Air */

    /* iPad Mini, Surface Duo */
    if (window.innerWidth <= 768) {}
    /* iPad Mini, Surface Duo */

    /* iPhone 14 Pro Max, iPhone XR, Samsung Galaxy S20 Ultra, Samsung Galaxy A51/71, iPhone 12 Pro, iPhone SE, Samsung Galaxy S8+, Galaxy Fold */
    if (window.innerWidth <= 430) {}
    /* iPhone 14 Pro Max, iPhone XR, Samsung Galaxy S20 Ultra, Samsung Galaxy A51/71, iPhone 12 Pro, iPhone SE, Samsung Galaxy S8+, Galaxy Fold */
    

    closeNavbarBtn.addEventListener('click', function () {
        expandableNavbar.style.display = 'none'
    })

    window.addEventListener('scroll', function () {
        if (this.scrollY) {
            expandableNavbar.style.display = 'none'
        }
    })

})