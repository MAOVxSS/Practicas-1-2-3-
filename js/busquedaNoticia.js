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

const apiKey = "0ccc3de1108042e69de905399ce3727c"

const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles

}

//!Busqueda de noticias

const searchBtn = document.getElementById("searchBtn");

const inputValue = document.getElementById("newsQuery");

const newsResults = document.querySelector('.newsResults')

// función para agregar las noticias encontradas
const add_newsResults = (data) => {
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
    newsResults.innerHTML = html
}
//fetchData('general', 3).then(add_newsResults)


// función para buscar noticias
const searchNews = () => {
    const query = inputValue.value.trim()
    if (query) {
        const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=0ccc3de1108042e69de905399ce3727c`
        fetch(url)
            .then(response => response.json())
            .then(data => add_newsResults(data.articles))
            .catch(error => console.log(error))
    }
}
// agregamos el evento al botón de búsqueda
searchBtn.addEventListener('click', searchNews)

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
