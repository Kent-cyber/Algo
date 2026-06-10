import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";
async function main() {
    const sc = new createInterface({input, output}); // Créer le Scanner

    let userAnswer = await sc.question("Est-ce qu'il va faire beau aujourd'hui (oui/non) ?");

    if (userAnswer == "oui") {
        console.log("Je prends mon vélo");
        userAnswer = await sc.question("Est-ce que mon vélo est fonctionnel (oui/non) ?");

        if (userAnswer == "oui") {
            console.log("Je me balade à vélo");

        } else if (userAnswer == "non") {
            console.log("Je me rend au garage");
            userAnswer = await sc.question("Est-ce que les réparations sont immédiats (oui/non) ?");

            if (userAnswer == "oui") {
                console.log("Je me balade à vélo");

            } else if (userAnswer == "non") {
                console.log("Je décide de balader à pied jusqu'à l'étang pour cueillir des joncs");

            } else {
                console.log("Je ne sais pas quoi faire donc je décide d'aider le garagiste");
            }

        } else {
            console.log("Je n'arrive pas à savoir s'il est en bon état donc je ne sais pas quoi faire");
        }

    } else if (userAnswer == "non") {
        console.log("Je me consacre à une journée lecture");
        userAnswer = await sc.question("Est-ce que j'ai Game of Thrones (oui/non) ?");

        if (userAnswer == "oui") {
            console.log("Je lis Game of Thrones confortablement dans mon fauteuil");

        } else if (userAnswer == "non") {
            console.log("Je me rends à la bibliothèque");
            userAnswer = await sc.question("Est-ce qu'elle possède Game of Thrones ?");

            if (userAnswer == "oui") {
                console.log("Je prends le livre et je retourne à la maison pour lire confortablement dans mon fauteuil");

            } else if (userAnswer == "non") {
                console.log("Je prends un roman policier à la place et je retourne à la maison pour le lire confortablement dans mon fauteuil");

            } else {
                console.log("Je ne sais pas quoi faire à la bibliothèque donc je retourne à la maison pour rien faire")
            }
        }

    } else {
        console.log("Je ne sais pas quoi faire");
    }
        
    sc.close();
}
main();