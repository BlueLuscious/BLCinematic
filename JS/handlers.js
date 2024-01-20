import { ApiContents, Colour, Cursor, Display, Pathname, Template } from "./constants.js"

let content_0 = true
let content_1 = false
let content_2 = false
let time_0 = true
let time_1 = false
export class Interactivity {

    constructor() {
        this.styles = new Styles
        this.toolbox = new Toolbox
    }

    // choose trending content and time
    chooseTrending(options, choices, sections) {
        options.forEach((option, optionIndex) => {
            option.addEventListener('click', () => {
                this.toolbox.displayArray(sections, Display.DISPLAY_NONE)

                if (options.length == 3) {
                    optionIndex == 0 ? content_0 = true : content_0 = false
                    optionIndex == 1 ? content_1 = true : content_1 = false
                    optionIndex == 2 ? content_2 = true : content_2 = false
                    
                    optionIndex == 0 ? this.toolbox.displayOneThingIf(sections[0], time_0, Display.DISPLAY_BLOCK) : false
                    optionIndex == 0 ? this.toolbox.displayOneThingIf(sections[3], time_1, Display.DISPLAY_BLOCK) : false

                    optionIndex == 1 ? this.toolbox.displayOneThingIf(sections[1], time_0, Display.DISPLAY_BLOCK) : false
                    optionIndex == 1 ? this.toolbox.displayOneThingIf(sections[4], time_1, Display.DISPLAY_BLOCK) : false
            
                    optionIndex == 2 ? this.toolbox.displayOneThingIf(sections[2], time_0, Display.DISPLAY_BLOCK) : false
                    optionIndex == 2 ? this.toolbox.displayOneThingIf(sections[5], time_1, Display.DISPLAY_BLOCK) : false
                }

                if (options.length == 2) {
                    optionIndex == 0 ? time_0 = true : time_0 = false
                    optionIndex == 1 ? time_1 = true : time_1 = false

                    optionIndex == 0 ? this.toolbox.displayOneThingIf(sections[0], content_0, Display.DISPLAY_BLOCK) : false
                    optionIndex == 0 ? this.toolbox.displayOneThingIf(sections[1], content_1, Display.DISPLAY_BLOCK) : false
                    optionIndex == 0 ? this.toolbox.displayOneThingIf(sections[2], content_2, Display.DISPLAY_BLOCK) : false

                    optionIndex == 1 ? this.toolbox.displayOneThingIf(sections[3], content_0, Display.DISPLAY_BLOCK) : false
                    optionIndex == 1 ? this.toolbox.displayOneThingIf(sections[4], content_1, Display.DISPLAY_BLOCK) : false
                    optionIndex == 1 ? this.toolbox.displayOneThingIf(sections[5], content_2, Display.DISPLAY_BLOCK) : false
                }
            })
        })

        this.styles.changeChoiceStylesByClick(options, choices)
        this.styles.changeChoiceStylesByMouseover(options, choices)
        this.styles.changeChoiceStylesByMouseout(options, choices)
    }

    // choose movies and series content
    chooseMoviesOrSeries(options, choices, sections) {
        options.forEach((option, optionIndex) => {
            option.addEventListener('click', () => {
                this.toolbox.displayArrayValueByIndex(sections, optionIndex, Display.DISPLAY_BLOCK, Display.DISPLAY_NONE)
            })
        })

        this.styles.changeChoiceStylesByClick(options, choices)
        this.styles.changeChoiceStylesByMouseover(options, choices)
        this.styles.changeChoiceStylesByMouseout(options, choices)
    }

