import { Colour } from "./constants.js"

export class Interactivity {
    // choose content
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

    // predifine section display (index 0)
    setDisplaySection(sections) {
        sections.forEach(function (section, index) {
            if (index != 0) {
                section.style.display = 'none'
            }
        })
    }

    // modify sections display
    changeSectionDisplay(sections, optionIndex) {
        sections.forEach(function (section, sectionIndex) {
            section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
        })
    }
}

export class Styles {
    // predifine choices background-color (index 0)
    setColorChoice(choices) {
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