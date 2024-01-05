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

    const functions = [
        interactivity.changeSectionDisplay, 
        styles.changeChoiceStylesByClick, 
        styles.changeChoiceStylesByMouseover, 
        styles.changeChoiceStylesByMouseout
    ]

    interactivity.setDisplaySection(moviesSections)
    styles.setColorChoice(moviesChoices)

    interactivity.setDisplaySection(seriesSections)
    styles.setColorChoice(seriesChoices)

    interactivity.chooseOption(moviesOptions, moviesChoices, moviesSections, functions)
    interactivity.chooseOption(seriesOptions, seriesChoices, seriesSections, functions)

})