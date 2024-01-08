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

    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?trending_all_day&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?trending_all_day&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?trending_movie_day&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?trending_serie_day&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?trending_all_week&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?trending_all_week&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?trending_movie_week&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?trending_serie_week&indexCard=${indexCard}`], mains)

    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?movie_now_playing&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?movie_popular&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?movie_top_rated&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.MOVIES_TEMPLATE, ['', `?movie_upcoming&indexCard=${indexCard}`], mains)

    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?serie_airing_today&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?serie_on_the_air&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?serie_popular&indexCard=${indexCard}`], mains)
    toolbox.showSectionByURL(Template.SERIES_TEMPLATE, ['', `?serie_top_rated&indexCard=${indexCard}`], mains)

    interactivity.templateRedirects(navbarItems, Template.INDEX_TEMPLATE)
    interactivity.templateRedirects(navbarItems, Template.MOVIES_TEMPLATE)
    interactivity.templateRedirects(navbarItems, Template.SERIES_TEMPLATE)

    styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseover', ['1.35em', '1.6em'])
    styles.changeFontSizeByListener(navbarItems, Template.INDEX_TEMPLATE, 'mouseout', ['', ''])
    styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseover', ['1.35em', '1.6em'])
    styles.changeFontSizeByListener(navbarItems, Template.MOVIES_TEMPLATE, 'mouseout', ['', ''])
    styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseover', ['1.35em', '1.6em'])
    styles.changeFontSizeByListener(navbarItems, Template.SERIES_TEMPLATE, 'mouseout', ['', ''])

})