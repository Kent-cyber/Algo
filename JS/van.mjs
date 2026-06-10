import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  let montant; // montant de l'investissement de départ à saisir par l'utilisateur
  let taux = 0.08; // taux d'actualisation
  let recettes = []; // recettes nettes prévues pour l'exploitation à saisir par l'utilisateur
  let vr = 0; // valeur résiduelle de revente de l’investissement
  let annee; // nombre d'années définies par l'utilisateur

  console.log(
    "Vous envisagez de réaliser un investissement avec des cashflow sur un nombre d'années que vous définissez",
  );

  do {
    montant = parseFloat(
      await sc.question("Veuillez rentrer l'investissement : "),
    );

  } while (isNaN(montant) || montant < 0);

  annee = parseInt(await sc.question("Veuillez saisir le nombre d'année : "));

  for (let i = 0; i < annee; i++) {
    let cashflow = parseFloat(
      await sc.question(`Veuillez entrer le cashflow numéro ${i + 1} : `),
    );
    recettes.push(cashflow);
  }

  vr = parseFloat(
    await sc.question(
      `Veuillez saisir la valeur résiduelle de l'investissement : `,
    ),
  );

  const van = calculVan(montant, taux, recettes, vr);

  /* let van = -montant;

  for (let i = 0; i < recettes.length; i++) {
    van += recettes[i] / Math.pow(1 + taux, i + 1);
  }

  van += vr / Math.pow(1 + taux, recettes.length + 1); */

  console.log("VAN = " + van.toFixed(2) + " €");

  sc.close();
}

function calculVan(investissementInitial, taux, flux, vr) {
  let van = -investissementInitial;

  for (let i = 0; i < flux.length; i++) {
    van += flux[i] / Math.pow(1 + taux, i + 1);
  }
  van += vr / Math.pow(1 + taux, flux.length + 1);

  return van;
}
await main();
