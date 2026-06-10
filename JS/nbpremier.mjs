import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  let number;

  do {
    number = parseInt(
      await sc.question(
        "Entrez un nombre et je vous dis si c'est un nombre premier : ",
      ),
    );
  } while (isNaN(number) || number < 0);

  if (number < 2) {
    // 1 est évidemment pas un nombre premier
    console.log(number + " n'est pas un nombre premier");
    sc.close();
    return;
  }

  for (let i = 2; i < number; i++) {
    // Puisque un nombre premier est forcément divisible avec 1 et lui-même 
    // vérifie dans la boucle si les autres nombres entre 2 et le nombre choisi a d'autres nombres divisibles
    if (number % i == 0) {
      console.log(number + " n'est pas un nombre premier");
      sc.close();
      return;
    }
  }

  console.log(number + " est un nombre premier");

  sc.close();
}
main();
