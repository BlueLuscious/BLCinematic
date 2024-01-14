import { Interactivity, Styles, Toolbox } from "./handlers.js"
const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {
    
    const trendingSections = Array.from(document.getElementsByClassName('trending_section'))
    const contentOptions = Array.from(document.getElementsByClassName('choose_content_option'))
    const contentChoices = Array.from(document.getElementsByClassName('content_choice'))
    const timeOptions = Array.from(document.getElementsByClassName('choose_time_option'))
    const timeChoices = Array.from(document.getElementsByClassName('time_choice'))

    const moviesSections = Array.from(document.getElementsByClassName('movies_section'))
    const moviesOptions = Array.from(document.getElementsByClassName('choose_movies_option'))
    const moviesChoices = Array.from(document.getElementsByClassName('movies_choice'))

    const seriesSections = Array.from(document.getElementsByClassName('series_section'))
    const seriesOptions = Array.from(document.getElementsByClassName('choose_series_option'))
    const seriesChoices = Array.from(document.getElementsByClassName('series_choice'))

    const handlers = [
        toolbox.changeSectionDisplay, 
        styles.changeChoiceStylesByClick, 
        styles.changeChoiceStylesByMouseover, 
        styles.changeChoiceStylesByMouseout,
        toolbox.hideAllSections,
        toolbox.showOneSection
    ]

    toolbox.setSectionIndex0(trendingSections)
    styles.setChoiceColour(contentChoices)
    styles.setChoiceColour(timeChoices)
    interactivity.chooseTrending(contentOptions, contentChoices, trendingSections, handlers)
    interactivity.chooseTrending(timeOptions, timeChoices, trendingSections, handlers)

    toolbox.setSectionIndex0(moviesSections)
    styles.setChoiceColour(moviesChoices)
    interactivity.chooseMoviesAndSeries(moviesOptions, moviesChoices, moviesSections, handlers)

    toolbox.setSectionIndex0(seriesSections)
    styles.setChoiceColour(seriesChoices)
    interactivity.chooseMoviesAndSeries(seriesOptions, seriesChoices, seriesSections, handlers)

})