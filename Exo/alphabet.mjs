import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";
import { compileFunction } from "node:vm";

async function main() {
  const sc = createInterface({ input, output });

  // Version complexe
  /* let texte = await sc.question("Entrez un texte d'au moins 120 caractères : ");
    texte = texte.toUpperCase(); // Tout mettre le texte en majuscule

    let alphabet = new Array(26).fill(0); // Création d'un tableau 26 éléments de valeur 0

    for (let i = 0; i < texte.length; i++) {
        let unicode = texte.charCodeAt(i); // recupère le code Unicode de chaque caractère du texte

        if (unicode >= 65 && unicode <= 90) {
            alphabet[unicode - 65]++;
        }
    }

    console.log("\nVoici tout ce qui contient le texte :");
    for (let i = 0; i < 26; i++) {
        console.log(`${String.fromCharCode(i + 65)} : ${alphabet[i]}`);
    } */

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let compteurs = {};
  let texte;

  texte = await sc.question("Entrez un texte d'au moins 120 caractères : ");

  texte = texte.toUpperCase();

  for (let i = 0; i < alphabet.length; i++) {
    compteurs[alphabet[i]] = 0;
  }

  for (let i = 0; i < texte.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (texte[i] === alphabet[j]) {
        compteurs[alphabet[j]]++;
      }
    }
  }

  console.table(compteurs);

  sc.close();
}
main();
