ALGORITHME Distributeur_Cafe
```js
VARIABLES

    FLOAT   : prix_cafe // Prix en €
    INT     : nb_gobelets
    FLOAT   : argent_insere
    FLOAT   : monnaie_rendu

    BOOL    : capteur_gobelet // gobelet coincé/mal positionné
    BOOL    : etat_machine // Machine HS

    STR : choixUtilisateur
    FLOAT : prixChoixUtilisateur

    TABLEAU:
    [
        STR     : boisson
        BOOL    : disponible
        FLOAT   : prix
    ] : tab_boissons // contient les boissons, leur dispo et leur prix

DEBUT

    // Vérification des stocks
    TRY
        FONCTION: verifierLesStocks(tab_boissons)
        FONCTION: choisirBoisson(choixUtilisateur, prixChoixUtilisateur)
    CATCH (Error)
        NOTIFIER Error.message
        AFFICHER "Machine hors service"
        EXIT


FIN
```

### Annexe: Fonctions:
```js

VARS:
    TABLEAU:
    [
        STR: nom
        INT: quantité
    ] : tab_stocks // contient les ingrédients, gobelets, pièces...

FONCTION verifierLesStocks(tab_boissons)
DEBUT
    POUR CHAQUE ligne DANS tab_stocks
        SI ligne[quantité] <= quantité * 10/100
            THROW Error("erreur verfication des stocks: ligne " + ligne[nom])

    POUR CHAQUE boisson DANS tab_boissons
FIN
```

```js
FONCTION choisirBoisson(choixUtilisateur, prixChoixUtilisateur)
DEBUT
    AFFICHER "Veuillez choisir boisson"
    choixUtilisateur = LIRE

FIN
```