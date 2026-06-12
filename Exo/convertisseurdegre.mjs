import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  const ZERO_ABSOLU_C = -273.15;
  const ZERO_ABSOLU_F = -459.67;

  console.log("Programme de conversion Celsius <-> Fahrenheit");

  let numberunite = await sc.question(
    "Saisissez le nombre et l'unité de température (C ou F après un espace du nombre) : ",
  );

  const split = numberunite.split(" ");

  let nb = parseFloat(split[0]);
  if (isNaN(nb)) {
    console.error("Erreur : la valeur doit être un nombre.");
    sc.close(); return;
  }

  let temp = split[1];
  if (temp.toUpperCase() !== "C" && temp.toUpperCase() !== "F") {
    console.error("Erreur : l'unité de température doit être C ou F.");
    sc.close(); return;
  }

  if (temp.toUpperCase() == "C" && nb < ZERO_ABSOLU_C) {
    console.error(
      `Erreur : impossible d'avoir moins de ${ZERO_ABSOLU_C}°C (zéro absolu).`,
    );
    sc.close();
    return;
  } else if (temp.toUpperCase() == "F" && nb < ZERO_ABSOLU_F) {
    console.error(
      `Erreur : impossible d'avoir moins de ${ZERO_ABSOLU_F}°F (zéro absolu).`,
    );
    sc.close();
    return;
  }
  
  console.log(numberunite.toUpperCase());

  if (temp.toUpperCase() == "C") {
    let fahrenheit = celsiusToFahrenheit(nb);
    console.log(`${nb}°C = ${fahrenheit.toFixed(1)}°F`);
  } else if (temp.toUpperCase() == "F") {
    let celsius = fahrenheitToCelsius(number);
    console.log(`${nb}°F = ${celsius.toFixed(1)}°C`);
  }

  sc.close();
}
main();

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
