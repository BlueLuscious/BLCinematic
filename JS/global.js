import { Template } from "./constants.js"
import { Interactivity, Toolbox } from "./handlers.js"
const interactivity = new Interactivity
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const mains = Array.from(document.getElementsByClassName('main_divs'))

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

    interactivity.scrollToTop()

})