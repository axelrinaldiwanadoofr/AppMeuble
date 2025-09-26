
import {FormMeModule} from "./FormMeModule"

export class FormTiroir extends FormMeModule
{
    constructor( idForm, template="src/ihm/FormTiroir_.html" )
    {
        super( idForm, template ) ;
    }

    updateView( modele )
    {
        let result = super.updateView( modele ) ;

        this.updateInputElement( "poignee") ;
        this.updateInputElement( "poigneecouleur") ;

        return result ;
    }
}
