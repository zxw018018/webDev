var btn = document.querySelector("#btn");
var url = 'https://randomuser.me/api/';
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");

btn.addEventListener("click", function(){
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors)
});

function parseJSON(res){
    return res.json().then(function(data){
        return data.results[0];
    })
}

function updateProfile(result){
        var name = result.name;
        fullnameDisp.innerText = name.first + ' ' + name.last;
        avatar.src = result.picture.medium;
        username.innerText = result.login.username;
        city.innerText = result.location.city;
        email.innerText = result.email;
}

function handleErrors(res){
    if (!res.ok){
        throw Error(res.status);
    }
    return res;
}

function displayErrors(err){
    console.log(err);
}