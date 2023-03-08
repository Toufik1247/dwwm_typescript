// Exercice # 1

// - Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.

const address: string = "2 rue de la République";
const zipCode: number = 75000;
const addressFull: string = address + ' ' + zipCode;

function showAddress() {
    console.log(addressFull)
}

showAddress()


// Exercice # 2

// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.

const countries: string[] = ["France", "Espagne", "Italie", "Allemage", "Belgique"]

function showCountry() {
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i])
    }
}


showCountry()



// Exercice # 3

// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.


const mot: string = "developpement"

function decomposeWord() {
    const wordDecomposed: string[] = []
    for (let i = 0; i < mot.length; i++) {
        wordDecomposed.push(mot[i]);
    }
    return wordDecomposed
}

console.log(decomposeWord())

// Exercise 3 bis

const sentence: string = "ceci est une phrase"



function decomposeSettence() {
    const word: string[] = sentence.split(' ')
    let sentenceDecomposed: string[] = []
    for (let i = 0; i < word.length; i++) {
        sentenceDecomposed.push(word[i]);
    }
    return sentenceDecomposed


}



console.log(decomposeSettence())


// Exercice # 4

// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.



function recomposeWord() {
    // On decompose le mot avec la fonction precedente
    decomposeWord()
    // On declare une variable vide pour le futur mot assemblée
    let assembledWord: string = '';
    //On itère à travers les caractères du mot décomposé et on les ajoute à la variable vide
    for (let i = 0; i < mot.length; i++) {
        assembledWord += mot[i];
    }
    return assembledWord

}

console.log(recomposeWord())




// Esercise 4 bis

function recomposeSentence() {
    // On decompose la phrase avec la fonction precedente
    decomposeSettence()
    // On declare une variable vide pour la future phrase assemblée
    let assembledSentence: string = '';
    //On itère à travers les mots de la phrase décomposée et on les ajoute à la variable vide
    for (let i = 0; i < sentence.length; i++) {
        assembledSentence += sentence[i];
    }
    // on affiche la phrase recomposée
    return assembledSentence
}


console.log(recomposeSentence())

