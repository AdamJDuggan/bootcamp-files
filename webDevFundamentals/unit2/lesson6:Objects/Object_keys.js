const pageViewCounts = {
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22,
};


Object.keys(pageViewCounts).forEach(function(key) {
  console.log(`
    the ${key} page has  ${pageViewCounts[key]} views.`);
});

console.log(Object.keys(pageViewCounts));


function validateKeys(object, expectedKeys) {
  return object.keys(object).map(x => x === expectedKeys);

}

function validateFields(object, expectedKeys){
  expectedKeys.forEach(function(field){
    if(field in object){
      return true
    }
    else return false 
  })
}




