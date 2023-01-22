// Task: Add error handling


//Generates a random query-url from a genre-id, then calls addRandom to select random movies from that result and add them as cards to a target html-element.
export async function getRandom(id, target, count) {

  //Select randomly from the available methods to sort the results
  let sort = ['popularity.asc', 'popularity.desc', 'release_date.asc', 'release_date.desc', 'revenue.asc', 'revenue.desc', 'primary_release_date.asc', 'primary_release_date.desc', 'original_title.asc', 'original_title.desc', 'vote_average.asc', 'vote_average.desc', 'vote_count.asc', 'vote_count.desc'];
  let sortNum = Math.floor(Math.random() * (sort.length));

  //Select randomly from result pages
  let pageNumber = Math.floor(Math.random() * 101);

  //Concatenate URL for query
  let url = 'https://api.themoviedb.org/3/discover/movie?api_key=842edf5aa8d511e033aa2536e59e3fb4&language=en-US&sort_by=' + sort[sortNum] + '&include_adult=false&with_genres=' + id + '&page=' + pageNumber;

  let x = await addRandom(url, target, count);
  while (x > 0) {
    x = await addRandom(url, target, x)
  }


}

async function addRandom(url, target, count) {
  return new Promise((resolve) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {

        //Select random movie from page
        let i = Math.floor(Math.random() * res.results.length);

        //Append movie details to target
        let title = res.results[i].original_title;
        let release = res.results[i].release_date;
        let imageURL = "https://image.tmdb.org/t/p/original" + res.results[i].poster_path;
        let theDiv = document.createElement('div');
        theDiv.classList.add('card');
        theDiv.innerHTML = title + ", " + release + " <br>"
          + '<img src="' + imageURL + '">';
        target.appendChild(theDiv);
        return res;
      })

      .then(resolve(--count))
  })
}
