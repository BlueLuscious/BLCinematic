window.addEventListener('DOMContentLoaded', function () {

    const COLOR1 = 'rgb(6, 33, 74)'
    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))

    // REDIRECTIONS //
    if (window.location.pathname === '/HTML/index.html') {
        navbarItems[0].style.color = COLOR1
        navbarItems[0].style.borderBottomColor = COLOR1
        navbarItems[0].style.cursor = 'default'
    }
    if (window.location.pathname === '/HTML/movies.html') {
        navbarItems[1].style.color = COLOR1
        navbarItems[1].style.borderBottomColor = COLOR1
        navbarItems[1].style.cursor = 'default'
    }
    if (window.location.pathname === '/HTML/tvShows.html') {
        navbarItems[2].style.color = COLOR1
        navbarItems[2].style.borderBottomColor = COLOR1
        navbarItems[2].style.cursor = 'default'
    }
    // REDIRECTIONS //

    // NAVBAR ITEMS COLOR --> BY REDIRECTIONS //
    navbarItems.forEach(function (navbarItem, index) {
        navbarItem.addEventListener('click', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (index == 1) {
                    window.location.href = 'movies.html'
                }
                if (index == 2) {
                    window.location.href = 'tvShows.html'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index == 0) {
                    window.location.href = 'index.html'
                }
                if (index == 2) {
                    window.location.href = 'tvShows.html'
                }
            }
            if (window.location.pathname === '/HTML/tvShows.html') {
                if (index == 0) {
                    window.location.href = 'index.html'
                }
                if (index == 1) {
                    window.location.href = 'movies.html'
                }
            }
        })

        navbarItem.addEventListener('mouseover', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (index > 0) {
                    this.style.fontSize = '1.6em'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index != 1) {
                    this.style.fontSize = '1.6em'
                }
            }
            if (window.location.pathname === '/HTML/tvShows.html') {
                if (index < 2) {
                    this.style.fontSize = '1.6em'
                }
            }
        })

        navbarItem.addEventListener('mouseout', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (index > 0) {
                    this.style.fontSize = '1.5em'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index != 1) {
                    this.style.fontSize = '1.5em'
                }
            }
            if (window.location.pathname === '/HTML/tvShows.html') {
                if (index < 2) {
                    this.style.fontSize = '1.5em'
                }
            }
        })
        // NAVBAR ITEMS COLOR --> BY REDIRECTIONS //
    })



    // CHOOSE CONTENT //
    const trendingSections = Array.from(document.getElementsByClassName('trending_section'))
    const trendingOptions = Array.from(document.getElementsByClassName('choose_content_option'))
    const trendingChoices = Array.from(document.getElementsByClassName('content_choice'))

    // predifine section display (index 0)
    trendingSections.forEach(function (section, index) {
        if (index != 0) {
            section.style.display = 'none'
        }
    })

    // predifine choice background-color (index 0)
    trendingChoices.forEach(function (choice, index) {
        if (index == 0) {
            choice.style.backgroundColor = 'rgb(17, 60, 124)'
        }
    })


    trendingOptions.forEach(function (option, optionIndex) {
        // modify choice background-color and cursor by click
        option.addEventListener('click', function () {
            if (optionIndex == 0) {
                trendingChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                trendingSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }

            if (optionIndex == 1) {
                trendingChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                trendingSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }

            if (optionIndex == 2) {
                trendingChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                trendingSections.forEach(function (section, sectionIndex) {
                    section.style.display = sectionIndex === optionIndex ? 'block' : 'none'
                })
            }
        })

        // modify choice background-color and cursor by mouseover
        option.addEventListener('mouseover', function () {
            if (optionIndex >= 0 && trendingChoices[optionIndex].style.backgroundColor !== 'rgb(17, 60, 124)') {
                trendingChoices[optionIndex].style.color = 'rgb(255, 255, 255)'
                trendingChoices[optionIndex].style.backgroundColor = 'rgb(134, 174, 235)'
                trendingChoices[optionIndex].style.cursor = 'pointer'
            }
        })

        // modify choice background-color and cursor by mouseout
        option.addEventListener('mouseout', function () {
            trendingChoices.forEach(function (choice, choiceIndex) {
                if (choiceIndex >= 0 && choice.style.backgroundColor !== 'rgb(17, 60, 124)') {
                    choice.style.color = 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = 'rgb(255, 255, 255)'
                    choice.style.cursor = 'pointer'
                }
            })
        })
    })
    // CHOOSE CONTENT //




})