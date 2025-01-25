import {useState} from "react"

export default function MovieForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    function addMovie(event) {
        event.preventDefault();
        if (title.length < 5) {
            return alert('Tytuł jest za krótki');
        }
        props.onMovieSubmit({title, year})
        setYear('');
    }

    return (
        <form onSubmit={addMovie}>
            <div>
                <label>Tytuł</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                {title.length > 0 && <div>{message}</div>}
            </div>
            <div>
                <label>Rok nagrania</label>
                <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
            </div>
            <button>Dodaj film</button>
        </form>
    )
}