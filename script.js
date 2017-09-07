let link = "movies.json";

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
