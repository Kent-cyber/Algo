import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let tabage = []; // tableau des âges
  let userNumber;
  let totalyoung = 0; // compteur de personnes de moins de 20 ans
  let totaltwenty = 0; // compteur de personnes qui ont 20 ans
  let totalold = 0; // compteur de personnes de plus de 20 ans

  console.log(
    "Entrez 20 différents âges pour trouver le nombre total de moins de 20 ans.",
  );
  for (let i = 0; i < 20; i++) {
    userNumber = parseInt(
      await sc.question("Entrez l'âge n°" + (i + 1) + " : "),
    );
    // userNumber = Math.floor(Math.random() * 77) + 7;
    tabage.push(userNumber);
    if (tabage[i] < 20) { // Ajoute au compteur en fonction de l'âge donné
      totalyoung++;
    } else if (tabage[i] == 20) {
      totaltwenty++;
    } else {
      totalold++;
    }
  }

  console.log(tabage);

  if (totalold == 20) {
    console.log("TOUTES LES PERSONNES ONT PLUS DE 20 ANS");
  } else if (totalyoung == 20) {
    console.log("TOUTES LES PERSONNES ONT MOINS DE 20 ANS");
  } else {
    console.log(
      `Il y a :\n-${totalyoung} personnes de moins de 20 ans.\n-${totaltwenty} personnes qui ont 20 ans.\n-${totalold} personnes de plus de 20 ans`,
    );
  }

  sc.close();
}
main();
