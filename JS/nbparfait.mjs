import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  let number;
  let sum = 0;

  do {
    number = parseInt(await sc.question("Entrez un nombre : "));
  } while (isNaN(number) || number <= 0);

  for (let i = 1; i < number; i++) { // Recherche dans la boucle pour trouver les diviseurs puis calcule dans la somme
    if (number % i == 0) {
      sum += i;
    }
  }

  const nbparfait = sum === number; // Vérifie si la somme des diviseurs propres est égale au nombre choisi

  if (nbparfait) {
    console.log(number + " est un nombre parfait");
  } else {
    console.log(number + " n'est pas un nombre parfait");
  }
  
  sc.close();
}
main();