    // scroll top button
    scrollToTop(button) {
        button.style.display = Display.DISPLAY_NONE
        
        window.addEventListener('scroll', () => {
            const shouldShowButton = document.body.scrollTop > 890 || document.documentElement.scrollTop > 890
            button.disabled = !shouldShowButton
            button.style.cursor = shouldShowButton ? Cursor.POINTER_CURSOR : Cursor.DEFAULT_CURSOR
    
            setTimeout(() => {
                button.style.transition = 'opacity 0.5s ease-in-out'
                button.style.opacity = shouldShowButton ? 1 : 0
            }, 500)
            button.style.display = shouldShowButton ? Display.DISPLAY_BLOCK : false
        })
    
        button.addEventListener('click', () => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        })
    }

    // select trending content and time
    selectTrending(options, options_2, sections) {
        options.addEventListener('change', () => {
            this.toolbox.displayArray(sections, Display.DISPLAY_NONE)

            if (options.length == 3){
                if (options.value === ApiContents.TRENDING_ALL) {
                    options_2.value === ApiContents.TRENDING_DAY ? sections[0].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_WEEK ? sections[3].style.display = Display.DISPLAY_BLOCK : false
                }
                if (options.value === ApiContents.TRENDING_MOVIES) {
                    options_2.value === ApiContents.TRENDING_DAY ? sections[1].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_WEEK ? sections[4].style.display = Display.DISPLAY_BLOCK : false
                }
                if (options.value === ApiContents.TRENDING_SERIES) {
                    options_2.value === ApiContents.TRENDING_DAY ? sections[2].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_WEEK ? sections[5].style.display = Display.DISPLAY_BLOCK : false
                }
            }

            if (options.length == 2) {
                if (options.value === ApiContents.TRENDING_DAY) {
                    options_2.value === ApiContents.TRENDING_ALL ? sections[0].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_MOVIES ? sections[1].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_SERIES ? sections[2].style.display = Display.DISPLAY_BLOCK : false
                }
                if (options.value === ApiContents.TRENDING_WEEK) {
                    options_2.value === ApiContents.TRENDING_ALL ? sections[3].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_MOVIES ? sections[4].style.display = Display.DISPLAY_BLOCK : false
                    options_2.value === ApiContents.TRENDING_SERIES ? sections[5].style.display = Display.DISPLAY_BLOCK : false
                }
            }
        })
    }

    // select movies and series content
    selectMoviesOrSeries(options, sections) {
        options.addEventListener('change', () => {
            this.toolbox.displayArray(sections, Display.DISPLAY_NONE)

            options.value === ApiContents.MOVIES_NOW_PLAYING ? sections[0].style.display = Display.DISPLAY_BLOCK : false
            options.value === ApiContents.SERIES_AIRING_TODAY ? sections[0].style.display = Display.DISPLAY_BLOCK : false

            options.value === ApiContents.MOVIES_POPULAR ? sections[1].style.display = Display.DISPLAY_BLOCK : false
            options.value === ApiContents.SERIES_ON_THE_AIR ? sections[1].style.display = Display.DISPLAY_BLOCK : false

            options.value === ApiContents.MOVIES_TOP_RATED ? sections[2].style.display = Display.DISPLAY_BLOCK : false
            options.value === ApiContents.SERIES_POPULAR ? sections[2].style.display = Display.DISPLAY_BLOCK : false

            options.value === ApiContents.MOVIES_UPCOMING ? sections[3].style.display = Display.DISPLAY_BLOCK : false
            options.value === ApiContents.SERIES_TOP_RATED ? sections[3].style.display = Display.DISPLAY_BLOCK : false
        })
    }

    // redirects setted templates
    templateRedirects(items, currentTemplate) {
        const templateRedirects = {
            [Template.INDEX_TEMPLATE]: [null, 1, 2],
            [Template.MOVIES_TEMPLATE]: [0, null, 2],
            [Template.SERIES_TEMPLATE]: [0, 1, null],
        }

        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
                    index == templateRedirects[currentTemplate][0] ? window.location.href = Template.INDEX_TEMPLATE : false
                    index == templateRedirects[currentTemplate][1] ? window.location.href = Template.MOVIES_TEMPLATE : false
                    index == templateRedirects[currentTemplate][2] ? window.location.href = Template.SERIES_TEMPLATE : false
                }
            })
        })
    }

}

export class Styles {

    // modify background-colour and cursor by click
    changeChoiceStylesByClick(options, choices) {
        options.forEach((option, optionIndex) => {
            option.addEventListener('click', () => {
                choices.forEach((choice, choiceIndex) => {
                    choice.style.color = choiceIndex === optionIndex ? Colour.WHITE_COLOUR : Colour.DARK_BLUE_COLOUR_2
                    choice.style.borderColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.DARK_BLUE_COLOUR_2
                    choice.style.backgroundColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.WHITE_COLOUR
                    choice.style.cursor = choiceIndex === optionIndex ? Cursor.DEFAULT_CURSOR : Cursor.POINTER_CURSOR
                })
            })
        })
    }

