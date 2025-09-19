
export class View
{
    constructor()
    {
        this.modele = null ;
    }

    updateView( modele )
    {
        if( modele != undefined )
            this.modele = modele ;
    }

    updateModele()
    {

    }

    // Affiche un message d'erreur
    onError( message )
    {

    }
}