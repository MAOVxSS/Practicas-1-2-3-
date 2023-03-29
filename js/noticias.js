
let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_desc = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')

let header = document.querySelector('.header')
let toggleMenu = document.querySelector('.bar')
let menu = document.querySelector('nav ul')

const toggle = (e) => {
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('activeMenu')
}

toggleMenu.addEventListener('click', toggle)


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky')
    }
    else {
        header.classList.remove('sticky')
    }
})
// fetching news data from a website providing api

// const apiKey = "0ccc3de1108042e69de905399ce3727c"
const apiKey = "1b13aa1a52c440409ee0647c4ef57dc2"

const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}
// fetchData('general',5)

//añadir las noticias urgentes

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
    breakingNews_desc.innerHTML = `${data[0].description}`
}
fetchData('general', 5).then(add_breakingNews)

const add_topNews = (data) => {
    let html = ''
    let title = ''
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="news">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    topNews.innerHTML = html
}
fetchData('general', 5).then(add_topNews)
// fetchData('sports', 5).then(add_sportsNews)

//!Funcion para el modo oscuro
const ibdark = document.getElementById('ibdark');
let bdark = ibdark.checked;
const body = document.querySelector('body');

ibdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store('false');

    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}