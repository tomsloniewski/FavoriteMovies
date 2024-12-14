function addMovie() {
    var movieTitle = document.getElementById("inputTitle").value;
    var year = document.getElementById("inputYear").value;
    var actors = document.getElementById("inputActors").value;

    if(Number.isNaN(year) || year.length == 0 ) {
        alert("Year is not a number")
        return
    }
    if(!movieTitle.length || !actors.length) {
        alert("Please fill all the inputs")
        return
    }

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox' class='movListElem'> " + movieTitle + ", " + year + ", " + actors;
    document.getElementById("moviesList").appendChild(li)
    clearInputs()
}

function deleteMovies() {
    var moviesChecked = document.querySelectorAll("input[type='checkbox'].movListElem:checked")
    if(!moviesChecked.length) {
        alert("No movies were selected to delete.")
    }
    moviesChecked.forEach(checkbox => {
        document.getElementById("moviesList").removeChild(checkbox.parentNode)
    });
}

function clearInputs() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputActors").value = "";

}