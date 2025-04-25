// const myPromise = new Promise((resolve, reject) => {
//     const nome = "matheus"

//     if (nome === "matheus"){
//         resolve("Usuário encontrado");
//     } else {
//         reject("Usuário não encontrado");
//     }
// })

// myPromise.then((data) => {
//     console.log(data);

// }).catch((error) => {
//     console.error(error);

// })


const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "P2 : ok");
}) 

const myPromise3 = new Promise((resolve, reject) => {
    resolve("P3 : ok")
})

const resolveAll = Promise.all([myPromise2, myPromise3]).then((datinha) => {
    console.log(datinha)
})

const resolveRace = Promise.race([myPromise2, myPromise3]).then((datinha) => {
    console.log(datinha)
})