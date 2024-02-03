import { Display, Template } from "./constants.js"
import { Interactivity, Toolbox } from "./handlers.js"

const interactivity = new Interactivity
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', () => {

    const footer = document.getElementById('id_footer')
    const scrollToTopBtn = document.getElementById('scrollToTop')

    const mains = Array.from(document.getElementsByClassName('main_divs'))
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get('category')
    const indexCard = urlParams.get('indexCard')
    
    toolbox.displayArrayValueByURL(Template.MOVIES_TEMPLATE, `?category=${category}&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)
    toolbox.displayArrayValueByURL(Template.SERIES_TEMPLATE, `?category=${category}&indexCard=${indexCard}`, mains, Display.DISPLAY_NONE)

    toolbox.displayOneThing(footer, Display.DISPLAY_BLOCK)
    interactivity.scrollToTop(scrollToTopBtn)

})