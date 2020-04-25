
const  END_POINT = 'https://my-json-server.typicode.com/jorgeantoniotj/movies-react/' ;

class MoviesService{
    getMovies(){
        return fetch(END_POINT+ 'movies').then(response => response.json());
    }
}

export default MoviesService;