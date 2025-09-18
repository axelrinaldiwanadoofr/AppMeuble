import { MeModule } from "./src/meuble/MeModule.js";
import { FormMeModule } from "./src/ihm/FormMeModule.js";

/*
let m1 = new MeModule( 100, 5, 200 ) ;

console.log( m1 ) ;

let m2 = new MeModule( 400 ) ;

console.log( m2 ) ;

try
{
    // On fait la mise à jour
    m2.largeur = 500 ;
} 
catch( messageErreur )
{
    // On traite l'erreur
    console.error( messageErreur ) ;
}


alert( m2.largeur ) ;

console.log( m2 ) ;
*/

let _MEModule = new MeModule() ;
let formMEModule1 = new FormMeModule( "FormMeModele1", _MEModule ) ;

formMEModule1.updateThisForm(_MEModule);

let formMEModule2 = new FormMeModule( "FormMeModele2", _MEModule ) ;

formMEModule2.updateThisForm(_MEModule);

_MEModule.largeur = 100 ;
_MEModule.hauteur = 150 ;
_MEModule.profondeur = 60 ;

console.log( _MEModule ) ;






