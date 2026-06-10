import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const sc = createInterface({input, output}); // Créer le Scanner

    let userAnswer;

    do {
        userAnswer = await sc.question("Entrez un chiffre : ");
    }
    while (
        isNaN(userAnswer) // tant que l'utilisateur ne donne pas un chiffre
    );

    if (userAnswer % 4 == 0 && (userAnswer % 100 != 0 || userAnswer % 400 == 0)) {
        console.log("Bissextile");
    } else {
        console.log("Non bissextile");
    }

    sc.close();
}
main();