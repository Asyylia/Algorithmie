
 const voitures = [ // Tableau contenant nos voitures
    { nom: "Voiture 1", marque: "Audi", annee: 2006, photo:"images/voiture1.jpg"},
    { nom: "Voiture 2", marque: "Renault", annee: 1995, photo:"images/voiture2.png"},
    { nom: "Voiture 3", marque: "BMW", annee: 2025, photo:"images/voiture3.jpg"},
]

const app = document.getElementById('list');

//Fonction permettant d'afficher toutes les caractéristiques des voitures
function init(){
    
    const btn1 = document.getElementById('btn1');

        btn1.addEventListener('click', () =>{
        clearList()
        voitures.forEach(function(voiture){
        remplirListeDeVoiture(voiture.nom, voiture.marque, voiture.annee,voiture.photo)
        })
    })


}
// fonction créer des elements et les ajouter dans la liste ( 3 propriétés )
function createAndStyleElement(tag, className, content='',){
    const element = document.createElement(tag); //Créer un element à partir de la propriété (tag)
    if (className) element.className = className; //si propriétés est remplie, on lui ajoute la propriété en tant que classe à l'élement
    if (content) element.innerHTML = content;//si propriétés est remplie, on lui ajoute la propriété en tant que contenu

    return element; // On retourne l'élement crée
}

// Fonction permettant d'ajouter dynamiquement à partir d'une liste de voitures
function remplirListeDeVoiture(nom, marque,annee, photo){
   
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
//Fonctions permettant de trier les voitures à partir d'une caractéristique
function remplirMarqueDeVoiture(marque){
       //On crée un element de type div, portant une classe section, et on injecte du HTML (h1,p,button, img) et remplit les balises à partir des propriétés de la fonction (remplirListeDeVoiture)
    const cardCar = createAndStyleElement('div', 'section',
          `
    <div class="container">
    <p id="paragraphe">${marque}</p>
    </div>
`);



app.appendChild(cardCar)//On ajoute notre element crée plus tôt à notre page

}

function remplirNomDeVoiture(nom){
    //On crée un element de type div, portant une classe section, et on injecte du HTML (h1,p,button, img) et remplit les balises à partir des propriétés de la fonction (remplirListeDeVoiture)
    const cardCar = createAndStyleElement('div', 'section',
          `
    <div class="container">
    <h1 id="titre"> ${nom} </h1>
    </div>
`);



app.appendChild(cardCar)//On ajoute notre element crée plus tôt à notre page

}

function remplirAnneeDeVoiture(annee){
    //On crée un element de type div, portant une classe section, et on injecte du HTML (h1,p,button, img) et remplit les balises à partir des propriétés de la fonction (remplirListeDeVoiture)
    const cardCar = createAndStyleElement('div', 'section',
          `
    <div class="container">
    <button id="button">${annee}</button>
    </div>
`);



app.appendChild(cardCar)//On ajoute notre element crée plus tôt à notre page

}
 
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    

    btn2.addEventListener('click', () =>{
        clearList()
        voitures.forEach(function(voiture){
        remplirMarqueDeVoiture(voiture.marque)
        })
    })

    btn3.addEventListener('click', () =>{
        clearList()
        voitures.forEach(function(voiture){
        remplirNomDeVoiture(voiture.nom)
        })
    })

    btn4.addEventListener('click', () =>{
        clearList()
        voitures.forEach(function(voiture){
        remplirAnneeDeVoiture(voiture.annee)
        })
    })

function clearList(){
    const app= document.getElementById('list');
    app.innerHTML="";
    }

init()
    









