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

    toolbox.setSectionIndex0(moviesSections)
    styles.setChoiceColour(moviesChoices)

    toolbox.setSectionIndex0(seriesSections)
    styles.setChoiceColour(seriesChoices)

    interactivity.chooseMoviesAndSeries(moviesOptions, moviesChoices, moviesSections, handlers)
    interactivity.chooseMoviesAndSeries(seriesOptions, seriesChoices, seriesSections, handlers)



    let content_0 = true
    let content_1 = false
    let content_2 = false
    let time_0 = true
    let time_1 = false

    chooseTrending(contentOptions, contentChoices, trendingSections, handlers)
    chooseTrending(timeOptions, timeChoices, trendingSections, handlers)

    function chooseTrending(options, choices, sections, functions) {
        options.forEach(function (option, optionIndex) {

            option.addEventListener('click', function () {
                if (optionIndex >= 0) {
                    functions[1](choices, optionIndex)
                    functions[4](sections)
                }

                if (options.length == 3) {
                    if (optionIndex == 0) {
                        content_0 = true
                        functions[5](sections[0], time_0)
                        functions[5](sections[3], time_1)
                    } else {
                        content_0 = false
                    }
    
                    if (optionIndex == 1) {
                        content_1 = true
                        functions[5](sections[1], time_0)
                        functions[5](sections[4], time_1)
                    } else {
                        content_1 = false
                    }
    
                    if (optionIndex == 2) {
                        content_2 = true
                        functions[5](sections[2], time_0)
                        functions[5](sections[5], time_1)
                    } else {
                        content_2 = false
                    }
                }

                if (options.length == 2) {
                    if (optionIndex == 0) {
                        time_0 = true
                        functions[5](sections[0], content_0)
                        functions[5](sections[1], content_1)
                        functions[5](sections[2], content_2)
                    } else {
                        time_0 = false
                    }
    
                    if (optionIndex == 1) {
                        time_1 = true
                        functions[5](sections[3], content_0)
                        functions[5](sections[4], content_1)
                        functions[5](sections[5], content_2)
                    } else {
                        time_1 = false
                    }
                }
            })

            option.addEventListener('mouseover', function () {
                functions[2](choices, optionIndex)
            })

            option.addEventListener('mouseout', function () {
                functions[3](choices)
            })
            
        })
    }

    interactivity.scrollToTop()
    

})