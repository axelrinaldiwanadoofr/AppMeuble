import { MeModule } from "./src/meuble/MeModule";

let m1 = new MeModule( 100, 5, 200 ) ;

console.log( m1 ) ;

let m2 = new MeModule() ;

console.log( m2 ) ;

m2.largeur = 500 ;

alert( m2.largeur ) ;

console.log( m2 ) ;




