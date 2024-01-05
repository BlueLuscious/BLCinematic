import { Interactivity, Styles } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles

document.addEventListener('DOMContentLoaded', function () {

    const moviesSections = Array.from(document.getElementsByClassName('movies_section'))
    const moviesOptions = Array.from(document.getElementsByClassName('choose_movies_option'))
    const moviesChoices = Array.from(document.getElementsByClassName('movies_choice'))

    const seriesSections = Array.from(document.getElementsByClassName('series_section'))
    const seriesOptions = Array.from(document.getElementsByClassName('choose_series_option'))
    const seriesChoices = Array.from(document.getElementsByClassName('series_choice'))

    const handlers = [
        interactivity.changeSectionDisplay, 
        styles.changeChoiceStylesByClick, 
        styles.changeChoiceStylesByMouseover, 
        styles.changeChoiceStylesByMouseout
    ]

    interactivity.setSectionDisplay(moviesSections)
    styles.setChoiceColour(moviesChoices)

    interactivity.setSectionDisplay(seriesSections)
    styles.setChoiceColour(seriesChoices)

    interactivity.chooseOption(moviesOptions, moviesChoices, moviesSections, handlers)
    interactivity.chooseOption(seriesOptions, seriesChoices, seriesSections, handlers)

})