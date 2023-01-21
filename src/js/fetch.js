export async function getMovie(target) {
    fetch("https://api.themoviedb.org/3/movie/550?api_key=842edf5aa8d511e033aa2536e59e3fb4")
      .then(resp => resp.json())
      .then(resp => {
        let title = resp.original_title;
        let release = resp.release_date;
        let imageURL = "https://image.tmdb.org/t/p/original" + resp.poster_path;
        target.innerHTML = title + ", " + release + " <br>"
          + '<img src="' + imageURL + '">';
      })
  }