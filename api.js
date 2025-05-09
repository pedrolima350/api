const route = "characters";
const host = "https://dattebayo-api.onrender.com/";

fetch(`${host}${route}`, {
    method: "GET",
    headers: {
        Accept: 'application/json'
    },
    // body: {
    //     name: "pedrin",
    //     document: "curriculo.docx"
    // } A forma de enviar dados para uma api

}).then((response) => {
    return response.json();

}).then((data) => {

    // console.log(data.characters[0].images[0]);

    // console.log(data.characters[0].jutsu);

    var naruto = [];
    naruto = data.characters[0].jutsu;

    var id = [];

    for(let i = 0; i < data.characters.length; i++){
        id[i] = data.characters[i].id;
    }

    
    for (let i = 0; i < id.length; i++){
        console.log("ID:",id[i],"Nome: ", data.characters[i].name);
    }


    // for (let i = 0; i < naruto.length; i++){
    //     console.log("Jutsu ", i,":",naruto[i].toUpperCase());
    // }

})
.catch((error) => {
    console.log(error);

})

