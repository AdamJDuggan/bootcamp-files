'use strict';

let numSelect = "";
let refresh = "";

function numberSubmitted() {
    $(`#submitNum`).click(event => {
        event.preventDefault();
        clearOut();
        submittedNumber();
        // prevent values other than 1-50
        if ((numSelect > 50) || (numSelect < 1)) {
            alert("Please select a number 1 through 50.");
            return;
        }
        fetchDogs();
    });
}

function submittedNumber() {
  numSelect = $('#dogNum').val();
    // change empty submission to 3
    if (numSelect == "") {
      numSelect = 3;
    }
    refresh = "https://dog.ceo/api/breeds/image/random/" + numSelect;
}

function fetchDogs() {
    fetch(`${refresh}`)
        .then(response => response.json())
        .then(responseJson => displayDog(responseJson))
        .catch(error => {
            console.log(error);
            alert('Something went wrong, check console.');
        });

}

// append each dog image from the API response into the js-dogs div
function displayDog(responseJson) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
        $(`.results`).append(`<img src="${responseJson.message[i]}" class="col-3 results-img">`);
    }
}

// refresh values and clear div
function clearOut() {
  numSelect = "";
    endpoint = "";
    $(`.results`).html("");
}

$(numberSubmitted);