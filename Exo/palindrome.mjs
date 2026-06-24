import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let phrase;
  let essai = 0;

  console.log(
    "Déclarez une phrase ou un mot et je vous dis si c'est un palindrome",
  );

  do {
    if (essai > 0) {
      console.error("N'oubliez pas le point !!");
    }
    phrase = await sc.question(
      "Veuillez saisir une phrase ou un mot qui se termine par un point : ",
    );
    essai++;
  } while (phrase.substring(phrase.length - 1) != ".");

  let regex = /^[\.]+$/;
  if (phrase.trim() == "." || regex.test(phrase)) {
    console.log("LA CHAINE EST VIDE");
    sc.close();
    return;
  }
  phrase = phrase.substring(phrase.length - 1);

  const estPalindrome = palindrome(phrase);

  if (estPalindrome) {
    console.log("La chaîne de caractères est un palindrome");
  } else {
    console.log("La chaine de caractères n'est pas un palindrome");
  }

  sc.close();
}
main();

function palindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (rev == str) {
    return true;
  } else {
    return false;
  }
}
