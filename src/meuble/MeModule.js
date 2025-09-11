

export class MeModule
{
    constructor( largeur=30, hauteur=10, profondeur=30 )
    {
        if( largeur < 30 )
            this._largeur = 30 ;
        else if( largeur > 120 )
            this._largeur = 120 ;
        else
            this._largeur = largeur ;

        if( hauteur < 10 )
            this.hauteur = 10 ;
        else if( hauteur > 300 )
            this.hauteur = 300 ;
        else
            this.hauteur = hauteur ;

        if( profondeur < 30 )
            this.profondeur = 30 ;
        else if( profondeur > 120 )
            this.profondeur = 120 ;
        else
            this.profondeur = profondeur ;
    }

    // getter pour la propriété largeur
    get largeur()
    {
        return this._largeur ; // retourne la valeur de l'attribut _largeur
    }

    set largeur( valeur )
    {
        if( valeur < 30 )
            this._largeur = 30 ;
        else if( valeur > 120 )
            this._largeur = 120 ;
        else
            this._largeur = valeur ;
    }
}