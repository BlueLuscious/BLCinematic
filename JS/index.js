document.addEventListener('DOMContentLoaded', function () {

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

    // REDIRECTIONS BY CLICK MOVIES OR SERIES (URLPARAMS) //
    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const mains = Array.from(document.getElementsByClassName('main_divs'))

    if (window.location.pathname === '/HTML/movies.html' && window.location.search === '') {
        mains.forEach(function (main, index) {
            if (index != 0) {
                main.style.display = 'none'
            }
        })
    }

    if (window.location.pathname === '/HTML/movies.html' && window.location.search === `?indexCard=${indexCard}`) {
        mains.forEach(function (main, index) {
            if (index != 1) {
                main.style.display = 'none'
            }
        })
    }

    if (window.location.pathname === '/HTML/tvShows.html' && window.location.search === '') {
        mains.forEach(function (main, index) {
            if (index != 0) {
                main.style.display = 'none'
            }
        })
    }

    if (window.location.pathname === '/HTML/tvShows.html' && window.location.search === `?indexCard=${indexCard}`) {
        mains.forEach(function (main, index) {
            if (index != 1) {
                main.style.display = 'none'
            }
        })
    }
    // REDIRECTIONS BY CLICK MOVIES OR SERIES (URLPARAMS) //

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
                if (window.innerWidth <= 1600 && index > 0) {
                    this.style.fontSize = '1.35em'
                } else if (window.innerWidth > 1600 && index > 0) {
                    this.style.fontSize = '1.6em'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index != 1) {
                    this.style.fontSize = '1.6em'
                }
            }
            if (window.location.pathname === '/HTML/tvShows.html') {
                if (index != 2) {
                    this.style.fontSize = '1.6em'
                }
            }
        })

        navbarItem.addEventListener('mouseout', function () {
            if (window.location.pathname === '/HTML/index.html') {
                if (window.innerWidth <= 1600 && index > 0) {
                    this.style.fontSize = '1.25em'
                } else if (window.innerWidth > 1600 && index > 0) {
                    this.style.fontSize = '1.5em'
                }
            }
            if (window.location.pathname === '/HTML/movies.html') {
                if (index != 1) {
                    this.style.fontSize = '1.5em'
                }
            }
            if (window.location.pathname === '/HTML/tvShows.html') {
                if (index != 2) {
                    this.style.fontSize = '1.5em'
                }
            }
        })
        // NAVBAR ITEMS COLOR --> BY REDIRECTIONS //
    })

    // CHOOSING THINGS //
    const trendingSections = Array.from(document.getElementsByClassName('trending_section'))
    const contentOptions = Array.from(document.getElementsByClassName('choose_content_option'))
    const contentChoices = Array.from(document.getElementsByClassName('content_choice'))
    const timeOptions = Array.from(document.getElementsByClassName('choose_time_option'))
    const timeChoices = Array.from(document.getElementsByClassName('time_choice'))

    // predifine section display (index 0)
    trendingSections.forEach(function (section, index) {
        if (index != 0) {
            section.style.display = 'none'
        }
    })

    // predifine choices background-color (index 0)
    contentChoices.forEach(function (choice, index) {
        if (index == 0) {
            choice.style.backgroundColor = 'rgb(17, 60, 124)'
            content_0 = true
        }
    })

    timeChoices.forEach(function (choice, index) {
        if (index == 0) {
            choice.style.backgroundColor = 'rgb(17, 60, 124)'
            time_0 = true
        }
    })

    // choose content //
    contentOptions.forEach(function (option, optionIndex) {
        // modify choice background-color, cursor and sections display by click
        option.addEventListener('click', function () {
            if (optionIndex == 0) {
                contentChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                content_0 = true

                trendingSections.forEach(function (section) {
                    section.style.display = 'none'
                })

                if (time_0) {
                    trendingSections[0].style.display = 'block'
                } else if (time_1) {
                    trendingSections[3].style.display = 'block'
                }
            } else {
                content_0 = false
            }

            if (optionIndex == 1) {
                contentChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                content_1 = true

                trendingSections.forEach(function (section) {
                    section.style.display = 'none'
                })

                if (time_0) {
                    trendingSections[1].style.display = 'block'
                } else if (time_1) {
                    trendingSections[4].style.display = 'block'
                }
            } else {
                content_1 = false
            }

            if (optionIndex == 2) {
                contentChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                content_2 = true

                trendingSections.forEach(function (section) {
                    section.style.display = 'none'
                })

                if (time_0) {
                    trendingSections[2].style.display = 'block'
                } else if (time_1) {
                    trendingSections[5].style.display = 'block'
                }
            } else {
                content_2 = false
            }
        })

        // modify choice background-color and cursor by mouseover
        option.addEventListener('mouseover', function () {
            if (optionIndex >= 0 && contentChoices[optionIndex].style.backgroundColor !== 'rgb(17, 60, 124)') {
                contentChoices[optionIndex].style.color = 'rgb(255, 255, 255)'
                contentChoices[optionIndex].style.backgroundColor = 'rgb(134, 174, 235)'
                contentChoices[optionIndex].style.cursor = 'pointer'
            }
        })

        // modify choice background-color and cursor by mouseout
        option.addEventListener('mouseout', function () {
            contentChoices.forEach(function (choice, choiceIndex) {
                if (choiceIndex >= 0 && choice.style.backgroundColor !== 'rgb(17, 60, 124)') {
                    choice.style.color = 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = 'rgb(255, 255, 255)'
                    choice.style.cursor = 'pointer'
                }
            })
        })
    })
    // choose content //

    // choose time //
    timeOptions.forEach(function (option, optionIndex) {
        // modify choice background-color, cursor and sections display by click
        option.addEventListener('click', function () {
            if (optionIndex == 0) {
                timeChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                time_0 = true

                trendingSections.forEach(function (section) {
                    section.style.display = 'none'
                })

                if (content_0) {
                    trendingSections[0].style.display = 'block'
                }

                if (content_1) {
                    trendingSections[1].style.display = 'block'
                }

                if (content_2) {
                    trendingSections[2].style.display = 'block'
                }
            } else {
                time_0 = false
            }

            if (optionIndex == 1) {
                timeChoices.forEach(function (choice, choiceIndex) {
                    choice.style.color = choiceIndex === optionIndex ? 'rgb(255, 255, 255)' : 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = choiceIndex === optionIndex ? 'rgb(17, 60, 124)' : 'rgb(255, 255, 255)'
                    choice.style.cursor = choiceIndex === optionIndex ? 'default' : 'pointer'
                })

                time_1 = true

                trendingSections.forEach(function (section) {
                    section.style.display = 'none'
                })

                if (content_0) {
                    trendingSections[3].style.display = 'block'
                }

                if (content_1) {
                    trendingSections[4].style.display = 'block'
                }

                if (content_2) {
                    trendingSections[5].style.display = 'block'
                }
            } else {
                time_1 = false
            }
        })

        // modify choice background-color and cursor by mouseover
        option.addEventListener('mouseover', function () {
            if (optionIndex >= 0 && timeChoices[optionIndex].style.backgroundColor !== 'rgb(17, 60, 124)') {
                timeChoices[optionIndex].style.color = 'rgb(255, 255, 255)'
                timeChoices[optionIndex].style.backgroundColor = 'rgb(134, 174, 235)'
                timeChoices[optionIndex].style.cursor = 'pointer'
            }
        })

        // modify choice background-color and cursor by mouseout
        option.addEventListener('mouseout', function () {
            timeChoices.forEach(function (choice, choiceIndex) {
                if (choiceIndex >= 0 && choice.style.backgroundColor !== 'rgb(17, 60, 124)') {
                    choice.style.color = 'rgb(17, 60, 124)'
                    choice.style.backgroundColor = 'rgb(255, 255, 255)'
                    choice.style.cursor = 'pointer'
                }
            })
        })
    })
    // choose time //
    // CHOOSING THINGS //

    // SCROLL TOP BUTTON //
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
    // SCROLL TOP BUTTON //
})