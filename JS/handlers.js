import { Colour } from "./constants.js"

export class Interactivity {

    // choose content or time
    chooseOption(options, choices, sections, functions) {
        options.forEach(function (option, optionIndex) {
            option.addEventListener('click', function () {
                if (optionIndex == 0) {
                    functions[1](choices, optionIndex)
                    functions[0](sections, optionIndex)
                }
    
                if (optionIndex == 1) {
                    functions[1](choices, optionIndex)
                    functions[0](sections, optionIndex)
                }
    
                if (optionIndex == 2) {
                    functions[1](choices, optionIndex)
                    functions[0](sections, optionIndex)
                }
    
                if (optionIndex == 3) {
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
                choice.style.backgroundColor = Colour.DARK_BLUE_COLOUR
            }
        })
    }

    // modify choices background-color and cursor by click
    changeChoiceStylesByClick(choices, optionIndex) {
        choices.forEach(function (choice, choiceIndex) {
            choice.style.color = choiceIndex === optionIndex ? Colour.WHITE_COLOUR : Colour.DARK_BLUE_COLOUR
            choice.style.backgroundColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR : Colour.WHITE_COLOUR
            choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
        })
    }

    // modify choice background-color and cursor by mouseover
    changeChoiceStylesByMouseover(choices, optionIndex) {
        if (optionIndex >= 0 && choices[optionIndex].style.backgroundColor !== Colour.DARK_BLUE_COLOUR) {
            choices[optionIndex].style.color = Colour.WHITE_COLOUR
            choices[optionIndex].style.backgroundColor = Colour.LIGHT_BLUE_COLOUR
            choices[optionIndex].style.cursor = 'pointer'
        }
    }

    // modify choice background-color and cursor by mouseout
    changeChoiceStylesByMouseout(choices) {
        choices.forEach(function (choice, choiceIndex) {
            if (choiceIndex >= 0 && choice.style.backgroundColor !== Colour.DARK_BLUE_COLOUR) {
                choice.style.color = Colour.DARK_BLUE_COLOUR
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