//key used to authenticate access 
const apiKey = '3099d160583f404baa88e637d52ecba4';


//
function getNews() {
  //we've hardcoded 2 query parameters into the URL: language=en, which tells the API that we only want to get back article written in English; and q=tesla, which tells the API that we only want to get back articles related to Tesla
  const url = "https://newsapi.org/v2/everything?q=tesla&language=en";

 //In options, we create a new instance of the Headers class, meaning we use the Fetch API's blueprint for what a Header should look like in order to build our own. Back in the documentation, it told us that we could authenticate our app via the X-Api-Key HTTP header. So, in our new Header object, we'll use X-Api-Key as the key (remember that in JSON, the keys have to be written as strings), and we'll set the value to the variable that we stored our key in earlier on line 1. 
 const options = {
    headers: new Headers({
      "X-Api-Key": apiKey})
  };
  //Next, on line 11, we  make the request. We call fetch() and pass through 2 arguments - the URL and our options object which contains the Header to authorize our app. We chain together 2 .then blocks - 1 to format the response as JSON and another to log the response JSON to the console.
  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

$(getNews);


