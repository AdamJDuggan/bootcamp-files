//prevents undelcared varibles 
'use strict';

//authentication key 
const apiKey = '3099d160583f404baa88e637d52ecba4';

//api address 
const searchURL = 'https://newsapi.org/v2/everything';


function formatQueryParams(params) {
  //create an array of the keys in the "params" object
  const queryItems = Object.keys(params)
  //for each of the keys in that array, create a string with the key and the key's value in the "params" object
  .map(key => `${key}=${params[key]}`)
  //return a string of the keys and values, separated by "&"
  return queryItems.join('&');
}

function getNews(query, maxResults=10) { 
  //create the query parameters
  const params = {        
    //set the "q" parameter equal to the value the user input
    q: query,
    language: "en",
  };

  //create a string with the original URL and the new parameters
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  console.log(url);
  
  const options = {
    headers: new Headers({
      "X-Api-Key": apiKey})
  };


  fetch(url, options)
    .then(response => {
      // the new code starts here
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

//watch for the form submission
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //capture the value of the user's input
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val();
    getNews(searchTerm, maxResults);
  });
}

$(watchForm);