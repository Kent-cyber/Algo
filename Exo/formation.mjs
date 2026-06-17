import { createInterface } from "node:readline/promises"; // Importer le Scanner
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const sc = createInterface({ input, output });

  var nosformations = {};

  nosformations["ABC_I"] = 24;
  nosformations["ADRN"] = 8;
  nosformations["TIP"] = 20;
  nosformations["TRI"] = 7;
  nosformations["TSSR"] = 22;
  nosformations["AIS"] = 6;
  nosformations["AEC"] = 5;
  nosformations["DWWM"] = 21;
  nosformations["CDA"] = 23;
  nosformations["ISI"] = 4;

  nosformations.sort();
  // console.log(nosformations);
  console.table(nosformations);
  // console.log(afficherchaine(nosformations));

  sc.close();
}

function afficherchaine(objet) {

      let tabaffichage="[";
    for (const key in objet) {
        tabaffichage+= key+ ':' +objet[key]+" ,";   
    }  
    tabaffichage=tabaffichage.substring(0,tabaffichage.length-1);        
    tabaffichage+="]";
    return tabaffichage;
}
await main();
