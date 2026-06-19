import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let tabnumber = [];
  let usernumber;

  console.log("Entrez 6 chiffres !");

  for (let i = 0; i < 6; i++) {
    usernumber = parseInt(
      await sc.question("Entrez le chiffre n°" + (i + 1) + " : "),
    );
    tabnumber.push(usernumber);
  }

  const tri = triTableau(tabnumber);

  console.log(tri.join(", "));

  sc.close();
}
main();

function triTableau(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    let minIndice = i;

    for (let j = i; j < tableau.length; j++) {
      if (tableau[j] < tableau[minIndice]) {
        minIndice = j;
      }
    }

    if (minIndice !== i) {
      [tableau[i], tableau[minIndice]] = [tableau[minIndice], tableau[i]];
    }
  }
  return tableau;
}
