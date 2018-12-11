'use strict';

const apiKey = 'kBSditdpQDkZljL87iys7NsOxUBJXLGBYEWHKsdN';
const searchURL = 'https://developer.nps.gov/api/v1/parks/';


function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function getParks(state, maxResults) {
  const params = {
    api_key: apiKey,
    stateCode: state,
    limit: maxResults,
    };

  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
  $('#results-list').empty();
  let printData = JSON.stringify(responseJson);   
  for (let i = 0; i < responseJson.data.length; i++){
    $('#results-list').append(`<li><h3>${responseJson.data[i].fullName}</h3></li>`
      );
  }
  $('#results').removeClass('hidden');
}; 

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val() - 1 ;
    getParks(searchTerm, maxResults);
  });
}

$(watchForm);