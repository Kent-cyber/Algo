import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const sc = createInterface({input, output});

    let tabyoung = [];
    let userNumber;

    console.log("Entrez 20 différents âges pour trouver le nombre total de moins de 20 ans.");
    for (let i = 0; i < 20; i++) {
        userNumber = parseInt(await sc.question("Entrez l'âge n°" + (i + 1) + " : "));
        tabyoung.push(userNumber);
    }
    
    console.log(tabyoung);

    sc.close();
}
main();