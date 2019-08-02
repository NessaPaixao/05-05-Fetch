

fetch('https:/swapi.co/api/people/10')
.then(function (result){
    return result.json();
})
.then(function (data){
    console.log(data);
    
})



