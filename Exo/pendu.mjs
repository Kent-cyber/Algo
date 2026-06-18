import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let essai = 0;
  let mot;
  let lettresProposees = [];

  do {
    mot = await sc.question("Entrez le mot à trouver (minimum 5 letrres) : ");
  } while (mot.length < 5 || mot.trim() === "");
  mot = mot.toUpperCase();

  let motMasque = mot[0]; // Création de la variable du mot masqué

  for (let i = 0; i < mot.length - 1; i++) {
    // Complète le reste du mot par des tirets
    motMasque += "-";
  }

  motMasque += mot[mot.length - 1]; // Puis affiche la dernière lettre du mot
  console.clear();

  console.log("Mot à deviner : " + motMasque);
  console.log("Vous avez 6 essais pour trouver le mot.");

  while (motMasque !== mot && essai < 6) {
    // Début du jeu de pendu
    let lettre;
    do {
      lettre = await sc.question("Proposez une lettre : ");
    } while (!/^[a-zA-Z]$/.test(lettre));

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
      essai++;
      console.log(
        "Lettre absente ! Réessayez ! Essai restants : " + (6 - essai),
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
main();
