import { MeModule } from "./src/meuble/MeModule";

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




