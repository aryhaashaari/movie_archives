//Checks local storage if any movie is added to any lists 
function loadProgram() {
  if (localStorage.getItem('favorite') !== null) {
    var received = JSON.parse(localStorage.getItem('favorite')); for (i = 0; i < received.length; i++) {
      document.getElementById("favRow").innerHTML += "<div class='column'><div class='card'><img src=" + received[i].imgSrc + " alt='Image Not Found' class='coverImg'><h3>" + received[i].name + "</h3><p>" + received[i].year + "</p><p>" + received[i].director + "</p><p>" + received[i].genre + "</p></div></div>";
    }
  }
  if (localStorage.getItem('watched') !== null) {
    var received = JSON.parse(localStorage.getItem('watched')); for (i = 0; i < received.length; i++) {
      document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + received[i].imgSrc + " alt='Image Not Found' class='coverImg'><h3>" + received[i].name + "</h3><p>" + received[i].year + "</p><p>" + received[i].director + "</p><p>" + received[i].genre + "</p></div></div>";
    }
  }
  if (localStorage.getItem('next') !== null) {
    var received = JSON.parse(localStorage.getItem('next')); for (i = 0; i < received.length; i++) {
      document.getElementById("nextRow").innerHTML += "<div class='column'><div class='card'><img src=" + received[i].imgSrc + " alt='Image Not Found' class='coverImg'><h3>" + received[i].name + "</h3><p>" + received[i].year + "</p><p>" + received[i].director + "</p><p>" + received[i].genre + "</p></div></div>";
    }
  }
}
//Creates a list consisting of favorite movies 
var favMovies = [];
//Prompts the user when 'add' button is clicked and store the data inside the list 'favMovies' and local storage 
function addFavorite() {
  var movies = {
    name: prompt("Enter the name of the movie: "), year: prompt("Year: "),
    director: prompt("Director: "),
    genre: prompt("Genre: "),
    imgSrc: prompt("Movie cover link: ")
  };
  if (localStorage.getItem('favorite') != null) {
    favMovies = JSON.parse(localStorage.getItem('favorite')); favMovies.push(movies);
    localStorage.setItem('favorite', JSON.stringify(favMovies));
  } else {
    favMovies[favMovies.length] = movies;
    localStorage.setItem('favorite', JSON.stringify(favMovies));
  }
  addFavtoWatch(movies);
  document.getElementById("favRow").innerHTML += "<div class='column'><div class='card'><img src=" + movies.imgSrc + " alt='Image not found' class='coverImg'/><h3>" + movies.name + "</h3><p>" + movies.year + "</p><p>" + movies.director + "</p><p>" + movies.genre + "</p></div></div>";
}
//Creates a list consisting of watched movies
var watchedMovies = [];
//Prompts the user when 'add' button is clicked and store the data inside the list 'watchedMovies' and local storage 
function addWatched() {
  var movies = {
    name: prompt("Enter the name of the movie: "), year: prompt("Year: "),
    director: prompt("Director: "),
    genre: prompt("Genre: "),
    imgSrc: prompt("Movie cover link: ")
  };
  if (localStorage.getItem('watched') != null) {
    watchedMovies = JSON.parse(localStorage.getItem('watched')); watchedMovies.push(movies);
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  } else {
    watchedMovies[watchedMovies.length] = movies; localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }
  document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + movies.imgSrc + " alt='Image not found' class='coverImg'/><h3>" + movies.name + "</h3><p>" + movies.year + "</p><p>" + movies.director + "</p><p>" + movies.genre + "</p></div></div>";
}
// add the movie added to favMovies to watchedMovies 
function addFavtoWatch(favMovie) {
  if (localStorage.getItem('watched') != null) {
    watchedMovies = JSON.parse(localStorage.getItem('watched')); watchedMovies.push(favMovie);
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  } else {
    watchedMovies[watchedMovies.length] = favMovie; localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }
  document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + favMovie.imgSrc + " alt='Image not found' class='coverImg'/><h3>" + favMovie.name + "</h3><p>" + favMovie.year + "</p><p>" + favMovie.director + "</p><p>" + favMovie.genre + "</p></div></div>";
}

