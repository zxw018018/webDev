axios.get(url)
.then(function(res){
    console.log(res.data);
})
.catch(function(err){
    console.log(err);
});