let prenom, nom, age;
let x = true;
let y = false;

prenom = "Morgane"
nom = "Mezzarobba"
age = 32
count = age += 1;
console.log(count)


// Date object:
const date = new Date("2022-03-25");
// Object:
const moi = {firstName:"Morgane", lastName:"Mezz"};

// let listOfCars = [];
// listOfCars[0]= type="volkswagen",  color="black"
// listOfCars[1]= type="peugeot", color="blue"
// listOfCars[2]= type="sukuzi", color="white"

// console.log(listOfCars[1])

// function createAndStyleElement(className, content){
//     const liste = document.getElementById("liste")
//     if (className) element.className = className;
//     if (content) element.innerHTML = content;

//     return element;
// }

// const cardCars = createAndStyleElement('div','',
//     `
//     <div class="container" style="border: 1px solid; display: flex; flex-direction: column;">
//     <h1 id="titre"></h1>
//     <p id="paragraphe"></p>
//     <button id="button" style="padding: 20px"></button>
//     </div>
//     `)

//     cardCars.appendChild(liste)
 


 const voitures = [ // Tableau contenant nos voitures
    { nom: "Voiture 1", marque: "Audi", annee: 2006, photo:"images/voiture1.jpg"},
    { nom: "Voiture 2", marque: "Renault", annee: 1995, photo:"images/voiture2.png"},
    { nom: "Voiture 3", marque: "BMW", annee: 2025, photo:"images/voiture3.jpg"},
]

// fonction créer des elements et les ajouter dans la liste ( 3 propriétés )
function createAndStyleElement(tag, className, content='',){
    const element = document.createElement(tag); //Créer un element à partir de la propriété (tag)
    if (className) element.className = className; //si propriétés est remplie, on lui ajoute la propriété en tant que classe à l'élement
    if (content) element.innerHTML = content;//si propriétés est remplie, on lui ajoute la propriété en tant que contenu

    return element; // On retourne l'élement crée
}

// Fonction permettant d'ajouter dynamiquement à partir d'une liste de voitures
function remplirListeDeVoiture(nom, marque,annee, photo){
    const app = document.getElementById('list');//On récuperer le conteneur par ID (list)
    //On crée un element de type div, portant une classe section, et on injecte du HTML (h1,p,button, img) et remplit les balises à partir des propriétés de la fonction (remplirListeDeVoiture)
    const cardCar = createAndStyleElement('div', 'section',
          `
    <div class="container">
    <h1 id="titre"> ${nom} </h1>
    <p id="paragraphe">${marque}</p>
    <img src="${photo}" alt="">
    <button id="button">${annee}</button>
    </div>
`);
app.appendChild(cardCar)//On ajoute notre element crée plus tôt à notre page

}

//boucle qui passe à travers un tableau
voitures.forEach(function(voiture){//Pour chaque (voiture) contenue dans (voitures)
    remplirListeDeVoiture(voiture.nom, voiture.marque, voiture.annee, voiture.photo);//Ajoute à la fonction les propriétés des enfants de (voitures)
})














// const car1 = {
//     brand:"Volkswagen",
//     model:"UP",
//     color:"black",
//     annee:"2016"
// }

// const car2 = {
//     brand:"Peugeot",
//     model:"206",
//     color:"blanche",
//     annee:"1995"
// }

// const car3 = {
//     brand:"Volkswagen",
//     model:"Tiguan",
//     color:"blue",
//     annee:"2025"
// }



// if (x == true){
//     console.log(cars[2])
// }

// document.getElementById("titre").innerHTML = cars[0];
// document.getElementById("paragraphe").innerHTML = cars[1];
// document.getElementById("button").innerHTML = cars[2];

// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });