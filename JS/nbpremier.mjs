import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output }); // Créer le Scanner

  let number;

  do {
    number = parseInt(
      await sc.question(
        "Entrez un nombre et je vous dis si c'est un nombre premier : ",
      ),
    );
  } while (isNaN(number) || number < 0);

  if (number < 2) {
    // 1 est évidemment pas un nombre premier
    console.log(number + " n'est pas un nombre premier");
    sc.close();
    return;
  }

  for (let i = 2; i < number; i++) {
    // Puisque un nombre premier est forcément divisible avec 1 et lui-même
    // vérifie dans la boucle si les autres nombres entre 2 et le nombre choisi a d'autres nombres divisibles
    if (number % i == 0) {
      console.log(number + " n'est pas un nombre premier");
      sc.close();
      return;
    }
  }

  console.log(number + " est un nombre premier");

  sc.close();

  // Correction version 1
  
  /* const sc = new createInterface({ input, output });
  var compteur = 0;
  let nb='';
  do {
    if (compteur > 0) {
      console.log("❌ Erreur : ce n'est pas un nombre entier positif! ");
    }
    compteur++;
    nb = parseInt(
      await sc.question(" veuillez saisir un nombre entier positif"),
    );
  } while (isNaN(nb) || nb<0);
   let diviseur=2;
   while (nb%diviseur!=0 && diviseur<nb) {
  diviseur++;  
   }

   if (diviseur<nb) {
     console.log(`❌ Le nombre : ${nb} n'est pas premier`);
   }else
   {

 console.log(` ✅ Bravo ! Le nombre : ${nb} est premier`);
   }
 // console.log("\n" + nb);

  sc.close(); */

  // Correction 2

  /* const sc = new createInterface({ input, output });
let N=parseInt( await sc.question("Entrez un nombre entier positif supérieur à 1!"));
let estpremier=true;
let  diviseur=0;
for (let i = 2; i <=Math.sqrt(N) ; i++) {
    if (N%i==0) {
        estpremier=false;
        diviseur=i;
        break;
    }
}
if (!estpremier) {
console.log(` ❌le nombre : ${N} n'est pas un nombre premier car il est disvible par ${diviseur}`) ;   
} else {
   console.log(`✅ le nombre : ${N} est  premier`) ;    
}

sc.close(); */
}
main();
