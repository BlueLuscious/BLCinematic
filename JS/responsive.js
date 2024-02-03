import { Display, Template } from "./constants.js"
import { Interactivity, Styles, Toolbox } from "./handlers.js"

const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', () => {

    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))
    const navbarRows = Array.from(document.getElementsByClassName('header_navbar_tr'))
    const expandableNavbarItems = Array.from(document.getElementsByClassName('expandable_navbar_td'))
    const expandableNavbarRows = Array.from(document.getElementsByClassName('expandable_navbar_tr'))

    const expandableNavbar = document.getElementById('expandableNavbar')
    const expandNavbarBtn = document.getElementById('expandNavbarButton')
    const expandBtnIcon = document.getElementById('expandButtonIcon')

    toolbox.displayOneThing(expandableNavbar, Display.DISPLAY_NONE)

    if (window.innerWidth > 1370) {
        toolbox.addClassListToArray(navbarItems, 'header_navbar_td')
        toolbox.removeAttributeToArray(expandableNavbarItems, 'class')
        toolbox.addClassListToArray(expandableNavbarItems, 'expandable_navbar_td')

        toolbox.addClassListToArray(navbarRows, 'header_navbar_tr')
        toolbox.removeAttributeToArray(expandableNavbarRows, 'class')
        toolbox.addClassListToArray(expandableNavbarRows, 'expandable_navbar_tr')

        styles.setNavItemStylesByURL(navbarItems[0], Template.INDEX_TEMPLATE)
        styles.setNavItemStylesByURL(navbarItems[1], Template.MOVIES_TEMPLATE)
        styles.setNavItemStylesByURL(navbarItems[2], Template.SERIES_TEMPLATE)
        
        interactivity.templateRedirects(navbarItems, Template.INDEX_TEMPLATE)
        interactivity.templateRedirects(navbarItems, Template.MOVIES_TEMPLATE)
        interactivity.templateRedirects(navbarItems, Template.SERIES_TEMPLATE)

        styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseout', '')
    } else if (window.innerWidth <= 1370) {
        toolbox.removeAttributeToArray(navbarItems, 'class')
        toolbox.removeAttributeToArray(expandableNavbarItems, 'class')
        toolbox.addClassListToArray(expandableNavbarItems, 'header_navbar_td')

        toolbox.removeAttributeToArray(navbarRows, 'class')
        toolbox.removeAttributeToArray(expandableNavbarRows, 'class')
        toolbox.addClassListToArray(expandableNavbarRows, 'header_navbar_tr')

        styles.setNavItemStylesByURL(expandableNavbarItems[0], Template.INDEX_TEMPLATE)
        styles.setNavItemStylesByURL(expandableNavbarItems[1], Template.MOVIES_TEMPLATE)
        styles.setNavItemStylesByURL(expandableNavbarItems[2], Template.SERIES_TEMPLATE)

        interactivity.templateRedirects(expandableNavbarItems, Template.INDEX_TEMPLATE)
        interactivity.templateRedirects(expandableNavbarItems, Template.MOVIES_TEMPLATE)
        interactivity.templateRedirects(expandableNavbarItems, Template.SERIES_TEMPLATE)

        styles.changeFontSizeByListener(expandableNavbarItems, Template.INDEX_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.INDEX_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.MOVIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.MOVIES_TEMPLATE, 'mouseout', '')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.SERIES_TEMPLATE, 'mouseover', '2.75vh')
        styles.changeFontSizeByListener(expandableNavbarItems, Template.SERIES_TEMPLATE, 'mouseout', '')

        let isOpen = false

        const toggleNavbar = (isVisible) => {
            setTimeout(() => {
                toolbox.displayOneThing(expandableNavbar, isVisible ? Display.DISPLAY_BLOCK : Display.DISPLAY_NONE)
            }, 300)
            expandableNavbar.classList.toggle('expandable_navbar', isVisible)
            expandableNavbar.classList.toggle('expandable_navbar_slide_out', !isVisible)
            expandBtnIcon.classList.toggle('bi_x', isVisible)
            $('.icon').toggleClass('bi-list', !isVisible).toggleClass('bi-x-lg', isVisible)
            isOpen = isVisible
        }
        
        expandNavbarBtn.addEventListener('click', () => {
            toggleNavbar(!isOpen)
        })
        
        window.addEventListener('scroll', () => {
            if (scrollY) { toggleNavbar(false) }
        })
        
        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') { toggleNavbar(false) }
        })

        window.addEventListener('resize', () => {
            toggleNavbar(false)
        })

    }

    window.addEventListener('resize', () => {
        toolbox.displayOneThing(expandableNavbar, Display.DISPLAY_NONE)
    
        if (window.innerWidth > 1370) {
            toolbox.addClassListToArray(navbarItems, 'header_navbar_td')
            toolbox.removeAttributeToArray(expandableNavbarItems, 'class')
            toolbox.addClassListToArray(expandableNavbarItems, 'expandable_navbar_td')
    
            toolbox.addClassListToArray(navbarRows, 'header_navbar_tr')
            toolbox.removeAttributeToArray(expandableNavbarRows, 'class')
            toolbox.addClassListToArray(expandableNavbarRows, 'expandable_navbar_tr')
    
            styles.setNavItemStylesByURL(navbarItems[0], Template.INDEX_TEMPLATE)
            styles.setNavItemStylesByURL(navbarItems[1], Template.MOVIES_TEMPLATE)
            styles.setNavItemStylesByURL(navbarItems[2], Template.SERIES_TEMPLATE)
            
            interactivity.templateRedirects(navbarItems, Template.INDEX_TEMPLATE)
            interactivity.templateRedirects(navbarItems, Template.MOVIES_TEMPLATE)
            interactivity.templateRedirects(navbarItems, Template.SERIES_TEMPLATE)
    
            styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseover', '2.75vh')
            styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseout', '')
            styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseover', '2.75vh')
            styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseout', '')
            styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseover', '2.75vh')
            styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseout', '')
        } else if (window.innerWidth <= 1370) {
            toolbox.removeAttributeToArray(navbarItems, 'class')
            toolbox.removeAttributeToArray(expandableNavbarItems, 'class')
            toolbox.addClassListToArray(expandableNavbarItems, 'header_navbar_td')
    
            toolbox.removeAttributeToArray(navbarRows, 'class')
            toolbox.removeAttributeToArray(expandableNavbarRows, 'class')
            toolbox.addClassListToArray(expandableNavbarRows, 'header_navbar_tr')
    
            styles.setNavItemStylesByURL(expandableNavbarItems[0], Template.INDEX_TEMPLATE)
            styles.setNavItemStylesByURL(expandableNavbarItems[1], Template.MOVIES_TEMPLATE)
            styles.setNavItemStylesByURL(expandableNavbarItems[2], Template.SERIES_TEMPLATE)
    
            interactivity.templateRedirects(expandableNavbarItems, Template.INDEX_TEMPLATE)
            interactivity.templateRedirects(expandableNavbarItems, Template.MOVIES_TEMPLATE)
            interactivity.templateRedirects(expandableNavbarItems, Template.SERIES_TEMPLATE)
    
            styles.changeFontSizeByListener(expandableNavbarItems, Template.INDEX_TEMPLATE, 'mouseover', '2.75vh')
            styles.changeFontSizeByListener(expandableNavbarItems, Template.INDEX_TEMPLATE, 'mouseout', '')
            styles.changeFontSizeByListener(expandableNavbarItems, Template.MOVIES_TEMPLATE, 'mouseover', '2.75vh')
            styles.changeFontSizeByListener(expandableNavbarItems, Template.MOVIES_TEMPLATE, 'mouseout', '')
            styles.changeFontSizeByListener(expandableNavbarItems, Template.SERIES_TEMPLATE, 'mouseover', '2.75vh')
            styles.changeFontSizeByListener(expandableNavbarItems, Template.SERIES_TEMPLATE, 'mouseout', '')
    
            let isOpen = false
    
            const toggleNavbar = (isVisible) => {
                setTimeout(() => {
                    toolbox.displayOneThing(expandableNavbar, isVisible ? Display.DISPLAY_BLOCK : Display.DISPLAY_NONE)
                }, 300)
                expandableNavbar.classList.toggle('expandable_navbar', isVisible)
                expandableNavbar.classList.toggle('expandable_navbar_slide_out', !isVisible)
                expandBtnIcon.classList.toggle('bi_x', isVisible)
                $('.icon').toggleClass('bi-list', !isVisible).toggleClass('bi-x-lg', isVisible)
                isOpen = isVisible
            }
            
            expandNavbarBtn.addEventListener('click', () => {
                toggleNavbar(!isOpen)
            })
            
            window.addEventListener('scroll', () => {
                if (scrollY) { toggleNavbar(false) }
            })
            
            document.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') { toggleNavbar(false) }
            })
        }
    })

})

