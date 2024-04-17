let petData;

$.getJSON('https://learnwebcode.github.io/json-example/pets-data.json', function(data) {
  petData = data;
})
.done(function() {
  console.log("Request successful");
  createHtml(petData); // Call createHtml inside the callback function
})
.fail(function() {
  console.log("Request failed");
});


Handlebars.registerHelper("calculateAge",function(birthYear){
    let age = new Date().getFullYear() - birthYear

    if(age > 0 ) {
        return  age + " years old"
    }
    else {
       return  "less than a year old"
    }
})

function createHtml(petData){
     
  let petHtml = $('#pets-template').html();
   
  let template = Handlebars.compile(petHtml);
  
  let generatedTemplate = template(petData);
  
  $('#pets-container').html(generatedTemplate);
}
