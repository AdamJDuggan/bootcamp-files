`use strict`






function chooseLeague() {
  $('#leagueBtns').on('click', '.leagueBtn', event => {
    event.preventDefault();
    let leagueId = event.target.dataset.league;
    getData('PL', 'teams');
  })  
};


function getData(league, targetData){
  console.log("get data");
  let url = 'https://api.football-data.org/v2/competitions/' + league + '/' + targetData;
  fetch(url, {headers: {'X-Auth-Token': 'ad9e6022842a4b69ac8afb503a2ec1b1'}})
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      store.teams = responseJson.teams;
      displayTeams();
      console.log(responseJson);
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    })
  };


// --------------- CODE FOR TABLE -------------------------

function displayTeams() {
  console.log('display teams called');
  $('#results').empty();
  for (let i = 0; i < store.teams.length; i++){
    $('#results').append(
      `
      <div class='card' style='width: 18rem;'>
      <img class='card-img-top' src="${store.teams[i].crestUrl}" alt='Card image cap'>
      <div class='card-body'>
      <h5 class='card-title'>${store.teams[i].name}</h5>
    </div>
    `);
  };
};


$(chooseLeague());




