// Task: Add error handling.
// Task: Refactor code -> split functions into smaller, more specific functions

//Generates a random query-url from a genre-id
export function getRandomURL(id) {

  //Select randomly from the available methods to sort the results
  let sort = ['popularity.desc', 'release_date.desc', 'revenue.desc', 'primary_release_date.desc', 'vote_average.desc', 'vote_count.desc'];
  let sortNum = Math.floor(Math.random() * (sort.length));

  //Select randomly from result pages
  let pageNumber = Math.floor(Math.random() * 50) + 1;

  //Concatenate URL for query
  return 'https://api.themoviedb.org/3/discover/movie?api_key=842edf5aa8d511e033aa2536e59e3fb4&language=en-US&sort_by=' + sort[sortNum] + '&include_adult=false&with_genres=' + id + '&page=' + pageNumber;
}

//Calls addRandom for 'count' times
export async function callAddRandom(url, target, count) {

  let obj = await addRandom(url, target, count, []);
  while (obj.count > 0) {
    obj = await addRandom(url, target, obj.count, obj.done)
  }
}

//Calls API-URL and inserts results into target. On resolve returns count-- if successful and array containing inserted movies
async function addRandom(url, target, count, done) {
  return new Promise((resolve) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        //Select random movie from page
        let i = Math.floor(Math.random() * res.results.length);


        if (!done.includes(i)) {
          done.push(i);
          //Append movie details to target
          let webPath = "https://www.themoviedb.org/movie/" + res.results[i].id;
          let title = res.results[i].original_title;
          let release = res.results[i].release_date;
          let imageURL = "https://image.tmdb.org/t/p/original" + res.results[i].poster_path;
          let theDiv = document.createElement('div');
          theDiv.classList.add('card');
          theDiv.innerHTML = title + ", " + release + " <br>"
            + '<img src="' + imageURL + '">';
          if (!theDiv.innerHTML.includes("null")) {
            target.appendChild(theDiv);
            theDiv.addEventListener("click", () => window.open(webPath));
            count--;
          }
        }
        return { count: count, done: done };
      })
      .then((res) => resolve(res));
  })
}
