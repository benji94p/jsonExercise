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

function createMovieCard(cat) {
    let cloneMovies = movieTemplate.cloneNode(true);
    cloneMovies.querySelector('.title').textContent = cat;
    container.appendChild(cloneMovies);
}
