import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const sc = createInterface({input, output});

    let n; // nombre de chevaux partants
    let p; // nombre de chevaux joués
    let erreur = 0;

    do {
        if (erreur > 0) {
            console.error("Erreur : veuillez saisir un nombre entier positif")
        }
        n = parseInt(await sc.question("Saisissez le nombre de chevaux partants : "));
        p = parseInt(await sc.question("Saisissez le nombre de chevaux joués : "));
        erreur++;
    } while (isNaN(n) || isNaN(p) || n < 0 || p < 0);
    

    let x = factorielle(n) / factorielle(n - p);
    let y = factorielle(n) / (factorielle(p) * factorielle(n - p));

    console.log(`Dans l'ordre : une chance sur ${x} de gagner.`);
    console.log(`Dans le désordre : une chance sur ${y} de gagner.`);

    sc.close();
}
await main();

function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorielle(n - 1);
}