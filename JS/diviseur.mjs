import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  let number;
  let result = 0;
  let numbers = [];

  do {
    number = parseInt(await sc.question("Entrez un chiffre : "));
  } while (isNaN(number) || number <= 0);

  for (let i = 1; i <= number; i++) { // Trouve les diviseurs dans la boucle
    if (number % i == 0) {
      result += 1;
      numbers.push(i);
    }
  }

  console.log(number + " est divisible " + result + " fois");
  console.log(numbers);

  sc.close();
}
main();
