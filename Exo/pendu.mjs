import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let essais = 0;
  let mot;
  let regex = /^[a-zA-ZÀ-ÿ]{5,}$/;

  do {
    mot = await sc.question("Entrez le mot à trouver (minimum 5 lettres) : ");
  } while (!regex.test(mot));
  mot = mot.toUpperCase();

  let motMasque = mot[0] + "-".repeat(mot.length - 2) + mot[mot.length - 1]; // Création de la variable du mot masqué
  console.clear();

  console.log("Mot à deviner : " + motMasque);
  console.log("Vous avez 6 essais pour trouver le mot.");

  let lettresProposees = [];

  while (motMasque !== mot && essais < 6) {
    // Début du jeu de pendu
    let lettre;
    do {
      lettre = await sc.question("Proposez une lettre : ");
    } while (!/^[a-zA-ZÀ-ÿ]$/.test(lettre) || lettre.length !== 1);

    lettre = lettre.toUpperCase();

    if (lettresProposees.includes(lettre)) {
      // Si l'utilisateur a déjà trouvé la lettre et donc évité de le pénaliser
      console.log("Cette lettre a déjà été proposée !");
      continue;
    }

    lettresProposees.push(lettre);

    let nouveaumot = "";

    for (let i = 0; i < mot.length; i++) {
      if (mot[i] === lettre) {
        // Si la lettre est dans le mot ajoute dans la variable motTrouve
        nouveaumot += lettre;
      } else {
        nouveaumot += motMasque[i];
      }
    }

    if (nouveaumot === motMasque) {
      essais++;
      console.log(
        "Lettre absente ! Réessayez ! Essais restants : " + (6 - essais),
      );
    } else {
      motMasque = nouveaumot;
      console.log("Bien joué !");
    }

    console.log("Lettres proposées : " + lettresProposees.join(", "));
    console.log("Mot : " + motMasque);
  }

  if (motMasque === mot) {
    // Résultat de la partie
    console.log("Bravo ! Vous avez trouvé le mot : " + mot);
  } else {
    console.log("Perdu ! Le mot était : " + mot);
  }

  sc.close();
}
await main();
