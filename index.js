import { MeModule } from "./src/meuble/MeModule";
import { FormMeModule } from "./src/ihm/FormMeModule";
import { Controler } from "./src/mvc/Controler";
import { DrawMeModule } from "./src/ihm/DrawMeModule";
import { Tiroir } from "./src/meuble/Tiroir" ;
import { FormTiroir } from "./src/ihm/FormTiroir";
import { DrawTiroir } from "./src/ihm/DrawTiroir";

let m1 = new MeModule( null, 100, 5, 200 ) ;

console.log( m1 ) ;

let m2 = new MeModule( null, 400 ) ;

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

let ctrl1 = new Controler() ;

ctrl1.addView( new FormMeModule( "FormMeModule1" ) ) ;
ctrl1.addView( new FormMeModule( "FormMeModule2" ) ) ;
ctrl1.addView( new DrawMeModule( "DrawMeModule1")) ;

ctrl1.updateAllViews( m2 ) ;

m2.couleur = "#FF0000" ;
m2.largeur = 40 ;

console.log( m2 ) ;

// Tiroir

let t1 = new Tiroir( null ,100, 30, 50, "#00FFFF", "ronde" ) ;

let ctrl2 = new Controler() ;
ctrl2.addView( new FormTiroir( "FormTiroir1") ) ;
ctrl2.addView( new DrawTiroir( "DrawTiroir1")) ;

ctrl2.updateAllViews( t1 ) ;

Controler.startUpdating() ;

let ctrl3 = new Controler( "toto") ;

Controler.removeControler( "toto" ) ;



