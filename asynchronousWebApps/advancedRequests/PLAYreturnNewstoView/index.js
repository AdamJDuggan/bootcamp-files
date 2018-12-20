'use strict';

const newsApiKey = '3099d160583f404baa88e637d52ecba4';

const newsURL = 'https://newsapi.org/v2/everything';



function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayNewsResults(responseNewsJson, maxResults) {
  // if there are previous results, remove them
  console.log(responseNewsJson);
  $('#results-list').empty();
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < responseNewsJson.articles.length & i<maxResults ; i++){
    // for each video object in the articles
    //array, add a list item to the results 
    //list with the article title, source, author,
    //description, and image
    $('#results-list').append(
      `<li><h3><a href="${responseNewsJson.articles[i].url}">${responseNewsJson.articles[i].title}</a></h3>
      <p>${responseNewsJson.articles[i].source.name}</p>
      <p>By ${responseNewsJson.articles[i].author}</p>
      <p>${responseNewsJson.articles[i].description}</p>
      <img src='${responseNewsJson.articles[i].urlToImage}'>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};

function getNews(query, maxResults=10) {
  const params = {
    q: query,
    language: "en",
  };
  const queryString = formatQueryParams(params)
  const url = newsURL + '?' + queryString;

  console.log(url);

  const options = {
    headers: new Headers({
      "X-Api-Key": newsApiKey})
  };

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseNewsJson => displayNewsResults(responseNewsJson, maxResults))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}


function chooseLeague() {
  $('#leagueBtns').on('click', '.leagueBtn', event => {
    event.preventDefault();
    let leagueId = event.target.dataset.leagueName;
    getNews(leagueId, maxResults);
  })  
};

$(chooseLeague())

