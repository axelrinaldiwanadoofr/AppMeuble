
export class View
{
    constructor()
    {
        this.modele = null ;
    }

    async updateView( modele )
    {
        if( modele != undefined )
            this.modele = modele ;
        return true ;
    }

    updateModele()
    {

    }

    // Affiche un message d'erreur
    onError( message )
    {

    }
}