import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm"
import MoviesList from "./MoviesList"


function App() {

    const [movies, setMovies] = useState([]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <MoviesList movies={movies}/>
            <h2>Add movie</h2>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
        </div>
    );
}

export default App;
