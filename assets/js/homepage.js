var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
       displayRepos(data,user);
      });
    });
  };

var formSubmitHandler = function(event) {
    event.prevendDefault ();
    //get value from input element
    var username = nameInputEl.nodeValue.trim();
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";        
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

var displayRepos = function(repos,searchTerm){
    console.log(repos);
    console.log(searchTerm);
};
userFormEl.addEventListener("submit", formSubmitHandler);