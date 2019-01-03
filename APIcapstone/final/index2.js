`use strict`

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//TABLE 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//used to hold the results of the current league table
let store = {};
//Get league data
function getData(league) {
    let url = 'https://api.football-data.org/v2/competitions/' + league + '/standings';
    fetch(url, { headers: { 'X-Auth-Token': 'ad9e6022842a4b69ac8afb503a2ec1b1' } })
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
    $('#results').empty();
    $('#main-section').show();

    for (let i = 0; i < store.table.length; i++) {
        $('#results').append(
            `
<tr class="ml-5">
<td>${store.table[i].position}</td>
<td>${store.table[i].team.name}</td>
<td>${store.table[i].playedGames}</td>
<td class="wldColRm">${store.table[i].won}</td>
<td class="wldColRm">${store.table[i].draw}</td>
<td class="wldColRm">${store.table[i].lost}</td>
<td class="colRm">${store.table[i].goalsFor}</td>
<td class="colRm">${store.table[i].goalsAgainst}</td>
<td class="colRm">${store.table[i].goalDifference}</td>
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
//Display news stories to view 
function displayNewsResults(responseNewsJson, maxResults) {
    $('#news').empty();
    for (let i = 0; i < responseNewsJson.articles.length & i < maxResults; i++) {
        $('#news').append(

            `<br>
            <article class="media">
            <figure class="media-left">
            <p class="image is-128x128">
            <img src='${responseNewsJson.articles[i].urlToImage ? responseNewsJson.articles[i].urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Comic_image_missing.svg/948px-Comic_image_missing.svg.png'}'> 
            </p>
            </figure>
            <div class="media-content">
            <div class="content">
            <p>
            <a target="blank" href="${responseNewsJson.articles[i].url}"><strong>${responseNewsJson.articles[i].title}</strong></a> 
            <br>
            <br>
            ${responseNewsJson.articles[i].description}
            </p>
            </div>
            </div>
            </article>
            <hr>`
        )
    };
};

//Get the data
function getNews(query, maxResults = 7) {
    const params = {
        q: query,
        sources: 'bbc-news',
        language: "en"
    };

    const queryString = formatQueryParams(params)
    const finalNewsUrl = newsURL + '?' + queryString;
    const options = {
        headers: new Headers({
            "x-api-key": newsApiKey
        })
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

//Get league data
function getFixtures(league) {
    let url = 'https://api.football-data.org/v2/competitions/' + league + '/matches?status=SCHEDULED';
    fetch(url, { headers: { 'X-Auth-Token': 'ad9e6022842a4b69ac8afb503a2ec1b1' } })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson2 => {
            console.log(responseJson2.matches);
            $('#fixtures').empty();
            let space = "              ";
            for (let i = 0; i < responseJson2.matches.length & i < 10; i++) {
                $('#fixtures').append(
                    `<h3 class="title is-4 is-spaced">${responseJson2.matches[i].homeTeam.name}  
                    <strong class="has-text-dark">vs</strong>  
                    ${responseJson2.matches[i].awayTeam.name} 
                    </h3>`
                )
            };
        })
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        })
};






//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//MASTER FUNCTION- click league button 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function chooseLeague() {
    $('#leagueBtns').on('click', 'button', event => {
        event.preventDefault();
        //Run table 
        let leagueId = $(event.currentTarget).data('league');
        getData(leagueId);
        //Run news 
        let choosenLeagueNews = $(event.currentTarget).data('news');
        getNews(choosenLeagueNews, maxResults = 6);
        //Run Fixtures
        getFixtures(leagueId);
    })
};



$(chooseLeague());












