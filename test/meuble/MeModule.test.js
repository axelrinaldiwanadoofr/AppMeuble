
import { MeModule } from "../../src/meuble/MeModule";

describe( "MeModule test sur les valeurs d'attibut", function()
{
    let m1 = new MeModule( 100, 350, 50 ) ;


    test( "Largeur doit être >= à 30 et =< à 120", function()
    {
        expect( m1.largeur ).toBeGreaterThanOrEqual( 30 ) ;
        expect( m1.largeur ).toBeLessThanOrEqual( 120 ) ;
    } );

    test( "Hauteur doit être >= à 10 et =< à 300", function()
    {
        expect( m1.hauteur ).toBeGreaterThanOrEqual( 10 ) ;
        expect( m1.hauteur ).toBeLessThanOrEqual( 300 ) ;
    } ) ;

    test( "Profondeur doit être >= à 30 et =< à 120", function()
    {
        expect( m1.profondeur ).toBeGreaterThanOrEqual( 30 ) ;
        expect( m1.profondeur ).toBeLessThanOrEqual( 120 ) ;
    } ) ;

}) ;