$("#btn").click(function(){
    $.getJSON("http://aws.random.cat/meow")
        .done(function(data){
            $('#catImg').attr("src", data.file);
        })
        .fail(function(){
            alert("request is not good");
        })
});