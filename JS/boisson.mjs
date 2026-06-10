import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  const boissons = [
    // Liste des boissons et ses prix
    ["Café", 1.5],
    ["Thé", 1.5],
    ["Eau chaude", 1.1],
    ["Chocolat chaud", 1.2],
  ];
  let userAnswer;
  let gobelets = 10;

  if (gobelets == 0) {
    console.log("Plus de gobelets - Machine hors service");
    sc.close();
    return;
  }

  console.log("Veuillez sélectionnez une boisson parmi la liste :");
  for (let i = 0; i < boissons.length; i++) {
    // Déroule la liste
    let boisson = boissons[i][0];
    let prize = boissons[i][1].toFixed(2); // Deux chiffres après la virgule

    console.log(i + 1 + " : " + boisson + " : " + prize + " €");
  }
  console.log("0 : Annuler");

  do {
    userAnswer = parseInt(
      await sc.question(
        "Entrez votre choix en tapant le chiffre correspondant : ",
      ),
    );
    if (userAnswer == 0) {
      console.log("Commande annulée");
      sc.close();
      return;
    }
  } while (
    isNaN(userAnswer) || // si l'utilisateur ne rentre pas un chiffre
    userAnswer < 0 ||
    userAnswer > boissons.length
  );

  const boissonChoisie = boissons[userAnswer - 1]; // la réponse est stocké dans une variable

  console.log(`Votre choix : ${boissonChoisie[0]}`);
  console.log("Prix à payer : " + boissonChoisie[1].toFixed(2) + " €");

  let sommeIntroduite = 0; // Variable de la monnaie introduite dans la machine

  do {
    let piece = parseFloat(
      (
        await sc.question(
          "Montant inséré : " +
            sommeIntroduite.toFixed(2) +
            " € - Veuillez rentrer la monnaie : ",
        )
      ).replace(",", "."),
    );
    if (!isNaN(piece) || piece > 0) {
      // si ce n'est pas un nombre et que l'utilisateur ne donne pas de pièces
      sommeIntroduite += piece;
    } else {
      console.log("Veuillez entrer un nombre valide !");
    }
  } while (sommeIntroduite < boissonChoisie[1]); // Tant que la monnaie introduite est inférieur au prix de la boisson

  let rendu = sommeIntroduite - boissonChoisie[1];

  if (rendu > 0) {
    console.log("Monnaie rendu : " + rendu.toFixed(2) + " €");
  }
  gobelets--;

  console.log("Merci, bonne dégustation !");
  console.log("Gobelets restants : " + gobelets);

  sc.close();
}
main();
