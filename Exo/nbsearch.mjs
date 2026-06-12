import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  let tabnumber = [2, 4, 10, 70, 74, 96];
  let userNumber;

  console.log(
    "Veuillez saisir un nombre et la machine te dit s'il existe dans son tableau",
  );

  do {
    userNumber = parseInt(await sc.question("Saisissez le nombre : "));
  } while (isNaN(userNumber) || userNumber < 0);

  if (tabnumber.includes(userNumber)) {
    console.log(`${userNumber} existe dans son tableau`);
  } else {
    console.log("404 Not found");
  }

  sc.close();
}
main();
