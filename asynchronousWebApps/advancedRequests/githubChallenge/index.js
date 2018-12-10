
function fetchRepos(){  
    $('#js-form').on('click', '#submitBtn', function(event) {
      event.preventDefault();
      let name = $('#js-search-term').val();
      getRepos(name);
  })
}

function getRepos(userName) {
  fetch('https://api.github.com/users/' + userName + '/repos')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

$(fetchRepos);

function displayResults(repos) {
  // if there are previous results, remove them
  $('#results-list').empty();
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < repos.length; i++){
    $('#results-list').append(
      `<li><h3>${repos[i].name}></h3><li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');

  };