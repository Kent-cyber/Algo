import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });
  let guess = 1;

  console.log("Bienvenue au jeu de la fourchette !");
  console.log(
    "Essayez de deviner un nombre entier entre 0 et 100 choisit par l'ordinateur.",
  );

  let randomNumber = Math.floor(Math.random() * 101);
  let userNumber = parseInt(await sc.question("Entrez un nombre : "));

  while (userNumber !== randomNumber) {
    if (userNumber > randomNumber) {
      console.log("Le nombre est plus petit ! Essayez encore ! \n");
    } else if (userNumber < randomNumber) {
      console.log("Le nombre est plus grand ! Essayez encore ! \n");
    }
    guess++;
    userNumber = parseInt(await sc.question("Entrez un nombre : "));
  }

  console.log("Félicitations ! Vous avez réussi !");

  if (guess == 1) {
    console.log("Et du premier coup !");
  } else {
    console.log("en " + guess + " fois !");
  }
  sc.close();
}
main();
