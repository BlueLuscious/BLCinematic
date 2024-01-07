import { Template } from "./constants.js"
import { Interactivity, Styles, Toolbox } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const itemId = urlParams.get('itemId')
    const mains = Array.from(document.getElementsByClassName('main_divs'))

    styles.setNavItemStylesByURL(Template.INDEX_TEMPLATE, navbarItems[0])
    styles.setNavItemStylesByURL(Template.MOVIES_TEMPLATE, navbarItems[1])
    styles.setNavItemStylesByURL(Template.SERIES_TEMPLATE, navbarItems[2])

    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?indexCard=${indexCard}&itemId=${itemId}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?indexCard=${indexCard}&itemId=${itemId}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?indexCard=${indexCard}&itemId=${itemId}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?indexCard=${indexCard}&itemId=${itemId}`], mains)

    interactivity.templateRedirects(navbarItems)

    const templates = [
        Template.INDEX_TEMPLATE,
        Template.MOVIES_TEMPLATE,
        Template.SERIES_TEMPLATE
    ]

    styles.changeFontSizeByListemer(navbarItems, templates, 'mouseover', ['1.35em', '1.6em'])
    styles.changeFontSizeByListemer(navbarItems, templates, 'mouseout', ['', ''])
    styles.changeFontSizeByListemer(navbarItems, templates, 'mouseover', ['1.35em', '1.6em'])
    styles.changeFontSizeByListemer(navbarItems, templates, 'mouseout', ['', ''])
    styles.changeFontSizeByListemer(navbarItems, templates, 'mouseover', ['1.35em', '1.6em'])
    styles.changeFontSizeByListemer(navbarItems, templates, 'mouseout', ['', ''])

})