//Creates a list consisting of movies to watch next
var nextMovies = [];
//Prompts the user when 'add' button is clicked and store the data inside the list 'nextMovies' and local storage 
function addNext() {
  var movies = {
    name: prompt("Enter the name of the movie: "), year: prompt("Year: "),
    director: prompt("Director: "),
    genre: prompt("Genre: "),
    imgSrc: prompt("Movie cover link: ")
  };
  if (localStorage.getItem('next') != null) {
    nextMovies = JSON.parse(localStorage.getItem('next')); nextMovies.push(movies);
    localStorage.setItem('next', JSON.stringify(nextMovies));
  } else {
    nextMovies[nextMovies.length] = movies; localStorage.setItem('next', JSON.stringify(nextMovies));
  }
  document.getElementById("nextRow").innerHTML += "<div class='column'><div class='card'><img src=" + movies.imgSrc + " alt='Image not found' class='coverImg'/><h3>" + movies.name + "</h3><p>" + movies.year + "</p><p>" + movies.director + "</p><p>" + movies.genre + "</p></div></div>";
}
//Sort the movies when the user click the button 'sort' and pick a sort type 
function sortMovie(sortType, listType) {
  if (listType == 0) {
    if (sortType == "name") {
      document.getElementById("favRow").innerHTML = ""; tempFavMovies = JSON.parse(localStorage.getItem('favorite')); tempFavMovies.sort(compareName);
      for (i = 0; i < tempFavMovies.length; i++) {
        document.getElementById("favRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempFavMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempFavMovies[i].name + "</h3><p>" + tempFavMovies[i].year + "</p><p>" + tempFavMovies[i].director + "</p><p>" + tempFavMovies[i].genre + "</p></div></div>";
      }
    }
    else if (sortType == "genre") {
      document.getElementById("favRow").innerHTML = ""; tempFavMovies = JSON.parse(localStorage.getItem('favorite')); tempFavMovies.sort(compareGenre);
      for (i = 0; i < tempFavMovies.length; i++) {
        document.getElementById("favRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempFavMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempFavMovies[i].name + "</h3><p>" + tempFavMovies[i].year + "</p><p>" + tempFavMovies[i].director + "</p><p>" + tempFavMovies[i].genre + "</p></div></div>";
      }
    }
    else if (sortType == "year") {

      document.getElementById("favRow").innerHTML = ""; tempFavMovies = JSON.parse(localStorage.getItem('favorite')); tempFavMovies.sort(compareYear);
      for (i = 0; i < tempFavMovies.length; i++) {
        document.getElementById("favRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempFavMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempFavMovies[i].name + "</h3><p>" + tempFavMovies[i].year + "</p><p>" + tempFavMovies[i].director + "</p><p>" + tempFavMovies[i].genre + "</p></div></div>";
      }
    }
    else if (sortType == "director") {
      document.getElementById("favRow").innerHTML = ""; tempFavMovies = JSON.parse(localStorage.getItem('favorite')); tempFavMovies.sort(compareDirector);
      for (i = 0; i < tempFavMovies.length; i++) {
        document.getElementById("favRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempFavMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempFavMovies[i].name + "</h3><p>" + tempFavMovies[i].year + "</p><p>" + tempFavMovies[i].director + "</p><p>" + tempFavMovies[i].genre + "</p></div></div>";
      }
    }
  }
  else if (listType == 1) {
    if (sortType == "name") {
      document.getElementById("watchedRow").innerHTML = ""; tempWatchedMovies = JSON.parse(localStorage.getItem('watched')); tempWatchedMovies.sort(compareName);
      for (i = 0; i < tempWatchedMovies.length; i++) {
        document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempWatchedMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempWatchedMovies[i].name + "</h3><p>" + tempWatchedMovies[i].year + "</p><p>" + tempWatchedMovies[i].director + "</p><p>" + tempWatchedMovies[i].genre + "</p></div></div>";
      }
    }
    else if (sortType == "genre") {
      document.getElementById("watchedRow").innerHTML = ""; tempWatchedMovies = JSON.parse(localStorage.getItem('watched')); tempWatchedMovies.sort(compareGenre);
      for (i = 0; i < tempWatchedMovies.length; i++) {
        document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempWatchedMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempWatchedMovies[i].name + "</h3><p>" + tempWatchedMovies[i].year + "</p><p>" + tempWatchedMovies[i].director + "</p><p>" + tempWatchedMovies[i].genre + "</p></div></div>";
      }
    }
    else if (sortType == "year") {
      document.getElementById("watchedRow").innerHTML = ""; tempWatchedMovies = JSON.parse(localStorage.getItem('watched')); tempWatchedMovies.sort(compareYear);
      for (i = 0; i < tempWatchedMovies.length; i++) {
        document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempWatchedMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempWatchedMovies[i].name + "</h3><p>" + tempWatchedMovies[i].year + "</p><p>" + tempWatchedMovies[i].director + "</p><p>" + tempWatchedMovies[i].genre + "</p></div></div>";

      }
    }
    else if (sortType == "director") {
      document.getElementById("watchedRow").innerHTML = ""; tempWatchedMovies = JSON.parse(localStorage.getItem('watched')); tempWatchedMovies.sort(compareDirector);
      for (i = 0; i < tempWatchedMovies.length; i++) {
        document.getElementById("watchedRow").innerHTML += "<div class='column'><div class='card'><img src=" + tempWatchedMovies[i].imgSrc + " alt='Image not found' class='coverImg'/><h3>" + tempWatchedMovies[i].name + "</h3><p>" + tempWatchedMovies[i].year + "</p><p>" + tempWatchedMovies[i].director + "</p><p>" + tempWatchedMovies[i].genre + "</p></div></div>";
      }
    }
  }
}
//compares the name between two movies and return which one is bigger 
function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
//compares the genre between two movies and return which one is bigger 
function compareGenre(a, b) {
  if (a.genre < b.genre) {
    return -1;
  }
  if (a.genre > b.genre) {
    return 1;
  }
  return 0;
}
//compares the year between two movies and return which one is bigger 
function compareYear(a, b) {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
}
//compares the director between two movies and return which one is bigger 
function compareDirector(a, b) {
  if (a.director < b.director) {
    return -1;

  }
  if (a.director > b.director) {
    return 1;
  }
  return 0;
}