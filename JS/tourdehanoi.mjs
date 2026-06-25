import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {

    let nb = 5;
    console.log(calculNbCoups(nb));
    const move = tourDeHanoi(nb, "A", "B", "C");
    console.log(move.join("\n"));

}
await main();

function calculNbCoups(n) {
    return 2 ** n - 1;
}

function tourDeHanoi(n, A, B, C, move = []) {
    if (n === 1) {
        move.push(`Déplacer le disque 1 de ${A} vers ${C}`);
        return move;
    }
    tourDeHanoi(n-1, A, C, B, move);
    move.push(`Déplacer le disque ${n} de ${A} vers ${C}`);
    tourDeHanoi(n-1, B, A, C , move);
    return move;
}