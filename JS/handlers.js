import { ApiContents, Category, Colour, Cursor, Display, Pathname, Template } from "./constants.js"

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

    // bind movies/series choices and selects
    bindMoviesAndSeriesInteractions(selectMS, optionMS, choiceMS) {
        optionMS.forEach((option, optionIndex) => {
            option.addEventListener('click', () => {
                optionIndex >= 0 ? selectMS[optionIndex].selected = true : selectMS[optionIndex].selected = false
            })
        })

        const movies = {
            [ApiContents.MOVIES_NOW_PLAYING]: 0,
            [ApiContents.MOVIES_POPULAR]: 1,
            [ApiContents.MOVIES_TOP_RATED]: 2,
            [ApiContents.MOVIES_UPCOMING]: 3,
        }

        const series = {
            [ApiContents.SERIES_AIRING_TODAY]: 0,
            [ApiContents.SERIES_ON_THE_AIR]: 1,
            [ApiContents.SERIES_POPULAR]: 2,
            [ApiContents.SERIES_TOP_RATED]: 3,
        }

        selectMS.addEventListener('change', () => {
            selectMS.value === ApiContents.MOVIES_NOW_PLAYING ? this.styles.changeChoiceStyles(choiceMS, movies[selectMS.value]) : false
            selectMS.value === ApiContents.SERIES_AIRING_TODAY ? this.styles.changeChoiceStyles(choiceMS, series[selectMS.value]) : false

            selectMS.value === ApiContents.MOVIES_POPULAR ? this.styles.changeChoiceStyles(choiceMS, movies[selectMS.value]) : false
            selectMS.value === ApiContents.SERIES_ON_THE_AIR ? this.styles.changeChoiceStyles(choiceMS, series[selectMS.value]) : false

            selectMS.value === ApiContents.MOVIES_TOP_RATED ? this.styles.changeChoiceStyles(choiceMS, movies[selectMS.value]) : false
            selectMS.value === ApiContents.SERIES_POPULAR ? this.styles.changeChoiceStyles(choiceMS, series[selectMS.value]) : false

            selectMS.value === ApiContents.MOVIES_UPCOMING ? this.styles.changeChoiceStyles(choiceMS, movies[selectMS.value]) : false
            selectMS.value === ApiContents.SERIES_TOP_RATED ? this.styles.changeChoiceStyles(choiceMS, series[selectMS.value]) : false
        })

    }

    // bind trending choices and selects
    bindTrendingInteractions(selectT, optionT, choiceT) {
        optionT.forEach((option, optionIndex) => {
            option.addEventListener('click', () => {
                if (optionT.length === 3) {
                    optionIndex >= 0 ? selectT[optionIndex].selected = true : selectT[optionIndex].selected = false
                }

                if (optionT.length === 2) {
                    optionIndex >= 0 ? selectT[optionIndex].selected = true : selectT[optionIndex].selected = false
                }
            })
        })

        const content = {
            [ApiContents.TRENDING_ALL]: 0,
            [ApiContents.TRENDING_MOVIES]: 1,
            [ApiContents.TRENDING_SERIES]: 2,
        }

        const time = {
            [ApiContents.TRENDING_DAY]: 0,
            [ApiContents.TRENDING_WEEK]: 1,
        }

        selectT.addEventListener('change', () => {
            if (selectT.length === 3) {
                selectT.value === ApiContents.TRENDING_ALL ? content_0 = true : content_0 = false
                selectT.value === ApiContents.TRENDING_MOVIES ? content_1 = true : content_1 = false
                selectT.value === ApiContents.TRENDING_SERIES ? content_2 = true : content_2 = false

                selectT.value === ApiContents.TRENDING_ALL ? this.styles.changeChoiceStyles(choiceT, content[selectT.value]) : false
                selectT.value === ApiContents.TRENDING_MOVIES ? this.styles.changeChoiceStyles(choiceT, content[selectT.value]) : false
                selectT.value === ApiContents.TRENDING_SERIES ? this.styles.changeChoiceStyles(choiceT, content[selectT.value]) : false
            }
    
            if (selectT.length === 2) {
                selectT.value === ApiContents.TRENDING_DAY ? time_0 = true : time_0 = false
                selectT.value === ApiContents.TRENDING_WEEK ? time_1 = true : time_1 = false
                
                selectT.value === ApiContents.TRENDING_DAY ? this.styles.changeChoiceStyles(choiceT, time[selectT.value]) : false
                selectT.value === ApiContents.TRENDING_WEEK ? this.styles.changeChoiceStyles(choiceT, time[selectT.value]) : false
            }
        })    
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

    // scroll top button
    scrollToTop(button) {
        window.addEventListener('scroll', () => {
            const shouldShowButton = window.scrollY > 890
            button.disabled = !shouldShowButton
            button.style.display = shouldShowButton ? Display.DISPLAY_BLOCK : false
            button.classList.toggle('active', shouldShowButton)
        })
    
        button.addEventListener('click', () => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
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

    // change choices styles
    changeChoiceStyles(choices, optionIndex) {
        choices.forEach((choice, choiceIndex) => {
            choice.style.color = choiceIndex === optionIndex ? Colour.WHITE_COLOUR : Colour.DARK_BLUE_COLOUR_2
            choice.style.borderColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.DARK_BLUE_COLOUR_2
            choice.style.backgroundColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.WHITE_COLOUR
            choice.style.cursor = choiceIndex === optionIndex ? Cursor.DEFAULT_CURSOR : Cursor.POINTER_CURSOR
        })
    }

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
        const urlParams = new URLSearchParams(window.location.search)
        const category = urlParams.get('category')
        const [year, month, day] = date.split('-')

        if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
            const months = ['Invalid', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const monthAbbr = months[Number(month)] || 'Invalid'
            return `${monthAbbr} ${day}, ${year}`
        } 
        
        if (Category.apiCategories.includes(category)) {
            return `${year}`
        }
        
    }

    // handle select arrow display
    handleSelectArrow(selects, selectsBox) {
        selects.forEach((select, index) => {
            select.addEventListener('click', () => toggleClasses(index))
          
            select.addEventListener('focusout', () => resetClasses(index))
          
            window.addEventListener('scroll', () => resetClasses(index))
          
            document.addEventListener('wheel', () => resetClasses(index))
          
            document.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') {
                    toggleClasses(index)
                }
            })
        })
          
        function toggleClasses(index) {
            selectsBox[index].classList.toggle('select_content_time')
            selectsBox[index].classList.toggle('select_content_time_2')
        }
          
        function resetClasses(index) {
            selectsBox[index].classList.remove('select_content_time_2')
            selectsBox[index].classList.add('select_content_time')
        }
    }

    // remove attribute to an array
    removeAttributeToArray(things, attr) {
        things.forEach((thing) => {
            thing.removeAttribute(attr)
        })
    }

    // remove pseudoelement after by classes
    removeAfterFromTables(things) {
        things.forEach((thing) => {
            thing.addEventListener('scroll', function() {
                const scrollLeft = thing.scrollLeft
                const scrollWidth = thing.scrollWidth
                const clientWidth = thing.clientWidth
                const scrollEnd = scrollWidth - clientWidth
            
                scrollLeft === scrollEnd ? thing.classList.add('at-scroll-end') : thing.classList.remove('at-scroll-end')
            })
        })
    }

    // reverse an array by indexes
    reverseArrayByIndex(myArray, cutValue, concatValue) {
        cutValue.length >= 2 ? cutValue = cutValue.slice(0, 2) : false
        concatValue.length >= 2 ? concatValue = concatValue.slice(0, 2) : false

        myArray = myArray.slice(...cutValue).reverse().concat(myArray.slice(...concatValue))
        return myArray
    }

}