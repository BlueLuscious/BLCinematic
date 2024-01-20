import { Display, Template } from "./constants.js"
import { Interactivity, Toolbox } from "./handlers.js"

const interactivity = new Interactivity
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', () => {

    const footer = document.getElementById('id_footer')
    const scrollToTopBtn = document.getElementById('scrollToTop')

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const mains = Array.from(document.getElementsByClassName('main_divs'))

    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?trending_all_day&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?trending_all_day&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?trending_movie_day&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?trending_serie_day&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?trending_all_week&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?trending_all_week&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?trending_movie_week&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?trending_serie_week&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)

    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?movie_now_playing&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?movie_popular&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?movie_top_rated&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?movie_upcoming&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)

    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?serie_airing_today&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?serie_on_the_air&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?serie_popular&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?serie_top_rated&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)

    toolbox.displayOneThing(footer, Display.DISPLAY_BLOCK)
    interactivity.scrollToTop(scrollToTopBtn)

})