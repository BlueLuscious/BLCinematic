window.addEventListener('DOMContentLoaded', function () {

    const COLOR1 = 'rgb(6, 33, 74)'
    const navbarItems = Array.from(document.getElementsByClassName('header_navbar_td'))

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



    })




    // ANDA, MEJORAR!!!!!
    const trendingSections = Array.from(document.getElementsByClassName('trending_section'))
    const trendingOptions = Array.from(document.getElementsByClassName('choose_content_option'))
    const trendingChoices = Array.from(document.getElementsByClassName('content_choice'))

    trendingSections.forEach(function (section, index) {
        if (index != 0) {
            section.style.display = 'none'
        }
    })

    trendingOptions.forEach(function(options, index) {
        options.addEventListener('click', function () {

            if (index == 0) {
                trendingChoices[0].style.color = 'rgb(255, 255, 255)'
                trendingChoices[0].style.backgroundColor = 'rgb(17, 60, 124)'
                trendingChoices[0].style.cursor = 'default'
                trendingChoices[1].style.color = 'rgb(17, 60, 124)'
                trendingChoices[1].style.backgroundColor = 'rgb(255, 255, 255)'
                trendingChoices[1].style.cursor = 'pointer'
                
                trendingSections[0].style.display = 'block'
                trendingSections[1].style.display = 'none'
            }

            if (index >= 1) {
                if (index == 1){
                    trendingChoices[0].style.color = 'rgb(17, 60, 124)'
                    trendingChoices[0].style.backgroundColor = 'rgb(255, 255, 255)'
                    trendingChoices[0].style.cursor = 'pointer'
                    trendingChoices[1].style.color = 'rgb(255, 255, 255)'
                    trendingChoices[1].style.backgroundColor = 'rgb(17, 60, 124)'
                    trendingChoices[1].style.cursor = 'default'
                    
                    trendingSections[0].style.display = 'none'
                    trendingSections[1].style.display = 'block'
                }

            }
        })
    })




})