    // modify background-colour and cursor by mouseout
    changeChoiceStylesByMouseout(options, choices) {
        options.forEach((option) => {
            option.addEventListener('mouseout', () => {
                choices.forEach((choice, choiceIndex) => {
                    if (choiceIndex >= 0 && choice.style.backgroundColor !== Colour.DARK_BLUE_COLOUR_2) {
                        choice.style.color = Colour.DARK_BLUE_COLOUR_2
                        choice.style.borderColor = Colour.DARK_BLUE_COLOUR_2
                        choice.style.backgroundColor = Colour.WHITE_COLOUR
                        choice.style.cursor = Cursor.POINTER_CURSOR
                    }
                })
            })
        })
    }

    // modify background-colour and cursor by mouseover
    changeChoiceStylesByMouseover(options, choices) {
        options.forEach((option, optionIndex) => {
            option.addEventListener('mouseover', () => {
                if (optionIndex >= 0 && choices[optionIndex].style.backgroundColor !== Colour.DARK_BLUE_COLOUR_2) {
                    choices[optionIndex].style.color = Colour.WHITE_COLOUR
                    choices[optionIndex].style.borderColor = Colour.WHITE_COLOUR
                    choices[optionIndex].style.backgroundColor = Colour.LIGHT_BLUE_COLOUR
                    choices[optionIndex].style.cursor = Cursor.POINTER_CURSOR
                }
            })
        })
    }

    // change font-size by some event listener
    changeFontSizeByListener(things, currentTemplate, listener, size) {
        const templateIndex = {
            [Template.INDEX_TEMPLATE]: 0,
            [Template.MOVIES_TEMPLATE]: 1,
            [Template.SERIES_TEMPLATE]: 2,
        }

        things.forEach((thing, index) => {
            thing.addEventListener(listener, function () {
                if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
                    index != templateIndex[currentTemplate] ? this.style.fontSize = size : false
                }
            })
        })
    }

    // predifine background-colour (index 0)
    setColourIndex0(things, colour) {
        things.forEach((thing, index) => {
            index == 0 ? thing.style.backgroundColor = colour : false
        })
    }
    
    // navbar items colour by URL
    setNavItemStylesByURL(navItem, currentTemplate) {
        if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
            navItem.style.color = Colour.DARK_BLUE_COLOUR
            navItem.style.borderBottomColor = Colour.DARK_BLUE_COLOUR
            navItem.style.cursor = Cursor.DEFAULT_CURSOR
        }
    }

}

export class Toolbox {

    // add classname to an array
    addClassListToArray(things, classname) {
        things.forEach((thing) => {
            thing.classList.add(classname)
        })
    }

    // hide/show something
    displayArray(things, display) {
        things.forEach((thing) => {
            thing.style.display = display
        })
    }

    // hide/show only index 0
    displayIndex0(things, display_1, display_2) {
        things.forEach((thing, index) => {
            index == 0 ? thing.style.display = display_1 : thing.style.display = display_2
        })
    }

    // hide/show one thing
    displayOneThing(thing, display) {
        thing.style.display = display
    }

    // hide/show one thing (conditional)
    displayOneThingIf(thing, conditional, display) {
        conditional ? thing.style.display = display : false
    }

    // modify sections display
    displayArrayValueByIndex(things, index, display_1, display_2) {
        things.forEach((thing, thingIndex) => {
            thing.style.display = thingIndex === index ? display_1 : display_2
        })
    }

    // hide/show section from a URL based on the clicked card
    displayArrayValueByURL(currentTemplate, currentSearch, things, display) {
        if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
            things.forEach((thing, index) => {
                index != 0 && window.location.search === '' ? thing.style.display = display : false
                index != 1 && window.location.search === currentSearch ? thing.style.display = display : false
            })
        }
    }

    // format date
    formatDate(date) {
        const [year, month, day] = date.split('-')
        const months = ['Invalid', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const monthAbbr = months[Number(month)] || 'Invalid'
        return `${monthAbbr} ${day}, ${year}`
    }

    // remove attribute to an array
    removeAttributeToArray(things, attr) {
        things.forEach((thing) => {
            thing.removeAttribute(attr)
        })
    }

    // reverse an array by indexes
    reverseArrayByIndex(miArray, cutValue, concatValue) {
        cutValue.length >= 2 ? cutValue = cutValue.slice(0, 2) : false
        concatValue.length >= 2 ? concatValue = concatValue.slice(0, 2) : false

        miArray = miArray.slice(...cutValue).reverse().concat(miArray.slice(...concatValue))
        return miArray
    }

}