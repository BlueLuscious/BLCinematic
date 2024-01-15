import { ApiContents } from "./constants.js"
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

    const selectContent = document.getElementById('select_content')
    const selectTime = document.getElementById('select_time')
    const selectMovies = document.getElementById('select_movies')
    const selectSeries = document.getElementById('select_series')

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
    interactivity.chooseMoviesOrSeries(moviesOptions, moviesChoices, moviesSections, handlers)

    toolbox.setSectionIndex0(seriesSections)
    styles.setChoiceColour(seriesChoices)
    interactivity.chooseMoviesOrSeries(seriesOptions, seriesChoices, seriesSections, handlers)

    if (window.innerWidth <= 1024 && window.innerHeight > 600) {
        const trendingContents = [
            ApiContents.TRENDING_ALL,
            ApiContents.TRENDING_MOVIES,
            ApiContents.TRENDING_SERIES,
            ApiContents.TRENDING_DAY,
            ApiContents.TRENDING_WEEK
        ]

        const movieContents = [
            ApiContents.MOVIES_NOW_PLAYING,
            ApiContents.MOVIES_POPULAR,
            ApiContents.MOVIES_TOP_RATED,
            ApiContents.MOVIES_UPCOMING
        ]

        const serieContents = [
            ApiContents.SERIES_AIRING_TODAY,
            ApiContents.SERIES_ON_THE_AIR,
            ApiContents.SERIES_POPULAR,
            ApiContents.SERIES_TOP_RATED
        ]

        interactivity.selectTrending(selectContent, selectTime, trendingSections, trendingContents, handlers)
        interactivity.selectTrending(selectTime, selectContent, trendingSections, trendingContents, handlers)

        interactivity.selectMoviesOrSeries(selectMovies, moviesSections, movieContents, handlers)
        interactivity.selectMoviesOrSeries(selectSeries, seriesSections, serieContents, handlers)
    }
})