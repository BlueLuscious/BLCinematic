import { Colour, Cursor, Display, Pathname, Template } from "./constants.js"

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
    chooseMoviesOrSeries(options, choices, sections, functions) {
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

    // select trending content and time
    selectTrending(options, options_2, sections, trendingContents, functions) {
        options.addEventListener('change', function () {
            functions[4](sections)

            if (options.length == 3){
                if (options.value === trendingContents[0]) {
                    if (options_2.value === trendingContents[3]) {
                        sections[0].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[4]) {
                        sections[3].style.display = Display.DISPLAY_BLOCK
                    }
                }
                if (options.value === trendingContents[1]) {
                    if (options_2.value === trendingContents[3]) {
                        sections[1].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[4]) {
                        sections[4].style.display = Display.DISPLAY_BLOCK
                    }
                }
                if (options.value === trendingContents[2]) {
                    if (options_2.value === trendingContents[3]) {
                        sections[2].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[4]) {
                        sections[5].style.display = Display.DISPLAY_BLOCK
                    }
                }
            }

            if (options.length == 2) {
                if (options.value === trendingContents[3]) {
                    if (options_2.value === trendingContents[0]) {
                        sections[0].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[1]) {
                        sections[1].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[2]) {
                        sections[2].style.display = Display.DISPLAY_BLOCK
                    }
                }
                if (options.value === trendingContents[4]) {
                    if (options_2.value === trendingContents[0]) {
                        sections[3].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[1]) {
                        sections[4].style.display = Display.DISPLAY_BLOCK
                    }
                    if (options_2.value === trendingContents[2]) {
                        sections[5].style.display = Display.DISPLAY_BLOCK
                    }
                }
            }

        })
    }

    // select movies and series content
    selectMoviesOrSeries(options, sections, contents, functions) {
        options.addEventListener('change', function () {
            functions[4](sections)

            if (options.value === contents[0]) {
                sections[0].style.display = Display.DISPLAY_BLOCK
            }
            if (options.value === contents[1]) {
                sections[1].style.display = Display.DISPLAY_BLOCK
            }
            if (options.value === contents[2]) {
                sections[2].style.display = Display.DISPLAY_BLOCK
            }
            if (options.value === contents[3]) {
                sections[3].style.display = Display.DISPLAY_BLOCK
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

        items.forEach(function (item, index) {
            item.addEventListener('click', function () {
                if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
                    if (index == templateRedirects[currentTemplate][0]) {
                        window.location.href = Template.INDEX_TEMPLATE
                    }
                    if (index == templateRedirects[currentTemplate][1]) {
                        window.location.href = Template.MOVIES_TEMPLATE
                    }
                    if (index == templateRedirects[currentTemplate][2]) {
                        window.location.href = Template.SERIES_TEMPLATE
                    }
                }
            })
        })
    }

    // scroll top button
    scrollToTop() {
        const scrollToTop = document.getElementById('scrollToTop')

        scrollToTop.style.display = Display.DISPLAY_NONE
    
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 890 || document.documentElement.scrollTop > 890) {
                scrollToTop.disabled = false
                scrollToTop.style.cursor = Cursor.POINTER_CURSOR
                setTimeout(() => {
                    scrollToTop.style.transition = 'opacity 0.5s ease-in-out'
                    scrollToTop.style.opacity = 1
                }, 1000)
                scrollToTop.style.display = Display.DISPLAY_BLOCK
            } else {
                scrollToTop.disabled = true
                scrollToTop.style.cursor = Cursor.DEFAULT_CURSOR
                setTimeout(() => {
                    scrollToTop.style.transition = 'opacity 0.5s ease-in-out'
                    scrollToTop.style.opacity = 0
                }, 1000)
            }
        })
    
        scrollToTop.addEventListener('click', function () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        })
    }

}

export class Styles {

    // predifine choices background-colour (index 0)
    setChoiceColour(choices) {
        choices.forEach(function (choice, index) {
            if (index == 0) {
                choice.style.backgroundColor = Colour.DARK_BLUE_COLOUR_2
            }
        })
    }

    // modify choices background-colour and cursor by click
    changeChoiceStylesByClick(choices, optionIndex) {
        choices.forEach(function (choice, choiceIndex) {
            choice.style.color = choiceIndex === optionIndex ? Colour.WHITE_COLOUR : Colour.DARK_BLUE_COLOUR_2
            choice.style.borderColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.DARK_BLUE_COLOUR_2
            choice.style.backgroundColor = choiceIndex === optionIndex ? Colour.DARK_BLUE_COLOUR_2 : Colour.WHITE_COLOUR
            choice.style.cursor = choiceIndex === optionIndex ? Cursor.DEFAULT_CURSOR : Cursor.POINTER_CURSOR
        })
    }

