// Exercice # 1

// Créer une constante "data", elle contient un tableau avec les valeurs suivantes : ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'], veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "data" et n'afficher dans la console du navigateur que les prénoms avec moins ou egale 5 lettres.


const data = ["Théo", "Martin", "Lucas", "Antoine", "Etienne"];


for (let i = 0; i < data.length; i++) {
    const name = data[i];
    if (name.length <= 5) {
        console.log(name);
    }
}





// Exercice # 2

// Créer une CONSTANTE "countries", elle contient un tableau avec 5 pays de votre choix, veillez à bien le typer.
// Créer une VARIABLE "sentence", elle contient une string vide, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "countries" et ajouter chaque valeur dans la string de la variable 
// "sentence" avec une virgule entre chaque.
// Lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Attendu : "France, Allemagne, Italie, Suisse, Belgique"


const countries: string[] = ["France", "Italie", "Espagne", "Portugal", "Allemagne"];
let sentence: string = '';

for (let i = 0; i < countries.length; i++) {
    sentence += countries[i] + ', ';
}

console.log(sentence);

// Exercice # 3

// Créer une constante "numbers", elle contient le tableau suivant [123, 999, 340, 12390], veillez à bien le typer.
// Créer une variable "results", elle contient un tableau vide. Ce tableau servira plus tard, veillez à bien le typer.
// À l'aide d'une boucle multiplier chaque valeur du tableau "numbers" par 180.
// Vous stockerez chaque résultat dans le tableau "results", lorsque l'itération est terminée vous afficherez 
// le tableau de resultat dans la console du navigateur.
// Aide : regarder sur Google comment insérer des valeurs dans un tableau, ici on cherche à pousser dans le tableau "results"




const numbers: number[] = [123, 999, 340, 12390];
let results: number[] = [];

for (let i = 0; i < numbers.length; i++) {
    results.push(numbers[i] * 180);
}

console.log(results);


// Exercice # 4

// Créer une constante contenant l'objet suivant : { name: 'Marchal', surname: 'Mickeal', age: 19 }, veillez à bien le typer.
// À l'aide d'une condition vérifier si Mickeal est bien majeur, si c'est le cas afficher un message dans la console du navigateur.

const person: { name: string, surname: string, age: number } = { name: "Marchal", surname: "Mickael", age: 19 };

if (person.age >= 18) {
    console.log("Mickael est majeur");
}


// Exercice # 5

// Créer une constante contenant un objet, cet objet contient les clés suivantes: "nom", "prénom", "age". 
//Vous êtes libres de choisir les valeurs associées, veillez à bien typer.
// Exploitez l'objet de sort à afficher dans le navigateur une phrase se présentant comme cela :
// "bonjour mon nom est <insérer nom> <insérer prénom>, j'ai <insérer age>"


const person2: { nom2: string, prenom2: string, age2: number } = { nom2: "Doe", prenom2: "John", age2: 25 };


console.log(`Bonjour, mon nom est ${person2.nom2} ${person2.prenom2}, j'ai ${person2.age2} ans.`);


// Exercice # 6


// Créer une constante contenant contenant un tableau de 5 objets, 
//chaque objet à la forme de celui de l'exercice # 5, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau d'objet et afficher dans la 
//console du navigateur la même phrase que l'exercice # 5 pour chaque valeur du tableau.


const persons: { nom: string, prenom: string, age: number }[] = [
    { nom: "Boulanger", prenom: "Laurent", age: 42 },
    { nom: "Auvray", prenom: "René", age: 28 },
    { nom: "Girard", prenom: "Julie", age: 35 },
    { nom: "Lefèvre", prenom: "Lucie", age: 19 },
    { nom: "Aubin", prenom: "Thomas", age: 57 },
];

for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    console.log(`Bonjour, mon nom est ${person.nom} ${person.prenom}, j'ai ${person.age} ans.`);
}
