const route = "characters";

fetch(`https://dattebayo-api.onrender.com/${route}`, {
    method: "GET",
    headers: {
        Accept: 'application/json'
    }

}).then((response) => {
    return response.json();

}).then((data) => {

    console.log(data.characters[0].images[0]);
    // console.log(data.characters[0].jutsu);

    let jutsu = data.characters[0].jutsu;

    for (let i = 0; i < jutsu.lenght; i++){
        console.log(jutsu[i]);
    }

})
.catch((error) => {
    console.log(error);

})

