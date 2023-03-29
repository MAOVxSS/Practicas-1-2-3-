
let techNews = document.querySelector('#techNews .newsBox')

//?Para buscar una noticia
const searchBtn = document.getElementById("searchBtn");
const newsQuery = document.getElementById("newsQuery");

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

const apiKey = "1b13aa1a52c440409ee0647c4ef57dc2"

const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles

}
// fetchData('general',5)

const add_techNews = (data) => {
    let html = ''
    let title = ''
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="newsCard">
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
    techNews.innerHTML = html
}
fetchData('technology', 5).then(add_techNews)

//!Busqueda de noticias

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
//fetchData('general', 20).then(add_newsResults)


// función para buscar noticias
const searchNews = () => {
    const query = newsQuery.value.trim()
    if (query) {
        const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`
        fetch(url)
            .then(response => response.json())
            .then(data => add_newsResults(data.articles))
            .catch(error => console.log(error))
    }
}
// agregamos el evento al botón de búsqueda
searchBtn.addEventListener('click', searchNews)

//!paginacion

// Esta función maneja el evento click del botón "Siguiente"
const handleNextClick = async () => {
    currentPage++;
    await fetchDataWithPage(currentPage);
};

// Esta función maneja el evento click del botón "Anterior"
const handlePrevClick = async () => {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    await fetchDataWithPage(currentPage);
};


// Esta función llama a la API con un número de página específico
const fetchDataWithPage = async (page) => {
    const category = 'technology';
    const pageSize = 5;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    add_techNews(response.articles);
};

// Agregar los event listeners a los botones "Siguiente" y "Anterior"
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
nextBtn.addEventListener('click', handleNextClick);
prevBtn.addEventListener('click', handlePrevClick);

// La página actual
let currentPage = 1;

// Llamar a fetchDataWithPage para obtener los datos iniciales
fetchDataWithPage(currentPage);

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