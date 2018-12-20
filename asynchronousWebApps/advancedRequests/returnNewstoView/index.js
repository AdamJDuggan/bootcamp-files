'use strict';

let newsStore = {};


const newsApiKey = '3099d160583f404baa88e637d52ecba4';
const newsURL = 'https://newsapi.org/v2/everything';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayNewsResults(maxResults=5) {
  // if there are previous results, remove them
  $('#results-list').empty();
  for (let i = 0; i < newsStore.articles.length & i<maxResults ; i++){
    $('#results-list').append(
      `<li><h3><a href="${newsStore.articles[i].url}">${newsStore.articles[i].title}</a></h3>responseNewsJson.articles[i].urlToImage
      <p>${newsStore.articles[i].source.name}</p>
      <p>By ${newsStore.articles[i].author}</p>
      <p>${newsStore.articles[i].description}</p>
      <img src='${newsStore.articles[i].urlToImage ? newsStore.articles[i].urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Comic_image_missing.svg/948px-Comic_image_missing.svg.png'}'> 
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};

function getNews(query) {
  const params = {
    q: query,
    sources: 'bbc-news',
    language: "en"
  };

  const queryString = formatQueryParams(params)
  const finalNewsUrl = newsURL + '?' + queryString;

  //if no url with news story then...


  console.log(finalNewsUrl);

  const options = {
    headers: new Headers({
      "x-api-key": newsApiKey})
  };

  fetch(finalNewsUrl, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseNewsJson => {
      newsStore.articles = responseNewsJson.articles;
      displayNewsResults()
    })
       
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}


function leagueClick() {
  $('#leagueBtns').on ('click', '.leagueBtn', event => {
    event.preventDefault();
    const choosenLeague = event.target.dataset.news;
    const maxResults = 10;
    getNews(choosenLeague, maxResults);
  });
}

$(leagueClick());




