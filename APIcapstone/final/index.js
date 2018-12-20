`use strict`

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//TABLE 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//used to hold the results of the current league table
let store = {}; 
//Get league data
function getData(league){
  let url = 'https://api.football-data.org/v2/competitions/' + league + '/standings';
  fetch(url, {headers: {'X-Auth-Token': 'ad9e6022842a4b69ac8afb503a2ec1b1'}})
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      store.table = responseJson.standings[0].table;
      // console.log(store.table);
      displayTeams();
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    })
  };
//Display returned data to the view 
function displayTeams() {
  console.log('display teams called');
  $('#results').empty();
  $('.main-section').show();
  
  for (let i = 0; i < store.table.length; i++){
    $('#results').append(
      `
      <tr class="ml-5">
      <td>${store.table[i].position}</td>
     <td> <a href="#">${store.table[i].team.name}</a></td>
      <td>${store.table[i].playedGames}</td>
      <td>${store.table[i].won}</td>
      <td>${store.table[i].draw}</td>
      <td>${store.table[i].lost}</td>
      <td>${store.table[i].goalsFor}</td>
      <td>${store.table[i].goalsAgainst}</td>
      <td>${store.table[i].goalDifference}</td>
      <td>${store.table[i].points}</td> 
      </tr>
    `);
  };
};
// ----------------------------------------END OF TABLE


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//NEWS 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//API key for news and URL
const newsApiKey = '3099d160583f404baa88e637d52ecba4';
const newsURL = 'https://newsapi.org/v2/everything';
//Function which formats and appends query paramaters to end of URL
function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}
//Display responce to view 
function displayNewsResults(responseNewsJson, maxResults) {
  console.log(responseNewsJson);
  $('#news').empty();
  for (let i = 0; i < responseNewsJson.articles.length & i<maxResults ; i++){
    $('#news').append(
      `<li><h3><a href="${responseNewsJson.articles[i].url}">${responseNewsJson.articles[i].title}</a></h3>responseNewsJson.articles[i].urlToImage
      <p>${responseNewsJson.articles[i].source.name}</p>
      <p>By ${responseNewsJson.articles[i].author}</p>
      <p>${responseNewsJson.articles[i].description}</p>
      <img src='${responseNewsJson.articles[i].urlToImage ? responseNewsJson.articles[i].urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Comic_image_missing.svg/948px-Comic_image_missing.svg.png'}'> 
      </li>`
    )};
};
//Get the data
function getNews(query, maxResults=5) {
  const params = {
    q: query,
    sources: 'bbc-news',
    language: "en"
  };

  const queryString = formatQueryParams(params)
  const finalNewsUrl = newsURL + '?' + queryString;
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
    .then(responseNewsJson => displayNewsResults(responseNewsJson, maxResults))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}
//-----------------------------------------END OF NEWS


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//FIXTURES  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let storeFixtures = {}; 
// //Get league data
// function getFixtures(league){
//   // console.log("get data");
//   let url = 'https://api.football-data.org/v2/competitions/' + league + 'matches?status=SCHEDULED';
//   fetch(url, {headers: {'X-Auth-Token': 'ad9e6022842a4b69ac8afb503a2ec1b1'}})
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(responseJson => {
//       storeFixtures = responseJson.matches;
//       console.log(storeFixtures);
//       // displayTeams();
//     })
//     .catch(err => {
//       $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     })
//   };
//Display returned data to the view 



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//MASTER FUNCTION- click league button 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function chooseLeague() {
  $('#leagueBtns').on('click', 'button', event => {
    event.preventDefault();
    //Run table 
    let leagueId = $(event.currentTarget).data('league');   
    // let leagueId = $(this).data('league');
    getData(leagueId);
    //Run news 
    // let choosenLeagueNews = $(this).data('news');
    let choosenLeagueNews = $(event.currentTarget).data('news');   

    getNews(choosenLeagueNews, maxResults = 5);
    //Run fixtures 
    // getFixtures(leagueId, maxFixtures = 6);
  })  
};

$(chooseLeague());








