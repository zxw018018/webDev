$("#getBtn").click(function(){
    $.get('https://api.github.com/users/colt')
        .done(function(data){
            console.log(data);
        })
        .fail(function(){
            console.log("error");
        })
});

$("#postBtn").click(function(){
    var data = {name: "charilie", city: "florence"};
    $.post("https://www.catsarecoolandsoaredogs.com", data)
        .done(function(data){
            console.log("hi");
        })
        .fail(function(){
            console.log("error");
        })
});

$("#getJSONBtn").click(function(){
    $.getJSON("https://api.github.com/users/colt")
        .done(function(data){
            console.log(data);
        })
        .fail(function(){
            console.log("error");
        })
});