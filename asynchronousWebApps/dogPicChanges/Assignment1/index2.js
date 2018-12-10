'use strict';


function getDogImage() {
  let dogNumber = $('#inputValue').val();
  fetch('https://dog.ceo/api/breeds/image/random/'+dogNumber)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) { 
  console.log(responseJson);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});