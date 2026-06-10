/* Exercice 1.5 : 
Calcul d’intérêts Lire la somme initiale S placée sur un compte, l'intérêt i offert par la banque et le nombre N d'années de placement de la somme S. Calculez la valeur acquise par la somme S placée pendant N années : 
▪ avec un intérêt simple : S ( 1 + N * i ) 
▪ avec un intérêt composé : S ( 1 + i )N */

import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  let montant;
  let taux;
  let time;
  let n;

  console.log("Bonjour et bienvenue à la banque");
  montant = parseInt(await sc.question("Veuillez placer votre montant : "));
  taux = parseInt(await sc.question("Taux annuel donné par la banque : "));
  time = parseInt(await sc.question("Pour quelle durée en année : "));
  n = parseInt(
    await sc.question("nombre de fois que l'intérêt est composé par an : "),
  );

  const interetsimple = montant * (taux / 100) * time;
  const interetcompose = montant * Math.pow(1 + taux / 100 / n, n * time);
  const total = montant + interetsimple;
  const total2 = interetcompose;

  console.log("Capital total acquis avec intérêt simple : " + total);
  console.log(
    "Capital total acquis avec intérêt composé : " + total2.toFixed(2),
  );

  sc.close();
}
main();
