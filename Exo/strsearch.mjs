import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let search = 0;
  let chars;
  let str;
  let letter;

  console.log(
    "Donnez une phrase pour que l'ordinateur puisse trouver des lettres",
  );

  do {
    str = await sc.question(
      "Donnez-moi une phrase en se terminant par un point (.) : ",
    );
  } while (!str.trim().endsWith("."));

  if (str.trim() == "") {
    console.log("LA CHAINE EST VIDE");
    sc.close();
  }
  chars = str.split("");

  do {
    letter = await sc.question("Donnez-moi une lettre : ");
  } while (letter.length !== 1);

  for (let i = 0; i < chars.length; i++) {
    if (letter.toLowerCase() === chars[i].toLowerCase()) {
      search++;
    }
  }

  if (search == 0) {
    console.log("La lettre n'est pas présente");
  } else {
    console.log(`La lettre ${letter} est présente ${search} fois`);
  }

  sc.close();
}
main();
