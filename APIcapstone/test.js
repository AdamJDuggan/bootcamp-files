`use strict`

let store = {}; 
//this data (make your own HTML attribute- look at) 
function chooseLeague() {
  $('#leagueBtns').on('click', '.leagueBtn', event => {
    event.preventDefault();
    let leagueId = event.target.dataset.league;
    getData(leagueId);
  })  
};


function getData(league){
  console.log("get data");
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
      console.log(store.table);
      displayTeams();
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    })
  };


function displayTeams() {
  console.log('display teams called');
  $('#results').empty();
  $('.main-section').show();
  
  for (let i = 0; i < store.table.length; i++){
    $('#results').append(
      `
      <tr class="ml-5">
      <td>${store.table[i].position}</td>
      <a href="google.com"><td>${store.table[i].team.name}</td></a>
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


$(chooseLeague());

