import { MeModule } from "./src/meuble/MeModule";
import { FormMeModule } from "./src/ihm/FormMeModule";

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


//alert( m2.largeur ) ;

console.log( m2 ) ;

let form1 = new FormMeModule( "FormMeModule1" ) ;
form1.updateForm( m2 ) ;

let form2 = new FormMeModule( "FormMeModule2" ) ;
form2.updateForm( m2 ) ;

m2.couleur = "#FF0000" ;
m2.largeur = 40 ;

console.log( m2 ) ;