    // modify choice background-colour and cursor by mouseover
    changeChoiceStylesByMouseover(choices, optionIndex) {
        if (optionIndex >= 0 && choices[optionIndex].style.backgroundColor !== Colour.DARK_BLUE_COLOUR_2) {
            choices[optionIndex].style.color = Colour.WHITE_COLOUR
            choices[optionIndex].style.borderColor = Colour.WHITE_COLOUR
            choices[optionIndex].style.backgroundColor = Colour.LIGHT_BLUE_COLOUR
            choices[optionIndex].style.cursor = Cursor.POINTER_CURSOR
        }
    }

    // modify choice background-colour and cursor by mouseout
    changeChoiceStylesByMouseout(choices) {
        choices.forEach(function (choice, choiceIndex) {
            if (choiceIndex >= 0 && choice.style.backgroundColor !== Colour.DARK_BLUE_COLOUR_2) {
                choice.style.color = Colour.DARK_BLUE_COLOUR_2
                choice.style.borderColor = Colour.DARK_BLUE_COLOUR_2
                choice.style.backgroundColor = Colour.WHITE_COLOUR
                choice.style.cursor = Cursor.POINTER_CURSOR
            }
        })
    }
    
    // navbar items colour by URL
    setNavItemStylesByURL(currentTemplate, navItem) {
        if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
            navItem.style.color = Colour.DARK_BLUE_COLOUR
            navItem.style.borderBottomColor = Colour.DARK_BLUE_COLOUR
            navItem.style.cursor = Cursor.DEFAULT_CURSOR
        }
    }


    // change font-size by some event listener
    changeFontSizeByListener(items, currentTemplate, listener, size) {
        const templateIndex = {
            [Template.INDEX_TEMPLATE]: 0,
            [Template.MOVIES_TEMPLATE]: 1,
            [Template.SERIES_TEMPLATE]: 2,
        }

        items.forEach(function (item, index) {
            item.addEventListener(listener, function () {
                if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
                    if (window.innerWidth <= 1600 && index != templateIndex[currentTemplate]) {
                        this.style.fontSize = size
                    } else if (window.innerWidth > 1600 && index != templateIndex[currentTemplate]) {
                        this.style.fontSize = size
                    }
                }
            })
        })
    }

}

export class Toolbox {

    // predifine section display (index 0)
    setSectionIndex0(sections) {
        sections.forEach(function (section, index) {
            if (index != 0) {
                section.style.display = Display.DISPLAY_NONE
            }
        })
    }

    // hide all sections
    hideAllSections(sections) {
        sections.forEach(function (section) {
            section.style.display = Display.DISPLAY_NONE
        })
    }

    // show one section with if
    showOneSection(section, choiceType) {
        if (choiceType) {
            section.style.display = Display.DISPLAY_BLOCK
        }
    }

    // hide or show something
    displaySomething(things, display) {
        things.forEach(function (thing) {
            thing.style.display = display
        })
    }

    // hide or show navbar by listener
    displayNavbarByListener(button, expandableNavbar, display, listener) {
        button.addEventListener(listener, function () {
            expandableNavbar.style.display = display
        })
    }

    // modify sections display
    changeSectionDisplay(sections, optionIndex) {
        sections.forEach(function (section, sectionIndex) {
            section.style.display = sectionIndex === optionIndex ? Display.DISPLAY_BLOCK : Display.DISPLAY_NONE
        })
    }

    // add classname to an array
    addClassListToArray(things, classname) {
        things.forEach(function(thing) {
            thing.classList.add(classname)
        })
    }

    // remove attribute to an array
    removeAttributeToArray(things, attr) {
        things.forEach(function(thing) {
            thing.removeAttribute(attr)
        })
    }

    // hide/show section from a URL based on the clicked card
    showSectionByURL(currentTemplate, currentSearches, sections) {
        if (window.location.pathname === Pathname.HTML_FOLDER + currentTemplate) {
            sections.forEach(function (section, index) {
                if (index != 0 && window.location.search === currentSearches[0]) {
                    section.style.display = Display.DISPLAY_NONE
                }
                if (index != 1 && window.location.search === currentSearches[1]) {
                    section.style.display = Display.DISPLAY_NONE
                }
            })
        }
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

    // load footer
    loadFooter() {
        const footer = document.getElementById('id_footer')
        footer.style.display = Display.DISPLAY_BLOCK
    }

}