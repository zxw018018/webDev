movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
]
movies.forEach(function(movie){
    result = "You have ";
    if (movie.hasWatched){
        result = result + "watched ";
    }
    else{
        result = result + "not seen ";
    }
    result = result + "\"" + movie.title + "\" - " + movie.rating + " stars";
    console.log(result);
})