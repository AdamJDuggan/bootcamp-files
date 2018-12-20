'use strict';

let leagueName = 'Premier_League';

const newsApiKey = '3099d160583f404baa88e637d52ecba4';

const newsURL = 'https://newsapi.org/v2/everything?q=' + leagueName + '/&';


fetch(newsURL, {headers: {'X-Api-Key': '3099d160583f404baa88e637d52ecba4'}})
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


