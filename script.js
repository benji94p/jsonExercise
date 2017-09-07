let link = "movies.json";
let container = document.querySelector('.container');

console.log(link);

function getData(link){
    fetch(link)
        .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        data.forEach(createMovieCard);
        //Now we can show products

    })
}

getData(link);

let movieTemplate = document.querySelector('.templateMovie').content;

function createMovieCard(card) {
    console.log(link);
    let cloneMovies = movieTemplate.cloneNode(true);
    cloneMovies.querySelector('.title').textContent = card.title;
    cloneMovies.querySelector('.length').textContent = card.length;
    cloneMovies.querySelector('.gender').textContent = card.gender;
    cloneMovies.querySelector('.des').textContent = card.des;
    cloneMovies.querySelector('.director').textContent = card.director;
    cloneMovies.querySelector('.stars').textContent = card.stars;
    container.appendChild(cloneMovies);
}
