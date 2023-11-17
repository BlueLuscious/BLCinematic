window.addEventListener('DOMContentLoaded', function () {

    // CHOOSING THINGS - MOVIES //
    const moviesSections = Array.from(document.getElementsByClassName('movies_section'))
    const moviesOptions = Array.from(document.getElementsByClassName('choose_movies_option'))
    const moviesChoices = Array.from(document.getElementsByClassName('movies_choice'))

    // predifine section display (index 0)
    moviesSections.forEach(function (section, index) {
        if (index != 0) {
            section.style.display = 'none'
        }
    })

    // predifine choices background-color (index 0)
    moviesChoices.forEach(function (choice, index) {
        if (index == 0) {
            choice.style.backgroundColor = 'rgb(17, 60, 124)'
        }
    })

    // choose content //
    moviesOptions.forEach(function (option, optionIndex) {
        // modify choice background-color, cursor and sections display by click
        option.addEventListener('click', function () {
            if (optionIndex == 0) {
                moviesChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                moviesSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }

            if (optionIndex == 1) {
                moviesChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                moviesSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }

            if (optionIndex == 2) {
                moviesChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                moviesSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }

            if (optionIndex == 3) {
                moviesChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                moviesSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }
        })

        // modify choice background-color and cursor by mouseover
        option.addEventListener('mouseover', function () {
            if (optionIndex >= 0 && moviesChoices[optionIndex].style.backgroundColor !== 'rgb(17, 60, 124)') {
                moviesChoices[optionIndex].style.color = 'rgb(255, 255, 255)'
                moviesChoices[optionIndex].style.backgroundColor = 'rgb(134, 174, 235)'
                moviesChoices[optionIndex].style.cursor = 'pointer'
            }
        })

        // modify choice background-color and cursor by mouseout
        option.addEventListener('mouseout', function () {
            moviesChoices.forEach(function (choice, choiceIndex) {
                if (choiceIndex >= 0 && choice.style.backgroundColor !== 'rgb(17, 60, 124)') {
                    choice.style.color = 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = 'rgb(255, 255, 255)'
                    choice.style.cursor = 'pointer'
                }
            })
        })
    })
    // choose content  //
    // CHOOSING THINGS - MOVIES //

    // CHOOSING THINGS - SERIES //
        const seriesSections = Array.from(document.getElementsByClassName('series_section'))
        const seriesOptions = Array.from(document.getElementsByClassName('choose_series_option'))
        const seriesChoices = Array.from(document.getElementsByClassName('series_choice'))
    
        // predifine section display (index 0)
        seriesSections.forEach(function (section, index) {
            if (index != 0) {
                section.style.display = 'none'
            }
        })
    
        // predifine choices background-color (index 0)
        seriesChoices.forEach(function (choice, index) {
            if (index == 0) {
                choice.style.backgroundColor = 'rgb(17, 60, 124)'
            }
        })
    
        // choose content //
        seriesOptions.forEach(function (option, optionIndex) {
            // modify choice background-color, cursor and sections display by click
            option.addEventListener('click', function () {
                if (optionIndex == 0) {
                    seriesChoices.forEach(function (choice, choiceIndex) {
                        choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                        choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                        choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                    })
    
                    seriesSections.forEach(function (section, sectionIndex) {
                        section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                    })
                }
    
                if (optionIndex == 1) {
                    seriesChoices.forEach(function (choice, choiceIndex) {
                        choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                        choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                        choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                    })
    
                    seriesSections.forEach(function (section, sectionIndex) {
                        section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                    })
                }
    
                if (optionIndex == 2) {
                    seriesChoices.forEach(function (choice, choiceIndex) {
                        choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                        choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                        choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                    })
    
                    seriesSections.forEach(function (section, sectionIndex) {
                        section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                    })
                }
    
                if (optionIndex == 3) {
                    seriesChoices.forEach(function (choice, choiceIndex) {
                        choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                        choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                        choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                    })
    
                    seriesSections.forEach(function (section, sectionIndex) {
                        section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                    })
                }
            })
    
            // modify choice background-color and cursor by mouseover
            option.addEventListener('mouseover', function () {
                if (optionIndex >= 0 && seriesChoices[optionIndex].style.backgroundColor !== 'rgb(17, 60, 124)') {
                    seriesChoices[optionIndex].style.color = 'rgb(255, 255, 255)'
                    seriesChoices[optionIndex].style.backgroundColor = 'rgb(134, 174, 235)'
                    seriesChoices[optionIndex].style.cursor = 'pointer'
                }
            })
    
            // modify choice background-color and cursor by mouseout
            option.addEventListener('mouseout', function () {
                seriesChoices.forEach(function (choice, choiceIndex) {
                    if (choiceIndex >= 0 && choice.style.backgroundColor !== 'rgb(17, 60, 124)') {
                        choice.style.color = 'rgb(17, 60, 124)'
                        choice.style.backgroundColor = 'rgb(255, 255, 255)'
                        choice.style.cursor = 'pointer'
                    }
                })
            })
        })
        // choose content  //
        // CHOOSING THINGS - SERIES //
})