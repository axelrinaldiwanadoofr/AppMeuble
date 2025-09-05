

export class MeModule
{
    constructor( largeur, hauteur=0, profondeur=0 )
    {
        if( largeur == undefined )
            this.largeur = 0 ;
        else
            this.largeur = largeur ;

        this.hauteur = hauteur ;
        this.profondeur = profondeur ;
    }
}