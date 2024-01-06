import { Colour } from "./constants.js"

let content_0 = true
let content_1 = false
let content_2 = false
let time_0 = true
let time_1 = false
export class Interactivity {

    // choose trending content and time
    chooseTrending(options, choices, sections, functions) {
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

    // choose movies and series content
    chooseMoviesAndSeries(options, choices, sections, functions) {
        options.forEach(function (option, optionIndex) {
            option.addEventListener('click', function () {
                if (optionIndex >= 0) {
                    functions[1](choices, optionIndex)
                    functions[0](sections, optionIndex)
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

    // scroll top button
    scrollToTop() {
        const scrollToTop = document.getElementById('scrollToTop')

        scrollToTop.style.display = 'none'
    
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 890 || document.documentElement.scrollTop > 890) {
                scrollToTop.style.display = 'block'
            } else {
                scrollToTop.style.display = 'none'
            }
        })
    
        scrollToTop.addEventListener('click', function () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        })
    }

}

export class Styles {

    // predifine choices background-color (index 0)
    setChoiceColour(choices) {
        choices.forEach(function (choice, index) {
            if (index == 0) {
                choice.style.backgroundColor = Colour.DARK_BLUE_COLOUR_2
            }
        })
    }

    // modify choices background-color and cursor by click
    changeChoiceStylesByClick(choices, optionIndex) {
        choices.forEach(function (choice, choiceIndex) {
            choice.style.color = choiceIndex === optionIndex ? Colour.WHITE_COLOUR : Colour.DARK_BLUE_COLOUR_2
            choice.style.backgroundColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.WHITE_COLOUR
            choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
        })
    }

    // modify choice background-color and cursor by mouseover
    changeChoiceStylesByMouseover(choices, optionIndex) {
        if (optionIndex >= 0 && choices[optionIndex].style.backgroundColor !== Colour.DARK_BLUE_COLOUR_2) {
            choices[optionIndex].style.color = Colour.WHITE_COLOUR
            choices[optionIndex].style.backgroundColor = Colour.LIGHT_BLUE_COLOUR
            choices[optionIndex].style.cursor = 'pointer'
        }
    }

    // modify choice background-color and cursor by mouseout
    changeChoiceStylesByMouseout(choices) {
        choices.forEach(function (choice, choiceIndex) {
            if (choiceIndex >= 0 && choice.style.backgroundColor !== Colour.DARK_BLUE_COLOUR_2) {
                choice.style.color = Colour.DARK_BLUE_COLOUR_2
                choice.style.backgroundColor = Colour.WHITE_COLOUR
                choice.style.cursor = 'pointer'
            }
        })
    }

}

export class Toolbox {

    // predifine section display (index 0)
    setSectionIndex0(sections) {
        sections.forEach(function (section, index) {
            if (index != 0) {
                section.style.display = 'none'
            }
        })
    }

    // hide all sections
    hideAllSections(sections) {
        sections.forEach(function (section) {
            section.style.display = 'none'
        })
    }

    // show one section with if
    showOneSection(section, choiceType) {
        if (choiceType) {
            section.style.display = 'block'
        }
    }

    // modify sections display
    changeSectionDisplay(sections, optionIndex) {
        sections.forEach(function (section, sectionIndex) {
            section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
        })
    }

    // format date
    formatDate(date) {
        date = date.split('-')

        let month
        switch (date[1]) {
            case '01':
                month = 'Jan'
                break;
            case '02':
                month = 'Feb'
                break;
            case '03':
                month = 'Mar'
                break;
            case '04':
                month = 'Apr'
                break;
            case '05':
                month = 'May'
                break;
            case '06':
                month = 'Jun'
                break;
            case '07':
                month = 'Jul'
                break;
            case '08':
                month = 'Aug'
                break;
            case '09':
                month = 'Sep'
                break;
            case '10':
                month = 'Oct'
                break;
            case '11':
                month = 'Nov'
                break;
            case '12':
                month = 'Dec'
                break;
            default:
                month = 'Invalid'
                break;
        }

        date = `${month} ${date[2]}, ${date[0]}`
        return date
    }

    // load footer //
    loadFooter() {
        const footer = document.getElementById('id_footer')
        footer.style.display = 'block'
    }

}