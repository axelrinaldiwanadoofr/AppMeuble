
import {MeModule} from "../meuble/MeModule"
import {FormView} from "../mvc/FormView"

export class FormMeModule extends FormView
{
    // idForm: Identifiant de la balise HTML contenant le formulaire
    constructor( idForm, template="src/ihm/FormMeModule_.html" )
    {
        super( idForm, template ) ;
    }

    updateView( modele )
    {
        super.updateView( modele ) ; // Appel de updateView de la classe mère View

        this.updateInputElement( "largeur" )
        this.updateInputElement( "hauteur" ) ;
        this.updateInputElement( "profondeur" ) ;
        this.updateInputElement( "couleur" ) ;

        this.updateInputElement( "volume", ()=>
        {
            return this.modele.largeur * this.modele.hauteur * this.modele.profondeur;
        }) ;
    }

    updateModele()
    {
        this.updateModeleFromInputElement( "largeur", "integer" ) ;
        this.updateModeleFromInputElement( "hauteur", "integer" ) ;
        this.updateModeleFromInputElement( "profondeur", "integer" ) ;
        this.updateModeleFromInputElement( "couleur" ) ;
    }

    onError( message )
    {
        alert( "FormMeModule: erreur: " + message ) ;
    }
}