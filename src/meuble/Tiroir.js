
import {MeModule} from "./MeModule"

export class Tiroir extends MeModule
{
    constructor( largeur=80, hauteur=20, profondeur=50, couleur="#000000", poignee="ronde", couleurpoignee="#00FF00" )
    {
        super( largeur, hauteur, profondeur, couleur ) ;

        this._poignee = "ronde" ;
        this.couleurpoignee = couleurpoignee ;

        try
        {
            this.poignee = poignee ;
        }
        catch( message )
        {
            throw( message ) ;
        }
    }

    get poignee()
    {
        return this._poignee ;
    }

    set poignee( valeur )
    {
        if( valeur == "ronde" || valeur == "rectangulaire" )
        {
            this._poignee = valeur ;
        }
        else
        {
            throw( "La poignée d'un tiroir doit être ronde ou rectangulaire" ) ;
        }
    }

    getHash()
    {
        return super.getHash() + this._poignee + this.couleurpoignee ;
    }


}