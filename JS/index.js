import { Colour, Display } from "./constants.js"
import { Interactivity, Styles, Toolbox } from "./handlers.js"

const interactivity = new Interactivity
const styles = new Styles
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', () => {

    const trendingTables = Array.from(document.getElementsByClassName('trending_tables'))
    const trendingSections = Array.from(document.getElementsByClassName('trending_section'))
    const contentOptions = Array.from(document.getElementsByClassName('choose_content_option'))
    const contentChoices = Array.from(document.getElementsByClassName('content_choice'))
    const timeOptions = Array.from(document.getElementsByClassName('choose_time_option'))
    const timeChoices = Array.from(document.getElementsByClassName('time_choice'))

    const moviesTables = Array.from(document.getElementsByClassName('movies_tables'))
    const moviesSections = Array.from(document.getElementsByClassName('movies_section'))
    const moviesOptions = Array.from(document.getElementsByClassName('choose_movies_option'))
    const moviesChoices = Array.from(document.getElementsByClassName('movies_choice'))

    const seriesTables = Array.from(document.getElementsByClassName('series_tables'))
    const seriesSections = Array.from(document.getElementsByClassName('series_section'))
    const seriesOptions = Array.from(document.getElementsByClassName('choose_series_option'))
    const seriesChoices = Array.from(document.getElementsByClassName('series_choice'))

    const chooseContentBox = Array.from(document.getElementsByClassName('choose_content'))
    const chooseTimeBox = Array.from(document.getElementsByClassName('choose_time'))
    const selectContentTime = Array.from(document.getElementsByClassName('select_content_time'))

    const selectContent = document.getElementById('select_content')
    const selectTime = document.getElementById('select_time')
    const selectMovies = document.getElementById('select_movies')
    const selectSeries = document.getElementById('select_series')

    toolbox.displayArray(selectContentTime, Display.DISPLAY_NONE)
    toolbox.displayIndex0(trendingSections, Display.DISPLAY_BLOCK, Display.DISPLAY_NONE)
    toolbox.displayIndex0(moviesSections, Display.DISPLAY_BLOCK, Display.DISPLAY_NONE)
    toolbox.displayIndex0(seriesSections, Display.DISPLAY_BLOCK, Display.DISPLAY_NONE)

    styles.setColourIndex0(contentChoices, Colour.DARK_BLUE_COLOUR_2)
    styles.setColourIndex0(timeChoices, Colour.DARK_BLUE_COLOUR_2)
    styles.setColourIndex0(moviesChoices, Colour.DARK_BLUE_COLOUR_2)
    styles.setColourIndex0(seriesChoices, Colour.DARK_BLUE_COLOUR_2)

    interactivity.chooseTrending(contentOptions, contentChoices, trendingSections)
    interactivity.chooseTrending(timeOptions, timeChoices, trendingSections)
    interactivity.chooseMoviesOrSeries(moviesOptions, moviesChoices, moviesSections)
    interactivity.chooseMoviesOrSeries(seriesOptions, seriesChoices, seriesSections)

    interactivity.bindTrendingInteractions(selectContent, contentOptions, contentChoices)
    interactivity.bindTrendingInteractions(selectTime, timeOptions, timeChoices)
    interactivity.bindMoviesAndSeriesInteractions(selectMovies, moviesOptions, moviesChoices)
    interactivity.bindMoviesAndSeriesInteractions(selectSeries, seriesOptions, seriesChoices)
    
    toolbox.removeAfterFromTables(trendingTables)
    toolbox.removeAfterFromTables(moviesTables)
    toolbox.removeAfterFromTables(seriesTables)

    if (window.innerWidth <= 1370) {
        interactivity.selectTrending(selectContent, selectTime, trendingSections)
        interactivity.selectTrending(selectTime, selectContent, trendingSections)
        interactivity.selectMoviesOrSeries(selectMovies, moviesSections)
        interactivity.selectMoviesOrSeries(selectSeries, seriesSections)

        chooseContentBox.forEach((choose, index) => {
            index != 0 && index != 2 && index != 4 ? choose.style.display = Display.DISPLAY_NONE : false
        })

        toolbox.displayArray(chooseTimeBox, Display.DISPLAY_NONE)
        toolbox.displayArray(selectContentTime, Display.DISPLAY_BLOCK)

        toolbox.handleSelectArrow([selectContent, selectTime, selectMovies, selectSeries], selectContentTime)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1370) {
            interactivity.selectTrending(selectContent, selectTime, trendingSections)
            interactivity.selectTrending(selectTime, selectContent, trendingSections)
            interactivity.selectMoviesOrSeries(selectMovies, moviesSections)
            interactivity.selectMoviesOrSeries(selectSeries, seriesSections)

            chooseContentBox.forEach((choose, index) => {
                index != 0 && index != 2 && index != 4 ? choose.style.display = Display.DISPLAY_NONE : false
            })

            toolbox.displayArray(chooseTimeBox, Display.DISPLAY_NONE)
            toolbox.displayArray(selectContentTime, Display.DISPLAY_BLOCK)
        } else {
            toolbox.displayArray(chooseContentBox, Display.DISPLAY_BLOCK)
            toolbox.displayArray(chooseTimeBox, Display.DISPLAY_BLOCK)
            toolbox.displayArray(selectContentTime, Display.DISPLAY_NONE)
        }

        toolbox.handleSelectArrow([selectContent, selectTime, selectMovies, selectSeries], selectContentTime)
    })

})